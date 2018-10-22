let horribleTitle = document.querySelector('.horribleTitle')


function objectTest(stringS, intI, boolB){
    this.string =  stringS
    this.int = intI
    this.bool = boolB
}


function initializeObjects() {
    var object1 = new objectTest("proberty",1,true)
    var object2 = new objectTest("newProperty",2,false)
    
    console.table({
        object1,
        object2
    })
}


function enterTheHorror(){
    
}