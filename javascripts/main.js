const queryEndpoint = async endpoint => {
  try {
    let data = [];
    const response = await fetch(endpoint);
    data = await response.text();
    data = JSON.parse(data);
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}

const getGitHubRepositories = async username => {
  const repositoriesEndpoint = `https://api.github.com/users/${username}/repos`;
  const repositories = await queryEndpoint(repositoriesEndpoint);
  return repositories;
}

const renderGitHubRepositories = async username => {
  const $containerRepositories = document.getElementById('repositories');
  const repositories = await getGitHubRepositories(username);
  const errorMessage = 'Não foi possível carregar os repositórios';
  
  let contentHTML = '';

  if (repositories) {
    repositories.map(repository => {
      contentHTML += `
        <a href='${repository.html_url}' target='_blank'>
          <div class='repository'>
            <h2>${repository.name}</h2>
            <p>${repository.description}</p>
          </div>
        </a>`;
    });
  }  

  $containerRepositories.innerHTML = repositories ? contentHTML : errorMessage;
}

renderGitHubRepositories('gabriel-me');