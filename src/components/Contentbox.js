//This page uses Inline Styles

const Contentbox = ({ data }) => {
  const styles = { display: "inline-block", padding: "10px", margin: "10px" };
  const headerStyles = { fontSize: "24px", fontWeight: "bold" };
  const usernameStyles = { fontStyle: "italic" };

  return (
    <div style={styles}>
      <img alt="pda logo" src={data.image} />
      <div style={headerStyles}>{data.heading}</div>
      <div style={usernameStyles}>{data.username}</div>
      <div>{data.content}</div>
    </div>
  );
};

export default Contentbox;
