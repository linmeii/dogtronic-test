# Dogtronic Test Assignment

This is a React+TypeScript+Tailwind project demonstrating a shop listing interface with optimized data fetching and rendering techniques.

## Instalation

1. Clone the repository
2. Install dependencies using `pnpm i` command
3. Start the development server using `pnpm dev` command

## Running tests

To run the tests use `pnpm test` command
⚠️ **Warning**: Set the delay in `./src/utils/constants.ts` to some realistic value such as 250ms for the sake of tests, you can raise it if you want to test the application with delay manually

## File structure

src/
├── api/                `# API related files and mock data`
├── components/         `# React components`
├── tests/              `# Test files`
├── utils/              `# Utility functions and constants`
├── App.tsx             `# Main application component`
└── main.tsx            `# Application entry point`

## Technical Choices
### Vite
- It's a standard now, I shouldn't really speak much about it. Good and reliable (although I've recently migrated a very old CRA+Craco project to Rspack and it is amazing as well).
### TanStack Query
- I've used it to simulate real scenario as passing the items from a state or variable would be a real shame
- It's easy to setup, and straight forward to use
### TanStack Virtual
- Whenever I think about large datasets to display, virtualization is a first thing that comes to my mind
- I've used it many times in my career already and it proves its performance
### BlurHash
- Enchances the user experience by showing the blurred version of a photo before-hand based on a hash
- Unfortunately, it requires separate backend (It would be possible using Next.js or any other 'fullstack framework') or a backend that sends the blurhashes alongside with image url
