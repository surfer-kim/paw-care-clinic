"use client"

import { Clock, Heart, Phone, Shield, Star, Users } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Heart,
    title: "Wellness Exams",
    description: "Regular check-ups to keep your pet healthy and catch issues early.",
  },
  {
    icon: Shield,
    title: "Vaccinations",
    description: "Protect your pet with up-to-date vaccinations and preventive care.",
  },
  {
    icon: Clock,
    title: "Emergency Care",
    description: "24/7 emergency services when your pet needs immediate attention.",
  },
  {
    icon: Users,
    title: "Surgery",
    description: "Safe and professional surgical procedures with modern equipment.",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "The staff at PawCare Clinic is amazing! They took such good care of my dog during his surgery.",
    rating: 5,
  },
  {
    name: "Mike Chen",
    text: "Professional, caring, and knowledgeable. I wouldn&apos;t trust my pets with anyone else.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    text: "Great facilities and the veterinarians really know what they&apos;re doing. Highly recommend!",
    rating: 5,
  },
]

export default function HomePage() {

  return (
    <main className="min-h-screen">
      {/* Hero Video Overlay */}
      <section className="relative h-[600px] overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/banner-video.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <Image
            src="/happy-golden-retriever-at-veterinary-clinic.jpg"
            alt="Pet clinic hero"
            width={1024}
            height={600}
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Where Modern Care Meets Meaningful Connection</h1>
            <p className="text-xl md:text-2xl mb-8 text-balance">We&apos;re not your typical vet clinic. At PawCare Clinic, we provide relationship-driven medicine because your pet deserves care that’s both advanced and attentive.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-10 rounded-md px-6">
                Book Appointment
              </button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground border-white text-white hover:bg-white hover:text-foreground bg-transparent h-10 rounded-md px-6">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              We provide comprehensive veterinary care to keep your pets healthy and happy throughout their lives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center hover:shadow-lg transition-shadow"
              >
                <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="leading-none font-semibold text-xl">{service.title}</div>
                </div>
                <div className="px-6">
                  <div className="text-muted-foreground text-sm">{service.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Why Choose PawCare Clinic?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 15 years of experience, our dedicated team of veterinarians and staff provide compassionate
                care for your beloved pets. We combine modern technology with a personal touch to ensure the best
                possible outcomes.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Experienced and caring veterinarians</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">State-of-the-art medical equipment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Comprehensive preventive care programs</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">24/7 emergency services available</span>
                </li>
              </ul>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-9 px-4 py-2">
                Learn More About Us
              </button>
            </div>
            <div className="relative">
              <img
                src="/veterinarian-with-happy-dog-and-cat-in-modern-clin.jpg"
                alt="Veterinarian with happy pets"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Don&apos;t just take our word for it. Here&apos;s what pet owners have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm text-center"
              >
                <div className="px-6 pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">&quot;{testimonial.text}&quot;</p>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Ready to Give Your Pet the Best Care?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-balance">
            Schedule an appointment today and let our experienced team take care of your beloved companion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 bg-white text-primary hover:bg-white/90 h-10 rounded-md px-6">
              <Phone className="h-5 w-5 mr-2" />
              Call (555) 123-4567
            </button>
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground border-white text-white hover:bg-white hover:text-primary bg-transparent h-10 rounded-md px-6">
              Book Online
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
