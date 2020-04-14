import App from 'next/app';
import Page from '../components/Page';
import { ApolloProvider } from 'react-apollo';
import withData from '../lib/withData';


// In order to expose the apollo client to a react app, we just wrap the application in an 
// ApolloProvider

class MyApp extends App {

// This static getInitialProps is done to provide page numbers to the app; it actually runs
// before the first render of the app. Hence, anything returned can be exposed via the 
// destructured this.props method in the render.
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        pageProps.query = ctx.query; //This exposes the query to the user .i.e.to every page of the app
        return {pageProps};
    }


    render() {
        const { Component, apollo, pageProps } = this.props
        return (
            <div>
                <ApolloProvider client={apollo}>
                    <Page>
                        <Component {...pageProps} />
                    </Page>
                </ApolloProvider>
            </div>        
        )
    }
}

// Wrapping MyApp in withData makes the Apollo client accessible via this.props
export default withData(MyApp)