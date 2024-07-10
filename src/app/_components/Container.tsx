type Props = {
  children?: React.ReactNode;
};

/**
 * 페이지들 간 최상단 컨테이너의 스타일이 동일하도록 유지
 */
const Container = ({ children }: Props) => {
  return <div className="container">{children}</div>;
};

export default Container;
