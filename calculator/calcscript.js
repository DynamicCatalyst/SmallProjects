const inputValue = document.getElementById('userInputId');

// const btn = document.getElementById("equalTo");
// btn.addEventListener('click',
//     ()=>
//     {
//         inputValue.innerText  = "yoyo";
//     }
// )
let shouldIClear = false;
const number = document.querySelectorAll(".numbers").forEach(
    (item)=>
    {
        item.addEventListener('click', function (e){
            if(inputValue.innerText ==="Nan"){
                inputValue.innerText = "";
            }
            if(inputValue.innerText === "0"){
                inputValue.innerText = "";
            }
            if(shouldIClear == true){
                inputValue.innerText = "";
                shouldIClear = false;
            }
            // console.log(`e.target = ${typeof(e.target.innerHTML.trim())}`);
            inputValue.innerText+= e.target.innerHTML.trim();
        });
    }
);

const calculate = document.querySelectorAll('.operations').forEach((item)=>{
    
    item.addEventListener('click', (e) =>{
        console.log((e.target.innerHTML));
        let lastValue = 
        inputValue.innerText.substring(inputValue.innerText.length,inputValue.innerText.length -1);

        if(!isNaN(lastValue) && e.target.innerHTML === "="){
            inputValue.innerText = eval(inputValue.innerText);
            shouldIClear = true;
        }
        else if(e.target.innerHTML==="AC"){
            inputValue.innerText = 0;
        }
        else if(e.target.innerHTML === "DEL"){
            inputValue.innerText = inputValue.innerText.substring(0,inputValue.innerText.length-1);
            if(inputValue.innerText.length ==0 )
               { inputValue.innerText = 0;}
            }
            else{
                if(!isNaN(lastValue)){
                    inputValue.innerText += e.target.innerHTML;
                }
            }
        }
        
        );
});