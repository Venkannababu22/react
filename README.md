# React 

// parceljs.org
# Parcel  
 - Dev Build
 - Local Server
 - HMR - Hot Module Replacement (refreshing the page automaticaaly when changes are made to the site)
 - File Watching Algorithm (written in c++)
 - Cache: Faster builds (when we installed parcel, a folder was created called .parcel-cache). Every time we made some changes it is caching those and when we build again, it builds in less time.
 - Image optimization
 - Minification of files
 - Bundling
 - Compress the files (smaller versions of code)
 - Differential bundling : supports for all the older version too
 - Consistent Hashing
 - Error handling
 - HTTPs
 - Treek shaking : removes unneesary code
 - Differentdeev and prob bundles

 # Script
 - "start": "parcel index.html", // start the development server (npm run start or npm start)
 - "dev": "parcel index.html --open", // start the development server and open in browser
 - "build": "parcel build index.html" (npm run build)
 
 # Food app structure

 /**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 * - Search Bar
 * - Restaurant Container
 *    - RestaurantCard
 *      - Image
 *      - Name of res, star rating, cuisine, delivery time
 * - Footer
 *  - Copyright
 *  - Links
 *  - Contact Us
 *  - Address
 */

 # Two types of Export / Import

 - Default Export/import
    - export default Component;
    - import Component from "path";

- Names Export/Import
    - export xonst component;
    - import {Component} from  "path";


# React Hooks
(Normal JS utility functions developed by facebook developers)
 - useState()
 - useEffect()


# 2 types of Routing in web apps
    - Client side Routing
    - Server side Routing

# Redux Toolkit
    - Install @reduxjs/toolkit and react-redux 
    - Build our store (js file)
    - Connect our store to our app
    - Create a cart slice
    - dispach(action)
    - Read data using selector

# Types of testing (developer)
    - Unit testing - testing a specific component 
    - Integrated testing - testing the components that are connected. (menu and cart are connected.). Integration of multiple components. 
    - End to end testing (e2e)

# Setting up testing 
    - Install React testing library
    - Installed jest
    - Installe babel dependencies and configured babel by creating a new babel.config.js file
    - Configure parcel config file to disable default babel configuration.
    - Jest configration
    - Install jsdom library
    - Install @babel/preset-react - to make JSX work in test cases
    - Include @babel/preset-react - indside my babel config
    - Install @testing-library/jest-dom
    