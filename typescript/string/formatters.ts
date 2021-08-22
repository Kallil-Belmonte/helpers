/**
 * @description A collection of usefull formatters.
 * @see { @link https://codepen.io/kallil-belmonte/full/bZZOoQ }
 */

export const removeSpecialCharacters = (text: string | null) =>
  text ? text.replace(/[^\w\s]/gi, '') : text;

export const removeAccent = (text: string | null) =>
  text ? text.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : text;

export const formatDate = (date: string | null, format: string) => {
  if (date) {
    const standardDate = new Date(date.replace(/-/g, '/')).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
    });

    return standardDate.replace(/(?<day>\d{2})\/(?<month>\d{2})\/(?<year>\d{4})/g, format);
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
