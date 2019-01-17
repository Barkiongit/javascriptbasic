var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

function renderRepos(repos) {
  listElement.innerHTML = "";
  for (repo of repos) {
    var textElement = document.createTextNode(repo.name);
    var liElement = document.createElement('li');
    liElement.appendChild(textElement);
    listElement.appendChild(liElement);
  }
}

function renderLoad() {
  listElement.innerHTML = "";
  var textElement = document.createTextNode('Carregando...');
  var loadingElement = document.createElement('li');
  loadingElement.appendChild(textElement);
  listElement.appendChild(loadingElement);
}

function renderError() {
  listElement.innerHTML = "";
  var textElement = document.createTextNode('Usuario não encontrado!');
  var errorElement = document.createElement('li');
  errorElement.appendChild(textElement);
  listElement.appendChild(errorElement);
}


function listRepos() {
  var user = inputElement.value;
  return renderLoad() &&
     axios.get('https://api.github.com/users/' + user + '/repos')
        .then(function (response) {
      renderRepos(response.data);
        })
        .catch(function (reject) {
      renderError();
        });
}