export type GroceryItemPriority = "low" | "medium" | "high";

export type GroceryItem = {
  name: string;
  category: string;
  quantity: number;
  priority: GroceryItemPriority;
};
