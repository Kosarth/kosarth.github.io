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

$(document).ready(function () {
        let pair = ["BTCBRL", "BTCEUR", "BNBBRL", "BNBEUR", "ADABRL", "ADAEUR", "ETHBRL", "ETHEUR", "BUSDBRL", "EURBUSD", "USDTBRL", "EURUSDT", "LINKBRL", "LINKEUR", "LTCBRL", "LTCEUR", "XRPBRL", "XRPEUR"];
        for (i = 0; i < pair.length; i++) {

                $.getJSON('https://api.binance.com/api/v3/ticker/price?symbol=' + pair[i], function (data) {
                        // let value = $.number(data.price, 2);
                        let value = data.price;
                        $('#pair').append('<li id=' + data.symbol + '>Cotação ' + data.symbol + ' = ' + value + '</li>');

                });
        }
});