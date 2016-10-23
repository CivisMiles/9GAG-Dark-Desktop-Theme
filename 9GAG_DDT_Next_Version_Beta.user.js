// ==UserScript==
// @name         9GAG DDT *Next Version Changes*
// @description  !!!!TEST Version!!!! A dark theme for 9GAG on desktop (non-mobile) environment !!!!TEST Version!!!!
// @version      0.9.0.1 beta
// @author       CivisMiles
// @license      GNU GPL version 3 or any later version; https://github.com/CivisMiles/Dark-9GAG-Desktop-Theme/blob/master/LICENSE; http://www.gnu.org/copyleft/gpl.html
// @homepage     https://github.com/CivisMiles/Dark-9GAG-Desktop-Theme
// @updateURL    https://github.com/CivisMiles/9GAG-Dark-Desktop-Theme/raw/master/9GAG_DDT_Next_Version_Beta.user.js
// @downloadURL  https://github.com/CivisMiles/9GAG-Dark-Desktop-Theme/raw/master/9GAG_DDT_Next_Version_Beta.user.js
// @supportURL   https://docs.google.com/forms/d/15Xe6K1VUnvCFHC7MYDbJVwAFWSGbmALXPRhANAWPuhA/viewform
// @supportURL   https://github.com/CivisMiles/9GAG-Dark-Desktop-Theme/issues
// @grant        none
// @run-at       document-start
// @include      http://9gag.com/*
// @include      https://9gag.com/*
// ==/UserScript==

// Creation and initailization of variables many variables
var El = document.createElement('style'); var SearchBar = document.createElement('style'); var NotifyMenu = document.createElement('style'); var UploadWindow = document.createElement('style'); var IdleWindow = document.createElement('style'); var MoreMenu = document.createElement('style');
El.type = SearchBar.type = NotifyMenu.type = UploadWindow.type = IdleWindow.type = MoreMenu.type = 'text/css';
var url = window.location.href; var urlProfile = url.substring(0,18); var urlSettings = url.substring(0,25); var urlGAG = url.substring(0,20); var urlContact = url.substring(0,23); var urlNotifyPage = url.substring(0,29); //window.alert(urlContact);

