"use client";

import YouTube, { YouTubeProps } from "react-youtube";
export default function Video() {
  // const opts: YouTubeProps["opts"] = {
  //   height: "390",
  //   width: "640",
  // };
  return <YouTube videoId="2XID_W4neJo" iframeClassName="w-96 h-56 lg:w-full lg:h-full" />;
}
