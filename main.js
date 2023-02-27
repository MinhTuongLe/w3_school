// Scroll page
var getHeader = document.querySelector('.header');
var searchBar = document.querySelector('.search_bar');
var getLessonList = document.querySelector('.lesson-list');
var getContainerLessonList = document.querySelector('.container_lesson-list');

function onScroll() {
    window.addEventListener('scroll', function () {
        var y = window.pageYOffset;
        if (y > 0) {
            getHeader.classList.add('scroll-1')
            searchBar.classList.add('scroll-2')
            getLessonList.classList.add('scroll-3')
            getLessonList.classList.add('lesson-list-scroll')
            getContainerLessonList.classList.add('container_lesson-list-scroll')
            getSubmenuHeading1.style.top = "var(--search-bar_height)"
            getSubmenuContent1.style.top = "calc(var(--search-bar_height) + 96px)"
            getSubmenuHeading2.style.top = "var(--search-bar_height)"
            getSubmenuContent2.style.top = "calc(var(--search-bar_height) + 96px)"
            getSubmenuHeading3.style.top = "var(--search-bar_height)"
            getSubmenuContent3.style.top = "calc(var(--search-bar_height) + 96px)"
        } else {
            getHeader.classList.remove('scroll-1')
            searchBar.classList.remove('scroll-2')
            getLessonList.classList.remove('scroll-3')
            getLessonList.classList.remove('lesson-list-scroll')
            getContainerLessonList.classList.remove('container_lesson-list-scroll')
            getSubmenuHeading1.style.top = ""
            getSubmenuContent1.style.top = ""
            getSubmenuHeading2.style.top = ""
            getSubmenuContent2.style.top = ""
            getSubmenuHeading3.style.top = ""
            getSubmenuContent3.style.top = ""
        }
    })
}

window.onload = function () {
    onScroll()
}

// Dark mode
var getChoiceItem = document.querySelector('.header__choices-item:first-child')
var getIconDarkMode = document.querySelector('.search-side__icon:first-child')
var getUserIcon = document.querySelector('.header__user-icon')
var getDarkModeItem = document.querySelector('.dark-mode__item:first-child')
var getDarkCheckBox = document.querySelector('.dark-mode__item:first-child #dark-mode_checkbox')

var checkDarkMode = false;
// getIconDarkMode.onclick = function onClick() {
//     if (checkDarkMode == false) {
//         getHeader.classList.add('dark_background')
//         getChoiceItem.classList.add('.dark-mode_choice-item')
//         getUserIcon.style.borderColor = "#ddd"
//         checkDarkMode = true;
//     } else {
//         getHeader.classList.remove('dark_background')
//         getChoiceItem.classList.remove('.dark-mode_choice-item')
//         getUserIcon.style.borderColor = "#282A35"
//         checkDarkMode = false;
//     }
// }

getDarkModeItem.onclick = function () {
    if (checkDarkMode == false || getDarkCheckBox.checked) {
        getHeader.classList.add('dark_background')
        getChoiceItem.classList.add('.dark-mode_choice-item')
        getUserIcon.style.borderColor = "#ddd"
        checkDarkMode = true;
    } else {
        getHeader.classList.remove('dark_background')
        getChoiceItem.classList.remove('.dark-mode_choice-item')
        getUserIcon.style.borderColor = "#282A35"
        checkDarkMode = false;
    }
}


var checkSearchBar = false
var getSearchIcon = document.querySelector('.search-side__icon:last-child')
var getSearchSideBar = document.querySelector('.search-side__bar')


getSearchIcon.onclick = function () {
    if (checkSearchBar == false) {
        getSearchSideBar.classList.add('show-searchBar')
        checkSearchBar = true
    } else {
        getSearchSideBar.classList.remove('show-searchBar')
        checkSearchBar = false
    }
}

getSearchSideBar.addEventListener('click', function (event) {
    event.stopPropagation()
})



// Hiển thị Submenu
var getOptionItem1 = document.querySelector('.header__options-item:first-child')
var getOptionItem2 = document.querySelector('.header__options-item:nth-child(2)')
var getOptionItem3 = document.querySelector('.header__options-item:nth-child(3)')
var getOptionItemIcon1 = document.querySelector('.header__options-item-icon--1')
var getOptionItemIcon2 = document.querySelector('.header__options-item-icon--2')
var getOptionItemIcon3 = document.querySelector('.header__options-item-icon--3')
var getSubmenu1 = document.querySelector('.sub-menu--1')
var getSubmenu2 = document.querySelector('.sub-menu--2')
var getSubmenu3 = document.querySelector('.sub-menu--3')
var getCloseBtnSubmenu1 = document.querySelector('.sub-menu__heading-icon--1')
var getCloseBtnSubmenu2 = document.querySelector('.sub-menu__heading-icon--2')
var getCloseBtnSubmenu3 = document.querySelector('.sub-menu__heading-icon--3')
var getSubmenuHeading1 = document.querySelector('.sub-menu--1 .sub-menu__heading')
var getSubmenuContent1 = document.querySelector('.sub-menu--1 .sub-menu__content')
var getSubmenuHeading2 = document.querySelector('.sub-menu--2 .sub-menu__heading')
var getSubmenuContent2 = document.querySelector('.sub-menu--2 .sub-menu__content')
var getSubmenuHeading3 = document.querySelector('.sub-menu--3 .sub-menu__heading')
var getSubmenuContent3 = document.querySelector('.sub-menu--3 .sub-menu__content')

