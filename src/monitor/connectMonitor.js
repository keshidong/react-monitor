import React, { Component } from 'react';
import monitorShape from './utils/PropTypes';

const connectMonitor = (Target) => {
    class Connect extends Component {
        render() {
            const { monitor } = this.context;
            const extraProps = {
                listen: monitor.listen,
                trigger: monitor.trigger,
            };

            return (
                <Target {...this.props} {...extraProps} />
            );
        }
    }
    Connect.contextTypes = {
        monitor: monitorShape,
    };
    return Connect;
};

export default connectMonitor;
