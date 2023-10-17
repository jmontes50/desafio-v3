export default class ClientDTOResponse {
  constructor({
    id,
    name,
    email,
    telephone,
    isVerified,
    cart,
    locations,
    active,
  }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.telephone = telephone;
    this.isVerified = isVerified;
    this.cart = cart;
    this.locations = locations;
    this.active = active;
  }
}