var checkClickSubmenu1 = false
var checkClickSubmenu2 = false
var checkClickSubmenu3 = false


function showSubMenu1_() {
    getSubmenu1.style.display = "block"
    Object.assign(getOptionItem1.style, {
        backgroundColor: "#282a35",
        color: "white"
    })
    getOptionItemIcon1.classList.remove('header__options-item-icon--1')
    getOptionItemIcon1.classList.add('header__options-item-icon_clicked')
    checkClickSubmenu1 = true
}

function hideSubMenu1_() {
    getOptionItemIcon1.classList.add('header__options-item-icon--1')
    getOptionItemIcon1.classList.remove('header__options-item-icon_clicked')
    Object.assign(getOptionItem1.style, {
        backgroundColor: "",
        color: ""
    })
    getSubmenu1.style.display = "none"
    checkClickSubmenu1 = false
}

function showSubMenu1() {
    if (checkClickSubmenu2 == false && checkClickSubmenu3 == false) {
        if (checkClickSubmenu1 == false) {
            showSubMenu1_()
        } else {
            hideSubMenu1_()
        }

    } else if (checkClickSubmenu2 == true || checkClickSubmenu3 == true) {
        hideSubMenu2_()
        hideSubMenu3_()
        showSubMenu1_()
    }
}


getCloseBtnSubmenu1.onclick = function () {
    getOptionItemIcon1.classList.add('header__options-item-icon--1')
    getOptionItemIcon1.classList.remove('header__options-item-icon_clicked')
    Object.assign(getOptionItem1.style, {
        backgroundColor: "",
        color: ""
    })
    checkClickSubmenu1 = false
    getSubmenu1.style.display = "none"
}


function showSubMenu2_() {
    getSubmenu2.style.display = "block"
    Object.assign(getOptionItem2.style, {
        backgroundColor: "#282a35",
        color: "white"
    })
    getOptionItemIcon2.classList.remove('header__options-item-icon--2')
    getOptionItemIcon2.classList.add('header__options-item-icon_clicked')
    checkClickSubmenu2 = true
}

function hideSubMenu2_() {
    getOptionItemIcon2.classList.add('header__options-item-icon--2')
    getOptionItemIcon2.classList.remove('header__options-item-icon_clicked')
    Object.assign(getOptionItem2.style, {
        backgroundColor: "",
        color: ""
    })
    getSubmenu2.style.display = "none"
    checkClickSubmenu2 = false
}

function showSubMenu2() {
    if (checkClickSubmenu1 == false && checkClickSubmenu3 == false) {
        if (checkClickSubmenu2 == false) {
            showSubMenu2_()
        } else {
            hideSubMenu2_()
        }
        
    } else if (checkClickSubmenu1 == true || checkClickSubmenu3 == true) {
        hideSubMenu1_()
        hideSubMenu3_()
        showSubMenu2_()
    }
}


getCloseBtnSubmenu2.onclick = function () {
    getOptionItemIcon2.classList.add('header__options-item-icon--2')
    getOptionItemIcon2.classList.remove('header__options-item-icon_clicked')
    Object.assign(getOptionItem2.style, {
        backgroundColor: "",
        color: ""
    })
    checkClickSubmenu2 = false
    getSubmenu2.style.display = "none"
}


function showSubMenu3_() {
    getSubmenu3.style.display = "block"
    Object.assign(getOptionItem3.style, {
        backgroundColor: "#282a35",
        color: "white"
    })
    getOptionItemIcon3.classList.remove('header__options-item-icon--2')
    getOptionItemIcon3.classList.add('header__options-item-icon_clicked')
    checkClickSubmenu3 = true
}

function hideSubMenu3_() {
    getOptionItemIcon3.classList.add('header__options-item-icon--2')
    getOptionItemIcon3.classList.remove('header__options-item-icon_clicked')
    Object.assign(getOptionItem3.style, {
        backgroundColor: "",
        color: ""
    })
    getSubmenu3.style.display = "none"
    checkClickSubmenu3 = false
}


function showSubMenu3() {
    if (checkClickSubmenu1 == false && checkClickSubmenu2 == false) {
        if (checkClickSubmenu3 == false) {
            showSubMenu3_()
        } else {
            hideSubMenu3_()
        }
        
    } else if (checkClickSubmenu1 == true || checkClickSubmenu2 == true) {
        hideSubMenu1_()
        hideSubMenu2_()
        showSubMenu3_()
    }
}


getCloseBtnSubmenu3.onclick = function () {
    getOptionItemIcon3.classList.add('header__options-item-icon--2')
    getOptionItemIcon3.classList.remove('header__options-item-icon_clicked')
    Object.assign(getOptionItem3.style, {
        backgroundColor: "",
        color: ""
    })
    checkClickSubmenu3 = false
    getSubmenu3.style.display = "none"
}

getOptionItem1.onclick = showSubMenu1
getOptionItem2.onclick = showSubMenu2
getOptionItem3.onclick = showSubMenu3