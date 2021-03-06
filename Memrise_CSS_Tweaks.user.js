// ==UserScript==
// @name           Memrise CSS Tweaks
// @namespace      https://github.com/cooljingle
// @description    Personal preference css improvements
// @match          https://www.memrise.com/*
// @version        0.0.12
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
sheet.insertRule(".garden #central-area { width: calc(100% - 400px) }");
//longer multiple choice options
sheet.insertRule(".garden .garden-box.multiple_choice ol.choices.grid li, .garden-box.video-pre-presentation ol.choices.grid li { width: calc(50% - 70px) }");
//set mem area width to original
sheet.insertRule(".garden .mem-area { width: 535px }");
//extend the length of the question row
sheet.insertRule(".garden .question-row .qquestion { width: 80% }");
//centre the end of session summary
sheet.insertRule(".garden .garden-box.end_of_session { margin: auto !important }");


//changes to dashboard
sheet.insertRule(".dashboard #content .container.container-main { max-width: 1600px; width: initial }");
sheet.insertRule(".dashboard .tabbed-sidebar { float:none; display: inline-block; vertical-align: top }");
sheet.insertRule(".dashboard .tabbed-main { float: none; margin-left: 20px; max-width: calc(100% - 250px); width: initial; display: inline-block; line-height: 1em }");
sheet.insertRule(".dashboard .card-top { display: inline-block }");
sheet.insertRule(".dashboard .course-card-container { margin-bottom: 0px }");
sheet.insertRule(".dashboard .course-card-container .course-progress-box .card-bottom { display: inline-block; vertical-align: top; padding: 10px; background-color: transparent; box-shadow: none }");
sheet.insertRule(".dashboard .course-card-container .course-progress-box .card-bottom .course-actions { width:initial; display: flex; flex-flow: row }");
sheet.insertRule(".dashboard .course-card-container .course-progress-box .card-bottom .course-actions a { margin-right: 10px }");
sheet.insertRule(".dashboard .course-card-container .course-progress-box .card-bottom .course-actions a[href*='/garden/review'] { order: -1 }");
sheet.insertRule(".dashboard .course-card-container .course-progress-box .card-bottom .course-actions a[href*='/garden/practise'] { order: -1 }");
sheet.insertRule(".dashboard .course-card-container .course-progress-box .card-top { padding: 0px }");
sheet.insertRule(".dashboard .course-card-container .course-progress-box .card-top .card-main-container .course-progress .right { position: absolute; top: -20px; left: -70px; }");
sheet.insertRule(".dashboard .course-card-container .course-progress-box .card-top .card-image-col { width:80px; margin-right: 4px }");
sheet.insertRule(".dashboard .course-card-container .course-progress-box .card-top .card-image-col .img-crop { width: 60px }");
sheet.insertRule(".dashboard .course-card-container .course-progress-box .card-top .card-image-col .img-crop .course-photo { height: 65px }");
sheet.insertRule(".dashboard .course-card-container .course-progress-box .card-top .card-image-col .img-crop .category-photo { bottom: 2px; right: 5px }");
sheet.insertRule(".dashboard .course-card-container .course-progress-box .card-top .detail { min-height: 50px }");
if(MEMRISE.dashboard) //trigger course 'cards' to continually load
    setInterval(() => $(window).trigger('scroll'), 500);
