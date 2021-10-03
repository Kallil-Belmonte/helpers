/**
 * @name keyCheckers
 * @description Some functions that checks the type of the key provided.
 * @author Kallil Belmonte
 * @see CodePen { @link https://codepen.io/kallil-belmonte/full/QWbyGYo }
 * @see KeyValues { @link https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values }
 */

export const isLetterKey = (key: string) => {
  const lettersKeys = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'ç',
  ];

  return lettersKeys.includes(key);
};

export const isSpecialCharacterKey = (key: string) => {
  const specialCharactersKeys = [
    '+',
    '\\',
    ']',
    ',',
    '-',
    '.',
    '/',
    '=',
    '/',
    '`',
    '*',
    '[',
    '.',
    ';',
    "'",
    '-',
  ];

  return specialCharactersKeys.includes(key);
};

export const isNumberKey = (key: string) => {
  const numbersKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  return numbersKeys.includes(key);
};

export const isSpecialKey = (key: string) => {
  const specialKeys = [
    'Alt',
    'Backspace',
    'CapsLock',
    'Clear',
    'Control',
    'Delete',
    'ArrowDown',
    'End',
    'Enter',
    'Escape',
    'F1',
    'F10',
    'F11',
    'F12',
    'F2',
    'F3',
    'F4',
    'F5',
    'F6',
    'F7',
    'F8',
    'F9',
    'Home',
    'Insert',
    'ArrowLeft',
    'Meta',
    'NumLock',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'PageDown',
    'PageUp',
    'Pause',
    'ArrowRight',
    'Meta',
    'ScrollLock',
    'ContextMenu',
    'Shift',
    'Tab',
    'ArrowUp',
  ];

  return specialKeys.includes(key);
};
