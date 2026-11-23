import module186 from "unpacked/module-186.js";
const { Button, Column, Columns, RadioGroup } = module186;
import classNames from "classnames";
import { Modal, ScrollLoad } from "components/Base";
import FilterInput from "components/Tables/Base/FilterInput";
import { get } from "lodash";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import React from "react";
import DevOpsStore from "stores/devops";
import ProjectStore from "stores/project";
import FederatedStore from "stores/project.federated";
import WorkspaceStore from "stores/workspace";
import { showNameAndAlias } from "utils";

import Card from "./Card";
import ClusterSelect from "./ClusterSelect";
import styles from "./index.module.css";

class ProjectSelectModal extends React.Component {
  constructor(props) {
    super(props);
    this.store = new WorkspaceStore();
    this.projectStore = new ProjectStore();
    this.fedProjectStore = new FederatedStore({ module: "namespaces" });
    this.devopsStore = new DevOpsStore();
    this.stores = {
      devops: this.devopsStore,
      federatedprojects: this.fedProjectStore,
      projects: this.projectStore,
    };
    this.state = {
      type: props.defaultType || "projects",
      cluster: props.cluster || "",
      search: "",
      filters: {},
    };
  }

  componentDidMount() {
    this.store.fetchDetail({ workspace: this.props.workspace });
    this.store.fetchClusters({ workspace: this.props.workspace }).then(() => {
      if (!this.state.cluster) {
        this.setState({
          cluster: get(this.store.clusters, "data[0].name", ""),
        });
      }
    });
  }

  get clusters() {
    return (this.store.clusters.data || []).map((item) => ({
      label: showNameAndAlias(item),
      value: item.name,
      cluster: item,
      disabled: !item.isReady,
    }));
  }

  get enabledActions() {
    const { workspace } = this.props;
    return {
      projects: globals.app.getActions({ workspace, module: "projects" }) || [],
      federatedprojects:
        globals.app.getActions({ workspace, module: "federatedprojects" }) || [],
      devops: globals.app.getActions({ workspace, module: "devops" }) || [],
    };
  }

  get types() {
    const types = [{ label: t("PROJECT_PL"), value: "projects" }];
    if (globals.app.isMultiCluster) {
      types.push({
        label: t("MULTI_CLUSTER_PROJECT_PL"),
        value: "federatedprojects",
      });
    }
    if (globals.app.hasKSModule("devops")) {
      types.push({ label: t("DEVOPS_PROJECT_PL"), value: "devops" });
    }
    return types;
  }

  get canCreate() {
    return this.enabledActions[this.state.type].includes("create");
  }

  get columns() {
    return [
      { dataIndex: "name", title: t("NAME"), search: true },
      { dataIndex: "alias", title: t("ALIAS"), search: true },
    ];
  }

  fetchData = (query) => {
    const { workspace } = this.props;
    const { cluster, search } = this.state;
    const params = { workspace, ...query };
    if (this.state.type === "federatedprojects") {
      params.labelSelector = `kubesphere.io/workspace=${workspace}`;
    } else {
      params.cluster = cluster;
      params.labelSelector =
        "kubefed.io/managed!=true, kubesphere.io/kubefed-host-namespace!=true";
    }
    if (search) {
      params.name = search;
    }
    this.stores[this.state.type].fetchList(params);
  };

  handleRefresh = () => this.fetchData();

  handleTypeChange = (type) => {
    if (this.state.type !== type) {
      this.setState({ type, search: "" }, this.fetchData);
    }
  };

  handleClusterChange = (cluster) => {
    this.setState({ cluster, search: "" }, this.fetchData);
  };

  handleEnterWorkspace = () => {
    const { workspace, onChange } = this.props;
    return onChange(`/workspaces/${workspace}`);
  };

  handleOnEnter = (item) => {
    const { workspace, onChange } = this.props;
    const { cluster } = this.state;
    if (this.state.type === "projects") {
      onChange(`/${workspace}/clusters/${cluster}/projects/${item.name}`);
    } else if (this.state.type === "federatedprojects") {
      onChange(`/${workspace}/federatedprojects/${item.name}`);
    } else if (item.namespace && cluster) {
      onChange(`/${workspace}/clusters/${cluster}/devops/${item.namespace}`);
    }
  };

  render() {
    const { visible, workspace, onCancel } = this.props;
    const { type, cluster } = this.state;
    const { detail } = this.store;
    const list = this.stores[type].list;
    const { data, total, page, isLoading } = toJS(list);
    const showClusterSelect = globals.app.isMultiCluster && type !== "federatedprojects";

    return (
      <Modal
        bodyClassName={styles.body}
        visible={visible}
        onCancel={onCancel}
        width={960}
        icon="enterprise"
        title={
          <a onClick={this.handleEnterWorkspace}>
            {showNameAndAlias(workspace, "workspace")}
          </a>
        }
        description={get(detail, "description") || t("WORKSPACE")}
        hideFooter
      >
        <div className={styles.bar}>
          <Columns className="is-variable is-1">
            <Column className="is-narrow">
              <div className={styles.radioGroupWrapper}>
                <RadioGroup
                  mode="button"
                  value={type}
                  options={this.types}
                  onChange={this.handleTypeChange}
                />
              </div>
            </Column>
            <Column>
              <div className={styles.searchWrapper}>
                {showClusterSelect && (
                  <ClusterSelect
                    className={styles.cluster}
                    options={this.clusters}
                    value={cluster}
                    onChange={this.handleClusterChange}
                  />
                )}
                <FilterInput
                  className={classNames(styles.search, {
                    [styles.withSelect]: showClusterSelect,
                  })}
                  placeholder={t("SEARCH_BY_NAME")}
                  columns={this.columns}
                  contentClassName={styles.content}
                  onChange={(_filters) => {
                    this.setState({ filters: _filters });
                    this.fetchData(_filters);
                  }}
                  filters={this.state.filters}
                />
              </div>
            </Column>
            <Column className="is-narrow">
              <div>
                <Button icon="refresh" type="flat" onClick={this.handleRefresh} />
              </div>
            </Column>
          </Columns>
        </div>
        <div className={styles.list}>
          <ScrollLoad
            wrapperClassName={styles.listWrapper}
            data={data}
            total={total}
            page={page}
            loading={isLoading}
            onFetch={this.fetchData}
          >
            {data.map((item) => (
              <Card
                key={item.uid || item.devops}
                data={item}
                type={type}
                onEnter={this.handleOnEnter}
              />
            ))}
          </ScrollLoad>
        </div>
      </Modal>
    );
  }
}

export default observer(ProjectSelectModal);
