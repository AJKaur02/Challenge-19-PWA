# Progressive Web Application (PWA): Text Editor

## Description

The **Progressive Web Application (PWA): Text Editor** is a single-page text editor application designed to run in the browser. It meets PWA criteria and includes features for data persistence using IndexedDB, ensuring that content can be accessed even when offline. This application also functions offline and can be installed as a Progressive Web Application (PWA) on desktops.

## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client-server folder structure

WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client

WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack

WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file

WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors

WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage

WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB

WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB

WHEN I click on the Install button
THEN I download my web application as an icon on my desktop

WHEN I load my web application
THEN I should have a registered service worker using workbox

WHEN I register a service worker
THEN I should have my static assets pre-cached upon loading along with subsequent pages and static assets

WHEN I deploy to Render
THEN I should have proper build scripts for a webpack application
```

## Features

- **Offline Functionality:** Application works without an internet connection.
- **Data Persistence:** Uses IndexedDB for storing and retrieving content.
- **PWA Installation:** Allows installation on the desktop as a Progressive Web Application.
- **Responsive Design:** Optimized for both desktop and mobile devices.
- **Service Worker:** Caches static assets for offline access.
- **Modern JavaScript:** Utilizes next-gen JavaScript features with Babel.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/AJKaur02/Challenge-19-PWA
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd text-editor-pwa
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Set Up Environment Variables:**

   Create a `.env` file in the root directory if required.

5. **Start the Development Server:**
   ```bash
   npm run start
   ```

6. **Build the Application:**
   ```bash
   npm run build
   ```

## Deployment

- Deploy the application to Render using the [Render Deployment Guide](https://coding-boot-camp.github.io/full-stack/render/render-deployment-guide).
- Ensure the `.npmrc` file is included in the deployment for proper build configuration.

## Screenshots

**Mock-Up:**

![Demonstration of the finished Module 19 Challenge being used in the browser and then installed.](./Develop/client/assets/demo.png)

**Manifest File:**

![Demonstration of the finished Module 19 Challenge with a manifest file in the browser.](./Develop/client/assets/Manifest.png)

**Registered Service Worker:**

![Demonstration of the finished Module 19 Challenge with a registered service worker in the browser.](./Develop/client/assets/Service-worker.png)

**IndexedDB Storage:**

![Demonstration of the finished Module 19 Challenge with an IndexedDB storage named 'jate' in the browser.](./Develop/client/assets/Idb-storage.png)

## Contributing

1. **Fork the Repository**
2. **Create a New Branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit Your Changes:**
   ```bash
   git commit -m "Add feature: your-feature-name"
   ```
4. **Push to the Branch:**
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Create a Pull Request**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
