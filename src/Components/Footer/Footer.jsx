import React, { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email.trim()) {
            setIsSubscribed(true);
            setEmail('');
            // Reset success message after 4 seconds
            setTimeout(() => setIsSubscribed(false), 4000);
        }
    };

    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Top Section: Brand & Interactive Newsletter */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
                    
                    {/* Brand Overview */}
                    <div className="lg:col-span-5 space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-black text-xl shadow-lg shadow-primary/30">
                                S
                            </div>
                            <span className="text-2xl font-black tracking-tight text-white">
                                Store<span className="text-primary">ify</span>
                            </span>
                        </div>
                        <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                            Your one-stop destination for premium products. Experience seamless shopping, fast delivery, and top-tier support.
                        </p>
                    </div>

                    {/* Interactive Newsletter Box */}
                    <div className="lg:col-span-7 bg-slate-800/60 p-6 sm:p-8 rounded-2xl border border-slate-800 flex flex-col justify-center">
                        <h3 className="text-lg font-bold text-white mb-2">Subscribe to our newsletter</h3>
                        <p className="text-xs text-slate-400 mb-4">Get the latest updates, exclusive discounts, and new arrival alerts delivered to your inbox.</p>
                        
                        {isSubscribed ? (
                            <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-3.5 rounded-xl text-sm font-medium flex items-center gap-2 animate-fadeIn">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                Thank you for subscribing! Check your email for a discount code.
                            </div>
                        ) : (
                            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    className="input bg-slate-900 border-slate-700 focus:border-primary text-white text-sm rounded-xl flex-1 focus:outline-none"
                                />
                                <button type="submit" className="btn btn-primary rounded-xl text-sm font-semibold px-6 shadow-md shadow-primary/20">
                                    Subscribe
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                {/* Middle Section: Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-slate-800">
                    
                    {/* Shop */}
                    <div>
                        <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Shop</h4>
                        <ul className="space-y-2.5 text-sm">
                            {['Electronics', 'Fashion', 'Home & Living', 'Accessories', 'New Arrivals'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="hover:text-primary transition-colors duration-200 inline-block hover:translate-x-1 transform transition-transform">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Company</h4>
                        <ul className="space-y-2.5 text-sm">
                            {['About Us', 'Careers', 'Press & Media', 'Blog', 'Sustainability'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="hover:text-primary transition-colors duration-200 inline-block hover:translate-x-1 transform transition-transform">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Customer Care</h4>
                        <ul className="space-y-2.5 text-sm">
                            {['Help Center', 'Track Order', 'Returns & Exchanges', 'Shipping Info', 'Contact Us'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="hover:text-primary transition-colors duration-200 inline-block hover:translate-x-1 transform transition-transform">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials & Connect */}
                    <div>
                        <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Connect With Us</h4>
                        <p className="text-xs text-slate-400 mb-4">Follow our social channels for behind-the-scenes content.</p>
                        <div className="flex gap-3">
                            {/* Twitter / X */}
                            <a href="#" aria-label="Twitter" className="p-2.5 bg-slate-800 hover:bg-primary hover:text-white text-slate-300 rounded-xl transition-all duration-300 hover:scale-110 shadow-sm">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            {/* YouTube */}
                            <a href="#" aria-label="YouTube" className="p-2.5 bg-slate-800 hover:bg-red-600 hover:text-white text-slate-300 rounded-xl transition-all duration-300 hover:scale-110 shadow-sm">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                                </svg>
                            </a>
                            {/* Facebook */}
                            <a href="#" aria-label="Facebook" className="p-2.5 bg-slate-800 hover:bg-blue-600 hover:text-white text-slate-300 rounded-xl transition-all duration-300 hover:scale-110 shadow-sm">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar: Copyright & Legal */}
                <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
                    <p>© {new Date().getFullYear()} Storeify Inc. All rights reserved.</p>
                    
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-slate-300 transition-colors">Cookie Settings</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;