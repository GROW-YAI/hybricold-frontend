"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <Link href="/">
              <Image
                src="/assets/img/logo/hybricold-logo.png"
                alt="Hybricold"
                width={150}
                height={50}
                priority
              />
            </Link>
          </div>
          
          <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="#about" className="nav-link">
              About
            </Link>
            <Link href="#services" className="nav-link">
              Services
            </Link>
            <Link href="#contact" className="nav-link">
              Contact
            </Link>
          </nav>

          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
