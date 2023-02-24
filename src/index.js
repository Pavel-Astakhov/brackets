module.exports = function check(str, bracketsConfig) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const current = str[i];

    for (let j = 0; j < bracketsConfig.length; j++) {
      const openBracket = bracketsConfig[j][0];
      const closeBracket = bracketsConfig[j][1];

      if(current === closeBracket){
        if(stack[stack.length - 1] === openBracket){
          stack.pop();
        }
        else{
          stack.push(current);
        }
      } else if(current === openBracket){
          stack.push(current);
        }
    }
  }

  return stack.length === 0;
}