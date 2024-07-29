import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message.trim() !== '') {
      setMessages([...messages, { id: messages.length.toString(), text: message, sender: 'You' }]);
      setMessage('');
    }
  };

  const renderItem = ({ item }) => (
    <View style={item.sender === 'You' ? styles.myMessage : styles.theirMessage}>
      <Text style={styles.messageSender}>{item.sender}</Text>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type your message"
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Adjust the background color to match your design
  },
  messagesList: {
    padding: 16,
  },
  myMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#5a5353', // Adjust the background color to match your design
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
  },
  theirMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#777', // Adjust the background color to match your design
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
  },
  messageSender: {
    color: '#fff', // Adjust the text color to match your design
    fontWeight: 'bold',
  },
  messageText: {
    color: '#fff', // Adjust the text color to match your design
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#fff', // Adjust the background color to match your design
    borderRadius: 8,
    padding: 10,
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: '#5a5353', // Adjust the background color to match your design
    borderRadius: 8,
    padding: 10,
  },
  sendButtonText: {
    color: '#fff', // Adjust the text color to match your design
  },
});

export default ChatRoom;