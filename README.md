# game-hub
react project game-hub

# Commit message format : 
[Course: 2. React 18 for Intermediate Topics > 2. Fetching and Updating Data with React Query (3h) ] [ Video: #24-Exercise-Fetching-Genres_mp4_10min_55sec ] - Feature: Implement React Query for Genre Fetching

## Implement React Query for Genre Fetching and Caching

Refactored the genre data fetching in the Game Hub project to use React Query, following the exercise prompt.

### Key Changes:
* **Setup React Query:** Installed `@tanstack/react-query` and `@tanstack/react-query-devtools`, and configured `QueryClientProvider` and `ReactQueryDevtools` in `main.tsx`.
* **Refactor `useGenres`:**
    * Replaced static data fetching with a `useQuery` hook to fetch genres from the API via `api-client`.
    * Updated the return type by importing the generic `FetchResponse` interface from `useData.ts` to correctly handle the API response structure (`{ count, results }`).
    * Introduced **`staleTime`** (24 hours) to optimize caching for the rarely changing genre list.
    * Added **`initialData`** using the existing static `genres` array, wrapped to match the API response structure, to eliminate the initial loading spinner.
* **Update `useData`:** Exported the `FetchResponse` generic interface to be reusable across other hooks.
* **Update `GenreList`:** Modified the component to access `data.results` instead of just `data` for iteration, aligning with the new `FetchResponse` type.


# my-github Account : 
https://github.com/avadhutFrontEnd/game-hub/

# code-with-mosh Account : 
https://github.com/mosh-hamedani/game-hub

# rawg API info :
https://rawg.io/@avadhutproject123/apikey

# rawg API doc :
- https://rawg.io/apidocs
- https://api.rawg.io/docs/#operation/games_list
