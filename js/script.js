(function() {
    const main = document.querySelector('.main');
    const sideMenuControls = document.querySelector('.side-menu-controls');
    const sideMenuControlsActiveClassName = 'side-menu-controls--active';

    sideMenuControls.onclick = toggleSideMenuControlsActiveClass;
    main.onclick = closeSideMenu;

    function toggleSideMenuControlsActiveClass() {
        sideMenuControls.classList.toggle(sideMenuControlsActiveClassName); 
    }

    function closeSideMenu () {
        if (sideMenuControls.classList.contains(sideMenuControlsActiveClassName)) {
            sideMenuControls.classList.remove(sideMenuControlsActiveClassName);
        }
    }
})();