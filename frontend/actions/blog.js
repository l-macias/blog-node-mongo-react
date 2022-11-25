import fetch from "isomorphic-fetch";
import { API } from "../config";

export const createBlog = async (blog, token) => {
  try {
    const response = await fetch(`${API}/blog`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: blog,
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const listBlogsWithCategoriesAndTags = async () => {
  try {
    const response = await fetch(`${API}/blogs-categories-tags`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    });
    return await response.json();
  } catch (err) {
    return console.log(err);
  }
};