// Changes that effect multiple parts/sections
El.innerHTML = '#container { background-color: #101010;} .popup-menu ul { background-color: #101010; border: 1px solid #999} .popup-menu a { background-color: #101010; color: #999;} section.modal { background-color: #101010;} section.modal a.btn-close { -webkit-filter: invert(60%);} section.section-header { background-color: #101010; border-bottom: 1px solid #999; box-shadow: none} section.section-header h2 { color: #999;} .section-nav { background-color: #101010; border-bottom: 1px solid #999;} .section-nav a { color: #999;} .section-nav a.selected { background-color: rgba(255,255,255,.2); color: #101010;} .post-text-container { color: #999;} a.back-to-top { -webkit-filter: invert(100%); border: 1px solid #666} .loading a.btn.end { color: #fff; background-color: #09f; border-color: #09f;} .loading a.btn.spin { background-color: #FFF; -webkit-filter: invert(93.55%);} .static-block { background-color: #101010; color: #999;} footer .naughty-box { background-color: #101010;} select { background-color: #999; color: #101010;} section#signup h2 { color: #999;} .field label { color: #999;} input[type=email], input[type=password], input[type=text], input[type=url] { background-color: #999; border-color: #999; color: #101010;}';
document.documentElement.appendChild(El);
/*
  Part   ---   Description/What it effects   ----------------------------------------------------------------   Current text within "E1.innerHTML"   ----------------------------------------------------------------------------------------------------------   Extra Notes
    1   ----   General page background color   --------------------------------------------------------------   #container { background-color: #101010;}   ----------------------------------------------------------------------------------------------------   N/A
    2   ----   General popup menu border & background color   -----------------------------------------------   .popup-menu ul { background-color: #101010; border: 1px solid #999}   -------------------------------------------------------------------------   N/A
    3   ----   General popup menu text color   --------------------------------------------------------------   .popup-menu a { background-color: #101010; color: #999;}   ------------------------------------------------------------------------------------   N/A
    4   ----   General popup window background color   ------------------------------------------------------   section.modal { background-color: #101010;}   -------------------------------------------------------------------------------------------------   N/A
    5   ----   General popup window exit button image color inversion   -------------------------------------   section.modal a.btn-close { -webkit-filter: invert(60%);}   -----------------------------------------------------------------------------------   N/A
    6   ----   Section header background color   ------------------------------------------------------------   section.section-header { background-color: #101010; border-bottom: 1px solid #999; box-shadow: none}   ----------------------------------------   N/A
    7   ----   Section header title color   -----------------------------------------------------------------   section.section-header h2 { color: #999;}   ---------------------------------------------------------------------------------------------------   N/A
    8   ----   General Navigation bar background and bottom border colors  ----------------------------------   .section-nav { background-color: #101010; border-bottom: 1px solid #999;}   -------------------------------------------------------------------   N/A
    9   ----   General Navigation bar unselected option textcolor   -----------------------------------------   .section-nav a { color: #999;}   --------------------------------------------------------------------------------------------------------------   N/A
    10   ---   General Navigation bar selected option textcolor   -------------------------------------------   .section-nav a.selected { background-color: rgba(255,255,255,.2); color: #101010;}   ----------------------------------------------------------   N/A
    11   ---   Color of text underneath a post e.i. "See Full Video Here"  ----------------------------------   .post-text-container { color: #999;}   --------------------------------------------------------------------------------------------------------   N/A
    12   ---   Back to top arrow from the bottom right corner color and border   ----------------------------   a.back-to-top { -webkit-filter: invert(100%); border: 1px solid #666}   -----------------------------------------------------------------------   N/A
    13   ---   Color of the bar Bar at the end of the feed that says "I Want More Fun" or "No More Posts  ---   .loading a.btn.end { color: #fff; background-color: #09f; border-color: #09f;}   --------------------------------------------------------------   N/A
    14   ---   Color of the bar Bar and spinnerat the end of the feed when loading more posts  --------------   .loading a.btn.spin { background-color: #FFF; -webkit-filter: invert(93.55%);}   --------------------------------------------------------------   N/A
    15   ---   General big text block, like TOS, background & text color   ----------------------------------   .static-block { background-color: #101010; color: #999;}   ------------------------------------------------------------------------------------   N/A
    16   ---   Ad footer background color   -----------------------------------------------------------------   footer .naughty-box { background-color: #101010;}   -------------------------------------------------------------------------------------------   N/A
    17   ---   General multi-select option background & text colors   ---------------------------------------   select { background-color: #999; color: #101010;}   -------------------------------------------------------------------------------------------   N/A
    18   ---   Sign in page title text color  ---------------------------------------------------------------   section#signup h2 { color: #999;}   -----------------------------------------------------------------------------------------------------------   N/A
    19   ---   General labels over text fields color  -------------------------------------------------------   .field label { color: #999;}   ----------------------------------------------------------------------------------------------------------------   N/A
    20   ---   Text Field background, border, & text colors  ------------------------------------------------   input[type=email], input[type=password], input[type=text], input[type=url] { background-color: #999; border-color: #999; color: #101010;}   ---   N/A
*/

// Search Bar changes
SearchBar.innerHTML = '.headbar-search { border: 1px solid #999; background-color: #101010;} .headbar-search input[type=text] { color: #999; background-color: #101010;}';
document.documentElement.appendChild(SearchBar);
/*
  Part   ---   Description/What it effects   --------------------------   Current text within "SearchBar.innerHTML"   -------------------------------------   Extra Notes
    1   ----   Built in 9gag search bar border & background color   ---   .headbar-search { border: 1px solid #999; background-color: #101010;}   ---------   N/A
    2   ----   Built in 9gag search bar text color   ------------------   .headbar-search input[type=text] { color: #999; background-color: #101010;}   ---   N/A
*/

