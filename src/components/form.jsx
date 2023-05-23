import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  Linking
} from "react-native";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [history, setHistory] = useState([]);
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = () => {
    console.log("Full Name:", fullName);
    console.log("Phone Number:", phoneNumber);
    console.log("Email:", email);
    console.log("Description:", description);
  };

  const handleAdditionalInfoSubmit = () => {
    const info = {
      date: date,
      notes: notes
    };
    setHistory((prevHistory) => [...prevHistory, info]);
    console.log("Date:", date);
    console.log("Notes:", notes);
    setDate("");
    setNotes("");
  };

  const handlePhonePress = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  const handleEmailPress = (email) => {
    Linking.openURL(`mailto:${email}`);
  };

  const handleAdd = () => {
    setIsEditing(!isEditing);
    console.log(date, notes);
  };

  const handleCardEdit = () => {
    // Handle card edit functionality here
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#999999"
        value={fullName}
        onChangeText={(text) => setFullName(text)}
        editable={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#999999"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        editable={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999999"
        value={email}
        onChangeText={(text) => setEmail(text)}
        editable={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        placeholderTextColor="#999999"
        value={description}
        onChangeText={(text) => setDescription(text)}
        editable={true}
      />
      <Button title="Submit" onPress={handleSubmit} />

      <TextInput
        style={styles.input}
        placeholder="Date"
        placeholderTextColor="#999999"
        value={date}
        onChangeText={(text) => setDate(text)}
        editable={!isEditing}
      />
      <TextInput
        style={styles.input}
        placeholder="Notes"
        placeholderTextColor="#999999"
        value={notes}
        onChangeText={(text) => setNotes(text)}
        editable={!isEditing}
      />

      <Button title="Add" onPress={handleAdd} />

      <View style={styles.historyContainer}>
        {history.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text>Full Name: {fullName}</Text>
            <Text>Phone Number: {phoneNumber}</Text>
            <Text>Email: {email}</Text>
            <Text>Description: {description}</Text>
            <Text>Date: {item.date}</Text>
            <Text>Notes: {item.notes}</Text>
            {isEditing ? (
              <>
                <Button title="Save" onPress={handleCardEdit} />
                <Button title="Cancel" onPress={handleEdit} />
              </>
            ) : (
              <Button title="Edit" onPress={handleEdit} />
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5"
  },
  input: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    fontSize: 16
  },
  historyContainer: {
    marginTop: 20
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginBottom: 10
  }
});

export default Form;
