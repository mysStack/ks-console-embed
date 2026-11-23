import module186 from "unpacked/module-186.js";
const { Dropdown, Icon, Menu } = module186;
import classNames from "classnames";
import React from "react";

import styles from "./index.module.css";

export default class ClusterSelect extends React.Component {
  handleOptionsClick = (e, key) => {
    this.props.onChange(key);
  };

  renderOptions() {
    const { options } = this.props;
    return (
      <Menu className={styles.options} onClick={this.handleOptionsClick}>
        {options.map((option) => (
          <Menu.MenuItem key={option.value}>{option.label}</Menu.MenuItem>
        ))}
      </Menu>
    );
  }

  renderControl() {
    const { className, value, options } = this.props;
    const current = (options || []).find((item) => item.value === value);
    return (
      <div className={classNames(styles.value, className)}>
        <span className={styles.label}>
          {t("CLUSTER_VALUE", { value: current ? current.label : value })}
        </span>
        <Icon className={styles.rightIcon} name="chevron-down" type="light" />
      </div>
    );
  }

  render() {
    return (
      <Dropdown theme="dark" content={this.renderOptions()}>
        {this.renderControl()}
      </Dropdown>
    );
  }
}
