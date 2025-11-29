<!-- This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details. -->


Hindustan News Clone - Next.js News Portal
A modern, responsive news portal built with Next.js that fetches real-time news from Google News RSS feed. This project demonstrates modern web development practices with server-side rendering, dynamic routing, and responsive design.

🚀 Features
    Real-time News: Fetches latest news from Google News RSS feed

    Responsive Design: Optimized for desktop, tablet, and mobile devices

    Dynamic Routing: Individual pages for each news article

    SEO Optimized: Proper meta tags and structured data

    Image Optimization: Uses Next.js Image component for optimized loading

    Fast Performance: Server-side rendering with revalidation

    Hindi Language Support: Proper font and text rendering for Hindi content

🛠️ Tech Stack
    Framework: Next.js 14 with App Router

    Styling: Tailwind CSS

    Language: JavaScript (ES6+)

    XML Parsing: fast-xml-parser

    Deployment: Vercel

📦 Installation
    Clone the repository

    bash ->
        git clone https://github.com/rajpat739407/Hindustan_news-.git
        cd Hindustan_news-
        Install dependencies

    bash ->
        npm install
        Run the development server

    bash ->
        npm run dev
        Open your browser
        Navigate to http://localhost:3000

🎯 Project Structure
text
hindustan-news/
├──.next
├── app/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── NewsCard.jsx
│   │   ├── Loading.jsx
|   |   |__ Placeholder.jsx
│   ├── news/
│   │   └── [id]/
│   │       ├── page.jsx
│   │       └── loading.jsx
│   ├── utils/
│   │   └── newsParser.js
│   ├── layout.jsx
|   ├── globals.css
│   └── page.jsx
|   
├── public/
└── tailwind.config.js
📋 Part B: Project Documentation
    Design Decisions
    I wanted to create a news portal that feels familiar to Indian users while using modern web technologies. The design is inspired by popular Hindi news portals but with a cleaner, more modern interface.

    Layout Structure:

        Header: Simple navigation with logo and search

        Hero Section: One main featured story with two side stories

        News Grid: Responsive cards showing all articles

        Footer: Basic links and information

    Why This Layout?

        The hero section immediately grabs attention with important news

        The grid layout makes it easy to scan multiple articles

        Responsive design ensures good experience on all devices

    Color Scheme:

        Used red as primary color (common in Indian news portals)

        Clean white background for better readability

        Gray shades for secondary elements

Data Fetching Strategy
I chose Server-Side Rendering with revalidation because news content needs to be fresh. The homepage fetches news every 5 minutes to ensure users see updated content.

javascript
export const revalidate = 300; // 5 minutes
Why This Approach?

News is time-sensitive and needs frequent updates

Better SEO than client-side rendering

Faster initial page load compared to client-side fetching

Components Overview
Header: Navigation bar with logo and search

Footer: Site information and links

HeroSection: Displays featured news stories

NewsCard: Individual news article component

Loading: Skeleton loading states

News Detail: Dynamic page for individual articles

Data Model
Each news article has this structure:

javascript
{
  id: "unique-id",
  title: "News Title",
  description: "Short description...",
  image: "image-url.jpg",
  link: "original-article-link",
  pubDate: "publication-date",
  source: "News Source"
}
Challenges Faced
RSS Feed Parsing: The Google News RSS feed returns XML with complex CDATA content. I had to learn how to properly parse this and extract the needed information.

Dynamic Routing: Initially, clicking news articles showed 404 errors. It took me time to understand that in Next.js 13+, route parameters are async and need to be awaited.

Image Handling: Some news articles didn't have images or had broken image links. I implemented fallback placeholders to handle these cases.

Responsive Design: Making the layout work perfectly on all screen sizes was challenging, especially the hero section on mobile devices.

What I'd Improve
Given more time, I would:

Add search functionality to filter news

Implement categories for different news types

Add bookmarking feature to save articles

Include dark mode toggle

Add more loading animations for better user experience

Implement error boundaries for better error handling

🧪 Part C: Testing & Edge Cases
Handling Different Scenarios
1. Missing Images
When an article doesn't have an image, the app shows a clean placeholder with a news icon instead of broken images.

2. Empty News Feed
If the RSS feed returns no articles, users see a friendly message asking them to try again later.

3. Long Titles
News titles that are too long get truncated with "..." to maintain clean layout across all devices.

4. Network Errors
If the news fetch fails, the app shows fallback content instead of crashing.

5. Loading States
While news is loading, users see skeleton screens that mimic the actual content layout.

Responsive Behavior
Desktop: 4-column grid for news cards

Tablet: 2-column grid layout

Mobile: Single column stack

The hero section adapts from side-by-side layout to stacked layout on mobile

🤖 Part D: AI Assistance & Learning
Complex Tasks Where I Used Help
1. RSS Feed Integration
Parsing XML RSS feeds was completely new to me. I got help understanding how to:

Fetch the RSS feed from Google News

Parse XML into usable JavaScript objects

Extract images from HTML descriptions

Handle different data formats in the feed

2. Next.js Dynamic Routing
I struggled with the new App Router in Next.js 13+. With assistance, I learned:

How dynamic routes work with the [id] folder structure

That route parameters are now Promises that need to be awaited

How to generate static params for better performance

3. Error Handling
Implementing proper error boundaries and fallback states was challenging. I learned to:

Handle network errors gracefully

Show appropriate loading states

Provide fallback content when data isn't available

What I Built Myself
All the component styling with Tailwind CSS

The responsive layout decisions

The component structure and organization

The data model design

Most of the JavaScript logic for handling user interactions

Key Learnings
This project taught me:

How to work with external APIs and RSS feeds

Modern Next.js features like App Router and Server Components

Responsive design principles with Tailwind CSS

Importance of error handling in production applications

How to structure a medium-sized web application