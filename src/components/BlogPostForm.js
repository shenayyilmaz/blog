import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const BlogPostForm = ({ onSubmit, intialValues }) => {
  const [title, setTitle] = useState(intialValues.title);
  const [content, setContent] = useState(intialValues.content);

  return (
    <View>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <Text style={styles.label}>Content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={text => setContent(text)}
      />
      <Button title="Save Blog Post" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  intialValues: {
    title: "",
    content: ""
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