// Notification Menu changes
NotifyMenu.innerHTML = '.notification-menu { background-color: #101010; border: 1px solid #999} .notification-menu .title h3{ color: #999;} .notification-list li a.item { background-color: #101010;} .notification-list li a.item.new { background-color: #101010; border-color: #999;} .notification-list li:last-child a.item { background-color: #101010} .notification-list .avatar-container { background-color: #999;} .notification-list p.message { color: #999;} .notification-menu .bumper{ background-color: #101010; border-top: 1px solid #999}';
document.documentElement.appendChild(NotifyMenu);
/*
  Part   ---   Description/What it effects   -----------------------------------------------   Current text within "NotifyMenu.innerHTML"   -------------------------------------------   Extra Notes
    1   ----   Notification menu background and border color   -----------------------------   .notification-menu { background-color: #101010; border: 1px solid #999}   --------------   N/A
    2   ----   Notification menu title text color   ----------------------------------------   .notification-menu .title h3{ color: #999;}   ------------------------------------------   N/A
    3   ----   Notification menu multi-notification background and border color   ----------   .notification-list li a.item { background-color: #101010;}   ---------------------------   N/A
    4   ----   New notification menu multi-notification background and border color   ------   .notification-list li a.item.new { background-color: #101010; border-color: #999;}   ---   N/A
    5   ----   Notification menu Single/last-notification background and border color   ----   .notification-list li:last-child a.item { background-color: #101010}   -----------------   N/A
    6   ----   Notification menu avatar background  color   --------------------------------   .notification-list .avatar-container { background-color: #999;}   ----------------------   N/A
    7   ----   Notification menu notification text color   ---------------------------------   .notification-list p.message { color: #999;}   -----------------------------------------   N/A
    8   ----   Notification menu bottom bumper background and border color   ---------------   .notification-menu .bumper{ background-color: #101010; border-top: 1px solid #999}   ---   N/A
*/

// Upload popup window changes
UploadWindow.innerHTML = 'section.modal header h3{ color: #999;} section.modal header p{ color: #999;} section.modal.upload .source-file { border: 1px solid #999; background-color: #101010} section.modal.upload .source-meme, section.modal.upload .source-url { border: 1px solid #999;} section.modal.upload .message { background-color: #101010;} section.modal.upload .field.post-info textarea { background-color: #999; color: #101010;} section.modal.upload .field.checkbox p { color: #999;} a.btn.grey { background-color: #09f; color: #fff;} ul.section-picker .text h3 { color: #999;} ul.section-picker .selector { background-color: #999;}';
document.documentElement.appendChild(UploadWindow);
/*
  Part   ---   Description/What it effects   --------------------------------------------------------------   Current text within "UploadWindow.innerHTML"   -----------------------------------------------------   Extra Notes
    1   ----   Upload popup window title color   ----------------------------------------------------------   section.modal header h3{ color: #999;}   -----------------------------------------------------------   Possible to be just for popupwindows in general
    2   ----   Upload popup window title info color   -----------------------------------------------------   section.modal header p{ color: #999;}   ------------------------------------------------------------   Possible to be just for popupwindows in general
    3   ----   Upload popup window drag and drop file box border color   ----------------------------------   section.modal.upload .source-file { border: 1px solid #999; background-color: #101010}   -----------   N/A
    4   ----   Upload popup window url & meme box border color   ------------------------------------------   section.modal.upload .source-meme, section.modal.upload .source-url { border: 1px solid #999;}   ---   N/A
    5   ----   Wait to post timer background timer   ------------------------------------------------------   section.modal.upload .message { background-color: #101010;}   --------------------------------------   N/A
    6   ----   Post description textbox background and text color on the second popup window   ------------   section.modal.upload .field.post-info textarea { background-color: #999; color: #101010;}   --------   N/A
    7   ----   Text color for the to checkbox options on the second popup window   ------------------------   section.modal.upload .field.checkbox p { color: #999;}   -------------------------------------------   N/A
    8   ----   "Back" button background and text color for the second and third popup windows   -----------   a.btn.grey { background-color: #09f; color: #fff;}   -----------------------------------------------   N/A
    9   ----   Section selection text color   -------------------------------------------------------------   ul.section-picker .text h3 { color: #999;}   -------------------------------------------------------   N/A
    10   ---   Section selection unselected option circle background color   ------------------------------   ul.section-picker .selector { background-color: #999;}   -------------------------------------------   N/A
*/

