import './style/main';

console.log('hi')

let form = document.forms.task;
console.dir(form)
let formData = new FormData(form);
console.log(formData)