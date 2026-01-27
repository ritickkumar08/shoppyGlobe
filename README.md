github - https://github.com/ritickkumar08/shoppyGlobe

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# shoppyGlobe


ShoppyGlobe 
ShoppyGlobe is a frontend-focused e-commerce application built with React, Redux Toolkit, React Router, Tailwind CSS, and Vite. The project demonstrates core e-commerce flows such as product listing, cart management, discounts, and checkout logic with a clean component-based architecture.
This project is intended to showcase practical React skills, state management, and UI structuring rather than backend complexity.

Tech Stack
    ->React – UI library
    ->Vite – Fast build tool and dev server
    ->Redux Toolkit – Global state management
    ->React Redux – Binding Redux to React
    ->React Router DOM – Client-side routing
    ->Tailwind CSS – Utility-first styling
    ->React Icons – Icon library

Features
    ->Product listing with discounts
    ->Add to cart / remove from cart
    ->Increase and decrease cart item quantity
    ->Automatic price calculation with discountPercentage
    ->Global cart state using Redux slice
    ->Reusable cart item component
    ->Checkout flow with submit handling
    ->Responsive UI
    ->Dark/light friendly style

Project Purpose

    ->This project is designed to:
    ->Demonstrate React + Redux fundamentals
    ->Show clean component communication
    ->Practice real-world cart logic
    ->Serve as a portfolio-ready frontend project

normal navigation flow (e-commerce brain)
    1. Entry point
        ->User lands on your site via:
        ->home page
        ->shared product link
        ->User intent at this moment is vague: “let me see what this site is.”
        ->They scan:
        ->header / navbar
        ->hero section
        ->category hints
       
    2. Browsing products

        ->User navigates to:
        ->Products page
        ->or clicks a category
        ->Typical behavior:
        ->scroll
        ->skim images
        ->ignore descriptions
       
    3. Product inspection

        ->User clicks a product card.
        ->On the product page, they check in this order:
        ->image (first)
        ->price (immediately)
        ->discount (if any)
        ->title
        ->availability
        ->only then description
        ->If something feels off (price jump, unclear stock), they leave.
   
   4. Add to cart (first commitment)
        ->User clicks Add to Cart.
        ->Two possibilities:
        ->stays on page and keeps browsing
        ->navigates to cart out of curiosity
        ->Important:
        -Adding to cart ≠ intent to buy
        ->It’s a bookmark with benefits.

    5. Cart review (sanity check)

        ->User goes to Cart.
        ->They do four things instinctively:
        ->confirm items are correct
        ->adjust quantities
        ->remove mistakes
        ->re-evaluate total cost
        ->This is where:
        ->quantity controls
        ->warnings
        ->clear pricing
        ->…actually matter.
        If cart feels confusing → abandonment spike.

    7. Checkout flow

        ->User expects:
        ->minimal steps
        ->no forced account creation
        ->clear progress (step 1, step 2, step 3)
        ->They tolerate:
        ->address input
        ->payment input
       
    8. Confirmation
        ->User sees:
        ->order summary
        ->success message
        ->reassurance



Author
    -Ritick Kumar
