import './style/main';

import{
  createForm, 
  createFormFromJSON
} from './js/formMaker';
import{createMinTask} from './js/asideTaskMaker';
import{takeDataFromForm} from './js/process-form-data';
 
function putOnScreen(){
  const MAIN = document.querySelector('.max-info');
  // MAIN.append(createForm());
  const ASIDE = document.querySelector('.min-info');
  ASIDE.append(createMinTask());
}
putOnScreen();




//making form from JSON
const empty = {

}
const demoTaskForm = {
  title: 'finish To-do task', 
  description: "it's quite complicated but interesting", 
  todos: {
    0: {checked: true, text: 'Actually, a lot of things'},
    1: {checked: false, text: 'As minimum adding check lists'}
  }, 
  priority: 'high', 
  date: '2022-02-21',
};
let demoJSON = JSON.stringify(demoTaskForm, null, 2)
let emptyJSON = JSON.stringify(empty, null, 2)

const maxInfo = document.querySelector('.max-info');
maxInfo.append(createFormFromJSON(demoJSON));
maxInfo.append(createFormFromJSON(emptyJSON));

//todo text area seizer
const text = document.querySelector('.todo-title')

function auto_grow() {
    text.style.height = (text.scrollHeight)+"px";
}

text.addEventListener('input', auto_grow)

//work with form data
const form = document.querySelector('.form-container');
const addButton = form.querySelector('.button-add');
addButton.addEventListener('click', takeDataFromForm)


