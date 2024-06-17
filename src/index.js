import './style.css';

const nav = document.createElement('nav');
const ul = document.createElement('ul');
const li = document.createElement('li');
const a = document.createElement('a');
a.setAttribute('href', './index.html');
a.textContent = '+ Add Project'
li.appendChild(a);
ul.appendChild(li);
nav.appendChild(ul);

const header = document.createElement('header');
const h1 = document.createElement('h1');
h1.textContent = 'To Do Lists';
header.appendChild(h1);

const content = document.createElement('div');
content.setAttribute('id', 'contentConainer');

const footer = document.createElement('footer');
const p = document.createElement('p');
p.innerHTML = '&copy;BigTrav Production 2021';
footer.appendChild(p);

document.body.appendChild(nav);
document.body.appendChild(header);
document.body.appendChild(content);
document.body.appendChild(footer);