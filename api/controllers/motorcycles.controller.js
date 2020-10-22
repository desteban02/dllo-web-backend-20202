const methods = {
  getMotorcycles(request, response) {
    response.send("Endpoint GET MOTORCYCLES");
  },
  saveMotorcycles(request, response) {
    response.send("Endpoint POST MOTORCYCLES");
  },
  updateMotorcycles(request, response) {
    response.send("Endpoint PUT MOTORCYCLES");
  },
  deleteMotorcycles(request, response) {
    response.send("Endpoint DELETE MOTORCYCLES");
  },
};

module.exports = methods;
