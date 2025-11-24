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

## SEO & AI Visibility Scoring

### SEO Performance Metrics

#### 1. **Technical SEO Score** (0-100)
**Tools**: Google PageSpeed Insights, GTmetrix, WebPageTest
- **Core Web Vitals**: LCP <2.5s, FID <100ms, CLS <0.1
- **Mobile Usability**: Mobile-friendly test score
- **HTTPS**: SSL certificate validation
- **Page Speed**: Load time <3 seconds

#### 2. **On-Page SEO Score** (0-100)
**Tools**: SEMrush, Ahrefs, Screaming Frog
- **Title Optimization**: 30-60 characters, includes target keyword
- **Meta Description**: 120-160 characters, compelling CTA
- **Heading Structure**: H1, H2, H3 hierarchy
- **Keyword Optimization**: Primary keyword in first 100 words
- **Internal Linking**: 2-3 internal links per page
- **Image Optimization**: Alt text, compressed, WebP format

#### 3. **Content Quality Score** (0-100)
**Tools**: SurferSEO, Clearscope, MarketMuse
- **Content Length**: 1,500+ words for pillar content
- **Keyword Density**: 0.5-2.5% for target keywords
- **Readability**: Flesch score >60
- **Topic Coverage**: Comprehensive topic clusters
- **User Intent**: Matches search intent perfectly
- **Freshness**: Updated within 6 months

#### 4. **Backlink Profile Score** (0-100)
**Tools**: Ahrefs, Moz, Majestic
- **Domain Authority**: 30+ for new sites
- **Referring Domains**: Diverse, authoritative sources
- **Anchor Text Diversity**: 30-70% branded, 10-30% exact match
- **Backlink Quality**: Low spam score (<30%)
- **Growth Rate**: Steady increase over time

#### 5. **Search Rankings Score** (0-100)
**Tools**: Google Search Console, SEMrush
- **Keyword Rankings**: Target keywords in top 10
- **Featured Snippets**: Capturing rich results
- **Local Pack**: For location-based searches
- **Impression Share**: Percentage of available impressions captured

### AI Visibility Scoring Framework

#### 1. **Structured Data Completeness** (0-100)
**Assessment Criteria**:
- **Schema.org Coverage**: Multiple schema types implemented
- **Validation**: All schemas pass Google's Rich Results Test
- **Depth**: Comprehensive property usage (name, description, dates, etc.)
- **Accuracy**: All data matches actual content
- **Freshness**: Timestamps are current and accurate

**Scoring Formula**:
```
Score = (Schema Types × 20) + (Validation Pass Rate × 30) + (Property Completeness × 30) + (Data Accuracy × 20)
```

#### 2. **LLMs.txt Quality Score** (0-100)
**Assessment Criteria**:
- **Content Structure**: Clear sections and hierarchy
- **Information Depth**: Comprehensive coverage of business
- **AI Instructions**: Clear guidelines for AI models
- **Contact Information**: Complete and accurate
- **Technical Details**: Appropriate level of technical information
- **Update Frequency**: Regularly maintained and updated

**Scoring Formula**:
```
Score = (Structure × 20) + (Depth × 25) + (AI Guidelines × 20) + (Technical Accuracy × 20) + (Freshness × 15)
```

#### 3. **Content AI-Readiness Score** (0-100)
**Assessment Criteria**:
- **Semantic HTML**: Proper use of semantic elements
- **Content Clarity**: Clear, unambiguous language
- **Question Coverage**: Addresses common user questions
- **Structured Content**: Logical information hierarchy
- **Accessibility**: Screen reader friendly markup
- **Mobile Optimization**: Responsive design implementation

**Scoring Formula**:
```
Score = (Semantic Markup × 20) + (Content Clarity × 25) + (Question Coverage × 20) + (Structure × 15) + (Accessibility × 20)
```

#### 4. **AI Search Performance Score** (0-100)
**Assessment Criteria**:
- **Rich Snippets**: FAQ, How-to, and other rich results
- **Voice Search**: Question-based content optimization
- **Conversational Content**: Natural language optimization
- **Entity Recognition**: Clear entity relationships
- **Contextual Relevance**: Content matches AI understanding patterns

**Scoring Formula**:
```
Score = (Rich Results × 30) + (Voice Optimization × 20) + (Conversational Content × 20) + (Entity Clarity × 15) + (Context Relevance × 15)
```

#### 5. **AI Integration Readiness Score** (0-100)
**Assessment Criteria**:
- **API Documentation**: Clear, comprehensive API docs
- **Data Structure**: Well-organized, machine-readable data
- **Integration Guides**: Step-by-step integration instructions
- **Developer Resources**: SDKs, code examples, tutorials
- **Webhook Support**: Real-time data integration capabilities

**Scoring Formula**:
```
Score = (API Docs × 25) + (Data Structure × 20) + (Integration Guides × 20) + (Dev Resources × 20) + (Webhooks × 15)
```

### Comprehensive Scoring Dashboard

#### Overall SEO Score (0-100)
```
Total SEO = (Technical × 0.25) + (On-Page × 0.25) + (Content × 0.25) + (Backlinks × 0.15) + (Rankings × 0.10)
```

#### Overall AI Visibility Score (0-100)
```
Total AI = (Structured Data × 0.25) + (LLMs.txt × 0.20) + (Content Readiness × 0.20) + (AI Search × 0.20) + (Integration × 0.15)
```

#### Combined Digital Visibility Score (0-100)
```
Combined Score = (SEO Score × 0.60) + (AI Visibility Score × 0.40)
```

### Monitoring & Tools

#### SEO Monitoring Tools
- **Google Search Console**: Free, official Google tool
- **Google Analytics 4**: User behavior and conversion tracking
- **SEMrush**: Comprehensive SEO suite
- **Ahrefs**: Backlink analysis and keyword tracking
- **Moz Pro**: SEO monitoring and reporting

#### AI Visibility Monitoring Tools
- **Google Rich Results Test**: Structured data validation
- **Schema.org Validator**: Schema markup testing
- **Custom AI Testing**: Manual testing with ChatGPT, Claude, Gemini
- **Rich Results Monitoring**: Track appearance in search results
- **Voice Search Testing**: Test with Google Assistant, Siri, Alexa

### Improvement Roadmap

#### Phase 1: Foundation (Weeks 1-4)
- [ ] Implement comprehensive structured data
- [ ] Create detailed llms.txt file
- [ ] Optimize meta tags and headings
- [ ] Submit to Google Search Console and Bing Webmaster Tools

#### Phase 2: Content Optimization (Weeks 5-8)
- [ ] Expand FAQ content with more questions
- [ ] Add how-to guides and tutorials
- [ ] Implement topic clusters and pillar content
- [ ] Optimize for voice search queries

#### Phase 3: Technical Enhancement (Weeks 9-12)
- [ ] Improve Core Web Vitals scores
- [ ] Implement advanced structured data (HowTo, Recipe, etc.)
- [ ] Add internal linking structure
- [ ] Optimize images and media

#### Phase 4: Authority Building (Weeks 13-16)
- [ ] Build high-quality backlinks
- [ ] Create shareable content resources
- [ ] Engage in industry partnerships
- [ ] Monitor and optimize rich results performance

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

#### Image Optimization Requirements:
- [ ] Convert to WebP format for better performance
- [ ] Add descriptive alt text to all images
- [ ] Optimize file sizes (<100KB for above-the-fold images)
- [ ] Create responsive image versions
- [ ] Update image references in structured data

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
