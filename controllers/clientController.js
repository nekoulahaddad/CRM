import { Customer } from "../models/customers/customer.js";
import { clientsData } from "../data/clients.js";

export const insertClients = async (req, res) => {
  try {
    const clients = await Customer.insertMany(clientsData);
    res.status(200).send({
      status: "ok",
      message: clients,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error.message,
    });
  }
};

export const getClients = async (req, res) => {
  try {
    const clients = await Customer.find({});

    if (!clients) {
      return res.status(404).send({
        status: "error",
        message: "Клиенты не найдены",
      });
    }
    res.status(200).send({
      status: "ok",
      message: clients,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error,
    });
  }
};

export const getClient = async (req, res) => {
  try {
    const { id } = req.params;

    const client = await Customer.findById({ _id: id });

    if (!client) {
      return res.status(404).send({
        status: "error",
        message: "Клиент не найден",
      });
    }

    res.status(200).send({
      status: "ok",
      message: client,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error,
    });
  }
};

export const editClient = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = req.body;
    const client = await Customer.updateOne({ _id: id }, data);
    res.status(200).send({
      status: "ok",
      message: "информация о клиенте успешно изменена",
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error,
    });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;

    const client = await Customer.findById({ _id: id });
    if (!client) {
      res.status(404).send({
        status: "error",
        message: "клиент не найден",
      });
    }
    await client.remove();
    res.status(200).send({
      status: "ok",
      message: "Клиент успешно удалён",
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: error,
    });
  }
};
