/** 定义静态类型 */ 
function aa(){
    /**定义基础数据类型 */
    let web: string="hello world";
    let web1: number=1;
    
    let web2: boolean=false;
    
    // 也可以自定义一个静态类型
    interface selfDef {
        name:string;
        age:Number;
    };
    let info:selfDef = {
        name:"1",
        age:3
    };
    /**定义引用类数据类型 */
    // 数组
    let webs :String[] = ["2","4","6"];  // 表示是 定义一个数组，数组中的每个值都是字符串类型
    
    let webs1:selfDef[]= [{ name:"1",age:3}]; // 表示是 定义一个数组，数组中的每个值都是自定义的类型

    let webs3:(number|string)[] = ["2",1,"4"]; // 表示是 定义一个数组，数组中的每个值都是字符串类型或者是数字类型
    // ？？？？？？？ 问题1：不确定数组中的值类型，怎么定义,【使用 any】
    let ary:any[]=[]; //允许数组中出现任意类型

    //类
    class Person {};
    let obj:Person = new Person();
    
    // 函数
   
    // 1.需要返回值是基本类型 - 以字符串类型为例
    let fun = ()=>string=>{
        return 1;
    };
    // 2.需要返回值是引用类型 - 以对象为例
    function funObj():Object{
        return "222";
    };
    // 3.函数没有返回值的时候 - void, 如果加入返回值，程序报错
    function fun1():void{

    };
    let fun2 = ():void=>{
        
    };
    // 4.函数中的参数 - 普通的值
    function testFn(one:number,two:number):number{
        return one+two;
    }
    // 5.函数中的参数 - 参数是对象
    function testFn1({one,two}:{one:number,two:number}):number{
        return one+two;
    }
    let afn = ({one,two}:{one:number,two:number}):number =>{
        return one+two;
    }
    // 5.函数中的参数 - 参数是对象,对象只有一个值
    function testFn2({one}:{one:number}):number{
        return one;
    }

    // 对象
    let obj2 : Object = {};

    console.log(funObj())
}
aa();

