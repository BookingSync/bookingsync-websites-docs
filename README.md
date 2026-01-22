# Smily Websites Documentation

This website is built using [Docusaurus](https://docusaurus.io/), a modern static site generator optimized for documentation.

## Overview

This repository contains the source code for the Smily websites documentation, including:

- Theme structure and templates
- Liquid tags, filters, and objects reference
- Examples and usage patterns

## Getting Started

### Prerequisites

- Node.js (version 20 or higher)
- pnpm

```bash
corepack enable
```

### Installation

```bash
pnpm install
```

### Local Development

```bash
pnpm start
```

This command starts a local development server and opens a browser window. Most changes are reflected live without restarting the server.

### Build

```bash
pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Preview Build

```bash
pnpm serve
```

This command serves the built website locally for preview.

## Search Functionality

This documentation site uses [@easyops-cn/docusaurus-search-local](https://github.com/easyops-cn/docusaurus-search-local) for local search functionality without requiring external services.

The search configuration is defined in `docusaurus.config.js` and the search index is generated during `pnpm build`.

## Documentation Structure

- `/docs/reference/` - Templates, objects, tags, and filters

## Deployment

This repository uses GitHub Actions to build and deploy the Docusaurus site to GitHub Pages. The workflow is configured in `.github/workflows/deploy.yml`.

## Related Resources

- [Smily API Documentation](https://developers.bookingsync.com/reference)
- [Smily Engineering Blog](https://www.smily.com/engineering)
- [Smily.com](https://smily.com)
