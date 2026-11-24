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
import * as latestOnly from "./latestOnly";
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
    this._latest = latestOnly.createLatestOnly();
    this._unmounted = false;
    this.state = {
      container: { name: params.containerName },
      url: null,
    };
  }

  componentDidMount() {
    this.fetchPod();
  }

  componentWillUnmount() {
    this._unmounted = true;
  }

  fetchPod = async () => {
    const params = (this.props.match && this.props.match.params) || {};
    if (!params.cluster || !params.namespace || !params.podName) {
      return;
    }
    try {
      await this.podStore.fetchDetail({
        cluster: params.cluster,
        namespace: params.namespace,
        name: params.podName,
      });
      if (this._unmounted) {
        return;
      }
      await this.getContainerInfo(params.containerName);
    } catch (err) {
      console.error("[recovery] container terminal fetchPod failed", err);
    }
  };

  getContainerInfo = async (containerName) => {
    const seq = this._latest.next();
    try {
      const containers = module26(this.podStore, "detail.containers") || [];
      const container = containers.find((item) => item.name === containerName);
      if (container && !this._unmounted && this._latest.isCurrent(seq)) {
        this.setState({ container });
      }
      if (containerName) {
        this.store.kubectl.container = containerName;
      }
      const url = await this.store.kubeWebsocketUrl();
      if (this._unmounted || !this._latest.isCurrent(seq)) {
        return;
      }
      this.setState({ url });
    } catch (err) {
      console.error("[recovery] container terminal getContainerInfo failed", err);
    }
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
