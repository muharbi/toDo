import styles from "./style.module.scss";

export const Input = () => {
  return (
    <input className={styles.input} type="text" placeholder="some words" />
  );
};
