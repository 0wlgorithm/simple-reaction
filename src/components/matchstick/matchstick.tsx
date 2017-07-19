import * as React from 'react';
import * as CSSModules from 'react-css-modules';

const styles = require('./matchstick.css');

const MatchStick = () =>
  <div>
    <div styleName="outer-flame">
      <div styleName="inner-flame"></div>
    </div>
    <div styleName="stick"></div>
  </div>;

export default CSSModules(MatchStick, styles, { allowMultiple: true });
