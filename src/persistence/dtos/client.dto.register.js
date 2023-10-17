export default class ClientDTORegister {
  constructor({
    name,
    email,
    telephone,
    password,
    isVerified,
    cart,
    locations,
    active,
  }) {
    this.name = name;
    this.email = email;
    this.telephone = telephone;
    this.password = password;
    this.isVerified = isVerified;
    this.cart = cart;
    this.locations = locations;
    this.active = active;
  }
}
