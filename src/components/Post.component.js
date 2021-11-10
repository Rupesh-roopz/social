import img from "../asserts/Images/2122RIM2421_1635917399_bill_1.jpg";
const Post = ({ users }) => {
  return (
    <div className="container">
      <div className="post-header">
        <img src={img} alt="profilePicture" className="profile-picture" />
        <span className="userName">{users.userName}</span>
      </div>
      <div className="post-body">
        <img src={img} alt="postImage" className="post-image" />
      </div>
      <div className="post-footer">
        <button className="btn-primary">Like</button>
        <span>{users.likes}</span>
      </div>
    </div>
  );
};

export default Post;
