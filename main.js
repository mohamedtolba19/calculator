let inputs = document.querySelectorAll('.inputValue') ;
let displayInput = document.getElementById("display");
let deleteAllInput = document.getElementById("deleteAll");
let deleteInput = document.getElementById("delete");
let equalInput = document.getElementById("equal");
console.log(equalInput);

for(let i = 0 ; i<inputs.length ; i++)
{
    inputs[i].addEventListener("click" , function()
    {
     
      displayInput.value += inputs[i].value ; 
    })
}
deleteAllInput.addEventListener("click" , function()
{
    displayInput.value = "";
})
deleteInput.addEventListener("click" , function()
{
    displayInput.value = displayInput.value.toString().slice(0,-1) ;
   
})

equalInput.addEventListener("click" , function()
{
    displayInput.value = eval( displayInput.value);
   
})