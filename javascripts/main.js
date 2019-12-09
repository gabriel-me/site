function render(elementReference, contentHTML) {
  const $element = document.querySelector(elementReference)
  $element.innerHTML = contentHTML
}

function renderRepositories(repositories) {
  const containerRepositoriesReference = '#repositories'
  let repositoriesList = ''
  
  repositories.forEach(repository => {
    repositoriesList += `
      <a href='${repository.html_url}' target='_blank'>
        <div class='repository'>
          <h2>${repository.name}</h2>
          <p>${repository.description || ''}</p>
        </div>
      </a>`
  })

  render(containerRepositoriesReference, repositoriesList)
}

async function handleGitHubRepositories(username) {
  const repositoriesEndpoint = `https://api.github.com/users/${username}/repos`
  const response = await fetch(repositoriesEndpoint)
  
  if (response.status === 200) {
    const repositories = await response.json()
    renderRepositories(repositories)
  }
}

handleGitHubRepositories('gabriel-me')