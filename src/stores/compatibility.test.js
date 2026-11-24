import { getRulesUrl } from './user'
import { getProjectResourceUrl } from './project'
import { getWorkspaceClustersUrl } from './workspace'
import ProjectMonitoring from './monitoring/project'
import PodMonitor from './monitoring/pod'
import WorkloadRankStore from './rank/workload'
import StorageClassStore from './storageClass'
import VolumeSnapshotStore from './volumeSnapshot'

describe('KubeSphere v4 API compatibility', () => {
  it('uses the v1beta1 role template API for project rules', () => {
    expect(
      getRulesUrl({
        name: 'admin',
        cluster: 'host',
        workspace: 'dev-workspace',
        namespace: 'dev-wes',
      })
    ).toBe(
      'clusters/host/kapis/iam.kubesphere.io/v1beta1/users/admin/roletemplates?scope=namespace&namespace=dev-wes'
    )
  })

  it('uses the v1beta1 namespace API without the removed klusters path', () => {
    expect(
      getProjectResourceUrl({
        workspace: 'dev-workspace',
        cluster: 'host',
      })
    ).toBe(
      'kapis/tenant.kubesphere.io/v1beta1/workspaces/dev-workspace/namespaces'
    )
  })

  it('uses the v1beta1 workspace cluster API', () => {
    expect(getWorkspaceClustersUrl('dev-workspace')).toBe(
      'kapis/tenant.kubesphere.io/v1beta1/workspaces/dev-workspace/clusters'
    )
  })

  it('uses the v1beta1 namespace metrics API for project overview', () => {
    global.globals = { app: { isMultiCluster: false } }
    const store = new ProjectMonitoring()

    expect(
      store.getApi({ workspace: 'dev-workspace', namespace: 'dev-wes' })
    ).toBe('kapis/monitoring.kubesphere.io/v1beta1/namespace_metrics')
  })

  it('uses the v1beta1 workload metrics API for workload ranking', () => {
    global.globals = { app: { isMultiCluster: false } }
    const store = new WorkloadRankStore({ namespaces: 'dev-wes' })

    expect(store.fetchUrl).toBe(
      'kapis/monitoring.kubesphere.io/v1beta1/workload_metrics'
    )
  })

  it('uses the v1beta1 pod metrics API instead of the removed namespaces/pods path', () => {
    global.globals = { app: { isMultiCluster: false } }
    const store = new PodMonitor()

    expect(
      store.getApi({
        namespace: 'dev-wms',
        workloadKind: 'deployments',
        workloadName: 'wms-admin-server',
      })
    ).toBe('kapis/monitoring.kubesphere.io/v1beta1/pod_metrics')
    expect(
      store.getApi({
        namespace: 'dev-wms',
        pod: 'wms-admin-server-cff8c469f-j9bqx',
      })
    ).toBe('kapis/monitoring.kubesphere.io/v1beta1/pod_metrics')
    expect(
      store.handleParams({
        cluster: 'host',
        namespace: 'dev-wms',
        ownerKind: 'ReplicaSet',
        pod: 'wms-admin-server-cff8c469f-j9bqx',
      })
    ).toEqual({
      cluster: 'host',
      namespace: 'dev-wms',
      ownerKind: 'ReplicaSet',
    })
  })

  it('lists storageclasses via storage.k8s.io kapis (not removed resources API)', () => {
    const store = new StorageClassStore()
    expect(store.getResourceUrl({ cluster: 'host' })).toBe(
      'kapis/storage.k8s.io/v1/klusters/host/storageclasses'
    )
  })

  it('lists volumesnapshots via snapshot.storage.k8s.io kapis', () => {
    const store = new VolumeSnapshotStore()
    expect(store.getResourceUrl({ cluster: 'host', namespace: 'dev-db' })).toBe(
      'kapis/snapshot.storage.k8s.io/v1/klusters/host/namespaces/dev-db/volumesnapshots'
    )
  })
})
