import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import BlogContext from "../context/blogContext";

const IndexScreen = () => {
    const { data, addBlogPost, deleteBlogPost } = useContext(BlogContext);

    return (
        <View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText} onPress={addBlogPost}>
                    Add Blog Post
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.btnText} onPress={deleteBlogPost}>
                    Delete Blog Post
                </Text>
            </TouchableOpacity>
            <FlatList 
                style={styles.blogList}
                data={data}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>;
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
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
    }
});

export default IndexScreen;
