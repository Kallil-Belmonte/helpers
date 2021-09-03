type State = {
  name: string;
  region: string;
  initials: string;
};

type States = {
  [key: string]: State;
};

const STATES: States = {
  Acre: {
    name: 'Acre',
    region: 'Norte',
    initials: 'AC',
  },
  Alagoas: {
    name: 'Alagoas',
    region: 'Nordeste',
    initials: 'AL',
  },
  Amapá: {
    name: 'Amapá',
    region: 'Norte',
    initials: 'AP',
  },
  Amazonas: {
    name: 'Amazonas',
    region: 'Norte',
    initials: 'AM',
  },
  Bahia: {
    name: 'Bahia',
    region: 'Nordeste',
    initials: 'BA',
  },
  Ceará: {
    name: 'Ceará',
    region: 'Nordeste',
    initials: 'CE',
  },
  'Espírito Santo': {
    name: 'Espírito Santo',
    region: 'Sudeste',
    initials: 'ES',
  },
  Goiás: {
    name: 'Goiás',
    region: 'Centro-Oeste',
    initials: 'GO',
  },
  Maranhão: {
    name: 'Maranhão',
    region: 'Nordeste',
    initials: 'MA',
  },
  'Mato Grosso': {
    name: 'Mato Grosso',
    region: 'Centro-Oeste',
    initials: 'MT',
  },
  'Mato Grosso do Sul': {
    name: 'Mato Grosso do Sul',
    region: 'Centro-Oeste',
    initials: 'MS',
  },
  'Minas Gerais': {
    name: 'Minas Gerais',
    region: 'Sudeste',
    initials: 'MG',
  },
  Pará: {
    name: 'Pará',
    region: 'Norte',
    initials: 'PA',
  },
  Paraíba: {
    name: 'Paraíba',
    region: 'Nordeste',
    initials: 'PB',
  },
  Paraná: {
    name: 'Paraná',
    region: 'Sul',
    initials: 'PR',
  },
  Pernambuco: {
    name: 'Pernambuco',
    region: 'Nordeste',
    initials: 'PE',
  },
  Piauí: {
    name: 'Piauí',
    region: 'Nordeste',
    initials: 'PI',
  },
  'Rio de Janeiro': {
    name: 'Rio de Janeiro',
    region: 'Sudeste',
    initials: 'RJ',
  },
  'Rio Grande do Norte': {
    name: 'Rio Grande do Norte',
    region: 'Nordeste',
    initials: 'RN',
  },
  'Rio Grande do Sul': {
    name: 'Rio Grande do Sul',
    region: 'Sul',
    initials: 'RS',
  },
  Rondônia: {
    name: 'Rondônia',
    region: 'Norte',
    initials: 'RO',
  },
  Roraima: {
    name: 'Roraima',
    region: 'Norte',
    initials: 'RR',
  },
  'Santa Catarina': {
    name: 'Santa Catarina',
    region: 'Sul',
    initials: 'SC',
  },
  'São Paulo': {
    name: 'São Paulo',
    region: 'Sudeste',
    initials: 'SP',
  },
  Sergipe: {
    name: 'Sergipe',
    region: 'Nordeste',
    initials: 'SE',
  },
  Tocantins: {
    name: 'Tocantins',
    region: 'Norte',
    initials: 'TO',
  },
  'Distrito Federal': {
    name: 'Distrito Federal',
    region: 'Centro-Oeste',
    initials: 'DF',
  },
};

export default STATES;
