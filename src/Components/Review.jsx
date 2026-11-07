import React from 'react';
import { Star, CheckCircle, ThumbsUp, Quote, Building2, Home, PackageCheck } from 'lucide-react';

const REVIEWS_DATA = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Homeowner",
    icon: Home,
    rating: 5,
    title: "Game changer for garage organization!",
    content: "Bought 12 heavy-duty totes for our garage overhaul. They stack perfectly without bowing, and the latching lids keep all dust and dampness out. Super impressed with the build quality.",
    verified: true,
    date: "2 weeks ago",
    purchasedItem: "50L Heavy-Duty Storage Tote (Pack of 4)"
  },
  {
    id: 2,
    name: "Marcus Vance",
    role: "Warehouse Operations Lead",
    icon: Building2,
    rating: 5,
    title: "Best commercial bins we've used",
    content: "We ordered bulk industrial nesting crates for inventory picking. Extremely durable plastic—none have cracked even under heavy tool loads. Fast shipping too!",
    verified: true,
    date: "1 month ago",
    purchasedItem: "Industrial Nesting Crates (Bulk Pack)"
  },
  {
    id: 3,
    name: "Elena Rostova",
    role: "Professional Organizer",
    icon: PackageCheck,
    rating: 5,
    title: "Crystal clear clarity for pantry projects",
    content: "My clients love the clear acrylic bin line. You can actually see what’s inside, and the BPA-free rating gives everyone peace of mind for storing snacks and produce.",
    verified: true,
    date: "3 weeks ago",
    purchasedItem: "Ultra-Clear Pantry Organizers"
  }
];

const STATS = [
  { label: "Average Rating", value: "4.9 / 5.0" },
  { label: "Verified Reviews", value: "15,000+" },
  { label: "On-Time Delivery", value: "99.4%" },
  { label: "Repeat Customers", value: "88%" }
];

export default function Reviews() {
  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Subtle Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-medium">
            <ThumbsUp className="w-4 h-4" />
            <span>Trusted by 50,000+ Homes & Businesses</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Loved by Organizers, Built for <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Real Life</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            See how our durable plastic containers are helping everyday homeowners and commercial warehouses stay clutter-free.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
          {STATS.map((stat, index) => (
            <div key={index} className="text-center space-y-1">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400">{stat.value}</div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS_DATA.map((review) => {
            const RoleIcon = review.icon;
            return (
              <div 
                key={review.id}
                className="flex flex-col justify-between p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/40 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-xl relative group"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-800 group-hover:text-cyan-500/10 transition-colors pointer-events-none" />

                <div className="space-y-4 relative z-10">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Title & Content */}
                  <h3 className="font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                    "{review.title}"
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {review.content}
                  </p>
                </div>

                {/* Reviewer Details Footer */}
                <div className="mt-8 pt-6 border-t border-slate-800/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-white text-sm flex items-center gap-2">
                        {review.name}
                        {review.verified && (
                          <span className="inline-flex items-center gap-1 text-[10px] text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded-full border border-cyan-800/50">
                            <CheckCircle className="w-3 h-3" /> Verified
                          </span>
                        )}
                      </h4>
                      <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                        <RoleIcon className="w-3.5 h-3.5 text-slate-500" />
                        {review.role}
                      </p>
                    </div>
                    <span className="text-xs text-slate-500">{review.date}</span>
                  </div>

                  {/* Tag for Item Purchased */}
                  <div className="text-[11px] text-slate-400 bg-slate-950/80 px-2.5 py-1 rounded-md border border-slate-800/60 truncate">
                    <span className="text-slate-500">Item:</span> {review.purchasedItem}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}