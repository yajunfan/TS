/***************************   类的使用 ***************************/
// 1) 类的定义是使用class的关键字，类，说明里边的属性都是已经定义好的，函数就写函数的形式
class Study{
    book:string; //只定义类型的时候，需要用 ：
    book3="678"; //有默认值的，需要用 = ，可以修改
    book2:"235"; //这种方式是错误的，获取不到值
    sayHello(){
        return this.book;
    };
    // otherFn2():any;  这种写法是错误的
}
// 2) 类的继承使用extends - 继承的通俗意思就是，获取了extends的类的所有属性方法，还可以写自己的属性方法
class Study2 extends Study{
    sayHi(){
        return "hi"
    };
    otherFn(){

    };
    
}
let wyh = new Study2();
wyh.book="4545";
// console.log(wyh.sayHi(),wyh.sayHello());
// console.log(wyh.book3,wyh.book2);
// 修改默认属性值
wyh.book3="1010";
// console.log(wyh.book3);
 
/*********************  类的访问类型 - public/ private /protected ***************************/
// 例子如上，我们可以修改book的属性，是因为当前的book属性默认是public的访问属性
// 1> public - 哪里都可以调用
class Study3{
    public book:string; 
    public book2="235";
    public sayHello(){
        return this.book;
    };
}
// 2> private - 只能在内部调用,私有属性
class Study4{
    private book:string;  //将book设置为private的访问属性，那么就不可以重新赋值了
    public sayHello(){
        return this.book; //这里不报错
    };
}
let study4_1 = new Study4();
// study4_1.book = "dsfd"; //这里就会报错 - book为私有属性，只能在类中使用

// 3> protected -只能在内部和继承的子类中使用
class Study5{
    protected book1:string; 
    public sayHello(){
        return this.book1; //内部调用  这里不报错
    };
}
// 继承的子类中调用
class Study6 extends Study5{
    testprotect(){
        return this.book1; //这里不报错
    };
}
let study6_1 = new Study6();//这是属于继承的实例，所以报错
// study6_1.book1="dsf"; 这里报错，

/*********************************  类的构造函数 *******************************/
// 构造函数就是在类被初始化的时候，自动执行的一个方法
class Study7_1{
    public name:string;
    constructor(name:string){
        this.name = name;
    }
}
// Study7_1的简便写法如下，表示在构造函数中，定义了一个name，然后在构造函数中进行了赋值
class Study7{
    constructor(public name:string){
    };
    // constructor(public age:number){  //一个类中，只有一个构造函数

    // };
}
let study7_1 = new Study7('fyj');
console.log(1111,study7_1.name); //fyj
// 类继承中的构造函数 
class study8 extends Study7{
    constructor(public age:number){
        super('fyj'); //必须用super()调用父类的构造函数，如果父级中没有构造函数，也必须调用 super();
    }
}

/*********************************  类的getter,setter 以及static *******************************/
class Study9{
    constructor(private _age:number){

    };
    get age(){ //getter属性的关键字是get,通过get，可以对传入的值进行处理，最后获取的是处理之后的值
        return this._age-1;
    };
    set age(age:number){ //setter属性的关键字是set,函数中必须有参数
        this._age = age;
    }
}
let study9_1 = new Study9(15);
console.log(11,study9_1.age) //因为有get方法，所以可以获取到私有属性age
study9_1.age = 20; //因为有set方法，所以可以对私有属性进行设置
console.log(222,study9_1.age)
 