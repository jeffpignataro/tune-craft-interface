import { Sidebar } from "@/components/Sidebar";
import { AlbumCard } from "@/components/AlbumCard";
import { PlaybackBar } from "@/components/PlaybackBar";
import album1 from "@/assets/album-1.jpg";
import album2 from "@/assets/album-2.jpg";
import album3 from "@/assets/album-3.jpg";
import album4 from "@/assets/album-4.jpg";
import album5 from "@/assets/album-5.jpg";
import album6 from "@/assets/album-6.jpg";

const Index = () => {
  const playlists = [
    { id: 1, title: "Chill Vibes", artist: "Electronic Dreams", image: album1 },
    { id: 2, title: "Indie Rock Mix", artist: "Various Artists", image: album2 },
    { id: 3, title: "Lo-Fi Beats", artist: "Study Playlist", image: album3 },
    { id: 4, title: "Jazz Classics", artist: "Timeless Collection", image: album4 },
    { id: 5, title: "Workout Mix", artist: "High Energy", image: album5 },
    { id: 6, title: "Ambient Meditation", artist: "Peaceful Sounds", image: album6 },
  ];

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto pb-24">
        <div className="p-8">
          <h1 className="text-3xl font-bold mb-2 text-foreground">Good evening</h1>
          <p className="text-muted-foreground mb-8">Your favorite playlists</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {playlists.map((playlist) => (
              <AlbumCard
                key={playlist.id}
                title={playlist.title}
                artist={playlist.artist}
                image={playlist.image}
              />
            ))}
          </div>
        </div>
      </main>

      <PlaybackBar />
    </div>
  );
};

export default Index;
