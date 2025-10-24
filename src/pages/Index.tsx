import { Sidebar } from "@/components/Sidebar";
import { AlbumCard } from "@/components/AlbumCard";
import { PlaybackBar } from "@/components/PlaybackBar";
import { useSongs } from "@/lib/useSongs";

const Index = () => {
  const { data: tracks, isLoading, isError, refetch } = useSongs({}, 10);

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto pb-24">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-2 text-foreground">Good evening</h1>
          <p className="text-muted-foreground mb-8">Your favorite playlists</p>
          
          {isLoading && (
            <div className="text-muted-foreground">Loading tracks...</div>
          )}

          {isError && (
            <div className="flex items-center gap-4 text-destructive">
              <span>Failed to load tracks.</span>
              <button
                className="px-3 py-1 rounded-md bg-secondary text-foreground"
                onClick={() => refetch()}
              >
                Retry
              </button>
            </div>
          )}

          {!!tracks?.length && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {tracks.map((track) => (
                <AlbumCard
                  key={track.id}
                  track={track}
                />
              ))}
            </div>
          )}
        </div>
      </main>

      <PlaybackBar />
    </div>
  );
};

export default Index;
