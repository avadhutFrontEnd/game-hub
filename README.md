# game-hub
react project game-hub

# Commit message format : 
[Course: 2. React 18 for Intermediate Topics > 2. Fetching and Updating Data with React Query (3h) ] [ Video: #25-Exercise-Fetching-Platforms_mp4_3min_30sec ] - Feature: Implement React Query for Platform Fetching.

## Refactor platform fetching using React Query with caching

Completed the exercise by refactoring the `usePlatforms` hook to fetch parent platforms using React Query, applying caching optimization with initial static data.

### Key Changes:
* **Refactor `usePlatforms` Hook:** Replaced the static data loading in `usePlatforms.ts` with the `useQuery` hook.
    * The **`queryFn`** now calls the specific API endpoint `/platforms/lists/parents` to fetch only the parent/top-level platforms.
    * The response is typed using the generic `FetchResponse<Platform>` interface.
* **Implement Caching:** Set a **`staleTime`** of 24 hours (`24 * 60 * 60 * 1000`) for the platforms data.
* **Provide `initialData`:** Used the existing static data from `platforms.ts` as **`initialData`** (wrapped as `{ count, results }`) to prevent a loading spinner on the first render, significantly improving perceived performance.
* **Update `PlatformSelector`:** Modified the component to correctly access and iterate over the fetched data using **`data?.results.map(...)`**, aligning with the `FetchResponse` structure.

# my-github Account : 
https://github.com/avadhutFrontEnd/game-hub/

# code-with-mosh Account : 
https://github.com/mosh-hamedani/game-hub

# rawg API info :
https://rawg.io/@avadhutproject123/apikey

# rawg API doc :
- https://rawg.io/apidocs
- https://api.rawg.io/docs/#operation/games_list
