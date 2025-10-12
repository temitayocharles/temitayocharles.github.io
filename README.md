# GitHub Landing Page

A modern, responsive landing page inspired by GitHub's design, built with vanilla HTML, CSS, and JavaScript.

## Features

- 🎨 **Modern Design**: Clean, professional layout inspired by GitHub
- 📱 **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Built with vanilla JavaScript for optimal speed
- 🎭 **Smooth Animations**: Intersection Observer API for scroll animations
- 🍔 **Mobile Navigation**: Hamburger menu for mobile devices
- 💻 **Code Block Animation**: Typing animation for the hero code block

## Project Structure

```
gh-landing-page/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
└── .github/
    └── copilot-instructions.md  # Copilot workspace instructions
```

## Getting Started

### Prerequisites

- A modern web browser
- A local web server (optional, for development)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/gh-landing-page.git
   cd gh-landing-page
   ```

2. Open the project:
   - **Option 1**: Simply open `index.html` in your web browser
   - **Option 2**: Use a local server (recommended for development):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have live-server installed)
     npx live-server
     
     # Using VS Code Live Server extension
     # Right-click on index.html and select "Open with Live Server"
     ```

3. Navigate to `http://localhost:8000` (if using a local server)

## Sections

- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **Features Section**: Highlight key platform capabilities
- **About Section**: Brief description of the platform
- **Footer**: Links and company information

## Customization

### Colors
The CSS uses CSS custom properties for easy theming. Key colors are defined in the `:root` selector:

```css
:root {
  --primary-color: #238636;
  --secondary-color: #656d76;
  --background-color: #fff;
  --text-color: #24292f;
}
```

### Content
- Update text content in `index.html`
- Modify styles in `styles.css`
- Add interactive features in `script.js`

### Adding New Sections
1. Add HTML structure in `index.html`
2. Style the section in `styles.css`
3. Add any JavaScript functionality in `script.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

### VS Code Extensions (Recommended)
- Live Server
- Prettier
- Auto Rename Tag
- CSS Peek

### Best Practices
- Use semantic HTML elements
- Follow BEM CSS methodology for class naming
- Keep JavaScript modular and well-commented
- Test responsiveness on various screen sizes

## Performance Optimization

- Optimized images (use WebP format when possible)
- Minified CSS and JavaScript for production
- Lazy loading for images below the fold
- Efficient font loading with `font-display: swap`

## Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: (none needed for static site)
3. Set publish directory: `/` (root)
4. Deploy automatically on git push

### Vercel
1. Import your GitHub repository
2. No build configuration needed
3. Deploy with zero configuration

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspiration from [GitHub](https://github.com)
- Icons from Unicode emoji
- Font: [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts

## Contact

- Your Name - your.email@example.com
- Project Link: [https://github.com/your-username/gh-landing-page](https://github.com/your-username/gh-landing-page)

---

Built with ❤️ using HTML, CSS, and JavaScript