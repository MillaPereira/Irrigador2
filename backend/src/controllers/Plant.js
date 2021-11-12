const Plant = require("../models/Plant");
const HttpError = require("../models/HttpError");

module.exports = {
  async index(req, res) {
    let plants;

    try {
      plants = await Plant.find();

      return res.json(plants).status(200);
    } catch (err) {
      throw new Error("Cat't get plants!");
    }
  },
  async store(req, res, next) {
    const { name, description, frequency } = req.body;
    let aux;
    let newPlant;

    for (let i = 1; i < 13; i++) {
      aux = await Plant.findOne({ id_node: i });

      if (!aux) {
        newPlant = new Plant({
          id_node: i,
          name,
          description,
          frequency,
        });
        break;
      }
    }

    try {
      const plants = Plant.find();
      const amount = plants.count((err, count) => {
        if (err) {
          console.log(err);
        } else {
          if (count >= 12) {
            return next(new HttpError("Cannot save more than 12 plants!", 405));
          }
        }
      });

      await newPlant.save();
    } catch (err) {
      return next(new HttpError("Cant save plant", 500));
    }

    return res.status(200).json({ newPlant });
  },
  async delete(req, res, next) {
    let foundPlant;
    const { id_node } = req.params;

    try {
      foundPlant = await Plant.findOneAndRemove({ id_node });
    } catch (err) {
      const error = new HttpError("Can't find plant!", 400);
      return next(error);
    }

    if (!foundPlant) {
      const error = new HttpError("Can't find plant!", 400);
      return next(error);
    }

    return res.status(200).json({ deletedPlant: foundPlant });
  },
};
