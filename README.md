# game-hub
react project game-hub

# Commit message format : 
[Course: 2. React 18 for Intermediate Topics > 4. Routing with React Router (2h) ] [ Video: #20-Exercise-Building-Game-Screenshots_mp4_5min_50sec ] - Feature: Fetch and Display Game Screenshots with Responsive Grid

## Implemented fetching and responsive display of game screenshots on the Game Detail Page.

This feature uses a dedicated hook for the screenshots API endpoint and renders them in a responsive grid layout.

---

### Key Changes:

1.  ### Defined Screenshot Entity (`src/entities/Screenshot.ts`)
    * Created the `Screenshot` interface defining the structure of the API response objects:
        ```typescript
        export interface Screenshot {
          id: number;
          image: string;
          width: number;
          height: number;
        }
        ```

2.  ### Created `useScreenshots` Hook (`src/hooks/useScreenshots.ts`)
    * Defined a new React Query hook that fetches screenshots for a given `gameId`.
    * Configured the `APIClient` to target the dynamic nested endpoint:
        ```typescript
        const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);
        ```
    * The hook returns the results of `apiClient.getAll`.

3.  ### Implemented `<GameScreenshots />` Component (`src/components/GameScreenshots.tsx`)
    * The component fetches the data and renders the screenshots in a **`SimpleGrid`** with responsive column definitions:
        * **Responsive Columns:** `columns={{ base: 1, md: 2 }}` (one column on small devices, two columns on medium/larger devices).
        * **Spacing:** Added `spacing={2}` to separate the images.
        * **Rendering:** Iterates over the `results` and renders each image using the Chakra `<Image />` component.
    * Implemented loading and error handling (returns `null` while loading, throws error on failure).

4.  ### Integration (`src/pages/GameDetailPage.tsx`)
    * The new component was added to the detail page, passing the current game's ID:
        ```tsx
        <GameScreenshots gameId={game.id} />
        ```

This completes the dynamic content for the Game Detail Page, utilizing a responsive grid for optimal display across different devices.


# my-github Account : 
https://github.com/avadhutFrontEnd/game-hub/

# code-with-mosh Account : 
https://github.com/mosh-hamedani/game-hub

# rawg API info :
https://rawg.io/@avadhutproject123/apikey

# rawg API doc :
- https://rawg.io/apidocs
- https://api.rawg.io/docs/#operation/games_list
