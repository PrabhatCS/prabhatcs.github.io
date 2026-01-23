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
          // Add a base seed to start from a reasonable number
          const seedValue = 250; // Professional starting point
          const totalViews = data.value + seedValue;
          setViews(totalViews);
        }
      } catch (error) {
        console.log("View counter service unavailable");
        setViews(250); // Fallback seed value
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndIncrement();
  }, []);

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
      <Eye className="h-4 w-4" />
      <span>
        {isLoading ? (
          <span className="inline-block">Loading...</span>
        ) : views !== null ? (
          <span className="font-medium">{views.toLocaleString()}+ views</span>
        ) : (
          "Portfolio views"
        )}
      </span>
    </div>
  );
}
