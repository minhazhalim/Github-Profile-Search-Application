const apiURL = 'https://api.github.com/users/';
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
async function getUser(username){
     const response = await fetch(apiURL + username);
     const responseData = await response.json();
     createUserCard(responseData);
     getRepository(username);
}
getUser('minhazhalim');
async function getRepository(username){
     const response = await fetch(apiURL + username + '/repos');
     const responseData = await response.json();
     addRepositoryToCard(responseData);
}
function createUserCard(user){
     const cardHTML = `
          <div class="card">
               <div><img class="avatar" src="${user.avatar_url}" alt="${user.name}" /></div>
               <div class="user-info">
                    <h2>${user.name}</h2>
                    <p>${user.bio}</p>
                    <ul class="info">
                         <li>${user.followers}<strong>Followers</strong></li>
                         <li>${user.following}<strong>Following</strong></li>
                         <li>${user.public_repos}<strong>Repos</strong></li>
                    </ul>
                    <div id="repository"></div>
               </div>
          </div>
     `;
     main.innerHTML = cardHTML;
}
function addRepositoryToCard(repository){
     const repositoryElement = document.getElementById('repository');
     repository.sort((a,b) => b.stargazers_count - a.stargazers_count)
               .slice(0,10)
               .forEach((repo) => {
                    const anchor = document.createElement('a');
                    anchor.classList.add('repository');
                    anchor.href = repo.html_url;
                    anchor.target = '_blank';
                    anchor.innerText = repo.name;
                    repositoryElement.appendChild(anchor);
               });
}
form.addEventListener('submit',(event) => {
     event.preventDefault();
     const user = search.value;
     if(user){
          getUser(user);
          search.value = '';
     }
});