import styles from "./styles.module.scss";

export const ListItem = ({ text, onDelete }) => {
  return (
    <div className={styles.list_container}>
      <input type="checkbox" className={styles.list_checkbox} />
      <div className={styles.list_content}>{text}</div>
      <button className={styles.list_delete} onClick={onDelete}>
        X
      </button>
    </div>
  );
};
