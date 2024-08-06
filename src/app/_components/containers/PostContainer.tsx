type Props = {
  children?: React.ReactNode;
};

/**
 * 게시글 영역을 포함하는 컨테이너
 */
const PostContainer = ({ children }: Props) => {
  return <main className="post-container">{children}</main>;
};

export default PostContainer;
