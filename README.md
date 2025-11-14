# game-hub
react project game-hub

# Commit message format : 
[Course: 2. React 18 for Intermediate Topics > 2. Fetching and Updating Data with React Query (3h)] [Video: #26-Exercise-Fetching-Games_mp4_8min_46sec] - feat: Refactor useGames to use React Query; remove useData hook

## feat: Refactor useGames to use React Query; remove useData hook

**Refactor (useGames):**

* Replaced the custom `useData` hook logic in `useGames.ts` with the `@tanstack/react-query` `useQuery` hook for simplified data fetching and caching management.
* Configured `queryKey` to include `["games", gameQuery]` to automatically refetch when filter/sort criteria change.
* Explicitly passed generic types (`FetchResponse<Game>, Error`) to `useQuery` to ensure proper type inference for errors and data structure.
* Updated the Axios request in `queryFn` to pass all filtering parameters (`genres`, `parent_platforms`, `ordering`, `search`) from `gameQuery`.
* **Fix:** Corrected the platform filtering parameter name from `platforms` to **`parent_platforms`** in `useGames.ts`.

**Refactor (Cleanup):**

* Deleted the redundant **`useData.ts`** file.
* Moved the generic **`FetchResponse<T>`** interface definition from the deleted `useData.ts` to the central **`src/services/api-client.ts`** file.
* Updated all affected query hooks (`useGames`, `useGenres`, `usePlatforms`) to import `FetchResponse` from the new location (`../services/api-client`).
* Updated **`GameGrid.tsx`** to access game data via **`data?.results.map(...)`** instead of just `data.map(...)` to align with the `FetchResponse` structure.

**Note:** The duplication of the `Platform` interface between `useGames.ts` and `usePlatforms.ts` is noted and will be addressed in a subsequent commit.


# my-github Account : 
https://github.com/avadhutFrontEnd/game-hub/

# code-with-mosh Account : 
https://github.com/mosh-hamedani/game-hub

# rawg API info :
https://rawg.io/@avadhutproject123/apikey

# rawg API doc :
- https://rawg.io/apidocs
- https://api.rawg.io/docs/#operation/games_list
