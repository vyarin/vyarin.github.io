function count_words() {
    let text = document.getElementById("textbox").value;
    document.getElementById("char-count-value").innerHTML = text.length;
    document.getElementById("word-count-value").innerHTML = text.match(/([\w]+)/g).length;
}