/*Для страницы — выбор числа игроков*/
const buttons = document.getElementsByClassName('flex-item-choise_player_numbers');
if (buttons){
    for (let i in buttons)
    {
        buttons[i].index = i;
    }
    for (const item of buttons){
        item.addEventListener(
            'click',
            ()=>
            {
                window.localStorage.setItem('index',item.index);
                window.location =  'animate.html';
            }
        );
    }
}