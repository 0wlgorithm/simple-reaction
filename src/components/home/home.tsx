import * as React from 'react';
import * as CSSModules from 'react-css-modules';

const styles = require('./home.css');

class Home extends React.Component<{}, {}> {
    render(): JSX.Element {
        return (
            <div styleName="home-container">
                <h1>Hello</h1>
            </div>
        );
    }
}

export default CSSModules(Home, styles);