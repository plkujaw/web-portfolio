const projects = [
  {
    id: 1,
    name: 'AMYP Ventures (WIP)',
    info: 'WordPress website for an early stage mobility companies investor.',
    stack:
      'Tech stack: PHP, WordPress, ACF, SCSS, JavaScript, Lottie.',
    links: `<a href="https://wordpress-994865-3606253.cloudwaysapps.com/" target="_blank" rel="noreferrer"><img src="img/www.png" alt="website" class="icon"></a>`,
    img: 'img/amyp.jpg',
  },  
  {
    id: 2,
    name: 'Pollitt&Partners (WIP)',
    info: 'WordPress website for a creative agency.',
    stack:
      'Tech stack: PHP, WordPress (Gutenberg), SCSS, JavaScript.',
    links: `<a href="https://pollittpartner.wpengine.com/" target="_blank" rel="noreferrer"><img src="img/www.png" alt="website" class="icon"></a>`,
    img: 'img/pp.jpg',
  },  
  {
    id: 3,
    name: 'Duke & Duck',
    info: 'WordPress website for an award-winning content studio.',
    stack:
      'Tech stack: PHP, WordPress (Gutenberg), ACF, Vimeo API, SCSS, JavaScript, Lottie.',
    links: `<a href="https://dukeduck.com/" target="_blank" rel="noreferrer"><img src="img/www.png" alt="website" class="icon"></a>`,
    img: 'img/dukeduck.jpg',
  },
      {
    id: 4,
    name: 'Adero Partners',
    info: 'WordPress website for a wealth management counselors.',
    stack:
      'Tech stack: PHP, WordPress, ACF, SCSS, JavaScript, Lottie.',
    links: `<a href="https://aderopartners.com/" target="_blank" rel="noreferrer"><img src="img/www.png" alt="website" class="icon"></a>`,
    img: 'img/adero.jpg',
  },
    {
    id: 5,
    name: 'Stonewall Housing',
    info: 'WordPress website for a LGBTQ+ Charity.',
    stack:
      'Tech stack: PHP, WordPress (Gutenberg), ACF, SCSS, JavaScript.',
    links: `<a href="https://stonewallhousing.org/" target="_blank" rel="noreferrer"><img src="img/www.png" alt="website" class="icon"></a>`,
    img: 'img/stonewall.jpg',
  },

     
    {
    id: 6,
    name: 'Earlsgate',
    info: 'Build a custom WordPress website and theme for a traditional and classical country houses developer.',
    stack:
      'Tech stack: PHP, WordPress, SCSS, JavaScript.',
    links: `<a
            href="https://earlsgate.com"
            target="_blank"
            rel="noreferrer"
            ><img src="img/www.png" alt="website" class="icon"
          /></a>`,
    img: 'img/earlsgate.jpg',
  },
    {
    id: 7,
    name: 'ARC Ratings',
    info: 'Build a custom WordPress website and theme for a credit rating agency.',
    stack:
      'Tech stack: WordPress, PHP, Custom Post Types, Custom Taxonomies, Advanced Custom Fields, HTML, SCSS, JavaScript, jQuery, Gulp.js.',
    links: `<a
            href="https://arcratings.com/"
            target="_blank"
            rel="noreferrer"
            ><img src="img/www.png" alt="website" class="icon"
          /></a>`,
    img: 'img/arc.jpg',
  },

  {
    id: 8,
    name: 'Biotechflow',
    info: 'WordPress build for a bio-technology company that specialises in intensified bio separations, Downstream Process using Expanded Bed Adsorption chromatography step.',
    stack:
      'Tech stack: WordPress, Timber/Twig, ACF, SCSS, gulp.js, JavaScript, jQuery, Lottie.',
    links: `<a href="https://biotechflow.com/" target="_blank" rel="noreferrer"><img src="img/www.png" alt="website" class="icon"></a>`,
    img: 'img/btf.png',
  },
  {
    id: 9,
    name: 'Hightide',
    info: 'WordPress website for kayak school and hire company based in Switzerland.',
    stack:
      'Tech stack: WordPress (Gytenberg), Timber/Twig, ACF, SCSS, gulp.js, JavaScript, jQuery.',
    links: `<a href="http://hightide.ch/" target="_blank" rel="noreferrer"><img src="img/www.png" alt="website" class="icon"></a>`,
    img: 'img/ht.png',
  },
  {
    id: 10,
    name: 'Tumu Consulting',
    info: 'WordPress build for a civil engineering consultancy.',
    stack:
      'Tech stack: WordPress, Timber/Twig, ACF, SCSS, gulp.js, JavaScript, jQuery.',
    links: `<a
            href="https://www.tumuconsulting.com/"
            target="_blank"
            rel="noreferrer"
            ><img src="img/www.png" alt="website" class="icon"></a>
          `,
    img: 'img/tumu.png',
  },
  
  {
    id: 11,
    name: 'Greenheart',
    info: 'Build a custom WordPress website and theme for social & environmental impact consultancy',
    stack:
      'Tech stack: WordPress, Timber/Twig, Advanced Custom Fields, HTML, SCSS, JavaScript, Gulp.js.',
    links: `<a
            href="https://greenheartbusiness.com/"
            target="_blank"
            rel="noreferrer"
            ><img src="img/www.png" alt="website" class="icon"
          /></a>`,
    img: 'img/greenheart.jpg',
  },

];

const img = document.getElementById('project-img');
const name = document.getElementById('name');
const info = document.getElementById('info');
// const stack = document.getElementById('stack');
const links = document.getElementById('links');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
  showProject(currentItem);
});

showProject = (project) => {
  const item = projects[project];
  img.src = item.img;
  title.textContent = item.name;
  info.innerHTML = item.info;
  // stack.textContent = item.stack;
  links.innerHTML = item.links;
};

nextBtn.addEventListener('click', () => {
  currentItem++;
  // when we reach last element in the array we start from the beginning
  if (currentItem > projects.length - 1) {
    currentItem = 0;
  }
  showProject(currentItem);
  // window.location.replace("index.html#projects");
});

// show previous review

prevBtn.addEventListener('click', () => {
  currentItem--;
  // when we reach last element in the array we start from the last item
  if (currentItem < 0) {
    currentItem = projects.length - 1;
  }
  showProject(currentItem);
  // window.location.replace("index.html#projects");
});

// show random review

 // randomBtn.addEventListener('click', () => {
 //   currentItem = Math.floor(Math.random() * projects.length);
 //   showProject(currentItem);
 //   window.location.replace('index.html#projects');
 // });
