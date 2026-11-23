'use strict';
// Room selection is browser-local and intentionally not persisted.
const roomImage = document.querySelector('#room-image');
const roomCaption = document.querySelector('#room-caption');
const roomButtons = document.querySelectorAll('[data-room]');
roomButtons.forEach(button => {
  button.addEventListener('click', () => {
    roomButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    roomImage.src = `assets/${button.dataset.room}.webp`;
    roomImage.alt = button.dataset.description;
    roomCaption.textContent = button.textContent;
  });
});
