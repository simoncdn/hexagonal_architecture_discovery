import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(firstName: string, lastName: string) {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`;
}

export function timeAgo(postTime: Date) {
  const now = new Date().getTime();
  const postTimeMs = new Date(postTime).getTime();
  const diffInSeconds = Math.floor((now - postTimeMs) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`;
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else if (diffInSeconds < 86400) {
    // Less than 24 hours
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (diffInSeconds < 86400 * 7) {
    // Less than 7 days
    const days = Math.floor(diffInSeconds / 86400);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (diffInSeconds < 86400 * 7 * 4) {
    // Less than 4 weeks
    const weeks = Math.floor(diffInSeconds / (86400 * 7));
    return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
  } else {
    const months = Math.floor(diffInSeconds / (86400 * 30)); // Approximation: one month is considered as 30 days
    return `${months} month${months > 1 ? 's' : ''} ago`;
  }
}
