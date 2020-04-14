import React from 'react';
import Link from 'next/link';
import UpdateItem from '../components/UpdateItem';

// class Update extends React.Component {

//     render() {
//         const { query } = this.props;
        
//         return (
//             <>
//                 <UpdateItem id={query.id} />
//             </>
//         );
//     }
// }
const Sell = ({ query }) => (
    <>
        <UpdateItem id={query.id} />
    </>
)

export default Sell;