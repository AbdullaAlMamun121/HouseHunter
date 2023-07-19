export const saveUserInDB = (phoneNumber,email,password,userRole) => {
    const currentUser = {
        number: phoneNumber,
        email: email,
        password:password,
        role: userRole,
    }

    fetch(`http://localhost:5000/users/${email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    }).then(res => res.json()).then(data => {
        console.log(data)
        window.location.href="/dashboard";
    }).catch(error => {
        console.error('Error saving user:', error);
      });
}

const token = localStorage.getItem('token');
export const saveHousesInDB = (item, email) => {
  const selectedHouses = {
    id:item._id,
    name: item.name,
    address: item.address,
    city: item.city,
    price: item.price,
    bedrooms:item.bedrooms,
    bathrooms:item.bathrooms,
    roomSize:item.roomSize,
    availableDate:item.availableDate,
    email: email,
  };

  fetch('http://localhost:5000/selectedHouses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `bearer ${token}`,
    },
    body: JSON.stringify(selectedHouses),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};

