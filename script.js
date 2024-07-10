let form = document.querySelector('#createList');
let input = document.querySelector('input');
let main = document.querySelector('.main');
let ul = document.querySelector('#myList');

//creating a li tag that will display the entered task in my to-do list
function addTask() {
  let li = document.createElement('li');
  let span = document.createElement('span');
  span.textContent = input.value;
  let label = document.createElement('label');
  label.textContent = 'Completed';
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  let deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  let updateBtn = document.createElement('button');
  updateBtn.textContent = 'Update';

  li.appendChild(span);
  li.appendChild(label);
  label.appendChild(checkbox);
  li.appendChild(deleteBtn);
  li.appendChild(updateBtn);

  return li;
  
}

//function for button ‘ADD’ simply to add the entered task on the list
form.addEventListener('submit', (event) => {
  event.preventDefault();

  let li = addTask();
  let liTag = document.getElement
  let ulTag = document.getElementById("myList");
  let firstChild = ulTag.firstChild;
  if(input.value === '') {
    alert('Please enter a task.');
  } else {
    ulTag.insertBefore(li, firstChild);
  }
  
  document.getElementById("input").value = '';
});


ul.addEventListener('change', (event) => {
  let checkbox = event.target;
  let checked = checkbox.checked;
  let li = checkbox.parentNode.parentNode;
  if(checked) {
    li.className = 'responded';
  } else {
    li.className = '';
  }
});

//functions for button that will delete, update and save changes for task in the my to-do list.
ul.addEventListener('click', (event) => {
  if(event.target.tagName === 'BUTTON') {
    let button = event.target;
    let li = button.parentNode;
    let ul = li.parentNode;
    if(button.textContent === 'Delete') {
      ul.removeChild(li);
    } else if(button.textContent === 'Update') {
      let span = li.firstElementChild;
      let input = document.createElement('input');
      input.type = 'text';
      input.value = span.textContent;
      li.insertBefore(input, span);
      li.removeChild(span);
      button.textContent = 'save';
    } else if(button.textContent === 'save') {
      let input = li.firstElementChild;
      let span = document.createElement('span');
      span.textContent = input.value;
      li.insertBefore(span, input);
      li.removeChild(input);
      button.textContent = 'Update';
    }
  }
});


//to show task that are not yet completed
let div = document.createElement('div');
div.className = 'showHide';
let label = document.createElement('label');
label.textContent = 'Show all tasks that are not yet completed';
let checkbox = document.createElement('input');
checkbox.type = 'checkbox';

div.appendChild(label);
label.appendChild(checkbox);
main.insertBefore(div, ul);

checkbox.addEventListener('change', (event) => {
  let isChecked = event.target.checked;
  let lis = ul.children;

  if(isChecked) {
    for(let i = 0; i < lis.length; i++) {
      let li = lis[i];

      if(li.className === 'responded') {
        li.style.display = 'none';
      } else {
        li.style.display = '';
      }
    }
  } else {
    for(let i = 0; i < lis.length; i++) {
      let li = lis[i];
      li.style.display = '';
    }
  }
});