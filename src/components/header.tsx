"use client"

import { Facebook, Instagram, Menu, Twitter, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <Image src="/pawcare-logo.png" alt="PawCare Clinic Logo" width={120} height={32} className="h-8 w-auto" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                            Home
                        </Link>
                        <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                            About
                        </Link>
                        <Link href="/services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                            Services
                        </Link>
                        <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                            Contact
                        </Link>
                    </nav>

                    <div className="hidden md:flex space-x-4">
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            <Facebook className="h-5 w-5" />
                            <span className="sr-only">Facebook</span>
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            <Twitter className="h-5 w-5" />
                            <span className="sr-only">Twitter</span>
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            <Instagram className="h-5 w-5" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2" onClick={toggleMenu} aria-label="Toggle menu">
                        {isMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 z-40 bg-background border-t shadow-lg">
                        <nav className="flex flex-col space-y-4 px-4 py-6">
                            <Link
                                href="/"
                                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="/services"
                                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Services
                            </Link>
                            <Link
                                href="/contact"
                                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}
