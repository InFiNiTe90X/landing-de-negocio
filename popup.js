function openPopup(url) {
  if (window.innerWidth > 375) {
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popupImage');
    popupImage.src = url;
    popup.style.display = 'block';
  } else {
    window.open(url, '_blank');
  }
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}