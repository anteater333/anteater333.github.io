import styles from "./page.module.css";
import DateString from "./DateString";
import ThemeToggle from "./ThemeToggle";

export default function Home() {
  return (
    <div className={styles.page}>
      <DateString />
      <ThemeToggle />
    </div>
  );
}
