import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface AlbumCardProps {
  title: string;
  artist: string;
  image: string;
  className?: string;
}

export const AlbumCard = ({ title, artist, image, className }: AlbumCardProps) => {
  return (
    <div
      className={cn(
        "group relative bg-card p-4 rounded-lg cursor-pointer transition-all duration-300 hover:bg-secondary",
        className
      )}
    >
      <div className="relative mb-4 overflow-hidden rounded-md shadow-lg">
        <img
          src={image}
          alt={title}
          className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <button className="absolute bottom-2 right-2 bg-primary text-primary-foreground rounded-full p-3 shadow-xl opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110">
          <Play size={20} fill="currentColor" />
        </button>
      </div>
      <h3 className="font-semibold text-foreground mb-1 truncate">{title}</h3>
      <p className="text-sm text-muted-foreground truncate">{artist}</p>
    </div>
  );
};
