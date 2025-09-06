import { Award, Clock, Heart, Shield, Star, Users } from "lucide-react"

const teamMembers = [
    {
        name: "Dr. Sarah Mitchell",
        role: "Lead Veterinarian & Clinic Director",
        experience: "15+ years",
        specialties: ["Internal Medicine", "Surgery", "Emergency Care"],
        image: "/dr-sarah-mitchell-veterinarian.jpg",
        description:
            "Dr. Mitchell founded PawCare Clinic with a vision to provide compassionate, comprehensive care for all pets.",
    },
    {
        name: "Dr. James Rodriguez",
        role: "Senior Veterinarian",
        experience: "12+ years",
        specialties: ["Orthopedic Surgery", "Dental Care", "Exotic Animals"],
        image: "/dr-james-rodriguez-veterinarian.jpg",
        description:
            "Specializing in complex surgical procedures, Dr. Rodriguez brings expertise in advanced veterinary techniques.",
    },
    {
        name: "Lisa Chen",
        role: "Veterinary Technician",
        experience: "8+ years",
        specialties: ["Patient Care", "Laboratory", "Anesthesia"],
        image: "/lisa-chen-veterinary-technician.jpg",
        description: "Lisa ensures every pet receives gentle, professional care throughout their visit to our clinic.",
    },
    {
        name: "Michael Thompson",
        role: "Practice Manager",
        experience: "10+ years",
        specialties: ["Operations", "Client Relations", "Emergency Coordination"],
        image: "/michael-thompson-practice-manager.jpg",
        description: "Michael oversees daily operations and ensures our clients receive exceptional service every time.",
    },
]

const values = [
    {
        icon: Heart,
        title: "Compassionate Care",
        description: "We treat every pet with the same love and attention we would give our own family members.",
    },
    {
        icon: Shield,
        title: "Medical Excellence",
        description: "Our team stays current with the latest veterinary advances to provide the best possible care.",
    },
    {
        icon: Users,
        title: "Client Partnership",
        description: "We work closely with pet owners to develop personalized care plans for each unique pet.",
    },
    {
        icon: Clock,
        title: "Always Available",
        description: "From routine check-ups to emergency care, we're here when your pet needs us most.",
    },
]

const achievements = [
    "AAHA Accredited Hospital",
    "Fear Free Certified Practice",
    "Excellence in Client Service Award 2023",
    "Best Veterinary Clinic - Local Choice Awards 2022",
    "Advanced Surgical Certification",
    "Emergency Care Specialist Recognition",
]

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-muted">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">About PawCare Clinic</h1>
                            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                                For over 15 years, PawCare Clinic has been dedicated to providing exceptional veterinary care with a
                                personal touch. We believe every pet deserves compassionate, professional medical attention in a
                                welcoming environment.
                            </p>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                Our state-of-the-art facility combines modern medical technology with the warmth and care that makes
                                both pets and their owners feel comfortable and confident in our services.
                            </p>
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2">
                                Schedule a Visit
                            </button>
                        </div>
                        <div className="relative">
                            <img
                                src="/modern-veterinary-clinic-interior-with-happy-pets.jpg"
                                alt="Modern veterinary clinic interior"
                                className="rounded-lg shadow-lg w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Core Values</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                            These principles guide everything we do and ensure your pet receives the best possible care.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center hover:shadow-lg transition-shadow"
                            >
                                <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
                                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                        <value.icon className="h-8 w-8 text-primary" />
                                    </div>
                                    <div className="leading-none font-semibold text-xl">{value.title}</div>
                                </div>
                                <div className="px-6">
                                    <div className="text-muted-foreground text-sm leading-relaxed">{value.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 bg-muted">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Meet Our Team</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                            Our experienced and caring team is dedicated to providing the highest quality veterinary care for your
                            beloved pets.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
                            >
                                <div className="flex flex-col sm:flex-row">
                                    <div className="sm:w-1/3 pl-4">
                                        <img
                                            src={member.image || "/placeholder.svg"}
                                            alt={member.name}
                                            className="w-full h-48 sm:h-full object-cover"
                                        />
                                    </div>
                                    <div className="sm:w-2/3 p-6">
                                        <div className="p-0 mb-4">
                                            <div className="leading-none font-semibold text-xl text-foreground">{member.name}</div>
                                            <div className="text-muted-foreground text-sm text-primary font-medium">{member.role}</div>
                                            <div className="flex items-center gap-2 mt-2">
                                                <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground">
                                                    {member.experience}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-0">
                                            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{member.description}</p>
                                            <div className="space-y-1">
                                                <p className="text-xs font-medium text-foreground">Specialties:</p>
                                                <div className="flex flex-wrap gap-1">
                                                    {member.specialties.map((specialty, i) => (
                                                        <span
                                                            key={i}
                                                            className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-[color,box-shadow] overflow-hidden text-foreground"
                                                        >
                                                            {specialty}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                            Awards & Certifications
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                            Our commitment to excellence has been recognized by industry organizations and our community.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {achievements.map((achievement, index) => (
                            <div
                                key={index}
                                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center p-6 hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-center justify-center mb-3">
                                    <Award className="h-8 w-8 text-primary" />
                                </div>
                                <p className="font-medium text-foreground">{achievement}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Facility Section */}
            <section className="py-16 bg-muted">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img
                                src="/state-of-the-art-veterinary-equipment-and-surgery.jpg"
                                alt="State-of-the-art veterinary equipment"
                                className="rounded-lg shadow-lg w-full"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                                Modern Facilities & Equipment
                            </h2>
                            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                Our clinic features the latest in veterinary technology and equipment, ensuring we can provide
                                comprehensive diagnostic and treatment services all under one roof.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start space-x-3">
                                    <Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="text-muted-foreground">Digital X-ray and ultrasound imaging</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="text-muted-foreground">Fully equipped surgical suites</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="text-muted-foreground">In-house laboratory for rapid diagnostics</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="text-muted-foreground">Comfortable recovery and boarding areas</span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="text-muted-foreground">Separate cat and dog examination rooms</span>
                                </li>
                            </ul>
                            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2">
                                Schedule a Tour
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Experience the PawCare Difference</h2>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-balance">
                        Join thousands of satisfied pet owners who trust us with their beloved companions' health and well-being.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 bg-white text-primary hover:bg-white/90 h-10 rounded-md px-6">
                            Book Your First Visit
                        </button>
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground border-white text-white hover:bg-white hover:text-primary bg-transparent h-10 rounded-md px-6">
                            Contact Us Today
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}
