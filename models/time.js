const d = new Date();
const utc = d.getTime() + d.getTimezoneOffset() * 60000;
const nd = new Date(utc + 1000 * 39600);

export default nd;