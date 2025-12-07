import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle, TrendingUp } from 'lucide-react';

const experience = {
    company: "Continuum Electroproducts Pvt Ltd",
    position: "Head of Accounts",
    duration: "April 2021 - October 2025",
    responsibilities: [
        "Managed full-cycle accounts payable process for over 100 vendor accounts",
        "Ensured timely and accurate processing of vendor invoices and payments",
        "Developed and maintained effective relationships with vendors",
        "Researched and resolved discrepancies in vendor invoices and statements",
        "Reconciled vendor accounts and identified/resolved discrepancies",
        "Monitored accounts payable aging reports and addressed past due invoices",
        "Prepared and processed payments using electronic funds transfers",
        "Generated monthly, quarterly, and annual financial reports",
        "Successfully processed over 1000 invoices and payments in high-volume department",
        "Maintained accurate records and updated accounts payable ledgers",
        "Handled day-to-day accounts payable operations including invoice processing",
        "Answered vendor inquiries and resolved invoice discrepancies",
        "Generated financial reports for customers ensuring accuracy",
        "Processed customer invoices and payments in a timely manner",
        "Monitored customer accounts and adjusted payment plans"
    ]
};

const Experience = () => {
    return (
        <section id="experience" className="py-12">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Professional <span className="text-primary">Experience</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Demonstrated expertise in comprehensive financial management and accounting operations
                </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                    <div className="bg-gradient-to-r from-primary to-secondary p-6 text-white">
                        <div className="flex flex-col md:flex-row md:items-center justify-between">
                            <div>
                                <div className="flex items-center space-x-3 mb-2">
                                    <Briefcase size={24} />
                                    <h3 className="text-2xl font-bold">{experience.position}</h3>
                                </div>
                                <p className="text-xl">{experience.company}</p>
                            </div>
                            <div className="flex items-center space-x-2 mt-4 md:mt-0">
                                <Calendar size={20} />
                                <span className="text-lg">{experience.duration}</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="flex items-center space-x-2 mb-6">
                            <TrendingUp className="text-primary" size={24} />
                            <h4 className="text-xl font-semibold text-gray-900">Key Responsibilities & Achievements</h4>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {experience.responsibilities.map((responsibility, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    className="flex items-start space-x-3"
                                >
                                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                                    <p className="text-gray-700">{responsibility}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                            className="mt-8 pt-8 border-t border-gray-200"
                        >
                            <h4 className="text-xl font-semibold text-gray-900 mb-4">Tools & Technologies</h4>
                            <div className="flex flex-wrap gap-3">
                                {['Zoho Books', 'Microsoft Excel', 'Financial Software', 'ERP Systems', 'Electronic Funds Transfer', 'Accounting Ledgers'].map((tool) => (
                                    <span
                                        key={tool}
                                        className="px-4 py-2 bg-blue-50 text-primary rounded-full text-sm font-medium"
                                    >
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default React.memo(Experience);