// https://pt.wikipedia.org/wiki/Lista_de_unidades_federativas_do_Brasil_por_%C3%A1rea
// https://mundoeducacao.uol.com.br/geografia/estados-brasil.htm

type State = {
  name: string;
  initials: string;
  region: string;
  areaCode: string;
};

type StatesList = {
  [key: string]: State;
};

const STATES_LIST: StatesList = {};

export default STATES_LIST;
