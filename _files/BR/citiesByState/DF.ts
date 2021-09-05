type City = {
  name: string;
  state: string;
  stateInitials: string;
};

type Cities = {
  [key: string]: City;
};

const DF: Cities = {
  Brasília: {
    name: 'Brasília',
    state: 'Distrito Federal',
    stateInitials: 'DF',
  },
};

export default DF;
