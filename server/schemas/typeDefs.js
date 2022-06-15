const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    savedCount: Int
    savedEvents: [Event]
  }

  type Location {
    _id: ID
    name: String
  }

  type Event {
    _id: ID
    title: String
    description: String
    whyattend: String
    image: String
    price: Float
    link:String
    location: Location
    profile: Profile
    comments:[Comment]!
    commentCount: Int
    likes:[Like]!
  }
  
  type Comment{
    _id:ID
    createdAt: String
    name:String
    body: String
  }

  type Like{
    _id:ID
    createdAt: String
    name:String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
    events: [Event]!
    eventsByLocation(location: ID!, name: String): [Event]
    event(eventId: ID!): Event
    locations: [Location]
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    removeProfile: Profile
    saveEvent(eventId: ID!): Profile
    deleteSaved(eventId: ID!): Profile
    createComment(eventId:ID!, body:String!): Event!
    deleteComment(eventId: ID!, commentId: ID!): Event!
    likePost(eventId: ID!): Event!
  }`;

module.exports = typeDefs;
