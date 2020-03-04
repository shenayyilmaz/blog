import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={newTitle => setTitle(newTitle)}
      />
      <Text style={styles.label}>Content</Text>
      <TextInput
        value={content}
        style={styles.input}
        onChangeText={newContent => setContent(newContent)}
      />
      <Button title="save post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
    context: ""
  }
};
const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    margin: 8
  },
  input: {
    borderWidth: 1,
    borderColor: "grey",
    fontSize: 18,
    padding: 5,
    margin: 8
  }
});
export default BlogPostForm;
