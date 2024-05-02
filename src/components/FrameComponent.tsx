import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  /** Style props */
  propPadding?: CSSProperties["padding"];
  propHeight?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
  propHeight1?: CSSProperties["height"];
  propDisplay1?: CSSProperties["display"];
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propHeight2?: CSSProperties["height"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  propPadding,
  propHeight,
  propDisplay,
  propHeight1,
  propDisplay1,
  propWidth,
  propAlignSelf,
  propMinWidth,
  propAlignSelf1,
  propHeight2,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const palakKapoor2Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  const hahaThatsTerrifyingStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
      display: propDisplay1,
    };
  }, [propHeight1, propDisplay1]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const am3Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      alignSelf: propAlignSelf1,
      height: propHeight2,
    };
  }, [propMinWidth, propAlignSelf1, propHeight2]);

  return (
    <div className={styles.listWrapper} style={frameDiv1Style}>
      <div className={styles.list}>
        <img className={styles.listChild} alt="" src="/frame-1938-1@2x.png" />
        <div className={styles.listInner}>
          <div className={styles.frameParent}>
            <div className={styles.palakKapoorParent}>
              <h2 className={styles.palakKapoor} style={palakKapoor2Style}>
                Darrell Steward
              </h2>
              <div
                className={styles.hahaThatsTerrifying}
                style={hahaThatsTerrifyingStyle}
              >
                Haha that's terrifying 😂
              </div>
            </div>
            <div className={styles.frameWrapper} style={frameDiv2Style}>
              <div className={styles.amParent} style={frameDiv3Style}>
                <div className={styles.am} style={am3Style}>
                  01:55 pm
                </div>
                <div className={styles.unreadNo}>
                  <div className={styles.unreadNoChild} />
                  <b className={styles.b}>1</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
