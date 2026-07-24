# Odyssey Off-Road — Contributors & Agent Briefing

> **For AI agents, developers, and contributors:** Read this entire document before making any changes to this repository. It contains the full context, rules, and intent behind every design and content decision on this site.

---

## What This Project Is

**odysseyoffroad.com** is the official website for Odyssey Off-Road LLC — a family-run business founded by Tyler and Kristen that designs and fabricates custom off-road trailer platforms for families, overlanders, and motorsports enthusiasts.

The site is a **static HTML/CSS/JS website** hosted on **Netlify**, with **Cloudflare** managing DNS. There is no backend framework, no build system, and no package manager. Every page is a plain HTML file. Styles live in a shared `styles.css`. JavaScript is inline or in a shared `main.js`.

---

## Repository Structure

```
/
├── index.html              # Homepage
├── our-story.html          # Our Story page
├── build-progress.html     # Prototype build progress (Gantt + stage cards)
├── trailers.html           # Trailers page (trim selector, color picker, add-ons, quote form)
├── field-notes.html        # Field Notes blog index page
├── contact.html            # Contact page (footer-only, not in nav)
├── posts/                  # Individual Field Notes blog posts
│   └── [post-slug].html    # One file per post
├── images/                 # All site images
│   ├── logo/               # Logo files (PNG transparent preferred)
│   ├── trailer/            # Trailer photos and renders
│   ├── founders/           # Tyler and Kristen photos
│   ├── build/              # Build progress stage photos
│   └── posts/              # Field Notes post images
├── css/
│   └── styles.css          # Single shared stylesheet for all pages
├── js/
│   └── main.js             # Shared JavaScript (nav, configurator, filters, forms)
├── netlify.toml            # Netlify configuration (redirects, headers, security)
├── README.md               # Setup and deployment instructions
└── CONTRIBUTORS.md         # This file
```

---

## Brand Identity — Do Not Change Without Approval

### Color System
These are the exact brand colors. Do not substitute, adjust, or add new colors without explicit approval from Tyler or Kristen.

| Variable | Hex | Usage |
|---|---|---|
| `--oo-dark` | `#1e2122` | Primary page background |
| `--oo-dark2` | `#252a2b` | Card backgrounds |
| `--oo-teal` | `#4aab96` | Primary accent, CTAs, labels, icons |
| `--oo-amber` | `#d4893a` | Secondary accent, Experience Program, pull quote borders |
| `--oo-amber-light` | `#e8a857` | Amber text on dark backgrounds |
| `--oo-cream` | `#f0ede6` | H1 headings and major headlines |
| `--oo-text` | `#e8e4dc` | Primary body text |
| `--oo-muted` | `#8a9090` | Secondary/supporting text |
| `--oo-muted2` | `#6a7070` | Tertiary text, disclaimers |
| `--oo-border` | `rgba(74,171,150,0.2)` | All card and section borders |

**Trailer powder coat colors (used in the configurator color picker only):**
- Black: `#1a1a1a`
- Grey: `#6b7280`
- Blue: `#1e4d8c`
- Green: `#1a4a2e`
- Red: `#8b1a1a`

### Typography
- **Font:** System sans-serif stack (`-apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif`)
- **H1:** 28–32px, font-weight 500, color `--oo-cream`
- **H2:** 20–24px, font-weight 500, color `--oo-cream`
- **H3:** 14–16px, font-weight 500, color `--oo-cream`
- **Body:** 14px, font-weight 400, color `--oo-muted`, line-height 1.8
- **Labels/overlines:** 11px, uppercase, letter-spacing 0.13em, color `--oo-teal`
- **Pull quotes:** 16–17px, italic, color `--oo-cream`, amber left border

### Logo
- The logo is a compass rose with mountain peaks in teal/amber on a dark background
- In the nav: displayed as a 38×38px circle (border-radius 50%) with a teal border
- Preferred file: transparent PNG (`/images/logo/FullLogo.png`)
- Fallback: JPG (`/images/logo/FullLogo.jpg`)
- **Never stretch, recolor, or reposition the logo**

---

## Site Architecture — Critical Rules

