import * as module553 from "unpacked/module-553.js";
import { observer } from "unpacked/module-239.js";
import module3 from "unpacked/module-3.js";
import module26 from "unpacked/module-26.js";
import module63 from "unpacked/module-63.js";
import module186 from "unpacked/module-186.js";
import TypeSelect from "components/Base/TypeSelect";
import Module3501 from "unpacked/module-3501.js";
import fullscreen from "components/Modals/FullscreenModal";
import PodStore from "stores/pod";
import TerminalStore from "stores/terminal";
import styles from "./index.module.css";

class ContainerTerminalModal extends module553.Component {
  constructor(props) {
    super(props);
    const params = (props.match && props.match.params) || {};
    this.podStore = new PodStore();
    this.store = new TerminalStore({
      cluster: params.cluster,
      namespace: params.namespace,
      pod: params.podName,
      container: params.containerName,
      shell: "sh",
    });
    this.state = {
      container: { name: params.containerName },
      url: null,
    };
  }

  componentDidMount() {
    this.fetchPod();
  }

  fetchPod = async () => {
    const params = this.props.match.params;
    await this.podStore.fetchDetail({
      cluster: params.cluster,
      namespace: params.namespace,
      name: params.podName,
    });
    this.getContainerInfo(params.containerName);
  };

  getContainerInfo = async (containerName) => {
    const containers = module26(this.podStore, "detail.containers") || [];
    const container = containers.find((item) => item.name === containerName);
    if (container) {
      this.setState({ container });
    }
    const url = await this.store.kubeWebsocketUrl();
    this.setState({ url });
  };

  handleContainerChange = (container) => {
    this.store.kubectl.container = container.name;
    this.getContainerInfo(container.name);
  };

  getResourceInfo = (type) => {
    const resources = this.state.container.resources || {};
    const resourceType = resources[type];
    return (
      resourceType &&
      Object.keys(resourceType)
        .map((key) => `${key}: ${resourceType[key]}`)
        .join(" / ")
    );
  };

  renderContainerMsg() {
    const selectContainer = this.state.container;
    const defaultContainers = [
      {
        name: selectContainer.name,
        image: t("LOADING"),
      },
    ];
    const containers = module26(this.podStore, "detail.containers", defaultContainers);
    const containerOpts = containers.map((container) => ({
      label: container.name,
      value: container,
      uid: container.name,
      icon: "docker",
      description: t("IMAGE_VALUE", { value: container.image }),
    }));
    const command = selectContainer.command;
    return (
      <module186.Loading spinning={this.podStore.isLoading}>
        <div className={styles.summary}>
          <TypeSelect
            value={selectContainer}
            options={containerOpts}
            onChange={this.handleContainerChange}
          />
          <h6>{t("BASIC_INFORMATION")}</h6>
          <dl>
            <dt>{t("STATUS")}</dt>
            <dd>{selectContainer.ready ? t("RUNNING") : t("UPDATING")}</dd>
            <dt>{t("IMAGE")}</dt>
            <dd>{selectContainer.image}</dd>
            <dt>{t("COMMAND")}</dt>
            <dd>{module63(command) ? "-" : command.join(" ")}</dd>
            <dt>{t("RESOURCE_REQUESTS")}</dt>
            <dd>{this.getResourceInfo("requests")}</dd>
            <dt>{t("RESOURCE_LIMITS")}</dt>
            <dd>{this.getResourceInfo("limits")}</dd>
            <dt>{t("RESTART_PL")}</dt>
            <dd>{selectContainer.restartCount}</dd>
          </dl>
        </div>
      </module186.Loading>
    );
  }

  render() {
    return (
      <div className={styles.kubectl}>
        <div className={styles.terminalWrapper}>
          <div className={module3(styles.pane, styles.terminal)}>
            <Module3501 url={this.state.url} />
          </div>
        </div>
        <div className={styles.tipWrapper}>{this.renderContainerMsg()}</div>
      </div>
    );
  }
}

export default fullscreen(observer(ContainerTerminalModal));
