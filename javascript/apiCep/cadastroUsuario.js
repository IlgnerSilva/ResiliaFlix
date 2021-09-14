let inputPassword4 = document.querySelector('#inputPassword4');
let inputEmail4 = document.querySelector('#inputEmail4');
let btnPrimary = document.querySelector('.btn-primary');

let todos = JSON.parse(localStorage.getItem('list_todo')) || [{}]

function saveStorage(){
    localStorage.setItem('list_todo', JSON.parse(todos));
    
}

function addTodo(){
    let textTodo = inputEmail4.value;
    let senhaTodo = inputPassword4.value;
    todos.push(textTodo);
    todos.push(senhaTodo);
    saveStorage();
}

function deleteTodo(pos){
    todos.splice(pos, 1);

    saveStorage();
}

btnPrimary.addEventListener('click', function(){
    // deleteTodo();
    addTodo();
    console.log(JSON.parse(localStorage.getItem('list_todo')))
})