// ==UserScript==
// @name           Memrise CSS Tweaks
// @namespace      https://github.com/cooljingle
// @description    Personal preference css improvements
// @match          http://www.memrise.com/course/*/garden/*
// @match          http://www.memrise.com/garden/review/*
// @version        0.0.2
// @updateURL      https://github.com/cooljingle/memrise-css-tweaks/raw/master/Memrise_CSS_Tweaks.user.js
// @downloadURL    https://github.com/cooljingle/memrise-css-tweaks/raw/master/Memrise_CSS_Tweaks.user.js
// @grant          none
// ==/UserScript==

var sheet = (function() {
	var style = document.createElement("style");
	style.appendChild(document.createTextNode(""));
    
	document.head.appendChild(style);
	return style.sheet;
})();

//larger central area
sheet.addRule("#central-area", "width: 75%");
//align mems to the centre
sheet.addRule(".mem.garden", "margin:auto");
//extend the length of the question row
sheet.addRule(".question-row .qquestion", "width: 80%");
//centre the end of session summary
sheet.addRule(".garden-box.end_of_session", "margin: auto");
