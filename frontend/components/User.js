import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      name
      permissions

      # I kept getting the following errors 1,2,3... when I start the application and it prevents me from being able to do
      # anything on the app. I still don't understand the error or the way to go about it. 
      #1. httpLink.js:87 POST http://localhost:4444/ 400 (Bad Request)
      #2. [GraphQL error]: Message: Cannot query field "orders" on type "User"., Location: [object Object], Path: undefined
      #3. [Network error]: Error: Response not successful: Received status code 400


      # In order that I might able to complete other things on the app, I did this hack and hashed out orders as seen below.
      # This is a temporary solution until I can figure out a proper solution to the problem
      # orders {
      #   id
      # }
      cart {
        id
        quantity
        item {
          id
          price
          image
          title
          description
        }
      }
    }
  }
`;

const User = props => (
    <Query {...props} query={CURRENT_USER_QUERY}>
        {payload => props.children(payload)}
    </Query>
);

User.propTypes = {
    children: PropTypes.func.isRequired,
};

export default User;
export { CURRENT_USER_QUERY };