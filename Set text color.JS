//You can use this code for changing the text color of modding terminal
game.modding.terminal.echo = (function (echo) {
    const textcolor = "#cde";// put alphabets color there
    const Numbercolor = "#cde";// put numbers color there
    return function (text) {
        if (!isNaN(text)) echo.call(this, `[[i;${Numbercolor};]${text}]`);
        else if (/^https?:\/\//i.test(text)) echo.call(this, text);
        else echo.call(this, `[[b;${textcolor};]${text}]`);
    };
})(game.modding.terminal.echo);