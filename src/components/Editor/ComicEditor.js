import React, { useRef, useEffect } from "react";
import WebViewer from "@pdftron/webviewer";
import "./ComicEditor.css";

const ComicEditor = () => {
  const viewer = useRef(null);

  // if using a class, equivalent of componentDidMount
  useEffect(() => {
    if (!viewer.current || viewer.current.children.length > 0) {
      return;
    } else {
      // If you prefer to use the Iframe implementation, you can replace this line with: WebViewer.Iframe(...)
      WebViewer.WebComponent(
        {
          path: "/lib",
          initialDoc: "/files/PDFTRON_about.pdf",
          licenseKey: "your_license_key", // sign up to get a free trial key at https://dev.apryse.com
        },
        viewer.current
      ).then((instance) => {
        const { documentViewer, annotationManager, Annotations } =
          instance.Core;

        documentViewer.addEventListener("documentLoaded", () => {
          const rectangleAnnot = new Annotations.RectangleAnnotation({
            PageNumber: 1,
            X: 100,
            Y: 150,
            Width: 200,
            Height: 50,
            Author: annotationManager.getCurrentUser(),
          });

          annotationManager.addAnnotation(rectangleAnnot);
          annotationManager.redrawAnnotation(rectangleAnnot);
        });
      });
    }
  }, []);

  return (
    <div className="ComicEditor">
      <div className="header">React sample</div>
      <div className="webviewer" ref={viewer}></div>
    </div>
  );
};

export default ComicEditor;
