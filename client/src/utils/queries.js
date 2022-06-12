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
          name: String
          description: String
          whyattend: String
          image: String
          quantity: Int
          price: Float
          location: Location
        }
      }
    }
  }
`;

// export const QUERY_ALL_EVENTS = gql`
//   {
//     events {
//       _id
//       name
//       description
//       whyattend
//       image
//       price
//       quantity
//       location {
//         _id
//         name
//       }
//     }
//   }
// `;
