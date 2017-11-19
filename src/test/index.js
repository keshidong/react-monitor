import { Component } from 'react';
import { MonitorContext } from '../monitor/index';
import A from './A';
import B from './B';

class Test extends Component {
    render() {
        return (
            <MonitorContext>
                <div>
                    <A />
                    <B />
                </div>
            </MonitorContext>
        );
    }
}

export default Test;
