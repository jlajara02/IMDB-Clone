'use client'
import React from 'react'

/* dark theme from rgb to hex */
function darkTheme(color){

    var currentColor = window.getComputedStyle(document.body).backgroundColor; 
    //var currentColor = document.body.style.background;
    //var currentColor = document.getElementById("cnt_bdy");
    /* const myArray = currentColor.split(",");
    let first = myArray[0];
    let second = myArray[1];
    let third = myArray[2];
 */

    //var colorr = currentColor ;
    var red = 0;
    var green = 0;
    var blue = 0;
    var alpha = 0;

    console.log("currentColor:" + currentColor)
    var matchColors = /rgba\((\d{1,3}), (\d{1,3}), (\d{1,3}), (\d{1,3})\)/;
    var match = matchColors.exec(currentColor);
    console.log('match: ' + match )

    if (match !== null) {
        red = match[1];
        green = match[2];
        blue =  match[3];
        alpha =  match[4];
        console.log('Red: ' + match[1] + ' Green: ' + match[2] + ' Blue: ' + match[3] + ' Alpha: ' + match[4]);
    }

 

    const colorToHex = (color) => {
        const hexadecimal = color.toString(16);
        return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
    }

    const RGBtoHex = (red, green, blue) => {
        return "#" + colorToHex(red) + colorToHex(green) + colorToHex(blue);
    }   
    
    /* console.log("first:" + first)
    console.log("second:" + second)
    console.log("third:" + third) */
    
    console.log("color:" + color)
    
    console.log("currentColor.length:" + currentColor.length)
    console.log("RGBtoHex:" + RGBtoHex(red, green, blue));

    if ((currentColor.length > 0) && (currentColor != "rgba(0, 0, 0, 0)")){
        //return bgcolor="#800000";
        //return document.body.style.background = 'transparent';
        return document.body.setAttribute('style', 'background: transparent;')
    }else{
        //return document.body.style.background = color;
        return document.body.setAttribute('style', 'background:' + color+';')
    }
    //return document.body.style.background = color;
    
}

/* color theme passing in the rgba color */
function changeBackground(choosenColor){
    console.log("choosenColor:" + choosenColor);
    if(choosenColor != 0){
        return document.body.setAttribute('style', 'background:' + choosenColor +';')
    }else{
        return document.body.setAttribute('style', 'background: transparent;')
    }
    
}

const gblButtonTheme = ({styles, color , text}) => {
    return (
        <div>
        {/* <button type="button" className={styles} onClick={handleClick}>{text}</button> */}
            {/* <button type="button" className={styles} onClick={() => darkTheme(color)}>{text}</button> */}
            {/* <label htmlFor="colors">Choose a color:</label> */}
            <select name="colors" id="colors" onChange={() => changeBackground(document.getElementById("colors").value)}>
                <option value="0">Choose a background color</option>
                <option value="rgba(242, 7, 7, .4)"  style={{backgroundColor:'rgba(242, 7, 7, .4)'}}>Apple</option>
                <option value="rgba(242, 226, 7, .4)"  style={{backgroundColor:'rgba(242, 226, 7, .4)'}}>Banana</option>
                <option value="rgba(117, 7, 242, .4)" style={{backgroundColor:'rgba(117, 7, 242, .4)'}}>Grape</option>
            </select>
        </div>
      )
};

export default gblButtonTheme;
