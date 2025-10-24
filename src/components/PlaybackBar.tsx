import { Play, SkipBack, SkipForward, Volume2, Heart } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import album1 from "@/assets/album-1.jpg";

export const PlaybackBar = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-black border-t border-border px-4 py-3">
      <div className="flex items-center justify-between gap-4">
        {/* Now Playing */}
        <div className="flex items-center gap-3 w-[30%]">
          <img
            src={album1}
            alt="Now playing"
            className="w-14 h-14 rounded-md"
          />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-foreground truncate">
              Midnight Vibes
            </p>
            <p className="text-xs text-muted-foreground truncate">
              Electronic Dreams
            </p>
          </div>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Heart size={20} />
          </button>
        </div>

        {/* Playback Controls */}
        <div className="flex flex-col items-center gap-2 w-[40%]">
          <div className="flex items-center gap-4">
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <SkipBack size={20} />
            </button>
            <button className="bg-primary text-primary-foreground rounded-full p-2 hover:scale-110 transition-transform">
              <Play size={24} fill="currentColor" />
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <SkipForward size={20} />
            </button>
          </div>
          <div className="flex items-center gap-2 w-full">
            <span className="text-xs text-muted-foreground">2:34</span>
            <Slider
              defaultValue={[40]}
              max={100}
              step={1}
              className="flex-1"
            />
            <span className="text-xs text-muted-foreground">4:12</span>
          </div>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-2 w-[30%] justify-end">
          <Volume2 size={20} className="text-muted-foreground" />
          <Slider
            defaultValue={[70]}
            max={100}
            step={1}
            className="w-24"
          />
        </div>
      </div>
    </footer>
  );
};
