// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useNode, useEditor } from "@craftjs/core";
import { ROOT_NODE } from "@craftjs/utils";
import React, { useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import ArrowUp from "../../app/icons/ArrowUp";
import Delete from "../../app/icons/Delete";
import { Button } from "antd";

const IndicatorDiv = styled.div`
  height: 30px;
  margin-top: -29px;
  font-size: 12px;
  line-height: 12px;

  svg {
    fill: #fff;
    width: 15px;
    height: 15px;
  }
`;

export const RenderNode = ({ render }: any) => {
  const { id } = useNode();
  const { actions, query, isActive } = useEditor((_, query) => ({
    isActive: query.getEvent("selected").contains(id),
  }));

  const { isHover, dom, name, deletable, parent } = useNode((node) => ({
    isHover: node.events.hovered,
    dom: node.dom,
    name: node.data.custom.displayName || node.data.displayName,
    moveable: query.node(node.id).isDraggable(),
    deletable: query.node(node.id).isDeletable(),
    parent: node.data.parent,
    props: node.data.props,
  }));

  const currentRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if (dom) {
      if ((isActive || isHover) && id !== ROOT_NODE)
        dom.classList.add("component-selected");
      else dom.classList.remove("component-selected");
    }
  }, [dom, isActive, isHover]);

  const getPos = useCallback((dom: HTMLElement) => {
    const { top, left, bottom } = dom
      ? dom.getBoundingClientRect()
      : { top: 0, left: 0, bottom: 0 };
    return {
      top: `${top > 0 ? top : bottom}px`,
      left: `${left}px`,
    };
  }, []);

  const scroll = useCallback(() => {
    const { current: currentDOM } = currentRef;

    if (!currentDOM) return;
    const { top, left } = getPos(dom);
    currentDOM.style.top = top;
    currentDOM.style.left = left;
  }, [dom, getPos]);

  useEffect(() => {
    document
      .querySelector(".craftjs-renderer")
      .addEventListener("scroll", scroll);

    return () => {
      const el = document.querySelector(".craftjs-renderer");
      if (el) el.removeEventListener("scroll", scroll);
    };
  }, [scroll]);

  return (
    <>
      {(isHover || isActive) && id !== ROOT_NODE
        ? ReactDOM.createPortal(
            <IndicatorDiv
              ref={currentRef}
              className="p-2 text-white bg-greenest fixed flex items-center gap-x-2"
              style={{
                left: getPos(dom).left,
                top: getPos(dom).top,
                zIndex: 9999,
              }}
            >
              <div className="text-sm font-semibold">{name}</div>
              {id !== ROOT_NODE && (
                <Button
                  className="px-0 flex items-center bg-transparent border-none text-light hover:text-light"
                  onClick={() => {
                    actions.selectNode(parent);
                  }}
                >
                  <ArrowUp />
                </Button>
              )}
              {deletable ? (
                <Button
                  className="px-0 flex items-center bg-transparent border-none text-light hover:text-light"
                  onMouseDown={(e: React.MouseEvent) => {
                    e.stopPropagation();
                    actions.delete(id);
                  }}
                >
                  <Delete />
                </Button>
              ) : null}
            </IndicatorDiv>,
            document.querySelector(".page-container")
          )
        : null}
      {render}
    </>
  );
};
