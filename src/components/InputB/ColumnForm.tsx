import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import styles from "./styles.module.scss";

export const InputB = () => {
  return (
    <div className={styles.column}>
      <Input />
      <Button />
    </div>
  );
};
