export function formatSalary(min: number, max: number) {
  return `₹${min}–${max} LPA`;
}
export function timeAgo(days: number) {
  if (days === 0) return "Today";
  if (days === 1) return "1 day ago";
  return `${days} days ago`;
}