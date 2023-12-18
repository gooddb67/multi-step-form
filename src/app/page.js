import FormContainer from "./containers/FormContainer";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <FormContainer />
    </main>
  );
}
