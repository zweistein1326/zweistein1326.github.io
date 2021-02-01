const cards = document.getElementsByClassName('card');
const containers = document.getElementsByClassName('container')
//Items
const title = document.querySelector('.title')
const profile = document.querySelector('.profile img')
const next = document.getElementsByClassName('next')
const description = document.querySelector('.info h3')
const social = document.querySelector('.social')
const resume = document.querySelector('.resume')

const work = document.querySelector('#work')
const skills = document.querySelector('#skills')
const education = document.querySelector('#education')
const home = document.querySelector('#home')
const submit = document.querySelector('#submit')
console.log(next);


var index = 0

submit.addEventListener('click',(e)=>{
    
})

for (index = 0; index < containers.length; index++) {
    const container = containers[index];
    const container2 = containers[index + 1]
    const card = cards[index];
    container.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 75
        let yAxis = (window.innerHeight / 2 - e.pageY) / 125
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    })
    container.addEventListener('mouseenter', (e) => {
        card.style.transition = 'none'
        //Popout
        resume.style.transform = "translateZ(20px) translateY(-2px)"
        // title.style.transform = "translateZ(150px)"
        // profile.style.transform = "translateZ(200px) rotateZ(-45deg)"
        // description.style.transform = "translateZ(100px)"
        // social.style.transform = "translateZ(100px)"
    })

    container.addEventListener('mouseleave', (e) => {
        card.style.transition = 'all 0.5s ease'
        card.style.transform = `rotateY(0deg) rotateX(0deg)`
        resume.style.transform = "translateZ(0px) translateY(0px)"
        // title.style.transform = "translateZ(0px)"
        // profile.style.transform = "translateZ(0px) rotateZ(0deg)"
        // next.style.transform = "translateZ(0px)"
        // description.style.transform = "translateZ(0px)"
        // social.style.transform = "translateZ(0px)"
    })

    next[index].addEventListener('click', () => {
        console.log(container2);
        // cards[index].style.transform = `translateZ(180deg)`
        container2.style.display = "inline-flex"
        container.style.display = "none"
    })

}



