/* eslint-disable import/first */
import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😍",
  heart: "❤",
  rocket: "🐱‍🏍",
  cofee: "☕",
};

import React from "react";

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();
  // Object.entries returns an array of a given objects own [key, value] pairs
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() =>
          dispatch(reactionAdded({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });

  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
