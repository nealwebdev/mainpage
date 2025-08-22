# Futuristic Freelancer Website

A modern, animated website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features a futuristic design with smooth animations, radial navigation, and a command palette.

## Features

- 🚀 **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- ✨ **Smooth Animations**: Framer Motion powered animations and transitions
- 🎯 **Smart Navigation**: Radial wheel navigation + command palette (⌘K or /)
- 📱 **Responsive Design**: Mobile-first approach with beautiful mobile experience
- 🎨 **Futuristic UI**: Glass morphism, gradients, and modern design patterns
- ⚡ **Performance**: Optimized for Core Web Vitals and accessibility

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd futuristic-freelancer-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/               # Reusable components (can be added)
└── lib/                     # Utility functions (can be added)
```

## Key Components

### Radial Navigation
- Fixed bottom-right circular navigation
- Smooth spring animations
- Responsive design with mobile considerations

### Command Palette
- Press `/` or `⌘K` to open
- Search through sections
- Keyboard navigation support

### Sections
- **Home**: Hero section with call-to-action
- **Work**: Portfolio showcase with project cards
- **Services**: Service offerings in a grid layout
- **About**: Personal information and skills
- **Contact**: Contact form with social links

## Customization

### Personal Information
Update the following in `src/app/page.tsx`:
- Name and title in the header
- Contact information
- Social media links
- Project descriptions

### Styling
- Modify `gradients` object for color schemes
- Update Tailwind classes for layout changes
- Customize animations in Framer Motion components

### Content
- Replace placeholder text with your actual content
- Add real project images and descriptions
- Update services and skills lists

## Technologies Used

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Performance

- Optimized images and assets
- Efficient animations with Framer Motion
- Minimal bundle size
- SEO optimized with proper meta tags

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help, please open an issue on GitHub.

---

Built with ❤️ using Next.js and modern web technologies.
