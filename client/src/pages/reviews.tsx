import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ReviewCard } from "@/components/ui/review-card";
import { ReviewForm } from "@/components/ui/review-form";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { type Review } from "@shared/schema";

const REVIEWS_PER_PAGE = 6;

export default function Reviews() {
  const [, setLocation] = useLocation();
  const [currentPage, setCurrentPage] = useState(1);
  const [showForm, setShowForm] = useState(false);

  // Fetch reviews
  const { data: reviews = [], isLoading: reviewsLoading } = useQuery<Review[]>({
    queryKey: ["/api/reviews"],
  });

  // Calculate pagination
  const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);
  const startIndex = (currentPage - 1) * REVIEWS_PER_PAGE;
  const endIndex = startIndex + REVIEWS_PER_PAGE;
  const currentReviews = reviews.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFormSuccess = () => {
    setShowForm(false);
    setCurrentPage(1); // Go to first page to see the new review
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-between mb-8"
          >
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => setLocation("/")}
                className="text-white hover:bg-slate-800 transition-colors"
                data-testid="button-back-home"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </div>
            
            <Button
              onClick={() => setShowForm(!showForm)}
              className="crypto-gradient text-white hover:opacity-90 transition-all duration-300"
              data-testid="button-toggle-review-form"
            >
              {showForm ? "Hide Form" : "Write Review"}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional <span className="bg-gradient-to-r from-crypto-blue to-crypto-green bg-clip-text text-transparent">Testimonials</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Verified feedback from our community of professional investors and financial experts
            </p>
          </motion.div>
        </div>
      </div>

      {/* Review Form */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5 }}
          className="px-6 mb-12"
        >
          <div className="max-w-2xl mx-auto">
            <ReviewForm onSuccess={handleFormSuccess} />
          </div>
        </motion.div>
      )}

      {/* Reviews Grid */}
      <div className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          {reviewsLoading ? (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 animate-pulse"
                  data-testid={`skeleton-review-${i}`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-slate-700 rounded-full"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-slate-700 rounded w-32"></div>
                      <div className="h-3 bg-slate-700 rounded w-20"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-slate-700 rounded"></div>
                    <div className="h-4 bg-slate-700 rounded w-3/4"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : reviews.length > 0 ? (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-12"
              >
                {currentReviews.map((review, index) => (
                  <motion.div
                    key={review.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ReviewCard review={review} />
                  </motion.div>
                ))}
              </motion.div>

              {/* Pagination */}
              {totalPages > 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex items-center justify-center gap-4"
                >
                  {currentPage > 1 && (
                    <Button
                      variant="ghost"
                      onClick={() => handlePageChange(currentPage - 1)}
                      className="text-white hover:bg-slate-800 transition-colors"
                      data-testid="button-prev-page"
                    >
                      &lt; Previous page
                    </Button>
                  )}

                  <div className="flex items-center gap-1">
                    <span className="text-white font-bold px-2 py-1" data-testid={`text-current-page-${currentPage}`}>
                      [{currentPage}]
                    </span>
                  </div>

                  {currentPage < totalPages && (
                    <Button
                      variant="ghost"
                      onClick={() => handlePageChange(currentPage + 1)}
                      className="text-white hover:bg-slate-800 transition-colors"
                      data-testid="button-next-page"
                    >
                      Next page &gt;
                    </Button>
                  )}
                </motion.div>
              )}
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center py-24"
            >
              <h3 className="text-2xl text-slate-400 mb-4">No reviews yet</h3>
              <p className="text-slate-500 mb-8">
                Be the first to share your experience with TradePilot!
              </p>
              <Button
                onClick={() => setShowForm(true)}
                className="crypto-gradient text-white hover:opacity-90 transition-all duration-300"
                data-testid="button-write-first-review"
              >
                Write the First Review
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}