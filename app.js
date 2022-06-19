const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');
const port = process.env.PORT || 8000;

const generateTemplate = todo => {

  const html = `
    <li class ="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;

  list.innerHTML += html

};

addForm.addEventListener('submit', e => {

    e.preventDefault();
    const todo = addForm.add.value.trim();
  
    generateTemplate(todo);

});   
//delete todos
list.addEventListener('click', e => {

  if(e.target.classList.contains('delete')){
    e.target.parentElement.remove();
  }

});

const filterTodos =(term) => {

  Array.from(list.children)
  .filter((todo) => !todo.textContent.includes(term))
  .forEach((todo) => todo.classList.add('filtered'));

  Array.from(list.children)
  .filter((todo) => !todo.textContent.includes(term))
  .forEach((todo) => todo.classList.add('filtered'));

};

//keyup event
search.addEventListener('keyup', () => {
  const term = search.value.trim();
  filterTodos(term);
});

app.listen(port, () => {
  console.log(`listening to the port no 8000`)
})
