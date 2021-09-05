type City = {
  name: string;
  state: string;
  stateInitials: string;
};

type Cities = {
  [key: string]: City;
};

// Five states Delaware, Maine, Vermont, West Virginia and Wyoming, have no cities with populations of 100,000 or more.

// https://en.wikipedia.org/wiki/List_of_municipalities_in_California

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

const CITIES: Cities = {
  Abilene: {
    name: 'Abilene',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Akron: {
    name: 'Akron',
    state: 'Ohio',
    stateInitials: 'OH',
  },
  Albuquerque: {
    name: 'Albuquerque',
    state: 'New Mexico',
    stateInitials: 'NM',
  },
  Alexandria: {
    name: 'Alexandria',
    state: 'Virginia',
    stateInitials: 'VA',
  },
  Allen: {
    name: 'Allen',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Allentown: {
    name: 'Allentown',
    state: 'Pennsylvania',
    stateInitials: 'PA',
  },
  Amarillo: {
    name: 'Amarillo',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Anaheim: {
    name: 'Anaheim',
    state: 'California',
    stateInitials: 'CA',
  },
  Anchorage: {
    name: 'Anchorage',
    state: 'Alaska',
    stateInitials: 'AK',
  },
  'Ann Arbor': {
    name: 'Ann Arbor',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  Antioch: {
    name: 'Antioch',
    state: 'California',
    stateInitials: 'CA',
  },
  Arlington: {
    name: 'Arlington',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Arvada: {
    name: 'Arvada',
    state: 'Colorado',
    stateInitials: 'CO',
  },
  Athens: {
    name: 'Athens',
    state: 'Georgia',
    stateInitials: 'GA',
  },
  Atlanta: {
    name: 'Atlanta',
    state: 'Georgia',
    stateInitials: 'GA',
  },
  Augusta: {
    name: 'Augusta',
    state: 'Georgia',
    stateInitials: 'GA',
  },
  Aurora: {
    name: 'Aurora',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Austin: {
    name: 'Austin',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Bakersfield: {
    name: 'Bakersfield',
    state: 'California',
    stateInitials: 'CA',
  },
  Baltimore: {
    name: 'Baltimore',
    state: 'Maryland',
    stateInitials: 'MD',
  },
  'Baton Rouge': {
    name: 'Baton Rouge',
    state: 'Louisiana',
    stateInitials: 'LA',
  },
  Beaumont: {
    name: 'Beaumont',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Bellevue: {
    name: 'Bellevue',
    state: 'Washington',
    stateInitials: 'WA',
  },
  Berkeley: {
    name: 'Berkeley',
    state: 'California',
    stateInitials: 'CA',
  },
  Billings: {
    name: 'Billings',
    state: 'Montana',
    stateInitials: 'MT',
  },
  Birmingham: {
    name: 'Birmingham',
    state: 'Alabama',
    stateInitials: 'AL',
  },
  Boise: {
    name: 'Boise',
    state: 'Idaho',
    stateInitials: 'ID',
  },
  Boston: {
    name: 'Boston',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  Boulder: {
    name: 'Boulder',
    state: 'Colorado',
    stateInitials: 'CO',
  },
  Bridgeport: {
    name: 'Bridgeport',
    state: 'Connecticut',
    stateInitials: 'CT',
  },
  Brockton: {
    name: 'Brockton',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  'Broken Arrow': {
    name: 'Broken Arrow',
    state: 'Oklahoma',
    stateInitials: 'OK',
  },
  Brownsville: {
    name: 'Brownsville',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Buffalo: {
    name: 'Buffalo',
    state: 'New York',
    stateInitials: 'NY',
  },
  Burbank: {
    name: 'Burbank',
    state: 'California',
    stateInitials: 'CA',
  },
  Cambridge: {
    name: 'Cambridge',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  'Cape Coral': {
    name: 'Cape Coral',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Carlsbad: {
    name: 'Carlsbad',
    state: 'California',
    stateInitials: 'CA',
  },
  Carrollton: {
    name: 'Carrollton',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Cary: {
    name: 'Cary',
    state: 'North Carolina',
    stateInitials: 'NC',
  },
  'Cedar Rapids': {
    name: 'Cedar Rapids',
    state: 'Iowa',
    stateInitials: 'IA',
  },
  Centennial: {
    name: 'Centennial',
    state: 'Colorado',
    stateInitials: 'CO',
  },
  Chandler: {
    name: 'Chandler',
    state: 'Arizona',
    stateInitials: 'AZ',
  },
  Charleston: {
    name: 'Charleston',
    state: 'South Carolina',
    stateInitials: 'SC',
  },
  Charlotte: {
    name: 'Charlotte',
    state: 'North Carolina',
    stateInitials: 'NC',
  },
  Chattanooga: {
    name: 'Chattanooga',
    state: 'Tennessee',
    stateInitials: 'TN',
  },
  Chesapeake: {
    name: 'Chesapeake',
    state: 'Virginia',
    stateInitials: 'VA',
  },
  Chicago: {
    name: 'Chicago',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Chico: {
    name: 'Chico',
    state: 'California',
    stateInitials: 'CA',
  },
  'Chula Vista': {
    name: 'Chula Vista',
    state: 'California',
    stateInitials: 'CA',
  },
  Cincinnati: {
    name: 'Cincinnati',
    state: 'Ohio',
    stateInitials: 'OH',
  },
  Clarksville: {
    name: 'Clarksville',
    state: 'Tennessee',
    stateInitials: 'TN',
  },
  Clearwater: {
    name: 'Clearwater',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Cleveland: {
    name: 'Cleveland',
    state: 'Ohio',
    stateInitials: 'OH',
  },
  Clinton: {
    name: 'Clinton',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  Clovis: {
    name: 'Clovis',
    state: 'California',
    stateInitials: 'CA',
  },
  'College Station': {
    name: 'College Station',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'Colorado Springs': {
    name: 'Colorado Springs',
    state: 'Colorado',
    stateInitials: 'CO',
  },
  Columbia: {
    name: 'Columbia',
    state: 'Missouri',
    stateInitials: 'MO',
  },
  Columbus: {
    name: 'Columbus',
    state: 'Georgia',
    stateInitials: 'GA',
  },
  Concord: {
    name: 'Concord',
    state: 'North Carolina',
    stateInitials: 'NC',
  },
  'Coral Springs': {
    name: 'Coral Springs',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Corona: {
    name: 'Corona',
    state: 'California',
    stateInitials: 'CA',
  },
  'Corpus Christi': {
    name: 'Corpus Christi',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'Costa Mesa': {
    name: 'Costa Mesa',
    state: 'California',
    stateInitials: 'CA',
  },
  Dallas: {
    name: 'Dallas',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'Daly City': {
    name: 'Daly City',
    state: 'California',
    stateInitials: 'CA',
  },
  Davenport: {
    name: 'Davenport',
    state: 'Iowa',
    stateInitials: 'IA',
  },
  'Davie]': {
    name: 'Davie]',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Dayton: {
    name: 'Dayton',
    state: 'Ohio',
    stateInitials: 'OH',
  },
  Dearborn: {
    name: 'Dearborn',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  Denton: {
    name: 'Denton',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Denver: {
    name: 'Denver',
    state: 'Colorado',
    stateInitials: 'CO',
  },
  'Des Moines': {
    name: 'Des Moines',
    state: 'Iowa',
    stateInitials: 'IA',
  },
  Detroit: {
    name: 'Detroit',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  Downey: {
    name: 'Downey',
    state: 'California',
    stateInitials: 'CA',
  },
  Durham: {
    name: 'Durham',
    state: 'North Carolina',
    stateInitials: 'NC',
  },
  Edinburg: {
    name: 'Edinburg',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Edison: {
    name: 'Edison',
    state: 'New Jersey',
    stateInitials: 'NJ',
  },
  'El Cajon': {
    name: 'El Cajon',
    state: 'California',
    stateInitials: 'CA',
  },
  'El Monte': {
    name: 'El Monte',
    state: 'California',
    stateInitials: 'CA',
  },
  'El Paso': {
    name: 'El Paso',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Elgin: {
    name: 'Elgin',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Elizabeth: {
    name: 'Elizabeth',
    state: 'New Jersey',
    stateInitials: 'NJ',
  },
  'Elk Grove': {
    name: 'Elk Grove',
    state: 'California',
    stateInitials: 'CA',
  },
  Escondido: {
    name: 'Escondido',
    state: 'California',
    stateInitials: 'CA',
  },
  Eugene: {
    name: 'Eugene',
    state: 'Oregon',
    stateInitials: 'OR',
  },
  Evansville: {
    name: 'Evansville',
    state: 'Indiana',
    stateInitials: 'IN',
  },
  Everett: {
    name: 'Everett',
    state: 'Washington',
    stateInitials: 'WA',
  },
  Fairfield: {
    name: 'Fairfield',
    state: 'California',
    stateInitials: 'CA',
  },
  Fargo: {
    name: 'Fargo',
    state: 'North Dakota',
    stateInitials: 'ND',
  },
  Fayetteville: {
    name: 'Fayetteville',
    state: 'North Carolina',
    stateInitials: 'NC',
  },
  'Federal Way': {
    name: 'Federal Way',
    state: 'Washington',
    stateInitials: 'WA',
  },
  Fontana: {
    name: 'Fontana',
    state: 'California',
    stateInitials: 'CA',
  },
  'Fort Collins': {
    name: 'Fort Collins',
    state: 'Colorado',
    stateInitials: 'CO',
  },
  'Fort Lauderdale': {
    name: 'Fort Lauderdale',
    state: 'Florida',
    stateInitials: 'FL',
  },
  'Fort Wayne': {
    name: 'Fort Wayne',
    state: 'Indiana',
    stateInitials: 'IN',
  },
  'Fort Worth': {
    name: 'Fort Worth',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Fremont: {
    name: 'Fremont',
    state: 'California',
    stateInitials: 'CA',
  },
  Fresno: {
    name: 'Fresno',
    state: 'California',
    stateInitials: 'CA',
  },
  Frisco: {
    name: 'Frisco',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Fullerton: {
    name: 'Fullerton',
    state: 'California',
    stateInitials: 'CA',
  },
  Gainesville: {
    name: 'Gainesville',
    state: 'Florida',
    stateInitials: 'FL',
  },
  'Garden Grove': {
    name: 'Garden Grove',
    state: 'California',
    stateInitials: 'CA',
  },
  Garland: {
    name: 'Garland',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Gilbert: {
    name: 'Gilbert',
    state: 'Arizona',
    stateInitials: 'AZ',
  },
  Glendale: {
    name: 'Glendale',
    state: 'California',
    stateInitials: 'CA',
  },
  'Grand Prairie': {
    name: 'Grand Prairie',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'Grand Rapids': {
    name: 'Grand Rapids',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  Greeley: {
    name: 'Greeley',
    state: 'Colorado',
    stateInitials: 'CO',
  },
  'Green Bay': {
    name: 'Green Bay',
    state: 'Wisconsin',
    stateInitials: 'WI',
  },
  Greensboro: {
    name: 'Greensboro',
    state: 'North Carolina',
    stateInitials: 'NC',
  },
  Gresham: {
    name: 'Gresham',
    state: 'Oregon',
    stateInitials: 'OR',
  },
  Hampton: {
    name: 'Hampton',
    state: 'Virginia',
    stateInitials: 'VA',
  },
  Hartford: {
    name: 'Hartford',
    state: 'Connecticut',
    stateInitials: 'CT',
  },
  Hayward: {
    name: 'Hayward',
    state: 'California',
    stateInitials: 'CA',
  },
  Henderson: {
    name: 'Henderson',
    state: 'Nevada',
    stateInitials: 'NV',
  },
  Hialeah: {
    name: 'Hialeah',
    state: 'Florida',
    stateInitials: 'FL',
  },
  'High Point': {
    name: 'High Point',
    state: 'North Carolina',
    stateInitials: 'NC',
  },
  Hillsboro: {
    name: 'Hillsboro',
    state: 'Oregon',
    stateInitials: 'OR',
  },
  Hollywood: {
    name: 'Hollywood',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Honolulu: {
    name: 'Honolulu',
    state: 'Hawaii',
    stateInitials: 'HI',
  },
  Houston: {
    name: 'Houston',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'Huntington Beach': {
    name: 'Huntington Beach',
    state: 'California',
    stateInitials: 'CA',
  },
  Huntsville: {
    name: 'Huntsville',
    state: 'Alabama',
    stateInitials: 'AL',
  },
  Independence: {
    name: 'Independence',
    state: 'Missouri',
    stateInitials: 'MO',
  },
  Indianapolis: {
    name: 'Indianapolis',
    state: 'Indiana',
    stateInitials: 'IN',
  },
  Inglewood: {
    name: 'Inglewood',
    state: 'California',
    stateInitials: 'CA',
  },
  Irvine: {
    name: 'Irvine',
    state: 'California',
    stateInitials: 'CA',
  },
  Irving: {
    name: 'Irving',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Jackson: {
    name: 'Jackson',
    state: 'Mississippi',
    stateInitials: 'MS',
  },
  Jacksonville: {
    name: 'Jacksonville',
    state: 'Florida',
    stateInitials: 'FL',
  },
  'Jersey City': {
    name: 'Jersey City',
    state: 'New Jersey',
    stateInitials: 'NJ',
  },
  Joliet: {
    name: 'Joliet',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  'Jurupa Valley': {
    name: 'Jurupa Valley',
    state: 'California',
    stateInitials: 'CA',
  },
  'Kansas City': {
    name: 'Kansas City',
    state: 'Kansas',
    stateInitials: 'KS',
  },
  Kent: {
    name: 'Kent',
    state: 'Washington',
    stateInitials: 'WA',
  },
  Killeen: {
    name: 'Killeen',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Knoxville: {
    name: 'Knoxville',
    state: 'Tennessee',
    stateInitials: 'TN',
  },
  Lafayette: {
    name: 'Lafayette',
    state: 'Louisiana',
    stateInitials: 'LA',
  },
  Lakeland: {
    name: 'Lakeland',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Lakewood: {
    name: 'Lakewood',
    state: 'New Jersey',
    stateInitials: 'NJ',
  },
  Lancaster: {
    name: 'Lancaster',
    state: 'California',
    stateInitials: 'CA',
  },
  Lansing: {
    name: 'Lansing',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  Laredo: {
    name: 'Laredo',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'Las Cruces': {
    name: 'Las Cruces',
    state: 'New Mexico',
    stateInitials: 'NM',
  },
  'Las Vegas': {
    name: 'Las Vegas',
    state: 'Nevada',
    stateInitials: 'NV',
  },
  'League City': {
    name: 'League City',
    state: 'Texas',
    stateInitials: 'TX',
  },
  "Lee's Summit": {
    name: "Lee's Summit",
    state: 'Missouri',
    stateInitials: 'MO',
  },
  Lewisville: {
    name: 'Lewisville',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Lexington: {
    name: 'Lexington',
    state: 'Kentucky',
    stateInitials: 'KY',
  },
  Lincoln: {
    name: 'Lincoln',
    state: 'Nebraska',
    stateInitials: 'NE',
  },
  'Little Rock': {
    name: 'Little Rock',
    state: 'Arkansas',
    stateInitials: 'AR',
  },
  'Long Beach': {
    name: 'Long Beach',
    state: 'California',
    stateInitials: 'CA',
  },
  'Los Angeles': {
    name: 'Los Angeles',
    state: 'California',
    stateInitials: 'CA',
  },
  Louisville: {
    name: 'Louisville',
    state: 'Kentucky',
    stateInitials: 'KY',
  },
  Lowell: {
    name: 'Lowell',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  Lubbock: {
    name: 'Lubbock',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Lynn: {
    name: 'Lynn',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  Macon: {
    name: 'Macon',
    state: 'Georgia',
    stateInitials: 'GA',
  },
  Madison: {
    name: 'Madison',
    state: 'Wisconsin',
    stateInitials: 'WI',
  },
  Manchester: {
    name: 'Manchester',
    state: 'New Hampshire',
    stateInitials: 'NH',
  },
  McAllen: {
    name: 'McAllen',
    state: 'Texas',
    stateInitials: 'TX',
  },
  McKinney: {
    name: 'McKinney',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Memphis: {
    name: 'Memphis',
    state: 'Tennessee',
    stateInitials: 'TN',
  },
  Menifee: {
    name: 'Menifee',
    state: 'California',
    stateInitials: 'CA',
  },
  Meridian: {
    name: 'Meridian',
    state: 'Idaho',
    stateInitials: 'ID',
  },
  Mesa: {
    name: 'Mesa',
    state: 'Arizona',
    stateInitials: 'AZ',
  },
  Mesquite: {
    name: 'Mesquite',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Miami: {
    name: 'Miami',
    state: 'Florida',
    stateInitials: 'FL',
  },
  'Miami Gardens': {
    name: 'Miami Gardens',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Midland: {
    name: 'Midland',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Milwaukee: {
    name: 'Milwaukee',
    state: 'Wisconsin',
    stateInitials: 'WI',
  },
  Minneapolis: {
    name: 'Minneapolis',
    state: 'Minnesota',
    stateInitials: 'MN',
  },
  Miramar: {
    name: 'Miramar',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Mobile: {
    name: 'Mobile',
    state: 'Alabama',
    stateInitials: 'AL',
  },
  Modesto: {
    name: 'Modesto',
    state: 'California',
    stateInitials: 'CA',
  },
  Montgomery: {
    name: 'Montgomery',
    state: 'Alabama',
    stateInitials: 'AL',
  },
  'Moreno Valley': {
    name: 'Moreno Valley',
    state: 'California',
    stateInitials: 'CA',
  },
  Murfreesboro: {
    name: 'Murfreesboro',
    state: 'Tennessee',
    stateInitials: 'TN',
  },
  Murrieta: {
    name: 'Murrieta',
    state: 'California',
    stateInitials: 'CA',
  },
  Nampa: {
    name: 'Nampa',
    state: 'Idaho',
    stateInitials: 'ID',
  },
  Naperville: {
    name: 'Naperville',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Nashville: {
    name: 'Nashville',
    state: 'Tennessee',
    stateInitials: 'TN',
  },
  'New Bedford': {
    name: 'New Bedford',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  'New Haven': {
    name: 'New Haven',
    state: 'Connecticut',
    stateInitials: 'CT',
  },
  'New Orleans': {
    name: 'New Orleans',
    state: 'Louisiana',
    stateInitials: 'LA',
  },
  'New York': {
    name: 'New York',
    state: 'New York',
    stateInitials: 'NY',
  },
  Newark: {
    name: 'Newark',
    state: 'New Jersey',
    stateInitials: 'NJ',
  },
  'Newport News': {
    name: 'Newport News',
    state: 'Virginia',
    stateInitials: 'VA',
  },
  Norfolk: {
    name: 'Norfolk',
    state: 'Virginia',
    stateInitials: 'VA',
  },
  Norman: {
    name: 'Norman',
    state: 'Oklahoma',
    stateInitials: 'OK',
  },
  'North Charleston': {
    name: 'North Charleston',
    state: 'South Carolina',
    stateInitials: 'SC',
  },
  'North Las Vegas': {
    name: 'North Las Vegas',
    state: 'Nevada',
    stateInitials: 'NV',
  },
  Norwalk: {
    name: 'Norwalk',
    state: 'California',
    stateInitials: 'CA',
  },
  Oakland: {
    name: 'Oakland',
    state: 'California',
    stateInitials: 'CA',
  },
  Oceanside: {
    name: 'Oceanside',
    state: 'California',
    stateInitials: 'CA',
  },
  Odessa: {
    name: 'Odessa',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'Oklahoma City': {
    name: 'Oklahoma City',
    state: 'Oklahoma',
    stateInitials: 'OK',
  },
  Olathe: {
    name: 'Olathe',
    state: 'Kansas',
    stateInitials: 'KS',
  },
  Omaha: {
    name: 'Omaha',
    state: 'Nebraska',
    stateInitials: 'NE',
  },
  Ontario: {
    name: 'Ontario',
    state: 'California',
    stateInitials: 'CA',
  },
  Orange: {
    name: 'Orange',
    state: 'California',
    stateInitials: 'CA',
  },
  Orlando: {
    name: 'Orlando',
    state: 'Florida',
    stateInitials: 'FL',
  },
  'Overland Park': {
    name: 'Overland Park',
    state: 'Kansas',
    stateInitials: 'KS',
  },
  Oxnard: {
    name: 'Oxnard',
    state: 'California',
    stateInitials: 'CA',
  },
  'Palm Bay': {
    name: 'Palm Bay',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Palmdale: {
    name: 'Palmdale',
    state: 'California',
    stateInitials: 'CA',
  },
  Pasadena: {
    name: 'Pasadena',
    state: 'California',
    stateInitials: 'CA',
  },
  Paterson: {
    name: 'Paterson',
    state: 'New Jersey',
    stateInitials: 'NJ',
  },
  Pearland: {
    name: 'Pearland',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'Pembroke Pines': {
    name: 'Pembroke Pines',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Peoria: {
    name: 'Peoria',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Philadelphia: {
    name: 'Philadelphia',
    state: 'Pennsylvania',
    stateInitials: 'PA',
  },
  Phoenix: {
    name: 'Phoenix',
    state: 'Arizona',
    stateInitials: 'AZ',
  },
  Pittsburgh: {
    name: 'Pittsburgh',
    state: 'Pennsylvania',
    stateInitials: 'PA',
  },
  Plano: {
    name: 'Plano',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Pomona: {
    name: 'Pomona',
    state: 'California',
    stateInitials: 'CA',
  },
  'Pompano Beach': {
    name: 'Pompano Beach',
    state: 'Florida',
    stateInitials: 'FL',
  },
  'Port St. Lucie': {
    name: 'Port St. Lucie',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Portland: {
    name: 'Portland',
    state: 'Oregon',
    stateInitials: 'OR',
  },
  Providence: {
    name: 'Providence',
    state: 'Rhode Island',
    stateInitials: 'RI',
  },
  Provo: {
    name: 'Provo',
    state: 'Utah',
    stateInitials: 'UT',
  },
  Pueblo: {
    name: 'Pueblo',
    state: 'Colorado',
    stateInitials: 'CO',
  },
  Quincy: {
    name: 'Quincy',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  Raleigh: {
    name: 'Raleigh',
    state: 'North Carolina',
    stateInitials: 'NC',
  },
  'Rancho Cucamonga': {
    name: 'Rancho Cucamonga',
    state: 'California',
    stateInitials: 'CA',
  },
  Reno: {
    name: 'Reno',
    state: 'Nevada',
    stateInitials: 'NV',
  },
  Renton: {
    name: 'Renton',
    state: 'Washington',
    stateInitials: 'WA',
  },
  Rialto: {
    name: 'Rialto',
    state: 'California',
    stateInitials: 'CA',
  },
  Richardson: {
    name: 'Richardson',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Richmond: {
    name: 'Richmond',
    state: 'California',
    stateInitials: 'CA',
  },
  'Rio Rancho': {
    name: 'Rio Rancho',
    state: 'New Mexico',
    stateInitials: 'NM',
  },
  Riverside: {
    name: 'Riverside',
    state: 'California',
    stateInitials: 'CA',
  },
  Roanoke: {
    name: 'Roanoke',
    state: 'Virginia',
    stateInitials: 'VA',
  },
  Rochester: {
    name: 'Rochester',
    state: 'Minnesota',
    stateInitials: 'MN',
  },
  Rockford: {
    name: 'Rockford',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Roseville: {
    name: 'Roseville',
    state: 'California',
    stateInitials: 'CA',
  },
  'Round Rock': {
    name: 'Round Rock',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Sacramento: {
    name: 'Sacramento',
    state: 'California',
    stateInitials: 'CA',
  },
  'Saint Paul': {
    name: 'Saint Paul',
    state: 'Minnesota',
    stateInitials: 'MN',
  },
  Salem: {
    name: 'Salem',
    state: 'Oregon',
    stateInitials: 'OR',
  },
  Salinas: {
    name: 'Salinas',
    state: 'California',
    stateInitials: 'CA',
  },
  'Salt Lake City': {
    name: 'Salt Lake City',
    state: 'Utah',
    stateInitials: 'UT',
  },
  'San Antonio': {
    name: 'San Antonio',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'San Bernardino': {
    name: 'San Bernardino',
    state: 'California',
    stateInitials: 'CA',
  },
  'San Diego': {
    name: 'San Diego',
    state: 'California',
    stateInitials: 'CA',
  },
  'San Francisco': {
    name: 'San Francisco',
    state: 'California',
    stateInitials: 'CA',
  },
  'San Jose': {
    name: 'San Jose',
    state: 'California',
    stateInitials: 'CA',
  },
  'San Mateo': {
    name: 'San Mateo',
    state: 'California',
    stateInitials: 'CA',
  },
  'Sandy Springs': {
    name: 'Sandy Springs',
    state: 'Georgia',
    stateInitials: 'GA',
  },
  'Santa Ana': {
    name: 'Santa Ana',
    state: 'California',
    stateInitials: 'CA',
  },
  'Santa Clara': {
    name: 'Santa Clara',
    state: 'California',
    stateInitials: 'CA',
  },
  'Santa Clarita': {
    name: 'Santa Clarita',
    state: 'California',
    stateInitials: 'CA',
  },
  'Santa Maria': {
    name: 'Santa Maria',
    state: 'California',
    stateInitials: 'CA',
  },
  'Santa Rosa': {
    name: 'Santa Rosa',
    state: 'California',
    stateInitials: 'CA',
  },
  Savannah: {
    name: 'Savannah',
    state: 'Georgia',
    stateInitials: 'GA',
  },
  Scottsdale: {
    name: 'Scottsdale',
    state: 'Arizona',
    stateInitials: 'AZ',
  },
  Seattle: {
    name: 'Seattle',
    state: 'Washington',
    stateInitials: 'WA',
  },
  Shreveport: {
    name: 'Shreveport',
    state: 'Louisiana',
    stateInitials: 'LA',
  },
  'Simi Valley': {
    name: 'Simi Valley',
    state: 'California',
    stateInitials: 'CA',
  },
  'Sioux Falls': {
    name: 'Sioux Falls',
    state: 'South Dakota',
    stateInitials: 'SD',
  },
  'South Bend': {
    name: 'South Bend',
    state: 'Indiana',
    stateInitials: 'IN',
  },
  'South Fulton': {
    name: 'South Fulton',
    state: 'Georgia',
    stateInitials: 'GA',
  },
  Sparks: {
    name: 'Sparks',
    state: 'Nevada',
    stateInitials: 'NV',
  },
  Spokane: {
    name: 'Spokane',
    state: 'Washington',
    stateInitials: 'WA',
  },
  'Spokane Valley': {
    name: 'Spokane Valley',
    state: 'Washington',
    stateInitials: 'WA',
  },
  Springfield: {
    name: 'Springfield',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  'St. Louis': {
    name: 'St. Louis',
    state: 'Missouri',
    stateInitials: 'MO',
  },
  'St. Petersburg': {
    name: 'St. Petersburg',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Stamford: {
    name: 'Stamford',
    state: 'Connecticut',
    stateInitials: 'CT',
  },
  'Sterling Heights': {
    name: 'Sterling Heights',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  Stockton: {
    name: 'Stockton',
    state: 'California',
    stateInitials: 'CA',
  },
  'Sugar Land': {
    name: 'Sugar Land',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Sunnyvale: {
    name: 'Sunnyvale',
    state: 'California',
    stateInitials: 'CA',
  },
  Surprise: {
    name: 'Surprise',
    state: 'Arizona',
    stateInitials: 'AZ',
  },
  Syracuse: {
    name: 'Syracuse',
    state: 'New York',
    stateInitials: 'NY',
  },
  Tacoma: {
    name: 'Tacoma',
    state: 'Washington',
    stateInitials: 'WA',
  },
  Tallahassee: {
    name: 'Tallahassee',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Tampa: {
    name: 'Tampa',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Temecula: {
    name: 'Temecula',
    state: 'California',
    stateInitials: 'CA',
  },
  Tempe: {
    name: 'Tempe',
    state: 'Arizona',
    stateInitials: 'AZ',
  },
  Thornton: {
    name: 'Thornton',
    state: 'Colorado',
    stateInitials: 'CO',
  },
  'Thousand Oaks': {
    name: 'Thousand Oaks',
    state: 'California',
    stateInitials: 'CA',
  },
  Toledo: {
    name: 'Toledo',
    state: 'Ohio',
    stateInitials: 'OH',
  },
  Topeka: {
    name: 'Topeka',
    state: 'Kansas',
    stateInitials: 'KS',
  },
  Torrance: {
    name: 'Torrance',
    state: 'California',
    stateInitials: 'CA',
  },
  Tucson: {
    name: 'Tucson',
    state: 'Arizona',
    stateInitials: 'AZ',
  },
  Tulsa: {
    name: 'Tulsa',
    state: 'Oklahoma',
    stateInitials: 'OK',
  },
  Tyler: {
    name: 'Tyler',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Vacaville: {
    name: 'Vacaville',
    state: 'California',
    stateInitials: 'CA',
  },
  Vallejo: {
    name: 'Vallejo',
    state: 'California',
    stateInitials: 'CA',
  },
  Vancouver: {
    name: 'Vancouver',
    state: 'Washington',
    stateInitials: 'WA',
  },
  'Ventura]': {
    name: 'Ventura]',
    state: 'California',
    stateInitials: 'CA',
  },
  Victorville: {
    name: 'Victorville',
    state: 'California',
    stateInitials: 'CA',
  },
  'Virginia Beach': {
    name: 'Virginia Beach',
    state: 'Virginia',
    stateInitials: 'VA',
  },
  Visalia: {
    name: 'Visalia',
    state: 'California',
    stateInitials: 'CA',
  },
  Waco: {
    name: 'Waco',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Warren: {
    name: 'Warren',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  Washington: {
    name: 'Washington',
    state: 'District of Columbia',
    stateInitials: 'DC',
  },
  Waterbury: {
    name: 'Waterbury',
    state: 'Connecticut',
    stateInitials: 'CT',
  },
  'West Covina': {
    name: 'West Covina',
    state: 'California',
    stateInitials: 'CA',
  },
  'West Jordan': {
    name: 'West Jordan',
    state: 'Utah',
    stateInitials: 'UT',
  },
  'West Palm Beach': {
    name: 'West Palm Beach',
    state: 'Florida',
    stateInitials: 'FL',
  },
  'West Valley City': {
    name: 'West Valley City',
    state: 'Utah',
    stateInitials: 'UT',
  },
  Westminster: {
    name: 'Westminster',
    state: 'Colorado',
    stateInitials: 'CO',
  },
  Wichita: {
    name: 'Wichita',
    state: 'Kansas',
    stateInitials: 'KS',
  },
  'Wichita Falls': {
    name: 'Wichita Falls',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Wilmington: {
    name: 'Wilmington',
    state: 'North Carolina',
    stateInitials: 'NC',
  },
  'Winston–Salem': {
    name: 'Winston–Salem',
    state: 'North Carolina',
    stateInitials: 'NC',
  },
  Woodbridge: {
    name: 'Woodbridge',
    state: 'New Jersey',
    stateInitials: 'NJ',
  },
  Worcester: {
    name: 'Worcester',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  Yonkers: {
    name: 'Yonkers',
    state: 'New York',
    stateInitials: 'NY',
  },
};

export default CITIES;
