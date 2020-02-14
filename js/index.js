// Your code goes here
let links = document.querySelectorAll('a');
let navbar = document.querySelector('.nav-container');
links.forEach(item => (item.addEventListener('click', e => {
    e.preventDefault();
})))
