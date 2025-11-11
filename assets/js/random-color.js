// Random color scheme switcher - runs immediately
const colorSchemes = [
  'terminal',
  'avocado',
  'fire',
  'ocean',
  'forest',
  'princess',
  'neon',
  'autumn',
  'slate'
];

// Pick a random scheme
const randomScheme = colorSchemes[Math.floor(Math.random() * colorSchemes.length)];

console.log('Switching to color scheme:', randomScheme);

// Get the html element
const html = document.documentElement;

// Remove all existing color schemes
colorSchemes.forEach(scheme => html.classList.remove(scheme));

// Add the new random scheme
html.classList.add(randomScheme);

// Also update the data attribute that Blowfish uses
html.setAttribute('data-color-scheme', randomScheme);

// Force re-apply after a tiny delay to ensure it sticks
setTimeout(() => {
  html.classList.remove(...colorSchemes);
  html.classList.add(randomScheme);
  html.setAttribute('data-color-scheme', randomScheme);
  console.log('Color scheme applied:', randomScheme);
  console.log('Current classes:', html.className);
}, 50);

// Listen for Blowfish's appearance switcher and re-apply our color
document.addEventListener('DOMContentLoaded', function() {
  const appearanceSwitcher = document.querySelector('[id*="appearance"]');
  if (appearanceSwitcher) {
    appearanceSwitcher.addEventListener('click', function() {
      setTimeout(() => {
        html.classList.add(randomScheme);
        html.setAttribute('data-color-scheme', randomScheme);
      }, 100);
    });
  }
});
