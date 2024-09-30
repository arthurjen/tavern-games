"use client";

import YouTube from "react-youtube";
import { YouTubeProps } from "react-youtube";
export default function Video() {
  const opts: YouTubeProps["opts"] = {
    height: "161",
    // width: "291",
  };
  return (
    <YouTube
      opts={opts}
      className=""
      videoId="2XID_W4neJo"
      iframeClassName="w-full"
    />
  );
}
