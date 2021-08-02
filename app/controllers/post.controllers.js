import moment from 'moment';

let countId = 1;
const postsArr = [];

// Example
export const create = (req, res) => {
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

export const viewAll = (req, res) => {
    res.json({});
};

export const viewId = (req, res) => {
    res.json({});
};

export const editId = (req, res) => {
    res.json({});
};

export const deleteId = (req, res) => {
    res.json({});
};

export const replyPost = (req, res) => {
    res.json({});
};