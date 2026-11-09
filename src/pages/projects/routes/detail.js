/*
 * This file is part of KubeSphere Console.
 * Copyright (C) 2019 The KubeSphere Console Authors.
 *
 * KubeSphere Console is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * KubeSphere Console is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with KubeSphere Console.  If not, see <https://www.gnu.org/licenses/>.
 */

import { lazy } from 'react'

const GatewayDetail = lazy(() =>
  import(
    /* webpackChunkName: "project-gateway-detail" */ 'clusters/containers/Gateway/Detail'
  )
)
const DeploymentDetail = lazy(() =>
  import(
    /* webpackChunkName: "project-deployment-detail" */ '../containers/Deployments/Detail'
  )
)
const StatefulSetDetail = lazy(() =>
  import(
    /* webpackChunkName: "project-statefulset-detail" */ '../containers/StatefulSets/Detail'
  )
)
const DaemonSetDetail = lazy(() =>
  import(
    /* webpackChunkName: "project-daemonset-detail" */ '../containers/DaemonSets/Detail'
  )
)
const JobDetail = lazy(() =>
  import(
    /* webpackChunkName: "project-job-detail" */ '../containers/Jobs/Detail'
  )
)
const CronJobDetail = lazy(() =>
  import(
    /* webpackChunkName: "project-cronjob-detail" */ '../containers/CronJobs/Detail'
  )
)
const PodDetail = lazy(() =>
  import(
    /* webpackChunkName: "project-pod-detail" */ '../containers/Pods/Detail'
  )
)
const ContainerDetail = lazy(() =>
  import(
    /* webpackChunkName: "project-container-detail" */ '../containers/Pods/Containers/Detail'
  )
)
const ServiceDetail = lazy(() =>
  import(
    /* webpackChunkName: "project-service-detail" */ '../containers/Services/Detail'
  )
)
const RouteDetail = lazy(() =>
  import(
    /* webpackChunkName: "project-ingress-detail" */ '../containers/Routes/Detail'
  )
)
const VolumeDetail = lazy(() =>
  import(
    /* webpackChunkName: "project-volume-detail" */ '../containers/Volumes/Detail'
  )
)
const VolumeSnapshotDetail = lazy(() =>
  import(
    /* webpackChunkName: "project-volume-snapshot-detail" */ '../containers/VolumeSnapshots/Detail'
  )
)
const SecretDetail = lazy(() =>
  import(
    /* webpackChunkName: "project-secret-detail" */ '../containers/Secrets/Detail'
  )
)
const ConfigMapDetail = lazy(() =>
  import(
    /* webpackChunkName: "project-configmap-detail" */ '../containers/ConfigMaps/Detail'
  )
)
const ServiceAccountDetail = lazy(() =>
  import(
    /* webpackChunkName: "project-serviceaccount-detail" */ '../containers/ServiceAccounts/Detail'
  )
)
const CRDAppDetail = lazy(() =>
  import(
    /* webpackChunkName: "project-crdapp-detail" */ '../containers/Applications/CRDAppDetail'
  )
)
const OPAppDetail = lazy(() =>
  import(
    /* webpackChunkName: "project-opapp-detail" */ '../containers/Applications/OPAppDetail'
  )
)
const RoleDetail = lazy(() =>
  import(
    /* webpackChunkName: "project-role-detail" */ '../containers/Roles/Detail'
  )
)
const ImageBuilderDetail = lazy(() =>
  import(
    /* webpackChunkName: "project-imagebuilder-detail" */ '../containers/ImageBuilder/Detail'
  )
)
const AlertPoliciesDetail = lazy(() =>
  import(
    /* webpackChunkName: "project-alert-policy-detail" */ '../containers/Alerting/Policies/Detail'
  )
)

export default PATH => [
  {
    path: `${PATH}/deployments/:name`,
    component: DeploymentDetail,
  },
  {
    path: `${PATH}/statefulsets/:name`,
    component: StatefulSetDetail,
  },
  {
    path: `${PATH}/daemonsets/:name`,
    component: DaemonSetDetail,
  },
  {
    path: `${PATH}/jobs/:name`,
    component: JobDetail,
  },
  {
    path: `${PATH}/cronjobs/:name`,
    component: CronJobDetail,
  },
  {
    path: `${PATH}/pods/:podName/containers/:containerName`,
    component: ContainerDetail,
  },
  {
    path: `${PATH}/pods/:podName`,
    component: PodDetail,
  },
  {
    path: `${PATH}/services/:name`,
    component: ServiceDetail,
  },
  {
    path: `${PATH}/ingresses/:name`,
    component: RouteDetail,
  },
  {
    path: `${PATH}/volumes/:name`,
    component: VolumeDetail,
  },
  {
    path: `${PATH}/volume-snapshots/:name`,
    component: VolumeSnapshotDetail,
  },
  {
    path: `${PATH}/secrets/:name`,
    component: SecretDetail,
  },
  {
    path: `${PATH}/configmaps/:name`,
    component: ConfigMapDetail,
  },
  {
    path: `${PATH}/serviceAccounts/:name`,
    component: ServiceAccountDetail,
  },
  {
    path: `${PATH}/applications/composing/:name`,
    component: CRDAppDetail,
  },
  {
    path: `${PATH}/applications/template/:id`,
    component: OPAppDetail,
  },
  {
    path: `${PATH}/roles/:name`,
    component: RoleDetail,
  },
  {
    path: `${PATH}/s2ibuilders/:name`,
    component: ImageBuilderDetail,
  },
  {
    path: `${PATH}/gateways/:gatewayName`,
    component: GatewayDetail,
  },
  {
    path: [`${PATH}/alert-rules/builtin/:name`, `${PATH}/alert-rules/:name`],
    component: AlertPoliciesDetail,
  },
]
