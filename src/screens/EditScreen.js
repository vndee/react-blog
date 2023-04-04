import React, { useContext, useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { Context } from "../context/blogContext";

const EditScreen = ({ navigation }) => {
	const id = navigation.getParam("id");
	const { state, editBlogPost } = useContext(Context);
	const blogPost = state.find((blogPost) => blogPost.id === id);

	const [title, setTitle] = useState(blogPost.title);
	const [content, setContent] = useState(blogPost.content);

	return (
		<View>
			<Text style={styles.pageTitle}>Edit blog post: {blogPost.id}</Text>
			<Text style={styles.inputHeader}>Edit title:</Text>
			<TextInput
				style={styles.textInput}
				value={title}
				onChangeText={(text) => setTitle(text)}
			/>

			<Text style={styles.inputHeader}>Edit content:</Text>
			<TextInput
				style={styles.textInput}
				value={content}
				onChangeText={(text) => setContent(text)}
			/>
			<TouchableOpacity
				style={styles.btnAddBlogPost}
				onPress={() => {
					editBlogPost(blogPost.id, title, content, () => {
						navigation.navigate("Index");
					});
				}}
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
		marginBottom: 15,
		marginHorizontal: 15,
		padding: 5,
		borderRadius: 5,
	},
	btnAddBlogPost: {
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

export default EditScreen;
