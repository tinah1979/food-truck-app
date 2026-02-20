import { Link } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-orange-50">
      <View className="px-6 pt-12 pb-8">

        {/* Title */}
        <Text className="text-4xl font-extrabold text-orange-700 mb-2">
          Tina’s Taco Truck
        </Text>

        {/* Tagline */}
        <Text className="text-lg text-slate-700 mb-6">
          Fresh. Fast. Flavor-packed.
        </Text>

        {/* Navigation Button */}
        <Link href="/menu" asChild>
          <TouchableOpacity className="bg-orange-600 py-3 px-4 rounded-lg mb-8">
            <Text className="text-white text-center text-lg font-semibold">
              View Today’s Menu
            </Text>
          </TouchableOpacity>
        </Link>

        {/* Intro */}
        <Text className="text-base text-slate-700 mb-6 leading-relaxed">
          Serving authentic street-style tacos with bold flavors, fresh
          ingredients, and a whole lot of love. Come find us around town and
          taste why we’re a local favorite.
        </Text>

        {/* Featured Items */}
        <Text className="text-xl font-bold text-orange-700 mb-3">
          Featured Items
        </Text>

        <Text className="text-base text-slate-700 mb-2">
          • Fire-Grilled Carne Asada Taco
        </Text>
        <Text className="text-base text-slate-700 mb-2">
          • Citrus-Lime Chicken Taco
        </Text>
        <Text className="text-base text-slate-700 mb-2">
          • Roasted Veggie Street Taco
        </Text>
        <Text className="text-base text-slate-700 mb-2">
          • Street Corn Cup
        </Text>
        <Text className="text-base text-slate-700 mb-2">
          • Churro Bites
        </Text>

      </View>
    </ScrollView>
  );
}