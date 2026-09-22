# Unbound Studios Website

> **⚠️ ARCHIVED:** This site is retired. `unboundapps.com` now permanently redirects to
> [growwithunbound.com](https://growwithunbound.com). The active site source is at
> `/Users/CaseyRing/unbound-studios-dev/growwithunbound`. See [CLAUDE.md](CLAUDE.md) for details.
> Do not deploy this repo to production without explicit instruction.

The official website for Unbound Studios - building lean, ethical, and impactful digital products that solve real problems in overlooked markets.

## About

This is a static landing page showcasing Unbound Studios' mission, approach, and values. The site emphasizes our commitment to:

- Lean Development
- Rapid Validation
- Ethical Design
- Overlooked Markets

## Current Tech Stack

- Pure HTML5 with embedded CSS
- No external dependencies
- Mobile-responsive design
- Static site (no build process required)

## Future Development

This static site will be migrated to a modern tech stack in the next development phase, including:

- React with TypeScript
- Vite for build tooling
- Modern component architecture
- Enhanced interactivity and features

See [CLAUDE.md](CLAUDE.md) for the planned tech stack and development workflow.

## How to Run

Simply open `index.html` in a web browser. No build process or dependencies required.

For local development with live reload, you can use any static file server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (if http-server is installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000` in your browser.

## Deployment

This site can be deployed to any static hosting service:

- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any web server

Simply upload all HTML files to your hosting provider.

## Project Structure

```
unbound-website/
├── index.html          # Main landing page
├── privacy.html        # Privacy policy (placeholder)
├── terms.html          # Terms of service (placeholder)
├── README.md           # This file
├── LICENSE             # MIT License
├── CLAUDE.md           # Development workflow and future tech stack
└── .gitignore          # Git ignore rules
```

## Contact

For inquiries: hello@unboundstudios.com

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

© 2025 Unbound Studios. All rights reserved.
