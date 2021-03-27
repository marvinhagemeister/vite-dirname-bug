# Vite plugin dirname bug

## Expected Result

Using `__dirname` inside a plugin points to the dirname of that file instead of the dirname of `vite.config.ts`.

## Actual Result

`__dirname` points to the directory that `vite.config.ts` resides in, regardless of where the plugin file is placed.

## Steps to reproduce:

1. Clone this repo
2. Run `npm install`
3. Run `npm start` -> Check terminal output
