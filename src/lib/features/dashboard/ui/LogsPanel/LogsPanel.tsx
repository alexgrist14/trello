import { useEffect, useState, type RefObject } from "react";
import { getLogsByBoard } from "../../../../shared/api/logs";
import type { Log } from "../../../../shared/types/log.type";
import * as styles from "./LogsPanel.css";
import { SvgProfile } from "../../../../shared/svg/SvgProfile";
import { getHumanDate } from "../../../../shared/utils/common";
import classNames from "classnames";

interface Props {
  isActive?: boolean;
  boardId: number;
  ref?: RefObject<HTMLDivElement | null>;
}

const LogsPanel = ({ isActive, boardId, ref }: Props) => {
  const [logs, setLogs] = useState<Log[]>([]);

  useEffect(() => {
    getLogsByBoard(boardId).then((data) => {
      setLogs(data);
    });
  }, [boardId]);

  return (
    <div
      ref={ref}
      className={classNames(styles.wrapper, isActive && styles.wrapperActive)}
    >
      <h3>Activity</h3>
      <div className={styles.container}>
        {logs && logs.length
          ? logs.map((log, i) => (
              <div className={styles.log} key={`${log.id} + ${i}`}>
                <div className={styles.text}>
                  <SvgProfile className={styles.svg} />
                  <div>
                    <span className={styles.title}>Anonymous user </span>{" "}
                    {log.action} {log.entity} {log.title}
                  </div>
                </div>
                <span> {getHumanDate(log.createdAt)}</span>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default LogsPanel;
