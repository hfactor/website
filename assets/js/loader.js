// loader.js

// Check if the loader has been shown before
if (!sessionStorage.getItem('loaderShown')) {
  // Show the loader overlay
  const loaderOverlay = document.createElement('div');
  loaderOverlay.id = 'loaderOverlay';
  loaderOverlay.style.position = 'fixed';
  loaderOverlay.style.top = '0';
  loaderOverlay.style.left = '0';
  loaderOverlay.style.width = '100%';
  loaderOverlay.style.height = '100%';
  loaderOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  loaderOverlay.style.color = '#fff';
  loaderOverlay.style.display = 'flex';
  loaderOverlay.style.justifyContent = 'center';
  loaderOverlay.style.alignItems = 'center';
  loaderOverlay.innerText = 'Loading...';
  document.body.appendChild(loaderOverlay);

  // Set session storage item to indicate loader has been shown
  sessionStorage.setItem('loaderShown', 'true');

  // Simulate loading time
  setTimeout(() => {
    // Remove the loader overlay after a delay
    document.body.removeChild(loaderOverlay);
  }, 3000); // Change 3000 to your desired loading time in milliseconds
}