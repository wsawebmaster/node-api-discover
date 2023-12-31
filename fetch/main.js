const url = "http://localhost:5500/api"

function getUsers() {
  fetch(url)
  .then(response => response.json())
  .then(data => renderApiResult.textContent = JSON.stringify(data))
  .catch(error => console.error(error))
}

function getUser(id) {
  fetch(`${url}/${id}`)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name
    userCity.textContent = data.city
    userAvatar.src = data.avatar
  })
  .catch(error => console.error(error))
}

function addUser(newUser) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

const newUser = {
  name: "Olivia Zar",
  avatar: "https://picsum.photos/200/300",
  city: "Rio do Sul"
}

function updateUser(updatedUser, id) {
  fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch((error) => console.error(error));
  }

  const updatedUser = {
    name: "Mayk Brito",
    avatar: "https://avatars.githubusercontent.com/u/6643122?v=4",
    city: "Paraná"
};

function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => (alertApi.textContent = data))
    .catch((error) => console.error(error));
}


// addUser(newUser)

updateUser(updatedUser, 2)

deleteUser(6)
getUsers()
getUser(1)
