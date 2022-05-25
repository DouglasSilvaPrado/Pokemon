import { http } from "./config";

export default {
  getAll: () => {
    return http.get(`pokemon?limit=152`);
  },
  getOne: (url: string) => {
    return http.get(`${url}`);
  },
  getById: (id: number) => {
    return http.get(`pokemon/${id}`);
  },
 

};
