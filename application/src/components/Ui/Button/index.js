import React from 'react';
import './index.css';

class Button extends React.Component {
    /**
     * @param {object} event
     */
    click(event) {
        this.props.click && this.props.click(event);
    }
    /**
     * @returns {ReactNode}
     */
    render() {
        return (
            <button className="button" onClick={this.click.bind(this)}>
                {this.props.value}
            </button>
        );
    }
}

export default Button;