// JavaScript source code

function makeCoupon(type) {
    var start;
    var end = "";
    switch (type)
    {
        case "twenty":
            start = ("101" + ((Math.floor((Math.random() * 3) + 6)).toString()) + (Math.floor(Math.random() * 10).toString()));
            break;
        case "ten":
            start = ("17750");
            break;
        case "five":
            start = ("1615" + (Math.floor((Math.random() * 3) + 1)).toString());
            break;
        case "twentyall":
            start = ("129" + ((Math.floor((Math.random() * 2) + 5)).toString()) + (Math.floor(Math.random() * 10).toString()));
            break;
    }
    for (var i = 0; i < 5; i++) {
        end += ((Math.floor(Math.random() * 10)).toString());
    }
    return start + (Math.floor(Math.random() * 10)).toString() + (Math.floor(Math.random() * 10)).toString() + "00000000" + end;
    
}