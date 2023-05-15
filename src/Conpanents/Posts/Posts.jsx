export const Posts = ({ posts }) => {
  return (
    <ul>
      {posts.map((item) => (
        <li key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </li>
      ))}
      {/* <div className=""></div> */}
    </ul>
  );
};
