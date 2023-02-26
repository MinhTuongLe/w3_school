// Scroll page
var getHeader = document.querySelector('.header');
var searchBar = document.querySelector('.search_bar');
var getLessonList = document.querySelector('.lesson-list');
var getContainerLessonList = document.querySelector('.container_lesson-list');

function onScroll() {
    window.addEventListener('scroll', function(){
        var y = window.pageYOffset;
        if (y>0) {
            getHeader.classList.add('scroll-1')
            searchBar.classList.add('scroll-2')
            getLessonList.classList.add('scroll-3')
            getLessonList.classList.add('lesson-list-scroll')
            getContainerLessonList.classList.add('container_lesson-list-scroll')
        } else {
            getHeader.classList.remove('scroll-1')
            searchBar.classList.remove('scroll-2')
            getLessonList.classList.remove('scroll-3')
            getLessonList.classList.remove('lesson-list-scroll')
            getContainerLessonList.classList.remove('container_lesson-list-scroll')
        }
    })
}

window.onload = function() {
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
        checkSearchBar =  true
    } else {
        getSearchSideBar.classList.remove('show-searchBar')
        checkSearchBar = false
    }
}

getSearchSideBar.addEventListener('click', function(event) {
    event.stopPropagation()
})



// Hiển thị Submenu
var getOptionItem = document.querySelector('.header__options-item:first-child')
var getOptionItemIcon = document.querySelector('.header__options-item:first-child .header__options-item-icon')
var getSubmenu = document.querySelector('.sub-menu')
var getCloseBtnSubmenu = document.querySelector('.sub-menu__heading-icon')
var checkClickSubmenu = false


getOptionItem.onclick = function() {
    if (checkClickSubmenu == false) {
        getSubmenu.style.display = "block"
        Object.assign(getOptionItem.style, {
            backgroundColor: "#282a35",
            color: "white"
        })
        getOptionItemIcon.classList.remove('header__options-item-icon')
        getOptionItemIcon.classList.add('header__options-item-icon_clicked')
        checkClickSubmenu = true
    } else {
        getOptionItemIcon.classList.add('header__options-item-icon')
        getOptionItemIcon.classList.remove('header__options-item-icon_clicked')
        Object.assign(getOptionItem.style, {
            backgroundColor: "white",
            color: "#000"
        })
        getSubmenu.style.display = "none"
        checkClickSubmenu = false
    }
}

getCloseBtnSubmenu.onclick = function() {
    getOptionItemIcon.classList.add('header__options-item-icon')
    getOptionItemIcon.classList.remove('header__options-item-icon_clicked')
    Object.assign(getOptionItem.style, {
        backgroundColor: "white",
        color: "#000"
    })
    getSubmenu.style.display = "none"
}
