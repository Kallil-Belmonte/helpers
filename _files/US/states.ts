type State = {
  name: string;
  region: string;
  initials: string;
};

type States = {
  [key: string]: State;
};

const STATES: States = {
  Alabama: {
    name: 'Alabama',
    region: 'South',
    initials: 'AL',
  },
  Alaska: {
    name: 'Alaska',
    region: 'West',
    initials: 'AK',
  },
  Arizona: {
    name: 'Arizona',
    region: 'West',
    initials: 'AZ',
  },
  Arkansas: {
    name: 'Arkansas',
    region: 'South',
    initials: 'AR',
  },
  California: {
    name: 'California',
    region: 'West',
    initials: 'CA',
  },
  Colorado: {
    name: 'Colorado',
    region: 'West',
    initials: 'CO',
  },
  Connecticut: {
    name: 'Connecticut',
    region: 'Northeast',
    initials: 'CT',
  },
  Delaware: {
    name: 'Delaware',
    region: 'South',
    initials: 'DE',
  },
  Florida: {
    name: 'Florida',
    region: 'South',
    initials: 'FL',
  },
  Georgia: {
    name: 'Georgia',
    region: 'South',
    initials: 'GA',
  },
  Hawaii: {
    name: 'Hawaii',
    region: 'West',
    initials: 'HI',
  },
  Idaho: {
    name: 'Idaho',
    region: 'West',
    initials: 'ID',
  },
  Illinois: {
    name: 'Illinois',
    region: 'Midwest',
    initials: 'IL',
  },
  Indiana: {
    name: 'Indiana',
    region: 'Midwest',
    initials: 'IN',
  },
  Iowa: {
    name: 'Iowa',
    region: 'Midwest',
    initials: 'IA',
  },
  Kansas: {
    name: 'Kansas',
    region: 'Midwest',
    initials: 'KS',
  },
  Kentucky: {
    name: 'Kentucky',
    region: 'South',
    initials: 'KY',
  },
  Louisiana: {
    name: 'Louisiana',
    region: 'South',
    initials: 'LA',
  },
  Maine: {
    name: 'Maine',
    region: 'Northeast',
    initials: 'ME',
  },
  Maryland: {
    name: 'Maryland',
    region: 'South',
    initials: 'MD',
  },
  Massachusetts: {
    name: 'Massachusetts',
    region: 'Northeast',
    initials: 'MA',
  },
  Michigan: {
    name: 'Michigan',
    region: 'Midwest',
    initials: 'MI',
  },
  Minnesota: {
    name: 'Minnesota',
    region: 'Midwest',
    initials: 'MN',
  },
  Mississippi: {
    name: 'Mississippi',
    region: 'South',
    initials: 'MS',
  },
  Missouri: {
    name: 'Missouri',
    region: 'Midwest',
    initials: 'MO',
  },
  Montana: {
    name: 'Montana',
    region: 'West',
    initials: 'MT',
  },
  Nebraska: {
    name: 'Nebraska',
    region: 'Midwest',
    initials: 'NE',
  },
  Nevada: {
    name: 'Nevada',
    region: 'West',
    initials: 'NV',
  },
  'New Hampshire': {
    name: 'New Hampshire',
    region: 'Northeast',
    initials: 'NH',
  },
  'New Jersey': {
    name: 'New Jersey',
    region: 'Northeast',
    initials: 'NJ',
  },
  'New Mexico': {
    name: 'New Mexico',
    region: 'West',
    initials: 'NM',
  },
  'New York': {
    name: 'New York',
    region: 'Northeast',
    initials: 'NY',
  },
  'North Carolina': {
    name: 'North Carolina',
    region: 'South',
    initials: 'NC',
  },
  'North Dakota': {
    name: 'North Dakota',
    region: 'Midwest',
    initials: 'ND',
  },
  Ohio: {
    name: 'Ohio',
    region: 'Midwest',
    initials: 'OH',
  },
  Oklahoma: {
    name: 'Oklahoma',
    region: 'South',
    initials: 'OK',
  },
  Oregon: {
    name: 'Oregon',
    region: 'West',
    initials: 'OR',
  },
  Pennsylvania: {
    name: 'Pennsylvania',
    region: 'Northeast',
    initials: 'PA',
  },
  'Rhode Island': {
    name: 'Rhode Island',
    region: 'Northeast',
    initials: 'RI',
  },
  'South Carolina': {
    name: 'South Carolina',
    region: 'South',
    initials: 'SC',
  },
  'South Dakota': {
    name: 'South Dakota',
    region: 'Midwest',
    initials: 'SD',
  },
  Tennessee: {
    name: 'Tennessee',
    region: 'South',
    initials: 'TN',
  },
  Texas: {
    name: 'Texas',
    region: 'South',
    initials: 'TX',
  },
  Utah: {
    name: 'Utah',
    region: 'West',
    initials: 'UT',
  },
  Vermont: {
    name: 'Vermont',
    region: 'Northeast',
    initials: 'VT',
  },
  Virginia: {
    name: 'Virginia',
    region: 'South',
    initials: 'VA',
  },
  Washington: {
    name: 'Washington',
    region: 'West',
    initials: 'WA',
  },
  'West Virginia': {
    name: 'West Virginia',
    region: 'South',
    initials: 'WV',
  },
  Wisconsin: {
    name: 'Wisconsin',
    region: 'Midwest',
    initials: 'WI',
  },
  Wyoming: {
    name: 'Wyoming',
    region: 'West',
    initials: 'WY',
  },
  'District of Columbia': {
    name: 'District of Columbia',
    region: 'South',
    initials: 'DC',
  },
};

export default STATES;
