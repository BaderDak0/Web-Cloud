var l_name = "Daka";
var colorss = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Yellow",
    "YellowGreen",
];
var counter = 1;
var rec;
function creatrec() {
    counter++;
    rec = document.createElement("section");
    rec.style.backgroundColor = colorss[Math.floor(Math.random() * colorss.length)];
    rec.colortmp = rec.style.backgroundColor;
    rec.imgg = document.createElement("img");
    rec.imgg.src = "images/view.png";
    rec.imgg.title="moonview";
    rec.imgg.alt="moonview";
    rec.appendChild(rec.imgg);
    rec.imgg.style.visibility = "hidden";
    if (counter % 3 == 0) {
        rec.starimj = document.createElement("img");
        rec.starimj.src = "images/star.png";
        rec.starimj.className = "stars";
        rec.appendChild(rec.starimj);
        rec.boolstar = true;
    }
    rec.onclick = function () {
        if (this.style.backgroundColor == "white") {
            this.style.backgroundColor = this.colortmp;
            if (this.boolstar == true) {

                this.starimj.style.visibility = "visible";
            }
            this.imgg.style.visibility = "hidden";
        }
        else {
            this.style.backgroundColor = "white";
            if (this.boolstar == true) {
                this.starimj.style.visibility = "hidden";
            }
            this.imgg.style.visibility = "visible";
        }

    };
    document.getElementsByTagName("main")[0].appendChild(rec);

}

function rectangle1() {
    var rec1 = document.createElement("section");
    rec1.style.backgroundColor = colorss[Math.floor(Math.random() * colorss.length)];
    var plusimj = document.createElement("span");
    plusimj.className="pluss"; 
    plusimj.onclick = creatrec;
    rec1.appendChild(plusimj);
    rec1.style.cursor="default";
    document.getElementsByTagName("main")[0].appendChild(rec1);

}


window.onload = function () {

    rectangle1();
    for (var i = 1; i < l_name.length * 2; i++) {

        creatrec();
    }

};

