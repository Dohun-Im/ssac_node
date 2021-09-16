const promiseChain1 = (params) => {
  return new Promise((resolve, reject) => {
    console.log("func1");
    setTimeout(() => {
      resolve(`func 1 success : ${params}`);
    }, 1000);
  });
};
const promiseChain2 = (params) => {
  return new Promise((resolve, reject) => {
    console.log("func2");
    setTimeout(() => {
      return new Error(`func 2 falid: ${params}`);
    }, 1000);
  });
};
const promiseChain3 = (params) => {
  return new Promise((resolve, reject) => {
    console.log("func3");
    setTimeout(() => {
      resolve(`func 3 success : ${params}`);
    }, 1000);
  });
};

promiseChain1("start")
  .then(promiseChain2)
  .then(promiseChain3)
  .catch((error) => console.log(error));
