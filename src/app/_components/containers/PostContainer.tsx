type Props = {
  children?: React.ReactNode;
};

/**
 * 게시글 영역을 포함하는 컨테이너
 */
const PostContainer = ({ children }: Props) => {
  return <div className="post-container">{children}</div>;
};

export default PostContainer;
