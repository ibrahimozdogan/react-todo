import React from 'react';
import './index.css';

class SelectBox extends React.Component {
    /**
     * @param {object} props
     */
    constructor (props) {
        super(props);
        this.state = {
            options: this.props.options,
            selectedValue: this.props.selectedValue
        };
    }

    /**
     * @param {object} event
     */
    change(event) {
        const value = event.target.value;

        this.setState({ selectedValue: value });
        this.props.change && this.props.change(value);
    }

    /**
     * @returns {ReactNode}
     */
    render() {
        return (
            <select className="select-box" value={this.state.selectedValue} onChange={this.change.bind(this)}>
                {
                    this.state.options.map(option => {
                        return <option key={option.value} value={option.value}>{option.content}</option>
                    })
                }
            </select>
        );
    }
}

export default SelectBox;