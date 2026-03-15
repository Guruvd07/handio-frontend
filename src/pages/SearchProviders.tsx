'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import styles from "./SearchProviders.module.css";

function SearchProviders() {
  const { t } = useLanguage();

  const [filters, setFilters] = useState<any>({
    categories: [],
    cities: [],
    areas: []
  });

  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);

  useEffect(() => {
    loadFilters();
  }, []);

  const loadFilters = async () => {
    try {
      const res = await axios.get("http://localhost:5000/providers/filters/options");
      setFilters(res.data);
    } catch (err) {
      console.error("Failed to load filters", err);
    }
  };

  const search = async () => {
    try {
      setLoading(true);
      setSearchPerformed(true);
      const res = await axios.get("http://localhost:5000/providers", {
        params: { category, city, area }
      });
      setResults(res.data);
    } catch (err) {
      console.error("Search failed", err);
    } finally {
      setLoading(false);
    }
  };

  const clearFilters = () => {
    setCategory("");
    setCity("");
    setArea("");
    search();
  };

  const formatName = (name: string) => {
    if (!name || name === "Unknown") return name;
    return name
      .split(' ')
      .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join(' ');
  };

  const formatPrice = (provider: any) => {
    if (!provider.priceAmount) return "Price N/A";
    const type = provider.priceType
      ? provider.priceType.charAt(0).toUpperCase() + provider.priceType.slice(1)
      : "";
    return `₹${provider.priceAmount.toLocaleString()}${type ? `/${type}` : ""}`;
  };

  return (
    <div className={styles.spPage}>
      <div className={styles.spContainer}>

        {/* ── Header ── */}
        <div className={styles.spHeader}>
          <span className={styles.spBadge}>🔍 Find Services</span>
          <h1 className={styles.spTitle}>
            {t('searchProviders.title') || "Find Trusted Professionals"}
          </h1>
          <p className={styles.spSubtitle}>
            {t('searchProviders.subtitle') || "Search from our verified network of service providers"}
          </p>
        </div>

        {/* ── Filters ── */}
        <div className={styles.spFilters}>
          <div className={styles.spFiltersGrid}>

            <div className={styles.spFilterGroup}>
              <label className={styles.spFilterLabel}>Category</label>
              <select
                className={styles.spSelect}
                value={category}
                onChange={e => setCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {filters.categories.map((c: any) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className={styles.spFilterGroup}>
              <label className={styles.spFilterLabel}>City</label>
              <select
                className={styles.spSelect}
                value={city}
                onChange={e => setCity(e.target.value)}
              >
                <option value="">All Cities</option>
                {filters.cities.map((c: any) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            <div className={styles.spFilterGroup}>
              <label className={styles.spFilterLabel}>Area</label>
              <select
                className={styles.spSelect}
                value={area}
                onChange={e => setArea(e.target.value)}
              >
                <option value="">All Areas</option>
                {filters.areas.map((a: any) => (
                  <option key={a} value={a}>{a}</option>
                ))}
              </select>
            </div>

          </div>

          <div className={styles.spFilterActions}>
            <button
              className={styles.spSearchBtn}
              onClick={search}
              disabled={loading}
            >
              {loading ? (
                <span className={styles.spBtnLoading}>
                  <span className={styles.spBtnSpinner} />
                  Searching…
                </span>
              ) : (
                <><span>🔍</span> Search Providers</>
              )}
            </button>

            {(category || city || area) && (
              <button className={styles.spClearBtn} onClick={clearFilters}>
                ✕ Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* ── Results ── */}
        <div className={styles.spResults}>

          {searchPerformed && !loading && (
            <div className={styles.spResultsHeader}>
              <h2 className={styles.spResultsCount}>
                {results.length} {results.length === 1 ? 'Provider' : 'Providers'} Found
              </h2>
              {(category || city || area) && (
                <p className={styles.spResultsSub}>Matching your search criteria</p>
              )}
            </div>
          )}

          {loading && (
            <div className={styles.spLoadingState}>
              <div className={styles.spLoadingSpinner} />
              <p>{t('searchProviders.findingProviders') || "Finding the best providers for you…"}</p>
            </div>
          )}

          {searchPerformed && !loading && results.length === 0 && (
            <div className={styles.spEmptyState}>
              <span className={styles.spEmptyIcon}>🔍</span>
              <h3>No Providers Found</h3>
              <p>Try adjusting your filters or search criteria</p>
              <button className={styles.spClearFiltersBtn} onClick={clearFilters}>
                Clear All Filters
              </button>
            </div>
          )}

          {!loading && results.length > 0 && (
            <div className={styles.spGrid}>
              {results.map((provider) => {
                const name = provider.userId?.name ?? "Professional";
                const formattedName = formatName(name);

                return (
                  <Link
                    to={`/provider/${provider._id}`}
                    key={provider._id}
                    className={styles.spCardLink}
                  >
                    <div className={styles.spCard}>

                      {/* Photo — strictly contained */}
                      <div className={styles.spCardImgBox}>
                        <img
                          src={provider.profilePhoto || "https://placehold.co/400x240"}
                          alt={formattedName}
                          className={styles.spCardImg}
                        />
                        {provider.verified && (
                          <span className={styles.spVerifiedBadge}>✓</span>
                        )}
                        <span className={styles.spCatPill}>{provider.category}</span>
                      </div>

                      {/* Card body */}
                      <div className={styles.spCardBody}>

                        <h3 className={styles.spProviderName}>{formattedName}</h3>

                        <p className={styles.spProviderLocation}>
                          📍 {provider.area}, {provider.city}
                        </p>

                        <div className={styles.spCardMeta}>
                          <div className={styles.spRating}>
                            <span className={styles.spStars}>
                              {'★'.repeat(Math.round(provider.averageRating || 0))}
                              {'☆'.repeat(5 - Math.round(provider.averageRating || 0))}
                            </span>
                            <span className={styles.spRatingVal}>
                              {provider.averageRating?.toFixed(1) || "0.0"}
                            </span>
                          </div>
                          <span className={styles.spPrice}>{formatPrice(provider)}</span>
                        </div>

                        {provider.description && (
                          <p className={styles.spDesc}>
                            {provider.description.substring(0, 70)}…
                          </p>
                        )}

                        <div className={styles.spViewBtn}>
                          View Profile →
                        </div>

                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default SearchProviders;