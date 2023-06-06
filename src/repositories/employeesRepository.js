const GenericRepository = require("./genericRepository");

class EmployeeRepository extends GenericRepository {
  constructor(id, model) {
    super(id, model);
    this.model = model;
  }

  getEmployeeByEmail = async (email) => {
    const employee = await this.model.findOne({ where: { email } });
    return employee;    
  }

}

module.exports = EmployeeRepository;

