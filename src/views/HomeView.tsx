import React from 'react';
import { ArrowRight, Sparkles, Shield, ArrowUpRight, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/ProductCard';
import vongNuCoMayImage from '../assets/images/vong_nu_co_may_1791987391669.jpg';
import vongNuAnhSaoImage from '../assets/images/vong_nu_anh_sao_1791987393999.jpg';
import vongNamGocCanhImage from '../assets/images/vong_nam_goc_canh_1791987395203.jpg';
import vongDoiSongHanhImage from '../assets/images/vong_doi_song_hanh_1791987395800.jpg';

export const HomeView: React.FC = () => {
  const { products, setActiveTab, setCatalogCategoryFilter, setCatalogSearchQuery } = useShop();

  const handleCategoryClick = (category: string) => {
    setCatalogCategoryFilter(category);
    setActiveTab('catalog');
  };

  const handleKeywordClick = (keyword: string) => {
    setCatalogCategoryFilter('all');
    setCatalogSearchQuery(keyword);
    setActiveTab('catalog');
  };

  // Best sellers
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 4);

  // New arrivals (Sản phẩm mới cập nhật)
  const newArrivals = products.filter((p) => p.isNew).slice(0, 8);

  // Focus on Vòng tay (Bracelets) & Lắc tay (Chains)
  const bracelets = products.filter((p) => p.category === 'vong-tay');
  const chains = products.filter((p) => p.category === 'lac-tay');

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* Editorial Luxury Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-zinc-800/80 bg-[#070709]">
        {/* Custom Luxury Background Layer inspired by CARA Monogram & Silver Ribbon Banner */}
        <div id="hero-luxury-background" className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          {/* Deep Textured Charcoal Base with Studio Lighting */}
          <div className="absolute inset-0 bg-[#070709]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(220,225,235,0.07)_0%,rgba(7,7,9,0.98)_72%)]" />

          {/* Top-Right: CARA CA Monogram Emblem (matching user's uploaded banner) */}
          <div className="absolute top-6 sm:top-10 right-6 sm:right-12 z-0 opacity-40">
            <svg width="110" height="110" viewBox="0 0 120 120" fill="none" className="w-20 h-20 sm:w-28 sm:h-28">
              <defs>
                <linearGradient id="monogramSilver" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f5f5f7" stopOpacity="0.85" />
                  <stop offset="40%" stopColor="#a1a1aa" stopOpacity="0.6" />
                  <stop offset="70%" stopColor="#ffffff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#71717a" stopOpacity="0.5" />
                </linearGradient>
                <filter id="monogramEmboss">
                  <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.8" />
                </filter>
              </defs>
              <g filter="url(#monogramEmboss)">
                {/* Intertwined Serif CA Monogram */}
                <path
                  d="M62 25 C42 25 28 39 28 60 C28 81 42 95 62 95 C74 95 83 89 87 81 L80 76 C76 82 70 86 62 86 C48 86 38 75 38 60 C38 45 48 34 62 34 C70 34 76 38 80 44 L87 39 C83 31 74 25 62 25 Z"
                  fill="url(#monogramSilver)"
                />
                <path
                  d="M75 28 L54 92 H63 L69 73 H87 L93 92 H102 L81 28 H75 Z M78 44 L84 65 H72 L78 44 Z"
                  fill="url(#monogramSilver)"
                  fillOpacity="0.9"
                />
              </g>
            </svg>
          </div>

          {/* Silver Ribbon Wave 1 (Upper-Left Arcing Down) */}
          <svg
            className="absolute -top-12 -left-12 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] opacity-75"
            viewBox="0 0 500 500"
            fill="none"
          >
            <defs>
              <linearGradient id="ribbonGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                <stop offset="25%" stopColor="#d4d4d8" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#71717a" stopOpacity="0.3" />
                <stop offset="85%" stopColor="#e4e4e7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#18181b" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d="M0 60 C120 40 220 120 200 240 C185 330 110 390 40 450 C30 460 20 470 0 490 L0 380 C60 320 120 280 130 210 C140 130 60 70 0 60 Z"
              fill="url(#ribbonGradLeft)"
            />
            <path
              d="M0 58 C122 38 222 118 202 238 C187 328 112 388 42 448"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeOpacity="0.85"
            />
          </svg>

          {/* 4-Point Sparkle Star near Top-Left Ribbon */}
          <div className="absolute top-16 left-16 sm:left-24 opacity-80 animate-pulse">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 0 C12 7 17 12 24 12 C17 12 12 17 12 24 C12 17 7 12 0 12 C7 12 12 7 12 0 Z"
                fill="#ffffff"
              />
            </svg>
          </div>

          {/* Bottom-Left Composition: Dark Basalt Rock Texture + Silver Ring Accent */}
          <div className="absolute -bottom-10 -left-10 sm:left-0 sm:bottom-0 w-64 sm:w-80 h-64 sm:h-80 opacity-60 mix-blend-screen pointer-events-none">
            <svg viewBox="0 0 320 320" fill="none" className="w-full h-full">
              <defs>
                <linearGradient id="ringMetal" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f4f4f5" />
                  <stop offset="30%" stopColor="#a1a1aa" />
                  <stop offset="60%" stopColor="#ffffff" />
                  <stop offset="90%" stopColor="#71717a" />
                </linearGradient>
              </defs>
              {/* Rock Silhouettes */}
              <path
                d="M-20 340 L10 240 L60 210 L120 230 L160 270 L190 340 Z"
                fill="#121215"
              />
              {/* Sculptural Silver Ring resting on rock */}
              <ellipse
                cx="100"
                cy="255"
                rx="65"
                ry="26"
                transform="rotate(-22 100 255)"
                stroke="url(#ringMetal)"
                strokeWidth="11"
                fill="none"
              />
              <ellipse
                cx="100"
                cy="255"
                rx="58"
                ry="20"
                transform="rotate(-22 100 255)"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeOpacity="0.8"
                fill="none"
              />
            </svg>
          </div>

          {/* Bottom-Right: Sweeping Silver Ribbon Wave + Rock Accent */}
          <svg
            className="absolute -bottom-8 -right-8 w-[320px] sm:w-[480px] h-[240px] sm:h-[360px] opacity-75"
            viewBox="0 0 480 360"
            fill="none"
          >
            <defs>
              <linearGradient id="ribbonGradRight" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
                <stop offset="35%" stopColor="#d4d4d8" stopOpacity="0.5" />
                <stop offset="70%" stopColor="#52525b" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#18181b" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Rock facet */}
            <path
              d="M400 360 L440 260 L480 230 L500 360 Z"
              fill="#18181c"
            />
            {/* Fluid ribbon */}
            <path
              d="M480 200 C430 250 360 310 260 330 C190 345 130 348 80 355 L90 360 C150 355 220 345 290 325 C390 295 440 240 480 200 Z"
              fill="url(#ribbonGradRight)"
            />
            <path
              d="M480 198 C430 248 358 308 258 328 C188 343 128 346 78 353"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeOpacity="0.8"
            />
          </svg>

          {/* 4-Point Sparkle Star near Bottom-Right */}
          <div className="absolute bottom-16 right-28 sm:right-44 opacity-80">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 0 C12 7 17 12 24 12 C17 12 12 17 12 24 C12 17 7 12 0 12 C7 12 12 7 12 0 Z"
                fill="#ffffff"
              />
            </svg>
          </div>

          {/* Vignette Overlay for pristine text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />
        </div>

        <div id="hero-content-container" className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-8">
          {/* Subtle Tag */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-zinc-300 text-xs tracking-[0.25em] uppercase backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
            <span>Vòng Bạc 925 • Tối Giản • Sáng Bóng</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            id="hero-main-headline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-brand text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] font-bold tracking-tight text-white uppercase leading-[1.2]"
          >
            Vòng Bạc <br />
            <span className="block text-zinc-300 font-semibold tracking-[0.06em] mt-1 sm:mt-2">
              CARA
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-zinc-300 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed tracking-wide"
          >
            Thương hiệu kim hoàn tối giản đương đại dành cho mọi giới tính. Đúc nguyên khối từ bạc S925 tinh khiết phủ Rhodium phản quang ánh gương sang trọng.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <button
              type="button"
              onClick={() => handleCategoryClick('vong-tay')}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-zinc-200 font-semibold text-xs uppercase tracking-[0.2em] rounded-xl shadow-2xl shadow-white/10 transition-all flex items-center justify-center gap-2 group"
              id="hero-cta-bracelets"
            >
              <span>Khám Phá Vòng Bạc</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              type="button"
              onClick={() => handleCategoryClick('lac-tay')}
              className="w-full sm:w-auto px-8 py-4 bg-zinc-900/90 hover:bg-zinc-800 text-white border border-zinc-700/80 font-semibold text-xs uppercase tracking-[0.2em] rounded-xl backdrop-blur-md transition-all flex items-center justify-center gap-2 group"
              id="hero-cta-chains"
            >
              <span>Khám Phá Lắc Bạc</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* VÒNG BẠC TÌM KIẾM HÀNG ĐẦU (Top 1 Keyword Feature) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="top-search-keywords-section">
        <div className="text-center mb-8 sm:mb-12 space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-brand text-white uppercase tracking-[0.2em]">
            VÒNG BẠC TÌM KIẾM HÀNG ĐẦU
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-light tracking-wide max-w-lg mx-auto">
            Bộ sưu tập các dòng sản phẩm bạc S925 đứng đầu lượt tìm kiếm và yêu thích tại CARA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
          {/* Card 1: VÒNG TAY BẠC NỮ */}
          <div
            onClick={() => handleKeywordClick('nữ')}
            className="group relative aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer border border-zinc-800/90 hover:border-zinc-500 transition-all duration-500 shadow-xl shadow-black/50 bg-zinc-950"
            id="top-keyword-vong-nu"
          >
            <img
              src={vongNuCoMayImage}
              alt="Vòng tay bạc nữ CARA"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark gradient for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            {/* Small 'TRANG CHỦ' badge on bottom-left, matching sample */}
            <div className="absolute bottom-20 left-6 sm:left-8 z-10">
              <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-sm border border-zinc-700/80 text-[10px] uppercase font-bold tracking-widest text-zinc-300">
                Trang Chủ
              </span>
            </div>

            {/* Bottom Button Bar */}
            <div className="absolute bottom-5 inset-x-6 sm:inset-x-8 z-10">
              <div className="w-full py-3 sm:py-3.5 bg-white text-black font-brand font-bold text-xs sm:text-sm uppercase tracking-[0.18em] rounded-xl text-center shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                Vòng Tay Bạc Nữ
              </div>
            </div>
          </div>

          {/* Card 2: TOP 1 TÌM KIẾM - VÒNG BẠC NAM (BÁN CHẠY NHẤT) */}
          <div
            onClick={() => handleKeywordClick('nam')}
            className="group relative aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer border-2 border-zinc-400/90 hover:border-white transition-all duration-500 shadow-2xl shadow-black/80 md:-translate-y-3 bg-zinc-950 ring-1 ring-white/20"
            id="top-keyword-vong-nam"
          >
            {/* Top-Left '★ TOP 1 TÌM KIẾM' Badge matching user's sample */}
            <div className="absolute top-4 left-4 z-20">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-black/90 backdrop-blur-md border border-zinc-600 text-[11px] uppercase font-bold tracking-wider text-white shadow-xl">
                <span className="text-amber-400">★</span> TOP 1 TÌM KIẾM
              </span>
            </div>

            <img
              src={vongNamGocCanhImage}
              alt="Vòng bạc nam bán chạy nhất CARA"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark gradient for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

            {/* Bottom Button Bar: Black with White text, exactly as in sample */}
            <div className="absolute bottom-5 inset-x-6 sm:inset-x-8 z-10">
              <div className="w-full py-3.5 sm:py-4 bg-black/95 text-white font-brand font-bold text-xs sm:text-sm uppercase tracking-[0.18em] rounded-xl text-center border border-zinc-700 shadow-2xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:border-zinc-500">
                Vòng Bạc Nam (Bán Chạy Nhất)
              </div>
            </div>
          </div>

          {/* Card 3: VÒNG BẠC ĐÔI */}
          <div
            onClick={() => handleKeywordClick('đôi')}
            className="group relative aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer border border-zinc-800/90 hover:border-zinc-500 transition-all duration-500 shadow-xl shadow-black/50 bg-zinc-950"
            id="top-keyword-vong-doi"
          >
            <img
              src={vongDoiSongHanhImage}
              alt="Vòng bạc đôi CARA"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Dark gradient for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            {/* Bottom Button Bar */}
            <div className="absolute bottom-5 inset-x-6 sm:inset-x-8 z-10">
              <div className="w-full py-3 sm:py-3.5 bg-white text-black font-brand font-bold text-xs sm:text-sm uppercase tracking-[0.18em] rounded-xl text-center shadow-lg transition-transform duration-300 group-hover:-translate-y-1">
                Vòng Bạc Đôi
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-zinc-500 font-semibold">
              Khám phá theo danh mục
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-brand text-white mt-1">
              Bộ Sưu Tập Vòng Bạc CARA
            </h2>
          </div>
          <button
            type="button"
            onClick={() => handleCategoryClick('all')}
            className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 transition"
          >
            <span>Xem tất cả ({products.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card: Vòng bạc */}
          <div
            onClick={() => handleCategoryClick('vong-tay')}
            className="group relative aspect-[16/10] sm:aspect-[2/1] md:aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer border border-zinc-800 hover:border-zinc-500 transition-all shadow-xl shadow-black/40"
            id="cat-card-vong-tay"
          >
            <img
              src={vongDoiSongHanhImage}
              alt="Vòng bạc CARA"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
              <span className="text-[10px] uppercase tracking-widest text-zinc-400">{bracelets.length} Mẫu Thiết Kế</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-brand mt-1 flex items-center justify-between">
                <span>Vòng Bạc (Cuffs & Bangles)</span>
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-xs text-zinc-300 mt-1 line-clamp-2">
                Tuyển tập vòng bạc nữ tim đôi, nơ hồng, kiềng nam góc cạnh và vòng bạc đôi song hành đúc từ bạc Ý S925.
              </p>
            </div>
          </div>

          {/* Card: Lắc bạc */}
          <div
            onClick={() => handleCategoryClick('lac-tay')}
            className="group relative aspect-[16/10] sm:aspect-[2/1] md:aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer border border-zinc-800 hover:border-zinc-500 transition-all shadow-xl shadow-black/40"
            id="cat-card-lac-tay"
          >
            <img
              src={vongNuAnhSaoImage}
              alt="Lắc bạc CARA"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
              <span className="text-[10px] uppercase tracking-widest text-zinc-400">{chains.length} Mẫu Thiết Kế</span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-brand mt-1 flex items-center justify-between">
                <span>Lắc Bạc (Chains & Links)</span>
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-xs text-zinc-300 mt-1 line-clamp-2">
                Tuyển tập lắc bạc nữ cỏ may, ánh sao, giọt sương, mơ mộng và lắc bạc nam tối giản, đêm đen cá tính.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Showcase: BỘ SƯU TẬP MỚI RA MẮT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold mb-1">
              <Sparkles className="w-4 h-4 text-white" />
              <span>Sản Phẩm Mới Ra Mắt • 180.000₫ – 380.000₫</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-brand text-white">
              Bộ Sưu Tập Mới Nhất Vòng Bạc Cara
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
              Cập nhật 10 thiết kế vòng tay & lắc tay mới nhất từ bạc S925 chuẩn tuổi: Vòng Bạc Nữ Cỏ May, Ánh Sao, Tim Đôi, Nam Tối Giản, Đêm Đen, Đôi Song Hành...
            </p>
          </div>
          <button
            type="button"
            onClick={() => handleCategoryClick('all')}
            className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700/80 text-xs font-semibold uppercase tracking-wider rounded-xl transition flex items-center gap-2 self-start sm:self-auto"
          >
            <span>Xem Tất Cả ({products.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Featured Spotlight: VÒNG TAY BẠC CARA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-[#15151a] to-[#0f0f13] border border-zinc-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-[10px] uppercase font-bold tracking-widest border border-zinc-700">
                Tâm Điểm Thiết Kế
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-brand text-white">
                Bộ Sưu Tập Vòng Bạc Cara
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed">
                Được chế tác từ Bạc Ý 925 nguyên khối với phong cách hình học tối giản, phù hợp cho cả nam và nữ dễ dàng phối lớp (stacking) hoặc đeo đơn bản.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleCategoryClick('vong-tay')}
              className="px-5 py-2.5 bg-white text-black hover:bg-zinc-200 text-xs font-semibold uppercase tracking-wider rounded-xl transition flex items-center gap-2 self-start md:self-end"
            >
              <span>Xem Thêm Vòng Bạc</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              {bracelets[0] && <ProductCard product={bracelets[0]} />}
            </div>
            <div className="md:col-span-2 rounded-2xl bg-zinc-900/50 border border-zinc-800 p-6 sm:p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400/90">
                  <Sparkles className="w-4 h-4" />
                  <span>Chế Tác Kiềng Bạc Phay Xước S925</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-brand text-white">
                  Vòng Bạc Nam Góc Cạnh (CARA-09) — 350.000₫
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  Thiết kế kiềng mở nam vát góc đa diện cơ học dứt khoát, phong cách Urban Modernist bề mặt phay xước mờ tạo phong thái đĩnh đạc, chống bám dấu vân tay khi sử dụng hàng ngày.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-3 bg-zinc-950/60 rounded-xl border border-zinc-800/80">
                    <span className="text-[10px] text-zinc-500 uppercase block">Chất liệu</span>
                    <span className="text-xs font-semibold text-white">Bạc S925 đúc</span>
                  </div>
                  <div className="p-3 bg-zinc-950/60 rounded-xl border border-zinc-800/80">
                    <span className="text-[10px] text-zinc-500 uppercase block">Giá niêm yết</span>
                    <span className="text-xs font-bold text-emerald-400">350.000₫</span>
                  </div>
                  <div className="p-3 bg-zinc-950/60 rounded-xl border border-zinc-800/80 col-span-2 sm:col-span-1">
                    <span className="text-[10px] text-zinc-500 uppercase block">Bảo hành</span>
                    <span className="text-xs font-semibold text-white">Trọn đời</span>
                  </div>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-xs text-zinc-400">Hỗ trợ thử ni tay và giao hỏa tốc 2H tại TP.HCM</span>
                <span className="text-xs font-semibold text-white">Freeship toàn quốc đơn từ 300k</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Spotlight: LẮC BẠC CARA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-[#15151a] to-[#0f0f13] border border-zinc-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-[10px] uppercase font-bold tracking-widest border border-zinc-700">
                Xu Hướng Đương Đại
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-brand text-white">
                Bộ Sưu Tập Lắc Bạc Cara
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed">
                Lắc tay nữ Cỏ May, Ánh Sao, Giọt Sương, Mơ Mộng cùng lắc nam Tối Giản và Đêm Đen. Giá chỉ từ 180.000₫ đến 320.000₫.
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleCategoryClick('lac-tay')}
              className="px-5 py-2.5 bg-white text-black hover:bg-zinc-200 text-xs font-semibold uppercase tracking-wider rounded-xl transition flex items-center gap-2 self-start md:self-end"
            >
              <span>Xem Tất Cả Lắc Bạc</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Lắc tay grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {chains.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold">
            Được Yêu Thích Nhất
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-brand text-white">
            Sản Phẩm Bán Chạy (Best Sellers)
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto">
            Những biểu tượng trang sức bạc được khách hàng lựa chọn nhiều nhất tại hệ thống CARA.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Brand Philosophy / Craftsmanship Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-zinc-800 rounded-3xl overflow-hidden bg-zinc-950 grid grid-cols-1 lg:grid-cols-2">
          <div className="p-8 sm:p-14 flex flex-col justify-center space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-bold">
              Triết Lý Chế Tác
            </span>
            <h2 className="text-2xl sm:text-4xl font-brand font-bold text-white leading-tight">
              Tối Giản, Bền Bỉ & <br />
              Vượt Qua Mọi Giới Hạn
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              <p>
                Tại Vòng Bạc CARA, chúng tôi tin rằng trang sức không chỉ là phụ kiện làm đẹp, mà là biểu đạt chân thực cho bản sắc cá nhân. Không phân chia giới tính, không rườm rà phô trương.
              </p>
              <p>
                Mỗi sản phẩm đều trải qua quy trình đúc sáp áp lực cao, gia công tinh xảo bởi những nghệ nhân kim hoàn lành nghề và hoàn thiện bằng lớp mạ Rhodium bạch kim chống xỉn màu tối ưu.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-zinc-800 text-xs">
              <div className="space-y-1">
                <span className="text-xl font-bold text-white font-brand">92.5%</span>
                <p className="text-zinc-400">Hàm lượng bạc ròng chuẩn kiểm định Ý</p>
              </div>
              <div className="space-y-1">
                <span className="text-xl font-bold text-white font-brand">100%</span>
                <p className="text-zinc-400">Bảo hành đánh bóng & làm sạch trọn đời</p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[350px] lg:min-h-full bg-zinc-900 overflow-hidden">
            <img
              src={vongNamGocCanhImage}
              alt="CARA Craftsmanship"
              className="w-full h-full object-cover filter contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:hidden" />
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold">
            Đánh Giá Từ Khách Hàng
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-brand text-white">
            Trải Nghiệm Thực Tế Cùng CARA
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
              "Cặp Vòng Bạc Đôi Song Hành (CARA-10) đeo đôi cực kỳ ý nghĩa! Shop hỗ trợ khắc tên laser miễn phí rất sắc nét, người thương của mình thích mê."
            </p>
            <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-xs">
              <span className="font-semibold text-white">Khánh Linh & Hoàng Nam</span>
              <span className="text-zinc-500">TP. Hồ Chí Minh • Mua Vòng Bạc Đôi Song Hành</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
              "Vòng Bạc Nam Tối Giản (CARA-07) đeo cực kỳ đầm tay, nam tính và phong cách minimalism hiện đại. Phối cùng sơ mi hay áo phông đều rất phong độ."
            </p>
            <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-xs">
              <span className="font-semibold text-white">Trần Minh Quân</span>
              <span className="text-zinc-500">TP. HCM • Mua Vòng Bạc Nam Tối Giản</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
              "Vòng Bạc Nữ Cỏ May (CARA-01) mang lại cảm giác may mắn và bình an. Từng chi tiết nhỏ được gia công tỉ mỉ, hộp quà rất sang trọng!"
            </p>
            <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-xs">
              <span className="font-semibold text-white">Đặng Thảo Vy</span>
              <span className="text-zinc-500">TP. Hồ Chí Minh • Mua Vòng Bạc Nữ Cỏ May</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
