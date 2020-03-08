
//es5 定义函数的两种方法
function run(){
    return 'run'
}
var run2=function(){//匿名函数
    return "run2"
}

//ts中定义函数的方式
function run3():string{
    return "run3"
}
var run4=function():string{
    return "run4"
}

//ts中的方法传值
function getInfo(name:string,age:number):string{
    return `${name} ------ ${age}`
}

console.log(getInfo("tom",29))

//方法配置可选参数