const express = require("express");
const router = express.Router();

const Drug = require('../models/Drug');


router.post("/createDrug", (req, res) => {

    const newDrug = new Drug(
        {
            name: req.body.name,
            drugType: req.body.drugType,
            description: req.body.description
        }
    );

    newDrug
        .save()
        .then(drug => res.json(drug))
        .catch(err => console.log(err));
})

module.exports = router