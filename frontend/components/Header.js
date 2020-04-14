import Link from "next/link";
import styled from 'styled-components';
import Nav from "./Nav";
import Router from 'next/router';

import NProgress from 'nprogress';
//Nprogress provides the loader at the top of the browser
import Cart from './Cart';
import Search from './Search';




Router.onRouteChangeStart = () => {
    console.log('onRouteChangeStart Triggered');
    NProgress.start();
}
Router.onRouteChangeComplete = () => {
    console.log('onRouteChangeComplete Triggered');
    NProgress.done();

}
Router.onRouteChangeError = () => {
    console.log('onRouteChangeError Triggered');
}


const Logo = styled.h1`
    font-size: 4rem;
    margin-left: 2rem;
    position: relative;
    z-index: 2;
    transform: skew(-10deg);

    a {
        padding: 0.5rem 1rem;
        background: ${props => props.theme.red};
        color: white;
        text-transform: uppercase;
        text-decoration: none;
    }

    @media(max-width: 1300px) {
        margin: 0;
        text-align: center;
    }
`;

const StyledHeader = styled.div`
    .bar {
        border-bottom: 10px solid ${props => props.theme.black};
        display: grid;
        grid-template-columns: auto 1fr;
        justify-content: space-between;
        align-items: stretch;

        @media(max-width: 1300px) {
            grid-template-columns: 1fr;
            justify-content: center;
        }
    }

    .sub-bar {
        display: grid;
        grid-template-columns: 1fr;
        border-bottom: 1px solid ${props => props.theme.lightgrey};
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <div className="bar">
                <Logo>
                    <Link href="/">
                        <a>Sick fits</a>
                    </Link>
                </Logo>

                <Nav/>
            </div>

            <div className="sub-bar">
                <Search />
            </div>

            <Cart />
        </StyledHeader>
    );
}

export default Header;