type City = {
  name: string;
  state: string;
  stateInitials: string;
};

type Cities = {
  [key: string]: City;
};

const CITIES: Cities = {
  'New York': {
    name: 'New York',
    state: 'New York',
    stateInitials: 'NY',
  },
  'Los Angeles': {
    name: 'Los Angeles',
    state: 'California',
    stateInitials: 'CA',
  },
  Chicago: {
    name: 'Chicago',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Houston: {
    name: 'Houston',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Philadelphia: {
    name: 'Philadelphia',
    state: 'Pennsylvania',
    stateInitials: 'AK',
  },
  Phoenix: {
    name: 'Phoenix',
    state: 'Arizona',
    stateInitials: 'AZ',
  },
  'San Antonio': {
    name: 'San Antonio',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'San Diego': {
    name: 'San Diego',
    state: 'California',
    stateInitials: 'CA',
  },
  Dallas: {
    name: 'Dallas',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'San Jose': {
    name: 'San Jose',
    state: 'California',
    stateInitials: 'CA',
  },
  Austin: {
    name: 'Austin',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Indianapolis: {
    name: 'Indianapolis',
    state: 'Indiana',
    stateInitials: 'IN',
  },
  Jacksonville: {
    name: 'Jacksonville',
    state: 'North Carolina',
    stateInitials: 'NC',
  },
  'San Francisco': {
    name: 'San Francisco',
    state: 'California',
    stateInitials: 'CA',
  },
  Columbus: {
    name: 'Columbus',
    state: 'Indiana',
    stateInitials: 'IN',
  },
  Charlotte: {
    name: 'Charlotte',
    state: 'North Carolina',
    stateInitials: 'NC',
  },
  'Fort Worth': {
    name: 'Fort Worth',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Detroit: {
    name: 'Detroit',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  'El Paso': {
    name: 'El Paso',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Memphis: {
    name: 'Memphis',
    state: 'Tennessee',
    stateInitials: 'TN',
  },
  Seattle: {
    name: 'Seattle',
    state: 'Washington, D.C.',
    stateInitials: 'WA',
  },
  Denver: {
    name: 'Denver',
    state: 'Colorado',
    stateInitials: 'CO',
  },
  Washington: {
    name: 'Washington',
    state: 'Washington, D.C.',
    stateInitials: 'WA',
  },
  Boston: {
    name: 'Boston',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  'Nashville-Davidson': {
    name: 'Nashville-Davidson',
    state: 'Tennessee',
    stateInitials: 'TN',
  },
  Baltimore: {
    name: 'Baltimore',
    state: 'Maryland',
    stateInitials: 'MD',
  },
  'Oklahoma City': {
    name: 'Oklahoma City',
    state: 'Oklahoma',
    stateInitials: 'OK',
  },
  'Louisville/Jefferson County': {
    name: 'Louisville/Jefferson County',
    state: 'Kentucky',
    stateInitials: 'KY',
  },
  Portland: {
    name: 'Portland',
    state: 'Maine',
    stateInitials: 'ME',
  },
  'Las Vegas': {
    name: 'Las Vegas',
    state: 'Nevada',
    stateInitials: 'NV',
  },
  Milwaukee: {
    name: 'Milwaukee',
    state: 'Wisconsin',
    stateInitials: 'WI',
  },
  Albuquerque: {
    name: 'Albuquerque',
    state: 'New Mexico',
    stateInitials: 'NM',
  },
  Tucson: {
    name: 'Tucson',
    state: 'Arizona',
    stateInitials: 'AZ',
  },
  Fresno: {
    name: 'Fresno',
    state: 'California',
    stateInitials: 'CA',
  },
  Sacramento: {
    name: 'Sacramento',
    state: 'California',
    stateInitials: 'CA',
  },
  'Long Beach': {
    name: 'Long Beach',
    state: 'California',
    stateInitials: 'CA',
  },
  'Kansas City': {
    name: 'Kansas City',
    state: 'Kansas',
    stateInitials: 'KS',
  },
  Mesa: {
    name: 'Mesa',
    state: 'Arizona',
    stateInitials: 'AZ',
  },
  'Virginia Beach': {
    name: 'Virginia Beach',
    state: 'Virginia',
    stateInitials: 'VA',
  },
  Atlanta: {
    name: 'Atlanta',
    state: 'Georgia',
    stateInitials: 'GA',
  },
  'Colorado Springs': {
    name: 'Colorado Springs',
    state: 'Colorado',
    stateInitials: 'CO',
  },
  Omaha: {
    name: 'Omaha',
    state: 'Nebraska',
    stateInitials: 'NE',
  },
  Raleigh: {
    name: 'Raleigh',
    state: 'North Carolina',
    stateInitials: 'NC',
  },
  Miami: {
    name: 'Miami',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Oakland: {
    name: 'Oakland',
    state: 'California',
    stateInitials: 'CA',
  },
  Minneapolis: {
    name: 'Minneapolis',
    state: 'Minnesota',
    stateInitials: 'MN',
  },
  Tulsa: {
    name: 'Tulsa',
    state: 'Oklahoma',
    stateInitials: 'OK',
  },
  Cleveland: {
    name: 'Cleveland',
    state: 'Tennessee',
    stateInitials: 'TN',
  },
  Wichita: {
    name: 'Wichita',
    state: 'Kansas',
    stateInitials: 'KS',
  },
  Arlington: {
    name: 'Arlington',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'New Orleans': {
    name: 'New Orleans',
    state: 'Louisiana',
    stateInitials: 'LA',
  },
  Bakersfield: {
    name: 'Bakersfield',
    state: 'California',
    stateInitials: 'CA',
  },
  Tampa: {
    name: 'Tampa',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Honolulu: {
    name: 'Honolulu',
    state: 'Hawaii',
    stateInitials: 'HI',
  },
  Aurora: {
    name: 'Aurora',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Anaheim: {
    name: 'Anaheim',
    state: 'California',
    stateInitials: 'CA',
  },
  'Santa Ana': {
    name: 'Santa Ana',
    state: 'California',
    stateInitials: 'CA',
  },
  'St. Louis': {
    name: 'St. Louis',
    state: 'Missouri',
    stateInitials: 'MO',
  },
  Riverside: {
    name: 'Riverside',
    state: 'California',
    stateInitials: 'CA',
  },
  'Corpus Christi': {
    name: 'Corpus Christi',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'Lexington-Fayette': {
    name: 'Lexington-Fayette',
    state: 'Kentucky',
    stateInitials: 'KY',
  },
  Pittsburgh: {
    name: 'Pittsburgh',
    state: 'Pennsylvania',
    stateInitials: 'AK',
  },
  Anchorage: {
    name: 'Anchorage',
    state: 'Alaska',
    stateInitials: 'AK',
  },
  Stockton: {
    name: 'Stockton',
    state: 'California',
    stateInitials: 'CA',
  },
  Cincinnati: {
    name: 'Cincinnati',
    state: 'Ohio',
    stateInitials: 'OH',
  },
  'St. Paul': {
    name: 'St. Paul',
    state: 'Minnesota',
    stateInitials: 'MN',
  },
  Toledo: {
    name: 'Toledo',
    state: 'Ohio',
    stateInitials: 'OH',
  },
  Greensboro: {
    name: 'Greensboro',
    state: 'North Carolina',
    stateInitials: 'NC',
  },
  Newark: {
    name: 'Newark',
    state: 'California',
    stateInitials: 'CA',
  },
  Plano: {
    name: 'Plano',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Henderson: {
    name: 'Henderson',
    state: 'Nevada',
    stateInitials: 'NV',
  },
  Lincoln: {
    name: 'Lincoln',
    state: 'California',
    stateInitials: 'CA',
  },
  Buffalo: {
    name: 'Buffalo',
    state: 'New York',
    stateInitials: 'NY',
  },
  'Jersey City': {
    name: 'Jersey City',
    state: 'New Jersey',
    stateInitials: 'NJ',
  },
  'Chula Vista': {
    name: 'Chula Vista',
    state: 'California',
    stateInitials: 'CA',
  },
  'Fort Wayne': {
    name: 'Fort Wayne',
    state: 'Indiana',
    stateInitials: 'IN',
  },
  Orlando: {
    name: 'Orlando',
    state: 'Florida',
    stateInitials: 'FL',
  },
  'St. Petersburg': {
    name: 'St. Petersburg',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Chandler: {
    name: 'Chandler',
    state: 'Arizona',
    stateInitials: 'AZ',
  },
  Laredo: {
    name: 'Laredo',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Norfolk: {
    name: 'Norfolk',
    state: 'Virginia',
    stateInitials: 'VA',
  },
  Durham: {
    name: 'Durham',
    state: 'North Carolina',
    stateInitials: 'NC',
  },
  Madison: {
    name: 'Madison',
    state: 'Alabama',
    stateInitials: 'AL',
  },
  Lubbock: {
    name: 'Lubbock',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Irvine: {
    name: 'Irvine',
    state: 'California',
    stateInitials: 'CA',
  },
  'Winston-Salem': {
    name: 'Winston-Salem',
    state: 'North Carolina',
    stateInitials: 'NC',
  },
  Glendale: {
    name: 'Glendale',
    state: 'California',
    stateInitials: 'CA',
  },
  Garland: {
    name: 'Garland',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Hialeah: {
    name: 'Hialeah',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Reno: {
    name: 'Reno',
    state: 'Nevada',
    stateInitials: 'NV',
  },
  Chesapeake: {
    name: 'Chesapeake',
    state: 'Virginia',
    stateInitials: 'VA',
  },
  Gilbert: {
    name: 'Gilbert',
    state: 'Arizona',
    stateInitials: 'AZ',
  },
  'Baton Rouge': {
    name: 'Baton Rouge',
    state: 'Louisiana',
    stateInitials: 'LA',
  },
  Irving: {
    name: 'Irving',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Scottsdale: {
    name: 'Scottsdale',
    state: 'Arizona',
    stateInitials: 'AZ',
  },
  'North Las Vegas': {
    name: 'North Las Vegas',
    state: 'Nevada',
    stateInitials: 'NV',
  },
  Fremont: {
    name: 'Fremont',
    state: 'California',
    stateInitials: 'CA',
  },
  'Boise City': {
    name: 'Boise City',
    state: 'Idaho',
    stateInitials: 'ID',
  },
  Richmond: {
    name: 'Richmond',
    state: 'California',
    stateInitials: 'CA',
  },
  'San Bernardino': {
    name: 'San Bernardino',
    state: 'California',
    stateInitials: 'CA',
  },
  Birmingham: {
    name: 'Birmingham',
    state: 'Alabama',
    stateInitials: 'AL',
  },
  Spokane: {
    name: 'Spokane',
    state: 'Washington, D.C.',
    stateInitials: 'WA',
  },
  Rochester: {
    name: 'Rochester',
    state: 'Minnesota',
    stateInitials: 'MN',
  },
  'Des Moines': {
    name: 'Des Moines',
    state: 'Iowa',
    stateInitials: 'IA',
  },
  Modesto: {
    name: 'Modesto',
    state: 'California',
    stateInitials: 'CA',
  },
  Fayetteville: {
    name: 'Fayetteville',
    state: 'Arkansas',
    stateInitials: 'AR',
  },
  Tacoma: {
    name: 'Tacoma',
    state: 'Washington, D.C.',
    stateInitials: 'WA',
  },
  Oxnard: {
    name: 'Oxnard',
    state: 'California',
    stateInitials: 'CA',
  },
  Fontana: {
    name: 'Fontana',
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
  Shreveport: {
    name: 'Shreveport',
    state: 'Louisiana',
    stateInitials: 'LA',
  },
  Yonkers: {
    name: 'Yonkers',
    state: 'New York',
    stateInitials: 'NY',
  },
  Akron: {
    name: 'Akron',
    state: 'Ohio',
    stateInitials: 'OH',
  },
  'Huntington Beach': {
    name: 'Huntington Beach',
    state: 'California',
    stateInitials: 'CA',
  },
  'Little Rock': {
    name: 'Little Rock',
    state: 'Arkansas',
    stateInitials: 'AR',
  },
  'Augusta-Richmond County': {
    name: 'Augusta-Richmond County',
    state: 'Georgia',
    stateInitials: 'GA',
  },
  Amarillo: {
    name: 'Amarillo',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Mobile: {
    name: 'Mobile',
    state: 'Alabama',
    stateInitials: 'AL',
  },
  'Grand Rapids': {
    name: 'Grand Rapids',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  'Salt Lake City': {
    name: 'Salt Lake City',
    state: 'Utah',
    stateInitials: 'UT',
  },
  Tallahassee: {
    name: 'Tallahassee',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Huntsville: {
    name: 'Huntsville',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'Grand Prairie': {
    name: 'Grand Prairie',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Knoxville: {
    name: 'Knoxville',
    state: 'Tennessee',
    stateInitials: 'TN',
  },
  Worcester: {
    name: 'Worcester',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  'Newport News': {
    name: 'Newport News',
    state: 'Virginia',
    stateInitials: 'VA',
  },
  Brownsville: {
    name: 'Brownsville',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'Overland Park': {
    name: 'Overland Park',
    state: 'Kansas',
    stateInitials: 'KS',
  },
  'Santa Clarita': {
    name: 'Santa Clarita',
    state: 'California',
    stateInitials: 'CA',
  },
  Providence: {
    name: 'Providence',
    state: 'Rhode Island',
    stateInitials: 'AK',
  },
  'Garden Grove': {
    name: 'Garden Grove',
    state: 'California',
    stateInitials: 'CA',
  },
  Chattanooga: {
    name: 'Chattanooga',
    state: 'Tennessee',
    stateInitials: 'TN',
  },
  Oceanside: {
    name: 'Oceanside',
    state: 'California',
    stateInitials: 'CA',
  },
  Jackson: {
    name: 'Jackson',
    state: 'Tennessee',
    stateInitials: 'TN',
  },
  'Fort Lauderdale': {
    name: 'Fort Lauderdale',
    state: 'Florida',
    stateInitials: 'FL',
  },
  'Santa Rosa': {
    name: 'Santa Rosa',
    state: 'California',
    stateInitials: 'CA',
  },
  'Rancho Cucamonga': {
    name: 'Rancho Cucamonga',
    state: 'California',
    stateInitials: 'CA',
  },
  'Port St. Lucie': {
    name: 'Port St. Lucie',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Tempe: {
    name: 'Tempe',
    state: 'Arizona',
    stateInitials: 'AZ',
  },
  Ontario: {
    name: 'Ontario',
    state: 'California',
    stateInitials: 'CA',
  },
  Vancouver: {
    name: 'Vancouver',
    state: 'Washington, D.C.',
    stateInitials: 'WA',
  },
  'Cape Coral': {
    name: 'Cape Coral',
    state: 'Florida',
    stateInitials: 'FL',
  },
  'Sioux Falls': {
    name: 'Sioux Falls',
    state: 'South Dakota',
    stateInitials: 'SD',
  },
  Springfield: {
    name: 'Springfield',
    state: 'Ohio',
    stateInitials: 'OH',
  },
  Peoria: {
    name: 'Peoria',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  'Pembroke Pines': {
    name: 'Pembroke Pines',
    state: 'Florida',
    stateInitials: 'FL',
  },
  'Elk Grove': {
    name: 'Elk Grove',
    state: 'California',
    stateInitials: 'CA',
  },
  Salem: {
    name: 'Salem',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  Lancaster: {
    name: 'Lancaster',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Corona: {
    name: 'Corona',
    state: 'California',
    stateInitials: 'CA',
  },
  Eugene: {
    name: 'Eugene',
    state: 'Oregon',
    stateInitials: 'OR',
  },
  Palmdale: {
    name: 'Palmdale',
    state: 'California',
    stateInitials: 'CA',
  },
  Salinas: {
    name: 'Salinas',
    state: 'California',
    stateInitials: 'CA',
  },
  Pasadena: {
    name: 'Pasadena',
    state: 'California',
    stateInitials: 'CA',
  },
  'Fort Collins': {
    name: 'Fort Collins',
    state: 'Colorado',
    stateInitials: 'CO',
  },
  Hayward: {
    name: 'Hayward',
    state: 'California',
    stateInitials: 'CA',
  },
  Pomona: {
    name: 'Pomona',
    state: 'California',
    stateInitials: 'CA',
  },
  Cary: {
    name: 'Cary',
    state: 'North Carolina',
    stateInitials: 'NC',
  },
  Rockford: {
    name: 'Rockford',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Alexandria: {
    name: 'Alexandria',
    state: 'Louisiana',
    stateInitials: 'LA',
  },
  Escondido: {
    name: 'Escondido',
    state: 'California',
    stateInitials: 'CA',
  },
  McKinney: {
    name: 'McKinney',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Joliet: {
    name: 'Joliet',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Sunnyvale: {
    name: 'Sunnyvale',
    state: 'California',
    stateInitials: 'CA',
  },
  Torrance: {
    name: 'Torrance',
    state: 'California',
    stateInitials: 'CA',
  },
  Bridgeport: {
    name: 'Bridgeport',
    state: 'Connecticut',
    stateInitials: 'CT',
  },
  Lakewood: {
    name: 'Lakewood',
    state: 'Ohio',
    stateInitials: 'OH',
  },
  Hollywood: {
    name: 'Hollywood',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Paterson: {
    name: 'Paterson',
    state: 'New Jersey',
    stateInitials: 'NJ',
  },
  Naperville: {
    name: 'Naperville',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Syracuse: {
    name: 'Syracuse',
    state: 'New York',
    stateInitials: 'NY',
  },
  Mesquite: {
    name: 'Mesquite',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Dayton: {
    name: 'Dayton',
    state: 'Ohio',
    stateInitials: 'OH',
  },
  Savannah: {
    name: 'Savannah',
    state: 'Georgia',
    stateInitials: 'GA',
  },
  Clarksville: {
    name: 'Clarksville',
    state: 'Tennessee',
    stateInitials: 'TN',
  },
  Orange: {
    name: 'Orange',
    state: 'California',
    stateInitials: 'CA',
  },
  Fullerton: {
    name: 'Fullerton',
    state: 'California',
    stateInitials: 'CA',
  },
  Killeen: {
    name: 'Killeen',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Frisco: {
    name: 'Frisco',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Hampton: {
    name: 'Hampton',
    state: 'Virginia',
    stateInitials: 'VA',
  },
  McAllen: {
    name: 'McAllen',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Warren: {
    name: 'Warren',
    state: 'Ohio',
    stateInitials: 'OH',
  },
  Bellevue: {
    name: 'Bellevue',
    state: 'Nebraska',
    stateInitials: 'NE',
  },
  'West Valley City': {
    name: 'West Valley City',
    state: 'Utah',
    stateInitials: 'UT',
  },
  Columbia: {
    name: 'Columbia',
    state: 'Missouri',
    stateInitials: 'MO',
  },
  Olathe: {
    name: 'Olathe',
    state: 'Kansas',
    stateInitials: 'KS',
  },
  'Sterling Heights': {
    name: 'Sterling Heights',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  'New Haven': {
    name: 'New Haven',
    state: 'Connecticut',
    stateInitials: 'CT',
  },
  Miramar: {
    name: 'Miramar',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Waco: {
    name: 'Waco',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'Thousand Oaks': {
    name: 'Thousand Oaks',
    state: 'California',
    stateInitials: 'CA',
  },
  'Cedar Rapids': {
    name: 'Cedar Rapids',
    state: 'Iowa',
    stateInitials: 'IA',
  },
  Charleston: {
    name: 'Charleston',
    state: 'West Virginia',
    stateInitials: 'WV',
  },
  Visalia: {
    name: 'Visalia',
    state: 'California',
    stateInitials: 'CA',
  },
  Topeka: {
    name: 'Topeka',
    state: 'Kansas',
    stateInitials: 'KS',
  },
  Elizabeth: {
    name: 'Elizabeth',
    state: 'New Jersey',
    stateInitials: 'NJ',
  },
  Gainesville: {
    name: 'Gainesville',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Thornton: {
    name: 'Thornton',
    state: 'Colorado',
    stateInitials: 'CO',
  },
  Roseville: {
    name: 'Roseville',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  Carrollton: {
    name: 'Carrollton',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'Coral Springs': {
    name: 'Coral Springs',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Stamford: {
    name: 'Stamford',
    state: 'Connecticut',
    stateInitials: 'CT',
  },
  'Simi Valley': {
    name: 'Simi Valley',
    state: 'California',
    stateInitials: 'CA',
  },
  Concord: {
    name: 'Concord',
    state: 'New Hampshire',
    stateInitials: 'NH',
  },
  Hartford: {
    name: 'Hartford',
    state: 'Connecticut',
    stateInitials: 'CT',
  },
  Kent: {
    name: 'Kent',
    state: 'Washington, D.C.',
    stateInitials: 'WA',
  },
  Lafayette: {
    name: 'Lafayette',
    state: 'Indiana',
    stateInitials: 'IN',
  },
  Midland: {
    name: 'Midland',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  Surprise: {
    name: 'Surprise',
    state: 'Arizona',
    stateInitials: 'AZ',
  },
  Denton: {
    name: 'Denton',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Victorville: {
    name: 'Victorville',
    state: 'California',
    stateInitials: 'CA',
  },
  Evansville: {
    name: 'Evansville',
    state: 'Indiana',
    stateInitials: 'IN',
  },
  'Santa Clara': {
    name: 'Santa Clara',
    state: 'California',
    stateInitials: 'CA',
  },
  Abilene: {
    name: 'Abilene',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'Athens-Clarke County': {
    name: 'Athens-Clarke County',
    state: 'Georgia',
    stateInitials: 'GA',
  },
  Vallejo: {
    name: 'Vallejo',
    state: 'California',
    stateInitials: 'CA',
  },
  Allentown: {
    name: 'Allentown',
    state: 'Pennsylvania',
    stateInitials: 'AK',
  },
  Norman: {
    name: 'Norman',
    state: 'Oklahoma',
    stateInitials: 'OK',
  },
  Beaumont: {
    name: 'Beaumont',
    state: 'California',
    stateInitials: 'CA',
  },
  Independence: {
    name: 'Independence',
    state: 'Missouri',
    stateInitials: 'MO',
  },
  Murfreesboro: {
    name: 'Murfreesboro',
    state: 'Tennessee',
    stateInitials: 'TN',
  },
  'Ann Arbor': {
    name: 'Ann Arbor',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  Berkeley: {
    name: 'Berkeley',
    state: 'California',
    stateInitials: 'CA',
  },
  Provo: {
    name: 'Provo',
    state: 'Utah',
    stateInitials: 'UT',
  },
  'El Monte': {
    name: 'El Monte',
    state: 'California',
    stateInitials: 'CA',
  },
  Lansing: {
    name: 'Lansing',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  Fargo: {
    name: 'Fargo',
    state: 'North Dakota',
    stateInitials: 'ND',
  },
  Downey: {
    name: 'Downey',
    state: 'California',
    stateInitials: 'CA',
  },
  'Costa Mesa': {
    name: 'Costa Mesa',
    state: 'California',
    stateInitials: 'CA',
  },
  Wilmington: {
    name: 'Wilmington',
    state: 'Delaware',
    stateInitials: 'DE',
  },
  Arvada: {
    name: 'Arvada',
    state: 'Colorado',
    stateInitials: 'CO',
  },
  Inglewood: {
    name: 'Inglewood',
    state: 'California',
    stateInitials: 'CA',
  },
  'Miami Gardens': {
    name: 'Miami Gardens',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Carlsbad: {
    name: 'Carlsbad',
    state: 'California',
    stateInitials: 'CA',
  },
  Westminster: {
    name: 'Westminster',
    state: 'California',
    stateInitials: 'CA',
  },
  Odessa: {
    name: 'Odessa',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Manchester: {
    name: 'Manchester',
    state: 'New Hampshire',
    stateInitials: 'NH',
  },
  Elgin: {
    name: 'Elgin',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  'West Jordan': {
    name: 'West Jordan',
    state: 'Utah',
    stateInitials: 'UT',
  },
  'Round Rock': {
    name: 'Round Rock',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Clearwater: {
    name: 'Clearwater',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Waterbury: {
    name: 'Waterbury',
    state: 'Connecticut',
    stateInitials: 'CT',
  },
  Gresham: {
    name: 'Gresham',
    state: 'Oregon',
    stateInitials: 'OR',
  },
  Fairfield: {
    name: 'Fairfield',
    state: 'Ohio',
    stateInitials: 'OH',
  },
  Billings: {
    name: 'Billings',
    state: 'Montana',
    stateInitials: 'MT',
  },
  Lowell: {
    name: 'Lowell',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  'San Buenaventura (Ventura)': {
    name: 'San Buenaventura (Ventura)',
    state: 'California',
    stateInitials: 'CA',
  },
  Pueblo: {
    name: 'Pueblo',
    state: 'Colorado',
    stateInitials: 'CO',
  },
  'High Point': {
    name: 'High Point',
    state: 'North Carolina',
    stateInitials: 'NC',
  },
  'West Covina': {
    name: 'West Covina',
    state: 'California',
    stateInitials: 'CA',
  },
  Murrieta: {
    name: 'Murrieta',
    state: 'California',
    stateInitials: 'CA',
  },
  Cambridge: {
    name: 'Cambridge',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  Antioch: {
    name: 'Antioch',
    state: 'California',
    stateInitials: 'CA',
  },
  Temecula: {
    name: 'Temecula',
    state: 'California',
    stateInitials: 'CA',
  },
  Norwalk: {
    name: 'Norwalk',
    state: 'Connecticut',
    stateInitials: 'CT',
  },
  Centennial: {
    name: 'Centennial',
    state: 'Colorado',
    stateInitials: 'CO',
  },
  Everett: {
    name: 'Everett',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  'Palm Bay': {
    name: 'Palm Bay',
    state: 'Florida',
    stateInitials: 'FL',
  },
  'Wichita Falls': {
    name: 'Wichita Falls',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'Green Bay': {
    name: 'Green Bay',
    state: 'Wisconsin',
    stateInitials: 'WI',
  },
  'Daly City': {
    name: 'Daly City',
    state: 'California',
    stateInitials: 'CA',
  },
  Burbank: {
    name: 'Burbank',
    state: 'California',
    stateInitials: 'CA',
  },
  Richardson: {
    name: 'Richardson',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'Pompano Beach': {
    name: 'Pompano Beach',
    state: 'Florida',
    stateInitials: 'FL',
  },
  'North Charleston': {
    name: 'North Charleston',
    state: 'South Carolina',
    stateInitials: 'SC',
  },
  'Broken Arrow': {
    name: 'Broken Arrow',
    state: 'Oklahoma',
    stateInitials: 'OK',
  },
  Boulder: {
    name: 'Boulder',
    state: 'Colorado',
    stateInitials: 'CO',
  },
  'West Palm Beach': {
    name: 'West Palm Beach',
    state: 'Florida',
    stateInitials: 'FL',
  },
  'Santa Maria': {
    name: 'Santa Maria',
    state: 'California',
    stateInitials: 'CA',
  },
  'El Cajon': {
    name: 'El Cajon',
    state: 'California',
    stateInitials: 'CA',
  },
  Davenport: {
    name: 'Davenport',
    state: 'Iowa',
    stateInitials: 'IA',
  },
  Rialto: {
    name: 'Rialto',
    state: 'California',
    stateInitials: 'CA',
  },
  'Las Cruces': {
    name: 'Las Cruces',
    state: 'New Mexico',
    stateInitials: 'NM',
  },
  'San Mateo': {
    name: 'San Mateo',
    state: 'California',
    stateInitials: 'CA',
  },
  Lewisville: {
    name: 'Lewisville',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'South Bend': {
    name: 'South Bend',
    state: 'Indiana',
    stateInitials: 'IN',
  },
  Lakeland: {
    name: 'Lakeland',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Erie: {
    name: 'Erie',
    state: 'Pennsylvania',
    stateInitials: 'AK',
  },
  Tyler: {
    name: 'Tyler',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Pearland: {
    name: 'Pearland',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'College Station': {
    name: 'College Station',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Kenosha: {
    name: 'Kenosha',
    state: 'Wisconsin',
    stateInitials: 'WI',
  },
  'Sandy Springs': {
    name: 'Sandy Springs',
    state: 'Georgia',
    stateInitials: 'GA',
  },
  Clovis: {
    name: 'Clovis',
    state: 'New Mexico',
    stateInitials: 'NM',
  },
  Flint: {
    name: 'Flint',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  Roanoke: {
    name: 'Roanoke',
    state: 'Virginia',
    stateInitials: 'VA',
  },
  Albany: {
    name: 'Albany',
    state: 'Oregon',
    stateInitials: 'OR',
  },
  'Jurupa Valley': {
    name: 'Jurupa Valley',
    state: 'California',
    stateInitials: 'CA',
  },
  Compton: {
    name: 'Compton',
    state: 'California',
    stateInitials: 'CA',
  },
  'San Angelo': {
    name: 'San Angelo',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Hillsboro: {
    name: 'Hillsboro',
    state: 'Oregon',
    stateInitials: 'OR',
  },
  Lawton: {
    name: 'Lawton',
    state: 'Oklahoma',
    stateInitials: 'OK',
  },
  Renton: {
    name: 'Renton',
    state: 'Washington, D.C.',
    stateInitials: 'WA',
  },
  Vista: {
    name: 'Vista',
    state: 'California',
    stateInitials: 'CA',
  },
  Davie: {
    name: 'Davie',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Greeley: {
    name: 'Greeley',
    state: 'Colorado',
    stateInitials: 'CO',
  },
  'Mission Viejo': {
    name: 'Mission Viejo',
    state: 'California',
    stateInitials: 'CA',
  },
  Portsmouth: {
    name: 'Portsmouth',
    state: 'Virginia',
    stateInitials: 'VA',
  },
  Dearborn: {
    name: 'Dearborn',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  'South Gate': {
    name: 'South Gate',
    state: 'California',
    stateInitials: 'CA',
  },
  Tuscaloosa: {
    name: 'Tuscaloosa',
    state: 'Alabama',
    stateInitials: 'AL',
  },
  Livonia: {
    name: 'Livonia',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  'New Bedford': {
    name: 'New Bedford',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  Vacaville: {
    name: 'Vacaville',
    state: 'California',
    stateInitials: 'CA',
  },
  Brockton: {
    name: 'Brockton',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  Roswell: {
    name: 'Roswell',
    state: 'New Mexico',
    stateInitials: 'NM',
  },
  Beaverton: {
    name: 'Beaverton',
    state: 'Oregon',
    stateInitials: 'OR',
  },
  Quincy: {
    name: 'Quincy',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Sparks: {
    name: 'Sparks',
    state: 'Nevada',
    stateInitials: 'NV',
  },
  Yakima: {
    name: 'Yakima',
    state: 'Washington, D.C.',
    stateInitials: 'WA',
  },
  "Lee's Summit": {
    name: "Lee's Summit",
    state: 'Missouri',
    stateInitials: 'MO',
  },
  'Federal Way': {
    name: 'Federal Way',
    state: 'Washington, D.C.',
    stateInitials: 'WA',
  },
  Carson: {
    name: 'Carson',
    state: 'California',
    stateInitials: 'CA',
  },
  'Santa Monica': {
    name: 'Santa Monica',
    state: 'California',
    stateInitials: 'CA',
  },
  Hesperia: {
    name: 'Hesperia',
    state: 'California',
    stateInitials: 'CA',
  },
  Allen: {
    name: 'Allen',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'Rio Rancho': {
    name: 'Rio Rancho',
    state: 'New Mexico',
    stateInitials: 'NM',
  },
  Yuma: {
    name: 'Yuma',
    state: 'Arizona',
    stateInitials: 'AZ',
  },
  Orem: {
    name: 'Orem',
    state: 'Utah',
    stateInitials: 'UT',
  },
  Lynn: {
    name: 'Lynn',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  Redding: {
    name: 'Redding',
    state: 'California',
    stateInitials: 'CA',
  },
  'Spokane Valley': {
    name: 'Spokane Valley',
    state: 'Washington, D.C.',
    stateInitials: 'WA',
  },
  'Miami Beach': {
    name: 'Miami Beach',
    state: 'Florida',
    stateInitials: 'FL',
  },
  'League City': {
    name: 'League City',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Lawrence: {
    name: 'Lawrence',
    state: 'Indiana',
    stateInitials: 'IN',
  },
  'Santa Barbara': {
    name: 'Santa Barbara',
    state: 'California',
    stateInitials: 'CA',
  },
  Plantation: {
    name: 'Plantation',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Sandy: {
    name: 'Sandy',
    state: 'Utah',
    stateInitials: 'UT',
  },
  Sunrise: {
    name: 'Sunrise',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Macon: {
    name: 'Macon',
    state: 'Georgia',
    stateInitials: 'GA',
  },
  Longmont: {
    name: 'Longmont',
    state: 'Colorado',
    stateInitials: 'CO',
  },
  'Boca Raton': {
    name: 'Boca Raton',
    state: 'Florida',
    stateInitials: 'FL',
  },
  'San Marcos': {
    name: 'San Marcos',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Greenville: {
    name: 'Greenville',
    state: 'South Carolina',
    stateInitials: 'SC',
  },
  Waukegan: {
    name: 'Waukegan',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  'Fall River': {
    name: 'Fall River',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  Chico: {
    name: 'Chico',
    state: 'California',
    stateInitials: 'CA',
  },
  Newton: {
    name: 'Newton',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  'San Leandro': {
    name: 'San Leandro',
    state: 'California',
    stateInitials: 'CA',
  },
  Reading: {
    name: 'Reading',
    state: 'Pennsylvania',
    stateInitials: 'AK',
  },
  'Fort Smith': {
    name: 'Fort Smith',
    state: 'Arkansas',
    stateInitials: 'AR',
  },
  'Newport Beach': {
    name: 'Newport Beach',
    state: 'California',
    stateInitials: 'CA',
  },
  Asheville: {
    name: 'Asheville',
    state: 'North Carolina',
    stateInitials: 'NC',
  },
  Nashua: {
    name: 'Nashua',
    state: 'New Hampshire',
    stateInitials: 'NH',
  },
  Edmond: {
    name: 'Edmond',
    state: 'Oklahoma',
    stateInitials: 'OK',
  },
  Whittier: {
    name: 'Whittier',
    state: 'California',
    stateInitials: 'CA',
  },
  Nampa: {
    name: 'Nampa',
    state: 'Idaho',
    stateInitials: 'ID',
  },
  Bloomington: {
    name: 'Bloomington',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Deltona: {
    name: 'Deltona',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Hawthorne: {
    name: 'Hawthorne',
    state: 'California',
    stateInitials: 'CA',
  },
  Duluth: {
    name: 'Duluth',
    state: 'Minnesota',
    stateInitials: 'MN',
  },
  Carmel: {
    name: 'Carmel',
    state: 'Indiana',
    stateInitials: 'IN',
  },
  Suffolk: {
    name: 'Suffolk',
    state: 'Virginia',
    stateInitials: 'VA',
  },
  Clifton: {
    name: 'Clifton',
    state: 'New Jersey',
    stateInitials: 'NJ',
  },
  'Citrus Heights': {
    name: 'Citrus Heights',
    state: 'California',
    stateInitials: 'CA',
  },
  Livermore: {
    name: 'Livermore',
    state: 'California',
    stateInitials: 'CA',
  },
  Tracy: {
    name: 'Tracy',
    state: 'California',
    stateInitials: 'CA',
  },
  Alhambra: {
    name: 'Alhambra',
    state: 'California',
    stateInitials: 'CA',
  },
  Kirkland: {
    name: 'Kirkland',
    state: 'Washington, D.C.',
    stateInitials: 'WA',
  },
  Trenton: {
    name: 'Trenton',
    state: 'New Jersey',
    stateInitials: 'NJ',
  },
  Ogden: {
    name: 'Ogden',
    state: 'Utah',
    stateInitials: 'UT',
  },
  Hoover: {
    name: 'Hoover',
    state: 'Alabama',
    stateInitials: 'AL',
  },
  Cicero: {
    name: 'Cicero',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Fishers: {
    name: 'Fishers',
    state: 'Indiana',
    stateInitials: 'IN',
  },
  'Sugar Land': {
    name: 'Sugar Land',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Danbury: {
    name: 'Danbury',
    state: 'Connecticut',
    stateInitials: 'CT',
  },
  Meridian: {
    name: 'Meridian',
    state: 'Mississippi',
    stateInitials: 'MS',
  },
  Indio: {
    name: 'Indio',
    state: 'California',
    stateInitials: 'CA',
  },
  Menifee: {
    name: 'Menifee',
    state: 'California',
    stateInitials: 'CA',
  },
  Champaign: {
    name: 'Champaign',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  'Buena Park': {
    name: 'Buena Park',
    state: 'California',
    stateInitials: 'CA',
  },
  Troy: {
    name: 'Troy',
    state: 'New York',
    stateInitials: 'NY',
  },
  "O'Fallon": {
    name: "O'Fallon",
    state: 'Missouri',
    stateInitials: 'MO',
  },
  'Johns Creek': {
    name: 'Johns Creek',
    state: 'Georgia',
    stateInitials: 'GA',
  },
  Bellingham: {
    name: 'Bellingham',
    state: 'Washington, D.C.',
    stateInitials: 'WA',
  },
  Westland: {
    name: 'Westland',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  'Sioux City': {
    name: 'Sioux City',
    state: 'Iowa',
    stateInitials: 'IA',
  },
  Warwick: {
    name: 'Warwick',
    state: 'Rhode Island',
    stateInitials: 'AK',
  },
  Hemet: {
    name: 'Hemet',
    state: 'California',
    stateInitials: 'CA',
  },
  Longview: {
    name: 'Longview',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'Farmington Hills': {
    name: 'Farmington Hills',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  Bend: {
    name: 'Bend',
    state: 'Oregon',
    stateInitials: 'OR',
  },
  Merced: {
    name: 'Merced',
    state: 'California',
    stateInitials: 'CA',
  },
  Mission: {
    name: 'Mission',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Chino: {
    name: 'Chino',
    state: 'California',
    stateInitials: 'CA',
  },
  'Redwood City': {
    name: 'Redwood City',
    state: 'California',
    stateInitials: 'CA',
  },
  Edinburg: {
    name: 'Edinburg',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Cranston: {
    name: 'Cranston',
    state: 'Rhode Island',
    stateInitials: 'AK',
  },
  Parma: {
    name: 'Parma',
    state: 'Ohio',
    stateInitials: 'OH',
  },
  'New Rochelle': {
    name: 'New Rochelle',
    state: 'New York',
    stateInitials: 'NY',
  },
  'Lake Forest': {
    name: 'Lake Forest',
    state: 'California',
    stateInitials: 'CA',
  },
  Napa: {
    name: 'Napa',
    state: 'California',
    stateInitials: 'CA',
  },
  Hammond: {
    name: 'Hammond',
    state: 'Indiana',
    stateInitials: 'IN',
  },
  Avondale: {
    name: 'Avondale',
    state: 'Arizona',
    stateInitials: 'AZ',
  },
  Somerville: {
    name: 'Somerville',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  'Palm Coast': {
    name: 'Palm Coast',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Bryan: {
    name: 'Bryan',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Gary: {
    name: 'Gary',
    state: 'Indiana',
    stateInitials: 'IN',
  },
  Largo: {
    name: 'Largo',
    state: 'Florida',
    stateInitials: 'FL',
  },
  'Brooklyn Park': {
    name: 'Brooklyn Park',
    state: 'Minnesota',
    stateInitials: 'MN',
  },
  Tustin: {
    name: 'Tustin',
    state: 'California',
    stateInitials: 'CA',
  },
  Racine: {
    name: 'Racine',
    state: 'Wisconsin',
    stateInitials: 'WI',
  },
  'Deerfield Beach': {
    name: 'Deerfield Beach',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Lynchburg: {
    name: 'Lynchburg',
    state: 'Virginia',
    stateInitials: 'VA',
  },
  'Mountain View': {
    name: 'Mountain View',
    state: 'California',
    stateInitials: 'CA',
  },
  Medford: {
    name: 'Medford',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  Bellflower: {
    name: 'Bellflower',
    state: 'California',
    stateInitials: 'CA',
  },
  Melbourne: {
    name: 'Melbourne',
    state: 'Florida',
    stateInitials: 'FL',
  },
  'St. Joseph': {
    name: 'St. Joseph',
    state: 'Missouri',
    stateInitials: 'MO',
  },
  Camden: {
    name: 'Camden',
    state: 'New Jersey',
    stateInitials: 'NJ',
  },
  'St. George': {
    name: 'St. George',
    state: 'Utah',
    stateInitials: 'UT',
  },
  Kennewick: {
    name: 'Kennewick',
    state: 'Washington, D.C.',
    stateInitials: 'WA',
  },
  'Baldwin Park': {
    name: 'Baldwin Park',
    state: 'California',
    stateInitials: 'CA',
  },
  'Chino Hills': {
    name: 'Chino Hills',
    state: 'California',
    stateInitials: 'CA',
  },
  Alameda: {
    name: 'Alameda',
    state: 'California',
    stateInitials: 'CA',
  },
  'Arlington Heights': {
    name: 'Arlington Heights',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Scranton: {
    name: 'Scranton',
    state: 'Pennsylvania',
    stateInitials: 'AK',
  },
  Evanston: {
    name: 'Evanston',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Kalamazoo: {
    name: 'Kalamazoo',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  Baytown: {
    name: 'Baytown',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Upland: {
    name: 'Upland',
    state: 'California',
    stateInitials: 'CA',
  },
  Springdale: {
    name: 'Springdale',
    state: 'Arkansas',
    stateInitials: 'AR',
  },
  Bethlehem: {
    name: 'Bethlehem',
    state: 'Pennsylvania',
    stateInitials: 'AK',
  },
  Schaumburg: {
    name: 'Schaumburg',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  'Mount Pleasant': {
    name: 'Mount Pleasant',
    state: 'South Carolina',
    stateInitials: 'SC',
  },
  Auburn: {
    name: 'Auburn',
    state: 'Alabama',
    stateInitials: 'AL',
  },
  Decatur: {
    name: 'Decatur',
    state: 'Alabama',
    stateInitials: 'AL',
  },
  'San Ramon': {
    name: 'San Ramon',
    state: 'California',
    stateInitials: 'CA',
  },
  Pleasanton: {
    name: 'Pleasanton',
    state: 'California',
    stateInitials: 'CA',
  },
  Wyoming: {
    name: 'Wyoming',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  'Lake Charles': {
    name: 'Lake Charles',
    state: 'Louisiana',
    stateInitials: 'LA',
  },
  Plymouth: {
    name: 'Plymouth',
    state: 'Minnesota',
    stateInitials: 'MN',
  },
  Bolingbrook: {
    name: 'Bolingbrook',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Pharr: {
    name: 'Pharr',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Appleton: {
    name: 'Appleton',
    state: 'Wisconsin',
    stateInitials: 'WI',
  },
  Gastonia: {
    name: 'Gastonia',
    state: 'North Carolina',
    stateInitials: 'NC',
  },
  Folsom: {
    name: 'Folsom',
    state: 'California',
    stateInitials: 'CA',
  },
  Southfield: {
    name: 'Southfield',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  'Rochester Hills': {
    name: 'Rochester Hills',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  'New Britain': {
    name: 'New Britain',
    state: 'Connecticut',
    stateInitials: 'CT',
  },
  Goodyear: {
    name: 'Goodyear',
    state: 'Arizona',
    stateInitials: 'AZ',
  },
  Canton: {
    name: 'Canton',
    state: 'Ohio',
    stateInitials: 'OH',
  },
  'Warner Robins': {
    name: 'Warner Robins',
    state: 'Georgia',
    stateInitials: 'GA',
  },
  'Union City': {
    name: 'Union City',
    state: 'New Jersey',
    stateInitials: 'NJ',
  },
  Perris: {
    name: 'Perris',
    state: 'California',
    stateInitials: 'CA',
  },
  Manteca: {
    name: 'Manteca',
    state: 'California',
    stateInitials: 'CA',
  },
  'Iowa City': {
    name: 'Iowa City',
    state: 'Iowa',
    stateInitials: 'IA',
  },
  Jonesboro: {
    name: 'Jonesboro',
    state: 'Arkansas',
    stateInitials: 'AR',
  },
  Lynwood: {
    name: 'Lynwood',
    state: 'California',
    stateInitials: 'CA',
  },
  Loveland: {
    name: 'Loveland',
    state: 'Colorado',
    stateInitials: 'CO',
  },
  Pawtucket: {
    name: 'Pawtucket',
    state: 'Rhode Island',
    stateInitials: 'AK',
  },
  'Boynton Beach': {
    name: 'Boynton Beach',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Waukesha: {
    name: 'Waukesha',
    state: 'Wisconsin',
    stateInitials: 'WI',
  },
  Gulfport: {
    name: 'Gulfport',
    state: 'Mississippi',
    stateInitials: 'MS',
  },
  'Apple Valley': {
    name: 'Apple Valley',
    state: 'Minnesota',
    stateInitials: 'MN',
  },
  Passaic: {
    name: 'Passaic',
    state: 'New Jersey',
    stateInitials: 'NJ',
  },
  'Rapid City': {
    name: 'Rapid City',
    state: 'South Dakota',
    stateInitials: 'SD',
  },
  Layton: {
    name: 'Layton',
    state: 'Utah',
    stateInitials: 'UT',
  },
  Turlock: {
    name: 'Turlock',
    state: 'California',
    stateInitials: 'CA',
  },
  Muncie: {
    name: 'Muncie',
    state: 'Indiana',
    stateInitials: 'IN',
  },
  Temple: {
    name: 'Temple',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'Missouri City': {
    name: 'Missouri City',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Redlands: {
    name: 'Redlands',
    state: 'California',
    stateInitials: 'CA',
  },
  'Santa Fe': {
    name: 'Santa Fe',
    state: 'New Mexico',
    stateInitials: 'NM',
  },
  Lauderhill: {
    name: 'Lauderhill',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Milpitas: {
    name: 'Milpitas',
    state: 'California',
    stateInitials: 'CA',
  },
  Palatine: {
    name: 'Palatine',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Missoula: {
    name: 'Missoula',
    state: 'Montana',
    stateInitials: 'MT',
  },
  'Rock Hill': {
    name: 'Rock Hill',
    state: 'South Carolina',
    stateInitials: 'SC',
  },
  Franklin: {
    name: 'Franklin',
    state: 'Tennessee',
    stateInitials: 'TN',
  },
  Flagstaff: {
    name: 'Flagstaff',
    state: 'Arizona',
    stateInitials: 'AZ',
  },
  'Flower Mound': {
    name: 'Flower Mound',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Weston: {
    name: 'Weston',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Waterloo: {
    name: 'Waterloo',
    state: 'Iowa',
    stateInitials: 'IA',
  },
  'Mount Vernon': {
    name: 'Mount Vernon',
    state: 'New York',
    stateInitials: 'NY',
  },
  'Fort Myers': {
    name: 'Fort Myers',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Dothan: {
    name: 'Dothan',
    state: 'Alabama',
    stateInitials: 'AL',
  },
  'Rancho Cordova': {
    name: 'Rancho Cordova',
    state: 'California',
    stateInitials: 'CA',
  },
  'Redondo Beach': {
    name: 'Redondo Beach',
    state: 'California',
    stateInitials: 'CA',
  },
  Pasco: {
    name: 'Pasco',
    state: 'Washington, D.C.',
    stateInitials: 'WA',
  },
  'St. Charles': {
    name: 'St. Charles',
    state: 'Missouri',
    stateInitials: 'MO',
  },
  'Eau Claire': {
    name: 'Eau Claire',
    state: 'Wisconsin',
    stateInitials: 'WI',
  },
  'North Richland Hills': {
    name: 'North Richland Hills',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Bismarck: {
    name: 'Bismarck',
    state: 'North Dakota',
    stateInitials: 'ND',
  },
  'Yorba Linda': {
    name: 'Yorba Linda',
    state: 'California',
    stateInitials: 'CA',
  },
  Kenner: {
    name: 'Kenner',
    state: 'Louisiana',
    stateInitials: 'LA',
  },
  'Walnut Creek': {
    name: 'Walnut Creek',
    state: 'California',
    stateInitials: 'CA',
  },
  Frederick: {
    name: 'Frederick',
    state: 'Maryland',
    stateInitials: 'MD',
  },
  Oshkosh: {
    name: 'Oshkosh',
    state: 'Wisconsin',
    stateInitials: 'WI',
  },
  Pittsburg: {
    name: 'Pittsburg',
    state: 'California',
    stateInitials: 'CA',
  },
  'Palo Alto': {
    name: 'Palo Alto',
    state: 'California',
    stateInitials: 'CA',
  },
  'Bossier City': {
    name: 'Bossier City',
    state: 'Louisiana',
    stateInitials: 'LA',
  },
  'St. Cloud': {
    name: 'St. Cloud',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Davis: {
    name: 'Davis',
    state: 'California',
    stateInitials: 'CA',
  },
  'South San Francisco': {
    name: 'South San Francisco',
    state: 'California',
    stateInitials: 'CA',
  },
  Camarillo: {
    name: 'Camarillo',
    state: 'California',
    stateInitials: 'CA',
  },
  'North Little Rock': {
    name: 'North Little Rock',
    state: 'Arkansas',
    stateInitials: 'AR',
  },
  Schenectady: {
    name: 'Schenectady',
    state: 'New York',
    stateInitials: 'NY',
  },
  Gaithersburg: {
    name: 'Gaithersburg',
    state: 'Maryland',
    stateInitials: 'MD',
  },
  Harlingen: {
    name: 'Harlingen',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Woodbury: {
    name: 'Woodbury',
    state: 'Minnesota',
    stateInitials: 'MN',
  },
  Eagan: {
    name: 'Eagan',
    state: 'Minnesota',
    stateInitials: 'MN',
  },
  'Yuba City': {
    name: 'Yuba City',
    state: 'California',
    stateInitials: 'CA',
  },
  'Maple Grove': {
    name: 'Maple Grove',
    state: 'Minnesota',
    stateInitials: 'MN',
  },
  Youngstown: {
    name: 'Youngstown',
    state: 'Ohio',
    stateInitials: 'OH',
  },
  Skokie: {
    name: 'Skokie',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Kissimmee: {
    name: 'Kissimmee',
    state: 'Florida',
    stateInitials: 'FL',
  },
  'Johnson City': {
    name: 'Johnson City',
    state: 'Tennessee',
    stateInitials: 'TN',
  },
  Victoria: {
    name: 'Victoria',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'San Clemente': {
    name: 'San Clemente',
    state: 'California',
    stateInitials: 'CA',
  },
  Bayonne: {
    name: 'Bayonne',
    state: 'New Jersey',
    stateInitials: 'NJ',
  },
  'Laguna Niguel': {
    name: 'Laguna Niguel',
    state: 'California',
    stateInitials: 'CA',
  },
  'East Orange': {
    name: 'East Orange',
    state: 'New Jersey',
    stateInitials: 'NJ',
  },
  Shawnee: {
    name: 'Shawnee',
    state: 'Kansas',
    stateInitials: 'KS',
  },
  Homestead: {
    name: 'Homestead',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Rockville: {
    name: 'Rockville',
    state: 'Maryland',
    stateInitials: 'MD',
  },
  'Delray Beach': {
    name: 'Delray Beach',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Janesville: {
    name: 'Janesville',
    state: 'Wisconsin',
    stateInitials: 'WI',
  },
  Conway: {
    name: 'Conway',
    state: 'Arkansas',
    stateInitials: 'AR',
  },
  'Pico Rivera': {
    name: 'Pico Rivera',
    state: 'California',
    stateInitials: 'CA',
  },
  Lorain: {
    name: 'Lorain',
    state: 'Ohio',
    stateInitials: 'OH',
  },
  Montebello: {
    name: 'Montebello',
    state: 'California',
    stateInitials: 'CA',
  },
  Lodi: {
    name: 'Lodi',
    state: 'California',
    stateInitials: 'CA',
  },
  'New Braunfels': {
    name: 'New Braunfels',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Marysville: {
    name: 'Marysville',
    state: 'Washington, D.C.',
    stateInitials: 'WA',
  },
  Tamarac: {
    name: 'Tamarac',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Madera: {
    name: 'Madera',
    state: 'California',
    stateInitials: 'CA',
  },
  Conroe: {
    name: 'Conroe',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'Santa Cruz': {
    name: 'Santa Cruz',
    state: 'California',
    stateInitials: 'CA',
  },
  'Eden Prairie': {
    name: 'Eden Prairie',
    state: 'Minnesota',
    stateInitials: 'MN',
  },
  Cheyenne: {
    name: 'Cheyenne',
    state: 'Wyoming',
    stateInitials: 'WY',
  },
  'Daytona Beach': {
    name: 'Daytona Beach',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Alpharetta: {
    name: 'Alpharetta',
    state: 'Georgia',
    stateInitials: 'GA',
  },
  Hamilton: {
    name: 'Hamilton',
    state: 'Ohio',
    stateInitials: 'OH',
  },
  Waltham: {
    name: 'Waltham',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  'Coon Rapids': {
    name: 'Coon Rapids',
    state: 'Minnesota',
    stateInitials: 'MN',
  },
  Haverhill: {
    name: 'Haverhill',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  'Council Bluffs': {
    name: 'Council Bluffs',
    state: 'Iowa',
    stateInitials: 'IA',
  },
  Taylor: {
    name: 'Taylor',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  Utica: {
    name: 'Utica',
    state: 'New York',
    stateInitials: 'NY',
  },
  Ames: {
    name: 'Ames',
    state: 'Iowa',
    stateInitials: 'IA',
  },
  'La Habra': {
    name: 'La Habra',
    state: 'California',
    stateInitials: 'CA',
  },
  Encinitas: {
    name: 'Encinitas',
    state: 'California',
    stateInitials: 'CA',
  },
  'Bowling Green': {
    name: 'Bowling Green',
    state: 'Kentucky',
    stateInitials: 'KY',
  },
  Burnsville: {
    name: 'Burnsville',
    state: 'Minnesota',
    stateInitials: 'MN',
  },
  'West Des Moines': {
    name: 'West Des Moines',
    state: 'Iowa',
    stateInitials: 'IA',
  },
  'Cedar Park': {
    name: 'Cedar Park',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Tulare: {
    name: 'Tulare',
    state: 'California',
    stateInitials: 'CA',
  },
  'Monterey Park': {
    name: 'Monterey Park',
    state: 'California',
    stateInitials: 'CA',
  },
  Vineland: {
    name: 'Vineland',
    state: 'New Jersey',
    stateInitials: 'NJ',
  },
  'Terre Haute': {
    name: 'Terre Haute',
    state: 'Indiana',
    stateInitials: 'IN',
  },
  'North Miami': {
    name: 'North Miami',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Mansfield: {
    name: 'Mansfield',
    state: 'Ohio',
    stateInitials: 'OH',
  },
  'West Allis': {
    name: 'West Allis',
    state: 'Wisconsin',
    stateInitials: 'WI',
  },
  Bristol: {
    name: 'Bristol',
    state: 'Connecticut',
    stateInitials: 'CT',
  },
  Taylorsville: {
    name: 'Taylorsville',
    state: 'Utah',
    stateInitials: 'UT',
  },
  Malden: {
    name: 'Malden',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  Meriden: {
    name: 'Meriden',
    state: 'Connecticut',
    stateInitials: 'CT',
  },
  Blaine: {
    name: 'Blaine',
    state: 'Minnesota',
    stateInitials: 'MN',
  },
  Wellington: {
    name: 'Wellington',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Cupertino: {
    name: 'Cupertino',
    state: 'California',
    stateInitials: 'CA',
  },
  Rogers: {
    name: 'Rogers',
    state: 'Arkansas',
    stateInitials: 'AR',
  },
  'St. Clair Shores': {
    name: 'St. Clair Shores',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  Gardena: {
    name: 'Gardena',
    state: 'California',
    stateInitials: 'CA',
  },
  Pontiac: {
    name: 'Pontiac',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  'National City': {
    name: 'National City',
    state: 'California',
    stateInitials: 'CA',
  },
  'Grand Junction': {
    name: 'Grand Junction',
    state: 'Colorado',
    stateInitials: 'CO',
  },
  Rocklin: {
    name: 'Rocklin',
    state: 'California',
    stateInitials: 'CA',
  },
  'Chapel Hill': {
    name: 'Chapel Hill',
    state: 'North Carolina',
    stateInitials: 'NC',
  },
  Casper: {
    name: 'Casper',
    state: 'Wyoming',
    stateInitials: 'WY',
  },
  Broomfield: {
    name: 'Broomfield',
    state: 'Colorado',
    stateInitials: 'CO',
  },
  Petaluma: {
    name: 'Petaluma',
    state: 'California',
    stateInitials: 'CA',
  },
  'South Jordan': {
    name: 'South Jordan',
    state: 'Utah',
    stateInitials: 'UT',
  },
  'Great Falls': {
    name: 'Great Falls',
    state: 'Montana',
    stateInitials: 'MT',
  },
  'North Port': {
    name: 'North Port',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Marietta: {
    name: 'Marietta',
    state: 'Georgia',
    stateInitials: 'GA',
  },
  'San Rafael': {
    name: 'San Rafael',
    state: 'California',
    stateInitials: 'CA',
  },
  'Royal Oak': {
    name: 'Royal Oak',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  'Des Plaines': {
    name: 'Des Plaines',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  'Huntington Park': {
    name: 'Huntington Park',
    state: 'California',
    stateInitials: 'CA',
  },
  'La Mesa': {
    name: 'La Mesa',
    state: 'California',
    stateInitials: 'CA',
  },
  'Orland Park': {
    name: 'Orland Park',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Lakeville: {
    name: 'Lakeville',
    state: 'Minnesota',
    stateInitials: 'MN',
  },
  Owensboro: {
    name: 'Owensboro',
    state: 'Kentucky',
    stateInitials: 'KY',
  },
  Moore: {
    name: 'Moore',
    state: 'Oklahoma',
    stateInitials: 'OK',
  },
  Jupiter: {
    name: 'Jupiter',
    state: 'Florida',
    stateInitials: 'FL',
  },
  'Idaho Falls': {
    name: 'Idaho Falls',
    state: 'Idaho',
    stateInitials: 'ID',
  },
  Dubuque: {
    name: 'Dubuque',
    state: 'Iowa',
    stateInitials: 'IA',
  },
  Bartlett: {
    name: 'Bartlett',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Rowlett: {
    name: 'Rowlett',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Novi: {
    name: 'Novi',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  'White Plains': {
    name: 'White Plains',
    state: 'New York',
    stateInitials: 'NY',
  },
  Arcadia: {
    name: 'Arcadia',
    state: 'California',
    stateInitials: 'CA',
  },
  Redmond: {
    name: 'Redmond',
    state: 'Washington, D.C.',
    stateInitials: 'WA',
  },
  'Lake Elsinore': {
    name: 'Lake Elsinore',
    state: 'California',
    stateInitials: 'CA',
  },
  Ocala: {
    name: 'Ocala',
    state: 'Florida',
    stateInitials: 'FL',
  },
  'Tinley Park': {
    name: 'Tinley Park',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  'Port Orange': {
    name: 'Port Orange',
    state: 'Florida',
    stateInitials: 'FL',
  },
  'Oak Lawn': {
    name: 'Oak Lawn',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  'Rocky Mount': {
    name: 'Rocky Mount',
    state: 'North Carolina',
    stateInitials: 'NC',
  },
  Kokomo: {
    name: 'Kokomo',
    state: 'Indiana',
    stateInitials: 'IN',
  },
  'Coconut Creek': {
    name: 'Coconut Creek',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Bowie: {
    name: 'Bowie',
    state: 'Maryland',
    stateInitials: 'MD',
  },
  Berwyn: {
    name: 'Berwyn',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  'Midwest City': {
    name: 'Midwest City',
    state: 'Oklahoma',
    stateInitials: 'OK',
  },
  'Fountain Valley': {
    name: 'Fountain Valley',
    state: 'California',
    stateInitials: 'CA',
  },
  Buckeye: {
    name: 'Buckeye',
    state: 'Arizona',
    stateInitials: 'AZ',
  },
  'Dearborn Heights': {
    name: 'Dearborn Heights',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  Woodland: {
    name: 'Woodland',
    state: 'California',
    stateInitials: 'CA',
  },
  Noblesville: {
    name: 'Noblesville',
    state: 'Indiana',
    stateInitials: 'IN',
  },
  Valdosta: {
    name: 'Valdosta',
    state: 'Georgia',
    stateInitials: 'GA',
  },
  'Diamond Bar': {
    name: 'Diamond Bar',
    state: 'California',
    stateInitials: 'CA',
  },
  Manhattan: {
    name: 'Manhattan',
    state: 'Kansas',
    stateInitials: 'KS',
  },
  Santee: {
    name: 'Santee',
    state: 'California',
    stateInitials: 'CA',
  },
  Taunton: {
    name: 'Taunton',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  Sanford: {
    name: 'Sanford',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Kettering: {
    name: 'Kettering',
    state: 'Ohio',
    stateInitials: 'OH',
  },
  'New Brunswick': {
    name: 'New Brunswick',
    state: 'New Jersey',
    stateInitials: 'NJ',
  },
  Chicopee: {
    name: 'Chicopee',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  Anderson: {
    name: 'Anderson',
    state: 'Indiana',
    stateInitials: 'IN',
  },
  Margate: {
    name: 'Margate',
    state: 'Florida',
    stateInitials: 'FL',
  },
  'Weymouth Town': {
    name: 'Weymouth Town',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  Hempstead: {
    name: 'Hempstead',
    state: 'New York',
    stateInitials: 'NY',
  },
  Corvallis: {
    name: 'Corvallis',
    state: 'Oregon',
    stateInitials: 'OR',
  },
  Eastvale: {
    name: 'Eastvale',
    state: 'California',
    stateInitials: 'CA',
  },
  Porterville: {
    name: 'Porterville',
    state: 'California',
    stateInitials: 'CA',
  },
  'West Haven': {
    name: 'West Haven',
    state: 'Connecticut',
    stateInitials: 'CT',
  },
  Brentwood: {
    name: 'Brentwood',
    state: 'Tennessee',
    stateInitials: 'TN',
  },
  Paramount: {
    name: 'Paramount',
    state: 'California',
    stateInitials: 'CA',
  },
  'Grand Forks': {
    name: 'Grand Forks',
    state: 'North Dakota',
    stateInitials: 'ND',
  },
  Georgetown: {
    name: 'Georgetown',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'St. Peters': {
    name: 'St. Peters',
    state: 'Missouri',
    stateInitials: 'MO',
  },
  Shoreline: {
    name: 'Shoreline',
    state: 'Washington, D.C.',
    stateInitials: 'WA',
  },
  'Mount Prospect': {
    name: 'Mount Prospect',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Hanford: {
    name: 'Hanford',
    state: 'California',
    stateInitials: 'CA',
  },
  Normal: {
    name: 'Normal',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Rosemead: {
    name: 'Rosemead',
    state: 'California',
    stateInitials: 'CA',
  },
  Lehi: {
    name: 'Lehi',
    state: 'Utah',
    stateInitials: 'UT',
  },
  Pocatello: {
    name: 'Pocatello',
    state: 'Idaho',
    stateInitials: 'ID',
  },
  Highland: {
    name: 'Highland',
    state: 'California',
    stateInitials: 'CA',
  },
  Novato: {
    name: 'Novato',
    state: 'California',
    stateInitials: 'CA',
  },
  'Port Arthur': {
    name: 'Port Arthur',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'Carson City': {
    name: 'Carson City',
    state: 'Nevada',
    stateInitials: 'NV',
  },
  Hendersonville: {
    name: 'Hendersonville',
    state: 'Tennessee',
    stateInitials: 'TN',
  },
  Elyria: {
    name: 'Elyria',
    state: 'Ohio',
    stateInitials: 'OH',
  },
  Revere: {
    name: 'Revere',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  Pflugerville: {
    name: 'Pflugerville',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Greenwood: {
    name: 'Greenwood',
    state: 'Indiana',
    stateInitials: 'IN',
  },
  Wheaton: {
    name: 'Wheaton',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Smyrna: {
    name: 'Smyrna',
    state: 'Tennessee',
    stateInitials: 'TN',
  },
  Sarasota: {
    name: 'Sarasota',
    state: 'Florida',
    stateInitials: 'FL',
  },
  'Blue Springs': {
    name: 'Blue Springs',
    state: 'Missouri',
    stateInitials: 'MO',
  },
  Colton: {
    name: 'Colton',
    state: 'California',
    stateInitials: 'CA',
  },
  Euless: {
    name: 'Euless',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'Castle Rock': {
    name: 'Castle Rock',
    state: 'Colorado',
    stateInitials: 'CO',
  },
  'Cathedral City': {
    name: 'Cathedral City',
    state: 'California',
    stateInitials: 'CA',
  },
  Kingsport: {
    name: 'Kingsport',
    state: 'Tennessee',
    stateInitials: 'TN',
  },
  'Lake Havasu City': {
    name: 'Lake Havasu City',
    state: 'Arizona',
    stateInitials: 'AZ',
  },
  Pensacola: {
    name: 'Pensacola',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Hoboken: {
    name: 'Hoboken',
    state: 'New Jersey',
    stateInitials: 'NJ',
  },
  Yucaipa: {
    name: 'Yucaipa',
    state: 'California',
    stateInitials: 'CA',
  },
  Watsonville: {
    name: 'Watsonville',
    state: 'California',
    stateInitials: 'CA',
  },
  Richland: {
    name: 'Richland',
    state: 'Washington, D.C.',
    stateInitials: 'WA',
  },
  Delano: {
    name: 'Delano',
    state: 'California',
    stateInitials: 'CA',
  },
  'Hoffman Estates': {
    name: 'Hoffman Estates',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Florissant: {
    name: 'Florissant',
    state: 'Missouri',
    stateInitials: 'MO',
  },
  Placentia: {
    name: 'Placentia',
    state: 'California',
    stateInitials: 'CA',
  },
  'West New York': {
    name: 'West New York',
    state: 'New Jersey',
    stateInitials: 'NJ',
  },
  Dublin: {
    name: 'Dublin',
    state: 'Ohio',
    stateInitials: 'OH',
  },
  'Oak Park': {
    name: 'Oak Park',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Peabody: {
    name: 'Peabody',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  'Perth Amboy': {
    name: 'Perth Amboy',
    state: 'New Jersey',
    stateInitials: 'NJ',
  },
  'Battle Creek': {
    name: 'Battle Creek',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  Bradenton: {
    name: 'Bradenton',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Gilroy: {
    name: 'Gilroy',
    state: 'California',
    stateInitials: 'CA',
  },
  Milford: {
    name: 'Milford',
    state: 'Connecticut',
    stateInitials: 'CT',
  },
  Ankeny: {
    name: 'Ankeny',
    state: 'Iowa',
    stateInitials: 'IA',
  },
  'La Crosse': {
    name: 'La Crosse',
    state: 'Wisconsin',
    stateInitials: 'WI',
  },
  Burlington: {
    name: 'Burlington',
    state: 'Vermont',
    stateInitials: 'VT',
  },
  DeSoto: {
    name: 'DeSoto',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Harrisonburg: {
    name: 'Harrisonburg',
    state: 'Virginia',
    stateInitials: 'VA',
  },
  Minnetonka: {
    name: 'Minnetonka',
    state: 'Minnesota',
    stateInitials: 'MN',
  },
  Elkhart: {
    name: 'Elkhart',
    state: 'Indiana',
    stateInitials: 'IN',
  },
  Glendora: {
    name: 'Glendora',
    state: 'California',
    stateInitials: 'CA',
  },
  Southaven: {
    name: 'Southaven',
    state: 'Mississippi',
    stateInitials: 'MS',
  },
  Joplin: {
    name: 'Joplin',
    state: 'Missouri',
    stateInitials: 'MO',
  },
  Enid: {
    name: 'Enid',
    state: 'Oklahoma',
    stateInitials: 'OK',
  },
  'Palm Beach Gardens': {
    name: 'Palm Beach Gardens',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Brookhaven: {
    name: 'Brookhaven',
    state: 'Georgia',
    stateInitials: 'GA',
  },
  Plainfield: {
    name: 'Plainfield',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  'Grand Island': {
    name: 'Grand Island',
    state: 'Nebraska',
    stateInitials: 'NE',
  },
  'Palm Desert': {
    name: 'Palm Desert',
    state: 'California',
    stateInitials: 'CA',
  },
  Huntersville: {
    name: 'Huntersville',
    state: 'North Carolina',
    stateInitials: 'NC',
  },
  Tigard: {
    name: 'Tigard',
    state: 'Oregon',
    stateInitials: 'OR',
  },
  Lenexa: {
    name: 'Lenexa',
    state: 'Kansas',
    stateInitials: 'KS',
  },
  Saginaw: {
    name: 'Saginaw',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  Kentwood: {
    name: 'Kentwood',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  Doral: {
    name: 'Doral',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Grapevine: {
    name: 'Grapevine',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'Aliso Viejo': {
    name: 'Aliso Viejo',
    state: 'California',
    stateInitials: 'CA',
  },
  Sammamish: {
    name: 'Sammamish',
    state: 'Washington, D.C.',
    stateInitials: 'WA',
  },
  'Casa Grande': {
    name: 'Casa Grande',
    state: 'Arizona',
    stateInitials: 'AZ',
  },
  'Pinellas Park': {
    name: 'Pinellas Park',
    state: 'Florida',
    stateInitials: 'FL',
  },
  'West Sacramento': {
    name: 'West Sacramento',
    state: 'California',
    stateInitials: 'CA',
  },
  Burien: {
    name: 'Burien',
    state: 'Washington, D.C.',
    stateInitials: 'WA',
  },
  'Commerce City': {
    name: 'Commerce City',
    state: 'Colorado',
    stateInitials: 'CO',
  },
  Monroe: {
    name: 'Monroe',
    state: 'Louisiana',
    stateInitials: 'LA',
  },
  Cerritos: {
    name: 'Cerritos',
    state: 'California',
    stateInitials: 'CA',
  },
  'Downers Grove': {
    name: 'Downers Grove',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  'Coral Gables': {
    name: 'Coral Gables',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Wilson: {
    name: 'Wilson',
    state: 'North Carolina',
    stateInitials: 'NC',
  },
  'Niagara Falls': {
    name: 'Niagara Falls',
    state: 'New York',
    stateInitials: 'NY',
  },
  Poway: {
    name: 'Poway',
    state: 'California',
    stateInitials: 'CA',
  },
  Edina: {
    name: 'Edina',
    state: 'Minnesota',
    stateInitials: 'MN',
  },
  'Cuyahoga Falls': {
    name: 'Cuyahoga Falls',
    state: 'Ohio',
    stateInitials: 'OH',
  },
  'Rancho Santa Margarita': {
    name: 'Rancho Santa Margarita',
    state: 'California',
    stateInitials: 'CA',
  },
  Harrisburg: {
    name: 'Harrisburg',
    state: 'Pennsylvania',
    stateInitials: 'AK',
  },
  Huntington: {
    name: 'Huntington',
    state: 'West Virginia',
    stateInitials: 'WV',
  },
  'La Mirada': {
    name: 'La Mirada',
    state: 'California',
    stateInitials: 'CA',
  },
  Cypress: {
    name: 'Cypress',
    state: 'California',
    stateInitials: 'CA',
  },
  Caldwell: {
    name: 'Caldwell',
    state: 'Idaho',
    stateInitials: 'ID',
  },
  Logan: {
    name: 'Logan',
    state: 'Utah',
    stateInitials: 'UT',
  },
  Galveston: {
    name: 'Galveston',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Sheboygan: {
    name: 'Sheboygan',
    state: 'Wisconsin',
    stateInitials: 'WI',
  },
  Middletown: {
    name: 'Middletown',
    state: 'Connecticut',
    stateInitials: 'CT',
  },
  Murray: {
    name: 'Murray',
    state: 'Utah',
    stateInitials: 'UT',
  },
  Parker: {
    name: 'Parker',
    state: 'Colorado',
    stateInitials: 'CO',
  },
  Bedford: {
    name: 'Bedford',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'East Lansing': {
    name: 'East Lansing',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  Methuen: {
    name: 'Methuen',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  Covina: {
    name: 'Covina',
    state: 'California',
    stateInitials: 'CA',
  },
  Olympia: {
    name: 'Olympia',
    state: 'Washington, D.C.',
    stateInitials: 'WA',
  },
  Euclid: {
    name: 'Euclid',
    state: 'Ohio',
    stateInitials: 'OH',
  },
  Mishawaka: {
    name: 'Mishawaka',
    state: 'Indiana',
    stateInitials: 'IN',
  },
  Salina: {
    name: 'Salina',
    state: 'Kansas',
    stateInitials: 'KS',
  },
  Azusa: {
    name: 'Azusa',
    state: 'California',
    stateInitials: 'CA',
  },
  Chesterfield: {
    name: 'Chesterfield',
    state: 'Missouri',
    stateInitials: 'MO',
  },
  Leesburg: {
    name: 'Leesburg',
    state: 'Virginia',
    stateInitials: 'VA',
  },
  Dunwoody: {
    name: 'Dunwoody',
    state: 'Georgia',
    stateInitials: 'GA',
  },
  Hattiesburg: {
    name: 'Hattiesburg',
    state: 'Mississippi',
    stateInitials: 'MS',
  },
  'Bonita Springs': {
    name: 'Bonita Springs',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Portage: {
    name: 'Portage',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  'St. Louis Park': {
    name: 'St. Louis Park',
    state: 'Minnesota',
    stateInitials: 'MN',
  },
  Collierville: {
    name: 'Collierville',
    state: 'Tennessee',
    stateInitials: 'TN',
  },
  Stillwater: {
    name: 'Stillwater',
    state: 'Oklahoma',
    stateInitials: 'OK',
  },
  'East Providence': {
    name: 'East Providence',
    state: 'Rhode Island',
    stateInitials: 'AK',
  },
  Wauwatosa: {
    name: 'Wauwatosa',
    state: 'Wisconsin',
    stateInitials: 'WI',
  },
  Mentor: {
    name: 'Mentor',
    state: 'Ohio',
    stateInitials: 'OH',
  },
  Ceres: {
    name: 'Ceres',
    state: 'California',
    stateInitials: 'CA',
  },
  'Cedar Hill': {
    name: 'Cedar Hill',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Binghamton: {
    name: 'Binghamton',
    state: 'New York',
    stateInitials: 'NY',
  },
  "Coeur d'Alene": {
    name: "Coeur d'Alene",
    state: 'Idaho',
    stateInitials: 'ID',
  },
  'San Luis Obispo': {
    name: 'San Luis Obispo',
    state: 'California',
    stateInitials: 'CA',
  },
  Minot: {
    name: 'Minot',
    state: 'North Dakota',
    stateInitials: 'ND',
  },
  'Palm Springs': {
    name: 'Palm Springs',
    state: 'California',
    stateInitials: 'CA',
  },
  'Pine Bluff': {
    name: 'Pine Bluff',
    state: 'Arkansas',
    stateInitials: 'AR',
  },
  'Texas City': {
    name: 'Texas City',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Summerville: {
    name: 'Summerville',
    state: 'South Carolina',
    stateInitials: 'SC',
  },
  'Twin Falls': {
    name: 'Twin Falls',
    state: 'Idaho',
    stateInitials: 'ID',
  },
  Jeffersonville: {
    name: 'Jeffersonville',
    state: 'Indiana',
    stateInitials: 'IN',
  },
  'San Jacinto': {
    name: 'San Jacinto',
    state: 'California',
    stateInitials: 'CA',
  },
  Altoona: {
    name: 'Altoona',
    state: 'Pennsylvania',
    stateInitials: 'AK',
  },
  Beavercreek: {
    name: 'Beavercreek',
    state: 'Ohio',
    stateInitials: 'OH',
  },
  Apopka: {
    name: 'Apopka',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Elmhurst: {
    name: 'Elmhurst',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Maricopa: {
    name: 'Maricopa',
    state: 'Arizona',
    stateInitials: 'AZ',
  },
  Farmington: {
    name: 'Farmington',
    state: 'New Mexico',
    stateInitials: 'NM',
  },
  Glenview: {
    name: 'Glenview',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  'Cleveland Heights': {
    name: 'Cleveland Heights',
    state: 'Ohio',
    stateInitials: 'OH',
  },
  Draper: {
    name: 'Draper',
    state: 'Utah',
    stateInitials: 'UT',
  },
  'Sierra Vista': {
    name: 'Sierra Vista',
    state: 'Arizona',
    stateInitials: 'AZ',
  },
  Lacey: {
    name: 'Lacey',
    state: 'Washington, D.C.',
    stateInitials: 'WA',
  },
  Biloxi: {
    name: 'Biloxi',
    state: 'Mississippi',
    stateInitials: 'MS',
  },
  Strongsville: {
    name: 'Strongsville',
    state: 'Ohio',
    stateInitials: 'OH',
  },
  'Barnstable Town': {
    name: 'Barnstable Town',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  Wylie: {
    name: 'Wylie',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Sayreville: {
    name: 'Sayreville',
    state: 'New Jersey',
    stateInitials: 'NJ',
  },
  Kannapolis: {
    name: 'Kannapolis',
    state: 'North Carolina',
    stateInitials: 'NC',
  },
  Charlottesville: {
    name: 'Charlottesville',
    state: 'Virginia',
    stateInitials: 'VA',
  },
  Littleton: {
    name: 'Littleton',
    state: 'Colorado',
    stateInitials: 'CO',
  },
  Titusville: {
    name: 'Titusville',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Hackensack: {
    name: 'Hackensack',
    state: 'New Jersey',
    stateInitials: 'NJ',
  },
  Pittsfield: {
    name: 'Pittsfield',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  York: {
    name: 'York',
    state: 'Pennsylvania',
    stateInitials: 'AK',
  },
  Lombard: {
    name: 'Lombard',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Attleboro: {
    name: 'Attleboro',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  DeKalb: {
    name: 'DeKalb',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Blacksburg: {
    name: 'Blacksburg',
    state: 'Virginia',
    stateInitials: 'VA',
  },
  'Haltom City': {
    name: 'Haltom City',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Lompoc: {
    name: 'Lompoc',
    state: 'California',
    stateInitials: 'CA',
  },
  'El Centro': {
    name: 'El Centro',
    state: 'California',
    stateInitials: 'CA',
  },
  Danville: {
    name: 'Danville',
    state: 'Virginia',
    stateInitials: 'VA',
  },
  'Jefferson City': {
    name: 'Jefferson City',
    state: 'Missouri',
    stateInitials: 'MO',
  },
  'Cutler Bay': {
    name: 'Cutler Bay',
    state: 'Florida',
    stateInitials: 'FL',
  },
  'Oakland Park': {
    name: 'Oakland Park',
    state: 'Florida',
    stateInitials: 'FL',
  },
  'North Miami Beach': {
    name: 'North Miami Beach',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Freeport: {
    name: 'Freeport',
    state: 'New York',
    stateInitials: 'NY',
  },
  Moline: {
    name: 'Moline',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Coachella: {
    name: 'Coachella',
    state: 'California',
    stateInitials: 'CA',
  },
  'Fort Pierce': {
    name: 'Fort Pierce',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Bountiful: {
    name: 'Bountiful',
    state: 'Utah',
    stateInitials: 'UT',
  },
  'Fond du Lac': {
    name: 'Fond du Lac',
    state: 'Wisconsin',
    stateInitials: 'WI',
  },
  Keller: {
    name: 'Keller',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Belleville: {
    name: 'Belleville',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  'Bell Gardens': {
    name: 'Bell Gardens',
    state: 'California',
    stateInitials: 'CA',
  },
  'North Lauderdale': {
    name: 'North Lauderdale',
    state: 'Florida',
    stateInitials: 'FL',
  },
  'Rancho Palos Verdes': {
    name: 'Rancho Palos Verdes',
    state: 'California',
    stateInitials: 'CA',
  },
  'San Bruno': {
    name: 'San Bruno',
    state: 'California',
    stateInitials: 'CA',
  },
  Apex: {
    name: 'Apex',
    state: 'North Carolina',
    stateInitials: 'NC',
  },
  'Altamonte Springs': {
    name: 'Altamonte Springs',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Hutchinson: {
    name: 'Hutchinson',
    state: 'Kansas',
    stateInitials: 'KS',
  },
  'Buffalo Grove': {
    name: 'Buffalo Grove',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Urbandale: {
    name: 'Urbandale',
    state: 'Iowa',
    stateInitials: 'IA',
  },
  'State College': {
    name: 'State College',
    state: 'Pennsylvania',
    stateInitials: 'AK',
  },
  Urbana: {
    name: 'Urbana',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Manassas: {
    name: 'Manassas',
    state: 'Virginia',
    stateInitials: 'VA',
  },
  Kearny: {
    name: 'Kearny',
    state: 'New Jersey',
    stateInitials: 'NJ',
  },
  'Oro Valley': {
    name: 'Oro Valley',
    state: 'Arizona',
    stateInitials: 'AZ',
  },
  Findlay: {
    name: 'Findlay',
    state: 'Ohio',
    stateInitials: 'OH',
  },
  'Rohnert Park': {
    name: 'Rohnert Park',
    state: 'California',
    stateInitials: 'CA',
  },
  Westfield: {
    name: 'Westfield',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  Linden: {
    name: 'Linden',
    state: 'New Jersey',
    stateInitials: 'NJ',
  },
  Sumter: {
    name: 'Sumter',
    state: 'South Carolina',
    stateInitials: 'SC',
  },
  'Wilkes-Barre': {
    name: 'Wilkes-Barre',
    state: 'Pennsylvania',
    stateInitials: 'AK',
  },
  Woonsocket: {
    name: 'Woonsocket',
    state: 'Rhode Island',
    stateInitials: 'AK',
  },
  Leominster: {
    name: 'Leominster',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  Shelton: {
    name: 'Shelton',
    state: 'Connecticut',
    stateInitials: 'CT',
  },
  Brea: {
    name: 'Brea',
    state: 'California',
    stateInitials: 'CA',
  },
  Covington: {
    name: 'Covington',
    state: 'Kentucky',
    stateInitials: 'KY',
  },
  Rockwall: {
    name: 'Rockwall',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Riverton: {
    name: 'Riverton',
    state: 'Utah',
    stateInitials: 'UT',
  },
  'Morgan Hill': {
    name: 'Morgan Hill',
    state: 'California',
    stateInitials: 'CA',
  },
  Edmonds: {
    name: 'Edmonds',
    state: 'Washington, D.C.',
    stateInitials: 'WA',
  },
  Burleson: {
    name: 'Burleson',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Beverly: {
    name: 'Beverly',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  Mankato: {
    name: 'Mankato',
    state: 'Minnesota',
    stateInitials: 'MN',
  },
  Hagerstown: {
    name: 'Hagerstown',
    state: 'Maryland',
    stateInitials: 'MD',
  },
  Prescott: {
    name: 'Prescott',
    state: 'Arizona',
    stateInitials: 'AZ',
  },
  Campbell: {
    name: 'Campbell',
    state: 'California',
    stateInitials: 'CA',
  },
  'Cedar Falls': {
    name: 'Cedar Falls',
    state: 'Iowa',
    stateInitials: 'IA',
  },
  'La Puente': {
    name: 'La Puente',
    state: 'California',
    stateInitials: 'CA',
  },
  'Crystal Lake': {
    name: 'Crystal Lake',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Fitchburg: {
    name: 'Fitchburg',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  'Carol Stream': {
    name: 'Carol Stream',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Hickory: {
    name: 'Hickory',
    state: 'North Carolina',
    stateInitials: 'NC',
  },
  Streamwood: {
    name: 'Streamwood',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Norwich: {
    name: 'Norwich',
    state: 'Connecticut',
    stateInitials: 'CT',
  },
  Coppell: {
    name: 'Coppell',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'San Gabriel': {
    name: 'San Gabriel',
    state: 'California',
    stateInitials: 'CA',
  },
  Holyoke: {
    name: 'Holyoke',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  Bentonville: {
    name: 'Bentonville',
    state: 'Arkansas',
    stateInitials: 'AR',
  },
  Florence: {
    name: 'Florence',
    state: 'South Carolina',
    stateInitials: 'SC',
  },
  'Peachtree Corners': {
    name: 'Peachtree Corners',
    state: 'Georgia',
    stateInitials: 'GA',
  },
  Bozeman: {
    name: 'Bozeman',
    state: 'Montana',
    stateInitials: 'MT',
  },
  'New Berlin': {
    name: 'New Berlin',
    state: 'Wisconsin',
    stateInitials: 'WI',
  },
  'Goose Creek': {
    name: 'Goose Creek',
    state: 'South Carolina',
    stateInitials: 'SC',
  },
  'Prescott Valley': {
    name: 'Prescott Valley',
    state: 'Arizona',
    stateInitials: 'AZ',
  },
  Maplewood: {
    name: 'Maplewood',
    state: 'Minnesota',
    stateInitials: 'MN',
  },
  Romeoville: {
    name: 'Romeoville',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Duncanville: {
    name: 'Duncanville',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'Atlantic City': {
    name: 'Atlantic City',
    state: 'New Jersey',
    stateInitials: 'NJ',
  },
  'The Colony': {
    name: 'The Colony',
    state: 'Texas',
    stateInitials: 'TX',
  },
  'Culver City': {
    name: 'Culver City',
    state: 'California',
    stateInitials: 'CA',
  },
  Marlborough: {
    name: 'Marlborough',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  'Hilton Head Island': {
    name: 'Hilton Head Island',
    state: 'South Carolina',
    stateInitials: 'SC',
  },
  Moorhead: {
    name: 'Moorhead',
    state: 'Minnesota',
    stateInitials: 'MN',
  },
  Calexico: {
    name: 'Calexico',
    state: 'California',
    stateInitials: 'CA',
  },
  'Bullhead City': {
    name: 'Bullhead City',
    state: 'Arizona',
    stateInitials: 'AZ',
  },
  Germantown: {
    name: 'Germantown',
    state: 'Tennessee',
    stateInitials: 'TN',
  },
  'La Quinta': {
    name: 'La Quinta',
    state: 'California',
    stateInitials: 'CA',
  },
  Wausau: {
    name: 'Wausau',
    state: 'Wisconsin',
    stateInitials: 'WI',
  },
  Sherman: {
    name: 'Sherman',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Ocoee: {
    name: 'Ocoee',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Shakopee: {
    name: 'Shakopee',
    state: 'Minnesota',
    stateInitials: 'MN',
  },
  Woburn: {
    name: 'Woburn',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  Bremerton: {
    name: 'Bremerton',
    state: 'Washington, D.C.',
    stateInitials: 'WA',
  },
  'Rock Island': {
    name: 'Rock Island',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Muskogee: {
    name: 'Muskogee',
    state: 'Oklahoma',
    stateInitials: 'OK',
  },
  'Cape Girardeau': {
    name: 'Cape Girardeau',
    state: 'Missouri',
    stateInitials: 'MO',
  },
  Annapolis: {
    name: 'Annapolis',
    state: 'Maryland',
    stateInitials: 'MD',
  },
  Greenacres: {
    name: 'Greenacres',
    state: 'Florida',
    stateInitials: 'FL',
  },
  'Ormond Beach': {
    name: 'Ormond Beach',
    state: 'Florida',
    stateInitials: 'FL',
  },
  'Hallandale Beach': {
    name: 'Hallandale Beach',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Stanton: {
    name: 'Stanton',
    state: 'California',
    stateInitials: 'CA',
  },
  Puyallup: {
    name: 'Puyallup',
    state: 'Washington, D.C.',
    stateInitials: 'WA',
  },
  Pacifica: {
    name: 'Pacifica',
    state: 'California',
    stateInitials: 'CA',
  },
  'Hanover Park': {
    name: 'Hanover Park',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Hurst: {
    name: 'Hurst',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Lima: {
    name: 'Lima',
    state: 'Ohio',
    stateInitials: 'OH',
  },
  Marana: {
    name: 'Marana',
    state: 'Arizona',
    stateInitials: 'AZ',
  },
  Carpentersville: {
    name: 'Carpentersville',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Oakley: {
    name: 'Oakley',
    state: 'California',
    stateInitials: 'CA',
  },
  'Huber Heights': {
    name: 'Huber Heights',
    state: 'Ohio',
    stateInitials: 'OH',
  },
  Montclair: {
    name: 'Montclair',
    state: 'California',
    stateInitials: 'CA',
  },
  Wheeling: {
    name: 'Wheeling',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Brookfield: {
    name: 'Brookfield',
    state: 'Wisconsin',
    stateInitials: 'WI',
  },
  'Park Ridge': {
    name: 'Park Ridge',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Roy: {
    name: 'Roy',
    state: 'Utah',
    stateInitials: 'UT',
  },
  'Winter Garden': {
    name: 'Winter Garden',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Chelsea: {
    name: 'Chelsea',
    state: 'Massachusetts',
    stateInitials: 'MA',
  },
  'Valley Stream': {
    name: 'Valley Stream',
    state: 'New York',
    stateInitials: 'NY',
  },
  Spartanburg: {
    name: 'Spartanburg',
    state: 'South Carolina',
    stateInitials: 'SC',
  },
  'Lake Oswego': {
    name: 'Lake Oswego',
    state: 'Oregon',
    stateInitials: 'OR',
  },
  Friendswood: {
    name: 'Friendswood',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Westerville: {
    name: 'Westerville',
    state: 'Ohio',
    stateInitials: 'OH',
  },
  Northglenn: {
    name: 'Northglenn',
    state: 'Colorado',
    stateInitials: 'CO',
  },
  'Phenix City': {
    name: 'Phenix City',
    state: 'Alabama',
    stateInitials: 'AL',
  },
  'Grove City': {
    name: 'Grove City',
    state: 'Ohio',
    stateInitials: 'OH',
  },
  Texarkana: {
    name: 'Texarkana',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Addison: {
    name: 'Addison',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Dover: {
    name: 'Dover',
    state: 'Delaware',
    stateInitials: 'DE',
  },
  'Lincoln Park': {
    name: 'Lincoln Park',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  'Calumet City': {
    name: 'Calumet City',
    state: 'Illinois',
    stateInitials: 'IL',
  },
  Muskegon: {
    name: 'Muskegon',
    state: 'Michigan',
    stateInitials: 'MI',
  },
  Aventura: {
    name: 'Aventura',
    state: 'Florida',
    stateInitials: 'FL',
  },
  Martinez: {
    name: 'Martinez',
    state: 'California',
    stateInitials: 'CA',
  },
  Greenfield: {
    name: 'Greenfield',
    state: 'Wisconsin',
    stateInitials: 'WI',
  },
  'Apache Junction': {
    name: 'Apache Junction',
    state: 'Arizona',
    stateInitials: 'AZ',
  },
  Monrovia: {
    name: 'Monrovia',
    state: 'California',
    stateInitials: 'CA',
  },
  Weslaco: {
    name: 'Weslaco',
    state: 'Texas',
    stateInitials: 'TX',
  },
  Keizer: {
    name: 'Keizer',
    state: 'Oregon',
    stateInitials: 'OR',
  },
  'Spanish Fork': {
    name: 'Spanish Fork',
    state: 'Utah',
    stateInitials: 'UT',
  },
  Beloit: {
    name: 'Beloit',
    state: 'Wisconsin',
    stateInitials: 'WI',
  },
  'Panama City': {
    name: 'Panama City',
    state: 'Florida',
    stateInitials: 'FL',
  },
};

export default CITIES;
