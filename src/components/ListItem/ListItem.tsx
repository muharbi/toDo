import styles from "./styles.module.scss";

export const ListItem = () => {
  return (
    <div className={styles.list_container}>
      <input type="checkbox" className={styles.list_checkbox} />
      <div className={styles.list_content}>Create a new design</div>
      <button className={styles.list_delete}>X</button>
    </div>
  );
};
