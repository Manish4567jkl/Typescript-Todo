import './style.css'

const taskContainer = document.querySelector('.task-container') as HTMLDivElement;
const input = document.getElementsByTagName('input')[0] as unknown  as HTMLInputElement; 
const btn = document.querySelector('button') as HTMLButtonElement;
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
        title:"",
        isCompleted:false,
        id:(Math.random()*100000).toString()
    };

    todos.push(todo);
    input.value=""
    console.log(todo)
}