import React from 'react';
import { UPDATE_TODO_URL, COLOR_OPTIONS, TODO_STATUSES } from '../../enums';
import Button from '../Ui/Button';
import SelectBox from '../Ui/SelectBox';
import TextArea from '../Ui/TextArea';
import './index.css';

class TodoItem extends React.Component {
    /**
     * @param {object} props
     */
    constructor (props) {
        super(props);

        this.state = {
            content: this.props.content,
            status: this.props.status,
            color: this.props.color,
            id: this.props.id,
        };
    }

    /**
     * @param {object} payload
     * @returns {boolean}
     */
    async update (payload) {
        const response = await fetch(
            UPDATE_TODO_URL.replace('{id}', this.state.id),
            {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            }
        );
        const { status } = await response.json();

        return status;
    }

    async delete () {
        const response = await fetch(UPDATE_TODO_URL.replace('{id}', this.state.id), { method: 'delete' });
        const { status } = await response.json();

        if (status) {
            this.props.deleted(this.state.id);
        }
    }

    /**
     * @param {string} payload
     */
    changeProperty (payload) {console.log(payload);
        this.setState(payload);
        this.update(payload)
    }

    /**
     * @returns {ReactNode}
     */
    render() {
        return (
            <div className={`todo-item color-${this.state.color}`}>
                <SelectBox
                    selectedValue={this.state.status}
                    options={TODO_STATUSES}
                    change={status => this.changeProperty.call(this, { status: parseInt(status) })}
                />
                <TextArea value={this.state.content} change={content => this.changeProperty.call(this, { content })} />
                <SelectBox
                    selectedValue={this.state.color}
                    options={COLOR_OPTIONS}
                    change={color => this.changeProperty.call(this, { color })}
                />
                <Button value="Sil" click={this.delete.bind(this)} />
            </div>
        );
    }
}

export default TodoItem;