function formData(form){

  const optionDate = form.querySelector('#task-date');
  const priority = form.querySelector('.task-priority');

  function checkPriority(){
    const radio = Array.from(priority.querySelectorAll('input[type="radio"]'));
    return radio.filter(e => e.checked)[0].value;
  };

  function addTodos(){
    const todos = form.querySelectorAll('.todo-container');
    let todosObj = {}; 
    todos.forEach((todo, index) => {
      const checkbox = todo.querySelector('input[type="checkbox"]');
      const textarea = todo.querySelector('textarea');
      todosObj[index] = {
        checked: checkbox.checked,
        text: textarea.value,
      };
    });
    return todosObj
  };

  let formObj = {
    title: form[0].value,
    description: form[1].value,
    todos: addTodos(),
    priority: checkPriority(),
    date: optionDate.value,
  };

  return formObj;
}

export {formData}