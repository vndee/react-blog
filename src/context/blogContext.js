import React, { useState } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState([]);

    const addBlogPost = () => {
        setBlogPosts([
            ...blogPosts,
            { title: `Blog Post #${blogPosts.length + 1}` },
        ]);
    };

    const deleteBlogPost = (index) => {
        setBlogPosts(blogPosts.filter((blogPost, i) => i !== index));
    };

    return (
        <BlogContext.Provider
            value={{
                data: blogPosts,
                addBlogPost: addBlogPost,
                deleteBlogPost: deleteBlogPost,
            }}
        >
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;
