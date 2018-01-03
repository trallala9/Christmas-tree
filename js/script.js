function drawTree(h) {
    for (var i = 0; i <= h; i++) {
        var star = "";
        for (var j = 1; j <= 2 * i + 1; j++) {
            star += "*";
        }
        console.log("%c%s", "font-size: 20px; color: green",
            star);
    }
}
drawTree(8)

var h = 8;
for (let i = 0; i < h; i++) {
    for (let j = h + 8; j > i; j--) {
        document.write("&nbsp&nbsp");
    }
    for (let k = 0; k <= (i * 2); k++) {
        document.write("*");
    }
    document.write("<br>");
}

function drawTree(h) {
    for (var i = 0; i <= h; i++) {
        var star = "";
        for (var j = 1; j <= 2 * i + 1; j++) {
            star += "*";
        }
        console.log("%c%s", "font-size: 20px; color: green",
            star);
    }
}
drawTree(10)

var h = 10;
for (let i = 4; i < h; i++) {
    for (let j = h + 6; j > i; j--) {
        document.write("&nbsp&nbsp");
    }
    for (let k = 0; k <= (i * 2); k++) {
        document.write("*");
    }
    document.write("<br>");
}

function drawTree(h) {
    for (var i = 0; i <= h; i++) {
        var star = "";
        for (var j = 1; j <= 2 * i + 1; j++) {
            star += "*";
        }
        console.log("%c%s", "font-size: 20px; color: green",
            star);
    }
}
drawTree(12)

var h = 12;
for (let i = 5; i < h; i++) {
    for (let j = h + 4; j > i; j--) {
        document.write("&nbsp&nbsp");
    }
    for (let k = 0; k <= (i * 2); k++) {
        document.write("*");
    }
    document.write("<br>");
}
