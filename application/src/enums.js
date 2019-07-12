export const API_URL = 'http://localhost:3333';
export const FETCH_TODO_URL = `${API_URL}/todo`;
export const ADD_TODO_URL = FETCH_TODO_URL;
export const UPDATE_TODO_URL = `${API_URL}/todo/{id}`;

export const COLOR_OPTIONS = [{
    value: 'red',
    content: 'Kirmizi',
},{
    value: 'blue',
    content: 'Mavi',
},{
    value: 'orange',
    content: 'Turuncu',
},{
    value: 'yellow',
    content: 'Sari',
}];
export const TODO_STATUSES = [{
    value: 0,
    content: 'Incompleted',
},{
    value: 1,
    content: 'Development Inprogress',
},{
    value: 2,
    content: 'Code Review',
},{
    value: 3,
    content: 'Done',
}];