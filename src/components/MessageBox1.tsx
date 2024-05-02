import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./MessageBox1.module.css";

export type MessageBox1Type = {
  /** Style props */
  propMargin?: CSSProperties["margin"];
};

const MessageBox1: FunctionComponent<MessageBox1Type> = ({ propMargin }) => {
  const palakKapoorStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  return (
    <div className={styles.messagebox}>
      <div className={styles.list}>
        <img
          className={styles.formatConverterIcon}
          loading="lazy"
          alt=""
          src="/frame-1938@2x.png"
        />
        <div className={styles.filterChain}>
          <div className={styles.dataSorter}>
            <div className={styles.dataMapper}>
              <h2 className={styles.palakKapoor} style={palakKapoorStyle}>
                Cody Fisher
              </h2>
            </div>
            <div className={styles.hahaThatsTerrifying}>Haha oh man</div>
          </div>
          <div className={styles.outputSplitter}>
            <div className={styles.am}>05:14 pm</div>
            <img
              className={styles.iconlylightpin}
              loading="lazy"
              alt=""
              src="/iconlylightpin.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBox1;
