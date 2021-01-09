const getAll = () => {
    return http.get("/cases");
};

const get = _id => {
    return http.get(`/cases/${_id}`)
};
