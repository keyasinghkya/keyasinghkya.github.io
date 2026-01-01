# keya singh 𓂃 ⌂ ོ☼ 𓂃

A Hugo-powered portfolio and blog documenting my art practice, projects, and thoughts.

## About

This website serves as:
- Portfolio showcasing video, live, and installation work
- Blog for notes, research, and reflections
- Documentation of my ongoing art practice

Built with [Hugo](https://gohugo.io/) and the [Blowfish theme](https://blowfish.page/).

## Tech Stack

- **Static Site Generator**: Hugo
- **Theme**: Blowfish
- **Deployment**: GitHub Pages
- **Repository**: https://github.com/keyasinghkya/keyasinghkya.github.io

## Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) (v0.115.0 or higher recommended)
- Git

## Local Development

1. **Clone the repository**
```bash
   git clone https://github.com/keyasinghkya/keyasinghkya.github.io.git
   cd keyasinghkya.github.io
```

2. **Install theme dependencies** (if not already included)
```bash
   hugo mod get -u
```
   Or if using git submodules:
```bash
   git submodule update --init --recursive
```

3. **Run the development server**
```bash
   hugo server -D
```
   The site will be available at `http://localhost:1313`

## Building

To build the static site:
```bash
hugo
```
This generates the site in the `/public` directory.

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the main branch.

**Live URL**: https://keyasinghkya.github.io

## Project Structure
```
.
├── config/              # Hugo configuration files
│   └── _default/        # Default config (hugo.yaml, params.toml, etc.)
├── content/             # Site content
│   ├── about.md
│   ├── posts/           # Blog posts
│   └── projects/        # Portfolio projects
│       ├── live/
│       ├── video/
│       ├── neither/
│       └── teaching/
├── layouts/             # Custom layout overrides
│   ├── index.html       # Homepage
│   ├── partials/
│   ├── projects/
│   ├── posts/
│   └── shortcodes/      # Custom shortcodes
├── static/              # Static assets
│   ├── images/
│   ├── pdfs/
│   ├── backgrounds/
│   └── gifs/
└── assets/              # Asset pipeline files
    └── css/
```

## Custom Shortcodes

This site includes several custom shortcodes:

- **`gallery`** - Image/video galleries with multiple layout options
- **`toc`** - Table of contents (floating or inline)
- **`vimeo`** - Embedded Vimeo videos (responsive, supports portrait/square)
- **`youtube`** - Embedded YouTube videos
- **`link-preview`** - Rich link preview cards
- **`related-links`** - Styled related links boxes
- **`pdf-link`** - Download links for PDFs

### Example Usage
```markdown
{{< gallery
  images="/images/pic1.jpg,/images/pic2.jpg"
  captions="First image|Second image"
  description="Photo series from..." >}}

{{< vimeo id="123456789" portrait="true" >}}

{{< link-preview
  url="https://example.com"
  title="Article Title"
  description="Brief description" >}}
```

## Content Management

### Adding a New Project

1. Create a new markdown file in the appropriate category:
```bash
   hugo new projects/video/my-new-project.md
```

2. Add frontmatter and content:
```yaml
   ---
   title: "Project Title"
   date: 2025-01-15
   medium: "video"
   duration: "10:00"
   status: completed
   featureimage: "/images/project-icon.png"
   categories:
     - video
   tags:
     - identity
     - found material
   ---
```

### Adding a Blog Post
```bash
hugo new posts/my-new-post.md
```

## Configuration Notes

- Site uses custom CSS overrides in `/assets/css/custom.css`
- Navigation menus configured in `/config/_default/menus.en.toml`
- Theme parameters in `/config/_default/params.toml`
- Markdown renderer settings in `/config/_default/markup.toml`

## Key Features

- **Masonry grid layouts** for project cards
- **Filtering system** by categories and tags
- **Full-page backgrounds** for project pages
- **Floating TOC** for longer articles
- **Custom 404 page**
- **Dark mode support**

## Known Issues / TODOs

- [ ] Add any known issues here
- [ ] List future improvements

## License

© 2025 Keya Singh. All rights reserved.

---

*Last updated: December 2025*
