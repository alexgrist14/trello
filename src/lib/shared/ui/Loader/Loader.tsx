import type { FC } from "react";
import * as styles from "./Loader.module.css";
import {
  PacmanLoader,
  PropagateLoader,
  PulseLoader,
  MoonLoader,
} from "react-spinners";
import classNames from "classnames";
import { accent } from "../../constants/common";

export const Loader: FC<{
  type?: "pulse" | "propogate" | "pacman" | "moon";
  color?: string;
  speedMultiplier?: number;
  className?: string;
}> = ({ type = "pulse", color, speedMultiplier, className }) => {
  return (
    <div className={classNames(styles.loader, className)}>
      {type === "pulse" && (
        <PulseLoader
          speedMultiplier={speedMultiplier}
          color={color || accent}
        />
      )}
      {type === "propogate" && (
        <PropagateLoader
          speedMultiplier={speedMultiplier}
          color={color || accent}
        />
      )}
      {type === "pacman" && (
        <PacmanLoader
          speedMultiplier={speedMultiplier}
          color={color || accent}
        />
      )}
      {type === "moon" && (
        <MoonLoader speedMultiplier={speedMultiplier} color={color || accent} />
      )}
    </div>
  );
};
