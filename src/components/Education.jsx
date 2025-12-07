import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';

const education = [
    {
        degree: "Bachelor of Science in Home Science",
        institution: "Lady Irwin College, University of Delhi",
        location: "New Delhi, India",
        year: "2019",
        icon: <GraduationCap />,
        description: "Graduated with comprehensive knowledge in home science principles"
    },
    {
        degree: "Senior Secondary School",
        institution: "SKV",
        location: "New Delhi, India",
        year: "2015",
        icon: <GraduationCap />,
        description: "Completed senior secondary education"
    },
    {
        degree: "Multi-cuisine Certificate Course",
        institution: "Ashoka Institute of Hospitality & Tourism Management",
        location: "New Delhi, India",
        year: "Dec 2018 - Apr 2019",
        icon: <Award />,
        description: "Professional certification in multi-cuisine culinary arts"
    }
];

const Education = () => {
    return (
        <section id="education" className="py-12">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Education & <span className="text-primary">Certifications</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Academic foundation complemented by professional certifications
                </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
                <div className="relative">
                    {/* Timeline line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary to-accent"></div>

                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 md:pr-12' : 'md:pl-1/2 md:pl-12'}`}
                        >
                            <div className="bg-white rounded-xl shadow-lg p-6 professional-card">
                                <div className="flex items-start space-x-4">
                                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                                        <div className="text-white">{edu.icon}</div>
                                    </div>

                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                                        <p className="text-gray-700 font-medium mb-3">{edu.institution}</p>
                                        <p className="text-gray-600 mb-4">{edu.description}</p>

                                        <div className="flex flex-wrap gap-4">
                                            <div className="flex items-center space-x-2 text-gray-500">
                                                <MapPin size={16} />
                                                <span className="text-sm">{edu.location}</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-gray-500">
                                                <Calendar size={16} />
                                                <span className="text-sm">{edu.year}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Timeline dot */}
                            <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white"></div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mt-8"
                >
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Additional Expertise</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            <span className="px-6 py-3 bg-white rounded-full shadow-sm text-gray-700 font-medium">
                                Financial Reconciliation
                            </span>
                            <span className="px-6 py-3 bg-white rounded-full shadow-sm text-gray-700 font-medium">
                                Vendor Management
                            </span>
                            <span className="px-6 py-3 bg-white rounded-full shadow-sm text-gray-700 font-medium">
                                Accounts Payable
                            </span>
                            <span className="px-6 py-3 bg-white rounded-full shadow-sm text-gray-700 font-medium">
                                Financial Reporting
                            </span>
                            <span className="px-6 py-3 bg-white rounded-full shadow-sm text-gray-700 font-medium">
                                Office Management
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;