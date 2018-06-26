/* ? - не работает такой способ
buttons.forEach(function(item, index){
    item.addEventListener(
        'click',
        ()=>
        {
            alert(index);
            window.localStorage.setItem('index',index);
            window.location =  'animate.html';
        }
    );
});*/