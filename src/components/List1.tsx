import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./List1.module.css";

export type List1Type = {
  frame1938?: string;
  palakKapoor?: string;
  hahaThatsTerrifying?: string;
  am?: string;
  prop?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const List1: FunctionComponent<List1Type> = ({
  frame1938,
  palakKapoor,
  hahaThatsTerrifying,
  am,
  prop,
  propMinWidth,
}) => {
  const am2Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.list}>
      <img
        className={styles.userInfoHeaderList}
        loading="lazy"
        alt=""
        src={frame1938}
      />
      <div className={styles.palakKapoorListWrapper}>
        <div className={styles.palakKapoorList}>
          <div className={styles.hahaIcon}>
            <div className={styles.palakKapoor}>{palakKapoor}</div>
            <div className={styles.hahaThatsTerrifying}>
              {hahaThatsTerrifying}
            </div>
          </div>
          <div className={styles.searchIcon}>
            <div className={styles.unreadNumberList}>
              <div className={styles.am} style={am2Style}>
                {am}
              </div>
              <div className={styles.unreadNo}>
                <div className={styles.palakKapoorList1} />
                <b className={styles.b}>{prop}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List1;
