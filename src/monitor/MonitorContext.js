import { Component, Children } from 'react';
import PropTypes from 'prop-types';
import Monitor from './monitor';
import monitorShape from './utils/PropTypes';

class MonitorContext extends Component {
    constructor(props, context) {
        super(props, context);
        this.monitor = new Monitor();
    }
    getChildContext() {
        return {
            monitor: this.monitor,
        };
    }
    render() {
        return Children.only(this.props.children);
    }
}

MonitorContext.propTypes = {
    children: PropTypes.element.isRequired,
};

MonitorContext.childContextTypes = {
    monitor: monitorShape,
};

export default MonitorContext;
