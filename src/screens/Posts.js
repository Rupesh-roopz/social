import Post from "../components/Post.component";
import { USERS } from "../utils/users";

const Posts = (props) => {
  console.log(USERS);
  return (
    <div className="container">
      {USERS.map((user) => (
        <div key={user.userName}>
          <div className="post">
            <Post users={user} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
