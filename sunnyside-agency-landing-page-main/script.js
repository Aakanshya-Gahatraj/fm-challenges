function dropDown(){
    const menu= document.querySelector('.dropDown');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
}