const shareBtn = document.querySelector('.share__icon--btn');
const shareIcons = document.querySelector('.share__container');
const shareProfileSection = document.querySelector('.shareprofile__container');
const profile = document.querySelector('.profile__container');



function showIcons () {
    
        profile.style.visibility = "hidden";
        shareIcons.style.visibility="visible";
        shareProfileSection.style.backgroundColor = "var(--VERYDARKGRAYISHBLUECOLOR)";
    
    
}

shareBtn.addEventListener('click', showIcons);