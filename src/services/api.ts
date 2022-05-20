import { http } from "./config";

export default {
  getAll: () => {
    return http.get(`pokemon?limit=32`);
  },
  getOne: (url: string) => {
    return http.get(`${url}`);
  }
};
