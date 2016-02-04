// ==UserScript==
// @name         Ghost trapper Auto Companion Lover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Help you send gift to companion you loved.Make sure to install ghost trapper companion companion, disabled it or companion script to stop sending. Gift send automatically to and companion that can receives gift!!
// @author       Knight of K9
// @grant        none
// @include      http://www.ghost-trappers.com/fb/setup.php?type=companion*
// ==/UserScript==
/* jshint -W097 */
'use strict';

// Your code here...
var checkButton = document.getElementsByName("present_id")[0];
var gift = document.getElementsByClassName("smallPresentText")[0];
if(gift != null)
{
    var giftName = gift.textContent;
    var sendButton = document.getElementsByName("confirm")[1];
    console.log("Are u sure u want to send "+ giftName +" with value = "+checkButton.value);
    if (giftName.indexOf("(")>=0 && giftName.indexOf(")")>=0) {
        if(giftName.indexOf("(?)")>=0){
            alert("No gift information found!!");
        }
        else{
            checkButton.checked = true;
            sendButton.click();
        }
    } 
    else {
        alert("No companion script found!Have you installed ghost trapper companion companion?");
    }
}
else{
    console.log("Your companion can not receive gift !!")
}

