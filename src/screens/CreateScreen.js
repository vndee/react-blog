import React, { useState, useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/blogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
	const { addBlogPost } = useContext(Context);

	return (
		<BlogPostForm
			formTitle="Create Blog Post"
			onSubmit={(title, content) => {
				addBlogPost(title, content, () => navigation.navigate("Index"));
			}}
			initialValues={{ title: "", content: "" }}
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
});

export default CreateScreen;