// Idle popup window changes
IdleWindow.innerHTML = 'section#idle h2 { color: #999;} section#idle .ticker { border: 1px solid #999;} .ticker a .info h3 { color: #999;}';
document.documentElement.appendChild(IdleWindow);
/*
  Part   ---   Description/What it effects   --------   Current text within "IdleWindow.innerHTML"   --------   Extra Notes
    1   ----   Idle Popup Window text color   -------   section#idle h2 { color: #999;}   -------------------   N/A
    2   ----   Suggested posts border box color   ---   section#idle .ticker { border: 1px solid #999;}   ---   N/A
    3   ----   Suggested posts title text color   ---   .ticker a .info h3 { color: #999;}   ----------------   N/A
*/

// Top Bar More Popup Menu
MoreMenu.innerHTML = '.flexMenu-popup { background-color: #101010; border: 1px solid #999} .nav-menu .flexMenu-popup li a { background-color: #101010; color: #999}';
document.documentElement.appendChild(MoreMenu);
/*
  Part   ---   Description/What it effects   --------   Current text within "MoreMenu.innerHTML"   -----------------------------------   Extra Notes
    1   ----   More menu background and border color   -------   .flexMenu-popup { background-color: #101010; border: 1px solid #999}   -------   N/A
    2   ----   More menu options background and text color   ---   .nav-menu .flexMenu-popup li a { background-color: #101010; color: #999}   ---   N/A
*/


if (urlContact.localeCompare("http://9gag.com/contact") === 0) {
    // Contact Us form webpage
    var ContactUs = document.createElement('style'); ContactUs.type = 'text/css';
    ContactUs.innerHTML = 'section#contact-form { color: #999;} input[type=email], input[type=password], input[type=text], input[type=url] { background-color: #999; color: #101010; border-color: #999;} section#contact-form textarea { background-color: #999; color: #101010; border-color: #999;} section#contact-form a.upload-selected { color: #999;} .file-field { background-color: #101010; color: #999; border-color: #101010; box-shadow: none;}';
    document.documentElement.appendChild(ContactUs);
    /*
      Part   ---   Description/What it effects   ----------------------   Current text within "IdleWindow.innerHTML"   --------------------------------------------------------------------------------------------------   Extra Notes
        1   ----   Contact Us page title color   ----------------------   section#contact-form { color: #999;}   --------------------------------------------------------------------------------------------------------   N/A
        2   ----   Text field background & text colors   --------------   input[type=email], input[type=password], input[type=text], input[type=url] { background-color: #999; color: #101010; border-color: #999;}   ---   N/A
        3   ----   Message text filed box background & text color   ---   section#contact-form textarea { background-color: #999; color: #101010; border-color: #999;}   ------------------------------------------------   N/A
        4   ----   Upload a file Title color   ------------------------   section#contact-form a.upload-selected { color: #999;}   --------------------------------------------------------------------------------------   N/A
        5   ----   Upload a file section background & text color   ----   .file-field { background-color: #101010; color: #999; border-color: #101010; box-shadow: none;}   ---------------------------------------------   N/A
    */
}

if (urlSettings.localeCompare("https://9gag.com/settings") !== 0 && urlGAG.localeCompare("http://9gag.com/gag/") !== 0 && urlNotifyPage.localeCompare("http://9gag.com/notifications") !== 0) {
    // BannerPostFeed changes
    var PostFeed = document.createElement('style'); PostFeed.type = 'text/css';
    PostFeed.innerHTML = 'section#list-view-2 article { border-top: 1px solid #999;} section#list-view-2 h2 a { background-color: transparent; color: #999;} a.post-read-more { background-color: #101010; border: 1px solid #999;} .post-read-more .shadow { width: 0px; height: 0px;}';
    document.documentElement.appendChild(PostFeed);
    /*
    Part   ---   Description/What it effects   ------------------------   Current text within "BannerPostFeed.innerHTML"   ----------------------------   Extra Notes
      1   ----   Page feed posts border color   -----------------------   section#list-view-2 article { border-top: 1px solid #999;}   ----------------   N/A
      2   ----   Page feed posts title text color   -------------------   section#list-view-2 h2 a { background-color: transparent; color: #999;}   ---   N/A
      3   ----   "View Full Post" bar background color   --------------   a.post-read-more { background-color: #101010; border: 1px solid #999;}   ----   N/A
      4   ----   Serated top edge of "View Full Post" bar removal   ---   .post-read-more .shadow { width: 0px; height: 0px;}   -----------------------   N/A
    */
}

