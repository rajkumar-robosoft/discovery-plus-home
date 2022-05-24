import Image from "../../atoms/image";
import Link from "../../atoms/link";
import "./style.css";

const RailsDesc = ({
  heading,
  subHeading,
  tag1,
  tag2,
  playBtnSrc,
  playUrl,
  playBtnWidth,
  playBtnHeight,
}) => (
  <div className="rails-desc">
    <div>
      <span className="rails-heading">{heading}</span>
    </div>
    <div className="sub-heading-area">
      <span className="rails-subheading">{subHeading}</span>
    </div>

    <div className="tags-area">
      <span className="rails-tags">{tag1}</span>
      <span className="rails-tags">{tag2}</span>
    </div>

    <div className="play-button">
      <Link
        url={playUrl}
        name={
          <Image
            src={playBtnSrc}
            width={playBtnWidth}
            height={playBtnHeight}
            alt="PLAY"
          />
        }
      />
    </div>
  </div>
);

export default RailsDesc;
