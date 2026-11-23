import * as module553 from "unpacked/module-553.js";
import module186 from "unpacked/module-186.js";
import styles from "unpacked/module-5051.js";
import { loadProjectSelect } from "./loadModal.cjs";

const React = module553.default || module553;
const Component = module553.Component || (React && React.Component);
if (typeof Component !== "function") {
  throw new Error("selector-missing-react-component");
}

function projectTitle(detail) {
  if (!detail) {
    return "";
  }
  if (typeof detail === "string") {
    return detail;
  }
  if (detail.display_name) {
    return detail.display_name;
  }
  if (detail.aliasName) {
    return `${detail.aliasName}(${detail.name})`;
  }
  return detail.name || "";
}

export default class ProjectSelector extends Component {
  constructor(props) {
    super(props);
    this.state = { showSelect: false, Modal: null };
    this.showSelect = this.showSelect.bind(this);
    this.hideSelect = this.hideSelect.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  showSelect() {
    this.setState({ showSelect: true });
    if (this.state.Modal) {
      return;
    }
    loadProjectSelect()
      .then((mod) => {
        this.setState({ Modal: mod && (mod.default || mod) });
      })
      .catch((error) => {
        window.__ksSelectorModalError = String((error && error.message) || error);
        this.setState({ showSelect: false });
      });
  }

  hideSelect() {
    this.setState({ showSelect: false });
  }

  handleSelect(value) {
    this.hideSelect();
    this.props.onChange(value);
  }

  render() {
    const { title, type, detail, isEdge, workspace } = this.props;
    const safeDetail = detail || {};
    const name = projectTitle(safeDetail);
    const description = safeDetail.description || title;
    const SelectModal = this.state.Modal;
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: styles.titleWrapper, onClick: this.showSelect },
        React.createElement(
          "div",
          { className: styles.icon },
          React.createElement(module186.Icon, {
            name: type === "devops" ? "strategy-group" : "project",
            size: 40,
            type: "light",
          })
        ),
        React.createElement(
          "div",
          { className: styles.text },
          React.createElement("div", { className: "h6", title: name }, name),
          React.createElement("p", null, description)
        )
      ),
      this.state.showSelect && SelectModal
        ? React.createElement(SelectModal, {
            defaultType: type,
            cluster: safeDetail.cluster,
            workspace: safeDetail.workspace || workspace,
            isEdge,
            visible: true,
            onChange: this.handleSelect,
            onCancel: this.hideSelect,
          })
        : null
    );
  }
}

ProjectSelector.defaultProps = {
  type: "projects",
  detail: {},
  onChange() {},
};
