import PauseIcon from "../Icons/btn_pause";
import PlayIcon from "../Icons/btn_play";
import {
  buttonSize,
  coverAlign,
  coverAlignBase,
  coverBox,
  coverContainer,
  image,
  imageBackground,
  windowPadding,
  windowShadow,
} from "./style.css";

interface CoverProps {
  imageUrl: string;
  shape: "circle" | "rectangle" | "window";
  width: number;
  height: number;
  align?: "center" | "rightBottom";
  isPlay?: boolean;
  isBlur?: boolean;
  onPlay?: () => void;
}

export default function Cover(props: CoverProps) {
  const { imageUrl, shape, width, height, align = "center", isPlay, isBlur, onPlay } = props;

  return (
    <div className={`${coverBox} ${coverContainer[shape]}`} style={{ width: `${width}rem`, height: `${height}rem` }}>
      <img src={imageUrl} alt="커버" className={`${image} ${isPlay && isBlur && imageBackground}`} />
      {shape === "window" && <div className={windowShadow} />}

      {isPlay !== undefined && (
        <button
          type="button"
          onClick={onPlay}
          className={`${coverAlignBase} ${coverAlign[align]} ${shape === "window" && windowPadding}`}
          style={{ width: `${width}rem`, height: `${height}rem`, position: "absolute" }}>
          {isPlay ? (
            <PauseIcon className={`${width == 4 ? buttonSize["small"] : buttonSize["large"]}`} />
          ) : (
            <PlayIcon className={`${width == 4 ? buttonSize["small"] : buttonSize["large"]}`} />
          )}
        </button>
      )}
    </div>
  );
}
