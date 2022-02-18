import{createBlock} from './tagMaker';

let createForm = (function(){
  let container = createBlock('div', 'max-task_container', {data: ['id', 1]})
  
  function buildBaseNakedForm(){
    const form = createBlock('form', 'form-container');
    form.append(createTitle());
    form.append(createDescription());
    form.append(createTodosBlock());
    form.append(createOptions());
    form.append(createControlButtons());
    return form
  } 

  function createTitle(){
    const title = createBlock('div', 'task-title');
    title.innerHTML = 
      `<input type="text" name="title" id="task-title" placeholder="Task name">`
    return title
  }

  function createDescription(){
    const description = createBlock('div', 'task-description');
    description.innerHTML = 
      `<textarea name="description" id="task-description" placeholder="Description"></textarea>`
    return description
  }

  function createTodosBlock(){
    const todos = createBlock('div', 'task-todos');
    todos.innerHTML = `
    <div class="todo-container">
      <input type="checkbox" name="task-todo" id="todo">
      <textarea class="todo-title" value="Some important thing" ></textarea>
      <button type="button" class="remove-todo">x</button>
    </div>
    <div class="todo-container">
      <input type="checkbox" name="task-todo" id="todo">
      <textarea class="todo-title" value="Some important thing" ></textarea>
      <button type="button" class="remove-todo">x</button>
    </div>
    <button type="button" class="add-todo">Add checklist</button>
    `;
    return todos
  }

  function createOptions(){
    const options = createBlock('div', 'task-options');

    options.innerHTML = `
    <fieldset class="task-priority">
              <legend>Priority</legend>
              <div class="radio-wrapper">
                <input type="radio" name="priority" id="low-priority" value="low">
                <label for="low-priority">low</label>
              </div>
              <div class="radio-wrapper">
                <input type="radio" name="priority" id="medium-priority" value="medium" checked>
                <label for="medium-priority">medium</label>
              </div>
              <div class="radio-wrapper">
                <input type="radio" name="priority" id="high-priority" value="high">
                <label for="high-priority">high</label>
              </div>
    </fieldset>
    <div class="task-date">
      <label for="task-date">Date</label>
      <input type="date" name="date" id="task-date">
    </div>
    `
    return options
  }

  function createControlButtons(){
    const buttons = createBlock('div', 'task-add-remove');
    buttons.innerHTML = `
    <button type="button" class="button-add">Submit</button>
    <button type="button">Remove</button>
    <button type="button">Complete</button>
    `;
    return buttons
  }


  container.append(buildBaseNakedForm())
  return container
})

let createFormFromJSON = (function(formJson){
  function setID() {
    let id = Array.from(document.querySelectorAll('[data-id]'))
    .map(elem => elem.dataset.id)
    .sort((a,b) => b-a)[0];
    return +id + 1
  }

  let container = createBlock('div', 'max-task_container', {data: ['id', setID()]})
  let formObj = JSON.parse(formJson);

  function buildForm(){
    const form = createBlock('form', 'form-container');
    form.append(createTitle(formObj.title));
    form.append(createDescription(formObj.description));
    form.append(createTodosBlock(formObj.todos));
    form.append(createOptions(formObj.priority, formObj.date));
    form.append(createControlButtons());
    return form
  }

  function createTitle(text){
    const title = createBlock('div', 'task-title');
    if(text) {
      title.innerHTML = `<input type="text" name="title" id="task-title" value="${text}">`;
    } else {
      title.innerHTML = `<input type="text" name="title" id="task-title" placeholder="Task name">`;
    }
    return title
  }
  function createDescription(text){
    const description = createBlock('div', 'task-description');
    if(text){
      description.innerHTML = 
      `<textarea name="description" id="task-description" placeholder="Description">${text}</textarea>`;
    } else {
      description.innerHTML = 
      `<textarea name="description" id="task-description" placeholder="Description"></textarea>`;
    }
    return description
  }
  function createTodosBlock(todos){
    const todosContainer = createBlock('div', 'task-todos');
    let addButton = createBlock('button', 'add-todo', {
      text: 'Add checklist',
      atr: {'type': 'button'},
    })
    if(todos){
      for (let todo in todos){
        todosContainer.append(createTodo(todos[todo]))        
      };
      todosContainer.append(addButton)
    } else {
      todosContainer.append(addButton)
    }
  
    return todosContainer
  }
  function createTodo(todo){
    let {checked, text} = todo;
    let block = createBlock('div', 'todo-container');
    block.innerHTML = `
    <div class="todo-container">
      <input type="checkbox" name="task-todo" id="todo" ${(checked)? 'checked': ''}>
      <textarea class="todo-title">${text}</textarea>
      <button type="button" class="remove-todo">x</button>
    </div>`
    return block
  }
  function createOptions(checked, date){
    const options = createBlock('div', 'task-options');
    let levels = ['low', 'medium', 'high'];
    const fieldset = createBlock('fieldset', 'task-priority');
    const legend = createBlock('legend', 'task-priority-title', {text: 'Priority'});
    fieldset.append(legend);

    levels.forEach(level => {
      const wrapper = createBlock('div', 'radio-wrapper');
      const input = createBlock('input', undefined, {atr: {
        type: 'radio',
        name: 'priority',
        id: `${level}-priority`,
        value: `${level}`
      }})
      const label = createBlock('label', undefined, {
        atr: {for: `${level}-priority`},
        text: `${level}`,
    })
      if(level == checked) {
        input.setAttribute('checked', 'true');
      }
      wrapper.append(input);
      wrapper.append(label);
      fieldset.append(wrapper);
    });
    options.append(fieldset);

    const dateBlock = createBlock('div', 'task-date');
    dateBlock.innerHTML = `
      <label for="task-date">Date</label>
      <input type="date" name="date" id="task-date" ${(date) ? `value="${date}"`: ''}>
    `;
    options.append(dateBlock)
    return options
  }
  function createControlButtons(){
    const buttons = createBlock('div', 'task-add-remove');
    buttons.innerHTML = `
    <button type="button" class="button-add">Submit</button>
    <button type="button">Remove</button>
    <button type="button">Complete</button>
    `;
    return buttons
  }
  container.append(buildForm());
  return container
})

export {
  createForm,
  createFormFromJSON
}