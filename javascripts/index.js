function formatDate(date) {
  date = date.substring(0, 10)

  const [year, mounth, day] = date.split('-')
  const brazilDate = `${day}/${mounth}/${year}`

  return brazilDate
}

function render(elementReference, contentHTML) {
  const $element = document.querySelector(elementReference)
  $element.innerHTML = contentHTML
}

function renderRepositories(repositories) {
  const containerRepositoriesReference = '#repositories div'
  let repositoriesList = ''
  
  repositories.forEach(repository => 
    repositoriesList += `
      <a href='${repository.html_url}' target='_blank'>
        <div class='repository'>
          <h2 class='text'>${repository.name}</h2>
          <time>${formatDate(repository.updated_at)}</time>
        </div>
      </a>
    `
  )

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