const shareBtn = document.querySelector('.share__icon--btn');
const shareIconsBox = document.querySelector('.share__container');
const shareProfileBox = document.querySelector('.shareprofile__container');
const profileBox = document.querySelector('.profile__container');



function showIcons () {
    
    shareBtn.classList.add('share__icon--btn--active');
    shareIconsBox.classList.add('share__container--active');
    shareProfileBox.classList.add('shareprofile__container--bg');
    profileBox.classList.add('profile__container--close');
    
}

shareBtn.addEventListener('click', showIcons);