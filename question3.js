const rgbToHex = function(red, green, blue)  {
    let hex = "#";

    for(let i = 0; i < arguments.length; i++){
        // Arguments object is a local variable available
        // but can't use allow functions
        let convert = typeof arguments[i] === "number" ? arguments[i] : parseInt(arguments[i]);
        
        hex += (convert < 16 ? "0" : "") + convert.toString(16);
    }

    return hex;
}

console.log(rgbToHex(255,255,255));

const hexToRgb = (hex) => {
    hex = hex.trim();
    hex = hex[0] === "#" ? hex.substr(1) : hex;

    let r,g,b;

    if(hex.length === 3){
        r = parseInt(hex[0].toString() + hex[0].toString(),16);
        g = parseInt(hex[1].toString() + hex[1].toString(),16);
        b = parseInt(hex[2].toString() + hex[2].toString(),16);
    } else if(hex.length === 6){
        r = parseInt(hex[0].toString() + hex[1].toString(),16);
        g = parseInt(hex[2].toString() + hex[3].toString(),16);
        b = parseInt(hex[4].toString() + hex[5].toString(),16);
    } else {
        return "hex to rgb failed";
    }

    return `rgb(${r}, ${g}, ${b})`;
}

console.log(hexToRgb("#f6f6f6"));