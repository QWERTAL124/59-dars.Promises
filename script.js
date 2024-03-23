"use strict";

// const request = (time) =>{
//   return new Promise((resolve) =>{
//     setTimeout(()=>{
//       resolve();
//     },time)
//   })
// }

// // request(1000).then(()=>{console.log('Request 1000 ms ')})
// // request(2000).then(()=>{console.log('Request 2000 ms')})
// // request(3000).then(()=>{
// //   console.log('Request 3000 ms');
// // });

// // Promise.all([request(1000), request(2000), request(3000)]).then(()=>{
// //   console.log('All');
// // });

// Promise.race([request(1000), request(2000), request(3000)]).then(()=>{
//   console.log("All");
// });\\\\\

//// ========== new era =============

// const isFriendCame = false;

// const meetingRequest = new Promise((resolve, reject) => {
//   // resolve va reject funksiya
//   if (isFriendCame) {
//     const msg = "Friend I'm there ";
//     resolve(msg);
//   } else {
//     const err = "I can't come there";
//     reject(err);
//   }
// });

// meetingRequest
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Nima bo'lganda ham tel qilib qo'y");
//   }); // then resolveni ishga tushiradi | catch rejectni ishga tushiradi | finally bu istisno holat

// Advencing

console.log("Request data...");

// Asinxron kod
// sync -- bu faqat 1 ta kientga xizmat qiladi

// async - bu 1 nechta  klientga xizmat ko'rsata oladi.
// Va bu set tme out yordamida amalga oshiriladi.Lekin ob'ektga ozgartitish kiritilavergan sari set time out ko'payib ketadi natijada
// vaqt ortib ketadi
setTimeout(() => {
  console.log("Procesing data...");

  const product = {
    name: "car",
    color: "black",
  };

  setTimeout(() => {
    product.status = "order";
    console.log(product);
  }, 2000);
}, 2000);
// Yuqoridagi kodda serverdan ma'lumot kelishini bilib b'lmaydi
// Promise esa qachonki serverdan ma'lumot kelgandagina ishlaydi va har bir oz'garishga prtmose muommosiz ishlaydi.

console.log("Request data...");
const request = new Promise((resolve, reject) => {
  setTimeout(() => {
    const product = {
      name: "car",
      color: "black",
    };

    resolve(product);
  }, 2000);
 
});
request
  // .then((data) => {
  //   console.log(data);
  // }) 
  .then((data)=>{
    return new Promise((resolve)=>{
      setTimeout(()=>{
        data.status = 'ordered';
        console.log('Get data...')
        resolve(data);
      },2000);
    })
  }).then((result)=>{console.log(result)})
  .finally(() => {
    console.log("Fetching end");
  });
