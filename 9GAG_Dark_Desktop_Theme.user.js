// ==UserScript==
// @name         9GAG Dark Desktop Theme (9GAG DDT)
// @description  A dark theme for 9GAG on desktop (non-mobile) environment
// @version      0.5.4
// @author       CivisMiles
// @license      GNU GPL version 3 or any later version; https://github.com/CivisMiles/9GAG-Dark-Desktop-Theme/blob/master/LICENSE; http://www.gnu.org/copyleft/gpl.html
// @homepage     https://github.com/CivisMiles/9GAG-Dark-Desktop-Theme
// @updateURL    https://github.com/CivisMiles/9GAG-Dark-Desktop-Theme/raw/master/9GAG_Dark_Desktop_Theme.user.js  
// @supportURL   https://docs.google.com/forms/d/15Xe6K1VUnvCFHC7MYDbJVwAFWSGbmALXPRhANAWPuhA/viewform
// @supportURL   https://github.com/CivisMiles/9GAG-Dark-Desktop-Theme/issues
// @grant        none
// @run-at       document-start
// @include      http://9gag.com/*
// @include      https://9gag.com/*
// ==/UserScript==

var styleEl = document.createElement('style');
styleEl.type = 'text/css';
styleEl.innerHTML = '.headbar-search { border: 1px solid #999; background-color: #101010;} .headbar-search input[type=text] { color: #999; background-color: #101010;} .notification-menu { background-color: #101010; border: 1px solid #999} .notification-menu .title h3{ color: #999;} .notification-menu .bumper{ background-color: #101010; border-top: 1px solid #999} .popup-menu ul { background-color: #101010; border: 1px solid #999} .popup-menu a { background-color: #101010; color: #999;} section.modal header h3{ color: #999;} section.modal header p{ color: #999;} section.modal a.btn-close { -webkit-filter: invert(60%);} section.modal.upload .source-file { border: 1px solid #999; background-color: #101010} section.modal.upload .source-meme, section.modal.upload .source-url { border: 1px solid #999;} #container { background-color: #101010;} section.section-header { background-color: #101010; border-bottom: 1px solid #999; box-shadow: none} section.profile-header .profile.no-banner .info { background-color: #101010;} section.profile-header h2 { color: #999;} section.profile-header .info p { color: #999; opacity: 1;} .section-nav { background-color: #101010; border-bottom: 1px solid #999;} .section-nav a { color: #999;} .section-nav a.selected { background-color: rgba(255,255,255,.2); color: #101010;} section#list-view-2 .activity-text a { color: #999;} section#list-view-2 .activity-text { color: #999;} section.section-header h2 { color: #999;} section.block-feature-cover .info-container a { color: #999;} h2.sidebar-title { color: #999;} section.block-social-love .social-love a.instagram-follow { background-color: #FDFDFD;} section.footer { background-color: transparent;} a.back-to-top { -webkit-filter: invert(100%); border: 1px solid #666} section#list-view-2 article { border-top: 1px solid #999;}  section#list-view-2 h2 a { background-color: transparent; color: #999;} a.post-read-more { background-color: #101010; border: 1px solid #999;} .post-read-more .shadow { width: 0px; height: 0px;} .post-text-container { color: #999;} .loading a.btn.end { color: #fff; background-color: #09f; border-color: #09f;} section.modal { background-color: #101010;} section#idle h2 { color: #999;} section#idle .ticker { border: 1px solid #999;} .ticker a .info h3 { color: #999;} section#individual-post header h2 { background-color: transparent; color: #999;} .post-afterbar-a.in-post-top { background-color: #101010;} .horizontal-vote a.up span { background-color: #101010;} .post-afterbar-a .others a.more { background-color: #101010;} .post-afterbar-meta { border-top: 1px solid #999;} .CS3 { background-color: #101010;} .CS3 .tab-bar { border-bottom: 1px solid #999;} .CS3 .tab-bar h3 { color: #999;} .CS3 .tab-bar ul.tab li.active a { background-color: rgba(255,255,255,.2); color: #101010;} .CS3 .tab-bar ul.tab a { color: #999;} .CS3 .comment-box .payload .textarea-container textarea.focus, .CS3 .comment-box.indent-1 .payload .textarea-container textarea { background-color: #101010; color: #999;} .CS3 .comment-entry .payload .username { color: #999;} .CS3 span.drop { -webkit-filter: invert(60%);} .CS3 .comment-pop-menu ul { background-color: #101010; border: 1px solid #999} .CS3 .comment-pop-menu a { background-color: #101010; color: #999} .CS3 .comment-entry .payload .content { color: #999;}';
document.documentElement.appendChild(styleEl);

