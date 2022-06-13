import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      email
      allinterested{
        _id
        events{
          _id: ID
          name
          description
          whyattend
          image
          link
          quantity
          price
          location
        }
      }
    }
  }
`;

export const QUERY_ALL_EVENTS = gql`
  {
    events {
      _id
      name
      description
      whyattend
      image
      price
      quantity
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
      name
      description
      whyattend
      image
      price
      link
      quantity
      location {
        _id
        name
      }
    }
  }
`;

export const QUERY_ALL_LOCATIONS = gql`
  {
    locations{
      _id
      name
    }
  }
`;