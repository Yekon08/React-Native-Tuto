import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [goal, setGoal] = useState("");
  const [goalsList, setGoalsList] = useState([]);

  const handleInput = (goal) => {
    setGoal(goal);
  };

  const handleAddGoal = () => {
    setGoalsList((prevGoals) => [...prevGoals, goal]);
    setGoal("");
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={handleInput}
          value={goal}
        />
        <Button title="Add Goal" onPress={handleAddGoal} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
          {goalsList.map((goal, index) => (
            <View style={styles.goalItem} key={index}>
              <Text style={{ color: "white" }}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    padding: 8,
    marginRight: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
});
