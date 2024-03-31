enum Color { Red, Green, Blue}
let c: Color = Color.Blue;
let colorName: string = Color[2];

let u:undefined = undefined;
let n:null = null;

declare function create(o:object | null):void;
create({prop:0});
create(null);