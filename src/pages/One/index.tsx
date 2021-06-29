export default (props) => {
  return (
    <>
      <h1>这是一级菜单</h1>
      {props.children}
    </>
  );
};
