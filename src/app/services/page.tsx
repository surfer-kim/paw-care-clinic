export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-green-50 to-green-100 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-black text-green-800 mb-6">Comprehensive Veterinary Services</h1>
                        <p className="text-xl text-green-700 max-w-3xl mx-auto leading-relaxed">
                            From routine wellness exams to advanced surgical procedures, we provide complete medical care for your
                            beloved pets with compassion and expertise.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Categories */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Preventive Care */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-black text-green-800 mb-8 text-center">Preventive Care</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg shadow-md p-6 border border-green-100">
                                <h3 className="text-xl font-bold text-green-800 mb-4">Wellness Examinations</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Comprehensive annual and bi-annual health checkups to detect potential issues early and maintain your
                                    pet's optimal health.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6 border border-green-100">
                                <h3 className="text-xl font-bold text-green-800 mb-4">Vaccinations</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Core and non-core vaccines to protect against rabies, distemper, parvovirus, and other preventable
                                    diseases.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6 border border-green-100">
                                <h3 className="text-xl font-bold text-green-800 mb-4">Parasite Prevention</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Flea, tick, and heartworm prevention programs tailored to your pet's lifestyle and risk factors.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Medical Services */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-black text-green-800 mb-8 text-center">Medical Services</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg shadow-md p-6 border border-green-100">
                                <h3 className="text-xl font-bold text-green-800 mb-4">Diagnostic Imaging</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Digital X-rays, ultrasound, and advanced imaging to accurately diagnose internal conditions and
                                    injuries.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6 border border-green-100">
                                <h3 className="text-xl font-bold text-green-800 mb-4">Laboratory Testing</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    In-house blood work, urinalysis, and specialized testing for quick and accurate diagnosis of health
                                    conditions.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6 border border-green-100">
                                <h3 className="text-xl font-bold text-green-800 mb-4">Internal Medicine</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Treatment of complex medical conditions including diabetes, kidney disease, heart conditions, and
                                    gastrointestinal disorders.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Surgical Services */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-black text-green-800 mb-8 text-center">Surgical Services</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg shadow-md p-6 border border-green-100">
                                <h3 className="text-xl font-bold text-green-800 mb-4">Spay & Neuter</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Safe and routine sterilization procedures to prevent unwanted pregnancies and reduce health risks.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6 border border-green-100">
                                <h3 className="text-xl font-bold text-green-800 mb-4">Soft Tissue Surgery</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Advanced surgical procedures including tumor removal, wound repair, and gastrointestinal surgeries.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6 border border-green-100">
                                <h3 className="text-xl font-bold text-green-800 mb-4">Orthopedic Surgery</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Bone and joint surgeries including fracture repair, cruciate ligament reconstruction, and hip
                                    dysplasia treatment.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Specialized Care */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-black text-green-800 mb-8 text-center">Specialized Care</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg shadow-md p-6 border border-green-100">
                                <h3 className="text-xl font-bold text-green-800 mb-4">Dental Care</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Professional dental cleanings, extractions, and oral health maintenance to prevent periodontal
                                    disease.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6 border border-green-100">
                                <h3 className="text-xl font-bold text-green-800 mb-4">Dermatology</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Treatment of skin conditions, allergies, and dermatological disorders affecting your pet's comfort and
                                    health.
                                </p>
                            </div>
                            <div className="bg-white rounded-lg shadow-md p-6 border border-green-100">
                                <h3 className="text-xl font-bold text-green-800 mb-4">Geriatric Care</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Specialized care for senior pets including pain management, mobility support, and age-related health
                                    monitoring.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Emergency Services */}
                    <div className="bg-red-50 rounded-lg p-8 mb-16">
                        <h2 className="text-3xl font-black text-red-800 mb-6 text-center">Emergency Services</h2>
                        <div className="text-center mb-6">
                            <p className="text-lg text-red-700 leading-relaxed max-w-3xl mx-auto">
                                We provide urgent care for pets experiencing medical emergencies. Our experienced team is equipped to
                                handle critical situations and stabilize your pet when every minute counts.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-lg p-6 shadow-md">
                                <h3 className="text-xl font-bold text-red-800 mb-3">24/7 Emergency Hotline</h3>
                                <p className="text-gray-600 mb-4">Call us immediately for emergency situations</p>
                                <p className="text-2xl font-bold text-red-600">(555) 123-4567</p>
                            </div>
                            <div className="bg-white rounded-lg p-6 shadow-md">
                                <h3 className="text-xl font-bold text-red-800 mb-3">Emergency Conditions</h3>
                                <ul className="text-gray-600 space-y-1">
                                    <li>• Severe injuries or trauma</li>
                                    <li>• Difficulty breathing</li>
                                    <li>• Poisoning or toxic ingestion</li>
                                    <li>• Seizures or collapse</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-green-800 py-16">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-black text-white mb-6">Ready to Schedule Your Pet's Care?</h2>
                    <p className="text-xl text-green-100 mb-8 leading-relaxed">
                        Contact us today to discuss your pet's specific needs and schedule an appointment with our experienced
                        veterinary team.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-green-800 px-8 py-3 rounded-lg font-bold hover:bg-green-50 transition-colors">
                            Book Appointment
                        </button>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-green-800 transition-colors">
                            Call (555) 123-4567
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}
