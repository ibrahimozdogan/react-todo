import React from 'react';
import { FETCH_TODO_URL } from '../../enums';
import AddTodoArea from '../AddTodoArea';
import Button from '../Ui/Button';
import Title from '../Ui/Title';
import TodoItem from '../TodoItem';
import './index.css';

class TodoContainer extends React.Component {
    /**
     * @param {object} props
     */
    constructor (props) {
        super(props);

        this.state = {
            todoList: [],
            addTodo: false,
            addTodoText: 'Ekle',
        };
    }

    async componentDidMount () {
        const response = await fetch(FETCH_TODO_URL);
        const todoList = await response.json();

        this.setState({ todoList });
    }

    /**
     * @param {object} todo
     */
    addTodo (todo) {
        this.setState({ todoList: [todo].concat(...this.state.todoList) });
        this.toggleAddTodoArea();
    }

    /**
     * @param {string} id
     */
    deleteTodo (id) {
        this.setState({ todoList: this.state.todoList.filter(todo => todo._id !== id) });
    }

    toggleAddTodoArea () {
        if (this.state.addTodo) {
            this.setState({
                addTodo: false,
                addTodoText: 'Ekle',
            });
        } else {
            this.setState({
                addTodo: true,
                addTodoText: 'Iptal',
            });
        }
    }

    /**
     * @returns {ReactNode}
     */
    render() {
        return (
            <div className="todo-container">
                <div className="header">
                    <Title content="TODO LIST"/>
                    <Button value={this.state.addTodoText} click={this.toggleAddTodoArea.bind(this)}/>
                </div>
                { this.state.addTodo && <AddTodoArea added={this.addTodo.bind(this)} /> }
                <div className="todo-list">
                    {
                        this.state.todoList.map(todo => {
                            return <TodoItem
                                key={todo._id}
                                content={todo.content}
                                color={todo.color}
                                status={todo.status}
                                id={todo._id}
                                deleted={this.deleteTodo.bind(this)}
                            />
                        })
                    }
                </div>
            </div>
        );
    }
}

export default TodoContainer;