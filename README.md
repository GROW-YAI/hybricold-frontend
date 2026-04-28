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

## Boafo Widget Integration Guide

For the official integration guide, watch this video tutorial: [Boafo Widget Integration Guide](https://drive.google.com/file/d/1tvwK-sBZI2a4uldd6z5LD1iLblSl3WbG/view?usp=sharing)

Alternatively, follow the steps below to integrate the Boafo accessibility widget into your Next.js project:


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