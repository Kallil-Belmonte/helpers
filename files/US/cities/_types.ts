type City = {
  name: string;
  state: string;
  stateInitials: string;
};

export type Cities = {
  [key: string]: City;
};

// https://en.wikipedia.org/wiki/List_of_municipalities_in_
// https://codepen.io/kallil-belmonte/pen/abwmaog

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
