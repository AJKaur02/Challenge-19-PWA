const butInstall = document.getElementById('buttonInstall');

// Handle beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  window.deferredPrompt = event;
  butInstall.style.visibility = 'visible';
  butInstall.textContent = 'Install!';
});

// Implement click event for install button
butInstall.addEventListener('click', async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }

  // Show install prompt
  promptEvent.prompt();

  // Handle user's choice
  const { outcome } = await promptEvent.userChoice;
  console.log(`User response to the install prompt: ${outcome}`);

  window.deferredPrompt = null; // Clear deferred prompt
  butInstall.setAttribute('disabled', true);
  butInstall.textContent = 'Installed!';
});

// Handle appinstalled event
window.addEventListener('appinstalled', (event) => {
  console.log('😇', 'appinstalled', event);
});
