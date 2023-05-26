## Change Profile Website

This is a simple website built using React.js and Bootstrap for changing user profile pictures. It allows users to upload an image from their device, crop the image using a draggable selection tool, and save the cropped image as their new profile picture.

### Tech Stack

The website is built using the following technologies:

- React.js: A JavaScript library for building user interfaces.
- Bootstrap: A popular CSS framework for building responsive and mobile-first websites.

### Getting Started

To run the Change Profile website locally, follow these steps:

1. Clone the repository:

   ```shell
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```shell
   cd change-profile-website
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

4. Start the development server:

   ```shell
   npm start
   ```

   This will start the website on `http://localhost:3000` and automatically open it in your default browser.

### Usage

Once the website is running, follow these steps to change the profile picture:

1. Click on the "Choose File" button to select an image from your device.
2. The selected image will be displayed.
3. Drag and resize the selection tool to crop the image as desired.
4. Click the "Save" button to save the cropped image as your new profile picture.

### Folder Structure

The folder structure of the project is as follows:

```
change-profile-website/
  ├── public/
  │   ├── index.html
  │   └── ...
  ├── src/
  │   ├── components/
  │   │   ├── Avatar.js
  │   │   ├── CropDialog.js
  │   │   ├── ProfileImage.js
  │   │   └── ...
  │   ├── App.js
  │   ├── index.js
  │   └── ...
  ├── package.json
  ├── README.md
  └── ...
```

- The `public` folder contains the HTML template and other static assets.
- The `src` folder contains the main source code of the website.
- The `components` folder contains reusable components used in the website.
- The `App.js` file is the entry point of the application.
- The `index.js` file is responsible for rendering the React app.
- The `package.json` file contains the project's dependencies and scripts.

Feel free to explore the code and modify it according to your needs.

### Credits

The Change Profile website is created by [Your Name] and is available under the [MIT License](LICENSE).

If you have any questions or suggestions, please feel free to contact me.

Happy coding!
