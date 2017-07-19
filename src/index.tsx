import * as React from 'react';
import { render } from 'react-dom';
import Home from 'components/home/home';

const app = document.getElementById('app');
const HomeContainer = () => <div><Home /></div>
render(<HomeContainer />, app);