if (urlProfile.localeCompare("http://9gag.com/u/") === 0) {
    // Profile Page changes
    var ProfilePage = document.createElement('style'); ProfilePage.type = 'text/css';
    ProfilePage.innerHTML = 'section.profile-header .profile.no-banner .info { background-color: #101010;} section.profile-header h2 { color: #999;} section.profile-header .info p { color: #999; opacity: 1;} section#list-view-2 .activity-text a { color: #999;} section#list-view-2 .activity-text { color: #999;}';
    document.documentElement.appendChild(ProfilePage);
    /*
    Part   ---   Description/What it effects   --------------------------------------   Current text within "ProfilePage.innerHTML"   ------------------------------------------   Extra Notes
      1   ----   Profile page header background color & bottom border   -------------   section.profile-header .profile.no-banner .info { background-color: #101010;}   --------   N/A
      2   ----   Profile page username text color   ---------------------------------   section.profile-header h2 { color: #999;}   --------------------------------------------   N/A
      3   ----   Profile page info text color   -------------------------------------   section.profile-header .info p { color: #999; opacity: 1;}   ---------------------------   N/A
      4   ----   Profile page username above post text color   ----------------------   section#list-view-2 .activity-text a { color: #999;}   ---------------------------------   N/A
      5   ----   Profile page activity above post text color   ----------------------   section#list-view-2 .activity-text { color: #999;}   -----------------------------------   N/A
    */
}

if (urlSettings.localeCompare("https://9gag.com/settings") === 0) {
    // Settings Pages changes
    var SettingsPages = document.createElement('style'); SettingsPages.type = 'text/css';
    SettingsPages.innerHTML = 'ul.form-nav li a.selected { background-color: #999; color: #101010; border-color: #999;} section#settings h2 { color: #999;} input[type=email], input[type=password], input[type=text], input[type=url] { background-color: #999; border-color: #999; color: #101010;} select { background-color: #999; color: #101010;} .field.avatar input[type=file] { color: #999;} form#setting textarea { background-color: #999; border-color: #999; color: #101010;} .setting-social-connect label { color: #999;} .setting-social-connect .connection { Background-color: #999; box-shadow: none;} .setting-social-connect .connection p.label { color: #101010;} .setting-social-connect .connection a.btn, .setting-social-connect .connection a.thick { border: 1px solid #101010;}';
    document.documentElement.appendChild(SettingsPages);
    /*
    Part   ---   Description/What it effects   ------------------------------------------   Current text within "SettingsPages.innerHTML"   -----------------------------------------------------------------------------------------------   Extra Notes
      1   ----   Settings selected section background & text color   --------------------   ul.form-nav li a.selected { background-color: #999; color: #101010; border-color: #999;}   ----------------------------------------------------   N/A
      2   ----   Setting section title text color   -------------------------------------   section#settings h2 { color: #999;}   ---------------------------------------------------------------------------------------------------------   N/A
      3   ----   Background & text colors for the text input fields   -------------------   input[type=email], input[type=password], input[type=text], input[type=url] { background-color: #999; border-color: #999; color: #101010;}   ---   N/A
      4   ----   Background & text colors for the multi-select options   ----------------   select { background-color: #999; color: #101010;}   -------------------------------------------------------------------------------------------   N/A
      5   ----   Text color for the avatar image upload   -------------------------------   .field.avatar input[type=file] { color: #999;}   ----------------------------------------------------------------------------------------------   N/A
      6   ----   Profile bio text field background and text color   ---------------------   form#setting textarea { background-color: #999; border-color: #999; color: #101010;}   --------------------------------------------------------   N/A
      7   ----   Social networks connections section title color   ----------------------   .setting-social-connect label { color: #999;}   -----------------------------------------------------------------------------------------------   N/A
      8   ----   Social networks connections field background color   -------------------   .setting-social-connect .connection { Background-color: #999; box-shadow: none;}   ------------------------------------------------------------   N/A
      9   ----   Social networks connections field text color   -------------------------   .setting-social-connect .connection p.label { color: #101010;}   ------------------------------------------------------------------------------   N/A
      10   ---   Border around the "Connect Now" blue buttons within the text fields  ---   .setting-social-connect .connection a.btn, .setting-social-connect .connection a.thick { border: 1px solid #101010;}   ------------------------   N/A
    */
} else {
    // Side Bar changes
    var SideBar = document.createElement('style'); SideBar.type = 'text/css';
    SideBar.innerHTML = 'section.block-feature-cover .info-container a { color: #999;} h2.sidebar-title { color: #999;} section.block-social-love .social-love a.instagram-follow { background-color: #FDFDFD;} section.footer { background-color: transparent;}';
    document.documentElement.appendChild(SideBar);
    /*
    Part   ---   Description/What it effects   -------------------------------   Current text within "SideBar.innerHTML"   ---------------------------------------------------   Extra Notes
      1   ----   Side bar suggested posts title text color   -----------------   section.block-feature-cover .info-container a { color: #999;}   -----------------------------   N/A
      2   ----   Side bar app/play store & social media title text color   ---   h2.sidebar-title { color: #999;}   ----------------------------------------------------------   N/A
      3   ----   Side bar instagram button background color   ----------------   section.block-social-love .social-love a.instagram-follow { background-color: #FDFDFD;}   ---   it is possible by playing with this, or something similar to this, to completly remove all socailmedia buttons from your 9GAG experience
      4   ----   Side bar footer links background   --------------------------   section.footer { background-color: transparent;}   ------------------------------------------   N/A
    */
}

