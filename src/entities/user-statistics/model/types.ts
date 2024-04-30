export type UsersStatsSectionData = {
  property: string;
  value: number;
};

export type UsersStatsSection = {
  section: string;
  data: UsersStatsSectionData[];
};

export type UsersStats = {
  totalUsers: number;
  sections: UsersStatsSection[];
};
