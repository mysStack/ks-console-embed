import * as module553 from "unpacked/module-553.js";
import ContainerTerminalModal from "components/Modals/ContianerTerminal";
import KubeModal from "components/Modals/KubeCtl";

class TerminalApp extends module553.Component {
  pageClose() {
    window.opener = null;
    window.open("", "_self", "");
    window.close();
  }

  render() {
    const pathSplit = window.location.pathname.split("/");
    const isKubeCtrl = pathSplit[2] === "kubectl";
    const isNode = pathSplit[2] === "nodename";
    const match = {
      params: {
        containerName: pathSplit[9],
        cluster: pathSplit[3],
        namespace: pathSplit[5],
        podName: pathSplit[7],
      },
    };
    if (isKubeCtrl) {
      return (
        <KubeModal onCancel={this.pageClose} title="kubectl" cluster={pathSplit[3]} />
      );
    }
    if (isNode) {
      return (
        <KubeModal onCancel={this.pageClose} title={pathSplit[3]} nodename={pathSplit[3]} />
      );
    }
    return (
      <ContainerTerminalModal onCancel={this.pageClose} match={match} title="terminal" />
    );
  }
}

export default TerminalApp;
