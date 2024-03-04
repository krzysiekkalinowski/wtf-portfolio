export const fetchRepositories = () => {
    const githubUser = "krzysiekkalinowski";
    const githubDirection = "desc";
    const projectsContainer = document.querySelector(".projects--js");

    fetch(
        `https://api.github.com/users/${githubUser}/repos?direction=${githubDirection}`
      )
        .then((response) => response.json())
        .then((response) => {
          for (let repository of response) {
            const { name, html_url, description } = repository;
            const htmlString = `<article class="rounded-xl overflow-hidden flex flex-col bg-gradient-to-br from-white/10 to-white/5 shadow-articleShadow">
                <div class="h-11 bg-gradient-to-br from-white/10 to-white/5 flex p-4 gap-2">
                    <span class="h-3 w-3 block rounded-imgRadius bg-backgroundColor/50"></span><span class="h-3 w-3 block rounded-imgRadius bg-backgroundColor/50"></span><span class="h-3 w-3 block rounded-imgRadius bg-backgroundColor/50"></span>
                </div>
                <div class="flex flex-col gap-y-4 p-5">
                    <div class="flex gap-x-4">
                    <h3 class="font-bold text-2xl">${name}</h3>
                    <span class="inline-flex items-baseline gap-x-1 py-1 px-2 rounded-md bg-accentBackgroundColor"><img src="img/star.svg" /><p class="text-gray-400 counter--js">27</p></span>
                    </div>
                    <p class="text-xl leading-6 text-gray-400">
                    ${description}
                    </p>
                    <div class="flex gap-x-1">
                    <span class="py-1 px-2 rounded-md bg-accentBackgroundColor">HTML</span><span class="py-1 px-2 rounded-md bg-accentBackgroundColor">CSS</span><span class="py-1 px-2 rounded-md bg-accentBackgroundColor">Tailwind</span>
                    <span class="py-1 px-2 rounded-md bg-accentBackgroundColor">JS</span>
                    </div>
                </div>
                <div class="flex flex-col gap-y-4 p-5">
                    <a href="#" class="py-4 px-5 bg-backgroundColor font-bold text-primaryColor flex gap-x-2 w-max rounded-xl"><img src="img/demo-icon.svg" />View demo</a>
                    <a href="${html_url}" class="py-4 px-5 bg-backgroundColor font-bold text-primaryColor flex gap-x-2 w-max rounded-xl"><img src="img/github-icon.svg" />Source code</a>
                </div>
                </article>`;
            projectsContainer.insertAdjacentHTML('afterbegin', htmlString);
        }
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
};