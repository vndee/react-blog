import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Context } from "../context/blogContext";

const ShowScreen = ({ navigation }) => {
	const { state } = useContext(Context);

	const blogPost = state.find(
		(blogPost) => blogPost.id === navigation.getParam("id")
	);

	return (
		<View>
			<Text style={styles.title}>
				{blogPost.title} - {blogPost.id}
			</Text>
			<Text style={styles.content}>{blogPost.content}</Text>
		</View>
	);
};

ShowScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: () => (
			<TouchableOpacity
				onPress={() =>
					navigation.navigate("Edit", {
						id: navigation.getParam("id"),
					})
				}
			>
				<EvilIcons name="pencil" size={30} style={styles.editButton} />
			</TouchableOpacity>
		),
	};
};

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		fontWeight: "bold",
		padding: 10,
		marginHorizontal: 15,
	},
	content: {
		fontSize: 16,
		padding: 10,
		marginHorizontal: 15,
	},
	editButton: {
		marginRight: 10,
	},
});

export default ShowScreen;
