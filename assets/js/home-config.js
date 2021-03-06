const __HEADER__    = document.getElementsByTagName("HEADER")[0];
const __NAV__       = document.getElementsByTagName("NAV")[0];
const __TITLE__     = document.getElementById("title").children[0];
const __MAIN__      = document.getElementsByTagName("MAIN")[0];
const __FOOTER__    = document.getElementsByTagName("FOOTER")[0];

const __UPPER__     = document.getElementById("home-upper");
const __REG__       = document.getElementById("home-register");
const __BYTES__     = document.getElementsByClassName("home-byte");
const __BITS__      = document.getElementsByClassName("home-bit");
const __SHIFTS__    = document.getElementsByClassName("home-shift");

const __LOWER__     = document.getElementById("home-lower");
const __ANNOUNCE__  = document.getElementById("home-announcement").getElementsByTagName("UL")[0];
const __BULLETIN__  = document.getElementById("home-bulletin").getElementsByTagName("UL")[0];
const __ALERT__     = document.getElementById("home-alert");

//========================================
// TITLE: IMPLEMENTATION
//========================================
const _CSS_borderWidthTitle = parseInt(getComputedStyle(__TITLE__).borderWidth);
const _CSS_fontSizeTitle    = parseFloat(getComputedStyle(__TITLE__).fontSize) + 14.5 + _CSS_borderWidthTitle * 2;
const _CSS_spacingTitle     = parseInt(getComputedStyle(__TITLE__).letterSpacing);

const TitleSize = () => {
    let widthBorder  = parseInt(__TITLE__.style.borderWidth);
    let spacingTitle = parseInt(__TITLE__.style.letterSpacing);

    let heightHeader = __HEADER__.getBoundingClientRect().height;
    let heightNav = __NAV__.getBoundingClientRect().bottom;

    // SHRINKING HEADER
    if (heightHeader - heightNav < _CSS_fontSizeTitle + 16) {  // VERTICAL MARGIN: 12px
        if (isNaN(spacingTitle))
        {
            __TITLE__.style.borderWidth = 0 + "px";
            __TITLE__.style.letterSpacing = 5 + "px";
        }
        else if (spacingTitle!=_CSS_spacingTitle - 5)
        {   
            let animate = setInterval(function() {

                if (widthBorder == _CSS_borderWidthTitle - 8 
                    && spacingTitle == _CSS_spacingTitle - 5) 
                {clearInterval(animate);}
                
                if (widthBorder > _CSS_borderWidthTitle - 8) widthBorder--;
                if (spacingTitle > _CSS_spacingTitle - 5) spacingTitle--;
    
                __TITLE__.style.borderWidth = widthBorder + "px";
                __TITLE__.style.letterSpacing = spacingTitle + "px";

            }, 25);
        } 
    }
    // EXPANDING HEADER
    else if (heightHeader - heightNav >= _CSS_fontSizeTitle + 16) {  // VERTICAL MARGIN: 12px
        if (isNaN(spacingTitle))
        {
            __TITLE__.style.borderWidth = _CSS_borderWidthTitle + "px";
            __TITLE__.style.letterSpacing = _CSS_spacingTitle + "px";
        }
        else if (spacingTitle!=_CSS_spacingTitle)
        {
            let animate = setInterval(function() {

                if (widthBorder == _CSS_borderWidthTitle 
                    && spacingTitle == _CSS_spacingTitle) 
                {clearInterval(animate);}

                if (widthBorder < _CSS_borderWidthTitle) widthBorder++;
                if (spacingTitle < _CSS_spacingTitle) spacingTitle++;

                __TITLE__.style.borderWidth = widthBorder + "px";
                __TITLE__.style.letterSpacing = spacingTitle + "px";
            }, 25);
        }
    }
}; TitleSize();

//========================================
// MAIN: AUTO-SIZING
//========================================
// >> "home-main" SIZING
var mainHeight = (window.innerHeight < parseInt(getComputedStyle(document.body).minHeight) ? parseInt(getComputedStyle(document.body).minHeight) : window.innerHeight)
    - __FOOTER__.offsetHeight - __HEADER__.getBoundingClientRect().height;
__MAIN__.style.height = mainHeight + "px";

