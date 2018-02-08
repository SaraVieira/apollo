import { h, Component } from 'preact';
import style from './style';
import plugins from '../../graphql/plugins.gql';
import Plugin from '../../components/plugin';
import { graphql } from 'react-apollo';

const Home = ({ loading, plugins }) => (
	<div class={style.home}>
		<h1>Babel Plugins</h1>
		{loading && <p>loading...</p>}
		{!loading && plugins.length ?
			plugins.map(plugin =>
				<Plugin {...plugin} />
			)
			: null}
	</div>
);


export default graphql(plugins, {
	props: ({ data: { loading, plugins } }) => ({
		loading,
		plugins
	})
})(Home);
