import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from "react-native";

const BlogPostForm = ({ formTitle, onSubmit, initialValues }) => {
	const [title, setTitle] = useState(initialValues.title);
	const [content, setContent] = useState(initialValues.content);

	return (
		<View>
			<Text style={styles.pageTitle}>{formTitle}</Text>
			<Text style={styles.inputHeader}>Enter title:</Text>
			<TextInput
				style={styles.textInput}
				value={title}
				onChangeText={(text) => setTitle(text)}
			/>

			<Text style={styles.inputHeader}>Enter content:</Text>
			<TextInput
				style={styles.textInput}
				value={content}
				onChangeText={(text) => setContent(text)}
			/>

			<TouchableOpacity
				style={styles.btn}
				onPress={() => onSubmit(title, content)}
			>
				<Text style={styles.btnText}>Save</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	pageTitle: {
		fontSize: 20,
		fontWeight: "bold",
		padding: 5,
		marginHorizontal: 15,
	},
	inputHeader: {
		fontSize: 18,
		padding: 5,
		marginHorizontal: 15,
	},
	textInput: {
		fontSize: 18,
		borderWidth: 1,
		borderColor: "grey",
		borderRadius: 5,
		padding: 10,
		marginHorizontal: 15,
		marginBottom: 15,
	},
	btn: {
		backgroundColor: "lightblue",
		padding: 10,
		marginHorizontal: 15,
		marginVertical: 15,
		borderRadius: 5,
		justifyContent: "center",
	},
	btnText: {
		fontSize: 15,
		textAlign: "center",
		fontWeight: "bold",
	},
});

export default BlogPostForm;