// >> GET "home-upper" HEIGHT LIMIT BASED ON BROWSER WINDOW SIZE.
var upperHeight = mainHeight *  parseInt(getComputedStyle(__UPPER__).maxHeight)/100;
__UPPER__.style.height = upperHeight + "px";

// >> GET "home-upper" HEIGHT LIMIT BASED ON BROWSER WINDOW SIZE.
var lowerHeight = mainHeight - upperHeight;
__LOWER__.style.height = lowerHeight + "px";

//alert(mainHeight + " = " + upperHeight + " + " + lowerHeight);

//========================================
// REGISTER: "BIT"-"BYTE"-"REG" SIZING
//========================================
// >> BYTE NAVIGATION INDEX
var currIndex = 0;
const InitRegister = () => {

    // VARIABLE FOR REGISTER MARGIN AND PADDING
    let regMargin = parseInt(getComputedStyle(__REG__).marginTop) + parseInt(getComputedStyle(__REG__).marginBottom);
    let regPadding = parseInt(getComputedStyle(__REG__).paddingTop) + parseInt(getComputedStyle(__REG__).paddingBottom);

    let bitMargin = parseInt(getComputedStyle(__BITS__[0]).marginTop) + parseInt(getComputedStyle(__BITS__[0]).marginBottom);

    // VARIABLE FOR BYTE WIDTH
    let byteWidth = __REG__.getBoundingClientRect().width - parseInt(getComputedStyle(__SHIFTS__[0]).width) - parseInt(getComputedStyle(__SHIFTS__[1]).width);

    // GET THEORETICALLY CALCULATED "home-bit" WIDTH
    const bitLengthMax = 5; const bitInterval = 8; // pixel
    let bitWidthCalc = Math.floor((byteWidth - (bitLengthMax + 1) * bitInterval)/ bitLengthMax);  // Theoretical bit width based on the width of __REG__ excluding shifts.
    let bitHeightMax = upperHeight - (regMargin + regPadding + bitMargin);   // Maximum height of bit based on the 40% of __UPPER__ height.

    for (let index = 0; index < __BYTES__.length; index++)
    {
        if (index == currIndex) { __BYTES__[index].style.display = "flex"; }
        else { __BYTES__[index].style.display = "none"; }
    }

    // IF bitHeightMax can fit inside the byte...
    if (bitHeightMax * bitLengthMax + bitInterval * (bitLengthMax + 1) < byteWidth)
    {   // ...use bitHeightMax as width/height of bits
        for(let bit of __BITS__)
        {
            bit.style.height = bitHeightMax + "px";
            bit.style.width = bitHeightMax + "px";
            bit.getElementsByTagName("SPAN")[0].style.backgroundSize = (bitHeightMax - 24) + "px";
        }

        // ...adjusting location of shifting buttons
        for (let index = 0; index < 2; index++)
        {
            __SHIFTS__[index].style.height =  bitHeightMax + "px";
            __SHIFTS__[index].style.lineHeight =  bitHeightMax + "px";
        }

        // ...and retain 40:60 ratio of __UPPER__ and __LOWER__.
        __UPPER__.style.height = upperHeight + "px";
        __LOWER__.style.height = lowerHeight + "px";
    }
    else    // IF bitHeigMax cannot fit inside the byte
    {   // ...use bitWidthCalc as width/height of bits
        for(let bit of __BITS__)
        {
            bit.style.height = bitWidthCalc + "px";
            bit.style.width = bitWidthCalc + "px";
            bit.getElementsByTagName("SPAN")[0].style.backgroundSize = (bitWidthCalc - 24) + "px";
        }

        // ...adjusting location of shifting buttons
        for (let index = 0; index < 2; index++)
        {
            __SHIFTS__[index].style.height =  bitWidthCalc + "px";
            __SHIFTS__[index].style.lineHeight =  bitWidthCalc + "px";
        }

        // ...and sum additional height from __UPPER__ to __LOWER__ to fit the main size.
        __UPPER__.style.height = bitWidthCalc + (regMargin + regPadding + bitMargin) + "px";
        __LOWER__.style.height = mainHeight - (bitWidthCalc + (regMargin + regPadding + bitMargin)) + "px";
    }

}; InitRegister();

