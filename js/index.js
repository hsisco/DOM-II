// Your code goes here

const scale = document.querySelector('.content-destination img');
  scale.addEventListener('mouseenter', e => {
    scale.style.transform = 'scale(1.3)';
    scale.style.transition = 'transform 0.5s';
  })
  scale.addEventListener('mouseleave', e => {
    scale.style.transform = 'scale(1)';
    scale.style.transition = 'transform 0.5s';
  })

const cityBus = document.querySelector('.intro img');
  cityBus.addEventListener('click', e => {
    cityBus.src = '/img/fun-bus-city.jpg';
    cityBus.alt = "bus on the floor in a city";
    cityBus.innerHTML
  })

const zoom = document.querySelector('.img-content img');
  zoom.addEventListener('wheel', e => {
    // e.preventDefault();
    console.log("The Wheel event is firing.")
    // let set = 1;
    // if(e.deltaY < 0){
    //   set * e.deltaY * -2;
    // }
    // else {
    //   set / e.deltaY * 2;
    // }
    // zoom.style.transform = 'set(1)';
  })

const letsNot = document.querySelector('.text-content h2');
  letsNot.addEventListener('click', e => {
    console.log("Click event is firing");
  letsNot.innerHTML = 'Lets not.';
  console.log(letsNot);
  })

window.addEventListener('load', e => {
  console.log("You are now connected to the mainframe.");
})

const noContext = document.querySelector('.text-content p');
  noContext.addEventListener('contextmenu', e => {
    e.preventDefault();
  })

const contentDestination = document.querySelector('.content-pick')
  console.log(contentDestination);

const destination = contentDestination.querySelector('.btn')
  console.log(destination);
  destination.addEventListener('click', e => {
    destination.style.backgroundColor = 'green';
    })

// const button = document.querySelectorAll('.btn');
//   button.forEach(btn => {
//     btn.addEventListener('click', e => {
//     e.target.style.backgroundColor = 'green';
// })
//   });