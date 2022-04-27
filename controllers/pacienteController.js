const Paciente = require("../models/paciente");

//cuando se crea un nuevo cliente
exports.nuevoPaciente = async (req, res, next) => {
  const data = req.body;
  const paciente = new Paciente(data);
  try {
    await paciente.save();
    res.json({
      mensaje: "el cliente se agrego correctamente",
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.getAllPacientes = async (req, res, next) => {
  try {
    const pacientes = await Paciente.find({});
    res.json(pacientes);
  } catch (error) {
    console.log(next);
    next();
  }
};

exports.getPaciente = async (req, res, next) => {
  try {
    const paciente = await Paciente.findById(req.params.id);
    res.json(paciente);
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.updatePaciente = async (req, res, next) => {
  try {
      const paciente = await Paciente.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
      res.json(paciente)
  } catch (error) {
    console.log(error);
    next();
  }
};

exports.deletePaciente = async (req, res, next) => {
  try {
    await Paciente.findOneAndDelete({_id: req.params.id})
    res.json({mensaje: 'el paciente fue eliminado'})
  } catch (error) {
    console.log(error);
    next();
  }
};
