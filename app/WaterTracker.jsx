import { Text, View, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";
import Button from "../src/ui/components/Button/Button";
import { useReducer, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import TrackerModal from "../src/ui/components/AppModal/trackerModal/TrackerModal";
import useStorage from "../hooks/useStorage";
import waterReducer from "../reducers/waterReducer";
import historyReducer from "../reducers/historyReducer";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const daily = 2000;

const WaterTracker = () => {
  const [visible, setVisible] = useState(false);

  const [currentWater, dispatchWater] = useReducer(waterReducer, 0);
  const [history, dispatchHistory] = useReducer(historyReducer, []);

  useStorage("water", currentWater, dispatchWater, "LOAD_WATER");

  useStorage("history", history, dispatchHistory, "LOAD_HISTORY");

  const progress = Math.min(currentWater / daily, 1);
  const isCompleted = currentWater >= daily;
  const progressColor = isCompleted ? "#22c55e" : "#16bedb";

  const handleAddWater = (amount) => {
    dispatchWater({ type: "ADD_WATER", payload: amount });
    dispatchHistory({
      type: "ADD_TO_HISTORY",
      payload: amount,
    });
    setVisible(false);
  };

  const handleRemoveWater = (amount) => {
    dispatchWater({ type: "REMOVE_WATER", payload: amount });
    dispatchHistory({
      type: "CLEAR_HISTORY",
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Progress.Circle
          progress={progress}
          size={240}
          thickness={25}
          color={progressColor}
          unfilledColor="#E5E7EB"
          borderWidth={0}
          animated
        />

        <View style={{ position: "absolute" }}>
          <Text style={{ fontSize: 28, fontWeight: "bold" }}>
            {currentWater > 0 ? currentWater : 0}/{daily} ml
          </Text>
          <Text style={{ fontSize: 14, color: "#6B7280", textAlign: "center" }}>
            Daily Water Goal
          </Text>
        </View>

        <View style={styles.buttons}>
          <Button
            text="Додати"
            onPress={() => setVisible(true)}
            variant="primary"
            icon={<Ionicons name="water" size={24} color="white" />}
          />
          <Button
            text="Очистити"
            variant="danger"
            icon={
              <MaterialCommunityIcons name="broom" size={24} color="white" />
            }
            onPress={() => handleRemoveWater(currentWater)}
          />
        </View>
        <View style={styles.history}>
          <Text style={styles.text}>Історія</Text>
          {history.length > 0 ? (
            <View>
              {history.map((item, index) => (
                <View key={item.id || index}>
                  <Text style={styles.historyText}>
                    {item.amount}ml о {item.time} ({item.date})
                  </Text>
                </View>
              ))}
            </View>
          ) : (
            <Text>Історія порожня</Text>
          )}
        </View>

        <View>
          <TrackerModal
            visible={visible}
            onClose={() => setVisible(false)}
            onConfirm={handleAddWater}
          >
            <Text style={styles.text}>Оберіть кількість</Text>
          </TrackerModal>
        </View>
      </View>
    </View>
  );
};

export default WaterTracker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    alignItems: "center",
  },
  circle: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    position: "absolute",
    top: 250,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
  },
  history: {
    position: "absolute",
    top: 325,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  historyText: {
    fontSize: 16,
    backgroundColor: "#779be2",
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
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
