import type { Track } from "@/contexts/AudioPlayerContext";

export type SongResponse = {
  songUrl: string;
  imageUrl: string;
  speechUrl: string;
  songName: string;
  songDuration: number;
  message: string;
  songDurationLabel: string;
  goodVotes: number;
  badVotes: number;
  isPublished: number;
  publishedUrl: string;
  albumCoverUrl: string;
  genre: string;
  subGenre: string;
  theme: string;
  style: string;
  songId: number;
};

export type SongParams = Partial<{
  genre: string;
  subGenre: string;
  style: string;
  theme: string;
  generateNew: boolean;
}>;

const BASE_URL = import.meta.env.DEV ? "/api" : "https://api.firesvle.com";

export async function fetchSong(params: SongParams = {}, timeoutMs = 10000): Promise<SongResponse> {
  const qs = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== "") qs.set(k, String(v));
  });
  const urlStr = `${BASE_URL}/Song${qs.toString() ? `?${qs.toString()}` : ""}`;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  let res: Response;
  try {
    res = await fetch(urlStr, {
      method: "GET",
      headers: { accept: "text/plain" },
      signal: controller.signal,
    });
  } catch (err: any) {
    clearTimeout(timer);
    if (err?.name === "AbortError") {
      throw new Error("Song request timed out");
    }
    throw err;
  } finally {
    clearTimeout(timer);
  }

  const raw = await res.text();
  if (!res.ok) {
    throw new Error(`Song request failed: ${res.status} ${raw.slice(0, 200)}`);
  }

  console.log(raw);

  try {
    return JSON.parse(raw);
  } catch {
    throw new Error("Unexpected response format from Song API");
  }
}

export function mapSongToTrack(s: SongResponse): Track {
  return {
    id: s.songId,
    title: s.songName || "Untitled",
    artist: s.style || s.genre || "Unknown Artist",
    image: s.albumCoverUrl || s.imageUrl || "",
    audioUrl: s.songUrl,
    // API duration appears to be in milliseconds (e.g., 232000). Convert to seconds.
    duration: typeof s.songDuration === "number" ? Math.round(s.songDuration / 1000) : 0,
  };
}
