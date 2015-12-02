// ==UserScript==
// @name         9GAG DDT *Next Version Changes*
// @description  !!!!TEST Version!!!! A dark theme for 9GAG on desktop (non-mobile) environment !!!!TEST Version!!!!
// @version      0.6.0.3 beta
// @author       CivisMiles
// @license      GNU GPL version 3 or any later version; https://github.com/CivisMiles/Dark-9GAG-Desktop-Theme/blob/master/LICENSE; http://www.gnu.org/copyleft/gpl.html
// @homepage     https://github.com/CivisMiles/Dark-9GAG-Desktop-Theme
// @updateURL    https://github.com/CivisMiles/9GAG-Dark-Desktop-Theme/raw/master/9GAG_DDT_Next_Version_Beta.user.js
// @grant        none
// @run-at       document-start
// @include      http://9gag.com/*
// @include      https://9gag.com/*
// ==/UserScript==

/* Creation and initailization of many variables */
var El = document.createElement('style');
var NotifyMenu = document.createElement('style');
var SearchBar = document.createElement('style');
var UploadWindow = document.createElement('style');
var NavBar = document.createElement('style');
var ProfilePage = document.createElement('style');
var SettingsPages = document.createElement('style');
var SideBar = document.createElement('style');
var BannerPostFeed = document.createElement('style');
/*
var a = document.createElement('style');
var a = document.createElement('style');
var a = document.createElement('style');
var a = document.createElement('style');
var a = document.createElement('style');
var a = document.createElement('style');
*/
El.type = SearchBar.type = NotifyMenu.type = UploadWindow.type = NavBar.type = ProfilePage.type = SettingsPages.type = SideBar.type = BannerPostFeed.type = 'text/css';


/* Changes that effect multiple parts/sections */
El.innerHTML = 'section#idle h2 { color: #999;} section#idle .ticker { border: 1px solid #999;} .ticker a .info h3 { color: #999;} section#individual-post header h2 { background-color: transparent; color: #999;} .post-afterbar-a.in-post-top { background-color: #101010;} .horizontal-vote a.up span { background-color: #101010;} .post-afterbar-a .others a.more { background-color: #101010;} .post-afterbar-meta { border-top: 1px solid #999;} .CS3 { background-color: #101010;} .CS3 .tab-bar { border-bottom: 1px solid #999;} .CS3 .tab-bar h3 { color: #999;} .CS3 .tab-bar ul.tab li.active a { background-color: rgba(255,255,255,.2); color: #101010;} .CS3 .tab-bar ul.tab a { color: #999;} .CS3 .comment-box .payload .textarea-container textarea.focus, .CS3 .comment-box.indent-1 .payload .textarea-container textarea { background-color: #101010; color: #999;} .CS3 .comment-entry .payload .username { color: #999;} .CS3 span.drop { -webkit-filter: invert(60%);} .CS3 .comment-pop-menu ul { background-color: #101010; border: 1px solid #999} .CS3 .comment-pop-menu a { background-color: #101010; color: #999} .CS3 .comment-entry .payload .content { color: #999;} #container { background-color: #101010;} .popup-menu ul { background-color: #101010; border: 1px solid #999} .popup-menu a { background-color: #101010; color: #999;} section.modal { background-color: #101010;} section.modal a.btn-close { -webkit-filter: invert(60%);} section.section-header { background-color: #101010; border-bottom: 1px solid #999; box-shadow: none} section.section-header h2 { color: #999;} .post-text-container { color: #999;} a.back-to-top { -webkit-filter: invert(100%); border: 1px solid #666} .loading a.btn.end { color: #fff; background-color: #09f; border-color: #09f;}';
document.documentElement.appendChild(El);
/*
  Part   ---   Description/What it effects   ----------------------------------------------------------------   Current text within "styleE1.innerHTML"   ----------------------------------------------------------------   Extra Notes
    1   ----   General page background color   --------------------------------------------------------------   #container { background-color: #101010;}   ---------------------------------------------------------------   N/A
    2   ----   General popup menu border & background color   -----------------------------------------------   .popup-menu ul { background-color: #101010; border: 1px solid #999}   ------------------------------------   N/A
    3   ----   General popup menu text color   --------------------------------------------------------------   .popup-menu a { background-color: #101010; color: #999;}   -----------------------------------------------   N/A
    4   ----   General popup window background color   ------------------------------------------------------   section.modal { background-color: #101010;}   ------------------------------------------------------------   N/A
    5   ----   General popup window exit button image color inversion   -------------------------------------   section.modal a.btn-close { -webkit-filter: invert(60%);}   ----------------------------------------------   N/A
    6   ----   Section header background color   ------------------------------------------------------------   section.section-header { background-color: #101010; border-bottom: 1px solid #999; box-shadow: none}   ---   N/A
    7   ----   Section header title color   -----------------------------------------------------------------   section.section-header h2 { color: #999;}   --------------------------------------------------------------   N/A
    8   ----   Color of text underneath a post e.i. "See Full Video Here"  ----------------------------------   .post-text-container { color: #999;}   -------------------------------------------------------------------   N/A
    9   ----   Back to top arrow from the bottom right corner color and border   ----------------------------   a.back-to-top { -webkit-filter: invert(100%); border: 1px solid #666}   ----------------------------------   N/A
    10   ---   Color of the bar Bar at the end of the feed that says "I Want More Fun" or "No More Posts  ---   .loading a.btn.end { color: #fff; background-color: #09f; border-color: #09f;}   -------------------------   N/A
    
*/

