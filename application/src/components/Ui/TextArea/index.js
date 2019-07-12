import React from 'react';
import './index.css';

class TextArea extends React.Component {
    /**
     * @param {object} props
     */
    constructor (props) {
        super(props);
        this.state = {
            value: this.props.value,
        };
    }

    /**
     * @param {object} event
     */
    change (event) {
        const value = event.target.value;

        this.setState({ value: value });
        this.props.change && this.props.change(value);
    }

    /**
     * @returns {ReactNode}
     */
    render() {
        return (
            <textarea
                className="text-input"
                onChange={this.change.bind(this)}
                value={this.state.value}
            />
        );
    }
}

export default TextArea;