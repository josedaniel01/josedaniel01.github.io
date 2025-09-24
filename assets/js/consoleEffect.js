// function([string1, string2],target id,[color1,color2])    
let i = 0; // Start typing index
let x = 0; // Current text being displayed
let txt = ['Frontend', 'Developer']; /* The text */
let speed = 100; /* The speed/duration of the effect in milliseconds */

window.onload = function() {
    if (i < txt[x].length) {
        document.getElementById(`demo${x+1}`).innerHTML += txt[x].charAt(i);
        i++;
        setTimeout(window.onload, speed);
        if(txt[x].length === i) {
            x++;
            i = 0;
        }
    }
}

