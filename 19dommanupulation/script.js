

const box_1 = document.getElementById("box-1")
console.log(box_1)

const box_11 = document.getElementsByClassName("container")
console.log(box_11);

const newText =  document.createElement('p')
newText.innerHTML = "This is my way" 
// newText.classList.add("box");
newText.style.color="purple"
const boxx= document.getElementById("container")
boxx.appendChild(newText)



const box = document.getElementsByClassName("box")

for(let i=0; i<box.length; i++){
    box[i].classList.add('random-class')
}

box_1.classList.remove('random-class')


