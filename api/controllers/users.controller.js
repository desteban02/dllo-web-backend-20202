const getUser = (request, response) => {
  response.send("Endpoint GET USERS");
};

const saveUser = (request, response) => {
  response.send("Endpoint POST USERS");
};

const updateUser = (request, response) => {
  let id = request.params.id;
  response.send("Endpoint PUT USERS " + id );
};

const deleteUser = (request, response) => {
  response.send("Endpoint DELETE USERS");
};

module.exports = { getUser, saveUser, updateUser, deleteUser };
