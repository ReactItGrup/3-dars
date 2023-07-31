// template string
const title = "Intervyu: Millat ziyolilari uyqudami? ";
const author = "Kun.uz";
const views = 85000;

// concatentation way
// let result =
//   "Bu post nomi " +
//   title +
//   " " +
//   author +
//   " tomonidan yozilgan. " +
//   "va bu post " +
//   views +
//   " ta ko'rilgan";

// console.log(result);

// template string way
let result = `Bu post nomi ${title}, ${author} tomonidan yozilgan. Va bu post ${views} ta ko'rilgan`;
// console.log(result);

// let result = `
//     <h2>${title}</h2>
//     <p>${author} tomonidan yozilgan</p>
//     <span>${title}</span>
// `;
// console.log(result);
