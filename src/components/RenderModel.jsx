"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import clsx from "clsx";

let isWebGLAvailable = null;
let getWebGLErrorMessage = null;

try {
  const cap = await import("three/examples/jsm/capabilities/WebGL.js");
  isWebGLAvailable = cap.isWebGLAvailable;
  getWebGLErrorMessage = cap.getWebGLErrorMessage;
} catch (e) {
  console.warn("Could not load WebGL capability helper:", e);
}

const RenderModel = ({ children, className }) => {
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof isWebGLAvailable === "function") {
      setWebglSupported(!!isWebGLAvailable());
    } else {
      // assume unsupported if helper not available
      setWebglSupported(false);
    }
  }, []);

  if (!webglSupported) {
    const messageDiv = (typeof getWebGLErrorMessage === "function")
      ? getWebGLErrorMessage()
      : document.createElement("div").appendChild(
          document.createTextNode("WebGL not supported on this device.")
        );
    return (
      <div
        className={clsx(
          "flex flex-col items-center justify-center w-screen h-screen text-white text-center bg-black/70",
          className
        )}
        dangerouslySetInnerHTML={{ __html: messageDiv.outerHTML || messageDiv }}
      />
    );
  }

  return (
    <Canvas
      className={clsx("w-screen h-screen -z-10 relative", className)}
      shadows={false}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>{children}</Suspense>
      <Environment preset="dawn" />
    </Canvas>
  );
};

export default RenderModel;
