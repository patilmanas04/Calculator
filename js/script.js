let string = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach(function(button){
    button.addEventListener('click', function(e){
        if(e.target.innerHTML === "="){
            if(string===""){
                document.querySelector(".display").value = "";
            }
            else{
                string = eval(string);
                document.querySelector(".display").value = string;
            }
        }
        else if(e.target.innerHTML === "AC"){
            string = "";
            document.querySelector(".display").value = string;
        }
        else if(e.target.innerHTML === "C"){
            string = string.slice(0, string.length - 1);
            document.querySelector(".display").value = string;
        }
        else{
            if(e.target.innerHTML==="X"){
                string = string + "*";
                document.querySelector(".display").value = string;
            }
            else{
                string = string + e.target.innerHTML;
                document.querySelector(".display").value = string;
            }
        }
    });
});