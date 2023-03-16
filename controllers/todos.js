const Todo = require('../models/todo')

module.exports = {
    index,
    show,
    new: newTodo,
    create,
    deleteOne,
    edit,
    update: updateOne
}

function index(req, res) {
    const context = { todos: Todo.getAll(), title: "All To-dos | Index" }
    res.render('todos/index', context)
}

function show(req, res) {
    const todo = Todo.getOne(req.params.id)
    const context = { todo, title: `To-do Details | ${todo.todo}` }
    res.render('todos/show', context)
    // console.log(todo)
}

function newTodo(req, res) {
    res.render('todos/new', { title: 'New Todo' })
}

function create(req,res){
    // console.log(req.body)
    Todo.create(req.body)
    // Do a redirect anytime data is changed in the mid
    res.redirect('/todos')
}

function deleteOne(req,res){
    Todo.destroy(req.params.id)
    res.redirect('/todos')
}

// create a new edit controller
function edit (req,res){
    const todo = Todo.getOne(req.params.id)
    const context = { todo, title: `To-do Details | ${todo.todo}` }
    res.render('todos/edit', context)
    // store the current todo based on the incoming param id
    // hint: see getOne
    // render a todo edit template, provide context for the form
}

function updateOne (req, res){
    Todo.update(req.params.id)
    res.redirect('/todos')
    // invoke the Todo update method, provide it the id of the todo to update
    // redirect to the correct todo show page, or the todos index page
}
