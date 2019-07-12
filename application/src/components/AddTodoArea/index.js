import React from 'react';
import { COLOR_OPTIONS, ADD_TODO_URL } from '../../enums';
import Button from '../Ui/Button';
import SelectBox from '../Ui/SelectBox';
import TextArea from '../Ui/TextArea';
import './index.css';

class AddTodoArea extends React.Component {
    /**
     * @param {object} props
     */
    constructor (props) {
        super(props);

        this.state = {
            content: '',
            color: 'red',
        };
    }

    async addToDo () {
        const response = await fetch(
            ADD_TODO_URL,
            {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({color: this.state.color, content: this.state.content, status: 0})
            }
        );
        const todo = await response.json();

        if (todo) {
            this.props.added(todo);
        }
    }

    /**
     * @param {string} property
     */
    changeProperty (property) {
        this.setState(property);
    }

    render() {
        return (
            <div className={`add-todo color-${this.state.color}`}>
                <TextArea value={this.state.content} change={content => this.changeProperty.call(this, { content }) } />
                <SelectBox
                    selectedValue={this.state.color}
                    options={COLOR_OPTIONS}
                    change={color => this.changeProperty.call(this, { color })}
                />
                <Button
                    value="Olustur"
                    click={this.addToDo.bind(this)}
                />
            </div>
        );
    }
}

export default AddTodoArea;