# Requirements

Build Auth App using `Next.js` and `react-hook-form`.

- Build UI components similar to figma wireframe, but not need to be pixel-perfect.
- Build backend API endpoint just passing the request body data again to client.

# Tech-stacks

`Next.js`, `Typescript`, `TailwindCSS`, `react-hook-form`

# Challenges

Before getting direct access to the request body in API endpoint, the process of parsing the request object to json format is required.

```javascript
const data = await req.json();
```

# Instruction to run the app

This app is Next App.

Should run `npm run dev` and this app will run on `http://localhost:3000`
