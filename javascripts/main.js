const queryAPI = async URL => {
  let data = [];
  const response = await fetch(URL);

  if (response.status === 200) {
    data = await response.text();
    data = JSON.parse(data);
    return data
  }

  return response;
}

const getGitHubRepositories = async username => {
  const GitHubRepositoriesURL = `https://api.github.com/users/${username}/repos`;
  const repositories = await queryAPI(GitHubRepositoriesURL);
  return repositories;
}

const renderRepositories = async () => {
  const $containerRepositories = document.getElementById('repositories');
  const repositories = await getGitHubRepositories('gabriel-me');
  let contentHTML = '';

  repositories.map(repository => {
    contentHTML += `
      <a href='${repository.html_url}' target='_blank'>
        <div class='repository'>
          <h2>${repository.name}</h2>
          <p>${repository.description}</p>
        </div>
      </a>`;
  });

  $containerRepositories.innerHTML = contentHTML;
}

renderRepositories();