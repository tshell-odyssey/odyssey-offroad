# Odyssey Off-Road — Website

**odysseyoffroad.com** — Custom off-road trailers built by Tyler and Kristen.

## Stack

- **Hosting:** Netlify (free tier)
- **DNS / Security:** Cloudflare
- **Repository:** GitHub (`tshell-odyssey`)
- **Languages:** HTML, CSS, JavaScript — no frameworks, no build tools

## Pages

| Page | File | URL |
|---|---|---|
| Homepage | `index.html` | / |
| Trailers | `trailers.html` | /trailers |
| Our Story | `our-story.html` | /our-story |
| Build Progress | `build-progress.html` | /build-progress |
| Field Notes | `field-notes.html` | /field-notes |
| Contact | `contact.html` | /contact |
| Blog posts | `posts/[slug].html` | /posts/[slug] |

## Forms

All forms use Netlify Forms. Submissions notify:
- `tshell@odysseyoffroad.com`
- `kshell@odysseyoffroad.com`

Configure notifications in: Netlify Dashboard → Forms → [form name] → Notifications

| Form name | Used on |
|---|---|
| `waitlist` | Homepage, Our Story, Build Progress |
| `quote-request` | Trailers page |
| `rental-booking` | Trailers page |
| `contact` | Contact page |
| `newsletter` | Field Notes |

## Updating Content

### Swap a photo
1. Compress the new image at [squoosh.app](https://squoosh.app) (target: under 200KB for heroes, under 150KB for posts)
2. Name the file descriptively (e.g. `odyssey-summit-trailer-desert.jpg`)
3. Upload to the correct folder in `/images/`
4. In the HTML file, find the `<img src="...">` tag and update the `src` to the new filename
5. Commit the change — Netlify deploys automatically in ~60 seconds

### Edit copy / text
1. Open the HTML file in GitHub's browser editor (click the file → click the pencil icon)
2. Find the text you want to change (use Ctrl+F / Cmd+F to search)
3. Make the change
4. Click "Commit changes" — Netlify deploys automatically

### Update build progress
Open `build-progress.html` and:
- Change a stage's status pill class: `pill-active` → `pill-done`
- Update the stage dot: `dot-active` → `dot-done`
- Change the border color: `rgba(212,137,58,0.5)` (amber) → `rgba(74,171,150,0.5)` (teal)
- Update the stage body text with new details
- Update the overall progress bar percentage in the hero section

### Add a Field Notes post
1. Create a new file in `/posts/` named `post-slug.html` (e.g. `suspension-complete.html`)
2. Copy an existing post file as a template
3. Update the title, content, author, date, and category
4. Add a post card to the grid in `field-notes.html`
5. Update the featured post section if this is the most recent post

## Deployment

Push to the `main` branch → Netlify auto-deploys in ~60 seconds.

Never push untested changes directly to `main`. Use a branch for significant changes.

## Brand Reference

Full brand rules, copy guidelines, and technical specifications: see `CONTRIBUTORS.md`

## Contact

- **Tyler** — tshell@odysseyoffroad.com (builds, quotes, technical)
- **Kristen** — kshell@odysseyoffroad.com (orders, social, Field Notes)
