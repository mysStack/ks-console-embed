import * as module553 from "unpacked/module-553.js";
import * as terminalPath from "./parseTerminalPath";
import ContainerTerminalModal from "components/Modals/ContianerTerminal";
import KubeModal from "components/Modals/KubeCtl";

class TerminalApp extends module553.Component {
  pageClose() {
    window.opener = null;
    window.open("", "_self", "");
    window.close();
  }

  render() {
    const parsed = terminalPath.parseTerminalPath(window.location.pathname);
    if (!parsed || !parsed.ok) {
      return (
        <div style={{ padding: 24 }}>
          Invalid terminal path
        </div>
      );
    }
    if (parsed.kind === "kubectl") {
      return (
        <KubeModal onCancel={this.pageClose} title="kubectl" cluster={parsed.cluster} />
      );
    }
    if (parsed.kind === "nodename") {
      return (
        <KubeModal onCancel={this.pageClose} title={parsed.nodename} nodename={parsed.nodename} />
      );
    }
    return (
      <ContainerTerminalModal onCancel={this.pageClose} match={{ params: parsed.params }} title="terminal" />
    );
  }
}

export default TerminalApp;
