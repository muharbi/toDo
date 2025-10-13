import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import styles from "./styles.module.scss";

export const InputB = ({ value, onChange, onAdd }) => {
  return (
    <div className={styles.column}>
      <Input value={value} onChange={onChange} />
      <Button onClick={onAdd} />
    </div>
  );
};
