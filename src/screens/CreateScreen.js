import React, { useState, useContext } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	FlatList,
	TouchableOpacity,
} from "react-native";
import { Context } from "../context/blogContext";

const CreateScreen = ({ navigation }) => {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const { addBlogPost } = useContext(Context);

	return (
		<View>
			<Text style={styles.pageTitle}>Create your new blog post</Text>
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
				style={styles.btnAddBlogPost}
				onPress={() => {
					addBlogPost(title, content, () => {
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

export default CreateScreen;
