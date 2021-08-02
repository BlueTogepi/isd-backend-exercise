import moment from 'moment';

let countId = 1;
const postsArr = [];

// Example
export const createPost = (req, res) => {
    const {body} = req.body;
    const post = {
        postId: countId.toString(),
        body: body,
        lastEdited: moment(),
        replies: []
    };
    countId++;
    postsArr.push(post);
    res.json({
        postId: post.postId,
        body: body,
        lastEdited: post.lastEdited
    });
};

export const getPostArr = (req, res) => {
    res.json({});
};

export const getPost = (req, res) => {
    res.json({});
};

export const editPost = (req, res) => {
    res.json({});
};

export const deletePost = (req, res) => {
    res.json({});
};

export const createReply = (req, res) => {
    res.json({});
};