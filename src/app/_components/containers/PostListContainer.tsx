type Props = {
  children?: React.ReactNode;
};

/**
 * 게시글 목록 영역을 포함하는 컨테이너
 */
const PostListContainer = ({ children }: Props) => {
  return <main className="postlist-container">{children}</main>;
};

export default PostListContainer;
