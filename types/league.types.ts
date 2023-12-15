import { Score } from "./score.types";

export type League = {
  id: string;
  league_id: number;
  name: string;
  country: string;
  season: number;
  season_start: string;
  season_end: string;
  logo: string;
  flag: string;
  standings: boolean;
  scores: Score[];
};
