console.log("in drag drop");
const drag=document.querySelectorAll('.drag');
const containers=document.querySelectorAll('.container');
const containers1=document.querySelectorAll('.container1');
var cur="";
drag.forEach(draggable =>{
    draggable.addEventListener('dragstart', ()=>{
        //console.log("drag started");
        cur=draggable;
        draggable.classList.add('dragging');
        //console.log(draggable.classList);
    });
    draggable.addEventListener('dragstart', ()=>{
        draggable.classList.remove('dragging');
    });
})
containers.forEach(container =>{
    container.addEventListener('dragover', ()=>{
        container.appendChild(cur);
    })
})

containers1.forEach(container =>{
    container.addEventListener('dragover', ()=>{
        const arr=[...container.querySelectorAll('drag')];
        //console.log(arr);
        if(arr.length==0)
        container.appendChild(cur);
    })
})