### Navigation (all pages)
The global nav appears identically on every page:
```
[Logo + "Odyssey Off-Road"] | Trailers | Customize | Our story | Field notes | [Join waitlist button]
```
- The active page link is highlighted in `--oo-teal` with `font-weight: 500`
- **"Contact" does NOT appear in the nav** — it is accessible via the footer only
- The "Join waitlist" button uses `--oo-teal` background, white text

### Footer (all pages)
```
[Logo] © 2025 Odyssey Off-Road | Instagram | YouTube | Contact | Privacy
```
- Footer background: `rgba(0,0,0,0.3)`
- All footer links in `--oo-muted`
- **Contact appears in the footer only — never in the nav**

### Page URLs
| Page | File | URL |
|---|---|---|
| Homepage | index.html | / |
| Trailers | trailers.html | /trailers |
| Our Story | our-story.html | /our-story |
| Build Progress | build-progress.html | /build-progress |
| Field Notes | field-notes.html | /field-notes |
| Contact | contact.html | /contact |
| Blog posts | posts/[slug].html | /posts/[slug] |

---

## Page-by-Page Purpose

### index.html — Homepage
**Purpose:** Convert visitors into waitlist signups. Introduce brand, product, founders, and Experience Program.

**Sections in order:**
1. Hero — tagline, two CTAs (Join waitlist + Try it first), Experience Program note, tags
2. Features — 6 cards (Fully customizable, Off-road capability, Power & solar, Modular storage, Made in USA, Support beyond delivery)
3. Founder story — Tyler & Kristen, pull quote, photo placeholder
4. Build progress — 3-card strip (Frame ✓, Suspension in progress, Solar upcoming) + Field Notes link
5. Experience Program callout — full section with pricing and checklist
6. Waitlist CTA — email capture

**Key copy rules:**
- Tagline: *"Engineered with purpose. Trusted wherever you go."* — do not change
- Experience Program CTA: *"Try it first — from $300/night →"*
- Waitlist headline: *"This isn't just a waitlist. It's where the relationship starts."*

---

### our-story.html — Our Story
**Purpose:** Build emotional trust through Tyler and Kristen's authentic origin story.

**Sections in order:**
1. Hero — "Built from experience. Driven by family."
2. Origin story — stranger validation, the decision to launch
3. Founders — Tyler (teal accent, "Founder & builder") + Kristen (amber accent, "Co-founder & the glue")
4. Why it exists — "Trailers are tools. Memories are the outcome."
5. Timeline — 2018–19 → 2024 LLC → Nov 2024 design → Early 2025 prototype → Coming soon
6. Waitlist CTA

**Key copy rules:**
- Tyler's pull quote: *"I didn't think much of it at first. But close friends kept saying — you should be selling these."*
- Kristen's pull quote: *"The brand lives in the build. The soul of it lives in the family."*
- Founder pull quote: *"We do what we say we'll do — even when it's harder, slower, or costs more."*

---

### build-progress.html — Prototype Build Progress
**Purpose:** Transparent, stage-by-stage prototype build journal. Updated as each stage completes.

**Sections in order:**
1. Hero — overall progress bar (~25% at launch)
2. Gantt chart — 8 stages across Nov 2024 – May 2025
3. Expandable stage cards — one per stage, click to expand
4. Waitlist CTA

**8 Build Stages:**
| # | Stage | Status at launch |
|---|---|---|
| 1 | Trailer Frame | ✅ Complete |
| 2 | Trailer Suspension | 🟡 In progress |
| 3 | Trailer Deck System | 🟡 In progress |
| 4 | Trailer Drawer Assembly | 🟡 In progress |
| 5 | Modular Storage | 🟡 In progress |
| 6 | Onboard Water System | 🟡 In progress |
| 7 | Power & Solar System | ⬜ Upcoming |
| 8 | Powder Coating & Finishes | ⬜ Upcoming |

**Status color coding:**
- Complete: teal dot + teal top border + "Complete" pill
- In progress: amber dot + amber top border + "In progress" pill
- Upcoming: grey dot + grey top border + "Upcoming" pill

---

### trailers.html — Trailers (Wix-simplified configurator)
**Purpose:** Present the four trim packages, enable selection and customization, introduce the Experience Program, and capture quote requests.

