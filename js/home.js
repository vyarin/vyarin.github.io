// Languages (indexed by BCP 47 locales) update along the way
var heyTranslations = {
    ar: "مرحبا", // Arabic (RTL): Noto Sans
    bn: " হ্যালো", // Bengali: loan word, Noto Sans
    cs: "brý den", // Czech: short version of greeting
    da: "hej", // Danish: informal
    de: "hallo", // German: informal
    el: "εια", // Greek: informal
    en: "hey", // English: informal
    es: "buenas", // Spanish: informal
    fi: "moi", // Finnish: informal
    fr: "salut", // French
    he: "שלום", // Hebrew (RTL), Noto Sans
    hi: "नमस्ते", // Hindi, Noto Sans
    id: "halo", // Indonesian
    it: "ciao", // Italian
    ja: "よ", // Japanese: informal, Noto Sans
    ko: "안녕하세요", // Korean, Noto Sans
    pl: "cześć", // Polish
    pt: "olá", // Portuguese
    ru: "привет", // Russian
    sv: "hej", // Swedish
    ta: "வணக்கம", // Tamil, Noto Sans
    th: "ฮัลโล", // Thai: loan word
    tr: "merhaba", // Turkish
    vi: "hê lô", // Vietnamese: loan word
    zh: "嘿", // Chinese: loan word, Noto Sans
}

function updateGreeting(lang) {
    if (lang == "ar" || lang == "he") {
        document.getElementById("dialogue-1").style.gridArea = "1 / 5 / 1 / 1"; // Change dialogue position
        document.getElementById("dialogue-1").style.direction = "rtl"; // Change dialogue to RTL
    }
    document.getElementById("greeting").innerHTML = heyTranslations[lang];
}

addEventListener("DOMContentLoaded", function () {
    let language = navigator.language || navigator.userLanguage;
    
    updateGreeting(language.substring(0, language.indexOf("-")));
})