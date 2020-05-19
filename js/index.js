// Your code goes here
let links = document.querySelectorAll('a');
let navbar = document.querySelector('.nav-container');
let buttons = document.querySelectorAll('.btn');
let images = document.querySelectorAll('img');
let content = document.querySelectorAll('p');
let headings = document.querySelectorAll('h2');
let smallheadings = document.querySelectorAll('h4');
let page = document.querySelector('.container');

links.forEach(item => (item.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    item.style.fontSize = "3.6rem";

})))

navbar.addEventListener("mouseover", e => {
    navbar.style.backgroundColor = 'teal';
    navbar.style.color = 'white';
    links.forEach((item => item.style.color = 'white'));
})
navbar.addEventListener("mouseout", e => {
    navbar.style.backgroundColor = 'white';
    navbar.style.color = "#212529";
    links.forEach((item => item.style.color = '#212529'))
    links.forEach((item => item.style.fontSize = '1.6rem'))


})
images.forEach(item => (item.addEventListener('mouseenter', (e)=> {
    item.style.border = '2px inset green';
    gsap.to(item, {scale: 1.3});
})))
images.forEach(item => (item.addEventListener('mouseleave', (e)=> {
    item.style.border = 'none';
    gsap.to(item, {scale: 1});
})))
content.forEach(item => (item.addEventListener('click', e => {
    item.style.color = 'purple';
})))
buttons.forEach(item => (item.addEventListener('dblclick', e => {
    gsap.to(item, {scale: 1.75})
    item.style.backgroundColor = "orange"
} )))
buttons.forEach(item => (item.addEventListener('mouseleave', e => {
    gsap.to(item, {scale: 1})
    item.style.backgroundColor = "#17A2B8"
} )))
headings.forEach(item => (item.addEventListener('wheel', e =>{
    item.style.backgroundColor = 'yellow';
} )))
smallheadings.forEach(item => item.addEventListener('mousedown', e => {
    item.style.color = 'red';
}))
smallheadings.forEach(item => item.addEventListener('mouseup', e => {
    item.style.color = '#212529';
}))
page.addEventListener('click', e => {
    page.style.backgroundColor = 'red';
})
buttons.forEach(item => item.addEventListener('mouseover', e => {
    gsap.to(item, {
        duration: 2, ease: "bounce.out", rotation: 360
    })
}))
