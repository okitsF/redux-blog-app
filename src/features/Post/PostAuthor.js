import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectAllUsers } from "../user/usersSlice";

const PostAuthor = ({userID}) => {
    const users =useSelector(selectAllUsers)
    const author = users.find(user=>user.id == userID );
  return <span>by {author ? author.name:" unknown Author"}</span>
  
}

export default PostAuthor