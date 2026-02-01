/**
 * Placeholder component for images - use until real images are implemented
 */
export function PlaceholderImage({
  width = 400,
  height = 300,
  text = "Image",
  className = "",
}: {
  width?: number;
  height?: number;
  text?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-primary-200 to-primary-400 text-primary-800 font-semibold ${className}`}
      style={{ minWidth: width, minHeight: height }}
    >
      {text}
    </div>
  );
}
