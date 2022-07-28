/*! For license information please see jquery.smartmenus.bootstrap.js.LICENSE.txt */
!function(t){"function"==typeof define&&define.amd?define(["jquery","jquery.smartmenus"],t):"object"==typeof module&&"object"==typeof module.exports?module.exports=t(require("jquery")):t(jQuery)}((function(t){return t.extend(t.SmartMenus.Bootstrap={},{keydownFix:!1,init:function(){var o=t("ul.navbar-nav:not([data-sm-skip])");o.each((function(){var o=t(this),a=o.data("smartmenus");if(!a){function e(){o.find("a.current").parent().addClass("active"),o.find("a.has-submenu").each((function(){var o=t(this);o.is('[data-toggle="dropdown"]')&&o.dataSM("bs-data-toggle-dropdown",!0).removeAttr("data-toggle"),o.is('[role="button"]')&&o.dataSM("bs-role-button",!0).removeAttr("role")}))}var n;function s(t){var e=a.getViewportWidth();if(e!=n||t){var s=o.find(".caret");a.isCollapsible()?(o.addClass("sm-collapsible"),o.is("[data-sm-skip-collapsible-behavior]")||s.addClass("navbar-toggle sub-arrow")):(o.removeClass("sm-collapsible"),o.is("[data-sm-skip-collapsible-behavior]")||s.removeClass("navbar-toggle sub-arrow")),n=e}}o.smartmenus({subMenusSubOffsetX:2,subMenusSubOffsetY:-6,subIndicators:!1,collapsibleShowFunction:null,collapsibleHideFunction:null,rightToLeftSubMenus:o.hasClass("navbar-right"),bottomToTopSubMenus:o.closest(".navbar").hasClass("navbar-fixed-bottom")}).bind({"show.smapi":function(o,a){var e=t(a),n=e.dataSM("scroll-arrows");n&&n.css("background-color",t(document.body).css("background-color")),e.parent().addClass("open")},"hide.smapi":function(o,a){t(a).parent().removeClass("open")}}),e(),(a=o.data("smartmenus")).isCollapsible=function(){return!/^(left|right)$/.test(this.$firstLink.parent().css("float"))},a.refresh=function(){t.SmartMenus.prototype.refresh.call(this),e(),s(!0)},a.destroy=function(a){o.find("a.current").parent().removeClass("active"),o.find("a.has-submenu").each((function(){var o=t(this);o.dataSM("bs-data-toggle-dropdown")&&o.attr("data-toggle","dropdown").removeDataSM("bs-data-toggle-dropdown"),o.dataSM("bs-role-button")&&o.attr("role","button").removeDataSM("bs-role-button")})),t.SmartMenus.prototype.destroy.call(this,a)},o.is("[data-sm-skip-collapsible-behavior]")&&o.bind({"click.smapi":function(o,e){if(a.isCollapsible()){var n=t(e),s=n.parent().dataSM("sub");if(s&&s.dataSM("shown-before")&&s.is(":visible"))return a.itemActivate(n),a.menuHide(s),!1}}}),s(),t(window).bind("resize.smartmenus"+a.rootId,s)}})),o.length&&!t.SmartMenus.Bootstrap.keydownFix&&(t(document).off("keydown.bs.dropdown.data-api",".dropdown-menu"),t.fn.dropdown&&t.fn.dropdown.Constructor&&t(document).on("keydown.bs.dropdown.data-api",'.dropdown-menu:not([id^="sm-"])',t.fn.dropdown.Constructor.prototype.keydown),t.SmartMenus.Bootstrap.keydownFix=!0)}}),t(t.SmartMenus.Bootstrap.init),t}));