
var listElement = document.querySelector('ul');
var inputElement = document.querySelector('input');

function renderRepos(repos) {
    for (repo of repos) {

        var textElement = document.createTextNode(repo.name);
        var liElement = document.createElement('li');
        liElement.appendChild(textElement);
        listElement.appendChild(liElement);

    }
}
function listRepos() {
    var user = inputElement.value;
    return axios.get('https://api.github.com/users/' + user + '/repos')
        .then(function (response) {
            renderRepos(response.data);
        });
}
