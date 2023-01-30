const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, { username, wins, losses, ties }, context) => {
            if (context.user) {
                const userData = await User.findOne({_id: context.user._id}).select("-_v -password"
                );
                return userData;
            }
            throw new AuthenticationError("Not logged in");
        },
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError("Invalid credentials");
            }
            const correctPassword = await user.isCorrectPassword(password);

            if (!correctPassword) {
                throw new AuthenticationError("Invalid credentials");
            }
            const token = signToken(user);
            return { token, user };
        },
        addUser: async (parent, {username, email, password}) => {
            const user = await User.create({username, email, password});
            const token = signToken(user);
            return { token, user };
        },
        updateWins: async (parent, { username, wins }) => {
            const updatedUser = await User.findOneAndUpdate(
                { username },
                { $inc: { [wins]: 1 }},
                { new: true }
            );
            return updatedUser;
        },
        updateTies: async (parent, { username, ties }) => {
            const updatedUser = await User.findOneAndUpdate(
                { username },
                { $inc: { [ties]: 1 }},
                { new: true }
            );
            return updatedUser;
        },
        updateLosses: async (parent, { username, losses }) => {
            const updatedUser = await User.findOneAndUpdate(
                { username },
                { $inc: { [losses]: 1 }},
                { new: true }
            );
            return updatedUser;
        },
    },
};

module.exports = resolvers;