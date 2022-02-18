import {formData} from './form-data'

let takeDataFromForm = function(e){
  console.dir(e.target.form);
  const formNode = e.target.form;
  
  console.log(formData(formNode));
}



export {takeDataFromForm};