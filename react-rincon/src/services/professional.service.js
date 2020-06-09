import http from "../http-common";

class ProfessionalDataService {

  getAll() {
    return http.get("/professional/list");
  }

  get(id) {
    return http.get(`/professional/${id}`);
  }

  create(data) {
    return http.post("/professional/", data);
  }

  update(id, data) {
    return http.put(`/professional/${id}`, data);
  }

  delete(id) {
    return http.delete(`/professional/${id}`);
  }
}

export default new ProfessionalDataService();