# Davon.Health Website

This is the frontend implementation of the Davon.Health website, a healthcare EAM/CMMS platform built with [Next.js](https://nextjs.org).

## About Davon.Health

Davon.Health provides the EAM/CMMS platform for healthcare institutions. Manage critical assets, maintain audit-proof compliance, and protect patient outcomes with our comprehensive healthcare asset management solution.

## SEO & Structured Data

This website implements comprehensive SEO optimization and Schema.org structured data for better search engine visibility and AI model understanding.

### Implemented Schema.org Features

- **FAQPage Schema**: Complete FAQ structured data following [Schema.org FAQPage](https://schema.org/FAQPage) specification
- **JSON-LD Format**: Structured data implemented using JSON-LD for optimal search engine parsing
- **Rich Snippets**: FAQ content eligible for Google/Bing rich snippets and featured snippets

### SEO Files

- **`public/robots.txt`**: Search engine crawling instructions
- **`public/sitemap.xml`**: XML sitemap for search engine discovery
- **`public/llms.txt`**: AI context file for Large Language Models

### Structured Data Validation

The FAQPage schema includes:
- `@context`: `"https://schema.org"`
- `@type`: `"FAQPage"`
- `name`: Page title
- `description`: Page description
- `url`: Canonical URL
- `datePublished` & `dateModified`: Content timestamps
- `publisher`: Organization information
- `mainEntity`: Array of Question/Answer pairs

Each FAQ entry follows the Question schema with:
- `@type`: `"Question"`
- `name`: Question text
- `acceptedAnswer`: Answer object with `@type`: `"Answer"` and `text`

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Animations:** Framer Motion, GSAP
- **Deployment:** Vercel
- **SEO:** Schema.org structured data, JSON-LD

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
# or
yarn install
yarn dev
# or
pnpm install
pnpm dev
# or
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Testing Structured Data

### Local Testing (Without Deployment)

1. **Google Rich Results Test**: Copy the JSON-LD from your page source and paste into [Google's Rich Results Test](https://search.google.com/test/rich-results)
2. **Schema.org Validator**: Use the [Schema.org validator](https://validator.schema.org/) to validate markup
3. **View Page Source**: Check that `<script type="application/ld+json">` contains valid JSON

### Post-Deployment Testing

1. **Submit to Search Consoles**:
   - [Google Search Console](https://search.google.com/search-console)
   - [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. **Test Live URLs**:
   - `https://davon.health/robots.txt`
   - `https://davon.health/sitemap.xml`
   - `https://davon.health/llms.txt`
3. **Rich Results Testing**: Use live URLs in Google's Rich Results Test

## Deployment Checklist

Before deploying to production:

- [ ] Update domain URLs in `robots.txt` and `sitemap.xml`
- [ ] Update `url` field in FAQPage structured data
- [ ] Verify all images load correctly
- [ ] Test structured data validation
- [ ] Submit sitemap to Google Search Console and Bing Webmaster Tools
- [ ] Verify robots.txt is accessible
- [ ] Test llms.txt content for accuracy

## Project Structure

- `src/app/` - Next.js app router pages and layouts
- `src/components/` - Reusable React components
- `src/components/ui/` - UI component library (Radix UI)
- `src/lib/` - Utility functions and configurations
- `public/` - Static assets and images
  - `robots.txt` - Search engine crawling instructions
  - `sitemap.xml` - XML sitemap for search engines
  - `llms.txt` - AI context file for Large Language Models

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
