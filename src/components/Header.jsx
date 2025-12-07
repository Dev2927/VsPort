import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/CV.pdf";
        link.download = "Vasundhra-Sidhu-CV.pdf";
        link.click();
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-effect sticky top-0 z-50 shadow-sm"
        >
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center space-x-2"
                    >
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-lg">VS</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-gray-800">Vasundhra Sidhu</h1>
                            <p className="text-sm text-secondary font-medium">Head of Accounts</p>
                        </div>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 hover:text-primary font-medium transition-colors duration-300"
                            >
                                {item.name}
                            </a>
                        ))}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleDownload}
                            className="bg-primary text-white px-6 py-2 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition-colors duration-300"
                        >
                            <Download size={18} />
                            <span>Download CV</span>
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-gray-700"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="md:hidden mt-4 space-y-4"
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block text-gray-700 hover:text-primary py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <button
                            onClick={handleDownload}
                            className="bg-primary text-white px-6 py-2 rounded-full w-full flex items-center justify-center space-x-2"
                        >
                            <Download size={18} />
                            <span>Download CV</span>
                        </button>
                    </motion.div>
                )}
            </nav>
        </motion.header>
    );
};

export default Header;