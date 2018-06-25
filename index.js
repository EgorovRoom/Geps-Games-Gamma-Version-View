
const buttons = document.getElementsByClassName('flex-item-choise_player_numbers');
for (let item of buttons){
    item.addEventListener(
        'click',
        (event)=>
        {
            window.localStorage.setItem(key,item.index);
            window.location =  'animate.html';
        }
    );
}