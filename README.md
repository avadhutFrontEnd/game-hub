# game-hub
react project game-hub

# Commit message format : 
[Course: 2. React 18 for Intermediate Topics > 4. Routing with React Router (2h) ] [ Video: #13-Exercise-Setting-Up-Routing_mp4_6min_32sec ] - Feature: Set Up Basic Routing Structure (Game Hub)

## Implemented the basic routing structure for the Game Hub application using Nested Routes and cleaned up the old root component (`App.tsx`).

The application is now set up as a Single Page Application (SPA) where the navigation bar persists across all views.

---

### Key Steps and Changes:

1.  ### Installation and Setup
    * Installed `react-router-dom`:
        ```bash
        npm i react-router-dom@6.10.0
        ```
    * Handled a TypeScript version mismatch in VS Code by selecting the workspace version.

2.  ### Routing Configuration (`src/routes.tsx`)
    * Created the router using `createBrowserRouter`.
    * Defined the **Layout Route** (`path: "/"`) to house the persistent `Layout` component.
    * Defined child routes:
        * **Index Route:** `{ index: true, element: <HomePage /> }` (for the root path `/`).
        * **Dynamic Route:** `{ path: "games/:id", element: <GameDetailPage /> }` (to show individual game details).

3.  ### Layout and Page Components
    * **`src/pages/Layout.tsx`:** Created a layout component to hold the persistent elements:
        ```tsx
        <NavBar />
        <Outlet /> // Placeholder for dynamic content
        ```
    * **`src/pages/HomePage.tsx`:** The content of the original `App.tsx` (the main game grid and sidebar logic) was moved into this new page component, and the component was simplified to only contain the grid structure (removing the redundant `NavBar`).
    * **`src/pages/GameDetailPage.tsx`:** A placeholder component was created for the detail page.

4.  ### Application Entry Point (`src/main.tsx`)
    * The old `<App />` component import and rendering were replaced with the **`<RouterProvider />`** component, passing the configured router object:
        ```tsx
        <RouterProvider router={router} />
        ```

5.  ### Cleanup
    * The obsolete `src/App.tsx` and `src/App.css` files were deleted.

The application now correctly navigates between the `/` (Home) and `/games/:id` (Detail) routes while preserving the navigation bar.



# my-github Account : 
https://github.com/avadhutFrontEnd/game-hub/

# code-with-mosh Account : 
https://github.com/mosh-hamedani/game-hub

# rawg API info :
https://rawg.io/@avadhutproject123/apikey

# rawg API doc :
- https://rawg.io/apidocs
- https://api.rawg.io/docs/#operation/games_list
