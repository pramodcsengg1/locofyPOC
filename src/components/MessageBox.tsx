import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./MessageBox.module.css";

export type MessageBoxType = {
  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propMargin?: CSSProperties["margin"];
};

const MessageBox: FunctionComponent<MessageBoxType> = ({
  propAlignSelf,
  propFlex,
  propMargin,
}) => {
  const messageBoxStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  const palakKapoor1Style: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  return (
    <div className={styles.messagebox} style={messageBoxStyle}>
      <div className={styles.list}>
        <img className={styles.listChild} alt="" src="/frame-1938-1@2x.png" />
        <div className={styles.frameParent}>
          <div className={styles.palakKapoorParent}>
            <h2 className={styles.palakKapoor} style={palakKapoor1Style}>
              Jane Cooper
            </h2>
            <div className={styles.hahaThatsTerrifying}>
              Haha that's terrifying 😂
            </div>
          </div>
          <div className={styles.amParent}>
            <div className={styles.am}>07:38 am</div>
            <img
              className={styles.tick16px}
              loading="lazy"
              alt=""
              src="/tick--16px.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
