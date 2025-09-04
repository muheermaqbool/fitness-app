import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView as SafeAreaViewContext } from "react-native-safe-area-context";
export default function HomeScreen() {
  return (
    <SafeAreaViewContext>
      <SafeAreaView>
        <View>
          <Text>HomeScreen</Text>
          {/* Pro/Upgrade-button */}
          
          {/* image */}

          {/* Action Components */}
        </View>
      </SafeAreaView>
    </SafeAreaViewContext>
  );
}

const styles = StyleSheet.create({});
