const addElement = document.querySelector('.add');
const listElement = document.querySelector('.list');
const deleteButtonElement = document.querySelector('.remove')

addElement.addEventListener('click', () => {
  const taskToAdd = prompt('What task do you want to complete');

  // Checklist div
  const createCheckList = document.createElement('div');
  createCheckList.setAttribute('class', 'check-list');

  // Checkbox div and input
  const createCheckBox = document.createElement('div');
  createCheckBox.setAttribute('class', 'check-box');
  const createInputBox = document.createElement('input');
  createInputBox.setAttribute('type', 'checkbox');

  // Task to add
  const createTask = document.createElement('div');
  createTask.setAttribute('class', 'task-add');
  createTask.textContent = taskToAdd;

  // Add event listener to checkbox
  createInputBox.addEventListener('change', () => {
    if (createInputBox.checked) {
      createTask.classList.add('checked');
      createCheckList.classList.add('remove-checklist')
      deleteButtonElement.addEventListener('click', () =>{
        createCheckList.remove('remove-checklist')
    })
    } else {
      createTask.classList.remove('checked');
      createCheckList.classList.remove('remove-checklist')
    }
  });

  // Append
  createCheckBox.append(createInputBox);
  createCheckList.append(createCheckBox);
  createCheckList.append(createTask);

  // Append CheckList to list
  listElement.append(createCheckList);
});




