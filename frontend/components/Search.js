import React from 'react';
// Downshift allows us to use the arrow keys to scroll in the search box. It also enables close
// on escape key or on outside click
import Downshift, { resetIdCounter } from 'downshift';
import Router from 'next/router';
//ApolloConsumer gives us direct access to the apollo client; Hence, prevents querying of the 
// db everytime a page loads. On the apollo-client, we can manually run queries rather than
// using a renderProp
import { ApolloConsumer } from 'react-apollo'; 
import gql from 'graphql-tag';
//debounce prevents unnecessary query of the apollo client by delaying the time to run the query
import debounce from 'lodash.debounce';
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown';
import styled from 'styled-components';



const SEARCH_ITEMS_QUERY = gql`
  query SEARCH_ITEMS_QUERY($searchTerm: String!) {
    items(where: { OR: [{ title_contains: $searchTerm }, { description_contains: $searchTerm }] }) {
      id
      image
      title
    }
  }
`;


const SearchInput = styled.input`
    outline: none;
`


function routeToItem(item) {
    Router.push({
        pathname: '/item',
        query: {
            id: item.id,
        },
    });
}

class AutoComplete extends React.Component {
    state = {
        items: [],
        loading: false,
    };
    onChange = debounce(async (e, client) => {
        console.log('Searching...');
        // turn loading on
        this.setState({ loading: true });
        // Manually query apollo client
        const res = await client.query({
            query: SEARCH_ITEMS_QUERY,
            variables: { searchTerm: e.target.value },
        });
        this.setState({
            items: res.data.items,
            loading: false,
        });
    }, 350);
    render() {
        resetIdCounter();
        return (
            <SearchStyles>
                <Downshift onChange={routeToItem} itemToString={item => (item === null ? '' : item.title)}>
                    {({ getInputProps, getItemProps, isOpen, inputValue, highlightedIndex }) => (
                        <div>
                            <ApolloConsumer>
                                {client => (
                                    <SearchInput
                                        {...getInputProps({
                                            type: 'search',
                                            placeholder: 'Search For An Item',
                                            id: 'search',
                                            className: this.state.loading ? 'loading' : '',
                                            onChange: e => {
                                                e.persist();
                                                this.onChange(e, client);
                                            },
                                        })}
                                    />
                                )}
                            </ApolloConsumer>
                            {isOpen && (
                                <DropDown>
                                    {this.state.items.map((item, index) => (
                                        <DropDownItem
                                            {...getItemProps({ item })}
                                            key={item.id}
                                            highlighted={index === highlightedIndex}
                                        >
                                            <img width="50" src={item.image} alt={item.title} />
                                            {item.title}
                                        </DropDownItem>
                                    ))}
                                    {!this.state.items.length &&
                                        !this.state.loading && <DropDownItem> Nothing Found for {inputValue}</DropDownItem>}
                                </DropDown>
                            )}
                        </div>
                    )}
                </Downshift>
            </SearchStyles>
        );
    }
}

export default AutoComplete;