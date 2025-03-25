    /******************************** DROPDOWN-MENU ********************************/

    const toggle_menu = document.querySelector('.toggle-menu');
    const toggle_button = document.querySelector('.toggle-button');
        
    toggle_button.addEventListener('click', () => {
        if (toggle_menu.style.display == 'block') {
            toggle_menu.style.display = 'none';
            toggle_menu.style.opacity = '0';
            dropdown_menu_more_div_display.style.display = 'none';
            more_arrow.style.borderWidth = '0px 3px 3px 0px';
            more_arrow.style.marginBottom = '0px';
        }
        else {
            toggle_menu.style.display = 'block';
            toggle_menu.style.opacity = '1';
        }
    });

    /** HIDE WHEN CLICKING OUTSIDE **/
    document.addEventListener('mouseup', function(e) {
        if (!toggle_menu.contains(e.target) && !toggle_button.contains(e.target)) {
            toggle_menu.style.display = 'none';
            dropdown_menu_more_div_display.style.display = 'none';
            more_arrow.style.borderWidth = '0px 3px 3px 0px';
            more_arrow.style.marginBottom = '0px';
        }
    });

    /******************************** ARROW-DOWN ********************************/
    const nav_links_li = document.querySelector('.motorcycles_links-li');
    const arrowDown = document.querySelector('.nav-bar-arrow-down');
    
    nav_links_li.addEventListener('mouseover', () => {
        arrowDown.style.borderColor = 'red';
    });
    
    nav_links_li.addEventListener('mouseout', () => {
        arrowDown.style.borderColor = 'black';
    });


    /******************************** MORE-DROPDOWN-NAV ********************************/
    const motor_drop_div = document.querySelector('.motorcycles-dropdown-div');
    const motor_drop_content = document.querySelector('.motorcycles-dropdown-content');
    
    motor_drop_div.addEventListener('click', () => {
        if (motor_drop_content.style.display == 'block') {
            motor_drop_content.style.display = 'none';
        }
        else {
            motor_drop_content.style.display = 'block';
        }
    });
    
    /** HIDE WHEN CLICKING OUTSIDE **/
    document.addEventListener('mouseup', function(e) {
        if (!motor_drop_div.contains(e.target)) {
            motor_drop_content.style.display = 'none';
        }
    });
