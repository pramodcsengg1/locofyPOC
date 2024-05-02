import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  frame1938?: string;
  palakKapoor?: string;
  hahaThatsTerrifying?: string;
  am?: string;
  prop?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  frame1938,
  palakKapoor,
  hahaThatsTerrifying,
  am,
  prop,
  propPadding,
  propMinWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const am2Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.listWrapper} style={frameDivStyle}>
      <div className={styles.list}>
        <img className={styles.listChild} alt="" src={frame1938} />
        <div className={styles.listInner}>
          <div className={styles.frameParent}>
            <div className={styles.palakKapoorParent}>
              <h2 className={styles.palakKapoor}>{palakKapoor}</h2>
              <div className={styles.hahaThatsTerrifying}>
                {hahaThatsTerrifying}
              </div>
            </div>
            <div className={styles.conditionSplitter}>
              <div className={styles.valueTransformer}>
                <div className={styles.am} style={am2Style}>
                  {am}
                </div>
                <div className={styles.unreadNo}>
                  <div className={styles.errorHandler} />
                  <b className={styles.sequenceController}>{prop}</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
