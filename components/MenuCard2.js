import { Text, View } from "react-native";

export default function MenuCard({ title, description, price }) {
  return (
    <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-orange-100">
      <View className="flex-row justify-between items-baseline mb-1">
        <Text className="text-lg font-semibold text-slate-900">{title}</Text>
        {price && (
          <Text className="text-sm font-semibold text-orange-600">{price}</Text>
        )}
      </View>
      {description && (
        <Text className="text-sm text-slate-600">{description}</Text>
      )}
    </View>
  );
}