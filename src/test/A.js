import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectMonitor } from '../monitor/index';

class A extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bBtnClickCount: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        this.props.listen('b-click', () => {
            this.setState({
                bBtnClickCount: this.state.bBtnClickCount + 1,
            });
        });
    }
    handleClick() {
        this.props.trigger('a-click');
    }
    render() {
        return (
            <div>
                <button
                    onClick={this.handleClick}
                >a</button>
                <span>按钮b被点击了{this.state.bBtnClickCount}次</span>
            </div>
        );
    }
}

A.propTypes = {
    trigger: PropTypes.func.isRequired,
    listen: PropTypes.func.isRequired,
};

export default connectMonitor(A);
