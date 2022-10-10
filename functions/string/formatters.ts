/**
 * @name formatters
 * @description A collection of usefull formatters.
 * @author Kallil Belmonte
 * @see CodePen { @link https://codepen.io/kallil-belmonte/full/bZZOoQ }
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
    const getArray = (d: string, regex: RegExp) =>
      d.replace(regex, ' ').replace(/\s+/g, ' ').split(' ');
    const quantDigits = (id: string) => outputFormat.split(id).length - 1;

    const dateBase = date instanceof Date ? date.toISOString().split('T')[0] : date;
    const dateArray = getArray(dateBase, /[^0-9]/g);
    const formatArray = date instanceof Date ? ['Y', 'M', 'D'] : getArray(dateFormat, /[^DMY]/g);

    const { D, M, Y } = dateArray.reduce(
      (accumulator, value, index) => {
        accumulator[formatArray[index].charAt(0)] = value.replace(/^0/g, '');
        return accumulator;
      },
      { D: '', M: '', Y: '' },
    );

    let result = outputFormat;
    result = result.replace(/D?D/g, D);
    if (quantDigits('D') === 2 && D.length === 1) result = result.replace(D, `0${D}`);

    result = result.replace(/M?M/g, M);
    if (quantDigits('M') === 2 && M.length === 1) result = result.replace(M, `0${M}`);

    result = result.replace(/YY?Y?Y?/g, Y);
    if (quantDigits('Y') <= 2) result = result.replace(Y, Y.slice(Y.length - 2, Y.length));

    return result;
  }

  return date;
};

export const formatCPF = (cpf: string) => {
  if (cpf) {
    let result = cpf.replace(/\D/g, '').split('').slice(0, 11);
    if (result[3]) result.splice(3, 0, '.');
    if (result[7]) result.splice(7, 0, '.');
    if (result[11]) result.splice(11, 0, '-');
    return result.join('');
  }

  return cpf;
};

export const formatCNPJ = (cnpj: string) => {
  if (cnpj) {
    let result = cnpj.replace(/\D/g, '').split('').slice(0, 14);
    if (result[2]) result.splice(2, 0, '.');
    if (result[6]) result.splice(6, 0, '.');
    if (result[10]) result.splice(10, 0, '-');
    if (result[15]) result.splice(15, 0, '-');
    return result.join('');
  }

  return cnpj;
};

export const formatPrice = (price: number) =>
  price
    ? new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price)
    : price;

export const formatTelephoneNumber = (telephoneNumber: string) => {
  if (telephoneNumber) {
    return telephoneNumber.length > 10
      ? telephoneNumber.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
      : telephoneNumber.replace(/^(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }

  return telephoneNumber;
};

export const formatCEP = (cep: string) => (cep ? cep.replace(/^(\d{5})(\d{3})/, '$1-$2') : cep);
