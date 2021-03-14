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
        let investedCoins = ['ADAEUR', 'ETHEUR', 'LINKEUR', 'BNBEUR', 'XEMUSDT'];
        let brlValue = [10000, 20000, 10000, 10000, 10000];
        let howMuch = [6.652, 10111.110, 169.590, 1617.30, 3.6648];
        let dividedByValue = 6.5;
        let equivalent = [1.03, 1560, 26, 248.11, 0.64];

        function toBRL(value) {
                return Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        };

        function toEUR(value) {
                return Number(value).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
        };

        function periodToComma(value) {
                return Number(value).toLocaleString('de-DE');
        };

        function profitColor(id, value1, value2) {
                if (value1 > value2) {
                        return $('#profit' + id).css('color', 'darkred');
                } else {
                        return $('#profit' + id).css('color', 'darkgreen');
                }
        };

        for (i = 0; i < investedCoins.length; i++) {
                let brl = parseFloat(brlValue[i]).toFixed(2);
                let divideBy = parseFloat(brl / dividedByValue).toFixed(2);
                let much = howMuch[i];
                let howMany = parseFloat(brl / howMuch[i]).toFixed(3);
                let equiv = parseFloat(equivalent[i]).toFixed(2);

                $.getJSON('https://api.binance.com/api/v3/ticker/price?symbol=' + investedCoins[i], function (data) {
                        let value = parseFloat(data.price).toFixed(3);
                        let profit = parseFloat((value * howMany) - divideBy).toFixed(2);

                        $('#cryptoTable').append('<tr><td>' 
                                                + data.symbol 
                                                + '</td><td>' + toBRL(brl) 
                                                + '</td><td>' + toEUR(divideBy) 
                                                + '</td><td>' + toBRL(much) 
                                                + '</td><td>' + periodToComma(howMany)
                                                + '</td><td>' + toEUR(equiv) 
                                                + '</td><td id="' + data.symbol 
                                                + '"></td><td id="profit' + data.symbol + '">' + toEUR(profit) 
                                                + '</td></tr>');
                        $('#' + data.symbol).append(periodToComma(value));
                        profitColor(data.symbol, divideBy, profit);
                });
        }

});