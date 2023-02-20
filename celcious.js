let Cel = document.getElementById("Cel");
let Fah = document.getElementById("Fah");
Cel.addEventListener("input",function() {
let Value = this.value
let Formula = (Value*1.8)+32
Fah.value = Formula                               // To Show One Value to another input etc....
})

Fah.addEventListener("input",function(){
    let Get = this.value
    let Fah = (Get - 32)*.5556
    Cel.value = Fah
})