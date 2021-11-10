import Post from "../components/Post.component";
import { USERS } from "../utils/users";

const Posts = (props) => {
  console.log(USERS);
  return (
    <div className="container-fluid post-screen">
      {USERS.map((user) => (
        <div key={user.userName} className="post">
          <Post users={user} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
