import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClinet from "../services/api-client";
import { FetchResponse } from "../services/api-client";

const apiClient = new APIClinet<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: genres,
  });

export default useGenres;
