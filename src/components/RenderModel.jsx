"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import { isWebGLAvailable, getWebGLErrorMessage } from "three/examples/jsm/capabilities/WebGL.js";

const RenderModel = ({ children, className }) => {
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    // Only check in the browser
    if (typeof window !== "undefined") {
      const available = isWebGLAvailable();
      setWebglSupported(!!available);
    }
  }, []);

  if (!webglSupported) {
    const message = getWebGLErrorMessage();
    return (
      <div
        className={clsx(
          "flex flex-col items-center justify-center w-screen h-screen text-white text-center bg-black/70",
          className
        )}
        dangerouslySetInnerHTML={{ __html: message.outerHTML }}
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
