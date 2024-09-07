import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import axios from 'axios';

const MainPage: React.FC = () => {
  const [content, setContent] = useState<string | null>(null);
  const [question, setQuestion] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleFetchContent = async () => {
    setLoading(true);
    try {
      const response = await axios.post('https://mitr-ai-1.onrender.com/api/content', { question });
      setContent(response.data.result);
    } catch (error) {
      console.error('Error fetching content:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}></Text>

      <ScrollView style={styles.contentContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />
        ) : (
          content && <Text style={styles.contentDisplay}>{content}</Text>
        )}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={question}
          onChangeText={setQuestion}
          placeholder="Ask your Mitra to solve your problem"
          onSubmitEditing={handleFetchContent} // Handle Enter key press
        />
        <TouchableOpacity style={styles.button} onPress={handleFetchContent}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  contentContainer: {
    flex: 1,
    marginBottom: 20,
  },
  contentDisplay: {
    fontSize: 16,
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    padding: 9,
    marginRight: 3,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainPage;
