const todos = JSON.parse(localStorage.getItem('todos')) || [];
const eliminarElemento = document.querySelector('.btn-eliminar');

const render = function() {
    const todoList = document.getElementById('todo-list');
    const todosTemplate = todos.map(t => '<li>' + t + '</li>');
    todoList.innerHTML = todosTemplate.join('');
    const elementos = document.querySelectorAll('#todo-list li');
    elementos.forEach((elemento, i) => {
        elemento.addEventListener('click', () => {
            elemento.parentNode.removeChild(elemento)
            todos.splice(i, 1);
            actualizaTodos(todos);
            render();
        });
            
    })
};

const actualizaTodos = function(todos) {
    const todosStrings = JSON.stringify(todos);
    localStorage.setItem('todos', todosStrings);
}

window.onload = function() {
    eliminarElemento.addEventListener('click', function() {
        confirm('Para eliminar una tarea pulsa encima de ella');
    }) 
    render();
    const form = document.getElementById('todo-form');
    form.onsubmit = function(e) {
        e.preventDefault();
        const todo = document.getElementById('todo');
        const todoText = todo.value;
        todo.value = '';
        todos.push(todoText);
        actualizaTodos(todos);
        render();
        
    }   
}