const Drug = require('../models/Drug');


exports.drugCreate = function (req, res) {
    var drug = new Drug(
        {
            name: req.body.name,
            type: req.body.qtd,
            description: req.body.description
        }
    );

    drug.save(function (err) {
        if (err) return console.log(err);
        
        res.send('Drug added successfully');
    })
};

exports.drugDetails = function (req, res) {
    Drug.findById(req.params.id, function (err, drug) {
        if (err) return console.log(err);

        res.send(drug);
    })
};