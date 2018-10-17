let horribleTitle = document.querySelector('.horribleTitle')



const object1 = {
    property1: 'property1',
    property2: 1,
    property3: false
}

const object2 = {
    property1: 'property2',
    property2: 2,
    property3: true
}



function initializeObjects() {
    console.table({
        object1,
        object2
    })
}


function enterHorribleWebsite() {
    horribleTitle.addEventListener('click', function () {
        horribleTitle.classList.add('elementToFadeInAndOut')
        setTimeout(function () {
            horribleTitle.classList.remove('elementToFadeInAndOut')
        }, 4000)
    })
}