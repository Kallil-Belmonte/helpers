/**
 * @name uid
 * @description Generates an unique ID.
 * @author Kallil Belmonte
 * @see CodePen { @link https://codepen.io/kallil-belmonte/full/abYgKPZ }
 */

const uid = () => String(Date.now().toString(32) + Math.random().toString(16)).replace(/\./g, '');

export default uid;
