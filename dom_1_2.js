/*
const tasksList = document.querySelector('.tasks-list')
if (!tasksList) {
  console.error("Элемент с классом '.tasks-list' не найден!");
}
// Создаем INPUT, далее переводим его в функцию и выводим в консоль созданный элемент
const createInputElement = (className, type, id) => {
  const input = document.createElement('input')
  input.classList.add(className)
  input.type = type
  input.id = id
  return input
}
const inputElement = createInputElement('checkbox-form__checkbox', 'checkbox', 'task-1')

// Создаем LABEL, далее переводим его в функцию и выводим в консоль созданный элемент
const createLabelElement = (htmlFor) => {
  const label = document.createElement('label')
  label.htmlFor = htmlFor
  return label
}
const labelElement = createLabelElement('task-1')

// Создаем FORM, далее переводим его в функцию и выводим в консоль созданный элемент
const createFormElement = (className) => {
  const form = document.createElement('form')
  form.classList.add(className)
  return form
}
const formElement = createFormElement('checkbox-form__checkbox')
formElement.prepend(inputElement, labelElement)

// Создаем SPAN, далее переводим его в функцию и выводим в консоль созданный элемент
const createSpanElement = (className, text) => {
  const span = document.createElement('span')
  span.classList.add(className)
  span.textContent = text
  return span
}
const spanElement1 = createSpanElement('task-item__text', 'Посмотреть новый урок по JavaScript')
const spanElement2 = createSpanElement('task-item__text', 'Выполнить тест после урока')
const spanElement3 = createSpanElement('task-item__text', 'Выполнить ДЗ после урока')

// Создаем BUTTON, далее переводим его в функцию и выводим в консоль созданный элемент
const createButtonElement = (className, text) => {
  const button = document.createElement('button')

  className.forEach(className => button.classList.add(className))
  button.textContent = text
  return button
}
const buttonElement = createButtonElement(['task-item__delete-button', 'default-button', 'delete-button'], 'Удалить')

// Создаем DIV, далее переводим его в функцию и выводим в консоль созданный элемент
const createDivElementDataTaskId = (className, taskId) => {
  const div = document.createElement('div')
  div.classList.add(className)
  div.dataset.taskId = taskId
  return div
}
const createDivElement = (className) => {
  const div = document.createElement('div')
  div.classList.add(className)
  return div
}

const divElementContent = createDivElement('task-item__main-content')
divElementContent.prepend(formElement, spanElement1)

const divElementContainer = createDivElement('task-item__main-container')
divElementContainer.prepend(divElementContent, buttonElement)

const divElementId = createDivElementDataTaskId('task-item__main-container', '1')
divElementId.prepend(divElementContainer)
tasksList.prepend(divElementId)
console.log(tasksList)
*/

const tasks = [
  {
    id: '1138465078061',
    completed: false,
    text: 'Посмотреть новый урок по JavaScript',
},
{
    id: '1138465078062',
    completed: false,
    text: 'Выполнить тест после урока',
},
{
    id: '1138465078063',
    completed: false,
    text: 'Выполнить ДЗ после урока',
},];

const tasksList = document.querySelector('.tasks-list');
const createTasks = (task) => {
  const taskElement = document.createElement('div')
  taskElement.classList.add('task-item')
  taskElement.setAttribute('data-task-id', task.id)

  const mainContainer = document.createElement('div')
  mainContainer.classList.add('task-item__main-container')

  const mainContent = document.createElement('div')
  mainContent.classList.add('task-item__main-content')

  const checkboxForm = document.createElement('form')
  checkboxForm.classList.add('checkbox-form')

  const inputId = document.createElement('input')
  inputId.classList.add('checkbox-form__checkbox')
  inputId.type = 'checkbox'
  inputId.id = task.id
  inputId.checked =task.completed  // Добавлено для отображения состояния задачи

  const labelElement = document.createElement('label')
  labelElement.htmlFor = task.id

  const spanElement = document.createElement('span')
  spanElement.classList.add('task-item__text')
  spanElement.textContent = task.text

  const buttonElement = document.createElement('button')
  buttonElement.classList.add('task-item__delete-button',  'default-button', 'delete-button')
  buttonElement.textContent = 'Удалить'

  checkboxForm.appendChild(inputId)
  checkboxForm.appendChild(labelElement)
  mainContent.appendChild(checkboxForm)
  mainContent.appendChild(spanElement)
  mainContainer.appendChild(mainContent)
  mainContainer.appendChild(buttonElement)
  taskElement.appendChild(mainContainer)
  return taskElement
}

if (tasksList) {
  for (let i = 0; i < tasks.length; i++) {
      const taskOfElement = createTasks(tasks[i]);
      tasksList.appendChild(taskOfElement);
  }
} else {
  console.error('Элемент с селектором ".tasks-list" не найден.');
}
console.log(createTasks(tasks))