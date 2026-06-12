let input=document.getElementById('ib');
let buttons=document.querySelectorAll('button');


let string = "";
let s="";
let arr = Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){

            string=eval(s);
         
            input.value=string;

        }
        else if(e.target.innerHTML=='AC'){
            string="";
            s=string;
            input.value=string;
        }
        else if(e.target.innerHTML=='Del'){
            string=string.substring(0,string.length-1);
            s=s.substring(0,s.length-1);
            input.value=string;
        }
        else if(e.target.innerHTML=='*'){
            string+="X";
            s+="*";
            input.value=string;
        }
        else{
            string+=e.target.innerHTML;
            s+=e.target.innerHTML;
            input.value=string;
        }

    })
})