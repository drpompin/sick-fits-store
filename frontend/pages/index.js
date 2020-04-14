// import React from 'react';
// import Link from 'next/link';
// import Items from '../components/Items';


// class Home extends React.Component {

//     render() {
//         return (
//             <div>
//                 <Items />
//             </div>
            
//         );
//     }
// }

// export default Home;

import Items from '../components/Items';

const Home = props => (
    <div>
        <Items page={parseFloat(props.query.page) || 1} />
    </div>
);

export default Home;