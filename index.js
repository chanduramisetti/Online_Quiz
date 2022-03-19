//function for clearing question 2

var results=[0,0,0,0,0,0,0,0];

function clear2(){
    
    for(var i=0;i<4;i++)
    document.getElementById("q2.s"+(i+1)).innerHTML="";

    document.getElementById("q21.radio").checked=false;
    document.getElementById("q22.radio").checked=false;
    document.getElementById("q23.radio").checked=false;
    document.getElementById("q24.radio").checked=false;

    document.getElementById("q2.status").innerHTML="";
    results[1]=0;
}

//validating question 3
function validq3(){
    results[2]=0;
    var k1=document.getElementById("select1").value;
    var k2=document.getElementById("select2").value;

    if(k1=="negative"){
        document.getElementById("q3.s1").innerHTML="✔";
        document.getElementById("q3.s1").style="color:green";
    }
    else{
        document.getElementById("q3.s1").innerHTML="X";
        document.getElementById("q3.s1").style="color:red";
    }

    if(k2!="negative"){
        document.getElementById("q3.s2").innerHTML="✔";
        document.getElementById("q3.s2").style="color:green";
    }
    else{
        document.getElementById("q3.s2").innerHTML="X";
        document.getElementById("q3.s2").style="color:red";
    }

    if(k1=="negative" && k2=="positive")
    {
        document.getElementById("q3.status").innerHTML="Correct ✔";
        document.getElementById("q3.status").style="color:green";
        results[2]=1;
        try_again(1);
    }
    else
    {
        document.getElementById("q3.status").innerHTML="X Try Again";
        document.getElementById("q3.status").style="color:red; font-size: 20px";
        try_again(0);
    }

}

// validating Question 4
function validq4(){
    var k1=document.getElementById("q4.t1").value;
    var k2=document.getElementById("q4.t2").value;
    results[3]=0;
    if(k1=="m")
    {
        document.getElementById("q4.s1").innerHTML="✔";
        document.getElementById("q4.s1").style="color:green";
    }
    else
    {
        document.getElementById("q4.s1").innerHTML="X";
        document.getElementById("q4.s1").style="color:red";
    }

    if(k2=="A")
    {
        document.getElementById("q4.s2").innerHTML="✔";
        document.getElementById("q4.s2").style="color:green";
    }
    else
    {
        document.getElementById("q4.s2").innerHTML="X";
        document.getElementById("q4.s2").style="color:red";
    }

    if(k1=="m" && k2=="A")
    {
        document.getElementById("q4.status").innerHTML="✔ Correct";
        document.getElementById("q4.status").style="color:green";
        results[3]=1;
        try_again(1);
    }
    else{
        document.getElementById("q4.status").innerHTML="X Try Again";
        document.getElementById("q4.status").style="color:red; font-size: 20px";
        try_again(0);
    }

}

// validating question 5
function validq5(){
    results[4]=0;
    var k1=document.getElementById("q5.t").value;
    k1=k1.toString();
    //alert(k1);
    k1=k1.toUpperCase();
    if(k1=="CENTIMETER" || k1=="CENTIMETRE")
    {
        results[4]=1;
        document.getElementById("q5.s").innerHTML="✔";
        document.getElementById("q5.s").style="color:green";
        document.getElementById("q5.status").innerHTML="✔ Correct";
        document.getElementById("q5.status").style="color:green";
        try_again(1);
    }
    else{
        document.getElementById("q5.s").innerHTML="X";
        document.getElementById("q5.s").style="color:red";
        document.getElementById("q5.status").innerHTML="X Try Again";
        document.getElementById("q5.status").style="color:red ; font-size:20px";
        try_again(0);
    }

}