//========================================
// REGISTER: MOUSEOVER
//========================================
// >> FOR EACH BYTE
for (let index = 0; index < __BYTES__.length; index++)
{
    // >> FOR EACH BIT IN THE BYTE
    for (let i = 0; i < __BYTES__[index].children.length; i++) {
        //__BITS__[index].style.transition = "all 0.1s";
        let marginTopBit = parseInt(getComputedStyle(__BITS__[i]).marginTop);
        let marginBottomBit = parseInt(getComputedStyle(__BITS__[i]).marginBottom);
        
        __BYTES__[index].children[i].onmouseover = function() {
            __BYTES__[index].children[i].style.marginBottom = marginTopBit + marginBottomBit + "px";
            __BYTES__[index].children[i].style.marginTop = marginTopBit - marginBottomBit + "px";
        };
    
        __BYTES__[index].children[i].onmouseout = function() {    
            __BYTES__[index].children[i].style.marginBottom = marginBottomBit + "px";
            __BYTES__[index].children[i].style.marginTop = marginTopBit + "px";
        };
    }
}

//========================================
// REGSITER: SHIFTING BYTES
//========================================
const ByteAlert = (index) => {

    let popup = document.createElement("DIV");
    popup.setAttribute("CLASS","home-alert");

    let timer = Date.now();
    popup.style.zIndex = timer -  Math.floor(timer/100000) * 100000;

    switch(index)
    {
        case 0:
            popup.innerHTML = "LANGUAGE";
            break;
        case 1: 
            popup.innerHTML = "LIBRARY";
            break;
    }

    document.getElementById("home-announcement").prepend(popup);
    setTimeout(() => {
        let opacity = 100;
        let animate = setInterval(() => {
            if (opacity == 0)
            {
                clearInterval(animate);
                popup.remove();
            }
            popup.style.opacity = opacity/100;
            opacity -= 10;
        }, 20);
    }, 500);
    
};

for (let shift of __SHIFTS__)
{
    shift.addEventListener("click", function() {

        if (shift.id == "shift-left")
        {
            if (currIndex == 0) {currIndex = (__BYTES__.length - 1);}
            else {currIndex--;}
        }
        else if (shift.id == "shift-right")
        {
            if (currIndex == (__BYTES__.length - 1)) {currIndex = 0;}
            else {currIndex++;}
        }
        InitRegister();
        ByteAlert(currIndex);
    });
}

//========================================
// BULLETIN: RECENT ANNOUNCEMENT
//========================================
for(let index = 1; index < document.getElementById("home-announcement").getElementsByTagName("UL")[0].children.length; index++)
{
    document.getElementById("home-announcement").getElementsByTagName("UL")[0].children[index].innerHTML = null;
}

//========================================
// BULLETIN: POST ALIGNMENT
//========================================
for (let msg = 1; msg < __ANNOUNCE__.children.length; msg++)
{ __ANNOUNCE__.removeChild(__ANNOUNCE__.children[msg]); }

if (__BULLETIN__.children.length > 4)
{
    __BULLETIN__.style.alignContent = "space-between";
}
else if (__BULLETIN__.children.length > 2)
{
    __BULLETIN__.style.alignContent = "baseline";
    for (let post of __BULLETIN__.children)
    { post.style.marginBottom = "1%"; }
}

const InitBulletin = () => {

}; InitBulletin();

//========================================
// FUNCTION: RESIZE WINDOW
//========================================
window.addEventListener('resize', event => {
    TitleSize();

    mainHeight = (window.innerHeight < parseInt(getComputedStyle(document.body).minHeight) ? parseInt(getComputedStyle(document.body).minHeight) : window.innerHeight)
        - __FOOTER__.offsetHeight - __HEADER__.getBoundingClientRect().height;
    __MAIN__.style.height = mainHeight + "px";
    
    upperHeight = mainHeight *  parseInt(getComputedStyle(__UPPER__).maxHeight)/100;
    __UPPER__.style.height = upperHeight + "px";

    lowerHeight = mainHeight - upperHeight;
    __LOWER__.style.height = lowerHeight + "px";

    InitRegister();

    InitBulletin();
});