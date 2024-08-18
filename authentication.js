const mongoose = require('mongoose');
const User = mongoose.model('User');
const passport = require('passport');

const register = async (req, res) => {
    const user = new User();

    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);

    try {
        await user.save();
        const token = user.generateJWT();
        res.status(200).json({ "token": token });
    } catch (err) {
        res.status(500).json({ "message": "Error registering user" });
    }
};

const login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ "message": "All fields required" });
    }

    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res.status(404).json(err);
        }

        if (user) {
            const token = user.generateJWT();
            res.status(200).json({ "token": token });
        } else {
            res.status(401).json(info);
        }
    })(req, res);
};

module.exports = {
    register,
    login
};
