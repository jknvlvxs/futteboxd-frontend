import { Team } from "./team.types";

export type Score = {
  id: string;
  fixture_id: number;
  event_date: Date;
  round: string;
  homeTeam: Team | string;
  awayTeam: Team | string;
  status: string;
  halftime_score: string;
  final_score: string;
  elapsed: number;
};

export type LiveScore = {
  live: Score[];
  today: Score[];
};
