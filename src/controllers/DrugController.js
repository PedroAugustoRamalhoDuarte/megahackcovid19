const Drug = require('../models/Drug');


exports.drugCreate = function (req, res) {
    var drug = new Drug(
        {
            name: req.body.name,
            drugType: req.body.drugType,
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

exports.drugUpdate = function (req, res) {
    Drug.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, drug) {
        if (err) return next(err);

        res.send('Drug updated.');
    });
};

exports.drugDelete = function (req, res) {
    Drug.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};