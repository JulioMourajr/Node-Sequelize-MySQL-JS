const employesRepository = require('../repositories/employesRepository');

const getAllEmployes = async (req, res) => {
  const employes = await employesRepository.getAllEmployes();
  res.status(200).json(employes);
}

const getEmployeById = async (req, res) => {
  const employe = await employesRepository.getEmployeById(req.params.id);
  res.status(200).json(employe);
}

const createEmploye = async (req, res) => {
  const employe = await employesRepository.createEmploye(req.body);
  res.status(201).json(employe);
}

const updateEmploye = async (req, res) => {
  const employe = await employesRepository.updateEmploye(req.params.id, req.body);
  res.status(200).json(employe);
}

const deleteEmploye = async (req, res) => {
  await employesRepository.deleteEmploye(req.params.id);
  res.json({message: 'Employe deleted'});
}

module.exports = {
  getAllEmployes,
  getEmployeById,
  createEmploye,
  updateEmploye,
  deleteEmploye
}