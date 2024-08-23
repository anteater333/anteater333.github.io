import { format } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  // Safari의 parsing 알고리즘이 유독 저열하기 때문에 전처리
  const date = new Date(
    Date.parse(dateString.replace(" ", "T").replace(" ", ""))
  );

  return <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>;
};

export default DateFormatter;
