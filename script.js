const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  toggle.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
  navigation?.classList.toggle('is-open', !open);
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.setAttribute('aria-label', 'Open navigation');
  });
});

const imageViewer = document.querySelector('.image-viewer');
const viewerPhoto = imageViewer?.querySelector('.image-viewer-photo');
const viewerCaption = imageViewer?.querySelector('.image-viewer-caption');

document.querySelectorAll('.project-image-trigger, .certificate-image-trigger').forEach((trigger) => {
  const photo = trigger.querySelector('.project-image, .certificate-image');
  if (!photo) return;

  trigger.setAttribute('aria-label', `View full-size image: ${photo.alt}`);
  trigger.addEventListener('click', () => {
    if (!imageViewer || !viewerPhoto || !viewerCaption) return;
    viewerPhoto.src = photo.src;
    viewerPhoto.alt = photo.alt;
    viewerCaption.textContent = photo.alt;
    imageViewer.showModal();
  });
});

imageViewer?.querySelector('.image-viewer-close')?.addEventListener('click', () => {
  imageViewer.close();
});

imageViewer?.addEventListener('click', (event) => {
  if (event.target === imageViewer) imageViewer.close();
});
