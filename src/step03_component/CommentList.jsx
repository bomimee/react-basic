import React from 'react'
import Comment from './Comment'
const comments = [
  {
    name: "hong",
    comment: "hello"
  },
  {
    name: "kim",
    comment: "hi"
  },
  {
    name: "dooly",
    comment: "hoi hoi"
  },
  {
    name: "paul",
    comment: "meow"
  }
]


export default function CommentList(props) {
  return (
    <div>
      {
        comments.map((comment) => {return <Comment name={comment.name} comment={comment.comment} /> })
      }
    </div>
  )
}
