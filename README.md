# game-hub
react project game-hub

# Commit message format : 
[Course: 2. React 18 for Intermediate Topics > 2. Fetching and Updating Data with React Query (3h) ] [ Video: #29-Exercise-Implementing-Infinite-Queries_mp4_7min_39sec ] - Feature: Implement Infinite Queries for Games

## Implement infinite scrolling/pagination for game list using React Query

Refactored the game fetching mechanism to use `useInfiniteQuery` to support loading subsequent pages of games via a "Load More" button.

### Key Changes:
* **Refactor `useGames` Hook:**
    * Switched from `useQuery` to **`useInfiniteQuery`**.
    * Updated **`queryFn`** to accept and utilize the `pageParam` (defaulting to 1) for fetching games using the `/games` endpoint with the `page` query parameter.
    * Implemented **`getNextPageParam`** logic: returns `allPages.length + 1` if `lastPage.next` (the next page URL from the API) is present, otherwise returns `undefined` to signal the end of the list.
* **Update `FetchResponse` Interface:** Added the **`next: string | null`** property to the generic `FetchResponse` interface in `api-client.ts` to support pagination checks.
* **Update `GameGrid` Component:**
    * Modified the rendering logic to iterate over `data?.pages` and then `page.results` to display all loaded pages/games.
    * Imported and utilized `hasNextPage`, `fetchNextPage`, and `isFetchingNextPage` from the infinite query result.
    * Added a dynamic **"Load More" button** at the bottom of the grid, which only appears if `hasNextPage` is true, to trigger fetching the next page.

# my-github Account : 
https://github.com/avadhutFrontEnd/game-hub/

# code-with-mosh Account : 
https://github.com/mosh-hamedani/game-hub

# rawg API info :
https://rawg.io/@avadhutproject123/apikey

# rawg API doc :
- https://rawg.io/apidocs
- https://api.rawg.io/docs/#operation/games_list
