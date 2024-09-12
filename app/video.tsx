"use client";

import YouTube from "react-youtube";
export default function Video() {
  const opts = {
    height: "390",
    width: "640",
  };
  return <YouTube videoId="2XID_W4neJo" opts={opts} />;
}
