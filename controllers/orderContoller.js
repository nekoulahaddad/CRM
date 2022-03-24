import { Order } from "../models/order/order.js";
import { Customer } from "../models/customers/customer.js";
import { Shop } from "../models/shop/shop.js";
import { OrderStatus } from "../models/order/status.js";
import { Region } from "../models/location/region.js";
import { ordersData } from "../data/orders.js";

export const insertOrders = async (req, res) => {
  try {
    const customer = await Customer.findOne();
    const customerObject = {
      _id: customer._id,
      name: customer.name,
    };
    const shop = new Shop({
      name: "Auchan",
      subdomain: "Auchan.zumzak.ru",
    });
    const shopObject = {
      _id: shop._id,
      name: shop.name,
    };
    const status = new OrderStatus({
      value: "Доставлен",
      title: "Доставлен",
    });
    const statusObject = {
      _id: status._id,
      value: status.value,
    };
    const region = new Region({
      value: "Москва",
      title: "Москва",
      translations: [],
      country: {
        _id: "44444",
        value: "Россия",
      },
    });
    const regionObject = {
      _id: region._id,
      value: region.value,
    };

    const newOrder = new Order({
      ...ordersData,
      customer: customerObject,
      shop: shopObject,
      status: statusObject,
      region: regionObject,
    });
    console.log(newOrder);

    const orders = await newOrder.save();
    res.status(200).send({
      status: "ok",
      message: orders,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
};

export const getOrders = async (req, res) => {
  let { page, sort_field, sort_direction, limit } = req.query;
  try {
    const orders = await Order.find({})
      .limit(limit)
      .skip(limit * page)
      .sort({ [sort_field]: sort_direction })
      .exec();

    if (!orders) {
      return res.status(404).send({
        status: "error",
        message: "Заказы не найдены",
      });
    }
    const quantity = orders.length;
    res.status(200).send({
      status: "ok",
      message: { orders, total_orders_count: quantity },
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error,
    });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findById({ _id: id });

    if (!order) {
      return res.status(404).send({
        status: "error",
        message: "Заказ не найден",
      });
    }
    await order.remove();

    res.status(200).send({
      status: "ok",
      message: "Заказ успешно удалён",
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error,
    });
  }
};
