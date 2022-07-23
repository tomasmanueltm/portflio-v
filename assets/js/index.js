let JS = (e)=> document.querySelector(e), 
    JSall = (e)=> document.querySelectorAll(e),
    progressBefore = JSall(".progress i"),
    progressValores = JSall(".sobre .descricao ul li span:last-child");




progressValores.forEach((e, i)=> {
    progressBefore[i].style.width = e.dataset.progress+"%";
});