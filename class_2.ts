/** *********************************元组 *****************************************/ 
const eg1 = ["aaa",1,"bbb"]; //会自动注解
const eg2:(string|number)[] = []; //不固定位置的定义，里边只要有这两种类型就可以

// 元组的主要作用 - 类型约束
const eg3:[string,number,string] = ["1",2,"3"]; //固定里边值的类型以及位置


/*******************************interface接口的使用  *************************************/
//1) 基础用法
interface Info {
    name:string;
    age:number;
    experience:number;
}

let getInfo = (info:Info)=>{
    console.log(info.name);
}
let selectInfo = (info:Info):boolean=>{
    return info.age>18;
}
let info:Info= { //Info接口中有啥，这里必须有啥，格式必须保持一致
    name:"fff",
    age:20,
    experience:6
}
getInfo(info);

//2) interface接口，增加非必选的属性 ，在属性后面加个？就可以
interface Info2 {
    name:string;
    age:number;
    experience:number;
    skill?:[];
    fnName?():number; //函数的?是加在括号前面，函数名称后面
}
let info1:Info2={
    name:"fff",
    age:20,
    experience:6,
    skill:[]
}

// 3) interface接口中，增加位置的属性 -  可以加入任意值
interface InfoAny {
    name:string;
    age:number;
    experience:number;
    skill?:[];
    [propname:string]:any;  //表示，属性的名字是字符串类型，属性值可以是任意类型
}
let info3:InfoAny={
    name:"fff",
    age:20,
    experience:6,
    school:""
}
// 4) interface接口中，增加方法
interface InfoFn {
    name:string;
    age:number;
    experience:number;
    skill?:[];
    [propname:string]:any;  //表示，属性的名字是字符串类型，属性值可以是任意类型
    fn():any;  //any表示可以有返回值，返回值是任何类型，也可以是没有返回值； 
    // fn():string;  //string表示必选有返回值，返回值是字符串类型； 

}
let info4:InfoFn={
    name:"fff",
    age:20,
    experience:6,
    school:"",
    fn(){
        
    }
}


/*************************interface接口 和 类的 的约束  *********************************/
// 定一个Review的类，来自于InfoFn这个接口，这个【类】中属性 必须符合【接口】的格式
class Review implements InfoFn{
    name ="fff";
    age=20;
    experience=6;
    school="";
    fn(){
        
    }
}

/*************************interface接口的继承  *********************************/
interface Teacher extends InfoFn{
    teach?():string;
}
// Teacher这个接口，继承了InfoFn,并且添加了一个方法
// 在使用的时候，这个teach1就可以拥有infoFn上的所有属性，且还有自己独有的属性
let teach1:Teacher={
    name:"",
    age:25,
    experience:8,
    fn(){
        
    },
    teach(){
        return ""
    }
}