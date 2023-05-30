const officesRepository = require('../repositories/officesRepository');

const getAllOffices = async (req, res) => {
  const offices = await officesRepository.getAllOffices();
  res.status(200).json(offices);
}

const getOfficeByOfficeCode = async (req, res) => {
  const office = await officesRepository.getOfficeByOfficeCode(req.params.officeCode);
  res.status(200).json(office);
}

const createOffice = async (req, res) => {
  const office = await officesRepository.createOffice(req.body);
  res.status(201).json(office);
}

const updateOffice = async (req, res) => {
  const office = await officesRepository.updateOffice(req.params.officeCode, req.body);
  res.status(200).json(office);
  
}

const deleteOffice = async (req, res) => {
  await officesRepository.deleteOffice(req.params.officeCode);
  res.json({message: 'Office deleted'});
}

module.exports = {
  getAllOffices,
  getOfficeByOfficeCode,
  createOffice,
  updateOffice,
  deleteOffice
}