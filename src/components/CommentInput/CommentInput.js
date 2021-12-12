import React, { useState } from 'react';
import { View, Keyboard } from 'react-native';
import Button from '../Button';
import Input from "../Input"
import styles from './CommentInput.style';

const CommentInput = ({ onAddComment }) => {
  const [comment, setComment] = useState("");

  const handleClick = () => {
    if (comment === "") {
      return;
    }
    onAddComment(comment)
    Keyboard.dismiss()
    setComment("")
  }

  return (
    <View style={styles.container}>
      <Input onSubmit={setComment} value={comment} placeholder={"comment"} />
      <Button onClick={handleClick} />
    </View>
  );
}

export default CommentInput;