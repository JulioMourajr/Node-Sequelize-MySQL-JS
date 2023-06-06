const GenericController = require("./genericController");

class EmployeesController extends GenericController {
  constructor(repository) {
    super(repository);
    this.repository = repository;
  }

  getEmployeeByEmail = async (req, res) => {
    const email = req.params.email;
    const employee = await this.repository.getEmployeeByEmail(email);
    res.status(200).json(employee);
  }
}

module.exports = EmployeesController;