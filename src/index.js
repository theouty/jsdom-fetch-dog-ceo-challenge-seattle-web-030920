console.log('%c HI', 'color: firebrick')

function changeColor(dog) {
    dog.style.background = "#33cc33"
}

document.addEventListener('DOMContentLoaded', function(e){

    // get promise object
    fetch("https://dog.ceo/api/breeds/image/random/4")
    // parse as json
    .then(res => res.json())
    // grab url array
    .then(json => 
        {
    // process urls and add to img tags, add to DOM
            let s = document.getElementById('dog-image-container')
            let q = json.message 
            for(let i =0; i<q.length; i++){
                let a = document.createElement('img')
                a.src= q[i];
                s.appendChild(a);
            }
        }
    )

    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json()
    .then(json => {
        let list = document.getElementById("dog-breeds")
        let all = json.message
        for (let breed in all) {
            // debugger
            // if the breed key is empty, print it
            if (all[`${breed}`].length == 0) {
                let item = document.createElement('li')
                console.log(`${breed}`)
                item.innerText = `${breed}`
                item.classList.add("dog")
                item.addEventListener('click', function(e) {
                    changeColor(item)
                })
                list.appendChild(item)
            } else {
                // debugger
                // if it's not empty, print each subbreed, plus breed
                for (let sub of all[`${breed}`]) {
                    let item = document.createElement('li')
                    console.log(`${sub} ${breed}`)
                    item.innerText = `${sub} ${breed}`
                    item.classList.add("dog")
                    item.addEventListener('click', function(e) {
                        changeColor(item)
                    })
                    list.appendChild(item)
                }
            }
        }
        
    }))

    
    
    // let dogs = document.getElementsByClassName("dog")
    // for (let i = 0; i < dogs.length; i++) {
    //     debugger
    //     dogs[i].addEventListener('click', changeColor(dog))
    // }
    
})
