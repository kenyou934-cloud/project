# Kenzen L. Miñao - Portfolio

A modern, responsive portfolio website showcasing game development projects and skills.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [VS Code](https://code.visualstudio.com/)

## Installation

1. Open the project folder in VS Code:
   - File > Open Folder
   - Select the project directory

2. Open the integrated terminal in VS Code:
   - Press `Ctrl + ` ` (backtick)
   - Or go to Terminal > New Terminal

3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Project

### Development Mode

To run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

To create a production build:

```bash
npm run build
```

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/     # Vue components
│   ├── App.vue        # Main app component
│   ├── main.js        # Entry point
│   └── style.css      # Global styles
├── public/            # Static assets
├── index.html         # HTML template
└── package.json       # Project dependencies
```

## Technologies Used

- Vue 3
- Vite
- CSS3
- Font Awesome Icons
