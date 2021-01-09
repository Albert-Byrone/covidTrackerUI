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
    return http.put(`cases/${_id}`, data);
};

