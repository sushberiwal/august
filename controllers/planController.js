const plans = require("../data/plans");
const planModel = require("../models/planModel");
module.exports.checkInput = function(req, res, next) {
  // console.log(req.body);
  if (Object.keys(req.body).length == 0) {
    return res.json({
      data: "Please enter data in post request"
    });
  }
  next();
};
module.exports.deletePlan = async function(req, res) {
  const { id}  = req.params;
  const deletedPlan = await planModel.findByIdAndDelete(id);
  res.json({
    deletedPlan
  });
};
module.exports.getPlan = async function(req, res) {
  const { id}  = req.params;
  const Plan = await planModel.findById(id);
  res.json({
    Plan
  });
};
module.exports.getAllPlans = async function(req, res) {
  const plans=await planModel.find();
  res.json({
    plans: plans
  });
};
module.exports.updatePlan = async function(req, res) {
  const { id } = req.params;
  const values=req.body;
  const updatedPlan=await planModel.findByIdAndUpdate(id,values,{new:true});
  res.json({
    updatedPlan
  });
};
module.exports.createPlan = async function(req, res) {
  const plan = req.body;
  // create plan planModel=> cloud db
  const newPlan = await planModel.create(plan);
  res.json({
    newPlan
  });
};