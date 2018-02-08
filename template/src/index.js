import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import './style';
import App from './components/app';

const client = new ApolloClient({
	link: new HttpLink({ uri: 'https://babel-plugins.now.sh/graphql' }),
	cache: new InMemoryCache()
});

export default () => (
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
);
