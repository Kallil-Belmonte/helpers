type City = {
  name: string;
  state: string;
  stateInitials: string;
};

export type Cities = {
  [key: string]: City;
};
