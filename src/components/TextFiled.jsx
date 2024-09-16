import React from "react";
import { mergeClasses } from "@utils/classUtils";
import { cva } from "class-variance-authority";

const TextFiled = () => {
  const InputVariant = cva("outline-none", {
    variants: {
      size: {
        small: "text-sm",
        medium: "text-base",
        large: "text-lg",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  });

  const VariantObject = {
    size: props.size || "medium",
  };

  return (
    <input
      type={props.type || "text"}
      className={mergeClasses(InputVariant(VariantObject), "")}
    />
  );
};

export default TextFiled;
