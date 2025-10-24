import { Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAudioPlayer, Track } from "@/contexts/AudioPlayerContext";

interface AlbumCardProps {
  track: Track;
  className?: string;
}

export const AlbumCard = ({ track, className }: AlbumCardProps) => {
  const { playTrack, currentTrack, isPlaying } = useAudioPlayer();
  const isCurrentTrack = currentTrack?.id === track.id;

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    playTrack(track);
  };

  return (
    <div
      onClick={handlePlayClick}
      className={cn(
        "group relative bg-card p-4 rounded-lg cursor-pointer transition-all duration-300 hover:bg-secondary",
        className
      )}
    >
      <div className="relative mb-4 overflow-hidden rounded-md shadow-lg">
        <img
          src={track.image}
          alt={track.title}
          className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <button 
          onClick={handlePlayClick}
          className={cn(
            "absolute bottom-2 right-2 bg-primary text-primary-foreground rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110",
            isCurrentTrack && isPlaying ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
          )}
        >
          {isCurrentTrack && isPlaying ? (
            <Pause size={20} fill="currentColor" />
          ) : (
            <Play size={20} fill="currentColor" />
          )}
        </button>
      </div>
      <h3 className="font-semibold text-foreground mb-1 truncate">{track.title}</h3>
      <p className="text-sm text-muted-foreground truncate">{track.artist}</p>
    </div>
  );
};
