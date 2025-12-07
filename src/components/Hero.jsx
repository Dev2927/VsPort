import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, TrendingUp } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="py-12 md:py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="w-3 h-8 bg-accent rounded"></div>
                        <span className="text-accent font-semibold">Professional Accountant</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Precision in
                        <span className="text-primary"> Numbers</span>,
                        <br />
                        Excellence in
                        <span className="text-primary"> Accounting</span>
                    </h1>

                    <p className="text-lg text-gray-600 mb-8">
                        Head of Accounts with 4+ years of expertise in financial reconciliation,
                        vendor management, and comprehensive financial analysis. Dedicated to
                        maintaining financial accuracy and driving business growth.
                    </p>

                    <div className="space-y-4 mb-8">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <Mail className="text-primary" size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Email</p>
                                <p className="font-medium">vasundhrasidhuwork@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <Phone className="text-primary" size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Contact</p>
                                <p className="font-medium">+91 7042065515</p>
                            </div>
                        </div>
                    </div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="bg-white rounded-2xl shadow-xl p-8 professional-card">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                <TrendingUp className="text-white" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Key Achievement</h3>
                                <p className="text-gray-600">Processed 1000+ invoices</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-700">Accounts Payable Process</span>
                                <span className="font-bold text-primary">100+ Vendors</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-gray-700">Invoice Processing</span>
                                <span className="font-bold text-primary">99.8% Accuracy</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-gray-700">Vendor Reconciliation</span>
                                <span className="font-bold text-primary">Monthly</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-gray-700">Financial Reporting</span>
                                <span className="font-bold text-primary">Monthly/Quarterly/Annual</span>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <p className="text-gray-600 italic">
                                "Ensuring financial accuracy while building strong vendor relationships through meticulous attention to detail."
                            </p>
                        </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-10 -z-10"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary rounded-full opacity-5 -z-10"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default React.memo(Hero);