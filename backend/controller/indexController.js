const User = require("../model/user");
const Util = require("../util/util");
const Validator = require("../util/validator");

class Controller {
  async userRegister(req, res, next) {
    try {
      if (!Validator.isValidSponcerId(req.body.refer_sponcer_id)) {
        return res.status(400).json({
          error: true,
          message: "Invalid sponcer id",
          result: null,
        });
      }
      if (!(await User.findOne({ my_sponcer_id: req.body.refer_sponcer_id }))) {
        return res.status(404).json({
          error: true,
          message: "Sponcer id not found",
          result: null,
        });
      }
      req.body.my_sponcer_id = Util.getSponcerId();
      req.body.password = req.body.password || Util.getPassword();
      const result = await User.create(req.body);
      return res.status(200).json({
        error: false,
        message: "success",
        result: {
          name: result.name,
          sponcer_id: result.my_sponcer_id,
          password: result.password,
        },
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        error: true,
        message: error.toString(),
        result: null,
      });
    }
  }
  async userLogin(req, res, next) {
    try {
      const result = await User.findOne({
        password: req.body.password,
        my_sponcer_id: req.body.my_sponcer_id,
      });
      if (!result) {
        return res.status(404).json({
          error: true,
          message: "Login failed",
          result: null,
        });
      }
      return res.status(200).json({
        error: false,
        message: "success",
        result: result,
      });
    } catch (error) {
      return res.status(error.status || 500).json({
        error: true,
        message: error.toString(),
        result: null,
      });
    }
  }
}

module.exports = new Controller();