if (urlNotifyPage.localeCompare("http://9gag.com/notifications") === 0) {
    // Notification Page changes
    var NotifyPage = document.createElement('style'); NotifyPage.type = 'text/css';
    NotifyPage.innerHTML = '.notification-detail .section-title { color: #999;} .notification-text-list .label h3 { color: #999;} .notification-text-list a { color: #999;} .notification-text-list p { color: #999;}';
    document.documentElement.appendChild(NotifyPage);
    /*
    Part   ---   Description/What it effects   ---------------------   Current text within "NotifyPage.innerHTML"   ------------   Extra Notes
      1   ----   Notification Page Title color   -------------------   .notification-detail .section-title { color: #999;}   ---   N/A
      2   ----   Time of notification section title text color   ---   .notification-text-list .label h3 { color: #999;}   -----   N/A
      3   ----   Username and Post text color   --------------------   .notification-text-list a { color: #999;}   -------------   N/A
      4   ----   Notification action text color   ------------------   .notification-text-list p { color: #999;}   -------------   N/A
    */
}

if (urlGAG.localeCompare("http://9gag.com/gag/") === 0) {
    var IndividPost = document.createElement('style'); var CommentSection = document.createElement('style'); IndividPost.type = CommentSection.type = 'text/css';

    // Individual Post Page changes
    IndividPost.innerHTML = 'section#individual-post header h2 { background-color: transparent; color: #999;} .post-afterbar-a.in-post-top { background-color: #101010;} .horizontal-vote a.up span { background-color: #101010;} .post-afterbar-a .others a.more { background-color: #101010;} .post-afterbar-meta { border-top: 1px solid #999;}';
    document.documentElement.appendChild(IndividPost);
    /*
    Part   ---   Description/What it effects   --------------------------------------------------------   Current text within "IndividPost.innerHTML"   ----------------------------------------   Extra Notes
      1   ----   Individual post title color    -------------------------------------------------------   section#individual-post header h2 { background-color: transparent; color: #999;}   ---   N/A
      2   ----   Bar on individual post page that stays on the top of the screen background color   ---   .post-afterbar-a.in-post-top { background-color: #101010;}   -------------------------   N/A
      3   ----   Up vote post button background color   -----------------------------------------------   .horizontal-vote a.up span { background-color: #101010;}   ---------------------------   N/A
      4   ----   More options buttion background color   ----------------------------------------------   .post-afterbar-a .others a.more { background-color: #101010;}   ----------------------   N/A
      5   ----   Border below post and above report link color   --------------------------------------   .post-afterbar-meta { border-top: 1px solid #999;}   ---------------------------------   N/A
    */

    // Comments area changes
    CommentSection.innerHTML = '.CS3 { background-color: #101010;} .CS3 .tab-bar { border-bottom: 1px solid #999;} .CS3 .tab-bar h3 { color: #999;} .CS3 .tab-bar ul.tab li.active a { background-color: rgba(255,255,255,.2); color: #101010;} .CS3 .tab-bar ul.tab a { color: #999;} .CS3 .comment-box .payload .textarea-container textarea.focus, .CS3 .comment-box.indent-1 .payload .textarea-container textarea { background-color: #101010; color: #999;} .CS3 .comment-section-title h3 { color: #999;} .CS3 .comment-entry .payload .username { color: #999;} .CS3 .comment-entry .payload .content { color: #999;} .CS3 span.drop { -webkit-filter: invert(60%);} .CS3 .comment-pop-menu ul { background-color: #101010; border: 1px solid #999;} .CS3 .comment-pop-menu a { background-color: #101010; color: #999;} .CS3 .notice-message { background-color: #101010} .CS3 .notice-message p.align-center { color: #999}';
    document.documentElement.appendChild(CommentSection);
    /*
    Part   ---   Description/What it effects   ---------------------------------------   Current text within "CommentSection.innerHTML"   -------------------------------------------------------------------------------------------------------------------------------   Extra Notes
      1   ----   Comments section background color   ---------------------------------   .CS3 { background-color: #101010;}   -------------------------------------------------------------------------------------------------------------------------------------------   N/A
      2   ----   Color of the border underneath the comments section title  ----------   .CS3 .tab-bar { border-bottom: 1px solid #999;}   ------------------------------------------------------------------------------------------------------------------------------   N/A
      3   ----   Comments section title color   --------------------------------------   .CS3 .tab-bar h3 { color: #999;}   ---------------------------------------------------------------------------------------------------------------------------------------------   N/A
      4   ----   Comments section navigation active tab background and text color  ---   .CS3 .tab-bar ul.tab li.active a { background-color: rgba(255,255,255,.2); color: #101010;}   ----------------------------------------------------------------------------------   N/A
      5   ----   Comments section navigation inactive tab text color   ---------------   .CS3 .tab-bar ul.tab a { color: #999;}   ---------------------------------------------------------------------------------------------------------------------------------------   N/A
      6   ----   Comment text box background and text color   ------------------------   .CS3 .comment-box .payload .textarea-container textarea.focus, .CS3 .comment-box.indent-1 .payload .textarea-container textarea { background-color: #101010; color: #999;}   ---   N/A
      7   ----   Section title for your comments on your own posts   -----------------   .CS3 .comment-section-title h3 { color: #999;}   -------------------------------------------------------------------------------------------------------------------------------   N/A
      8   ----   Posted comment username text color   --------------------------------   .CS3 .comment-entry .payload .username { color: #999;}   -----------------------------------------------------------------------------------------------------------------------   N/A
      9   ----   Posted comment entry text color   -----------------------------------   .CS3 .comment-entry .payload .content { color: #999;}   ------------------------------------------------------------------------------------------------------------------------   N/A
      10   ---   More options arrow color inversion  ---------------------------------   .CS3 span.drop { -webkit-filter: invert(60%);}   -------------------------------------------------------------------------------------------------------------------------------   N/A
      11   ---   More options background and border color   --------------------------   .CS3 .comment-pop-menu ul { background-color: #101010; border: 1px solid #999;}   ----------------------------------------------------------------------------------------------   N/A
      12   ---   More options text color   -------------------------------------------   .CS3 .comment-pop-menu a { background-color: #101010; color: #999;}   ----------------------------------------------------------------------------------------------------------   N/A
      13   ---   Background color for the "Be the first to comment" section   --------   .CS3 .notice-message { background-color: #101010}   ----------------------------------------------------------------------------------------------------------------------------   N/A
      14   ---   Text color for the "Be the first to comment" section title   --------   .CS3 .notice-message p.align-center { color: #999}   ---------------------------------------------------------------------------------------------------------------------------   N/A
    */
}
