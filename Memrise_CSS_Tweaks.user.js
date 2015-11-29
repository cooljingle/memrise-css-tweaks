// ==UserScript==
// @name           Memrise CSS Tweaks
// @namespace      https://github.com/cooljingle
// @description    Personal preference css improvements
// @match          http://www.memrise.com/*
// @version        0.0.6
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
//longer multiple choice options
sheet.addRule(".choices li", "width: 45% !important");
//align mems to the centre
sheet.addRule(".mem.garden", "margin:auto");
//extend the length of the question row
sheet.addRule(".question-row .qquestion", "width: 80%");
//centre the end of session summary
sheet.addRule(".garden-box.end_of_session", "margin: auto !important");
//fix to weird end of session point rendering 
sheet.addRule(".hovercard .points", "color: cadetblue; position: relative; background-image: none; display: inline");


//changes to dashboard
sheet.addRule(".dashboard #content .container.container-main", "max-width: 1500px; width: initial");
sheet.addRule(".dashboard .tabbed-sidebar", "float:none; display: inline-block; vertical-align: top");
sheet.addRule(".dashboard .tabbed-main", "float: none; margin-left: 20px; max-width: calc(100% - 250px); width: initial; display: inline-block; line-height: 1em");
sheet.addRule(".dashboard .card-top", "display: inline-block");
sheet.addRule(".dashboard .course-card-container", "margin-bottom: 0px");
sheet.addRule(".dashboard .course-card-container .course-progress-box .card-bottom", "display: inline-block; vertical-align: top; padding: 10px; background-color: transparent; box-shadow: none");
sheet.addRule(".dashboard .course-card-container .course-progress-box .card-bottom .course-actions", "width:initial; display: flex; flex-flow: row");
sheet.addRule(".dashboard .course-card-container .course-progress-box .card-bottom .course-actions a", "margin-right: 10px");
sheet.addRule(".dashboard .course-card-container .course-progress-box .card-bottom .course-actions a[href*='/garden/review']", "order: -1");
sheet.addRule(".dashboard .course-card-container .course-progress-box .card-bottom .course-actions a[href*='/garden/practise']", "order: -1");
sheet.addRule(".dashboard .course-card-container .course-progress-box .card-top", "padding: 0px");
sheet.addRule(".dashboard .course-card-container .course-progress-box .card-top .card-main-container .course-progress .right", "position: absolute; top: -20px; left: -70px;");
sheet.addRule(".dashboard .course-card-container .course-progress-box .card-top .card-image-col", "width:80px; margin-right: 4px");
sheet.addRule(".dashboard .course-card-container .course-progress-box .card-top .card-image-col .img-crop", "width: 60px");
sheet.addRule(".dashboard .course-card-container .course-progress-box .card-top .card-image-col .img-crop .course-photo", "height: 65px");
sheet.addRule(".dashboard .course-card-container .course-progress-box .card-top .card-image-col .img-crop .category-photo", "bottom: 2px; right: 5px");
