import { AlertCircle, Clock, Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="bg-primary/5 py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4 text-balance">Contact Us</h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                            Get in touch with our caring team. We're here to help you and your pet with any questions or concerns.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white rounded-lg shadow-sm border p-8">
                            <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            required
                                            className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                            placeholder="Your first name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            required
                                            className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                            placeholder="Your last name"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="petName" className="block text-sm font-medium text-foreground mb-2">
                                        Pet Name
                                    </label>
                                    <input
                                        type="text"
                                        id="petName"
                                        name="petName"
                                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="Your pet's name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        required
                                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="appointment">Schedule Appointment</option>
                                        <option value="emergency">Emergency</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="billing">Billing Question</option>
                                        <option value="prescription">Prescription Refill</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                                        placeholder="Please describe your inquiry or concern..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary text-primary-foreground font-medium py-3 px-6 rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            {/* Contact Details */}
                            <div className="bg-white rounded-lg shadow-sm border p-8">
                                <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                            <Phone className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground">Phone</h3>
                                            <p className="text-muted-foreground">(555) 123-4567</p>
                                            <p className="text-sm text-muted-foreground">Available during business hours</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                            <Mail className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground">Email</h3>
                                            <p className="text-muted-foreground">info@pawcareclinic.com</p>
                                            <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                            <MapPin className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground">Address</h3>
                                            <p className="text-muted-foreground">
                                                123 Pet Care Lane
                                                <br />
                                                Veterinary City, VC 12345
                                            </p>
                                            <p className="text-sm text-muted-foreground">Free parking available</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="bg-white rounded-lg shadow-sm border p-8">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <Clock className="h-5 w-5 text-primary" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-foreground">Business Hours</h2>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                                        <span className="font-medium text-foreground">Monday - Friday</span>
                                        <span className="text-muted-foreground">8:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                                        <span className="font-medium text-foreground">Saturday</span>
                                        <span className="text-muted-foreground">9:00 AM - 4:00 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2">
                                        <span className="font-medium text-foreground">Sunday</span>
                                        <span className="text-muted-foreground">Emergency Only</span>
                                    </div>
                                </div>
                            </div>

                            {/* Emergency Contact */}
                            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                                <div className="flex items-start space-x-3">
                                    <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-bold text-red-900 mb-2">Emergency Care</h3>
                                        <p className="text-red-800 text-sm mb-3">
                                            For after-hours emergencies, please call our emergency line or visit the nearest 24-hour animal
                                            hospital.
                                        </p>
                                        <div className="space-y-1">
                                            <p className="font-semibold text-red-900">Emergency Line: (555) 911-PETS</p>
                                            <p className="text-sm text-red-800">Available 24/7 for urgent care</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Visit Our Clinic</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Conveniently located in the heart of Veterinary City with easy access and ample parking.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border p-8">
                        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                            <div className="text-center">
                                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                                <p className="text-muted-foreground">Interactive map would be embedded here</p>
                                <p className="text-sm text-muted-foreground mt-2">123 Pet Care Lane, Veterinary City, VC 12345</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
