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
  getTeams: () =>{
    return http.get(`http://localhost:8080/teams`);
  },
  saveTeam: (team: any) =>{
    return http.post(`http://localhost:8080/teams`, team);
  },
  deleteTeam: (id: number) =>{
    return http.delete(`http://localhost:8080/teams/${id}`);
  }

};
