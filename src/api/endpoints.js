export const endpoints = {
  login: "/auth/login",
  refreshToken: "/auth/refreshToken",
  testAuth: "auth/testAuth",
  getclients: "/user/all",
  getClient: (id) => `/user/get/${id}`,
  deleteClient: (id) => `/user/delete/${id}`,
  getCountries: "/region/getCountries",
  getCities: "/region/getCities",
  getOrders: "/order/all",
  getShops:"/shop/all",
  getOrdersByClientID: (id) => `/order/allByClient/${id}`,
};
