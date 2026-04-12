import { useGroceryStore } from "@/store/grocery-store";
import { FontAwesome6 } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function InsightsStats() {
  const { items } = useGroceryStore();

  const totalItems = items.length;
  const completedItems = items.filter((item) => item.purchased).length;
  const pendingItems = totalItems - completedItems;

  const completionRate = totalItems
    ? Math.round((completedItems / totalItems) * 100)
    : 0;

  return (
    <>
      <View className="flex-row gap-2">
        <StatCard iconName="clock" text="Pending" showCountFor={pendingItems} />
        <StatCard
          iconName="check"
          text="Completed"
          showCountFor={completedItems}
        />
        <StatCard
          iconName="layer-group"
          text="Total"
          showCountFor={totalItems}
        />
      </View>

      <View className="rounded-3xl border border-border bg-card p-4">
        <View className="flex-row items-center justify-between">
          <Text className="text-sm font-semibold text-foreground">
            Completion rate
          </Text>
          <Text className="text-sm font-semibold text-primary">
            {completionRate}%
          </Text>
        </View>
        <View className="mt-3 overflow-hidden rounded-full bg-secondary">
          <View
            className="h-3 rounded-full bg-ring"
            style={{ width: `${Math.max(2, completionRate)}%` }}
          />
        </View>
      </View>
    </>
  );
}

type StatCardInput = {
  iconName: string;
  text: string;
  showCountFor: number;
};

function StatCard({ iconName, text, showCountFor }: StatCardInput) {
  return (
    <View className="flex-1 rounded-3xl border border-border bg-card p-4">
      <View className="h-8 w-8 items-center justify-center rounded-xl bg-primary">
        <FontAwesome6 name={iconName} size={18} color="#fff" />
      </View>
      <Text className="mt-3 text-xs uppercase tracking-[1px] text-muted-foreground">
        {text}
      </Text>
      <Text className="mt-1 text-3xl font-extrabold text-foreground">
        {showCountFor}
      </Text>
    </View>
  );
}