**Sections in order:**
1. Hero — "One platform. Four ways to build it."
2. Step 1: Trim cards (4 cards — Standard, Field, Expedition, Summit)
3. Step 2: Color picker (5 swatches — updates trim card preview colors)
4. Step 3: Add-on checklist (8 items — simple checkboxes, no dependency logic)
5. Selection summary bar — shows current trim + color + add-ons + quote button
6. Comparison table — feature grid across all 4 trims
7. Built on one platform — 3 shared-feature callouts
8. Experience Program section — condensed with $300/night pricing
9. Financing section — 3 info cards, NO stat boxes for APR/terms, legal disclaimer included
10. Quote request form — captures full build summary automatically

**Four trim packages:**
| Trim | Includes |
|---|---|
| Standard | Frame, drawer assembly, deck assembly, leaf spring suspension |
| Field | All Standard + side storage boxes + front storage box |
| Expedition | All Field + power & solar + onboard water + kitchenette |
| Summit ★ | All Expedition + air ride suspension + onboard air compressor |

**Summit is the prototype** — always display with amber border and "Prototype build" badge.

**8 Add-ons (no dependency logic in Wix version):**
- Modular storage boxes
- Power & solar system
- Onboard water system
- Kitchenette
- Onboard air compressor
- Awning / shelter
- Wheel & tire package
- Bike / gear rack system

**Add-on note:** The simplified Wix version uses a plain checkbox list. Tyler handles compatibility verification personally in his quote response. Do NOT add automated dependency logic unless specifically requested — that is a planned WordPress upgrade.

**Experience Program pricing:** $300/night, 3–4 night minimum, 7 night maximum. 100% credited toward purchase if ordered within 6 months.

**Financing rules:**
- NEVER include specific APR rates, term lengths, or monthly payment estimates
- These are determined by the third-party lender and must not be presented as guaranteed
- The legal disclaimer must always read: *"Financing is subject to lender approval. Rates and terms vary by applicant and are not guaranteed until the application is completed. Odyssey Off-Road does not markup financing rates."*

---

### field-notes.html — Field Notes Blog
**Purpose:** Living journal of build updates, trail reports, how-to guides, and behind-the-scenes content from Tyler and Kristen.

**Sections in order:**
1. Hero — "From the shop floor to the trail." + amber cross-link banner to Build Progress
2. Featured post — latest/most prominent post in large card
3. Post grid — 6 posts, filterable by category
4. "Following the build?" cross-link banner — links to Build Progress page
5. Category browse — 4 category cards
6. Newsletter signup

**4 Post categories:**
| Category | Badge color | Author |
|---|---|---|
| Build updates | Teal `#4aab96` | Tyler (T avatar, teal) |
| Trail reports | Amber `#d4893a` | Tyler or Kristen |
| Behind the scenes | Warm tan `#c8a97a` | Kristen (K avatar, amber) |
| How-to guides | Blue-grey `#8ab4d4` | Tyler |

**Author avatars:**
- Tyler: circular "T" badge, `rgba(74,171,150,0.2)` background, teal border
- Kristen: circular "K" badge, `rgba(212,137,58,0.2)` background, amber border

**Cross-links to Build Progress — required in two places:**
1. Amber banner in the hero section
2. "Following the build?" callout block between post grid and categories

**Adding new posts:** Create a new file in `/posts/[post-slug].html`. Add the post card to the grid in `field-notes.html`. Update the featured post if it is the most recent.

---

### contact.html — Contact Page
**Purpose:** Handle all inbound inquiries through a single smart form with conditional fields.

**Important:** Contact is NOT in the navigation. It is accessible via the footer link only.

**Sections in order:**
1. Hero — "Real questions. Real answers."
2. Two-column layout: left (info cards + social links) / right (smart form)
3. FAQ strip — 6 questions

**Form inquiry types (conditional fields):**
- Join the waitlist → trim selector + adventure description
- General inquiry → open text field
- Dealer / wholesale → business name, location, description
- Warranty / support → order number, issue description

**Response time stated on page:** 2 business days, personal response from Tyler (builds/quotes) or Kristen (orders/follow-up).

---

## Forms — Netlify Forms Setup

All forms use Netlify Forms. Every form must include:
```html
<form name="[form-name]" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="[form-name]" />
  <input type="hidden" name="bot-field" style="display:none;" />
  <!-- form fields -->
</form>
```

