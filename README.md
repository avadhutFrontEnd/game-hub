# game-hub
react project game-hub

# Commit message format : 
[Course: 2. React 18 for Intermediate Topics > 4. Routing with React Router (2h) ] [ Video: #22-Exercise-Fixing-the-NavBar_mp4_2min_32sec ] - Fix: Improve NavBar Navigation and Search Behavior

## Fixed two key navigation issues in the `<NavBar />` component to enhance user experience: logo click behavior and search submission flow.

---

### Key Fixes:

1.  ### Logo Click Redirection (`src/components/NavBar.tsx`)
    * The logo image was wrapped with the **`Link`** component from React Router DOM.
    * The `to` prop was set to the root path (`/`) so clicking the logo always returns the user to the home page.
    * Added **`objectFit='cover'`** to the Chakra `<Image>` component to fix the squashed aspect ratio issue after wrapping it in the link.

2.  ### Search Form Navigation (`src/components/SearchInput.tsx`)
    * When a search was performed from a sub-page (like the Game Detail Page), the search filter was correctly updated in the Zustand store, but the user remained on the sub-page.
    * The **`useNavigate`** hook was imported and used within the form submission handler.
    * After updating the search text in the store, the user is explicitly redirected to the home page:
        ```typescript
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate("/"); // <-- Redirects to the homepage where games are displayed
        }
        ```


# my-github Account : 
https://github.com/avadhutFrontEnd/game-hub/

# code-with-mosh Account : 
https://github.com/mosh-hamedani/game-hub

# rawg API info :
https://rawg.io/@avadhutproject123/apikey

# rawg API doc :
- https://rawg.io/apidocs
- https://api.rawg.io/docs/#operation/games_list
