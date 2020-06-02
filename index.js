let container = document.querySelector('#container');

let  input = container.appendChild(document.createElement('input'));
let add = container.appendChild(document.createElement('button'));
add.textContent = 'Add';
let reset = container.appendChild(document.createElement('button'));
reset.textContent = 'Reset';
list = container.appendChild(document.createElement('ul'));
add.addEventListener('click', addTask);
reset.addEventListener('click', Reset);

function addTask(){

    let task = input.value;
    if(task === '' || task.trim() === ''){return;}
    else{
        let tasks = JSON.parse(localStorage.getItem('tasks'));
        if(tasks===null){tasks = []}
        tasks.push(task);
        tasks.sort();
        list.innerHTML = ' ';
        tasks.forEach(task => {
            let el = document.createElement('li');
            el.textContent = task;
            list.appendChild(el)
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        input.value = '';
        console.log(tasks);
    }
}

function Reset(){
    localStorage.setItem('tasks',null);
    list.innerHTML = ' ';
}
function Refresh(t){
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    if(tasks===null){tasks = []}
    
    list.innerHTML = ' ';
    tasks.forEach(task => {
        let el = document.createElement('li');
        el.textContent = task;
        list.appendChild(el)
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    input.value = '';
    console.log(tasks);
}
Refresh();
