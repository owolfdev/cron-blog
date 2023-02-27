// const dateTimeString = "Tue Feb 28 03:01:34 +07 2023";
// const date = new Date(dateTimeString);
// const options = { timeZone: "Asia/Bangkok" };
// console.log(date.toLocaleString(options));

const currentDate = new Date();
console.log(currentDate.toISOString());
const publicationDate = new Date(2023, 1, 28, 11, 0, 0);
console.log(publicationDate.toISOString());
