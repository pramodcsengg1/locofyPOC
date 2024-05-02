import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propFlexDirection?: CSSProperties["flexDirection"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  propDisplay,
  propMinWidth,
  propFlexDirection,
  propAlignSelf,
  propFlex,
}) => {
  const am3Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const unreadNoStyle: CSSProperties = useMemo(() => {
    return {
      flexDirection: propFlexDirection,
    };
  }, [propFlexDirection]);

  const bStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
    };
  }, [propAlignSelf, propFlex]);

  return (
    <div className={styles.listWrapper}>
      <div className={styles.list}>
        <img
          className={styles.listChild}
          loading="lazy"
          alt=""
          src="/frame-1938-1@2x.png"
        />
        <div className={styles.listInner}>
          <div className={styles.frameParent}>
            <div className={styles.palakKapoorParent}>
              <b className={styles.palakKapoor}>Darrell Steward</b>
              <div className={styles.hahaThatsTerrifying}>
                Haha that's terrifying 😂
              </div>
            </div>
            <div className={styles.amParent}>
              <div className={styles.am} style={am3Style}>
                01:55 pm
              </div>
              <div className={styles.unreadNo} style={unreadNoStyle}>
                <div className={styles.unreadNoChild} />
                <b className={styles.b} style={bStyle}>
                  1
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
