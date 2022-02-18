/**
 * @param string tag name
 * @param string class name
 * @param Object {text, source, data, atr}
 * @returns Node
 */
let createBlock = (function (tag, selector, props) {
  let block = document.createElement(tag);
  if(selector)block.classList.add(selector);
  if (props) {
    let {
      text,
      source,
      data,
      atr,
    } = props;
    if (text) block.textContent = text;
    if (source) block.src = source;
    if (data) block.dataset[data[0]] = data[1];
    if (atr) {
      for(let key in atr){
        block.setAttribute(key, atr[key]);
      }
    }
  }
  return block
})

export {
  createBlock
}