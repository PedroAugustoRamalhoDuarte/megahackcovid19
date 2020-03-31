const User = require('../models/User');
var jwt = require('jsonwebtoken');

module.exports = {
    async index(request, response) {
        const users = await User.find();
        return response.json(users);
    },

    async store(request, response) {
        const {name, password, email, role, crm} = request.body;

        let user = await User.findOne({email});

        if (!user) {
            user = await User.create({
                name,
                password,
                email,
                role,
                crm,
            });
        }

        return response.json(user);
    },

    async me(request, response) {
        let token = request.headers['x-access-token'];
        if (!token) return response.status(401).send({auth: false, message: 'No token provided.'});

        jwt.verify(token, "1234", function (err, decoded) {
            if (err) return response.status(500).send({auth: false, message: 'Failed to authenticate token.'});

            let user = await User.findOne({_id: decoded.id});
            return response.json(user);
        });

    },

    async login(request, response) {
        User.findOne({email: request.body.email}, function (err, user) {
            if (err) return response.status(500).send('Error on the server.');
            if (!user) return response.status(404).send('No user found.');

            if (user.password === request.body.password) {
                let token = jwt.sign({ id: user._id }, "1234", {
                    expiresIn: 86400 // expires in 24 hours
                });
                response.status(200).send({ auth: true, token: token });
            } else {
                response.status(401).send({ auth: false, token: null });
            }
        });
    }
};