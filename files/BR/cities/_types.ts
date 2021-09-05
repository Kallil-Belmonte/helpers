type City = {
  name: string;
  state: string;
  stateInitials: string;
};

export type Cities = {
  [key: string]: City;
};

// https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_de_
// https://pt.wikipedia.org/wiki/Lista_de_munic%C3%ADpios_do_
// https://codepen.io/kallil-belmonte/pen/abwmaog

// FUNÇÃO FAZER SORT DO OBJETO
// const result = {};
// Object.keys(obj).sort().forEach(key => {
//   const item = obj[key];
//   result[item.name] = {};
//   result[item.name].name = item.name;
//   result[item.name].state = item.state;
//   result[item.name].stateInitials = item.stateInitials;
// });
// console.log(result);

// FUNÇÃO PARA AGRUPAR AS CIDADES POR ESTADO
// const result = {};
// Object.values(STATES).forEach((item) => {
//   const citiesArray = Object.values(CITIES).filter(city => city.state === item.name);
//   citiesObject = {};
//   citiesArray.forEach(city => citiesObject[city.name] = CITIES[city.name]);
//   result[item.name] = Object.keys(citiesObject).sort().reduce((acc, key) => {
//     acc[key] = citiesObject[key];
//     return acc;
//   }, {});
// });
// console.log(result)
