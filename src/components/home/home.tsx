import * as React from 'react';
import * as CSSModules from 'react-css-modules';
import MatchStick from '../matchstick';

const styles = require('./home.css');
console.log(styles);
class Home extends React.Component<{}, {}> {
    render(): JSX.Element {
        return (
            <div styleName="home-container">
                <p>Click Me</p>
                <MatchStick />
            </div>
        );
    }
}

export default CSSModules(Home, styles);