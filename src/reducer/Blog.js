import { bindActionCreators } from "redux";

const INIT_BLOG = 'INIT_BLOG'
const ADD_BLOG = 'ADD_BLOG'
const DELETE_BLOG = 'DELETE_BLOG'

// reducer
export default function (state, action) {
    if (!state) {
        state = {
            blogs: []
        }
    }
    switch (action.type) {
        case INIT_BLOG:
            // init blog
            return {
                blogs: [...action.blogs]
            }
        case ADD_BLOG:
            // add blog
            return {
                blogs: [...state.blogs, action.blog]
            }
        case DELETE_BLOG:
            // delete blog
            return {
                blogs: [
                    ...state.blogs.slice(0, action.blogIndex),
                    ...state.blogs.slice(action.blogIndex + 1)
                ]
            }
        default:
            return state
    }
}

// action creators
export const initBlogs = (blogs) => {
    return {
        type: INIT_BLOG,
        blogs
    }
}

export const addBlog = (blog) => {
    return {
        type: ADD_BLOG,
        blog
    }
}

export const deleteBlog = (blogIndex) => {
    return {
        type: DELETE_BLOG,
        blogIndex
    }
}