/**
 * @function formatters
 * @description A collection of usefull formatters.
 * @author Kallil Belmonte
 * @see CodePen {@link https://codepen.io/kallil-belmonte/full/bZZOoQ}
 */

export const removeSpecialCharacters = (text: string) =>
  text ? text.replace(/[^\w\s]/gi, '') : text;

export const removeAccent = (text: string) =>
  text ? text.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : text;

export const removeHTML = (html: string, keepNewLines?: boolean) => {
  const spacesRegex = keepNewLines ? /  +/g : /\s\s+/g;
  return html
    ? html
        .replace(/<[^>]*>/gi, '')
        .replace(spacesRegex, ' ')
        .trim()
    : html;
};

export const formatDate = (date: string | Date, dateFormat: string, outputFormat: string) => {
  if (date) {
    type DateBase = { D: string; M: string; Y: string };

    const getArray = (d: string, regex: RegExp) =>
      d.replace(regex, ' ').replace(/\s+/g, ' ').split(' ');
    const quantDigits = (id: string) => outputFormat.split(id).length - 1;

    const dateBase = date instanceof Date ? date.toISOString().split('T')[0] : date;
    const dateArray = getArray(dateBase, /[^0-9]/g);
    const formatArray = date instanceof Date ? ['Y', 'M', 'D'] : getArray(dateFormat, /[^DMY]/g);

    const { D, M, Y } = dateArray.reduce((accumulator, value, index) => {
      const property = formatArray[index].charAt(0) as keyof DateBase;
      accumulator[property] = value.replace(/^0/g, '');
      return accumulator;
    }, {} as DateBase);

    let result = outputFormat;

    const dayWithZero = quantDigits('D') === 2 && D.length === 1;
    result = result.replace(/D?D/g, dayWithZero ? `0${D}` : D);

    const monthWithZero = quantDigits('M') === 2 && M.length === 1;
    result = result.replace(/M?M/g, monthWithZero ? `0${M}` : M);

    result = result.replace(/YY?Y?Y?/g, Y);
    if (quantDigits('Y') <= 2) result = result.replace(Y, Y.slice(Y.length - 2, Y.length));

    return result;
  }

  return date;
};

export const formatLetters = (value: string) =>
  value ? value.replace(/[^a-zà-ÿ\s]/gi, '') : value;

export const formatNumbers = (value: string) => (value ? value.replace(/[^\d]/g, '') : value);

export const formatCPF = (cpf: string) => {
  if (cpf) {
    const result = cpf.replace(/\D/g, '').split('').slice(0, 11);
    if (result[3]) result.splice(3, 0, '.');
    if (result[7]) result.splice(7, 0, '.');
    if (result[11]) result.splice(11, 0, '-');
    return result.join('');
  }

  return cpf;
};

export const formatCNPJ = (cnpj: string) => {
  if (cnpj) {
    const result = cnpj.replace(/\D/g, '').split('').slice(0, 14);
    if (result[2]) result.splice(2, 0, '.');
    if (result[6]) result.splice(6, 0, '.');
    if (result[10]) result.splice(10, 0, '/');
    if (result[15]) result.splice(15, 0, '-');
    return result.join('');
  }

  return cnpj;
};

export const formatCurrency = (
  value: string,
  currency = 'R$',
  decimalSeparator = ',',
  thousandSeparator = '.',
) => {
  if (value) {
    const result = value.replace(/\D/g, '').split('');
    result.reverse();
    if (result[2]) result.splice(2, 0, decimalSeparator);
    if (result[6]) {
      let index = 6;
      while (result[index]) {
        result.splice(index, 0, thousandSeparator);
        index += 4;
      }
    }
    result.reverse();
    return `${currency} ${result.join('')}`;
  }

  return value;
};

export const formatTelephone = (telephone: string) => {
  if (telephone) {
    const result = telephone.replace(/\D/g, '').split('').slice(0, 11);
    result.unshift('(');
    if (result[3]) result.splice(3, 0, ')');
    if (result[4]) result.splice(4, 0, ' ');
    if (result.length > 9 && result.length < 14) {
      result.splice(9, 0, ' ');
    } else if (result.length >= 14) {
      result.splice(10, 0, ' ');
    }

    return result.join('');
  }

  return telephone;
};

export const formatCEP = (cep: string) => {
  if (cep) {
    const result = cep.replace(/\D/g, '').split('').slice(0, 8);
    if (result[5]) result.splice(5, 0, '-');
    return result.join('');
  }

  return cep;
};
