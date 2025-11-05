import { Play } from 'lucide-react';
import { cn } from '@/lib/utils';

interface VideoSkeletonProps {
  poster?: string;
  onClick?: () => void;
  className?: string;
  showPlayButton?: boolean;
}

/**
 * Video Skeleton Component
 * Shows poster image with optional play button while video loads
 */
export const VideoSkeleton = ({
  poster,
  onClick,
  className = '',
  showPlayButton = false
}: VideoSkeletonProps) => {
  return (
    <div
      className={cn(
        'relative w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden',
        onClick && 'cursor-pointer group',
        className
      )}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {/* Poster Image */}
      {poster && (
        <img
          src={poster}
          alt="Video thumbnail"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      )}
      
      {/* Animated gradient overlay when no poster */}
      {!poster && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent animate-pulse" />
      )}
      
      {/* Play Button */}
      {showPlayButton && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-background/80 backdrop-blur-sm p-6 rounded-full transition-transform group-hover:scale-110">
            <Play className="w-12 h-12 text-primary" fill="currentColor" />
          </div>
        </div>
      )}
      
      {/* Loading indicator overlay */}
      {!poster && !showPlayButton && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto" />
            <p className="text-sm text-muted-foreground">Loading video...</p>
          </div>
        </div>
      )}
    </div>
  );
};
