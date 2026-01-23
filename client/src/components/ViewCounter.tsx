import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export default function ViewCounter() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    // Using CountAPI - a free counter service
    const counterId = "prabhatcs-portfolio";
    
    const fetchAndIncrement = async () => {
      try {
        const response = await fetch(
          `https://api.countapi.xyz/hit/prabhatcs-portfolio/views`
        );
        const data = await response.json();
        setViews(data.value);
      } catch (error) {
        console.log("View counter unavailable");
      }
    };

    fetchAndIncrement();
  }, []);

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Eye className="h-4 w-4" />
      <span>
        {views !== null ? `${views.toLocaleString()} views` : "Loading..."}
      </span>
    </div>
  );
}
