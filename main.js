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
var getUserIcons = document.querySelectorAll('.header__user-icon')
var getDarkModeItem = document.querySelector('.dark-mode__item:first-child label')
var getDarkCheckBox = document.querySelector('.dark-mode__item:first-child #dark-mode_checkbox')
var getLessonListScroll = document.querySelector('.lesson-list-scroll')
var getAdvertisementRightSide = document.querySelector('.advertisement__right-side')
var getBody = document.querySelector('.body')
var getContent = document.querySelector('.content')

var getContentItem2 = document.querySelector('.content-item__2')
var getContentItem7 = document.querySelector('.content-item__7')
var getContentItem3Example = document.querySelector('.content-item__3-example')
var getContentItem5Example = document.querySelector('.content-item__5-example')
var getContentItem6Spans = document.querySelectorAll('.content-item__6 .content__line span')
var getContentItem6As = document.querySelectorAll('.content-item__6-item .content__line a')
var getContentItem9Exercises = document.querySelectorAll('.content-item__9-exercise')
var getContentItem9ExerciseInputs = document.querySelectorAll('.content-item__9-exercise__input')
var getContentItem9ExerciseContent = document.querySelector('.content-item__9-exercise__content')
var getContentItem9ExerciseContentA = document.querySelector('.content-item__9-exercise__content a ')
var getContentItem9ExerciseReds = document.querySelectorAll('.content-item__9-exercise--red')
var getFooterBtn = document.querySelector('.footer__btn')
var getFooterCourseList = document.querySelector('.footer__courses-list')
var getFooterCourseAs = document.querySelectorAll('.footer__course a')
var getFooterInformation = document.querySelector('.footer__information')
var getFooterDescription = document.querySelector('.footer__description')
var getFooterCopyRight = document.querySelector('.footer__copyright')
var getFooterIcon = document.querySelector('.footer__icon')
var getContentItem3 = document.querySelector('.content-item__3')
var getContentItem3ExampleContent = document.querySelector('.content-item__3-example-content')
var getFooterBtns = document.querySelector('.footer__btns')
var getFooterCourseTitles = document.querySelectorAll('.footer__course-title')
var getBorderBottoms = document.querySelectorAll('.border--bottom')
var getBorderTops = document.querySelectorAll('.border--top')
var getBorderRights = document.querySelectorAll('.border--right')



var checkDarkMode = false;

