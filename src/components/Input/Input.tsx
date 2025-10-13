import styles from "./style.module.scss";

export const Input = ({ value, onChange }) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="some words"
      value={value}
      onChange={onChange}
    />
  );
};
