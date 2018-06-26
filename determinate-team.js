/*Для страницы — определение команды*/
/**Получение случайного целового числа из инетрвала
 * @argument min - минимальное число, входящее в интервал
 * @argument max - максимальное число, входящее в интервал
 */
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const valueRandomForSVGImage = getRandomInRange(0,2);

const mainSector = document.getElementById('main-polygon');
const mainStyle = mainSector.style;
const leftStyle = document.getElementById('left-polygon').style;
const rightStyle = document.getElementById('right-polygon').style;

let textWithChangeColor = document.getElementById('your-comand-color');

let backgroundColorInHelperElement = document.getElementById('color-line-in-helper').style;

switch(valueRandomForSVGImage) {
    case 0:
        //main - is a blue
        mainStyle.fill = '#024959';
        leftStyle.fill = '#F2C777';
        rightStyle.fill = '#BF2A2A';
        textWithChangeColor.innerHTML = 'Синяя команда';
        break
    case 1:
        //main - is a yellow
        mainStyle.fill = '#F2C777';
        leftStyle.fill = '#BF2A2A';
        rightStyle.fill = '#024959';
        textWithChangeColor.innerHTML = 'Жёлтая команда';
        break
    case 2:
        //main - is a red
        mainStyle.fill = '#BF2A2A';
        leftStyle.fill = '#024959';
        rightStyle.fill = '#F2C777';
        textWithChangeColor.innerHTML = 'Красная команда';
        break
    default:
        alert('ошибка');
}
backgroundColorInHelperElement.backgroundColor = mainStyle.fill;

mainSector.addEventListener(
    'click',
    ()=>
    {
        window.localStorage.setItem('color',textWithChangeColor);
        window.location =  'play-page.html';
    }
)