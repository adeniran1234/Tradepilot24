import { Star, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { type Review } from "@shared/schema";

interface ReviewCardProps {
  review: Review;
  showAdminReply?: boolean;
}

export function ReviewCard({ review, showAdminReply = true }: ReviewCardProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating
            ? "fill-yellow-400 text-yellow-400"
            : "text-slate-400"
        }`}
      />
    ));
  };

  return (
    <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
      <CardContent className="p-6">
        {/* User Info */}
        <div className="flex items-start gap-4 mb-4">
          <Avatar className="w-12 h-12 bg-gradient-to-br from-crypto-blue to-crypto-green">
            <AvatarFallback className="text-white font-semibold bg-transparent">
              {getInitials(review.name)}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-semibold text-lg" data-testid={`text-username-${review.id}`}>
                {review.name}
              </h3>
            </div>
            
            {/* Star Rating */}
            <div className="flex items-center gap-2 mb-3" data-testid={`rating-${review.id}`}>
              <div className="flex gap-1">
                {renderStars(review.rating)}
              </div>
              <span className="text-slate-300 text-sm">
                ({review.rating}/5)
              </span>
            </div>
          </div>
        </div>

        {/* Review Text */}
        <div className="mb-4">
          <p className="text-slate-200 leading-relaxed" data-testid={`text-review-${review.id}`}>
            {review.reviewText}
          </p>
        </div>

        {/* Review Image */}
        {review.image && (
          <div className="mb-4">
            <img
              src={review.image}
              alt="Review image"
              className="rounded-lg max-w-full h-auto max-h-64 object-cover"
              data-testid={`img-review-${review.id}`}
            />
          </div>
        )}

        {/* Admin Reply */}
        {showAdminReply && review.adminReply && (
          <div className="mt-4 border-t border-slate-700 pt-4">
            <div className="bg-gradient-to-r from-crypto-blue/10 to-crypto-green/10 rounded-lg p-4 border border-crypto-blue/20">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-gradient-to-br from-crypto-blue to-crypto-green rounded-full">
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-crypto-blue font-medium text-sm mb-2" data-testid={`admin-reply-label-${review.id}`}>
                    📢 Official TradePilot Response
                  </h4>
                  <p className="text-slate-200 text-sm leading-relaxed" data-testid={`admin-reply-${review.id}`}>
                    {review.adminReply}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}