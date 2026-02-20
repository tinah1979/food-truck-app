import { Link } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import MenuCard from "../components/MenuCard2";

export default function MenuScreen() {
  return (
    <ScrollView className="flex-1 bg-orange-50">
      <View className="px-6 pt-12 pb-8">

        {/* Page Title */}
        <Text className="text-3xl font-bold text-orange-700 mb-2">
          Today&apos;s Menu
        </Text>

        {/* Description */}
        <Text className="text-base text-slate-700 mb-6">
          Freshly prepared tacos and sides. Catch us this week at:
          {"\n"}Mon–Fri, 11am–3pm — Downtown Plaza
        </Text>

        {/* Menu Items */}
        <MenuCard
          title="Fire-Grilled Carne Asada Taco"
          description="Marinated steak, grilled onions, cilantro, and house salsa on a warm corn tortilla."
          price="$4.50"
        />

        <MenuCard
          title="Citrus-Lime Chicken Taco"
          description="Grilled chicken, citrus slaw, pico de gallo, and lime crema."
          price="$4.00"
        />

        <MenuCard
          title="Roasted Veggie Street Taco"
          description="Charred peppers, onions, squash, and avocado salsa. Vegan-friendly."
          price="$3.75"
        />

        <MenuCard
          title="Spicy Shrimp Baja Taco"
          description="Crispy shrimp, cabbage, chipotle mayo, and pickled red onions."
          price="$4.75"
        />

        <MenuCard
          title="Churro Bites"
          description="Crispy churro pieces tossed in cinnamon sugar with chocolate dipping sauce."
          price="$5.00"
        />

        {/* Back Button */}
        <Link href="/" asChild>
          <TouchableOpacity className="mt-8 bg-slate-900 rounded-full py-3 px-6">
            <Text className="text-white text-center font-semibold">
              Back to Home
            </Text>
          </TouchableOpacity>
        </Link>

      </View>
    </ScrollView>
  );
}