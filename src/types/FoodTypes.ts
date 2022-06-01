type FoodTypes = {
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