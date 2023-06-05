class GenericController {
  constructor(repository) {
    this.repository = repository;
  }

 getAll = async (req, res) => {
    const result = await this.repository.getAll();
    res.status(200).json(result);   
  }

   getById = async (req, res)  => {
    const id = req.params.id;
    const result = await this.repository.getById(id);
    res.status(200).json(result);
  }

  create = async (req, res) => {
    const body = req.body
    const result = await this.repository.create(body);
    res.status(201).json(result);
  }

   update = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const result = await this.repository.update(id, body);
    res.status(200).json(result);
  }

  delete = async (req, res)  => {
    const id = req.params.id;
    await this.repository.delete(id);
    res.json({message: 'Success deleted'});
  }
}

module.exports = GenericController;