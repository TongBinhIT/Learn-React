import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './Todo/components/TodoList';

TodoFeature.propTypes = {
    TodoList: PropTypes.array,
    
};

function TodoFeature(props) {
    const todoList = [
        {
            id : 1,
            title : 'Eat',
            status : 'new'
        },
        {
            id : 2,
            title : 'Sleep',
            status : 'completed'
        },
        {
            id : 3,
            title : 'Code',
            status : 'new'
        },
    ];


    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todoList} /> 
        </div>
    );
}

export default TodoFeature;