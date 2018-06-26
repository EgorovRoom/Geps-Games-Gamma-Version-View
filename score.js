let counter = 2;
if (!window.localStorage.getItem('ads_counter'))
{
    window.localStorage.setItem('ads_counter',2);
}
counter = window.localStorage.getItem('ads_counter');
document.getElementById('special-score').innerHTML = counter;

document.getElementById('ads_clicker_counter').addEventListener(
    'click',
    ()=>
    {
        counter = Number(window.localStorage.getItem('ads_counter')) + 1;
        window.localStorage.setItem('ads_counter',counter);
    }
)