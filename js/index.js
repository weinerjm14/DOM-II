// Your code goes here
let links = document.querySelectorAll('a');
let navbar = document.querySelector('.nav-container');
links.forEach(item => (item.addEventListener('click', e => {
    e.preventDefault();
})))
navbar.addEventListener("mouseover", e => {
    navbar.style.backgroundColor = 'teal';
    navbar.style.color = 'white';
    links.forEach((item => item.style.color = 'white'))
})
navbar.addEventListener("mouseout", e => {
    navbar.style.backgroundColor = 'white';
    navbar.style.color = "#212529";
    links.forEach((item => item.style.color = '#212529'))

})