const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = require('../models/User');

module.exports = function (passport) {
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: '/auth/google/callback'
            },
        async (accessToken, refreshToken, profile, done) => {
            const newUser = {
                googleId: profile.id,
                displayName: profile.displayName,
                firstName: profile.name.givenName,
                lastName: profile.name.familyName,
                image: profile.photos[0].value
            }

            try {
                let user = await User.findOne({ googleId: profile.id });
                if(user) {
                    done(null, user);
                } else {
                    user = await User.create(newUser);
                    done(null, user);
                }
            } catch (err) {
                console.error(err);
            }
        }));
        // if authentication succeeds, a session will be established and maintained via a cookie set in the user's browser
        // Each subsequent request will not contain credentials, but unique cookie that identifies the session.
        // In order to support login sessions, Passport will serialize and deserialize `user` instances to and from the session.
        passport.serializeUser((user, done) => done(null, user.id));
        // passport.deserializeUser((id, done)=> User.findById(id, (err, user) => done(err, user))); // deprecated -- no longer supported by Mongoose v7+
        passport.deserializeUser(async (id, done) => {
            try{
                const user = await User.findById(id);
                done(null, user);
            }catch (err) {
                done(err);
            }
        });
}