import { parseISO, format, parse } from "date-fns";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = new Date(Date.parse(dateString));
  return <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>;
};

export default DateFormatter;
