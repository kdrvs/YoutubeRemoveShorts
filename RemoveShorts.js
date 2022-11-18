// ==UserScript==
// @name         Youtube Remove Shorts
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the Youtube!
// @author       github.com/kdrvs
// @match        *://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    remove_shorts();

    window.addEventListener('scroll', function(){
        remove_shorts();
    });
    window.addEventListener('load', function(){
        remove_shorts();
    });
    window.addEventListener('click', function(){
        remove_shorts();
    });

    function remove_shorts(){
        let shorts = document.querySelectorAll('[href*="shorts"]');
        shorts.forEach(el => {
            el.parentNode.parentNode.parentNode.remove();
        });
    };

})();