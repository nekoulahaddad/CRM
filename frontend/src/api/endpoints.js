export const endpoints = {
  login: "/admin/login",
  refreshToken: "/admin/refreshToken",
  testAuth: "admin/testAuth",
  getclients: "/client/all",
  getClient: (id) => `/client/get/${id}`,
  deleteClient: (id) => `/client/delete/${id}`,
  getOrders: "/order/all",
  //editTask: (id) => `/edit/${id}`,
};
