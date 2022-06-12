const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Interested {
    _id: ID
    events: [Event]
  }

  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    allinterested: [Interested]
  }
  type Location {
    _id: ID
    name: String
  }
  type Event {
    _id: ID
    name: String
    description: String
    whyattend:String
    image: String
    quantity: Int
    price: Float
    location: Location
  }
  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
//     events: [Event]!
//     eventsByLocation(location: ID!, name: String): [Event]
//     event(_id: ID!): Event
//     locations: [Location]
//     interested(_id: ID!): Interested

//   }

//   type Mutation {
//     addProfile(name: String!, email: String!, password: String!): Auth
//     login(email: String!, password: String!): Auth
//     removeProfile: Profile
//     updateEvent(_id: ID!, quantity: Int!): Event
//   }
// `;

// module.exports = typeDefs;
