import { useQuery } from "@tanstack/react-query";
import { fetchSong, mapSongToTrack, type SongParams } from "./songApi";
import type { Track } from "@/contexts/AudioPlayerContext";

export function useSongs(params: SongParams = {}, count = 6) {
  return useQuery<Track[]>({
    queryKey: ["songs", params, count],
    queryFn: async () => {
      const requests = Array.from({ length: count }, () => fetchSong({ ...params }));
      const results = await Promise.all(requests);
      return results.map(mapSongToTrack);
    },
    staleTime: 60_000,
    retry: 1,
  });
}
