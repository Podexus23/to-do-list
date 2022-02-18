import{createBlock} from './tagMaker';

const createMinTask = (function(){
  const minBlock = createBlock('div', 'min-task_container', {data: ['id', 1]})
  minBlock.innerHTML = `
  <h3 class="min-title title">title</h3>
  <div class="min-description">
    <div class="min-priority">maximum</div>
    <div class="min-date">00.00.00</div>
    <button class="min-delete">remove</button>
  </div>
  `;
  return minBlock
})

export {createMinTask}