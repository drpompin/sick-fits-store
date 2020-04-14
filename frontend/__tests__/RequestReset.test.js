import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';
import RequestReset, { REQUEST_RESET_MUTATION } from '../components/RequestReset';

const mocks = [
    {
        request: {
            query: REQUEST_RESET_MUTATION,
            variables: { email: 'ayo@yahoo.com' },
        },
        result: {
            data: { requestReset: { message: 'success', __typename: 'Message' } },
        },
    },
];

describe('<RequestReset/>', () => {
    it('renders and matches snapshot', async () => {
        const wrapper = mount(
            <MockedProvider addTypename={false}>
                <RequestReset />
            </MockedProvider>
        );
        const form = wrapper.find('form[data-test="form"]');
        expect(toJSON(form)).toMatchSnapshot();
    });

    it('calls the mutation', async () => {
        const wrapper = mount(
            <MockedProvider mocks={mocks} addTypename={false}>
                <RequestReset />
            </MockedProvider>
        );
        // simulate typing an email
        wrapper
            .find('input')
            .simulate('change', { target: { name: 'email', value: 'ayo@yahoo.com' } });
        // submit the form
        wrapper.find('form').simulate('submit');
        await wait();
        wrapper.update();
        expect(wrapper.find('p').text()).toContain('Success! Check your email for a reset link!');
    });
});
