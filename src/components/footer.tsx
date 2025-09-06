import { Clock, Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-muted border-t">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand & Description */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Image src="/pawcare-logo.png" alt="PawCare Clinic Logo" width={120} height={32} className="h-8 w-auto" />
                            <span className="text-xl font-bold text-foreground">PawCare Clinic</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Providing compassionate and professional veterinary care for your beloved pets. Your pet&apos;s health and
                            happiness is our top priority.
                        </p>
                        <div className="flex space-x-4">
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
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
                        <nav className="flex flex-col space-y-2">
                            <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                Home
                            </Link>
                            <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                About Us
                            </Link>
                            <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                Services
                            </Link>
                            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                Contact
                            </Link>
                            <Link href="/emergency" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                Emergency Care
                            </Link>
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">Contact Info</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">(555) 123-4567</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">info@pawcareclinic.com</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-muted-foreground">
                                    123 Pet Care Lane
                                    <br />
                                    Veterinary City, VC 12345
                                </span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Clock className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                <div className="text-sm text-muted-foreground">
                                    <div>Mon-Fri: 8:00 AM - 6:00 PM</div>
                                    <div>Sat: 9:00 AM - 4:00 PM</div>
                                    <div>Sun: Emergency Only</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">Stay Updated</h3>
                        <p className="text-sm text-muted-foreground">
                            Subscribe to our newsletter for pet care tips and clinic updates.
                        </p>
                        <div className="space-y-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive bg-background border-border"
                            />
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2 w-full">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-8 border-t border-border">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-sm text-muted-foreground">© 2024 PawCare Clinic. All rights reserved.</p>
                        <div className="flex space-x-6">
                            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