// validating Question 6
function validq6(){
    var k1=document.getElementById("q6.true").checked;
    results[5]=0;
    document.getElementById("q6.s1").innerHTML="";
    document.getElementById("q6.s2").innerHTML="";
    document.getElementById("q6.s3").innerHTML="";
    if(k1)
    {
        results[5]=1;
        document.getElementById("q6.s1").innerHTML="✔";
        document.getElementById("q6.s1").style="color:green";
        document.getElementById("q6.status").innerHTML="✔ Correct";
        document.getElementById("q6.status").style="color:green";
        try_again(1);
    }
    else{
        if(document.getElementById("q6.false").checked)
        {
            document.getElementById("q6.s2").innerHTML="X";
            document.getElementById("q6.s2").style="color:red";
        }
        else{
            document.getElementById("q6.s3").innerHTML="X";
            document.getElementById("q6.s3").style="color:red";
        }
        document.getElementById("q6.status").innerHTML="X Try Again";
        document.getElementById("q6.status").style="color:red ; font-size:20px";
        try_again(0);
    
    }
}

// validating question 7
function validq7(){
    var arr=document.getElementsByClassName("q7_li");
    var ans=["c","e","a","b","d"];
    var f=true;
    results[6]=0;
    for(var i=0;i<5;i++)
    {
        
        if(arr[i].childNodes[1].value==ans[i]){
            arr[i].childNodes[3].innerHTML="✔";
            arr[i].childNodes[3].style="color:green";
        }
        else
        {
            f=false;
            arr[i].childNodes[3].innerHTML="X";
            arr[i].childNodes[3].style="color:red";
        }
    }
    var ele=document.getElementById("q7.status");
    if(!f)
    {
        ele.innerHTML="X Try Again";
        ele.style="color:red ; font-size:20px";
        try_again(0);
    }
    else
    {
        results[6]=1;
        ele.innerHTML="✔ Correct";
        ele.style="color:green";
        try_again(1);
    }
    
}

// opening and closing of explanation
function open_e(val){
    document.getElementById("open"+val).style="display:none;transition: all .5s;";
    document.getElementById("content"+val).style="display:block;transition: all .5s;";
    document.getElementById("close"+val).style="display:block;transition: all .5s;";
}

function close_e(val){
    document.getElementById("open"+val).style="display:block;transition: all .5s;";
    document.getElementById("content"+val).style="display:none;transition: all .5s;";
}

// validating question 1
function validq1(){
    var k1=document.getElementsByName("q1");
    results[0]=0;
    var i=1;
    var f=true,f1=true;
    for(var j=1;j<=4;j++)
    {
        document.getElementById("q1.s"+j).innerHTML="";
    }
    //console.log(k1);
    k1.forEach(ele =>{
        //console.log(ele);
        if(ele.checked)
        {
            f1=false;
            if(ele.value=="atom")
            {
                document.getElementById("q1.s"+i).innerHTML="✔";
                document.getElementById("q1.s"+i).style="color:green";
            }
            else{
                f=false;
                document.getElementById("q1.s"+i).innerHTML="X";
                document.getElementById("q1.s"+i).style="color:red";
            }
        }
        i++;
    })
    if(f1)
    f=false;
    if(f)
    {
        results[0]=1;
        document.getElementById("q1.status").innerHTML="✔ Correct";
        document.getElementById("q1.status").style="color:green";
        try_again(1);
    }
    else{
        document.getElementById("q1.status").innerHTML="X Try Again";
        document.getElementById("q1.status").style="color:red;font-size:20px";
        try_again(0);
    }
}

// validating question 2
function validq2(){
    results[1]=0;
    var k1=document.getElementsByClassName("q2_li");
    var f=true;
    for(var i of k1)
    k1.innerHTML="";
    for(var i=0;i<3;i++)
    {
        var k1=document.getElementsByName("q2."+(i+1));
        console.log(k1[0].checked);
        if(k1[0].checked)
        {
            document.getElementById("q2.s"+(i+1)).innerHTML="✔";
            document.getElementById("q2.s"+(i+1)).style="color:green";
        }
        else{
            f=false;
            document.getElementById("q2.s"+(i+1)).innerHTML="X";
            document.getElementById("q2.s"+(i+1)).style="color:red";
        }
    }
    var k1=document.getElementsByName("q2.4")
    if(!k1[0].checked)
    {
        document.getElementById("q2.s4").innerHTML="✔";
        document.getElementById("q2.s4").style="color:green";
    }
    else
    {
        f=false;
        document.getElementById("q2.s4").innerHTML="X";
        document.getElementById("q2.s4").style="color:red";
    }
    if(f)
    {
        results[1]=1;
        document.getElementById("q2.status").innerHTML="✔ Correct";
        document.getElementById("q2.status").style="color:green";
        try_again(1);
    }
    else{
        document.getElementById("q2.status").innerHTML="X Try Again";
        document.getElementById("q2.status").style="color:red;font-size:20px";
        try_again(0);
    }
}

