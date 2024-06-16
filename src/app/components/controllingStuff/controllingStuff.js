/**
 * @param  {"red" | "green" | "blue"} color the function use the hue to convert form blue color to the other 2 colors green , red if you wanna make your custom change the function is also uses string input
 * @param  {HTMLElement} el image element
 */
function controlImageColor(el, color) {
    if (color === "red") {
        el.style.filter = "hue-rotate(115deg)";
    }
    else if (color === "blue") {
        el.style.filter = "hue-rotate(0deg)";
    }
    else if (color === "green") {
        el.style.filter = "hue-rotate(260deg)";
    }
}


/**
* @param {HTMLBodyElement} el
*@param {"white"|"green"|"red"|"black"} color  */
function changeStyleInput(el, color) {
    el.style.color = color;
    el.parentElement.style.boxShadow = `0 0 15px 0 ${color}`
}
/** 
 * @param { HTMLBodyElement } el
 * @param { Function } callback
*/
function changeStyle(el, callback) {
    callback(el.style,el.parentElement.style);
}
/** 
 * @param { HTMLBodyElement } image
 * @param { HTMLBodyElement } firstInput
 * @param { HTMLBodyElement } SecondInput
 * @param { "natural"|"Success"|"faild" } state * /
*/
function controlAllElements(image, firstInput, SecondInput, state) {
    let color = "white";
    let imgColor = "blue";
    if (state === "Success") {
        color = "green";
        imgColor = "green";
    }
    else if (state === "faild") {
        color = "red";
        imgColor = "red";
    }
    else if (state === "natural") {
        color = "white";
        imgColor = "blue";
    }
    else {
        alert("there must be an error in stat because state:" + state + " is not exist");
    }
    controlImageColor(image, imgColor);
    changeStyleInput(firstInput, color);
    changeStyleInput(SecondInput, color);
}

export {controlAllElements,changeStyle,controlImageColor,changeStyleInput}