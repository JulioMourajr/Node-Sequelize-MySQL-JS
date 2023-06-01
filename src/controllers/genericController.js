class GenericController {
  constructor(repository) {
    this.repository = repository;
  }

  async getAll(req, res) {
    const result = await this.repository.getAll();
    res.status(200).json(result);   
  }

  async getById(req, res) {
    const id = req.params.id;
    const result = await this.repository.getById(id);
    res.status(200).json(result);
  }

  async create(req, res) {
    const body = req.body
    const result = await this.repository.create(body);
    res.status(201).json(result);
  }

  async update(req, res) {
    const id = req.params.id;
    const body = req.body;
    const result = await this.repository.update(id, body);
    res.status(200).json(result);
  }

  async delete(req, res) {
    const id = req.params.id;
    await this.repository.delete(id);
    res.json({message: 'Employe deleted'});
  }
}

module.exports = GenericController;