/*
  Parts of "styleEl.innerHTML" and what they represent...I haven't figured out how to separeate it (if even possible) in the code so this will have to do for now.
  
  Part   ---   Description/What it effects   --------------------------------------   Current text within "styleEl.innerHTML"   ----------------------------------------------------------------   Extra Notes
    1   ----   Built in 9gag search bar border & background color   ---------------   .headbar-search { border: 1px solid #999; background-color: #101010;}   ----------------------------------   N/A
    2   ----   Built in 9gag search bar text color   ------------------------------   .headbar-search input[type=text] { color: #999; background-color: #101010;}   ----------------------------   N/A
    3   ----   Notification menu background and border color   --------------------   .notification-menu { background-color: #101010; border: 1px solid #999}   --------------------------------   N/A
    4   ----   Notification menu title text color   -------------------------------   .notification-menu .title h3{ color: #999;}   ------------------------------------------------------------   N/A
    5   ----   Notification menu bottom bumper background and border color   ------   .notification-menu .bumper{ background-color: #101010; border-top: 1px solid #999}   ---------------------   N/A
    6   ----   General popup menu border & background color   ---------------------   .popup-menu ul { background-color: #101010; border: 1px solid #999}   ------------------------------------   N/A
    7   ----   General popup menu text color   ------------------------------------   .popup-menu a { background-color: #101010; color: #999;}   -----------------------------------------------   N/A
    8   ----   Upload popup window title color   ----------------------------------   section.modal header h3{ color: #999;}   -----------------------------------------------------------------   N/A
    9   ----   Upload popup window title info color   -----------------------------   section.modal header p{ color: #999;}   ------------------------------------------------------------------   N/A
    10   ---   Upload popup window drag and drop file box border color   ----------   section.modal.upload .source-file { border: 1px solid #999; background-color: #101010}   -----------------   N/A
    11   ---   Upload popup window url & meme box border color   ------------------   section.modal.upload .source-meme, section.modal.upload .source-url { border: 1px solid #999;}   ---------   N/A
    12   ---   General popup window exit button image color inversion   -----------   section.modal a.btn-close { -webkit-filter: invert(60%);}   ----------------------------------------------   N/A
    13   ---   General page background color   ------------------------------------   #container { background-color: #101010;}   ---------------------------------------------------------------   N/A
    14   ---   Section header background color   ----------------------------------   section.section-header { background-color: #101010; border-bottom: 1px solid #999; box-shadow: none}   ---   N/A
    15   ---   Profile page header background color & bottom border   -------------   section.profile-header .profile.no-banner .info { background-color: #101010;}   --------------------------   N/A
    16   ---   Profile page username text color   ---------------------------------   section.profile-header h2 { color: #999;}   --------------------------------------------------------------   N/A
    17   ---   Profile page info text color   -------------------------------------   section.profile-header .info p { color: #999; opacity: 1;}   ---------------------------------------------   N/A
    18   ---   Profile page navigation bar background and bottom border colors  ---   .section-nav { background-color: #101010; border-bottom: 1px solid #999;}   ------------------------------   N/A
    19   ---   Profile page navigation bar unselected option textcolor   ----------   .section-nav a { color: #999;}   -------------------------------------------------------------------------   N/A
    20   ---   Profile page navigation bar selected option textcolor   ------------   .section-nav a.selected { background-color: rgba(255,255,255,.2); color: #101010;}   ---------------------   N/A
    21   ---   Profile page username above post text color   ----------------------   section#list-view-2 .activity-text a { color: #999;}   ---------------------------------------------------   N/A
    22   ---   Profile page activity above post text color   ----------------------   section#list-view-2 .activity-text { color: #999;}   -----------------------------------------------------   N/A
    23   ---   Section header title color   ---------------------------------------   section.section-header h2 { color: #999;}   --------------------------------------------------------------   N/A
    24   ---   Side bar suggested posts title text color   ------------------------   section.block-feature-cover .info-container a { color: #999;}   ------------------------------------------   N/A
    25   ---   Side bar app/play store & social media title text color   ----------   h2.sidebar-title { color: #999;}   -----------------------------------------------------------------------   N/A
    26   ---   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------------------------   N/A
    27   ---   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------------------------   N/A
    28   ---   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------------------------   N/A
    29   ---   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------------------------   N/A
    30   ---   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------------------------   N/A
    31   ---   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------------------------   N/A
    32   ---   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------------------------   N/A
    33   ---   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------------------------   N/A
    34   ---   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------------------------   N/A
    35   ---   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------------------------   N/A
    36   ---   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------------------------   N/A
    37   ---   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------------------------   N/A
    38   ---   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------------------------   N/A
    39   ---   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------------------------   N/A
    40   ---   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------------------------   N/A
    41   ---   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------------------------   N/A
    42   ---   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------------------------   N/A
    43   ---   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------------------------   N/A
    44   ---   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------------------------   N/A
    45   ---   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------------------------   N/A
    46   ---   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------------------------   N/A
    47   ---   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------------------------   N/A
    48   ---   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------------------------   N/A
    49   ---   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------------------------   N/A
    50   ---   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------------------------   N/A

*/
