import { cn } from '@/lib/utils';

interface ImageSkeletonProps {
  className?: string;
}

/**
 * Image Skeleton Component
 * Lightweight placeholder while image loads
 */
export const ImageSkeleton = ({ className = '' }: ImageSkeletonProps) => {
  return (
    <div
      className={cn(
        'absolute inset-0 bg-gradient-to-br from-muted via-muted/50 to-muted animate-pulse',
        className
      )}
      aria-label="Loading image"
    >
      {/* Subtle shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/10 to-transparent animate-shimmer" />
    </div>
  );
};
