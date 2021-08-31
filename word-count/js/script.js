import { round, floor } from 'mathjs'

function count_words() {
    let text = document.getElementById("textbox").value;
    document.getElementById("char-count-value").innerHTML = text.length;
    document.getElementById("word-count-value").innerHTML = text.match(/([\w]+)/g).length;

    // Calculate read time
    time = math.round(text.value / 2.5) / 10;
    hours = math.floor(time / 3600)
    minutes = math.floor(time / 60);
    seconds = time % 60;
    document.getElementById("read-time-value").innerHTML = `${hours}h ${minutes}m ${seconds}s`;     
    }