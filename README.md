# game-hub
react project game-hub

# Commit message format : 
[Course: 2. React 18 for Intermediate Topics > 4. Routing with React Router (2h) ] [ Video: #15-Exercise-Fetching-a-Game_mp4_11min_35sec ] - Feature: Fetch Game Details and Implement Hover Effect

## Implemented fetching and display of individual game details using a dynamic route parameter (slug) and React Query.

Also added a visual **hover effect** to game cards for improved interaction.

---

### Key Changes:

1.  ### Dynamic Routing Update
    * **`src/routes.tsx`:** Changed the dynamic route parameter from `:id` to **`:slug`** for SEO/user-friendly URLs:
        ```typescript
        { path: "games/:slug", element: <GameDetailPage /> },
        ```
    * **`src/components/GameCard.tsx`:** Updated the link on the game name to use the new `slug` parameter:
        ```tsx
        <Link to={"/games/" + game.slug}>{game.name}</Link>
        ```
    * **`src/hooks/useGames.ts`:** Added the `slug` property and `description_raw` property to the `Game` interface.

2.  ### Data Fetching for Single Game
    * **`src/services/api-client.ts`:** Added a generic `get` method to the `APIClient` class to fetch a single object by its ID or slug:
        ```typescript
        get = (id: number | string) => {
          return axiosInstance.get<T>(this.endpoint + "/" + id).then(res => res.data);
        };
        ```
    * **`src/hooks/useGame.ts`:** Created a new `useGame` React Query hook that takes the `slug` and calls `apiClient.get(slug)` to fetch the specific game data.

3.  ### Game Detail Page Logic (`src/pages/GameDetailPage.tsx`)
    * Used the **`useParams`** hook to extract the `slug` (using the non-null assertion `slug!`).
    * Called the `useGame` hook.
    * Implemented loading (`<Spinner />`) and error handling logic, throwing the error so it is caught by the global error boundary.
    * Displayed the game name and the **`description_raw`** (plain text description) property.

4.  ### User Experience Improvements
    * **Game Card Hover Effect (`src/components/GameCardContainer.tsx`):** Applied a subtle `transform: scale(1.03)` and a smooth transition on hover.
    * **Global Page Padding (`src/pages/Layout.tsx`):** Wrapped the `<Outlet />` in a `<Box padding={5}>` to ensure all main content pages have consistent spacing away from the screen edges.


# my-github Account : 
https://github.com/avadhutFrontEnd/game-hub/

# code-with-mosh Account : 
https://github.com/mosh-hamedani/game-hub

# rawg API info :
https://rawg.io/@avadhutproject123/apikey

# rawg API doc :
- https://rawg.io/apidocs
- https://api.rawg.io/docs/#operation/games_list
