const shareBtn = document.querySelector('.share__icon--btn');
const shareIconsBox = document.querySelector('.share__container');
const shareProfileBox = document.querySelector('.shareprofile__container');
const profileBox = document.querySelector('.profile__container');

function addClassName () {
    shareBtn.classList.add('share__icon--btn--active');
    shareIconsBox.classList.add('share__container--active');
    shareProfileBox.classList.add('shareprofile__container--bg');
    profileBox.classList.add('profile__container--close');
}

function removeClassName () {
    shareBtn.classList.remove('share__icon--btn--active');
    shareIconsBox.classList.remove('share__container--active');
    shareProfileBox.classList.remove('shareprofile__container--bg');
    profileBox.classList.remove('profile__container--close'); 
}


function btnClick () {

    if (shareBtn.classList.contains('share__icon--btn--active')) {
        removeClassName();          
    }
    else {
        addClassName();
    }

    
}

shareBtn.addEventListener('click', btnClick);