import styles from "./styles.module.css";
import RightArrow from "./assets/arrow_right.svg";
import LeftArrow from "./assets/arrow_left.svg";
import Close from "./assets/close.svg";

export const LightBox = ({
  state,
  event,
  data,
  dataArr,
  imageWidth = "50vw",
  imageHeight = "60vh",
  thumbnailHeight = 50,
  thumbnailWidth = 50,
  setImageIndex,
  imageIndex,
}: LightBoxTypes) => {
  if (state) {
    const arrowsHandler = (arrow: ArrowType) => {
      const arrayLength = data.length - 1;
      switch (arrow) {
        case "next":
          if (imageIndex >= arrayLength) {
            setImageIndex(0);
          } else {
            setImageIndex((prevState: ImageIndexType) => prevState + 1);
          }
          break;
        case "prev":
          if (imageIndex <= 0) {
            setImageIndex(arrayLength);
          } else {
            setImageIndex((prevState: ImageIndexType) => prevState - 1);
          }
          break;
        default:
          setImageIndex(0);
      }
    };
    return (
      <div className={styles.reactLightboxContainer}>
        <div className={styles.reactLightboxCloseButtonContainer}>
          <button
            className={styles.reactLightboxCloseButton}
            onClick={() => {
              event(false, imageIndex);
              setImageIndex(0);
            }}
          >
            <Close fill="#fff" />
          </button>
        </div>
        <div className={styles.reactLightboxArea}>
          <img
            src={data[imageIndex].image}
            alt={data[imageIndex].title}
            style={{ maxHeight: imageHeight, maxWidth: imageWidth }}
          />
          <div className={styles.reactLightboxArrowRight}>
            <button
              className={styles.reactLightboxButton}
              onClick={() => arrowsHandler("next")}
            >
              <RightArrow />
            </button>
          </div>
          <div className={styles.reactLightboxArrowLeft}>
            <button
              className={styles.reactLightboxButton}
              onClick={() => arrowsHandler("prev")}
            >
              <LeftArrow />
            </button>
          </div>
        </div>
        <div
          style={{
            position: "fixed",
            bottom: "10px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          {data &&
            data.map((item, index) => (
              <img
                key={item.id}
                src={item.image}
                alt={item.title}
                height={thumbnailHeight}
                width={thumbnailWidth}
                style={{
                  objectFit: "cover",
                  margin: "0 0.5rem",
                  borderRadius: "0.2rem",
                }}
                onClick={() => setImageIndex(index)}
              />
            ))}
          {dataArr &&
            dataArr.map((item, index) => (
              <img
                key={item}
                src={item}
                alt={item}
                height={thumbnailHeight}
                width={thumbnailWidth}
                style={{
                  objectFit: "cover",
                  margin: "0 0.5rem",
                  borderRadius: "0.2rem",
                }}
                onClick={() => setImageIndex(index)}
              />
            ))}
        </div>
      </div>
    );
  }

  return null;
};
