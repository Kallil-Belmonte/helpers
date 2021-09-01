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
    const dateBase = date instanceof Date ? date.toISOString().split('T')[0] : date;
    const dateArray = dateBase
      .replace(/[^0-9]/g, ' ')
      .replace(/\s+/g, ' ')
      .split(' ');
    const formatArray =
      date instanceof Date
        ? ['yyyy', 'mm', 'dd']
        : dateFormat
            .toLowerCase()
            .replace(/[^dmy]/g, ' ')
            .replace(/\s+/g, ' ')
            .split(' ');

    const { d, m, y } = dateArray.reduce(
      (accumulator: { [key: string]: string }, currentValue: string, index: number) => {
        accumulator[formatArray[index].charAt(0)] = currentValue.replace(/^0/g, '');
        return accumulator;
      },
      { d: '', m: '', y: '' },
    );

    const quantDigits = (id: string) => outputFormat.toLowerCase().split(id).length - 1;

    let result = outputFormat.toLowerCase();

    result = result.replace(/d?d/gi, d);
    if (quantDigits('d') === 2 && d.length === 1) result = result.replace(d, `0${d}`);

    result = result.replace(/m?m/gi, m);
    if (quantDigits('m') === 2 && m.length === 1) result = result.replace(m, `0${m}`);

    result = result.replace(/yy?y?y?/gi, y);
    if (quantDigits('y') <= 2) result = result.replace(y, y.slice(y.length - 2, y.length));

    return result;
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
