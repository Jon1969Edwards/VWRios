/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2024 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Function to handle dropdown menu
    function handleDropdownMenu() {
        const dropdownMenuBtn = document.getElementById('dropdownMenuBtn');
        const dropdownMenu = document.getElementById('dropdownMenu');
        const popup = document.getElementById('navigation-popup');  // Ensure this element exists in your HTML
        const closeBtn = document.getElementById('close-popup');    // Ensure this element exists in your HTML
    
        if (dropdownMenuBtn && dropdownMenu) {
            dropdownMenuBtn.addEventListener('click', function() {
                dropdownMenu.classList.toggle('show');
    
                // Check if popup exists and only then access classList
                if (popup && !popup.classList.contains('close-popup')) {
                    popup.classList.add('close-popup');
                }
            });
        } else {
            console.error('dropdownMenuBtn or dropdownMenu not found');
        }
    
        // Check for closeBtn existence
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                popup.classList.add('close-popup');
            });
        }
    
        // Close the dropdown menu if the user clicks outside of it
        window.addEventListener('click', function(event) {
            if (!event.target.matches('#dropdownMenuBtn')) {
                if (dropdownMenu && dropdownMenu.classList.contains('show')) {
                    dropdownMenu.classList.remove('show');
                }
            }
        });
    }
    

// ********************* FOOTER: END *************->


handleDropdownMenu();

function setUpModalEvents() {
    // Add event listeners for open buttons
    document.getElementById('open-privacy').addEventListener('click', () => openModal('privacy-modal'));
    document.getElementById('open-terms').addEventListener('click', () => openModal('terms-modal'));
    document.getElementById('open-disclaimer').addEventListener('click', () => openModal('disclaimer-modal'));
    document.getElementById('open-aboutUs').addEventListener('click', () => openModal('aboutUs-modal'));


    // Close modals (all modal close buttons)
    document.querySelectorAll('.modal-close').forEach(button => {
        button.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            closeModal(modal.id);
        });
    });
  };

  // Activate modalevents function
  setUpModalEvents();


});