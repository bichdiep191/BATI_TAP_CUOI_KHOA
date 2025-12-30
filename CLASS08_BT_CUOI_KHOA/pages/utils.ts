
const randomNumber = Math.floor(Math.random() * 1000) + 1;
export function generateAccount(prefix = 'gao') {
  return `${prefix}_${randomNumber}`;
}