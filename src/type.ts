/* eslint-disable @typescript-eslint/no-unused-vars */
enum Color { Red, Green, Blue, Yellow}
const c: Color = Color.Blue;
const colorName: string = Color[2];

const u:undefined = undefined;
const n:null = null;

declare function create(o:object | null):void;
create({prop:0});
create(null);