// validating question 8
function validq8(){
    results[7]=0;
    const actual=["25cm <sup>2</sup>","20cm","5(2) <sup>1/2</sup>cm"];
    const status=["q8.s1","q8.s2","q8.s3"];
    var f=true;
    var i=0;
    const ans=document.querySelectorAll('.container1');
    ans.forEach(val =>{
        const ele=[...val.querySelectorAll('.drag')]
        if(ele.length==1 && ele[0].innerHTML==actual[i])
        {
            document.getElementById(status[i]).innerHTML="✔";
            document.getElementById(status[i]).style="color:green";
        }
        else{
            f=false;
            document.getElementById(status[i]).innerHTML="X";
            document.getElementById(status[i]).style="color:red";
        }
        i++;
        
    })
    if(!f)
    {
        document.getElementById("q8.status").innerHTML="X Try Again";
        try_again(0);
        document.getElementById("q8.status").style="color:red;font-size:20px";
    }
    else{
        results[7]=1;
        document.getElementById("q8.status").innerHTML="✔ Correct";
        document.getElementById("q8.status").style="color:green";
        try_again(1);
    }
}
var name1="";
 function submitTest(){
     //alert(name1);
     var result=0;
     //console.log(results)
     for(var i of results)
     result+=i;
     if(result<5)
     document.getElementById("emoji1").innerHTML="😔";
     else
     document.getElementById("emoji1").innerHTML="😁";
     return result;
    }
 
 function setName(){
     
     name1=document.getElementById("name_id").value;
     if(name1.length==0)
     {
         try_again(2);
     }
     else{
         try_again(3);
     }
 }

//for the pop up
function pop_up(){
    if(name1=="")
    {
        try_again(2);
        return;
    }
    var ele1=document.getElementsByClassName("pop-up")[0];
    var ele2=document.getElementsByClassName("body1")[0];
    var k=submitTest();
    var ans=ele1.innerHTML;
    console.log(ans);
    ele1.innerHTML="";
    
    clearInterval(id);
    id=setInterval(frame,5);
    var x=0;
    function frame(){
        if(x>450){
        clearInterval(id);
        ele1.innerHTML=ans;
        document.getElementById("score").innerHTML=k;
        }
        else{
            ele1.style.height=x+"px";
            ele1.style.width=x+"px";
            x+=13;
        }
    }
    
    
    ele1.style="display:block ; transition : transform 300ms ease-in-out";
    ele2.style="opacity:0.3 ; filter:blur(8px); pointer-events:none;"
    }
var id=null;
function close_pop(){
    var ele1=document.getElementsByClassName("pop-up")[0];
    var ele2=document.getElementsByClassName("body1")[0];
    var ans=ele1.innerHTML;
    ele1.innerHTML="";
    clearInterval(id);
    id=setInterval(frame,5);
    var x=450;
    function frame(){
        if(x<0){
            ele2.style="display:block";
            ele1.innerHTML=ans;
            ele1.style="display:none ;";
        clearInterval(id);
        }
        else{
            ele1.style.height=x+"px";
            ele1.style.width=x+"px";
            x-=13;
        }
    }
}
//implementing try again and correct

function try_again(val){
    var x = document.getElementById("alert");
    if(val==1)
    {
        x.innerHTML="Correct"
        x.style.backgroundColor="rgba(11, 97, 0, 0.700)";
    }
    else if(val==0)
    {
        x.innerHTML="Try Again"
        x.style.backgroundColor="rgba(60, 0, 0, 0.700)";
    }
    else if(val==2)
    {
        x.innerHTML="Name Required"
        x.style.backgroundColor="rgba(60, 0, 0, 0.700)";
    }
    else{
        x.innerHTML="Hi "+name1
        x.style.backgroundColor="rgba(11, 97, 0, 0.700)";
    }
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 4300);
  }

 
