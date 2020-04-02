const Drug = require('../models/Drug');


module.exports = {

    async drugCreate(req, res) {
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
    },

    async drugDetails(req, res) {
        Drug.findById(req.params.id, function (err, drug) {
            if (err) return console.log(err);

            res.send(drug);
        })
    },

    async drugUpdate(req, res) {
        Drug.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, drug) {
            if (err) return next(err);

            res.send('Drug updated.');
        });
    },

    async drugDelete(req, res) {
        Drug.findByIdAndRemove(req.params.id, function (err) {
            if (err) return next(err);
            res.send('Deleted successfully!');
        })
    }
};