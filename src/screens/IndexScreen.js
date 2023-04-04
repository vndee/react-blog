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

const IndexScreen = ({ navigation }) => {
	const { state, deleteBlogPost } = useContext(Context);

	return (
		<View>
			<FlatList
				style={styles.blogList}
				data={state}
				keyExtractor={(blogPost) => blogPost.title}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate("Show", { id: item.id })
							}
						>
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
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

IndexScreen.navigationOptions = ({ navigation }) => {
	return {
		headerRight: () => (
			<TouchableOpacity onPress={() => navigation.navigate("Create")}>
				<Feather name="file-plus" size={20} style={styles.addButton} />
			</TouchableOpacity>
		),
	};
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
	addButton: {
		marginRight: 15,
	},
});

export default IndexScreen;
