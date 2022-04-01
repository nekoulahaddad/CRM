export const endpoints = {
  login: "/admin/login",
  refreshToken: "/admin/refreshToken",
  testAuth: "admin/testAuth",
  getclients: "/client/all",
  getClient: (id) => `/client/get/${id}`,
  deleteClient: (id) => `/client/delete/${id}`,
  getCountries: "/region/getCountries",
  getCities: "/region/getCities",
  getOrders: "/order/all",
};
