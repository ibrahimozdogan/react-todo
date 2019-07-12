import React from 'react';
import './index.css';

class Title extends React.Component {
    /**
     * @returns {ReactNode}
     */
    render() {
        return (
            <div className="title">
                {this.props.content}
            </div>
        );
    }
}

export default Title;