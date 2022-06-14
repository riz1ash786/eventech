const { AuthenticationError } = require("apollo-server-express");
const { Profile } = require("../models");
const { Event } = require("../models");
const { Location } = require("../models");

const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // profiles: async () => {
    //   return Profile.find().populate({
    //     path: "allinterested.events",
    //     path: "eventsCreated",
    //     populate: "location",
    //   });
    // },

    // profile: async (parent, { profileId }) => {
    //   return Profile.findOne({ _id: profileId }).populate({
    //     path: "allinterested.events",
    //     populate: "location",
    //   });
    // },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOne({ _id: context.user._id }).populate(
          "savedEvents"
        );
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    events: async () => {
      return Event.find().populate("location");
    },
    event: async (parent, { eventId }) => {
      return Event.findOne({ _id: eventId }).populate("location");
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
  },

  Mutation: {
    addProfile: async (parent, { name, email, password }) => {
      const profile = await Profile.create({ name, email, password });
      const token = signToken(profile);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email }).populate("savedEvents");

      if (!profile) {
        throw new AuthenticationError("No profile with this email found!");
      }
      s;
      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(profile);
      return { token, profile };
    },

    // Set up mutation so a logged in user can only remove their profile and no one else's
    removeProfile: async (parent, args, context) => {
      if (context.user) {
        return Profile.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    saveEvent: async (_, { eventId }, context) => {
      if (!context.user) {
        throw new AuthenticationError("You need to be logged in!");
      }

      const updatedProfile = await Profile.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { savedEvents: eventId } },
        { new: true, runValidators: true }
      ).populate("savedEvents");

      return updatedProfile;
    },
  },
};

module.exports = resolvers;
