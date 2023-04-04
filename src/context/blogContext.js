import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
	switch (action.type) {
		case "add_blogpost":
			return [
				...state,
				{
					title: `Blog Post #${state.length + 1}`,
					id: Math.floor(Math.random() * 99999),
				},
			];
		case "edit_blogpost":
			return state.map((blogPost) => {
				return blogPost.title === action.payload
					? action.payload
					: blogPost;
			});
		case "delete_blogpost":
			return state.filter((blogPost) => blogPost.id !== action.payload);
		default:
			return state;
	}
};

const addBlogPost = (dispatch) => {
	return () => {
		dispatch({ type: "add_blogpost" });
	};
};

const editBlogPost = (dispatch) => {
	return (title) => {
		dispatch({ type: "edit_blogpost", payload: title });
	};
};

const deleteBlogPost = (dispatch) => {
	return (id) => {
		dispatch({ type: "delete_blogpost", payload: id });
	};
};

export const { Context, Provider } = createDataContext(
	blogReducer,
	{ addBlogPost, editBlogPost, deleteBlogPost },
	[]
);
