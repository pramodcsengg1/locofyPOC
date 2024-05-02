import { FunctionComponent } from "react";
import styles from "./List.module.css";

const List: FunctionComponent = () => {
  return (
    <div className={styles.list}>
      <img className={styles.listChild} alt="" src="/frame-1938-1@2x.png" />
      <div className={styles.messageHeaderList}>
        <div className={styles.messageBubbleListParent}>
          <div className={styles.messageBubbleList}>
            <b className={styles.palakKapoor}>Darrell Steward</b>
            <div className={styles.hahaThatsTerrifying}>
              Haha that's terrifying 😂
            </div>
          </div>
          <div className={styles.amParent}>
            <div className={styles.am}>01:55 pm</div>
            <div className={styles.unreadNo}>
              <div className={styles.palakKapoorList} />
              <b className={styles.b}>1</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