function showOrHideDarkMode() {
    if (checkDarkMode == false) {
        getHeader.classList.add('dark_background')
        getChoiceItem.classList.add('.dark-mode_choice-item')
        getUserIcons.forEach(function(item){
            item.style.borderColor = "#ddd"
        })
        Object.assign(getLessonList.style, {
            backgroundColor: "#15202b",
            color: "#dddddd",
        })
        Object.assign(getAdvertisementRightSide.style, {
            backgroundColor: "#1d2a35",
            color: "#dddddd"
        })

        Object.assign(getContent.style, {
            backgroundColor: "#1d2a35",
            color:"#ddd"
        })

        getContentItem2.style.backgroundColor = "#193d3d"
        getContentItem7.style.backgroundColor = "#193d3d"
        getContentItem3Example.style.backgroundColor = "#38444d"

        Object.assign(getContentItem5Example.style, {
            backgroundColor:"#fff4a3",
            color:"#1d2a35"
        })
        getContentItem6Spans.forEach(function(item){
            item.style.color= "#ddd"
        })
        getContentItem6As.forEach(function(item){
            item.style.color= "#ddd"
        })
        getContentItem9Exercises.forEach(function(item) {
            item.style.backgroundColor = "#38444d"
        })
        getContentItem9ExerciseInputs.forEach(function(item) {
            item.style.backgroundColor = "#38444d"
        })

        Object.assign(getContentItem9ExerciseContent.style, {
            backgroundColor:"#15202b",
            color:"#ddd"
        })
        Object.assign(getContentItem9ExerciseContentA.style, {
            backgroundColor:"#15202b",
            color:"#ddd"
        })
        getContentItem9ExerciseReds.forEach(function(item){
            item.classList.add('content-item__9-exercise--red--dark-mode')
        })


        getFooterBtn.style.borderColor = "#ddd"
        getFooterCourseList.style.backgroundColor = "#1d2a35"
        getFooterInformation.style.backgroundColor = "#1d2a35"
        getFooterDescription.style.backgroundColor = "#1d2a35"
        getFooterCopyRight.style.backgroundColor = "#1d2a35"
        getFooterIcon.style.backgroundColor = "#1d2a35"
        getContentItem3.style.backgroundColor = "#1d2a35"
        getContentItem3ExampleContent.style.backgroundColor = "#1d2a35"
        getFooterBtns.style.backgroundColor = "#1d2a35"
        getFooterCourseTitles.forEach(function(item) {
            item.style.color = "#ddd"
        })
        getFooterCourseAs.forEach(function(item) {
            Object.assign(item.style, {
                backgroundColor:"#1d2a35",
                color:"#dddddd"
            })
        })


        getBorderBottoms.forEach(function(item){
            item.style.borderColor = "#d9d9d941"
        })
        getBorderRights.forEach(function(item){
            item.style.borderColor = "#d9d9d941"
        })
        getBorderTops.forEach(function(item){
            item.style.borderColor = "#d9d9d941"
        })


        getLessonListScroll.classList.add('dark-mode__scroll-bar')
        checkDarkMode = true
    } else {
        getHeader.classList.remove('dark_background')
        getChoiceItem.classList.remove('.dark-mode_choice-item')
        getUserIcons.forEach(function(item){
            item.style.borderColor = ""
        })
        Object.assign(getLessonList.style, {
            backgroundColor: "",
            color: ""
        })
        Object.assign(getAdvertisementRightSide.style, {
            backgroundColor: "",
            color: ""
        })


        
        Object.assign(getContent.style, {
            backgroundColor: "",
            color:""
        })

        getContentItem2.style.backgroundColor = ""
        getContentItem7.style.backgroundColor = ""
        getContentItem3Example.style.backgroundColor = ""

        Object.assign(getContentItem5Example.style, {
            backgroundColor:"",
            color:""
        })
        getContentItem6Spans.forEach(function(item){
            item.style.color= ""
        })
        getContentItem6As.forEach(function(item){
            item.style.color= ""
        })
        getContentItem9Exercises.forEach(function(item) {
            item.style.backgroundColor = ""
        })
        getContentItem9ExerciseInputs.forEach(function(item) {
            item.style.backgroundColor = ""
        })


        Object.assign(getContentItem9ExerciseContent.style, {
            backgroundColor:"",
            color:""
        })
        Object.assign(getContentItem9ExerciseContentA.style, {
            backgroundColor:"",
            color:""
        })

        getContentItem9ExerciseReds.forEach(function(item){
            item.classList.remove('content-item__9-exercise--red--dark-mode')
        })

        getFooterBtn.style.borderColor = ""
        getFooterCourseList.style.backgroundColor = ""
        getFooterInformation.style.backgroundColor = ""
        getFooterDescription.style.backgroundColor = ""
        getFooterCopyRight.style.backgroundColor = ""
        getFooterIcon.style.backgroundColor = ""
        getContentItem3.style.backgroundColor = ""
        getContentItem3ExampleContent.style.backgroundColor = ""
        getFooterBtns.style.backgroundColor = ""
        getFooterCourseTitles.forEach(function(item) {
            item.style.color = ""
        })

        getFooterCourseAs.forEach(function(item) {
            Object.assign(item.style, {
                backgroundColor:"",
                color:""
            })
        })

        getBorderBottoms.forEach(function(item){
            item.style.borderColor = ""
        })
        getBorderRights.forEach(function(item){
            item.style.borderColor = ""
        })
        getBorderTops.forEach(function(item){
            item.style.borderColor = ""
        })




        getLessonListScroll.classList.remove('dark-mode__scroll-bar')
        checkDarkMode=false  
    }
}

getDarkModeItem.onclick = showOrHideDarkMode
getIconDarkMode.onclick = showOrHideDarkMode



// Search bar 

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