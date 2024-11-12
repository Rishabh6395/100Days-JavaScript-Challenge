const tabs = document.querySelector('.tabs');
const gallery = document.querySelectorAll('.images')

tabs.addEventListener('click', (event) => {
    console.log(event.target.dataset.category);
    if(event.target.category !== undefined){
        filterSearch(event.target.dataset.category)
    }
});

const filterSearch = (value) =>{
    gallery.forEach((currElem) =>{
        console.log(currElem.dataset.category)
        if(currElem.dataset.category === value){
            currElem.style.display = 'block'
        }
        else if(value === "all"){
            currElem.style.display = 'block'
        }
        else{
            currElem.style.display = 'none'
        }
    })
}
