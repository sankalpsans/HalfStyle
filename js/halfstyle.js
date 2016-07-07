/*!
 * HalfStyle
 * Copyright 2014 Arbel Hakopian
 * Licensed under MIT (https://github.com/arbelh/HalfStyle/blob/master/license.md)
 */
window.onload = function(){ initHalfStyle(); };
function initHalfStyle() {
    var halfstyle_text, halfstyle_chars, $halfstyle_el, halfstyle_i, halfstyle_output, halfstyle_style;

    // Iterate over all class occurrences
    var domsToIterate = document.getElementsByClassName('textToHalfStyle');
    for(var i = 0; i < domsToIterate.length; i = i + 1) {
        halfstyle_el = domsToIterate[i];
        halfstyle_style = halfstyle_el.attributes['data-halfstyle'].value;
        halfstyle_text = halfstyle_el.innerText;
        halfstyle_chars = halfstyle_text.split('');

        // Set the screen-reader text
	halfstyle_output = '<span style="position: absolute !important;clip: rect(1px 1px 1px 1px);clip: rect(1px, 1px, 1px, 1px);">' + halfstyle_text + '</span>';

        // Iterate over all chars in the text
        for (halfstyle_i = 0; halfstyle_i < halfstyle_chars.length; halfstyle_i++) {
            // Create a styled element for each character and append to container
            halfstyle_output += '<span aria-hidden="true" class="halfStyle ' + halfstyle_style + '" data-content="' + halfstyle_chars[halfstyle_i] + '">' + halfstyle_chars[halfstyle_i] + '</span>';
        }
	halfstyle_el.innerHTML = halfstyle_output;
    }
};
