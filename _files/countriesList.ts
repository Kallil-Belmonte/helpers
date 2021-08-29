// Código DDD: area code
// Código DDI: country code
// https://abbreviations.yourdictionary.com/articles/country-abbreviations.html
// http://manualdemarcas.inpi.gov.br/projects/manual-de-marcas-2-edicao-1-revisao/wiki/Siglas_de_pa%C3%ADses_e_organiza%C3%A7%C3%B5es
// https://www.itmnetworks.com.br/ddi-dos-paises-codigos-internacionais-de-telefone

type Country = {
  countryCode: string;
  initials: string;
  nameUS: string;
  nameBR: string;
  continentUS: string;
  continentBR: string;
};

type CountriesList = {
  [key: string]: Country;
};

const teste = {
  AD: { initials: 'AD', code: 'AND', nameUS: 'Andorra' },
  AI: { initials: 'AI', code: 'AIA', nameUS: 'Anguilla' },
  AL: { initials: 'AL', code: 'ALB', nameUS: 'Albania' },
  AM: { initials: 'AM', code: 'ARM', nameUS: 'Armenia' },
  AN: { initials: 'AN', code: 'ANT', nameUS: 'Netherlands Antilles' },
  AO: { initials: 'AO', code: 'AGO', nameUS: 'Angola' },
  AQ: { initials: 'AQ', code: 'ATA', nameUS: 'Antarctica' },
  AR: { initials: 'AR', code: 'ARG', nameUS: 'Argentina' },
  AS: { initials: 'AS', code: 'ASM', nameUS: 'American Samoa' },
  AT: { initials: 'AT', code: 'AUT', nameUS: 'Austria' },
  AU: { initials: 'AU', code: 'AUS', nameUS: 'Australia' },
  AW: { initials: 'AW', code: 'ABW', nameUS: 'Aruba' },
  AX: { initials: 'AX', code: 'ALA', nameUS: 'Aland Islands' },
  BA: { initials: 'BA', code: 'BIH', nameUS: 'Bosnia and Herzegovina' },
  BE: { initials: 'BE', code: 'BEL', nameUS: 'Belgium' },
  BF: { initials: 'BF', code: 'BFA', nameUS: 'Burkina Faso' },
  BG: { initials: 'BG', code: 'BGR', nameUS: 'Bulgaria, Republic of' },
  BI: { initials: 'BI', code: 'BDI', nameUS: 'Burundi' },
  BJ: { initials: 'BJ', code: 'BEN', nameUS: 'Benin' },
  BL: { initials: 'BL', code: 'BLM', nameUS: 'Saint Barthelemy' },
  BO: { initials: 'BO', code: 'BOL', nameUS: 'Bolivia' },
  BQ: { initials: 'BQ', code: 'BES', nameUS: 'Bonaire, Sint Eustatius and Saba' },
  BR: { initials: 'BR', code: 'BRA', nameUS: 'Brazil' },
  BV: { initials: 'BV', code: 'BVT', nameUS: 'Bouvet Island' },
  BW: { initials: 'BW', code: 'BWA', nameUS: 'Botswana' },
  BY: { initials: 'BY', code: 'BLR', nameUS: 'Belarus' },
  CA: { initials: 'CA', code: 'CAN', nameUS: 'Canada' },
  CD: { initials: 'CD', code: 'COD', nameUS: 'Congo, Democratic Republic of' },
  CF: { initials: 'CF', code: 'CAF', nameUS: 'Central African Republic' },
  CG: { initials: 'CG', code: 'COG', nameUS: 'Congo' },
  CH: { initials: 'CH', code: 'CHE', nameUS: 'Switzerland' },
  CI: { initials: 'CI', code: 'CIV', nameUS: "Côte d'Ivoire" },
  CK: { initials: 'CK', code: 'COK', nameUS: 'Cook Islands' },
  CL: { initials: 'CL', code: 'CHL', nameUS: 'Chile' },
  CM: { initials: 'CM', code: 'CMR', nameUS: 'Cameroon' },
  CO: { initials: 'CO', code: 'COL', nameUS: 'Colombia' },
  CU: { initials: 'CU', code: 'CUB', nameUS: 'Cuba' },
  CV: { initials: 'CV', code: 'CPV', nameUS: 'Cape Verde' },
  CW: { initials: 'CW', code: 'CUW', nameUS: 'Curaçao' },
  CZ: { initials: 'CZ', code: 'CZE', nameUS: 'Czech Republic (Czechia)' },
  DE: { initials: 'DE', code: 'DEU', nameUS: 'Germany' },
  DJ: { initials: 'DJ', code: 'DJI', nameUS: 'Djibouti' },
  DK: { initials: 'DK', code: 'DNK', nameUS: 'Denmark' },
  DM: { initials: 'DM', code: 'DMA', nameUS: 'Dominica' },
  DO: { initials: 'DO', code: 'DOM', nameUS: 'Dominican Republic' },
  DZ: { initials: 'DZ', code: 'DZA', nameUS: 'Algeria' },
  EC: { initials: 'EC', code: 'ECU', nameUS: 'Ecuador' },
  EE: { initials: 'EE', code: 'EST', nameUS: 'Estonia' },
  EG: { initials: 'EG', code: 'EGY', nameUS: 'Egypt' },
  EH: { initials: 'EH', code: 'ESH', nameUS: 'Western Sahara' },
  ER: { initials: 'ER', code: 'ERI', nameUS: 'Eritrea' },
  ES: { initials: 'ES', code: 'ESP', nameUS: 'Spain' },
  ET: { initials: 'ET', code: 'ETH', nameUS: 'Ethiopia' },
  FI: { initials: 'FI', code: 'FIN', nameUS: 'Finland' },
  FJ: { initials: 'FJ', code: 'FJI', nameUS: 'Fiji' },
  FK: { initials: 'FK', code: 'FLK', nameUS: 'Falkland Islands (Malvinas)' },
  FM: { initials: 'FM', code: 'FSM', nameUS: 'Micronesia' },
  FO: { initials: 'FO', code: 'FRO', nameUS: 'Faroe Islands' },
  FR: { initials: 'FR', code: 'FRA', nameUS: 'France' },
  GA: { initials: 'GA', code: 'GAB', nameUS: 'Gabon' },
  GB: { initials: 'GB', code: 'GBR', nameUS: 'United Kingdom' },
  GD: { initials: 'GD', code: 'GRD', nameUS: 'Grenada' },
  GF: { initials: 'GF', code: 'GUF', nameUS: 'French Guiana' },
  GG: { initials: 'GG', code: 'GGY', nameUS: 'Guernsey' },
  GH: { initials: 'GH', code: 'GHA', nameUS: 'Ghana' },
  GI: { initials: 'GI', code: 'GIB', nameUS: 'Gibraltar' },
  GL: { initials: 'GL', code: 'GRL', nameUS: 'Greenland' },
  GM: { initials: 'GM', code: 'GMB', nameUS: 'Gambia' },
  GN: { initials: 'GN', code: 'GIN', nameUS: 'Guinea' },
  GP: { initials: 'GP', code: 'GLP', nameUS: 'Guadeloupe' },
  GQ: { initials: 'GQ', code: 'GNQ', nameUS: 'Equatorial Guinea' },
  GR: { initials: 'GR', code: 'GRC', nameUS: 'Greece' },
  GS: { initials: 'GS', code: 'SGS', nameUS: 'South Georgia and the South Sandwich Islands' },
  GT: { initials: 'GT', code: 'GTM', nameUS: 'Guatemala' },
  GU: { initials: 'GU', code: 'GUM', nameUS: 'Guam' },
  GW: { initials: 'GW', code: 'GNB', nameUS: 'Guinea-Bissau' },
  GY: { initials: 'GY', code: 'GUY', nameUS: 'Guyana' },
  HM: { initials: 'HM', code: 'HMD', nameUS: 'Heard Island and McDonald Islands' },
  HN: { initials: 'HN', code: 'HND', nameUS: 'Honduras' },
  HR: { initials: 'HR', code: 'HRV', nameUS: 'Croatia' },
  HT: { initials: 'HT', code: 'HTI', nameUS: 'Haiti' },
  HU: { initials: 'HU', code: 'HUN', nameUS: 'Hungary' },
  IE: { initials: 'IE', code: 'IRL', nameUS: 'Ireland' },
  IM: { initials: 'IM', code: 'IMN', nameUS: 'Isle of Man' },
  IS: { initials: 'IS', code: 'ISL', nameUS: 'Iceland' },
  IT: { initials: 'IT', code: 'ITA', nameUS: 'Italy' },
  JE: { initials: 'JE', code: 'JEY', nameUS: 'Jersey' },
  JM: { initials: 'JM', code: 'JAM', nameUS: 'Jamaica' },
  KE: { initials: 'KE', code: 'KEN', nameUS: 'Kenya' },
  KI: { initials: 'KI', code: 'KIR', nameUS: 'Kiribati' },
  KM: { initials: 'KM', code: 'COM', nameUS: 'Comoros' },
  KN: { initials: 'KN', code: 'KNA', nameUS: 'Saint Kitts and Nevis' },
  LC: { initials: 'LC', code: 'LCA', nameUS: 'Saint Lucia' },
  LI: { initials: 'LI', code: 'LIE', nameUS: 'Liechtenstein' },
  LR: { initials: 'LR', code: 'LBR', nameUS: 'Liberia' },
  LS: { initials: 'LS', code: 'LSO', nameUS: 'Lesotho' },
  LT: { initials: 'LT', code: 'LTU', nameUS: 'Lithuania' },
  LU: { initials: 'LU', code: 'LUX', nameUS: 'Luxembourg' },
  LV: { initials: 'LV', code: 'LVA', nameUS: 'Latvia' },
  LY: { initials: 'LY', code: 'LBY', nameUS: 'Libyan Arab Jamahiriya' },
  MA: { initials: 'MA', code: 'MAR', nameUS: 'Morocco' },
  MC: { initials: 'MC', code: 'MCO', nameUS: 'Monaco' },
  MD: { initials: 'MD', code: 'MDA', nameUS: 'Moldova' },
  ME: { initials: 'ME', code: 'MNE', nameUS: 'Montenegro' },
  MF: { initials: 'MF', code: 'MAF', nameUS: 'Saint Martin' },
  MG: { initials: 'MG', code: 'MDG', nameUS: 'Madagascar' },
  MH: { initials: 'MH', code: 'MHL', nameUS: 'Marshall Islands' },
  MK: { initials: 'MK', code: 'MKD', nameUS: 'Republic of North Macedonia' },
  ML: { initials: 'ML', code: 'MLI', nameUS: 'Mali' },
  MP: { initials: 'MP', code: 'MNP', nameUS: 'Northern Mariana Islands' },
  MQ: { initials: 'MQ', code: 'MTQ', nameUS: 'Martinique' },
  MR: { initials: 'MR', code: 'MRT', nameUS: 'Mauritania' },
  MS: { initials: 'MS', code: 'MSR', nameUS: 'Montserrat' },
  MT: { initials: 'MT', code: 'MLT', nameUS: 'Malta' },
  MU: { initials: 'MU', code: 'MUS', nameUS: 'Mauritius' },
  MW: { initials: 'MW', code: 'MWI', nameUS: 'Malawi' },
  MX: { initials: 'MX', code: 'MEX', nameUS: 'Mexico' },
  MZ: { initials: 'MZ', code: 'MOZ', nameUS: 'Mozambique' },
  NA: { initials: 'NA', code: 'NAM', nameUS: 'Namibia' },
  NC: { initials: 'NC', code: 'NCL', nameUS: 'New Caledonia' },
  NE: { initials: 'NE', code: 'NER', nameUS: 'Niger' },
  NF: { initials: 'NF', code: 'NFK', nameUS: 'Norfolk Island' },
  NG: { initials: 'NG', code: 'NGA', nameUS: 'Nigeria' },
  NI: { initials: 'NI', code: 'NIC', nameUS: 'Nicaragua' },
  NL: { initials: 'NL', code: 'NLD', nameUS: 'Netherlands' },
  NO: { initials: 'NO', code: 'NOR', nameUS: 'Norway' },
  NR: { initials: 'NR', code: 'NRU', nameUS: 'Nauru' },
  NU: { initials: 'NU', code: 'NIU', nameUS: 'Niue' },
  NZ: { initials: 'NZ', code: 'NZL', nameUS: 'New Zealand' },
  PA: { initials: 'PA', code: 'PAN', nameUS: 'Panama' },
  PE: { initials: 'PE', code: 'PER', nameUS: 'Peru' },
  PF: { initials: 'PF', code: 'PYF', nameUS: 'French Polynesia' },
  PG: { initials: 'PG', code: 'PNG', nameUS: 'Papua New Guinea' },
  PL: { initials: 'PL', code: 'POL', nameUS: 'Poland' },
  PM: { initials: 'PM', code: 'SPM', nameUS: 'Saint Pierre and Miquelon' },
  PN: { initials: 'PN', code: 'PCN', nameUS: 'Pitcairn Islands' },
  PR: { initials: 'PR', code: 'PRI', nameUS: 'Puerto Rico' },
  PT: { initials: 'PT', code: 'PRT', nameUS: 'Portugal' },
  PW: { initials: 'PW', code: 'PLW', nameUS: 'Palau' },
  PY: { initials: 'PY', code: 'PRY', nameUS: 'Paraguay' },
  RE: { initials: 'RE', code: 'REU', nameUS: 'Reunion' },
  RO: { initials: 'RO', code: 'ROU', nameUS: 'Romania' },
  RS: { initials: 'RS', code: 'SRB', nameUS: 'Serbia' },
  RU: { initials: 'RU', code: 'RUS', nameUS: 'Russian Federation' },
  RW: { initials: 'RW', code: 'RWA', nameUS: 'Rwanda' },
  SB: { initials: 'SB', code: 'SLB', nameUS: 'Solomon Islands' },
  SC: { initials: 'SC', code: 'SYC', nameUS: 'Seychelles' },
  SD: { initials: 'SD', code: 'SDN', nameUS: 'Sudan' },
  SE: { initials: 'SE', code: 'SWE', nameUS: 'Sweden' },
  SH: { initials: 'SH', code: 'SHN', nameUS: 'Saint Helena' },
  SI: { initials: 'SI', code: 'SVN', nameUS: 'Slovenia' },
  SJ: { initials: 'SJ', code: 'SJM', nameUS: 'Svalbard & Jan Mayen Islands' },
  SK: { initials: 'SK', code: 'SVK', nameUS: 'Slovakia (Slovak Republic)' },
  SL: { initials: 'SL', code: 'SLE', nameUS: 'Sierra Leone' },
  SM: { initials: 'SM', code: 'SMR', nameUS: 'San Marino' },
  SN: { initials: 'SN', code: 'SEN', nameUS: 'Senegal' },
  SO: { initials: 'SO', code: 'SOM', nameUS: 'Somalia' },
  SR: { initials: 'SR', code: 'SUR', nameUS: 'Suriname' },
  SS: { initials: 'SS', code: 'SSD', nameUS: 'South Sudan' },
  ST: { initials: 'ST', code: 'STP', nameUS: 'Sao Tome and Principe' },
  SV: { initials: 'SV', code: 'SLV', nameUS: 'El Salvador' },
  SX: { initials: 'SX', code: 'SXM', nameUS: 'Sint Maarten (Netherlands)' },
  SZ: { initials: 'SZ', code: 'SWZ', nameUS: 'Eswatini, formerly known as Swaziland' },
  TC: { initials: 'TC', code: 'TCA', nameUS: 'Turks and Caicos Islands' },
  TD: { initials: 'TD', code: 'TCD', nameUS: 'Chad' },
  TF: { initials: 'TF', code: 'ATF', nameUS: 'French Southern Territories' },
  TG: { initials: 'TG', code: 'TGO', nameUS: 'Togo' },
  TK: { initials: 'TK', code: 'TKL', nameUS: 'Tokelau' },
  TN: { initials: 'TN', code: 'TUN', nameUS: 'Tunisia' },
  TO: { initials: 'TO', code: 'TON', nameUS: 'Tonga, Kingdom of' },
  TT: { initials: 'TT', code: 'TTO', nameUS: 'Trinidad and Tobago' },
  TV: { initials: 'TV', code: 'TUV', nameUS: 'Tuvalu' },
  TZ: { initials: 'TZ', code: 'TZA', nameUS: 'Tanzania' },
  UA: { initials: 'UA', code: 'UKR', nameUS: 'Ukraine' },
  UG: { initials: 'UG', code: 'UGA', nameUS: 'Uganda' },
  UM: { initials: 'UM', code: 'UMI', nameUS: 'United States Minor Outlying Islands' },
  US: { initials: 'US', code: 'USA', nameUS: 'United States of America' },
  UY: { initials: 'UY', code: 'URY', nameUS: 'Uruguay' },
  VA: { initials: 'VA', code: 'VAT', nameUS: 'Holy See (Vatican City State)' },
  VC: { initials: 'VC', code: 'VCT', nameUS: 'Saint Vincent and the Grenadines' },
  VE: { initials: 'VE', code: 'VEN', nameUS: 'Venezuela' },
  VI: { initials: 'VI', code: 'VIR', nameUS: 'United States Virgin Islands' },
  VU: { initials: 'VU', code: 'VUT', nameUS: 'Vanuatu' },
  WF: { initials: 'WF', code: 'WLF', nameUS: 'Wallis and Futuna' },
  WS: { initials: 'WS', code: 'WSM', nameUS: 'Samoa' },
  YT: { initials: 'YT', code: 'MYT', nameUS: 'Mayotte' },
  ZA: { initials: 'ZA', code: 'ZAF', nameUS: 'South Africa' },
  ZM: { initials: 'ZM', code: 'ZMB', nameUS: 'Zambia' },
};

