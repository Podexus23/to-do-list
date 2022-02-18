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
    <button type="button">Submit</button>
    <button type="button">Remove</button>
    <button type="button">Complete</button>
    `;
    return buttons
  }


  container.append(buildBaseNakedForm())
  return container
})

export {createForm}