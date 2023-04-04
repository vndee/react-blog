import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/blogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
	const id = navigation.getParam("id");
	const { state, editBlogPost } = useContext(Context);
	const blogPost = state.find((blogPost) => blogPost.id === id);

	return (
		<BlogPostForm
			formTitle="Edit Blog Post"
			onSubmit={(title, content) => {
				editBlogPost(id, title, content, () => navigation.pop());
			}}
			initialValues={{ title: blogPost.title, content: blogPost.content }}
		/>
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
