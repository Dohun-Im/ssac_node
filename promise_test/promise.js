const { param } = require("../express_test/routes");

const promise1 = function (condition) {
  return new Promise((resolve, reject) => {
    if (condition) {
      // 실행
      resolve("성공!");
    } else {
      // 에러
      reject("실패!");
    }
  });
};

// promise1(false).then(
//   (message) => {
//     console.log(message);
//   },
//   (error) => {
//     console.log(error);
//   }
// );
//같음
//하지만 두번째 방법이 더 가시성이 좋음(catch도 넣어서)
promise1(false)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
