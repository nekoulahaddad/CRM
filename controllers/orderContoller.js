import { Order } from "../models/order/order.js";
import { Customer } from "../models/customers/customer.js";
import { Shop } from "../models/shop/shop.js";
import { OrderStatus } from "../models/order/status.js";
import { ordersData } from "../data/orders.js";

export const insertOrders = async (req, res) => {
  try {
    const customer = await Customer.findOne();
    const customerObject = {
      _id: customer._id,
      name: customer.name,
    };
    const shop = await Shop.findOne();
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

    const newOrder = new Order({
      ...ordersData,
      customerObject,
      shopObject,
      statusObject,
    });
    console.log(newOrder);

    const orders = await Order.insertOne(newOrder);
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
  try {
    const orders = await Order.find({});

    if (!orders) {
      return res.status(404).send({
        status: "error",
        message: "Заказы не найдены",
      });
    }
    res.status(200).send({
      status: "ok",
      message: orders,
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
