import './style.css'

const taskContainer = document.querySelector('.task-container') as HTMLDivElement;
const todoInput = document.getElementsByTagName('input')[0] as HTMLInputElement; 
//*const btn = document.querySelector('button') as HTMLButtonElement;
const form = document.querySelector('form') as HTMLFormElement;

interface Todo{
    title:string,
    isCompleted:boolean,
    id:string
}

const todos:Todo[] =  [];

form.onsubmit = (e:SubmitEvent) => {
    e.preventDefault();

    const todo:Todo = {
        title:todoInput.value,
        isCompleted:false,
        id:(Math.random()*10).toString()
    };

    todos.push(todo);
    todoInput.value=""
    renderTodo(todos);
}
const generateTodos = (title:string , isCompleted:boolean , id:string) => {
    const todo:HTMLDivElement = document.createElement('div');
    todo.className = "div-incomplete"
    const check:HTMLInputElement = document.createElement("input")
    check.setAttribute("type" , "checkbox");
    check.className = "checked"
    check.checked = isCompleted;
    check.onchange = () => {
       todo.className = check.checked? "div-complete" : "div-incomplete"
    }

    const p:HTMLParagraphElement = document.createElement("p");
    p.innerText = title;
    const btn:HTMLButtonElement = document.createElement('button')
    btn.className = "redbtn"
    btn.innerText = "X"
    btn.onclick = () => {
        deleteTodo(id);
    }

    const deleteTodo = (id:string) => {
        const index = todos.findIndex((item) => item.id === id)
        todos.splice(index,1);
        renderTodo(todos)
    }

    todo.append(check,p,btn)
    taskContainer.append(todo)
}


const renderTodo = (todos:Todo[]) => {
    taskContainer.innerText=""
    todos.forEach(item => {
        generateTodos(item.title , item.isCompleted , item.id);
    })

}
