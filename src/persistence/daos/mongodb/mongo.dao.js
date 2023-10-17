export default class MongoDao {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    return await this.model.find();
  }

  async getById(id) {
    return await this.model.findById(id);
  }

  async create(obj) {
    return await this.model.create(obj);
  }

  async update(id, obj) {
    return await this.model.updateOne({ _id: id }, obj);
  }

  async delete(id) {
    return await this.model.updateOne({ _id: id }, { active: false });
  }
}
