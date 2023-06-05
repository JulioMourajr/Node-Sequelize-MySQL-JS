class GenericRepository {
  constructor(id, model) {
    this.id = id;
    this.model = model;

  }
  getAll = async () => {
    const result = await this.model.findAll();
    return result;
  }

  getById = async (id) =>{
    const result = await this.model.findByPk(id);

    if(!result) {
      throw new Error('Registro não foi encontrado!');
    }
    return result;
  }

  create = async (entity) => {
    const newEntity = await this.model.create(entity);
    return newEntity;
  }

  update = async (id, entity) => {
   await this.model.update(entity, {
     where: {
       [this.id]: id
     }
   });
   return await this.getById(id); 
  }

  delete = async (id) => {
    await this.getById(id);
    await this.model.destroy({
      where: {
        [this.id]: id
      }
    })
  }
}

module.exports = GenericRepository;
