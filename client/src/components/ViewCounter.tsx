import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export default function ViewCounter() {
  const [views, setViews] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAndIncrement = async () => {
      try {
        const response = await fetch(
          `https://api.countapi.xyz/hit/prabhatcs-portfolio/views`,
          { method: 'POST' }
        );
        if (response.ok) {
          const data = await response.json();
          setViews(data.value);
        }
      } catch (error) {
        console.log("View counter service unavailable");
        setViews(1); // Fallback
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndIncrement();
  }, []);

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Eye className="h-4 w-4" />
      <span>
        {isLoading ? (
          <span className="inline-block">Loading...</span>
        ) : views !== null ? (
          `${views.toLocaleString()} views`
        ) : (
          "Portfolio views"
        )}
      </span>
    </div>
  );
}
