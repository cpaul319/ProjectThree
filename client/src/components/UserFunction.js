import axios from "axios";

export const register = newUser =>{

return axios
.post('users/register',{
username: newUser.username,
firstName: newUser.firstName,
lastName: newUser.lastName,
password: newUser.password,
email: newUser.email,
address: newUser.address,
city: newUser.city,
state: newUser.state,
zip: newUser.zip,
creditCardNumber: newUser.creeditCardNumber,
expDate: newUser.expDate,
cvv: newUser.cvv,
swag1name: newUser.swag1name,
swag1quantity: newUser.swag1quantity,
swag2name: newUser.swag2name,
swag2quantity: newUser.swag2quantity,
swag3name: newUser.swag3name,
swag3quantity: newUser.swag3quantity,
swag4name: newUser.swag4name,
swag4quantity: newUser.swag4quantity,
swag5name: newUser.swag5name,
swag5quantity: newUser.swag5quantity
})
.then(res =>{
console.log("registered");
})


}