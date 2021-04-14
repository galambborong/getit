import {removeComment} from "../utils/api";

const RemoveComment = ({commentId, user, author, confirmDelete}) => {

  const checkRemove = () => {
    if (user === author) {
      removeComment(commentId).then(() => {
        console.log("Comment removed")
        confirmDelete()
      })
    }
  }

  return <div>
    <button onClick={checkRemove}>Delete comment</button>
  </div>
}

export default  RemoveComment