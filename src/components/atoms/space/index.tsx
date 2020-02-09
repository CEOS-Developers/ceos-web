import React from "react";
import styled from "styled-components";

type IProps = {
  className?: string;
  direction?: "COL" | "ROW";
  level?: number;
  size?: number;
  pixel?: boolean;
};

export default function Space(props: IProps) {
  const _Space = styled.div`
    background-color: transparent;
    ${props.direction === "COL" &&
      `
            width:0.1px;
            height:${4 + props.level * 8}px;
        `}
    ${props.direction === "ROW" &&
      `
            height:0.1px;
            width:${4 + props.level * 8}px;
        `}
  `;
  return <_Space className={props.className} />;
}

const defaultProps = {
  level: 0,
  direction: "COL"
};

Space.defaultProps = defaultProps;