const COUNTRIES_LIST: CountriesList = {
  AF: {
    countryCode: '+93',
    initials: 'AF',
    nameUS: 'Afghanistan',
    nameBR: 'Afeganistão',
    continentUS: 'Asia',
    continentBR: 'Ásia',
  },
  ZA: {
    countryCode: '+27',
    initials: 'ZA',
    nameUS: 'South Africa',
    nameBR: 'África do Sul',
    continentUS: 'Africa',
    continentBR: 'África',
  },
  AL: {
    countryCode: '+355',
    initials: 'AL',
    nameUS: 'Albania',
    nameBR: 'Albânia',
    continentUS: 'Europe',
    continentBR: 'Europa',
  },
  DE: {
    countryCode: '+49',
    initials: 'DE',
    nameUS: 'Germany',
    nameBR: 'Alemanha',
    continentUS: 'Europe',
    continentBR: 'Europa',
  },
};
/*
: {
  countryCode: '+',
  initials: '',
  nameUS: '',
  nameBR: '',
  continentUS: '',
  continentBR: '',
},
*/

// <td>+376</td>
// <td>Andorra</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+244</td>
// <td>Angola</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+1</td>
// <td>Anguilla</td>
// <td>América Central</td>
// </tr>
// <tr>
// <td>+1</td>
// <td>Antígua e Barbuda</td>
// <td>América Central</td>
// </tr>
// <tr>
// <td>+599</td>
// <td>Antilhas Holandesas</td>
// <td>América Central</td>
// </tr>
// <tr>
// <td>+966</td>
// <td>Arábia Saudita</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+213</td>
// <td>Argélia</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+54</td>
// <td>Argentina</td>
// <td>América do Sul</td>
// </tr>
// <tr>
// <td>+374</td>
// <td>Armênia</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+297</td>
// <td>Aruba</td>
// <td>América Central</td>
// </tr>
// <tr>
// <td>+247</td>
// <td>Ascensão</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+61</td>
// <td>Austrália</td>
// <td>Oceania</td>
// </tr>
// <tr>
// <td>+43</td>
// <td>Áustria</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+994</td>
// <td>Azerbaijão</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+1</td>
// <td>Bahamas</td>
// <td>América Central</td>
// </tr>
// <tr>
// <td>+880</td>
// <td>Bangladesh</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+1</td>
// <td>Barbados</td>
// <td>América Central</td>
// </tr>
// <tr>
// <td>+973</td>
// <td>Bahrein</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+32</td>
// <td>Bélgica</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+501</td>
// <td>Belize</td>
// <td>América Central</td>
// </tr>
// <tr>
// <td>+229</td>
// <td>Benim</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+1</td>
// <td>Bermudas</td>
// <td>América Central</td>
// </tr>
// <tr>
// <td>+375</td>
// <td>Bielorrússia</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+591</td>
// <td>Bolívia</td>
// <td>América do Sul</td>
// </tr>
// <tr>
// <td>+387</td>
// <td>Bósnia e Herzegovina</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+267</td>
// <td>Botswana</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+55</td>
// <td>Brasil</td>
// <td>América do Sul</td>
// </tr>
// <tr>
// <td>+673</td>
// <td>Brunei</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+359</td>
// <td>Bulgária</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+226</td>
// <td>Burkina Faso</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+257</td>
// <td>Burundi</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+975</td>
// <td>Butão</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+238</td>
// <td>Cabo Verde</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+237</td>
// <td>Camarões</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+855</td>
// <td>Camboja</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+1</td>
// <td>Canadá</td>
// <td>América do Norte</td>
// </tr>
// <tr>
// <td>+7</td>
// <td>Cazaquistão</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+237</td>
// <td>Chade</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+56</td>
// <td>Chile</td>
// <td>América do Sul</td>
// </tr>
// <tr>
// <td>+86</td>
// <td>República Popular da China</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+357</td>
// <td>Chipre</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+57</td>
// <td>Colômbia</td>
// <td>América do Sul</td>
// </tr>
// <tr>
// <td>+269</td>
// <td>Comores</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+242</td>
// <td>Congo-Brazzaville</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+243</td>
// <td>Congo-Kinshasa</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+850</td>
// <td>Coreia do Norte</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+82</td>
// <td>Coreia do Sul</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+225</td>
// <td>Costa do Marfim</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+506</td>
// <td>Costa Rica</td>
// <td>América Central</td>
// </tr>
// <tr>
// <td>+385</td>
// <td>Croácia</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+53</td>
// <td>Cuba</td>
// <td>América Central</td>
// </tr>
// <tr>
// <td>+45</td>
// <td>Dinamarca</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+253</td>
// <td>Djibuti</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+1</td>
// <td>Dominica</td>
// <td>América Central</td>
// </tr>
// <tr>
// <td>+20</td>
// <td>Egipto</td>
// <td>África/Ásia</td>
// </tr>
// <tr>
// <td>+503</td>
// <td>El Salvador</td>
// <td>América Central</td>
// </tr>
// <tr>
// <td>+971</td>
// <td>Emirados Árabes Unidos</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+593</td>
// <td>Equador</td>
// <td>América do Sul</td>
// </tr>
// <tr>
// <td>+291</td>
// <td>Eritreia</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+421</td>
// <td>Eslováquia</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+386</td>
// <td>Eslovénia</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+34</td>
// <td>Espanha</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+1</td>
// <td>Estados Unidos</td>
// <td>América do Norte</td>
// </tr>
// <tr>
// <td>+372</td>
// <td>Estónia</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+251</td>
// <td>Etiópia</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+679</td>
// <td>Fiji</td>
// <td>Oceania</td>
// </tr>
// <tr>
// <td>+63</td>
// <td>Filipinas</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+358</td>
// <td>Finlândia</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+33</td>
// <td>França</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+241</td>
// <td>Gabão</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+220</td>
// <td>Gâmbia</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+233</td>
// <td>Gana</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+995</td>
// <td>Geórgia</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+350</td>
// <td>Gibraltar</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+1</td>
// <td>Granada</td>
// <td>América Central</td>
// </tr>
// <tr>
// <td>+30</td>
// <td>Grécia</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+299</td>
// <td>Groenlândia</td>
// <td>América do Norte</td>
// </tr>
// <tr>
// <td>+590</td>
// <td>Guadalupe</td>
// <td>América Central</td>
// </tr>
// <tr>
// <td>+671</td>
// <td>Guam</td>
// <td>Oceania</td>
// </tr>
// <tr>
// <td>+502</td>
// <td>Guatemala</td>
// <td>América Central</td>
// </tr>
// <tr>
// <td>+592</td>
// <td>Guiana</td>
// <td>América do Sul</td>
// </tr>
// <tr>
// <td>+594</td>
// <td>Guiana Francesa</td>
// <td>América do Sul</td>
// </tr>
// <tr>
// <td>+224</td>
// <td>Guiné</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+245</td>
// <td>Guiné-Bissau</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+240</td>
// <td>Guiné Equatorial</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+509</td>
// <td>Haiti</td>
// <td>América Central</td>
// </tr>
// <tr>
// <td>+504</td>
// <td>Honduras</td>
// <td>América Central</td>
// </tr>
// <tr>
// <td>+852</td>
// <td>Hong Kong</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+36</td>
// <td>Hungria</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+967</td>
// <td>Iêmen</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+1</td>
// <td>Ilhas Cayman</td>
// <td>América Central</td>
// </tr>
// <tr>
// <td>+672</td>
// <td>Ilha Christmas</td>
// <td>Oceania</td>
// </tr>
// <tr>
// <td>+672</td>
// <td>Ilhas Cocos</td>
// <td>Oceania</td>
// </tr>
// <tr>
// <td>+682</td>
// <td>Ilhas Cook</td>
// <td>Oceania</td>
// </tr>
// <tr>
// <td>+298</td>
// <td>Ilhas Féroe</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+672</td>
// <td>Ilha Heard e Ilhas McDonald</td>
// <td>Oceania</td>
// </tr>
// <tr>
// <td>+960</td>
// <td>Maldivas</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+500</td>
// <td>Ilhas Malvinas</td>
// <td>América do Sul</td>
// </tr>
// <tr>
// <td>+1</td>
// <td>Ilhas Marianas do Norte</td>
// <td>Oceania</td>
// </tr>
// <tr>
// <td>+692</td>
// <td>Ilhas Marshall</td>
// <td>Oceania</td>
// </tr>
// <tr>
// <td>+672</td>
// <td>Ilha Norfolk</td>
// <td>Oceania</td>
// </tr>
// <tr>
// <td>+677</td>
// <td>Ilhas Salomão</td>
// <td>Oceania</td>
// </tr>
// <tr>
// <td>+1</td>
// <td>Ilhas Virgens Americanas</td>
// <td>América Central</td>
// </tr>
// <tr>
// <td>+1</td>
// <td>Ilhas Virgens Britânicas</td>
// <td>América Central</td>
// </tr>
// <tr>
// <td>+91</td>
// <td>Índia</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+62</td>
// <td>Indonésia</td>
// <td>Ásia/Oceania</td>
// </tr>
// <tr>
// <td>+98</td>
// <td>Irã</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+964</td>
// <td>Iraque</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+353</td>
// <td>Irlanda</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+354</td>
// <td>Islândia</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+972</td>
// <td><span class="flagicon">&nbsp;</span>Israel</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+39</td>
// <td>Itália</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+1</td>
// <td>Jamaica</td>
// <td>América Central</td>
// </tr>
// <tr>
// <td>+81</td>
// <td>Japão</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+962</td>
// <td>Jordânia</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+686</td>
// <td>Kiribati</td>
// <td>Oceania</td>
// </tr>
// <tr>
// <td>+383</td>
// <td>Kosovo</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+965</td>
// <td>Kuwait</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+856</td>
// <td>Laos</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+266</td>
// <td>Lesoto</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+371</td>
// <td>Letônia</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+961</td>
// <td>Líbano</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+231</td>
// <td>Libéria</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+218</td>
// <td>Líbia</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+423</td>
// <td>Liechtenstein</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+370</td>
// <td>Lituânia</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+352</td>
// <td>Luxemburgo</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+853</td>
// <td>Macau</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+389</td>
// <td>República da Macedônia</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+261</td>
// <td>Madagascar</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+60</td>
// <td>Malásia</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+265</td>
// <td>Malawi</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+223</td>
// <td>Mali</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+356</td>
// <td>Malta</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+212</td>
// <td>Marrocos</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+596</td>
// <td>Martinica</td>
// <td>América Central</td>
// </tr>
// <tr>
// <td>+230</td>
// <td>Maurícia</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+222</td>
// <td>Mauritânia</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+269</td>
// <td>Mayotte</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+52</td>
// <td>México</td>
// <td>América do Norte</td>
// </tr>
// <tr>
// <td>+691</td>
// <td>Estados Federados da Micronésia</td>
// <td>Oceania</td>
// </tr>
// <tr>
// <td>+258</td>
// <td>Moçambique</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+373</td>
// <td>Moldávia</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+377</td>
// <td>Mônaco</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+976</td>
// <td>Mongólia</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+382</td>
// <td>Montenegro</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+1</td>
// <td>Montserrat</td>
// <td>América Central</td>
// </tr>
// <tr>
// <td>+95</td>
// <td>Myanmar</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+264</td>
// <td>Namíbia</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+674</td>
// <td>Nauru</td>
// <td>Oceania</td>
// </tr>
// <tr>
// <td>+977</td>
// <td>Nepal</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+505</td>
// <td>Nicarágua</td>
// <td>América Central</td>
// </tr>
// <tr>
// <td>+227</td>
// <td>Níger</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+234</td>
// <td>Nigéria</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+683</td>
// <td>Niue</td>
// <td>Oceania</td>
// </tr>
// <tr>
// <td>+47</td>
// <td>Noruega</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+687</td>
// <td>Nova Caledônia</td>
// <td>Oceania</td>
// </tr>
// <tr>
// <td>+64</td>
// <td>Nova Zelândia</td>
// <td>Oceania</td>
// </tr>
// <tr>
// <td>+968</td>
// <td>Omã</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+31</td>
// <td>Países Baixos</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+680</td>
// <td>Palau</td>
// <td>Oceania</td>
// </tr>
// <tr>
// <td>+970</td>
// <td>Palestina</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+507</td>
// <td>Panamá</td>
// <td>América Central</td>
// </tr>
// <tr>
// <td>+675</td>
// <td>Papua-Nova Guiné</td>
// <td>Oceania</td>
// </tr>
// <tr>
// <td>+92</td>
// <td>Paquistão</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+595</td>
// <td>Paraguai</td>
// <td>América do Sul</td>
// </tr>
// <tr>
// <td>+51</td>
// <td>Peru</td>
// <td>América do Sul</td>
// </tr>
// <tr>
// <td>+689</td>
// <td>Polinésia Francesa</td>
// <td>Oceania</td>
// </tr>
// <tr>
// <td>+48</td>
// <td>Polônia</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+1</td>
// <td>Porto Rico</td>
// <td>América Central</td>
// </tr>
// <tr>
// <td>+351</td>
// <td>Portugal</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+974</td>
// <td>Qatar</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+254</td>
// <td>Quênia</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+996</td>
// <td>Quirguistão</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+44</td>
// <td>Reino Unido</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+236</td>
// <td>República Centro-Africana</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+1</td>
// <td>República Dominicana</td>
// <td>América Central</td>
// </tr>
// <tr>
// <td>+420</td>
// <td>República Tcheca</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+262</td>
// <td>Reunião</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+40</td>
// <td>Romênia</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+250</td>
// <td>Ruanda</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+7</td>
// <td>Rússia</td>
// <td>Europa/Ásia</td>
// </tr>
// <tr>
// <td>+212</td>
// <td>Saara Ocidental</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+685</td>
// <td>Samoa</td>
// <td>Oceania</td>
// </tr>
// <tr>
// <td>+1</td>
// <td>Samoa Americana</td>
// <td>Oceania</td>
// </tr>
// <tr>
// <td>+290</td>
// <td>Santa Helena (território)</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+1</td>
// <td>Santa Lúcia</td>
// <td>América Central</td>
// </tr>
// <tr>
// <td>+1</td>
// <td>São Cristóvão e Nevis</td>
// <td>América Central</td>
// </tr>
// <tr>
// <td>+378</td>
// <td>São Marinho</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+508</td>
// <td>Saint-Pierre e Miquelon</td>
// <td>América do Norte</td>
// </tr>
// <tr>
// <td>+239</td>
// <td>São Tomé e Príncipe</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+1</td>
// <td>São Vicente e Granadinas</td>
// <td>América Central</td>
// </tr>
// <tr>
// <td>+248</td>
// <td>Seicheles</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+221</td>
// <td>Senegal</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+232</td>
// <td>Serra Leoa</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+381</td>
// <td>Sérvia</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+65</td>
// <td>Singapura</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+963</td>
// <td>Síria</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+252</td>
// <td>Somália</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+94</td>
// <td>Sri Lanka</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+268</td>
// <td>Suazilândia</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+249</td>
// <td>Sudão</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+211</td>
// <td>Sudão do Sul</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+46</td>
// <td>Suécia</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+41</td>
// <td>Suíça</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+597</td>
// <td>Suriname</td>
// <td>América do Sul</td>
// </tr>
// <tr>
// <td>+992</td>
// <td>Tadjiquistão</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+66</td>
// <td>Tailândia</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+886</td>
// <td>República da China</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+255</td>
// <td>Tanzânia</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+246</td>
// <td>Território Britânico do Oceano Índico</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+670</td>
// <td>Timor-Leste</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+228</td>
// <td>Togo</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+690</td>
// <td>Tokelau</td>
// <td>Oceania</td>
// </tr>
// <tr>
// <td>+676</td>
// <td>Tonga</td>
// <td>Oceania</td>
// </tr>
// <tr>
// <td>+1</td>
// <td>Trinidad e Tobago</td>
// <td>América Central</td>
// </tr>
// <tr>
// <td>+216</td>
// <td>Tunísia</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+1</td>
// <td>Turcas e Caicos</td>
// <td>América Central</td>
// </tr>
// <tr>
// <td>+993</td>
// <td>Turquemenistão</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+90</td>
// <td>Turquia</td>
// <td>Ásia//Europa</td>
// </tr>
// <tr>
// <td>+688</td>
// <td>Tuvalu</td>
// <td>Oceania</td>
// </tr>
// <tr>
// <td>+380</td>
// <td>Ucrânia</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+256</td>
// <td>Uganda</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+598</td>
// <td>Uruguai</td>
// <td>América do Sul</td>
// </tr>
// <tr>
// <td>+998</td>
// <td>Uzbequistão</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+678</td>
// <td>Vanuatu</td>
// <td>Oceania</td>
// </tr>
// <tr>
// <td>+379</td>
// <td>Vaticano</td>
// <td>Europa</td>
// </tr>
// <tr>
// <td>+58</td>
// <td>Venezuela</td>
// <td>América do Sul</td>
// </tr>
// <tr>
// <td>+84</td>
// <td>Vietnã</td>
// <td>Ásia</td>
// </tr>
// <tr>
// <td>+681</td>
// <td>Wallis e Futuna</td>
// <td>Oceania</td>
// </tr>
// <tr>
// <td>+260</td>
// <td>Zâmbia</td>
// <td>África</td>
// </tr>
// <tr>
// <td>+263</td>
// <td>Zimbábue</td>
// <td>África</td>

export default COUNTRIES_LIST;
