export interface FoodTypes {
  isOpen: boolean;
  setIsOpen: () => void;
}

export interface EditFoodType extends FoodTypes {
  editingFood?: any;
  handleUpdateFood: (data: any) => void;
}

export interface AddFoodType extends FoodTypes {
  handleAddFood: (data: any) => void;
}

export interface IFood {
  id: string;
  available: boolean;
  description: string;
  image: string;
  name: string;
  price: string;
}