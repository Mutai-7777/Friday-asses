document.addEventListener('DOMContentLoaded',() =>{
    const list = document.querySelector('#to-do ul');



// delete to-do list

list.addEventListener("click", (e) => {
    if (e.target.className == "delete") {
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
})
})

// add list to-do list

addform.addEventListener('submit', (e) => {
    e.preventDefault();
});

//writing
document.getElementsByName()
