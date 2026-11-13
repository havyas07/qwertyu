import React from 'react';
import { Clock, Calendar, User } from 'lucide-react';
import { HEALTH_ARTICLES } from '../data/hospitalData';

export const HealthArticlesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16A6A1]/10 text-[#16A6A1] text-xs font-bold uppercase tracking-wider mb-3">
              <span>Medical Insights & Prevention</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#12345A] font-heading tracking-tight">
              HAVYAS HOSPITAL Health Education
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-xl">
              Clinically reviewed medical articles and preventative guidelines authored by our senior faculty.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="text-xs font-bold text-[#16A6A1] bg-[#16A6A1]/10 px-3 py-1.5 rounded-lg">
              Updated November 2026
            </span>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HEALTH_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-premium transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#12345A]/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  {article.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-3 text-[11px] text-slate-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#16A6A1]" />
                      <span>{article.date}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#16A6A1]" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#12345A] font-heading group-hover:text-[#16A6A1] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#16A6A1]" />
                    <span className="truncate max-w-[180px]">{article.author}</span>
                  </span>
                  <span className="text-[#16A6A1] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center">
                    Read &rarr;
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
