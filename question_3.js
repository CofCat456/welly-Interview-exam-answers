// 原本的函式
// function formatName(firstName, lastName) {
//   let formattedName = '';
//
//   if (firstName) {
//     formattedName += firstName;
//   }
//
//   if (lastName) {
//     formattedName += ' ' + lastName;
//   }
//
//   return formattedName;
// }


// 重構後
function formatName(firstName = '', lastName = '') {
  let formattedName = [];

  if (firstName.trim())
    formattedName.push(firstName);

  if (lastName.trim())
    formattedName.push(lastName);

  return formattedName.join(' ');
}

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('輸入 FirstName：', firstName => {
  readline.question('輸入 LastName：', lastName => {
    console.log(`結果：${formatName(firstName, lastName)}`);


    console.log(`
      原本的程式碼終有幾個問題

      1. 如果 firstName 是空格的話，一樣會被加入到 formattedName 裡。
      ex:
        input:
          firstName = '  '
          lastnName = 'Mark'
        output:  Mark

      2. 如果 firstName 不為空格，但使用並沒有輸入值時，一樣會導致最後的結果有空格
      ex:
        input:
          firstName = ''
          lastnName = 'Mark'
        output: Mark

    `);
    readline.close();
  });
});
