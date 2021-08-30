/**
 * @description A collection of usefull formatters.
 * @see { @link https://codepen.io/kallil-belmonte/full/bZZOoQ }
 */

export const removeSpecialCharacters = (text: string | null) =>
  text ? text.replace(/[^\w\s]/gi, '') : text;

export const removeAccent = (text: string | null) =>
  text ? text.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : text;

export const formatDate = (date: string | Date, dateFormat: string, outputFormat: string) => {
  if (date) {
    const d = date instanceof Date ? date.toISOString() : date;
    const dFormat = date instanceof Date ? 'yyyy-mm-dd' : dateFormat.toLowerCase();
    let stringFormat = outputFormat.replace(/d?d/i, '$<day>');
    stringFormat = stringFormat.replace(/m?m/i, '$<month>');
    stringFormat = stringFormat.replace(/yyyy/i, '$<year>');

    const getValue = (format: string) =>
      format ? d.slice(dFormat.indexOf(format), dFormat.indexOf(format) + format.length) : '';

    const getFormat = (id: string) => {
      const check = (text: string) => (new RegExp(text, 'i').test(dFormat) ? text : '');
      return check(`${id}${id}${id}${id}`) || check(`${id}${id}`) || check(`${id}`);
    };

    const day = getValue(getFormat('d'));
    const month = getValue(getFormat('m'));
    const year = getValue(getFormat('y'));
    const regexBase = new RegExp(`(?<day>${day})(?<month>${month})(?<year>${year})`, 'g');

    return `${day}${month}${year}`.replace(regexBase, stringFormat);
  }

  return date;
};

export const formatCPF = (cpf: string | null) =>
  cpf ? cpf.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4') : cpf;

export const formatCNPJ = (cnpj: string | null) =>
  cnpj ? cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5') : cnpj;

export const formatPrice = (price: number | null) =>
  price
    ? new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price)
    : price;

export const formatTelephoneNumber = (telephoneNumber: string | null) => {
  if (telephoneNumber) {
    return telephoneNumber.length > 10
      ? telephoneNumber.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
      : telephoneNumber.replace(/^(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }

  return telephoneNumber;
};

export const formatCEP = (cep: string | null) =>
  cep ? cep.replace(/^(\d{5})(\d{3})/, '$1-$2') : cep;
