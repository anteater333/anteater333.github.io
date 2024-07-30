type Props = {
  children?: React.ReactNode;
};

/**
 * 페이지들 간 최상단 컨테이너의 스타일이 동일하도록 유지
 * 사이드바 - 화면 으로 구성되는 메인 영역을 포함하는 컨테이너
 */
const Container = ({ children }: Props) => {
  return <div className="blog-main-container">{children}</div>;
};

export default Container;
