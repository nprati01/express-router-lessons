const todos = [
    { id: 125223, todo: 'Feed Dogs', done: true },
    { id: 127904, todo: 'Learn Express', done: false },
    { id: 139608, todo: 'Buy Milk', done: false }
];

module.exports = {
    getAll,
    getOne,
    create,
    destroy,
    update
};

function getAll() {
    return todos;
}

function getOne(id){
    id = parseInt(id)
    return todos.find(todo=>todo.id === id)
}

function create(todo){
    todo.id = Date.now() % 1000000;
    todo.done = false
    todos.push(todo)
}

function destroy(id){
    id = parseInt(id)
    const idx = todos.findIndex(todo=>todo.id === id)
    console.log('deleted:', idx)
    todos.splice(idx,1)
}

function update(id, todo){
    // provide the function an id and a todo paramater
    // id = parseInt(id)
    // const updatedTodo = todos.findIndex(todo=>todo.id === id)
    // todos.spread()


    // parse the id into an integer
    // find the index of the correct todo (based on the provided id)
    // create an updatedTodo variable
    // use the spread operator to copy the current todo data into a new object
    // spread the todo parameter data into the new object
}
