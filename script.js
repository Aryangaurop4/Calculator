const input=document.getElementsByTagName('input')[0];
let String="";
let special=['+','*','-','/','%','.'];
let buttons=document.getElementsByTagName('td');
let arr=(Array.from(buttons));
arr.forEach((arr)=>{
    arr.addEventListener('click',(e)=>{
    console.log(e.target);
    if(e.target.innerHTML>=0 && e.target.innerHTML<=9){
        String+=e.target.innerHTML;
        input.value=String;
    }
    else if(e.target.innerHTML=='%' || e.target.innerHTML=='/' || e.target.innerHTML=='*' || e.target.innerHTML=='-' || e.target.innerHTML=='+' || e.target.innerHTML=='.'){
        let char=e.target.innerHTML;
        let l=String.length;
        console.log(String[l-1]);
        if(String[l-1]!=char){
            String+=char;
            input.value=String;
        }
        else if(String[l-1]=='%' || String[l-1]=='/' || String[l-1]=='*' || String[l-1]=='-' || String[l-1]=='+' || String[l-1]=='.'){
                let string2="";
                for(let e=0;e<(l-1);e++){
                    let charr=String.charAt(e);
                    string2+=charr;
                }
                string2+=char;
                console.log(string2);
                input.value=string2;
               }
           }
    else if(e.target.innerHTML==='AC'){
        String="";
        input.value=String;
    }
    else if(e.target.innerHTML==='='){
        String=eval(String);
        input.value=String;
    }
})})