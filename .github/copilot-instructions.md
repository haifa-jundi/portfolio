# Copilot Instructions

## Project Overview
This is a React + Three.js portfolio website featuring 3D interactive elements, built with Vite, Tailwind CSS, and deployed to GitHub Pages. The site showcases work experience, projects, and includes a sophisticated 3D hacker room environment.

## Architecture & Key Components

### Main Structure
- **Single-page app** with section-based navigation (`src/sections/`)
- **3D rendering** via React Three Fiber with `@react-three/drei` utilities
- **Responsive design** using `react-responsive` media queries for mobile/tablet/desktop
- **Asset management** through utility functions for GitHub Pages deployment

### Critical Files
- `src/constants/index.js` - Central configuration for projects, navigation, work experience, and responsive sizing
- `src/utils.js` - Asset path resolution for GitHub Pages (`BASE_URL` handling)
- `src/components/HackerRoom.jsx` - Main 3D scene component using GLTF models
- `src/sections/Hero.jsx` - 3D canvas implementation with camera controls

## Development Patterns

### 3D Scene Management
```javascript
// Always wrap 3D components in Suspense with CanvasLoader
<Canvas>
  <Suspense fallback={<CanvasLoader />}>
    <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} />
  </Suspense>
</Canvas>

// Use calculateSizes for responsive 3D positioning
const sizes = calculateSizes(isSmall, isMobile, isTablet);
```

### Asset Path Resolution
```javascript
// Use getAssetPath for all public assets to ensure GitHub Pages compatibility
const texture = useTexture(getAssetPath('textures/desk/monitor.png'));
useGLTF.preload(getAssetPath('models/hacker-room.glb'));
```

### Responsive Patterns
```javascript
// Standard media query setup across components
const isSmall = useMediaQuery({ maxWidth: 440 });
const isMobile = useMediaQuery({ maxWidth: 768 });
const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
```

## Styling Conventions

### Tailwind Utilities
- `c-space` - Consistent horizontal padding (sm:px-10 px-5)
- `text-gray_gradient` - Brand gradient text styling
- Custom color palette with `black-{100-600}` and `white-{500-800}` variants
- `hero_tag`, `head-text`, `nav-ul/li` - Component-specific classes

### Component Structure
- Sections use `id` attributes for smooth scroll navigation
- 3D scenes positioned with `absolute inset-0` overlays
- Consistent `z-index` layering for UI over 3D content

## Build & Deployment

### Development
```bash
npm run dev          # Vite dev server
npm run build        # Production build
npm run preview      # Preview production build
```

### GitHub Pages Deployment
```bash
npm run deploy       # Builds and deploys to gh-pages branch
```
**Note**: `homepage` field in package.json must match GitHub Pages URL

### Key Dependencies
- **Three.js ecosystem**: `three`, `@react-three/fiber`, `@react-three/drei`
- **Animation**: `gsap` with `@gsap/react` wrapper
- **Email integration**: `@emailjs/browser` for contact forms
- **Analytics**: `react-ga4` (initialized with tracking ID in App.jsx)

## Data Management
- All content data centralized in `src/constants/index.js`
- Projects include video textures, logos, and interactive elements
- Work experience with animation types for 3D character animations
- Navigation configured with hash-based routing for smooth scrolling

## Common Patterns
- **GLTF Models**: Auto-generated components from `gltfjsx` with material overrides
- **Texture Loading**: Use `useTexture` hook with `getAssetPath` wrapper
- **State Management**: Simple `useState` and custom hooks (see `useAlert`)
- **Performance**: Preload 3D assets and use `Leva` controls (hidden in production)