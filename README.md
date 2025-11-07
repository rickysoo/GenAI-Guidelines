<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# GenAI University Onboarding

An interactive learning platform to help users understand GenAI guidelines through lessons and quizzes.

## Features

- 📚 Interactive learning guidelines
- 🎯 Multi-level quiz system
- 📊 Results tracking and review
- 🌙 Dark mode support
- 📱 Responsive design

## Run Locally

**Prerequisites:** Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deploy to GitHub Pages

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Setup Instructions:

1. Go to your repository **Settings** → **Pages**
2. Under "Build and deployment", select **Source**: "GitHub Actions"
3. Push your code to the `main` branch
4. The site will be automatically deployed to `https://<username>.github.io/GenAI-Guidelines/`

## Technology Stack

- React 19
- TypeScript
- Vite
- TailwindCSS
