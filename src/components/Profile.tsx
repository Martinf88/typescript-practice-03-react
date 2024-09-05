type ProfileProps = {
  username: string;
  email: string;
};

const Profile = (props: ProfileProps) => {
  return (
    <div className="user-profile">
      <p> {props.username}</p>
      <p>{props.email}</p>
    </div>
  );
};

export default Profile;
