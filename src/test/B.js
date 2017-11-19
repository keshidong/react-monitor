import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectMonitor } from '../monitor/index';

class B extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aBtnClickCount: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        this.props.listen('a-click', () => {
            this.setState({
                aBtnClickCount: this.state.aBtnClickCount + 1,
            });
        });
    }
    handleClick() {
        this.props.trigger('b-click');
    }
    render() {
        return (
            <div>
                <button
                    onClick={this.handleClick}
                >b</button>
                <span>按钮a被点击了{this.state.aBtnClickCount}次</span>
            </div>
        );
    }
}

B.propTypes = {
    trigger: PropTypes.func.isRequired,
    listen: PropTypes.func.isRequired,
};

export default connectMonitor(B);
