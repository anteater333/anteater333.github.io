import styles from "./page.module.css";
import DateString from "./DateString";

export default function Home() {
  return (
    <div className={styles.page}>
      <DateString />
    </div>
  );
}
