type State = {
  name: string;
  region: string;
  initials: string;
};

type StatesUS = {
  [key: string]: State;
};

const STATES_US: StatesUS = {
  Alabama: {
    name: 'Alabama',
    initials: 'AL',
    region: 'South',
  },
  Alaska: {
    name: 'Alaska',
    initials: 'AK',
    region: 'West',
  },
  Arizona: {
    name: 'Arizona',
    initials: 'AZ',
    region: 'West',
  },
  Arkansas: {
    name: 'Arkansas',
    initials: 'AR',
    region: 'South',
  },
  California: {
    name: 'California',
    initials: 'CA',
    region: 'West',
  },
  Colorado: {
    name: 'Colorado',
    initials: 'CO',
    region: 'West',
  },
  Connecticut: {
    name: 'Connecticut',
    initials: 'CT',
    region: 'Northeast',
  },
  Delaware: {
    name: 'Delaware',
    initials: 'DE',
    region: 'South',
  },
  Florida: {
    name: 'Florida',
    initials: 'FL',
    region: 'South',
  },
  Georgia: {
    name: 'Georgia',
    initials: 'GA',
    region: 'South',
  },
  Hawaii: {
    name: 'Hawaii',
    initials: 'HI',
    region: 'West',
  },
  Idaho: {
    name: 'Idaho',
    initials: 'ID',
    region: 'West',
  },
  Illinois: {
    name: 'Illinois',
    initials: 'IL',
    region: 'Midwest',
  },
  Indiana: {
    name: 'Indiana',
    initials: 'IN',
    region: 'Midwest',
  },
  Iowa: {
    name: 'Iowa',
    initials: 'IA',
    region: 'Midwest',
  },
  Kansas: {
    name: 'Kansas',
    initials: 'KS',
    region: 'Midwest',
  },
  Kentucky: {
    name: 'Kentucky',
    initials: 'KY',
    region: 'South',
  },
  Louisiana: {
    name: 'Louisiana',
    initials: 'LA',
    region: 'South',
  },
  Maine: {
    name: 'Maine',
    initials: 'ME',
    region: 'Northeast',
  },
  Maryland: {
    name: 'Maryland',
    initials: 'MD',
    region: 'South',
  },
  Massachusetts: {
    name: 'Massachusetts',
    initials: 'MA',
    region: 'Northeast',
  },
  Michigan: {
    name: 'Michigan',
    initials: 'MI',
    region: 'Midwest',
  },
  Minnesota: {
    name: 'Minnesota',
    initials: 'MN',
    region: 'Midwest',
  },
  Mississippi: {
    name: 'Mississippi',
    initials: 'MS',
    region: 'South',
  },
  Missouri: {
    name: 'Missouri',
    initials: 'MO',
    region: 'Midwest',
  },
  Montana: {
    name: 'Montana',
    initials: 'MT',
    region: 'West',
  },
  Nebraska: {
    name: 'Nebraska',
    initials: 'NE',
    region: 'Midwest',
  },
  Nevada: {
    name: 'Nevada',
    initials: 'NV',
    region: 'West',
  },
  'New Hampshire': {
    name: 'New Hampshire',
    initials: 'NH',
    region: 'Northeast',
  },
  'New Jersey': {
    name: 'New Jersey',
    initials: 'NJ',
    region: 'Northeast',
  },
  'New Mexico': {
    name: 'New Mexico',
    initials: 'NM',
    region: 'West',
  },
  'New York': {
    name: 'New York',
    initials: 'NY',
    region: 'Northeast',
  },
  'North Carolina': {
    name: 'North Carolina',
    initials: 'NC',
    region: 'South',
  },
  'North Dakota': {
    name: 'North Dakota',
    initials: 'ND',
    region: 'Midwest',
  },
  Ohio: {
    name: 'Ohio',
    initials: 'OH',
    region: 'Midwest',
  },
  Oklahoma: {
    name: 'Oklahoma',
    initials: 'OK',
    region: 'South',
  },
  Oregon: {
    name: 'Oregon',
    initials: 'OR',
    region: 'West',
  },
  Pennsylvania: {
    name: 'Pennsylvania',
    initials: 'AK',
    region: 'Northeast',
  },
  'Rhode Island': {
    name: 'Rhode Island',
    initials: 'AK',
    region: 'Northeast',
  },
  'South Carolina': {
    name: 'South Carolina',
    initials: 'SC',
    region: 'South',
  },
  'South Dakota': {
    name: 'South Dakota',
    initials: 'SD',
    region: 'Midwest',
  },
  Tennessee: {
    name: 'Tennessee',
    initials: 'TN',
    region: 'South',
  },
  Texas: {
    name: 'Texas',
    initials: 'TX',
    region: 'South',
  },
  Utah: {
    name: 'Utah',
    initials: 'UT',
    region: 'West',
  },
  Vermont: {
    name: 'Vermont',
    initials: 'VT',
    region: 'Northeast',
  },
  Virginia: {
    name: 'Virginia',
    initials: 'VA',
    region: 'South',
  },
  Washington: {
    name: 'Washington',
    initials: 'WA',
    region: 'West',
  },
  'West Virginia': {
    name: 'West Virginia',
    initials: 'WV',
    region: 'South',
  },
  Wisconsin: {
    name: 'Wisconsin',
    initials: 'WI',
    region: 'Midwest',
  },
  Wyoming: {
    name: 'Wyoming',
    initials: 'WY',
    region: 'West',
  },
};

export default STATES_US;
