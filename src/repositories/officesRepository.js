const officesModel = require('../models/officesModel');

const getAllOffices = async () =>{
  const offices = await officesModel.findAll();
  return offices;
}

const getOfficeByOfficeCode = async (officeCode) =>{
  const Office = await officesModel.findByPk(officeCode);
  return Office;
}

const createOffice = async(office)=>{
  const newOffice = await officesModel.create(office)
  return newOffice;
}

const updateOffice = async(officeCode, office)=>{
  const updatedOffice = await officesModel.update(office, 
    {where: {officeCode: officeCode}});
  return updatedOffice;
}

const deleteOffice = async(officeCode)=>{
  await officesModel.destroy({where: {officeCode: officeCode}});
}

module.exports = {
  getAllOffices,
  getOfficeByOfficeCode,
  createOffice,
  updateOffice,
  deleteOffice
}
