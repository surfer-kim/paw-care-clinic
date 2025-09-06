"use client"

import { Menu, X } from "lucide-react"
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

                    {/* CTA Button */}
                    <div className="hidden md:flex">
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2">
                            Book Appointment
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden p-2" onClick={toggleMenu} aria-label="Toggle menu">
                        {isMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden border-t bg-background">
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
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 w-full mt-4">
                                Book Appointment
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}
