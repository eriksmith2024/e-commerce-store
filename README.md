# EJS Gym Solutions - React Gym Store App
This is a simple gym equipment and supplement store built using React and Redux.

## Setup Instructions

1.  **Install Dependencies:**
    npm install
 
2.  **Start the Development Server:**
    npm run dev for using React Vite

    This will start the application in development mode, usually on `http://localhost:5173/`.

3.  **Complete the Registration form:**
    This will log you in taking you to the home page
    Logout & Login with provided details via Login Page

4.  **Navigate the site via links in the header**
    The home page alo has a link to view all Products 
    This is a suggested page after logging in
    Choose to view Cart or About if preferred

5.  **Add items to cart on Products page**
    Select a color version of the product 
    Then click add to add to cart displayed on header
    Remove by keeping same color version & clicking remove

6.  **Go to Cart Page via Header to checkout**
    View products selected 
    Remove products by clicking product remove button
    Checkout by clicking Proceed to Checkout
    
7.  **Select Shipping type**
    Click empty circle / radio button to select shipping type
    Click help with shipping for modal with shipping info
    After selecting shipping proceed to Payment
    Website ends with no payment menthod set up


## Key Features

Product Listings: Browse a variety of gym products.
**Add to Cart:** Add items to your shopping cart.
**Cart Management:** View and remove items from your cart.
**User Authentication:** Registration and login functionality.
**Checkout:** Select a shipping method and view order summary.
**Shipping Help:** Information about available shipping options.

## Technologies Used

* React
* Redux Toolkit for state management
* React Router for navigation
* React Bootstrap for UI components


## Important Notes
* Image files are expected to be in the `public/images` folder.
* User authentication details are currently stored in `localStorage` for simplicity.

## Ideas for Further Development

* Implement payment processing.
* Add more product details and filtering options.
* Implement a backend 