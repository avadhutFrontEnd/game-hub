# game-hub
react project game-hub

# Commit message format : 
[Course: 2. React 18 for Intermediate Topics > 2. Fetching and Updating Data with React Query (3h)] [Video: #28-Exercise-Creating-a-Reusable-API-Client_mp4_5min_44sec] - feat: Centralize data fetching logic using generic APIClient class

## feat: Centralize data fetching logic using generic APIClient class

**Refactor:**

* **APIClient (`api-client.ts`):**
    * Refactored `api-client.ts` to export a **generic `APIClient<T>` class** instead of the default Axios instance.
    * The class encapsulates the common logic of calling `axiosInstance.get`, handling the `FetchResponse<T>` type, and extracting the result (`.then(res => res.data)`).
    * Added an optional `config: AxiosRequestConfig` parameter to `getAll` to support passing query string parameters (used for filtering and sorting).
    * Used **arrow function syntax** for `getAll` to correctly bind `this.endpoint`.
* **Hooks:**
    * Updated `useGenres.ts`, `usePlatforms.ts`, and `useGames.ts` to instantiate `APIClient<T>` for their respective endpoints.
    * Replaced the inline `queryFn` logic with a reference to **`apiClient.getAll`** (for genres and platforms).
    * For `useGames.ts`, `queryFn` was wrapped in an arrow function to pass the **`gameQuery` parameters** as the configuration object to `apiClient.getAll`.

**Benefit:** This change removes data fetching and response processing duplication from the individual hooks, making the data layer cleaner and easier to maintain.

# my-github Account : 
https://github.com/avadhutFrontEnd/game-hub/

# code-with-mosh Account : 
https://github.com/mosh-hamedani/game-hub

# rawg API info :
https://rawg.io/@avadhutproject123/apikey

# rawg API doc :
- https://rawg.io/apidocs
- https://api.rawg.io/docs/#operation/games_list
