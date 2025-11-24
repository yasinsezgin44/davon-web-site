# Maintenance Quick Reference

## 🚨 CRITICAL: Update Before Each Deploy

### 1. Date Updates (Required)
```bash
# Update these dates to current date before deploying
src/app/page.tsx:
  dateModified: "YYYY-MM-DD"

public/sitemap.xml:
  <lastmod>YYYY-MM-DDTHH:MM:SS+00:00</lastmod>
```

### 2. Domain URLs (Required for Production)
```bash
# Update all instances of domain URLs
public/robots.txt: Sitemap: https://YOUR_DOMAIN.com/sitemap.xml
public/sitemap.xml: <loc>https://YOUR_DOMAIN.com/</loc>
src/app/layout.tsx: metadataBase: new URL("https://YOUR_DOMAIN.com")
src/app/page.tsx: url: "https://YOUR_DOMAIN.com" (in all schemas)
```

## 📝 Content Placeholders to Fill

### HIGH PRIORITY (Fill Before Launch):
- [ ] Hero section headline and description
- [ ] Feature section descriptions
- [ ] Customer testimonials
- [ ] Call-to-action messaging
- [ ] Company contact information

### MEDIUM PRIORITY (Fill Within 1 Month):
- [ ] ROI calculator logic
- [ ] AI team credentials
- [ ] Support SLAs and details
- [ ] Case studies

### LOW PRIORITY (Fill As Available):
- [ ] Performance statistics
- [ ] Industry certifications
- [ ] Partnership logos

## 🖼️ Image Optimization Checklist

- [ ] Convert hero image to WebP format
- [ ] Add alt text to all images
- [ ] Optimize file sizes (<100KB for above-fold)
- [ ] Create responsive versions
- [ ] Update structured data image URLs

## 🔍 SEO Updates Needed

### When Content Changes:
- [ ] Update meta title/description if value prop changes
- [ ] Add new keywords to keywords array
- [ ] Update Open Graph descriptions
- [ ] Refresh FAQ structured data

### Monthly Maintenance:
- [ ] Update `dateModified` fields
- [ ] Review Google Search Console
- [ ] Check Core Web Vitals
- [ ] Audit for broken links

## 📊 Structured Data Updates

### FAQ Changes:
```typescript
// Add to faqData array in src/app/page.tsx
{
  question: "New question?",
  answer: "New comprehensive answer..."
}
```

### Organization Updates:
- [ ] Contact information changes
- [ ] New social media profiles
- [ ] Logo or branding updates
- [ ] New office locations

## 🤖 AI Visibility Updates

### llms.txt Updates Needed When:
- [ ] New product features released
- [ ] Company milestones achieved
- [ ] Team changes or expansions
- [ ] Technology stack changes
- [ ] New partnerships formed

## 🧪 Pre-Deploy Testing Checklist

- [ ] Structured data validates (Rich Results Test)
- [ ] All images load correctly
- [ ] Meta tags display properly
- [ ] Mobile responsive design
- [ ] No console errors
- [ ] Fast loading speeds (<3s)
- [ ] robots.txt accessible
- [ ] sitemap.xml accessible
- [ ] llms.txt content accurate

## 📈 Post-Deploy Monitoring

### Immediate (First 24 hours):
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Test live structured data
- [ ] Check for crawl errors

### Weekly Monitoring:
- [ ] Core Web Vitals scores
- [ ] Page load performance
- [ ] Mobile usability reports
- [ ] Rich snippet appearances

### Monthly Reviews:
- [ ] SEO performance metrics
- [ ] Organic traffic trends
- [ ] Keyword ranking changes
- [ ] Backlink profile health

## 🆘 Emergency Updates

### If Content Changes Mid-Month:
1. Update `dateModified` in structured data
2. Update sitemap `lastmod` date
3. Test structured data validation
4. Monitor for ranking impacts

### If Domain Changes:
1. Update all URL references
2. Update Google Search Console property
3. Submit new sitemap
4. Update social media links
5. Check for broken internal links

## 📞 Support Contacts

- **SEO Issues**: Check Google Search Console
- **Technical Issues**: Review deployment logs
- **Content Issues**: Refer to component documentation
- **Performance Issues**: Run Lighthouse audit

---

## ⚡ Quick Commands

```bash
# Test structured data locally
# Use Google Rich Results Test with your JSON-LD

# Check for linting errors
npm run lint

# Build for production
npm run build

# Test performance
npm run lighthouse
```

## 🎯 Success Metrics

- **SEO Score**: >85/100 (SEMrush/Ahrefs)
- **AI Visibility**: >90/100 (Custom scoring)
- **Core Web Vitals**: All "Good" or "Excellent"
- **Load Speed**: <3 seconds
- **Rich Snippets**: FAQ schema appearing in search
