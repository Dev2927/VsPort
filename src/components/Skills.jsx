import { motion } from 'framer-motion';
import {
    BarChart3, FileText, Users, Clock,
    MessageSquare, Lightbulb, Target, PieChart
} from 'lucide-react';
import React from 'react';

const skills = [
    { icon: <BarChart3 />, name: 'Financial Analysis', category: 'Technical' },
    { icon: <FileText />, name: 'Document Management', category: 'Organizational' },
    { icon: <Users />, name: 'Vendor Relations', category: 'Interpersonal' },
    { icon: <Clock />, name: 'Time Management', category: 'Organizational' },
    { icon: <MessageSquare />, name: 'Communication', category: 'Interpersonal' },
    { icon: <Target />, name: 'Problem Solving', category: 'Analytical' },
    { icon: <Lightbulb />, name: 'Creativity', category: 'Innovative' },
    { icon: <PieChart />, name: 'Cash Flow Management', category: 'Financial' },
];

const Skills = () => {
    return (
        <section id="skills" className="py-12">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Core <span className="text-primary">Competencies</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Expertise in accounting operations with a focus on accuracy, efficiency,
                    and strategic financial management
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                            <div className="text-primary">{skill.icon}</div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                            {skill.name}
                        </h3>
                        <div className="flex justify-center">
                            <span className="px-3 py-1 bg-blue-50 text-primary text-sm rounded-full">
                                {skill.category}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-12 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white"
            >
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="text-4xl font-bold mb-2">4+</div>
                        <div className="text-blue-100">Years Experience</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold mb-2">1000+</div>
                        <div className="text-blue-100">Invoices Processed</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold mb-2">100+</div>
                        <div className="text-blue-100">Vendor Accounts</div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default React.memo(Skills);