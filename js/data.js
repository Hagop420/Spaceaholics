/* exported data */
let data = {
  view: 'entries',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

// localStorage

const previousTodoJSON = window.localStorage.getItem('Favorite-planets');

if (previousTodoJSON !== null) {
  data = JSON.parse(previousTodoJSON);
}

window.addEventListener('beforeunload', (e) => {
  // data object into a string

  const todosJSON = JSON.stringify(data);

  localStorage.setItem('Favorite-planets', todosJSON);
});
