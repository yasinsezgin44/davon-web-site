# Davon.Health Website

This is the frontend implementation of the Davon.Health website, a healthcare EAM/CMMS platform built with [Next.js](https://nextjs.org).

## 🚨 Important: Maintenance Guide

**Before making any changes or deploying, read [MAINTENANCE.md](MAINTENANCE.md)** - it contains critical update checklists for dates, URLs, content placeholders, and deployment requirements.

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

## Monitoring & Tools

#### SEO Monitoring Tools
- **Google Search Console**: Free, official Google tool

#### GEO Testing Tools
- **Ubersuggest**: For testing Generative Engine Optimization (similar to SEO but for AI)

#### AI Visibility Monitoring Tools
- **Google Rich Results Test**: Structured data validation
- **Schema.org Validator**: Schema markup testing
- **Custom AI Testing**: Manual testing with ChatGPT, Claude, Gemini

#### Website Development Tools
- **V0**: For getting website templates and applying style changes
- **Vercel**: Deployment platform (Yasin Sezgin Davon Google Account is used)

#### Image Generation Tools
- **Gemini Nano Banana Pro**: For creating images (Yasin Sezgin Davon Google Account is used)
- **Not recommended**: Grok image and Sora are not good for image generation
- **Alternative**: Midjourney keeps consistency of images but does not have a free tier

## Maintenance Guide

This guide outlines what needs to be updated when content changes, dates need refreshing, or new features are added.

### Date Updates (Update Monthly)

#### Files Requiring Date Updates:
- **`src/app/page.tsx`**: FAQPage structured data dates
  ```typescript
  datePublished: "2025-11-24",  // Keep as original publication date
  dateModified: "2025-11-24",   // Update to current date when content changes
  ```
- **`public/sitemap.xml`**: Last modified date
  ```xml
  <lastmod>2025-11-24T00:00:00+00:00</lastmod>  <!-- Update to current date -->
  ```

#### When to Update Dates:
- **Content Changes**: FAQ answers, descriptions, or major content updates
- **New Features**: Adding new sections or functionality
- **Monthly Review**: At minimum, update `dateModified` monthly for freshness signals

### URL Updates (Update on Domain Changes)

#### Files Requiring URL Updates:
- **`public/robots.txt`**: Sitemap URL
  ```txt
  Sitemap: https://davon.health/sitemap.xml  # Update domain
  ```
- **`public/sitemap.xml`**: Page URLs
  ```xml
  <loc>https://davon.health/</loc>  # Update domain
  ```
- **`src/app/layout.tsx`**: Metadata URLs
  ```typescript
  metadataBase: new URL("https://davon.health"),  # Update domain
  canonical: "/",  # Usually stays the same
  ```
- **`src/app/page.tsx`**: Structured data URLs
  ```typescript
  url: "https://davon.health",  # Update domain in all schemas
  ```

### Content Placeholders to Fill

#### High Priority (Fill Before Launch):
- **`src/components/hero-section.tsx`**: Hero headline and description
- **`src/components/features-section.tsx`**: Feature descriptions and benefits
- **`src/components/testimonials-section.tsx`**: Customer testimonials and logos
- **`src/components/cta-section.tsx`**: Call-to-action messaging

#### Medium Priority (Fill Within First Month):
- **`src/components/roi-calculator-section.tsx`**: ROI calculation logic and examples
- **`src/components/ai-team-section.tsx`**: AI team information and credentials
- **`src/components/healthcare-support-section.tsx`**: Support details and SLAs

#### Low Priority (Fill As Available):
- **`src/components/problem-solution-section.tsx`**: Case studies and examples
- **`src/components/stats-column.tsx`**: Performance metrics and statistics

### Image Optimization Checklist

#### Images Requiring Updates:
- **`/public/home-circle.png`**: Hero/Open Graph image (1200x630px recommended)
- **`/public/logo-white.webp`**: Logo for structured data (should be WebP format)
- **`/public/mri-chaos.png`**: Problem/solution imagery
- **`/public/calm-mri.png`**: Solution/results imagery

### SEO Meta Tags Updates

#### When Content Changes:
- **`src/app/layout.tsx`**: Update title and description if main value proposition changes
  ```typescript
  title: "Updated Title - AI-Powered Healthcare Equipment Monitoring",
  description: "Updated compelling description with new keywords",
  ```

#### Keyword Updates:
- Add new primary keywords to `keywords` array
- Update Open Graph and Twitter meta descriptions
- Ensure keywords appear naturally in H1, H2, and early content

### Structured Data Maintenance

#### FAQ Updates:
- **`src/app/page.tsx`**: Update FAQ data array when adding new questions
  ```typescript
  const faqData = [
    {
      question: "New question here?",
      answer: "Comprehensive answer here..."
    }
  ];
  ```

#### Organization Updates:
- Update contact information, social media links, or company description
- Add new social media profiles to `sameAs` array
- Update logo URL if company branding changes

#### Content Changes Requiring Schema Updates:
- [ ] New service offerings → Update WebSite/Service schemas
- [ ] New team members → Update Organization/Person schemas
- [ ] New locations → Update Organization/LocalBusiness schemas
- [ ] New products → Update Product/Service schemas

### llms.txt Maintenance

#### Update Triggers:
- [ ] New product features or services
- [ ] Company milestones or achievements
- [ ] New team members or partnerships
- [ ] Technology stack changes
- [ ] Contact information updates

#### Update Process:
1. Review AI model instructions for accuracy
2. Update technical specifications
3. Add new industry partnerships
4. Refresh competitive advantages
5. Update contact and resource links

### Performance Monitoring

#### Monthly Checks:
- [ ] Core Web Vitals scores (Lighthouse)
- [ ] Page load speeds (<3 seconds target)
- [ ] Mobile usability (Google Search Console)
- [ ] Structured data validation (Rich Results Test)

#### SEO Performance Monitoring:
- [ ] Keyword rankings (SEMrush/Ahrefs)
- [ ] Organic traffic trends
- [ ] Backlink profile health
- [ ] Rich snippet appearances

### Content Freshness Schedule

#### Daily/Weekly:
- [ ] Check for broken links
- [ ] Review Google Search Console for crawl errors
- [ ] Monitor Core Web Vitals regressions

#### Monthly:
- [ ] Update `dateModified` in structured data
- [ ] Review and update meta descriptions
- [ ] Check for outdated statistics or information
- [ ] Audit internal linking structure

#### Quarterly:
- [ ] Comprehensive content audit
- [ ] Keyword performance review
- [ ] Competitor analysis
- [ ] Technology stack updates

### Deployment Checklist

Before deploying to production:

- [ ] Update domain URLs in `robots.txt` and `sitemap.xml`
- [ ] Update `url` field in FAQPage structured data
- [ ] Verify all images load correctly
- [ ] Test structured data validation
- [ ] Submit sitemap to Google Search Console and Bing Webmaster Tools
- [ ] Verify robots.txt is accessible
- [ ] Test llms.txt content for accuracy
- [ ] Update `dateModified` fields to deployment date
- [ ] Test all meta tags and Open Graph previews
- [ ] Verify mobile responsiveness
- [ ] Check for console errors

## Project Structure

- `src/app/` - Next.js app router pages and layouts
- `src/components/` - Reusable React components
- `src/components/ui/` - UI component library (Radix UI)
- `src/lib/` - Utility functions and configurations
- `public/` - Static assets and images
  - `robots.txt` - Search engine crawling instructions
  - `sitemap.xml` - XML sitemap for search engines
  - `llms.txt` - AI context file for Large Language Models

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
