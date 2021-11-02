const { AuthenticationError } = require('apollo-server-errors');
const { User, MyDate } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-password')
                    .populate('dates');

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        // get all users
        users: async () => {
            return User.find()
                .select('-password')
                .populate('dates');

        },
        // get user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-password')
                .populate('dates');
        },
        dates: async (parent, { username }) => {
            const params = username ? { username } : {};
            return MyDate.find(params).sort({ createdAt: -1 });
        },
        date: async (parent, { _id }) => {
            return MyDate.findOne({ _id });
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError('Incorrect Credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect Credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        addDate: async (parent, args, context) => {
            if (context.user) {
                const date = await MyDate.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { dates: date._id } },
                    { new: true }
                );

                return date;
            }
            throw new AuthenticationError('You must be logged in');
        }
    }
};

module.exports = resolvers;