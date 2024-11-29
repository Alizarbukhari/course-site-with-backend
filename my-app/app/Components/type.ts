export type NaveItem = {
    name: string;
    href: string;
  };
  

export type NaveType = NaveItem[];

export type buttonTypes = {
  title? :string;
  color ? :string;
};
export type cardData = {
  img:string,
  title:string,
  dic:string,
  name:string,
  date:string,
  button?:boolean
}
export type Footer_Text_Type={
  line?:boolean,
  text:string
}
export type Comprehinsive_Type={
  id:number,
  name:string
}