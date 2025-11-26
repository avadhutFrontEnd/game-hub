# game-hub
react project game-hub

# Commit message format : 
[Course: 2. React 18 for Intermediate Topics > 4. Routing with React Router (2h) ] [ Video: #19-Exercise-Building-Game-Trailer_mp4_8min_52sec ] - Feature: Fetch and Display Game Trailer

## Implemented fetching and display of the game trailer on the Game Detail Page using a dedicated hook and component.

This feature uses a nested API endpoint (`/games/{id}/movies`) to fetch video resources and displays the result using a standard HTML5 video player.

---

### Key Changes:

1.  ### Defined Trailer Entity (`src/entities/Trailer.ts`)
    * Created the `Trailer` interface. After inspecting the API response, the structure of the `data` property was typed:
        ```typescript
        export interface Trailer {
          // ... other properties
          data: { 480: string; max: string }; // Links to video files
        }
        ```

2.  ### Created `useTrailers` Hook (`src/hooks/useTrailers.ts`)
    * Defined a new React Query hook that accepts the `gameId`.
    * Configured the `APIClient` to target the dynamic nested endpoint:
        ```typescript
        const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);
        ```
    * The `queryKey` includes `gameId` to ensure data refetches whenever the game changes.

3.  ### Implemented `<GameTrailer />` Component (`src/components/GameTrailer.tsx`)
    * The component accepts `gameId` as a prop and uses `useTrailers` to fetch the data.
    * Implemented loading and error handling (returning `null` during loading, throwing error on failure).
    * If trailers exist, it renders the first trailer using the HTML5 `<video>` tag:
        ```tsx
        <video 
          src={first.data[480]} // Use the 480p link
          poster={first.preview} // Use the preview image as poster
          controls 
        />
        ```
    * A check ensures the component returns `null` if no trailers are found for the game.

4.  ### Integration (`src/pages/GameDetailPage.tsx`)
    * The `GameTrailer` component was added to the detail page, passing the current game's ID:
        ```tsx
        <GameTrailer gameId={game.id} />
        ```

This completes the initial detail page content by adding dynamic multimedia.


# my-github Account : 
https://github.com/avadhutFrontEnd/game-hub/

# code-with-mosh Account : 
https://github.com/mosh-hamedani/game-hub

# rawg API info :
https://rawg.io/@avadhutproject123/apikey

# rawg API doc :
- https://rawg.io/apidocs
- https://api.rawg.io/docs/#operation/games_list
