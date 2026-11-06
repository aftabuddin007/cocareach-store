import React from 'react';
import { ShoppingBag, ArrowRight, ShieldCheck, Box, Recycle, Sparkles, Truck } from 'lucide-react';

export default function HeroBanner() {
  return (
    <div className="relative overflow-hidden bg-white- text-white min-h-[600px] flex flex-col justify-center mt-10">
      {/* Background Subtle Patterns & Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Promo Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-medium backdrop-blur-md">
              <Sparkles className="w-4 h-4" />
              <span>Heavy-Duty & Food-Grade Storage Solutions</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Organize Your Space with <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Durable Plastic Containers</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-lg sm:text-xl max-w-2xl leading-relaxed">
              From heavy-duty industrial totes to crystal-clear pantry organizers. Premium BPA-free plastic boxes engineered to maximize your storage potential.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#shop"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold shadow-lg shadow-cyan-500/25 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <ShoppingBag className="w-5 h-5" />
                Shop All Boxes
              </a>
              <a
                href="#categories"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-semibold transition-all duration-200"
              >
                Explore Categories
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Value Proposition Highlights */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-slate-300">
              <div className="flex items-center gap-2.5">
                <Recycle className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium">100% Recyclable</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium">BPA-Free Safe</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Truck className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-xs sm:text-sm font-medium">Fast Dispatch</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Feature Cards Grid Overlay */}
              <div className="grid grid-cols-2 gap-4">
                
                <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700/60 shadow-xl backdrop-blur-sm transform hover:-translate-y-1 transition-transform">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-3">
                    <Box className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-white text-base">Heavy Duty Totes</h3>
                  <p className="text-xs text-slate-400 mt-1">Stackable & impact-resistant</p>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700/60 shadow-xl backdrop-blur-sm transform hover:-translate-y-1 transition-transform translate-y-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-3">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-white text-base">Clear Organizers</h3>
                  <p className="text-xs text-slate-400 mt-1">High-visibility storage</p>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700/60 shadow-xl backdrop-blur-sm transform hover:-translate-y-1 transition-transform -translate-y-2">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-3">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-white text-base">Food Grade</h3>
                  <p className="text-xs text-slate-400 mt-1">Air-tight pantry solutions</p>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700/60 shadow-xl backdrop-blur-sm transform hover:-translate-y-1 transition-transform translate-y-2">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-3">
                    <Recycle className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-white text-base">Eco Polypropylene</h3>
                  <p className="text-xs text-slate-400 mt-1">Sustainably manufactured</p>
                </div>

              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-cyan-500 text-slate-950 font-bold px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 text-sm">
                <span className="flex h-2.5 w-2.5 rounded-full bg-slate-950 animate-pulse" />
                Over 500+ Container Sizes
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}