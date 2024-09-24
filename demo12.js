let n = prompt("输入一个正整数n")
let allnum = []
function feibonaqishulie(n){
    if (n == 0)
        return 0;
    else if (n == 1)
        return 1;
    else if (n < 2)
        return "输入的数字不符合要求";
    else
        return feibonaqishulie(n-1) + feibonaqishulie(n-2);

}

for (let i = 0; i < n; i++) {
    allnum.push(feibonaqishulie(i));
}

alert("斐波那契数列第" + n + "项为：" + feibonaqishulie(n)+","+ "所有项组合的数组为："  +"["+allnum+"]");    
console.log(feibonaqishulie(n));
