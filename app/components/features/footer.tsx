import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link href="/">
              <Image
                src="/assets/img/logo/hybricold-f-logo.png"
                alt="Hybricold"
                width={150}
                height={50}
              />
            </Link>
            <p className="footer-text">
              Sustainable cold storage solutions for a greener future. 
              We provide innovative refrigeration technology that preserves 
              freshness while reducing environmental impact.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#about">About Us</Link>
              </li>
              <li>
                <Link href="#services">Services</Link>
              </li>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li>
                <Link href="#">Cold Storage Solutions</Link>
              </li>
              <li>
                <Link href="#">Refrigeration Systems</Link>
              </li>
              <li>
                <Link href="#">Installation Services</Link>
              </li>
              <li>
                <Link href="#">Maintenance & Support</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-links">
              <li>
                <a href="mailto:info@hybricold.com">info@hybricold.com</a>
              </li>
              <li>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li>
                <span>123 Cold Storage Way</span>
              </li>
              <li>
                <span>Tech City, TC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Hybricold. All rights reserved.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