**Form names used across the site:**
| Form | Name attribute | Page |
|---|---|---|
| Waitlist signup | `waitlist` | index.html, our-story.html, build-progress.html |
| Quote request | `quote-request` | trailers.html |
| Rental booking | `rental-booking` | trailers.html |
| Contact form | `contact` | contact.html |
| Field Notes newsletter | `newsletter` | field-notes.html |

**Email notifications:** Configure in Netlify dashboard → Forms → [form name] → Notifications. Set to notify Tyler and Kristen's email addresses on every submission.

---

## Brand Voice — Writing Rules

These rules apply to ALL copy on the site. Do not rewrite copy without following them.

| Do | Don't |
|---|---|
| Write like Tyler talking to a friend on the trail | Use corporate or marketing language |
| Be specific and honest | Use vague superlatives ("best in class", "industry leading") |
| Use short punchy sentences for headlines | Write long complex headlines |
| Name Tyler and Kristen directly | Say "the team", "our experts", or "the founders" |
| Let values come through in copy naturally | Create a "Core Values" list anywhere on the site |
| Acknowledge the build is in progress openly | Oversell or hide limitations |

**Core values (never listed explicitly — woven into copy):**
1. Purpose-Driven Engineering — every feature must serve the journey
2. Trust Over Time — built for years, not seasons
3. Ownership Is a Relationship — delivery is the beginning, not the end
4. Family & Connection — trailers are tools, memories are the outcome
5. Integrity Without Compromise — we do what we say, even when it's harder

---

## SEO Rules

Every page must have:
```html
<title>[Page-specific title] | Odyssey Off-Road</title>
<meta name="description" content="[150-160 char description]" />
<meta property="og:title" content="[Same as title tag]" />
<meta property="og:description" content="[Same as meta description]" />
<meta property="og:image" content="/images/og-image.jpg" />
<meta property="og:url" content="https://www.odysseyoffroad.com/[page]" />
```

**Approved title tags:**
| Page | Title tag |
|---|---|
| Homepage | Odyssey Off-Road \| Custom Off-Road Trailers Made in USA |
| Trailers | Off-Road Trailers \| Standard, Field, Expedition & Summit |
| Our Story | Our Story \| Built by Adventurers, for Adventurers |
| Build Progress | Prototype Build Progress \| Odyssey Off-Road |
| Field Notes | Field Notes \| Off-Road Trailer Blog by Odyssey |
| Contact | Contact Odyssey Off-Road \| Get a Quote or Join Waitlist |

**Schema markup** is required on:
- Homepage: LocalBusiness schema
- Trailers page: ProductCollection schema

Full schema JSON-LD blocks are in each respective page file.

---

## Deployment

**Stack:**
- Hosting: Netlify (free tier)
- DNS: Cloudflare (free)
- Repository: GitHub
- Domain: odysseyoffroad.com

**Deployment flow:**
1. Push changes to the `main` branch on GitHub
2. Netlify detects the push and automatically deploys within 60 seconds
3. Changes are live at odysseyoffroad.com

**netlify.toml** handles:
- Clean URLs (no .html extensions in browser)
- Security headers
- 301 redirects if page URLs change

**Never push directly to `main` without testing first.** Use a branch and preview deploy.

---

## What NOT to Change Without Approval

- Any copy marked with pull quotes — these have been carefully crafted
- The tagline: *"Engineered with purpose. Trusted wherever you go."*
- The Experience Program pricing ($300/night) or credit terms (100%, 6 months)
- The financing disclaimer — legal language, must stay as written
- The color system — brand colors are derived from the logo
- Navigation structure — Contact is footer-only, this is intentional
- The 8 build stage names — these are the official stage names for the prototype

---

## Contacts

| Role | Person | Handles |
|---|---|---|
| Founder & builder | Tyler | Build questions, quotes, trailer specs, technical content |
| Co-founder | Kristen | Photography, social media, Field Notes posts, order follow-up |

**Business:** Odyssey Off-Road LLC
**Website:** https://www.odysseyoffroad.com
**Instagram:** @odysseyoffroad
**YouTube:** Odyssey Off-Road

---

*This document was last updated at site launch. If you make significant structural changes to the site, update this file to reflect them.*
