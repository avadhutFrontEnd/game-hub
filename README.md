# game-hub
react project game-hub

# Commit message format : 
[Course: 2. React 18 for Intermediate Topics > 2. Fetching and Updating Data with React Query (3h) ] [ Video: #31-Exercise-Simplifying-Query-Objects_mp4_10min_24sec ] - Refactor: Simplify GameQuery object

## Refactor GameQuery state to store only IDs instead of full objects

Simplified the `GameQuery` object in `App.tsx` by replacing the full `Genre` and `Platform` objects with only their respective **IDs**. This makes the **React Query key much cleaner and more efficient**.

### Key Changes:
* **Update `GameQuery` Interface (`App.tsx`):**
    * Renamed `genre` to **`genreId`** and changed its type from `Genre | null` to `number | undefined` (or optional `number`).
    * Renamed `platform` to **`platformId`** and changed its type from `Platform | null` to `number | undefined` (or optional `number`).
* **Update State Handling (`App.tsx`):**
    * When selecting a genre or platform, the state is updated to store only `genre.id` or `platform.id`.
* **Update `useGames` Hook (`useGames.ts`):**
    * Updated `apiClient.getAll` call to use `gameQuery.genreId` and `gameQuery.platformId` directly in the URL parameters.
* **Update Dependent Components (Displaying Names):**
    * **`GameHeading.tsx`:** Updated to use `useGenres()` and `usePlatforms()` hooks to fetch the full lists and then **find** the selected `genre` or `platform` object using the stored ID (`gameQuery.genreId` or `gameQuery.platformId`) before rendering the name.
    * **`GenreList.tsx`:** Updated the `selectedGenre` prop to accept **`selectedGenreId?: number`**.
    * **`PlatformSelector.tsx`:** Updated the `selectedPlatform` prop to accept **`selectedPlatformId?: number`** and includes logic to find the selected platform object by ID to display its name in the menu button.

This ensures the React Query cache key remains minimal and only contains the data necessary for fetching the resource.

# my-github Account : 
https://github.com/avadhutFrontEnd/game-hub/

# code-with-mosh Account : 
https://github.com/mosh-hamedani/game-hub

# rawg API info :
https://rawg.io/@avadhutproject123/apikey

# rawg API doc :
- https://rawg.io/apidocs
- https://api.rawg.io/docs/#operation/games_list
