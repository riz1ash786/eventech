const { AuthenticationError } = require('apollo-server-express');
const { Profile } = require('../models');
const { Event } = require('../models');
const { Location } = require('../models');
const {Interested} = require('../models');

const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find().populate({
        path: "allinterested.events",
        populate: "location",
      })
    },

    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId }).populate({
        path: "allinterested.events",
        populate: "location",
      });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id }).populate({
          path: "allinterested.events",
          populate: "location",
        });;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    events: async () => {
     return Event.find().populate("location");
    },
    event: async (parent, { _id }) => {
      return await Event.findById(_id).populate("location");
    },
    locations: async () => {
      return await Location.find();
    },
    eventsByLocation: async (parent, { location, name }) => {
      const params = {};

      if (location) {
        params.location = location;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Event.find(params).populate("location");
    },
    interested: async (parent, { _id }, context) => {
      if (context.user) {
        const profile = await Profile.findById(context.profile._id).populate({
          path: "allinterested.events",
          populate: "location",
        });
        return profile.allinterested.id(_id);
      }
      throw new AuthenticationError("Not logged in");
    },
  },

  Mutation: {
    addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(profile);
      return { token, profile };
    },


//     // Set up mutation so a logged in user can only remove their profile and no one else's
//     removeProfile: async (parent, args, context) => {
//       if (context.user) {
//         return Profile.findOneAndDelete({ _id: context.user._id });
//       }
//       throw new AuthenticationError('You need to be logged in!');
//     },

//     updateEvent: async (parent, { _id, quantity }) => {
//       const decrement = Math.abs(quantity) * -1;

//       return await Event.findByIdAndUpdate(
//         _id,
//         { $inc: { quantity: decrement } },
//         { new: true }
//       );
//     },

//   },
// };

// module.exports = resolvers;
