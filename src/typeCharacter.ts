export type Character ={
  name : string,
  image:string,
  troop?: string,
  target?: string,
  targetArea?: string,
  houseSpace?: string,
  trainingTime?: string,
  description?: string,
  characterPreview? :(value:string)=>void
}