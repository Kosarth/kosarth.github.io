let quotes = [
        '"When you talk, you are only repeating what you already know. But when you listen, you may learn something new." ~ The Dalai Lama',
        '"Success is how high you bounce when you hit the bottom." ~ General George S. Patton',
        '“Inflation takes from the ignorant and gives to the well informed.” ~ Venita VanCaspel',
        '"I fear not the man who has practiced 10,000 kicks once, but the man who has practiced one kick 10,000 times." ~ Bruce Lee',
        '“Most people never pick up the phone. Most people never call and ask. And that’s what separates sometimes the people who do things from those who just dream about them. You gotta act. You gotta be willing to fail. You gotta be willing to crash a burn. With people on the phone or starting a company, if you’re afraid you’ll fail, you won’t get very far.” ~ Steve Jobs',
        '"And those who were seen dancing were thought to be insane by those who could not hear the music." ~ Frederick Nietzche',
        '“We can be blind to the obvious and we are also blind to our blindness” ~ Daniel Kahneman',
        '“If the ladder is not leaning against the right wall, every step we take just gets us to the wrong place faster.” ~ Stephen R. Covey',
        '"Give a man a mask, and he will show you his true face." ~ Oscar Wilde'

];

function newQuote() {
        var randomNumber = Math.floor(Math.random() * (quotes.length));
        document.getElementById('quoteDisplay').innerHTML = 'Quote: <br><br>' + quotes[randomNumber];
}

        $(document).ready(function() {
                $("#demo").html("Hello, World!");
            });
        // all custom jQuery will go here
        // $.getJSON('https://api.binance.com/api/v3/ticker/price?symbol=ADAEUR', function(data) {
        //         console.log(data);
        // })
// let pairs = ["BTCBRL", "BTCEUR", "BNBBRL", "BNBEUR", "DOGEBRL", "DOGEEUR", "ETHBRL", "ETHEUR", "BUSDBRL", "EURBUSD", "USDTBRL", "EURUSDT", "LINKBRL", "LINKEUR", "LTCBRL", "LTCEUR", "XRPBRL", "XRPEUR"];
// let requestURL = "https://api.binance.com/api/v3/ticker/price?symbol=";
// let request = new XMLHttpRequest();

// function aks() {
//         for (i = 0; i < pairs.length; i++) {
//                 request.open('GET', requestURL+pairs[i]);
//                 request.responseType = 'json';
//                 request.send();
//                 function price() {
//                         let response = request.response;
//                         console.log(response);
//                 }
//                 price();
//                 document.getElementById((pairs[i])).innerHTML = pairs[i] + " → " + response;

//         }
// }

// var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
// var request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();
// request.onload = function() {
//         var superHeroes = request.response;
//         console.log(request)
//         console.log(request.response)
//         populateHeader(superHeroes);
//         showHeroes(superHeroes);
//       }