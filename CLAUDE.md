# My name is Casey
This file provides guidance to Claude Code when working with this repository.

## Workflow Requirements
- Update CLAUDE.md before every git commit
- Always ask clarifying questions in planning mode

## Development Workflow
1. First think through the problem, read the codebase for relevant files, and write a plan to tasks/todo.md.
2. The plan should have a list of todo items that you can check off as you complete them, and for each todo include a short note about the quick checks you will run (view the page, test the form, check mobile view, etc.).
3. Before you begin working, check in with me and I will verify the plan.
4. **Build:** follow the plan exactly. For each todo, begin by running the quick checks you wrote into the plan, make the smallest change needed, then re-run those checks to confirm behavior.
5. Please every step of the way just give me a high level explanation of what changes you made.
6. Make every task and code change you do as simple as possible. We want to avoid making any massive or complex changes. Every change should impact as little code as possible. Everything is about simplicity.
7. **Verify:** after Build, perform a quick review. Check for console errors, test interactive elements, verify responsive design on mobile/tablet/desktop widths. If anything blocks verification (broken functionality, errors), report the failures and the minimal fix before pushing.
8. **Review & Teach:** add a review section in todo.md summarizing what changed, what was tested, and any follow-ups. Then include a teaching section written in the style of a senior engineer that explains: why changes were made, how the components work together, important design tradeoffs, how to test and extend the work, and any recommendations for improvements.
9. **Git Push:** push the verified changes and include the review notes in the commit message.

## Environment File Management
**⚠️ CRITICAL RULE**: Claude Code must NEVER directly modify or overwrite .env files.

### Environment Files
- `.env.local` - Active environment (gitignored)
- `.env.example` - Template with placeholder values

### Workflow for Environment Changes
1. **Never run `cp .env.* .env.local`** or any command that overwrites .env.local
2. When environment changes are needed:
   - Stop and explain what needs to change
   - Provide exact instructions for Casey to update the file
   - Wait for confirmation before proceeding

## Stack
- **Framework:** Next.js 16 (App Router, TypeScript strict)
- **Styling:** Tailwind CSS v4 (CSS-first config via `@theme` in globals.css)
- **Fonts:** Martian Mono (display/mono) + Figtree (body/sans) via `next/font/google`
- **Analytics:** PostHog (autocapture, session recordings, custom events)
- **Email:** Resend (contact form; falls back to console.log in dev without API key)
- **Deployment:** Vercel (live at unboundapps.com)

## Development Commands
- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Serve production build locally
- `npm run lint` - Run ESLint

## Quick Testing Checklist
Before marking work complete, verify:
- [ ] Page loads without console errors
- [ ] All interactive elements work (forms, buttons, links)
- [ ] Responsive design works on mobile (375px), tablet (768px), desktop (1440px)
- [ ] Forms validate correctly and show error states
- [ ] Images and assets load properly
- [ ] Page performance is reasonable (check Network tab)

## 🔒 Security Guidelines

### Critical Rules
- **Never commit API keys or secrets** - Use environment variables
- **Validate all form inputs** - Client-side AND server-side
- **Sanitize user-generated content** - Prevent XSS attacks
- **Use HTTPS in production** - No mixed content warnings

### Form Handling
- Always validate email format
- Limit text input lengths
- Show clear error messages
- Never trust client-side validation alone

### Environment Variables
- Keep `.env.local` in `.gitignore`
- Use `NEXT_PUBLIC_` prefix for public variables only
- Never expose API secrets to the client
- Document all required variables in `.env.example`

## Project Structure
```
app/
  layout.tsx          # Root layout with fonts, metadata, JSON-LD, PostHog
  providers.tsx       # PostHog client provider (autocapture + session recording)
  error.tsx           # Error boundary with retry button
  page.tsx            # Homepage (Hero, WorkGrid, Statement, Bros, Services, Team, CTA)
  not-found.tsx       # 404 page
  globals.css         # Tailwind v4 @theme + CSS custom properties + base styles
  icon.svg            # Favicon
  robots.ts           # robots.txt generator
  sitemap.ts          # sitemap.xml generator
  contact/page.tsx    # Contact page with form
  contact/action.ts   # Server action (Resend email / console stub)
  about/page.tsx      # About page
  services/page.tsx   # Services page: 4 collapsible <details> cards, order AI→Apps→Growth→Strategy, no number badges, first open
  privacy/page.tsx    # Privacy policy
  terms/page.tsx      # Terms of service
components/
  Header.tsx          # Fixed header with wordmark + nav + mobile hamburger menu (client component)
  Footer.tsx          # Footer with copyright + links
  Hero.tsx            # Hero section with CTAs
  WorkGrid.tsx        # Products grid (Sincere featured/in-dev, Apparel coming soon; no outbound links yet)
  Bros.tsx            # Social links section (Instagram, TikTok, X, YouTube)
  Statement.tsx       # Founders quote with accent line
  Services.tsx        # Homepage services teaser: sticky heading + 3 de-numbered cards (mirrors /services order)
  Team.tsx            # Team portraits + bios
  ContactCTA.tsx      # Closing CTA with background watermark
  ContactForm.tsx     # Contact form with client + server validation
  ScrollReveal.tsx    # Client component for scroll-triggered animations
content/
  projects.ts         # Typed product data (Sincere, Apparel) with honest status + tier
  services.ts         # Services copy: /services categories (servicesPageCategories) + homepage teaser (services). Voice: audience-open (companies, side projects, individuals leveling up at work) and partner-framed (coach/build-with-you, not only done-for-you); keep the "a few clients" scarcity. Mirror this in site.ts/homepage.ts/team.ts client-facing copy.
  bros.ts             # Social media links for Unbound Bros
public/
  images/portraits/   # casey.jpg, nick.jpg
  humans.txt          # Credits
```

## Design Tokens
Defined in `app/globals.css` via CSS custom properties and Tailwind v4 `@theme inline`.
Colors: green (#3b9c6f), blue (#4a8fd4), cream (#faf9f6), ink (#1a1a1a), plus tints.

## Design System
Read DESIGN_SYSTEM.md before any UI work. All styling decisions must follow the design system tokens and patterns. Do not improvise new values.

## Pre-Production Checklist
- [ ] All forms have proper validation
- [ ] Error states are user-friendly
- [ ] No console errors or warnings
- [ ] Mobile experience is smooth
- [ ] All environment variables documented
- [ ] Images optimized for web
- [ ] Accessibility basics covered (alt text, semantic HTML, keyboard navigation)