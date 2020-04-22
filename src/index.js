console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function(e){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())

    .then(json => {json.message
    let s = document.getElementById('dog-image-container')
    
    let q = json.message 
    for(let i =0; i<q.length; i++){
        let a = document.createElement('img')
        a.src= q[i];
        s.appendChild(a);
    }
    
})

})