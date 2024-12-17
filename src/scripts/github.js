import demoIcon from '../img/demo-icon.svg';
import githubIcon from '../img/github-icon.svg';
import githubStar from '../img/star.svg';

export const fetchRepositories = () => {
  const githubUser = 'krzysiekkalinowski';
  const githubDirection = 'desc';
  const projectsContainer = document.querySelector('.projects--js');

  fetch(
    `https://api.github.com/users/${githubUser}/repos?direction=${githubDirection}`
  )
    .then((response) => response.json())
    .then((response) => {
      for (let repository of response) {
        const {
          name,
          html_url,
          description,
          topics,
          homepage,
          stargazers_count,
        } = repository;

        let tags = '';

        for (let tag of topics) {
          tags += `<span class="py-1 px-2 rounded-md bg-accentBackgroundColor">${tag}</span>`;
        }

        const htmlString = `<article class="rounded-xl overflow-hidden flex flex-col bg-gradient-to-br from-white/10 to-white/5 shadow-articleShadow">
                <div class="h-11 bg-gradient-to-br from-white/10 to-white/5 flex p-4 gap-2 container--js">
                    <span class="h-3 w-3 block rounded-imgRadius bg-backgroundColor/50 dot--js"></span><span class="h-3 w-3 block rounded-imgRadius bg-backgroundColor/50 dot--js"></span><span class="h-3 w-3 block rounded-imgRadius bg-backgroundColor/50 dot--js"></span>
                </div>
                <div class="flex flex-col gap-y-4 p-5 grow justify-between">
                    <div class="flex gap-x-4 flex-wrap">
                    <h3 class="font-bold text-2xl">${name}</h3>
                    <span class="inline-flex items-baseline gap-x-1 py-1 px-2 rounded-md bg-accentBackgroundColor"><img src="${githubStar}" /><p class="text-gray-400 counter--js">${stargazers_count}</p></span>
                    </div>
                    <p class="text-xl leading-6 text-gray-400">
                    ${description}
                    </p>
                    <div class="flex gap-1 flex-wrap">
                    ${tags}
                    </div>
                </div>
                <div class="flex flex-col gap-y-4 p-5">
                    <a href="${homepage}" rel="nofollow noreferrer" target="_blank" class="py-4 px-5 bg-backgroundColor font-bold text-primaryColor flex gap-x-2 w-max rounded-xl border-gray-800 border-2 duration-500 hover:border-primaryColorHover hover:text-primaryColorHover"><img src="${demoIcon}" />View demo</a>
                    <a href="${html_url}" rel="nofollow noreferrer" target="_blank" class="py-4 px-5 bg-backgroundColor font-bold text-primaryColor flex gap-x-2 w-max rounded-xl border-gray-800 border-2 duration-500 hover:border-primaryColorHover hover:text-primaryColorHover"><img src="${githubIcon}" />Source code</a>
                </div>
                </article>`;
        if (homepage && topics.includes('portfolio')) {
          projectsContainer.insertAdjacentHTML('afterbegin', htmlString);
        }
      }
    })
    .catch((error) => {
      console.error(
        'There has been a problem with your fetch operation:',
        error
      );
    });
};
