var quote = document.querySelector('.quote');
var button = document.getElementById('getQuote');

var quotes = [];
quotes[0] = {
    text: quote.textContent =  'Ти не несеш відповідальності за те, що чекають від тебе інші люди. Якщо від тебе чекають занадто багато, то це їхня помилка, а не твоя провина',
    bgi: quote.style.backgroundImage = "url('images/people.jpg')"
  };
quotes[1] = {
  text: quote.textContent =  'Може, я в дитинстві читав забагато коміксів. У коміксах завжди йдеться про порятунок світу. Мені здалося, що треба робити світ кращим, тому що протилежне не має сенсу.',
  bgi: quote.style.backgroundImage = "url('images/space.jpg')"
};
quotes[2] = {
  text: quote.textContent = 'Задумавши суперечку теперішнього з минулим, ми виявимо, що втратили майбутнє',
  bgi: quote.style.backgroundImage = "url('images/future.jpg')"
};

function getRandomQuotes (){
  var myNum = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[myNum].text;
  quote.style.backgroundImage = quotes[myNum].bgi;
  return  quote;
}
window.onload = getRandomQuotes();
button.addEventListener('click', getRandomQuotes);




