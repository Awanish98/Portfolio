// Select the menu icon and the menu list elements
const menuIcon = document.getElementById('menu-icon');
const menuList = document.getElementById('menu-list');

// Add an event listener to the menu icon for the click event
menuIcon.addEventListener('click', () => {
    // Toggle the "active" class on the menu list
    menuList.classList.toggle('active');
});

function changeColor(newColor) {
    // Get the root element (usually <html>)
    const root = document.documentElement;
  
    // Set the new main color
    root.style.setProperty('--main-color', newColor);
  }