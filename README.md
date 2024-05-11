# Multi-Tenant Application README

This multi-tenant application is built using Next.js and provides two separate applications accessible via different subdomains:

- **Admin Dashboard**: Accessible at admin.localhost:3000
- **Blogs Page**: Accessible at blogs.localhost:3000

## Overview

This application utilizes custom subdomains to distinguish between different apps hosted on the same server. Each subdomain corresponds to a specific application within the multi-tenant architecture.

This application also uses custom themes for different apps.

## Features

- **Admin Dashboard**: Provides an admin interface for analytics.
- **Blogs Page**: Displays a collection of blogs, articles, or other content relevant to the platform's audience.

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js
- npm or yarn

## Tech stack
- Next.js
- Tailwind CSS
- Shadcn UI
- ES Lint

## Starting the application locally

1. **Clone the Repository**: Begin by cloning the repository to your local machine.

```bash
git clone https://github.com/Kartik1110/mutitenant-nextjs.git
```

2. **Run Development Server**: Start the development server to preview the applications locally.

```
npm run dev
```