let display = document.getElementById("display");

console.log(display);
console.log(display);
function appendToDisplay(element){
    display.value += element;
 }

 function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
 }

 let clear = document.getElementById("clear");
 clear.addEventListener("click", () => {
                                display.value = " ";
                                }, false);
