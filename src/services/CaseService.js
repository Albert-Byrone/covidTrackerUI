import http from "../http-common";

const getAll = () => {
    return http.get("/cases");
};

const get = _id => {
    return http.get(`/cases/${_id}`)
};

const create = data => {
    return http.post("/cases", data);
};

const update = (_id, data) => {
    return http.patch(`cases/${_id}`, data);
};

const remove = id => {
    return http.delete(`cases/${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
};