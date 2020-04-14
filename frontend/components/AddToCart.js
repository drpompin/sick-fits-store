import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';
import styled from 'styled-components';

const ADD_TO_CART_MUTATION = gql`
  mutation addToCart($id: ID!) {
    # addToCart below is the mutation endpoint that is called on the server side and id is passed to 
    # it as in ($id: $id!). id and quantity are what we are demanding from the endpoint
    addToCart(id: $id) {
      id
      quantity
    }
  }
`;

const AddToCartButton = styled.button`
    cursor: pointer;
    outline: none;
`

class AddToCart extends React.Component {
    render() {
        const { id } = this.props;
        // console.log('props in addToCart====', this.props, id);
        return (
            <Mutation
                mutation={ADD_TO_CART_MUTATION}
                variables={{
                    id,
                }}
            // refetchQueries used below functions to update the ui from the cache when changes are 
            // made on the UI; there's no need to refresh the page everytime a new task is done except when 
            // necessary
                refetchQueries={[{ query: CURRENT_USER_QUERY }]}
            >
                {(addToCart, { loading }) => (
                    <AddToCartButton disabled={loading} onClick={addToCart}>
                        Add{loading && 'ing'} To Cart 🛒
                    </AddToCartButton>
                )}
            </Mutation>
        );
    }
}
export default AddToCart;
export { ADD_TO_CART_MUTATION };