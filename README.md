# game-hub
react project game-hub

# Commit message format : 
[Course: 2. React 18 for Intermediate Topics > 4. Routing with React Router (2h) ] [ Video: #14-Exercise-Handling-Errors_mp4_3min_22sec ] - Feature: Implement Custom Error Handling and 404 Page

## Implemented custom error handling for the Game Hub application, displaying context-specific messages for application errors versus invalid routes (404).

The error page was configured as the `errorElement` of the root route to act as a global error boundary.

---

### Key Changes:

1.  ### Created `ErrorPage` Component (`src/pages/ErrorPage.tsx`)
    * Used the **`useRouteError`** hook to catch errors thrown during rendering or routing.
    * Used the **`isRouteErrorResponse`** utility function to determine if the error was a routing error (like a 404) or a general application error.
    * **Conditional Error Message:**
        * **Route Error (404):** Displays **"This page does not exist."**
        * **Application Error:** Displays **"An unexpected error occurred."**

2.  ### Configured Global Error Boundary (`src/routes.tsx`)
    * The new component was set as the global `errorElement` on the root route:
        ```typescript
        {
          path: "/",
          element: <Layout />,
          errorElement: <ErrorPage />, // Catches 404s and app errors in children
          children: [ /* ... */ ]
        }
        ```

3.  ### Addressed Layout Persistence
    * Since an `errorElement` replaces the entire parent route's content (including the `<Layout />`) when an error occurs, the navigation bar was temporarily **added directly into the `<ErrorPage />`** component to maintain visual continuity:
        ```tsx
        <NavBar />
        <Box padding={5}> /* Error Content */ </Box>
        ```
    * *(Note: This ensures the user can still navigate away from the error page, even though the error component itself is outside the normal `Layout` flow.)*

This implementation provides a clean, user-friendly, and informative error screen for the Game Hub.


# my-github Account : 
https://github.com/avadhutFrontEnd/game-hub/

# code-with-mosh Account : 
https://github.com/mosh-hamedani/game-hub

# rawg API info :
https://rawg.io/@avadhutproject123/apikey

# rawg API doc :
- https://rawg.io/apidocs
- https://api.rawg.io/docs/#operation/games_list
