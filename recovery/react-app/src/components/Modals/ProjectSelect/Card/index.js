import classNames from "classnames";
import { List } from "components/Base";
import React from "react";
import { getDisplayNameNew, getLocalTime } from "utils";

import styles from "./index.module.css";

export default class ProjectCard extends React.Component {
  handleClick = () => {
    const { onEnter, data } = this.props;
    if (data.status === "Terminating") {
      return;
    }
    onEnter && onEnter(data);
  };

  render() {
    const { type, data } = this.props;
    let name;
    let desc;
    let icon;
    let admin;
    let createTime;
    if (type === "devops") {
      name = getDisplayNameNew(data);
      desc = data.description || "-";
      admin = data.creator;
      createTime = data.create_time || data.createTime;
      icon = "strategy-group";
    } else {
      name = getDisplayNameNew(data);
      desc = data.description || "-";
      admin = data.creator;
      createTime = data.createTime;
      icon = "project";
    }

    const isTerminating = data.status === "Terminating" || data.status === "Pending";
    name = (
      <div className={classNames(styles.name, "ellipsis")} title={name}>
        {isTerminating ? name : <a>{name}</a>}
      </div>
    );

    desc = isTerminating ? t(data.status) : desc;

    const details = [
      { title: admin || "-", description: t("CREATOR") },
      {
        title: getLocalTime(createTime).format("YYYY-MM-DD HH:mm:ss"),
        description: t("CREATION_TIME"),
      },
    ];

    return (
      <List.Item
        className={classNames(styles.wrapper, {
          [styles.disabled]: isTerminating,
        })}
        icon={icon}
        title={name}
        description={desc}
        details={details}
        onClick={this.handleClick}
        withDomDesc
      />
    );
  }
}
