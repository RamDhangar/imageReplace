var first;
var second;
var third;
var parent;
const dragElem=document.querySelectorAll("img");
const dropElem=document.querySelectorAll(".innerDiv");
// console.log(dropElem);

dragElem.forEach(elem=>{

elem.addEventListener("dragstart", (eve)=>{
    first=eve.target.getAttribute("src");
    third=eve.target.getAttribute("id")
    parent=eve.target.parentElement.getAttribute("id");
    second=eve.target;    

})
})

dropElem.forEach(elem=>{
    elem.addEventListener("dragenter",(eve)=>{
        eve.preventDefault();
        eve.target.classList.add("img-hover");
    })
    elem.addEventListener("dragleave", (even)=>{
        even.target.classList.remove("img-hover");
    })
    elem.addEventListener("dragover", (eve)=>{
        eve.preventDefault();
    })
    elem.addEventListener("drop",(eve)=>{
        eve.preventDefault();
        eve.target.classList.remove("img-hover");
        var src=eve.target.getAttribute("src");
        var att=eve.target.getAttribute("id")
        var pt=eve.target.parentElement.getAttribute("id");
        eve.target.setAttribute("src", first);
        eve.target.setAttribute("id", third);
        eve.target.parentElement.setAttribute("id",parent);
        second.setAttribute("src", src);
        second.setAttribute("id",att);
        second.parentElement.setAttribute("id",pt);


        console.log(eve.target.getAttribute("src"))
    })
})