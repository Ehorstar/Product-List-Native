import { Text, View, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";
import Button from "../src/ui/components/Button/Button";
import { useReducer, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import TrackerModal from "../src/ui/components/AppModal/trackerModal/TrackerModal";
import useStorage from "../hooks/useStorage";
import waterReducer from "../reducers/waterReducer";

const daily = 2000;

const WaterTracker = () => {
  const [visible, setVisible] = useState(false);

  const [currentWater, dispatch] = useReducer(waterReducer, 0);

  useStorage("water", currentWater, dispatch, "LOAD_WATER");

  const progress = Math.min(currentWater / daily, 1);
  const isCompleted = currentWater >= daily;
  const progressColor = isCompleted ? "#22c55e" : "#16bedb";

  const handleAddWater = (amount) => {
    dispatch({ type: "ADD_WATER", payload: amount });
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Progress.Circle
        progress={progress}
        size={240}
        thickness={25}
        color={progressColor}
        unfilledColor="#E5E7EB"
        borderWidth={0}
        animated
      />

      <View style={{ position: "absolute", alignItems: "center" }}>
        <Text style={{ fontSize: 28, fontWeight: "bold" }}>
          {currentWater}/{daily} ml
        </Text>
        <Text style={{ fontSize: 14, color: "#6B7280" }}>Daily Water Goal</Text>
      </View>

      <View style={{ position: "absolute", top: 520 }}>
        <Button
          text="Додати"
          onPress={() => setVisible(true)}
          variant="primary"
          icon={<Ionicons name="water" size={24} color="white" />}
        />
      </View>

      <TrackerModal
        visible={visible}
        onClose={() => setVisible(false)}
        onConfirm={handleAddWater}
      >
        <Text style={styles.text}>Оберіть кількість</Text>
      </TrackerModal>
    </View>
  );
};

export default WaterTracker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
});
