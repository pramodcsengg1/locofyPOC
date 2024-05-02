import { FunctionComponent, useEffect } from "react";
import MessageBox1 from "./MessageBox1";
import MessageBox from "./MessageBox";
import List1 from "./List1";
import FrameComponent2 from "./FrameComponent2";
import List from "./List";
import styles from "./MessagesDrawer.module.css";

const MessagesDrawer: FunctionComponent = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={styles.messagesdrawer} data-animate-on-scroll>
      <div className={styles.userinfoheaderWrapper}>
        <div className={styles.userinfoheader}>
          <div className={styles.dragTheCorrectCursorCompon}>
            <div className={styles.ellipseParent}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/ellipse-127@2x.png"
              />
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/group-1934.svg"
              />
            </div>
            <img
              className={styles.iconlylightarrowDown2}
              loading="lazy"
              alt=""
              src="/iconlylightarrow--down-2.svg"
            />
          </div>
        </div>
      </div>
      <section className={styles.messagescontainer}>
        <div className={styles.messagesearchWrapper}>
          <div className={styles.messagesearch}>
            <div className={styles.search}>
              <div className={styles.searchinputcontainer}>
                <img className={styles.icon} alt="" src="/icon.svg" />
                <input
                  className={styles.searchinput}
                  placeholder="Search or start a new chat"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.messageboxParent}>
            <MessageBox1 propMargin="unset" />
            <div className={styles.messageboxWrapper}>
              <MessageBox
                propAlignSelf="unset"
                propFlex="1"
                propMargin="unset"
              />
            </div>
            <div className={styles.messageBoxWrapper}>
              <div className={styles.messageBox}>
                <List1
                  frame1938="/frame-1938-2@2x.png"
                  palakKapoor="Floyd Miles"
                  hahaThatsTerrifying="perfect!"
                  am="11:49 pm"
                  prop="5+"
                />
                <List1
                  frame1938="/frame-1938-3@2x.png"
                  palakKapoor="Marvin McKinney"
                  hahaThatsTerrifying="omg, this is amazing..."
                  am="07:40 am"
                  prop="1"
                  propMinWidth="46px"
                />
                <List1
                  frame1938="/frame-1938-4@2x.png"
                  palakKapoor="Courtney Henry"
                  hahaThatsTerrifying="aww"
                  am="08:20 pm"
                  prop="1"
                  propMinWidth="48px"
                />
              </div>
            </div>
          </div>
          <div className={styles.listWrapper}>
            <div className={styles.list}>
              <img
                className={styles.listChild}
                loading="lazy"
                alt=""
                src="/frame-1938-5@2x.png"
              />
              <div className={styles.listInner}>
                <div className={styles.frameGroup}>
                  <div className={styles.palakKapoorParent}>
                    <div className={styles.palakKapoor}>Dianne Russell</div>
                    <div className={styles.hahaThatsTerrifying}>
                      I'll be there in 2 mins
                    </div>
                  </div>
                  <div className={styles.amParent}>
                    <div className={styles.am}>01:09 am</div>
                    <div className={styles.unreadNo}>
                      <div className={styles.unreadNoChild} />
                      <b className={styles.b}>1</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent2 />
          <FrameComponent2
            propDisplay="inline-block"
            propMinWidth="44px"
            propFlexDirection="row"
            propAlignSelf="unset"
            propFlex="1"
          />
          <FrameComponent2
            propDisplay="unset"
            propMinWidth="unset"
            propFlexDirection="row"
            propAlignSelf="unset"
            propFlex="1"
          />
        </div>
        <div className={styles.newChatIcon}>
          <div className={styles.listParent}>
            <List />
            <List />
            <List />
          </div>
        </div>
        <div className={styles.wrapperNewchaticon}>
          <img
            className={styles.newchaticon}
            loading="lazy"
            alt=""
            src="/newchaticon.svg"
          />
        </div>
      </section>
    </div>
  );
};

export default MessagesDrawer;
