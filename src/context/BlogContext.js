import React, { useReducer } from "react";
import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const reducer = (state, action) => {
  switch (action.type) {
    case "get_blogposts":
      return action.payload;

    case "delete_blogpost":
      return state.filter(blogPost => blogPost.id != action.payload);

    case "edit_blogpost":
      return state.map(blogPost => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });

    default:
      return state;
  }
};

const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer("/blogposts");
    dispatch({ type: "get_blogposts", payload: response.data });
  };
};

const addBlogPosts = dispatch => {
  return async (title, content, callback) => {
    await jsonServer.post("/blogposts", { title, content });

    if (callback) callback();
  };
};

const deleteBlogPosts = dispatch => {
  return async id => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

const editBlogPosts = dispatch => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { id, title, content });
    dispatch({ type: "edit_blogpost", payload: { id, title, content } });
    if (callback) callback();
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { addBlogPosts, deleteBlogPosts, editBlogPosts, getBlogPosts },
  []
);
