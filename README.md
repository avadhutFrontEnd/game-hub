# game-hub
react project game-hub

# Commit message format : 
[Course: 2. React 18 for Intermediate Topics > 2. Fetching and Updating Data with React Query (3h) ] [ Video: #32-Exercise-Creating-Lookup-Hooks_mp4_6min_59sec ] - Refactor: Create Lookup Hooks

## Encapsulate platform and genre lookup logic into reusable custom hooks

Addressed code duplication in components like `GameHeading` and `PlatformSelector` by creating simple custom hooks (`usePlatform` and `useGenre`) to find an item by its ID from the cached data fetched by React Query.

### Key Changes:
* **Created `usePlatform.ts`:** A custom hook that accepts an optional `platformId` and returns the corresponding `Platform` object by searching the data retrieved from `usePlatforms()`.
* **Created `useGenre.ts`:** A custom hook that accepts an optional `genreId` and returns the corresponding `Genre` object by searching the data retrieved from `useGenres()`.
* **Refactor `GameHeading.tsx`:** Replaced the direct lookup logic for both platform and genre with calls to `usePlatform(gameQuery.platformId)` and `useGenre(gameQuery.genreId)`.
* **Refactor `PlatformSelector.tsx`:** Replaced the internal platform lookup logic with a call to `usePlatform(selectedPlatformId)`.
* **Refactor Static Data:** Updated **`src/data/genres.ts`** and **`src/data/platforms.ts`** to match the full `FetchResponse` structure (including `count`, `next`, and `previous`) to ensure **`initialData`** in `useGenres.ts` and `usePlatforms.ts` is type-safe and consistent with the remote API response.

# my-github Account : 
https://github.com/avadhutFrontEnd/game-hub/

# code-with-mosh Account : 
https://github.com/mosh-hamedani/game-hub

# rawg API info :
https://rawg.io/@avadhutproject123/apikey

# rawg API doc :
- https://rawg.io/apidocs
- https://api.rawg.io/docs/#operation/games_list
