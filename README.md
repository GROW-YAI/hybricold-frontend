# Hybricold - Sustainable Cold Storage Solutions for Farmers

## Project Overview

Hybricold is an innovative agri-tech platform dedicated to transforming agricultural post-harvest management through sustainable cold storage solutions. Built specifically for smallholder tomato farmers in Ghana, this website showcases how hybrid renewable energy-powered cold storage can dramatically reduce food waste and increase farmer income.

### What the Site Does

The Hybricold website serves as a comprehensive digital presence for the company, featuring:

- **Hero Section**: Compelling introduction highlighting the mission to extend tomato shelf life from 5 to 21 days
- **About Section**: Detailed information about the company's vision and impact on food security in Ghana
- **Services Showcase**: Three core services offered:
  - Mobile Cold Storage units for immediate post-harvest cooling
  - Energy Optimization through hybrid renewable integration
  - Technical Training programs for farmers
- **Customer Testimonials**: Real feedback from satisfied farmers and community leaders
- **Team Profiles**: Introduction of the leadership team driving innovation
- **Contact Form**: Direct communication channel for inquiries (powered by Formspree)

### Purpose and Main Features

The primary purpose of this website is to:

1. **Educate** visitors about post-harvest loss challenges in agriculture
2. **Showcase** cold storage technology solutions
3. **Build Trust** through testimonials and team transparency
4. **Enable Contact** for potential customers and partners

Key features include:
- Responsive design optimized for all devices
- Smooth testimonial carousel with navigation controls
- Mobile-friendly hamburger menu
- Direct social media integration (Facebook, LinkedIn, Instagram)
- **Boafo Accessibility Widget** for enhanced user accessibility

### Technologies Used

This project leverages modern web technologies:

- **Frontend Framework**: Next.js (React-based) with TypeScript
- **Styling**: Custom CSS with responsive design
- **Package Manager**: pnpm
- **Accessibility**: Boafo Accessibility Widget for inclusive user experience
- **Contact Integration**: Formspree for form submissions
- **Version Control**: Git

The site uses the **Boafo accessibility widget** to make the site accessible to all users, ensuring that people with various disabilities can navigate and interact with the content effectively.

---

## How to Get Your Boafo API Key

To integrate the Boafo accessibility widget into your project, you need an API key:

1. **Visit** [boafo.co](https://boafo.co)
2. **Register** for a new account or log in to your existing account
3. **Navigate** to your dashboard
4. **Locate** your API key in the account settings or widget configuration section
5. **Copy** the API key (it will look something like `boafo_xxxx`)

> **Important**: Never expose your actual API key in public repositories. Always use environment variables to store sensitive credentials.

---

## How to Integrate the Boafo Widget

Follow these steps to properly integrate the Boafo accessibility widget into your Next.js project:

### Step 1: Install the Package

```bash
npm install boafo-accessibility-widget
```

Or if you're using pnpm:

```bash
pnpm add boafo-accessibility-widget
```

### Step 2: Create a Client Component

Create a new file at `app/components/BoafoWidgetInitializer.tsx`:

```tsx
"use client";

import { useEffect } from "react";
import { initializeBoafoWidget } from "boafo-accessibility-widget";

export default function BoafoWidgetInitializer() {
  useEffect(() => {
    const BOAFO_API_KEY = process.env.NEXT_PUBLIC_BOAFO_API_KEY;
    if (BOAFO_API_KEY) {
      initializeBoafoWidget(BOAFO_API_KEY);
    }
  }, []);

  return null; // nothing to render
}
```

This component:
- Is marked as `"use client"` for Next.js client-side rendering
- Reads the API key from the environment variable `process.env.NEXT_PUBLIC_BOAFO_API_KEY`
- Initializes the widget when the component mounts

### Step 3: Import and Use in Layout

Add the `BoafoWidgetInitializer` component inside your `app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/features/navbar";
import Footer from "./components/features/footer";
import BoafoWidgetInitializer from "./components/BoafoWidgetInitializer";

export const metadata: Metadata = {
  title: "Your Site Title",
  description: "Your site description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BoafoWidgetInitializer />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

### Step 4: TypeScript Support

For TypeScript support, create a type declaration file at `src/types/global.d.ts`:

```typescript
declare module "boafo-accessibility-widget" {
  export function initializeBoafoWidget(apiKey: string): void;
}
```

Then update your `tsconfig.json` to include the `src/types` directory:

```json
{
  "compilerOptions": {
    // ... other options
    "typeRoots": ["./node_modules/@types", "./src/types"]
  },
  "include": [
    "src/types/**/*",
    // ... other includes
  ]
}
```

### Step 5: Static HTML Integration (Alternative)

If you're using static HTML instead of Next.js, add the Boafo script tag to your HTML file:

```html
<!-- Boafo Accessibility Widget -->
<script
  src="https://unpkg.com/boafo-accessibility-widget/public/widget.bundle.js"
  data-api-key="YOUR_BOAFO_API_KEY"
  defer
></script>
```

Replace `YOUR_BOAFO_API_KEY` with your actual API key from boafo.co. For production, consider using a build tool to inject this value from an environment variable.

---

## Setup Instructions

Follow these instructions to get the project running locally:

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm
- Git

### Installation Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/GROW-YAI/hybricold-frontend.git
   cd hybricold-frontend
   ```

2. **Install Dependencies**

   Using pnpm (recommended):
   ```bash
   pnpm install
   ```

   Or using npm:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

   Open the `.env` file and add your Boafo API key:
   ```
   NEXT_PUBLIC_BOAFO_API_KEY=your_actual_api_key_here
   ```

   Replace `your_actual_api_key_here` with the API key you obtained from [boafo.co](https://boafo.co).

4. **Run the Development Server**

   Using pnpm:
   ```bash
   pnpm dev
   ```

   Or using npm:
   ```bash
   npm run dev
   ```

5. **Open the Application**

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Building for Production

To create a production build:

```bash
pnpm build
pnpm start
```

Or with npm:
```bash
npm run build
npm start
```

### Environment Variables Reference

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_BOAFO_API_KEY` | Your Boafo accessibility widget API key | Yes |

> **Security Note**: The `.env` file is included in `.gitignore` and will not be committed to version control. Never commit sensitive credentials to your repository.

---

## License

This project is proprietary to Hybricold Limited.

## Contact

For inquiries, reach out to hybricold@gmail.com or visit the contact section of the website.