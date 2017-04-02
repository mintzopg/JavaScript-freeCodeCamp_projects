function titleCase(title, minorWords) {
    if (title === "") return "";
    minorWords = minorWords || "";
    var titleArr = title.split(" "); // get array of words in title string
    var minorWordsArr = minorWords.split(" "); // get array of words in minorWords string

    var i = 0,
        j = 0;

    for (i in titleArr) {
        var check = true;
        titleArr[i] = titleArr[i].toLowerCase();
        for (j in minorWordsArr) {
            if (titleArr[i] === minorWordsArr[j].toLowerCase()) {
                check = false;
                break;
            }
        }
        // if word not in minorWords, capitalize it
        if (check) titleArr[i] = changeCase(titleArr[i].toLowerCase());
    }

    function changeCase(word) {
        // capitalize the word
        word = word.split("");
        word[0] = word[0].toUpperCase();
        return word.join("");
    }
    titleArr[0] = changeCase(titleArr[0]);
    return titleArr.join(" ");
}