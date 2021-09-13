const testArr1 = [1, 2, 3, 5];
const testArr2 = [1, 2, 3, 5];

const idx = 1;

//splice - 요소를 삭제하면서 배열 길이까지 줄여줌

testArr1.splice(idx, 1);
console.log(testArr1);

// delete - 요소를 삭제하지만 배열길이는 그대로. 빈 요소값이 요소공간 차지.
delete testArr2[idx];
console.log(testArr2);
