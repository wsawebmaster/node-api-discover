const url = "http://localhost:5500/api"

function getUsers() {
  axios.get(url)
  .then(response => {
    apiResult.textContent = JSON.stringify(response.data)
  })
  .catch(error => console.error(error))
}

function addNewUser(newUser) {
  axios.post(url, newUser)
    .then(response => {
      console.log(response)
    })
    .catch(error => console.error(error))
}

function getUser(id) {
  axios.get(`${url}/${id}`)
    .then(response => {
      userName.textContent = response.data.name
      userCity.textContent = response.data.city
      userID.textContent = response.data.id
      userAvatar.src = response.data.avatar
    })
    .catch(error => console.error(error))
}

function updateUser(id, userUpdated) {
  axios
    .put(`${url}/${id}`, userUpdated)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));
}

function deleteUser(id) {
  axios.delete(`${url}/${id}`)
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
}

  const userUpdated = {
    name: "Mayk Brito",
    avatar: "https://avatars.githubusercontent.com/u/6643122?v=4",
    city: "Paraná",
  };

const newUser = {
  name: "Olivia Zars",
  avatar: "https://picsum.photos/200/300",
  city: "Rio de Janeiro",
};

getUser(2);
getUsers()
// addNewUser(newUser)
updateUser(2, userUpdated)
deleteUser(4)
