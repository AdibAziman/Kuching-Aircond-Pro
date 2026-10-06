import React from 'react';
import { Star, CheckCircle2, MapPin, Building, Home } from 'lucide-react';
import { customerReviewsData } from '../../data/reviews';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-sky-700 tracking-wider uppercase mb-2">
            <span>Verified Customer Stories</span>
            <span aria-hidden="true">·</span>
            <span>Kuching, Samarahan & Batu Kawa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Loved by Over 340+ Sarawak Homes & Businesses
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Real feedback from homeowners, kopitiam owners, and property managers who said goodbye to contractor headaches.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customerReviewsData.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header: Stars & Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400">{review.date}</span>
                </div>

                {/* Service Tag */}
                <div className="inline-block text-[11px] font-semibold text-sky-800 bg-sky-50 px-2.5 py-0.5 rounded-md border border-sky-100 mb-3">
                  {review.serviceUsed}
                </div>

                {/* Comment Body */}
                <p className="text-xs text-slate-700 leading-relaxed mb-6">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">
                      {review.author}
                    </h4>
                    <div className="flex items-center gap-1 text-[11px] text-slate-500 mt-0.5">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{review.location}</span>
                    </div>
                  </div>

                  <span className="flex items-center gap-1 text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified Job</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
