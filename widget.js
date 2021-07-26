(function() {


    let me = document.currentScript
    let targetSelector = me.getAttribute("data-target");
    let target = document.querySelector(targetSelector);
    console.log(me, targetSelector, target)

    let shadow = target.attachShadow({mode: "closed"});
    console.log(shadow);
    
    shadow.innerHTML = `
<link rel="stylesheet" href="widget.css">
<div class="my-class">
Shadow MyClass.
</div>    
`;

})()