import { Play, Pause, SkipBack, SkipForward, Volume2, Heart } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useAudioPlayer } from "@/contexts/AudioPlayerContext";

export const PlaybackBar = () => {
  const {
    currentTrack,
    isPlaying,
    volume,
    currentTime,
    duration,
    togglePlayPause,
    skipForward,
    skipBack,
    setVolume,
    seekTo,
    toggleLike,
    isLiked,
  } = useAudioPlayer();

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleProgressChange = (value: number[]) => {
    seekTo(value[0]);
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0]);
  };

  if (!currentTrack) return null;

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-black border-t border-border px-4 py-3">
      <div className="flex items-center justify-between gap-4">
        {/* Now Playing */}
        <div className="flex items-center gap-3 w-[30%]">
          <img
            src={currentTrack.image}
            alt="Now playing"
            className="w-14 h-14 rounded-md"
          />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-foreground truncate">
              {currentTrack.title}
            </p>
            <p className="text-xs text-muted-foreground truncate">
              {currentTrack.artist}
            </p>
          </div>
          <button 
            onClick={toggleLike}
            className={`transition-colors ${
              isLiked ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
          </button>
        </div>

        {/* Playback Controls */}
        <div className="flex flex-col items-center gap-2 w-[40%]">
          <div className="flex items-center gap-4">
            <button 
              onClick={skipBack}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <SkipBack size={20} />
            </button>
            <button 
              onClick={togglePlayPause}
              className="bg-primary text-primary-foreground rounded-full p-2 hover:scale-110 transition-transform"
            >
              {isPlaying ? (
                <Pause size={24} fill="currentColor" />
              ) : (
                <Play size={24} fill="currentColor" />
              )}
            </button>
            <button 
              onClick={skipForward}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <SkipForward size={20} />
            </button>
          </div>
          <div className="flex items-center gap-2 w-full">
            <span className="text-xs text-muted-foreground">{formatTime(currentTime)}</span>
            <Slider
              value={[currentTime]}
              max={duration || 100}
              step={1}
              onValueChange={handleProgressChange}
              className="flex-1"
            />
            <span className="text-xs text-muted-foreground">{formatTime(duration)}</span>
          </div>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-2 w-[30%] justify-end">
          <Volume2 size={20} className="text-muted-foreground" />
          <Slider
            value={[volume]}
            max={100}
            step={1}
            onValueChange={handleVolumeChange}
            className="w-24"
          />
        </div>
      </div>
    </footer>
  );
};
