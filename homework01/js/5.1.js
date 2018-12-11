function input() {
    var inputSize = document.getElementById("internationalSize").value;
    switch (inputSize.toLocaleLowerCase().trim()) {
        case 'xs':
            printEuroSize("32-36");
            break;
        case 's':
            printEuroSize("36-40");
            break;
        case 'm':
            printEuroSize("40-44");
            break;
        case 'l':
            printEuroSize("44-48");
            break;
        case 'xl':
            printEuroSize("48-52");
            break;
        case 'xxl':
            printEuroSize("52-56");
            break;
        default:
            // set error message
            document.getElementById("error").innerText = "[" + inputSize
                + "] is incorrect international size!";
            return false;
    }
}


function printEuroSize(size) {
    document.write("European size is: " + size);
    return true;
}