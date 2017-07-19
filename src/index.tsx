import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Home from 'components/home';

const app = document.getElementById('app');
render(<AppContainer><Home /></AppContainer>, app);

if ((module as any).hot) {
	(module as any).hot.accept('./components/home', () => {
		const HomeContainer = require('./components/home').default;
		render(
			<AppContainer>
				<HomeContainer />
			</AppContainer>,
			app
		);
	});
}