import { MaterialIcons } from "@expo/vector-icons";
import { Slot, Stack, Tabs } from "expo-router";

export default function RootLayout() {
  // This means to tell to simply render the child components
  // available on the same level as the _layout file. All the files
  // on the same level are considered as child components
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{
        title: "Allocations",
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons
            name="account-balance-wallet"
            size={size}
            color={color}
          />
        ),
      }}
      />
      <Tabs.Screen name="accounts" options={{
        title: "Accounts",
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons
            name="account-tree"
            size={size}
            color={color}
          />
        )
      }}
      />
    </Tabs>
  );

  // There are essentially 3 kinds of navigation
  // 1. Slot navigation
  // 2. Stack navigation
  // 3. Tabs navigation
}
