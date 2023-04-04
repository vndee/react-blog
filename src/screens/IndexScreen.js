import React, { useContext } from "react";
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
} from "react-native";
import { Context } from "../context/blogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = () => {
	const { state, addBlogPost, editBlogPost, deleteBlogPost } =
		useContext(Context);

	return (
		<View>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.btnText} onPress={addBlogPost}>
					Add Blog Post
				</Text>
			</TouchableOpacity>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.btnText} onPress={editBlogPost}>
					Edit Blog Post
				</Text>
			</TouchableOpacity>
			<FlatList
				style={styles.blogList}
				data={state}
				keyExtractor={(blogPost) => blogPost.title}
				renderItem={({ item }) => {
					return (
						<View style={styles.blogItem}>
							<Text>
								{item.title} - {item.id}
							</Text>
							<TouchableOpacity
								onPress={() => deleteBlogPost(item.id)}
							>
								<Feather name="trash" />
							</TouchableOpacity>
						</View>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	blogItem: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderTopWidth: 1,
		borderColor: "gray",
	},
	button: {
		marginTop: 15,
		marginHorizontal: 15,
		padding: 10,
		backgroundColor: "lightblue",
		borderRadius: 5,
	},
	btnText: {
		fontSize: 15,
		textAlign: "center",
		fontWeight: "bold",
	},
	blogList: {
		marginTop: 15,
		marginHorizontal: 15,
	},
});

export default IndexScreen;
