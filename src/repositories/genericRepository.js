class GenericRepository {
  constructor(model) {
    this.model = model;
  }
  async getAll() {
    const result = await this.model.findAll();
    return result;
  }

  async getById(id) {
    const result = await this.model.findByPk(id);

    if(!result) {
      throw new Error('Registro não foi encontrado!');
    }
    return result;
  }

  async create(entity) {
    const newEntity = await this.model.create(entity);
    return newEntity;
  }

  async update(id, entity) {
   await this.model.update(entity, {
     where: {
       id: id
     }
   });
   return await this.model.getById(id); 
  }

  async delete(id) {
    await this.getById(id);
    await this.model.destroy({
      where: {
        id: id
      }
    })
  }
}

module.exports = GenericRepository;
