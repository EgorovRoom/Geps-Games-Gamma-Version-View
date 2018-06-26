function goNextPage()
{
    window.location =  'choise_color.html';
};
function changeText()
{
    if(i>0){
        i-=1;
        pText.innerHTML='Осталось ждать ';
        switch(i)
        {   
            case 5:
                pText.innerHTML += '5 человек . . .';
                break;
            case 4:
                pText.innerHTML += '4 человека . .';
                break;
            case 3:
                pText.innerHTML += '3 человека . . .';
                break;
            case 2:
                pText.innerHTML += '2 человека . .';
                break;
            case 1:
                pText.innerHTML += '1 человека . . .';
                break;
            case 0:
                pText.innerHTML = 'Загружаем . .';
                setTimeout(goNextPage, 1000);
                break;
            default:
                console.log('error');
        }
        setTimeout(changeText, 1000);
    }
}

let pText = document.getElementById('waiting-players');
const start = Number(window.localStorage.getItem('index'))+3;
let i = start;
changeText();