/* Search Bar changes */
SearchBar.innerHTML = '.headbar-search { border: 1px solid #999; background-color: #101010;} .headbar-search input[type=text] { color: #999; background-color: #101010;}';
document.documentElement.appendChild(SearchBar);
/*
  Part   ---   Description/What it effects   --------------------------   Current text within "styleSearchBar.innerHTML"   --------------------------------   Extra Notes
    1   ----   Built in 9gag search bar border & background color   ---   .headbar-search { border: 1px solid #999; background-color: #101010;}   ---------   N/A
    2   ----   Built in 9gag search bar text color   ------------------   .headbar-search input[type=text] { color: #999; background-color: #101010;}   ---   N/A
*/

/* Notification Menu changes */
NotifyMenu.innerHTML = '.notification-menu { background-color: #101010; border: 1px solid #999} .notification-menu .title h3{ color: #999;} .notification-menu .bumper{ background-color: #101010; border-top: 1px solid #999}';
document.documentElement.appendChild(NotifyMenu);
/*
  Part   ---   Description/What it effects   -----------------------------------   Current text within "styleNotifyMenu.innerHTML"   --------------------------------------   Extra Notes
    1   ----   Notification menu background and border color   -----------------   .notification-menu { background-color: #101010; border: 1px solid #999}   --------------   N/A
    2   ----   Notification menu title text color   ----------------------------   .notification-menu .title h3{ color: #999;}   ------------------------------------------   N/A
    3   ----   Notification menu bottom bumper background and border color   ---   .notification-menu .bumper{ background-color: #101010; border-top: 1px solid #999}   ---   N/A
*/

/* Upload popup window changes */
UploadWindow.innerHTML = 'section.modal header h3{ color: #999;} section.modal header p{ color: #999;} section.modal.upload .source-file { border: 1px solid #999; background-color: #101010} section.modal.upload .source-meme, section.modal.upload .source-url { border: 1px solid #999;}';
document.documentElement.appendChild(UploadWindow);
/*
  Part   ---   Description/What it effects   -------------------------------   Current text within "styleNotifyMenu.innerHTML"   --------------------------------------------------   Extra Notes
    1   ----   Upload popup window title color   ---------------------------   section.modal header h3{ color: #999;}   -----------------------------------------------------------   Possible to be just for popupwindows in general
    2   ----   Upload popup window title info color   ----------------------   section.modal header p{ color: #999;}   ------------------------------------------------------------   Possible to be just for popupwindows in general
    3   ----   Upload popup window drag and drop file box border color   ---   section.modal.upload .source-file { border: 1px solid #999; background-color: #101010}   -----------   N/A
    4   ----   Upload popup window url & meme box border color   -----------   section.modal.upload .source-meme, section.modal.upload .source-url { border: 1px solid #999;}   ---   N/A
*/

/* Page dependant navigation bar changes */
NavBar.innerHTML = '.section-nav { background-color: #101010; border-bottom: 1px solid #999;} .section-nav a { color: #999;} .section-nav a.selected { background-color: rgba(255,255,255,.2); color: #101010;}';
document.documentElement.appendChild(NavBar);
/*
  Part   ---   Description/What it effects   -------------------------   Current text within "styleNotifyMenu.innerHTML"   --------------------------------------   Extra Notes
    1   ----   Navigation bar background and bottom border colors  ---   .section-nav { background-color: #101010; border-bottom: 1px solid #999;}   ------------   N/A
    2   ----   Navigation bar unselected option textcolor   ----------   .section-nav a { color: #999;}   -------------------------------------------------------   N/A
    3   ----   Navigation bar selected option textcolor   ------------   .section-nav a.selected { background-color: rgba(255,255,255,.2); color: #101010;}   ---   N/A
*/

