import { gql } from "@apollo/client";

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const SAVE_EVENT = gql`
  mutation saveEvent($eventId: ID!) {
    saveEvent(eventId: $eventId) {
      savedEvents {
        _id
      }
    }
  }
`;

export const DELETE_SAVED = gql`
  mutation deleteSaved($eventId: ID!) {
    deleteSaved(eventId: $eventId) {
      savedEvents {
        _id
      }
    }
  }
`;

export const SAVE_COMMENT = gql`
  mutation SAVE_COMMENT($eventId: ID!, $body: String!) {
    createComment(eventId: $eventId, body: $body) {
      _id
      comments{
        body
        author
      }
    }
  }
`;
