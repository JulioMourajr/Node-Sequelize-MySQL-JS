const employesModel = require('../models/employesModel');

const getAllEmployes = async () =>{
  const employes = await employesModel.findAll();
  return employes;
}

const getEmployeByEmployeCode = async (employeCode) =>{
  const Employe = await employesModel.findByPk(employeCode);
  return Employe;
}

const createEmploye = async(employe)=>{
  const newEmploye = await employesModel.create(employe)
  return newEmploye;
}

const updateEmploye = async(employeCode, employe)=>{
  const updatedEmploye = await employesModel.findByPk(employe, 
    {where: {employeCode: employeCode}});
  return updatedEmploye;
}

// ver se esse metodo funciona
const deleteEmploye = async(employeCode)=>{
  await employesModel.destroy({where: {employeCode: employeCode}});
}


module.exports = {
  getAllEmployes,
  getEmployeByEmployeCode,
  createEmploye,
  updateEmploye,
  deleteEmploye
}