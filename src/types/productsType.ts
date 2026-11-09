export interface IProducts {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
}

export interface IProductsContext {
  planlist:IProducts[],
  setPlanlist:React.Dispatch<React.SetStateAction<IProducts[]>>;
  savelist:IProducts[],
  setSavelist:React.Dispatch<React.SetStateAction<IProducts[]>>
}