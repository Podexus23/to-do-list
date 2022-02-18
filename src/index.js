import './style/main';
import{createBlock} from './js/tagMaker'
import{createForm} from './js/formMaker'

function putOnScreen(){
  const MAIN = document.querySelector('.max-info');
  MAIN.append(createForm())
}
putOnScreen()
console.log('hi')


//todo text area seizer
const text = document.querySelector('.todo-title')

function auto_grow() {
    text.style.height = (text.scrollHeight)+"px";
}

text.addEventListener('input', auto_grow)