/* Profile Page changes */
ProfilePage.innerHTML = 'section.profile-header .profile.no-banner .info { background-color: #101010;} section.profile-header h2 { color: #999;} section.profile-header .info p { color: #999; opacity: 1;} section#list-view-2 .activity-text a { color: #999;} section#list-view-2 .activity-text { color: #999;}';
document.documentElement.appendChild(ProfilePage);
/*
  Part   ---   Description/What it effects   --------------------------------------   Current text within "styleNotifyMenu.innerHTML"   --------------------------------------   Extra Notes
    1   ----   Profile page header background color & bottom border   -------------   section.profile-header .profile.no-banner .info { background-color: #101010;}   --------   N/A
    2   ----   Profile page username text color   ---------------------------------   section.profile-header h2 { color: #999;}   --------------------------------------------   N/A
    3   ----   Profile page info text color   -------------------------------------   section.profile-header .info p { color: #999; opacity: 1;}   ---------------------------   N/A
    4   ----   Profile page username above post text color   ----------------------   section#list-view-2 .activity-text a { color: #999;}   ---------------------------------   N/A
    5   ----   Profile page activity above post text color   ----------------------   section#list-view-2 .activity-text { color: #999;}   -----------------------------------   N/A
*/

/* Settings Pages changes 
SettingsPages.innerHTML = '';
document.documentElement.appendChild(SettingsPages);
/*
  Part   ---   Description/What it effects   --------------------------------------   Current text within "styleNotifyMenu.innerHTML"   --------------------------------------   Extra Notes
    1   ----   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------   N/A
    2   ----   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------   N/A
    3   ----   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------   N/A
    4   ----   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------   N/A
*/

/* Side Bar changes */ 
SideBar.innerHTML = 'section.block-feature-cover .info-container a { color: #999;} h2.sidebar-title { color: #999;} section.block-social-love .social-love a.instagram-follow { background-color: #FDFDFD;} section.footer { background-color: transparent;}';
document.documentElement.appendChild(SideBar);
/*
  Part   ---   Description/What it effects   --------------------------------------   Current text within "styleNotifyMenu.innerHTML"   -------------------------------------------   Extra Notes
    1   ----   Side bar suggested posts title text color   ------------------------   section.block-feature-cover .info-container a { color: #999;}   -----------------------------   N/A
    2   ----   Side bar app/play store & social media title text color   ----------   h2.sidebar-title { color: #999;}   ----------------------------------------------------------   N/A
    3   ----   Side bar instagram button background color   -----------------------   section.block-social-love .social-love a.instagram-follow { background-color: #FDFDFD;}   ---   it is possible by playing with this, or something similar to this, to completly remove all socailmedia buttons from your 9GAG experience 
    4   ----   Side bar footer links background   ---------------------------------   section.footer { background-color: transparent;}   ------------------------------------------   N/A
*/

/* BannerPostFeed changes */
BannerPostFeed.innerHTML = 'section#list-view-2 article { border-top: 1px solid #999;} section#list-view-2 h2 a { background-color: transparent; color: #999;} a.post-read-more { background-color: #101010; border: 1px solid #999;} .post-read-more .shadow { width: 0px; height: 0px;}';
document.documentElement.appendChild(BannerPostFeed);
/*
  Part   ---   Description/What it effects   --------------------------------------   Current text within "styleNotifyMenu.innerHTML"   ---------------------------   Extra Notes
    1   ----   color   ------------------------------------------------------------   section#list-view-2 article { border-top: 1px solid #999;}   ----------------   N/A
    2   ----   color   ------------------------------------------------------------   section#list-view-2 h2 a { background-color: transparent; color: #999;}   ---   N/A
    3   ----   color   ------------------------------------------------------------   a.post-read-more { background-color: #101010; border: 1px solid #999;}   ----   N/A
    4   ----   color   ------------------------------------------------------------   .post-read-more .shadow { width: 0px; height: 0px;}   -----------------------   N/A
*/

/*  changes 
style.innerHTML = '';
document.documentElement.appendChild(style);
/*
  Part   ---   Description/What it effects   --------------------------------------   Current text within "styleNotifyMenu.innerHTML"   --------------------------------------   Extra Notes
    1   ----   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------   N/A
    2   ----   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------   N/A
    3   ----   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------   N/A
    4   ----   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------   N/A
*/

/*  changes 
style.innerHTML = '';
document.documentElement.appendChild(style);
/*
  Part   ---   Description/What it effects   --------------------------------------   Current text within "styleNotifyMenu.innerHTML"   --------------------------------------   Extra Notes
    1   ----   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------   N/A
    2   ----   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------   N/A
    3   ----   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------   N/A
    4   ----   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------   N/A
*/

/*  changes 
style.innerHTML = '';
document.documentElement.appendChild(style);
/*
  Part   ---   Description/What it effects   --------------------------------------   Current text within "styleNotifyMenu.innerHTML"   --------------------------------------   Extra Notes
    1   ----   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------   N/A
    2   ----   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------   N/A
    3   ----   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------   N/A
    4   ----   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------   N/A
*/

/*  changes 
style.innerHTML = '';
document.documentElement.appendChild(style);
/*
  Part   ---   Description/What it effects   --------------------------------------   Current text within "styleNotifyMenu.innerHTML"   --------------------------------------   Extra Notes
    1   ----   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------   N/A
    2   ----   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------   N/A
    3   ----   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------   N/A
    4   ----   color   ------------------------------------------------------------   asdf { ghjk: qwerty;}   ----------------------------------------------------------------   N/A
*/
