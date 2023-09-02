export default class Services {
  constructor(dao) {
    this.dao = dao;
  }

  getAll = async () => await this.dao.getAll();

  getById = async () => {
    const item = await this.dao.getById(id);
    if (!item) return false;
    else return item;
  };

  create = async (obj) => {
    const newItem = await this.dao.create(obj);
    if (!newItem) return false;
    else return newItem;
  };

  update = async (id, obj) => {
    const item = await this.dao.getById(id);
    if (!item) return false;
    else return await this.dao.update(id, obj);
  };

  delete = async (id, obj) => {
    const item = await this.dao.getById(id);
    if (!item) return false;
    else return await this.dao.update(id, { ...item, active: false });
  };
}
