import React from 'react';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { adopt } from 'react-adopt';
import User from './User';
import CartStyles from './styles/CartStyles';
import Supreme from './styles/Supreme';
import CloseButton from './styles/CloseButton';
import SickButton from './styles/SickButton';
import CartItem from './CartItem';
import calcTotalPrice from '../lib/calcTotalPrice';
import formatMoney from '../lib/formatMoney';
import TakeMyMoney from './TakeMyMoney';

const LOCAL_STATE_QUERY = gql`
  query {
    #   The @client in d below line ensures that apollo doesnt query the server but d client
    cartOpen @client
  }
`;

const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleCart @client
  }
`;

/* adopt from "react-adopt" package is used here. It helps to deal with issues arising from 
 renderProp */
/* It composes all the renderProps functions into a single composed fxn/component that will 
 eventually expose all the needed props 
  The older component is hashed out at the bottom for reference purpose
 */


/* eslint-disable */
const Composed = adopt({
    /* variable Composed is declared and equates to adopt which takes an object of all the 
     things we are composing together */
    user: ({ render }) => <User>{render}</User>,
    toggleCart: ({ render }) => <Mutation mutation={TOGGLE_CART_MUTATION}>{render}</Mutation>,
    localState: ({ render }) => <Query query={LOCAL_STATE_QUERY}>{render}</Query>,
});
/* eslint-enable */

const Cart = () => (
    <Composed>
        {({ user, toggleCart, localState }) => {
            const me = user.data.me;
            if (!me) return null;
            return (
                <CartStyles open={localState.data.cartOpen}>
                    <header>
                        <CloseButton onClick={toggleCart} title="close">
                            &times;
                        </CloseButton>
                        <Supreme>{me.name}'s Cart</Supreme>
                        <p>
                            You Have {me.cart.length} Item{me.cart.length === 1 ? '' : 's'} in your cart.
                        </p>
                    </header>
                    <ul>{me.cart.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)}</ul>
                    <footer>
                        <p>{formatMoney(calcTotalPrice(me.cart))}</p>
                        {me.cart.length && (
                            <TakeMyMoney>
                                <SickButton>Checkout</SickButton>
                            </TakeMyMoney>
                        )}
                    </footer>
                </CartStyles>
            );
        }}
    </Composed>
);

export default Cart;
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION };





// import React from 'react';
// import { Query, Mutation } from 'react-apollo';
// import gql from 'graphql-tag';
// import User from './User';
// import CartStyles from './styles/CartStyles';
// import Supreme from './styles/Supreme';
// import CloseButton from './styles/CloseButton';
// import SickButton from './styles/SickButton';
// import CartItem from './CartItem';
// import calcTotalPrice from '../lib/calcTotalPrice';
// import formatMoney from '../lib/formatMoney';

// const LOCAL_STATE_QUERY = gql`
//   query {
//     #   The @client in d below line ensures that apollo doesnt query the server but d client
//     cartOpen @client
//   }
// `;

// const TOGGLE_CART_MUTATION = gql`
//   mutation {
//     toggleCart @client
//   }
// `;

// const Cart = () => (
//     <User>
//         {({ data: { me } }) => {
//             if (!me) return null;
//             console.log(me);
//             return (
//                 <Mutation mutation={TOGGLE_CART_MUTATION}>
//                     {toggleCart => (
//                         <Query query={LOCAL_STATE_QUERY}>
//                             {({ data }) => (
//                                 <CartStyles open={data.cartOpen}>
//                                     <header>
//                                         <CloseButton onClick={toggleCart} title="close">
//                                             &times;
//                                         </CloseButton>
//                                         <Supreme>{me.name}'s Cart</Supreme>
//                                         <p>
//                                             You Have {me.cart.length} Item{me.cart.length === 1 ? '' : 's'} in your cart.
//                                         </p>
//                                     </header>
//                                     <ul>
//                                         {me.cart.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)}
//                                     </ul>
//                                     <footer>
//                                         <p>{formatMoney(calcTotalPrice(me.cart))}</p>
//                                         <SickButton>Checkout</SickButton>
//                                     </footer>
//                                 </CartStyles>
//                             )}
//                         </Query>
//                     )}
//                 </Mutation>
//             );
//         }}
//     </User>
// );

// export default Cart;
// export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION };
