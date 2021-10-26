import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({contacts}) => {
  return (
    <div>
      {contacts.map((el, index) => {
        return <Tile key={index} tile={el} />
      })}
    </div>
  );
};
