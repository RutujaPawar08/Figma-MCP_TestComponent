
# React Loader Animation Component

A reusable, customizable, and accessible loader animation built with React.
Designed from Figma, this component is made to test if it matches SAS React library prerequisites and is production-ready for integration into any design system or component library.

---

## Features

- ⚡ **Production-ready**: Built with React, CSS, and PropTypes for type safety.
- 🎨 **Customizable**: Change size, color, and animation speed via props.
- ♿ **Accessible**: Includes `role="status"` and `aria-label="loading"` for screen readers.
- ♻️ **Reusable**: Import and use in any React project.
- 🧪 **Tested**: Includes Jest/RTL tests for rendering and props.
- 📚 **Storybook**: Example stories for all variants and usage.

---

## Project Structure

```
figma-mcp/
├── package.json
├── vite.config.js
├── src/
│   ├── App.jsx
│   ├── index.js                # Re-exports Loader for consumers
│   ├── components/
│   │   └── Loader/
│   │       ├── Loader.jsx      # Loader component (with PropTypes, accessibility, theming)
│   │       ├── Loader.css      # Scoped CSS for loader animation
│   │       ├── Loader.test.jsx # Jest/RTL tests
│   │       ├── Loader.stories.jsx # Storybook stories
│   │       └── index.js        # Local export
│   └── ...
└── ...
```

---

## Usage

Import and use the Loader in your React app:

```jsx
import { Loader } from './index';

function App() {
	return <Loader size={48} color="#333" speed={1.5} />;
}
```

### Props

| Prop      | Type              | Default    | Description                        |
|-----------|-------------------|------------|------------------------------------|
| size      | number \| string  | 40         | Loader size (px or CSS units)      |
| color     | string            | #333333    | Loader color (CSS/SVG fill)        |
| speed     | number            | 1.2        | Animation speed (seconds)          |
| className | string            | ""         | Additional class for styling       |

---

## Development & Testing

- `npm install` to install dependencies
- `npm run dev` to start the dev server
- `npm run build` to build for production
- `npm run lint` to lint code
- Run tests with your preferred test runner (Jest/RTL)

---

## Figma Design

This loader was designed in Figma and built to match SAS React library prerequisites.

---


