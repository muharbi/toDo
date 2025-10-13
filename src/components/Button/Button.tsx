import styles from "./styles.module.scss";

export const Button = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      &#43;
    </button>
  );
};
