export type GroceryItemPriority = "low" | "medium" | "high";
export type GroceryItemCategory =
  | "Produce"
  | "Diary"
  | "Bakery"
  | "Pantry"
  | "Snacks";

export type GroceryItem = {
  id: string;
  name: string;
  category: GroceryItemCategory;
  purchased: boolean;
  quantity: number;
  priority: GroceryItemPriority;
};
