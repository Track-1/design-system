import { Meta } from "@storybook/react";

import { useState } from "react";
import Cover from ".";

export default {
  component: Cover,
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#0D0E11" }],
    },
  },
} as Meta;

export const Default = {
  render: function Render() {
    const [isPlay, setIsplay] = useState(false);

    function onPlay() {
      setIsplay((prev) => !prev);
    }

    return (
      <Cover
        imageUrl="https://d19ot9c0ybvi5o.cloudfront.net/resized-image/1690444546685-KakaoTalk_Photo_2023-07-27-16-55-08.jpeg?Expires=1702671314&Key-Pair-Id=KHRWYD6UA5KH7&Signature=W3cq2Rxvm42kfiA-b3ypXr-zTrO~fT41Ie7haJH3FU~lMASEtcy~rtdvb-xPW0X~qmB4IB5Nyz5VsdFWqEMXCcb4rYLnPR1Rq7KSIudbY492Lj1BEj7H495dshCgpC-krLNFdVShaxd9qj-SUyYuAq1CLgPDTAPh5rO8ZxuCWFgdKjymYh5iGHc5QA5R7HzXCJRIZmynJLAuylpCRXLWiB96n6CN1q9Kon1ILohxyum-LychSb8teuatL6bWfpVV-2Bsl~C2XGiyv1qTYuvcu9mAb3dJn2sX2tb2qLT7CICh9ONAJNocxIIoTifhSpUEjnJXRQXbiuCMLRjafsorLA__"
        shape="circle"
        width={12}
        height={12}
        isPlay={isPlay}
        onPlay={onPlay}
      />
    );
  },
  name: "cover",
};

export const CircleLarge = {
  render: function Render() {
    const [isPlay, setIsplay] = useState(false);

    function onPlay() {
      setIsplay((prev) => !prev);
    }

    return (
      <Cover
        imageUrl="https://d19ot9c0ybvi5o.cloudfront.net/resized-image/1690444546685-KakaoTalk_Photo_2023-07-27-16-55-08.jpeg?Expires=1702671314&Key-Pair-Id=KHRWYD6UA5KH7&Signature=W3cq2Rxvm42kfiA-b3ypXr-zTrO~fT41Ie7haJH3FU~lMASEtcy~rtdvb-xPW0X~qmB4IB5Nyz5VsdFWqEMXCcb4rYLnPR1Rq7KSIudbY492Lj1BEj7H495dshCgpC-krLNFdVShaxd9qj-SUyYuAq1CLgPDTAPh5rO8ZxuCWFgdKjymYh5iGHc5QA5R7HzXCJRIZmynJLAuylpCRXLWiB96n6CN1q9Kon1ILohxyum-LychSb8teuatL6bWfpVV-2Bsl~C2XGiyv1qTYuvcu9mAb3dJn2sX2tb2qLT7CICh9ONAJNocxIIoTifhSpUEjnJXRQXbiuCMLRjafsorLA__"
        shape="circle"
        width={22}
        height={22}
        onPlay={onPlay}
      />
    );
  },
  name: "circle-large",
};

export const RectangleSmall = {
  render: function Render() {
    const [isPlay, setIsplay] = useState(false);

    function onPlay() {
      setIsplay((prev) => !prev);
    }

    return (
      <Cover
        imageUrl="https://d19ot9c0ybvi5o.cloudfront.net/resized-image/1690444546685-KakaoTalk_Photo_2023-07-27-16-55-08.jpeg?Expires=1702671314&Key-Pair-Id=KHRWYD6UA5KH7&Signature=W3cq2Rxvm42kfiA-b3ypXr-zTrO~fT41Ie7haJH3FU~lMASEtcy~rtdvb-xPW0X~qmB4IB5Nyz5VsdFWqEMXCcb4rYLnPR1Rq7KSIudbY492Lj1BEj7H495dshCgpC-krLNFdVShaxd9qj-SUyYuAq1CLgPDTAPh5rO8ZxuCWFgdKjymYh5iGHc5QA5R7HzXCJRIZmynJLAuylpCRXLWiB96n6CN1q9Kon1ILohxyum-LychSb8teuatL6bWfpVV-2Bsl~C2XGiyv1qTYuvcu9mAb3dJn2sX2tb2qLT7CICh9ONAJNocxIIoTifhSpUEjnJXRQXbiuCMLRjafsorLA__"
        shape="rectangle"
        width={4}
        height={4}
        isPlay={isPlay}
        isBlur
        onPlay={onPlay}
      />
    );
  },
  name: "rectangle-small",
};

export const RectangleLarge = {
  render: function Render() {
    const [isPlay, setIsplay] = useState(false);

    function onPlay() {
      setIsplay((prev) => !prev);
    }

    return (
      <Cover
        imageUrl="https://d19ot9c0ybvi5o.cloudfront.net/resized-image/1690444546685-KakaoTalk_Photo_2023-07-27-16-55-08.jpeg?Expires=1702671314&Key-Pair-Id=KHRWYD6UA5KH7&Signature=W3cq2Rxvm42kfiA-b3ypXr-zTrO~fT41Ie7haJH3FU~lMASEtcy~rtdvb-xPW0X~qmB4IB5Nyz5VsdFWqEMXCcb4rYLnPR1Rq7KSIudbY492Lj1BEj7H495dshCgpC-krLNFdVShaxd9qj-SUyYuAq1CLgPDTAPh5rO8ZxuCWFgdKjymYh5iGHc5QA5R7HzXCJRIZmynJLAuylpCRXLWiB96n6CN1q9Kon1ILohxyum-LychSb8teuatL6bWfpVV-2Bsl~C2XGiyv1qTYuvcu9mAb3dJn2sX2tb2qLT7CICh9ONAJNocxIIoTifhSpUEjnJXRQXbiuCMLRjafsorLA__"
        shape="rectangle"
        width={16}
        height={16}
        align={"rightBottom"}
        isPlay={isPlay}
        onPlay={onPlay}
      />
    );
  },
  name: "rectangle-large",
};

export const Window = {
  render: function Render() {
    const [isPlay, setIsplay] = useState(false);

    function onPlay() {
      setIsplay((prev) => !prev);
    }

    return (
      <Cover
        imageUrl="https://d19ot9c0ybvi5o.cloudfront.net/resized-image/1690444546685-KakaoTalk_Photo_2023-07-27-16-55-08.jpeg?Expires=1702671314&Key-Pair-Id=KHRWYD6UA5KH7&Signature=W3cq2Rxvm42kfiA-b3ypXr-zTrO~fT41Ie7haJH3FU~lMASEtcy~rtdvb-xPW0X~qmB4IB5Nyz5VsdFWqEMXCcb4rYLnPR1Rq7KSIudbY492Lj1BEj7H495dshCgpC-krLNFdVShaxd9qj-SUyYuAq1CLgPDTAPh5rO8ZxuCWFgdKjymYh5iGHc5QA5R7HzXCJRIZmynJLAuylpCRXLWiB96n6CN1q9Kon1ILohxyum-LychSb8teuatL6bWfpVV-2Bsl~C2XGiyv1qTYuvcu9mAb3dJn2sX2tb2qLT7CICh9ONAJNocxIIoTifhSpUEjnJXRQXbiuCMLRjafsorLA__"
        shape="window"
        width={16}
        height={19}
        align={"rightBottom"}
        isPlay={isPlay}
        onPlay={onPlay}
      />
    );
  },
  name: "window",
};
