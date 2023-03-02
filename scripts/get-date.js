// const dateTimeString = "Tue Feb 28 03:01:34 +07 2023";
// const date = new Date(dateTimeString);
// const options = { timeZone: "Asia/Bangkok" };
// console.log(date.toLocaleString(options));

const currentDate = new Date();
console.log(currentDate.toISOString());
const publicationDate = new Date(2023, 2, 3, 3, 30, 0);
console.log(publicationDate.toISOString());
