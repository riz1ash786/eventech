import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      email
    }
  }
`;

export const QUERY_ALL_EVENTS = gql`
  {
    events {
      _id
      title
      description
      whyattend
      image
      price
      link
      location {
        _id
        name
      }
    }
  }
`;

export const QUERY_SINGLE_EVENT = gql`
  query singleEvent($eventId: ID!) {
    event(eventId: $eventId) {
      _id
      title
      description
      whyattend
      image
      price
      link
      commentCount
      comments{
        _id
        name
        createdAt
        body
      }
      location {
        _id
        name
      }
    }
  }
`;

export const QUERY_ALL_LOCATIONS = gql`
  {
    locations {
      _id
      name
    }
  }
`;

export const QUERY_SAVED_EVENTS = gql`
  query QUERY_SAVED_EVENTS {
    me {
      savedCount
      savedEvents {
        _id
        title
        whyattend
        description
        image
        price
        link
        location {
          _id
          name
        }
      }
    }
  }
`;
