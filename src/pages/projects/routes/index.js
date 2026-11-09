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
import { getIndexRoute } from 'utils/router.config'

import ListLayout from '../containers/Base/List'

import grayReleaseRoutes from './grayrelease'
import getDetailPath from './detail'

const Overview = lazy(() =>
  import(/* webpackChunkName: "project-overview" */ '../containers/Overview')
)
const CRDApps = lazy(() =>
  import(
    /* webpackChunkName: "project-crd-apps" */ '../containers/Applications/CRDApps'
  )
)
const OPApps = lazy(() =>
  import(
    /* webpackChunkName: "project-op-apps" */ '../containers/Applications/OPApps'
  )
)
const Deployments = lazy(() =>
  import(
    /* webpackChunkName: "project-deployments" */ '../containers/Deployments'
  )
)
const StatefulSets = lazy(() =>
  import(
    /* webpackChunkName: "project-statefulsets" */ '../containers/StatefulSets'
  )
)
const DaemonSets = lazy(() =>
  import(
    /* webpackChunkName: "project-daemonsets" */ '../containers/DaemonSets'
  )
)
const Pods = lazy(() =>
  import(/* webpackChunkName: "project-pods" */ '../containers/Pods')
)
const Jobs = lazy(() =>
  import(/* webpackChunkName: "project-jobs" */ '../containers/Jobs')
)
const ImageBuilder = lazy(() =>
  import(
    /* webpackChunkName: "project-imagebuilder" */ '../containers/ImageBuilder'
  )
)
const CronJobs = lazy(() =>
  import(/* webpackChunkName: "project-cronjobs" */ '../containers/CronJobs')
)
const Services = lazy(() =>
  import(/* webpackChunkName: "project-services" */ '../containers/Services')
)
const GrayRelease = lazy(() =>
  import(
    /* webpackChunkName: "project-grayrelease" */ '../containers/GrayRelease'
  )
)
const Routes = lazy(() =>
  import(/* webpackChunkName: "project-ingresses" */ '../containers/Routes')
)
const Volumes = lazy(() =>
  import(/* webpackChunkName: "project-volumes" */ '../containers/Volumes')
)
const VolumeSnapshots = lazy(() =>
  import(
    /* webpackChunkName: "project-volume-snapshots" */ '../containers/VolumeSnapshots'
  )
)
const BaseInfo = lazy(() =>
  import(/* webpackChunkName: "project-baseinfo" */ '../containers/BaseInfo')
)
const ConfigMaps = lazy(() =>
  import(
    /* webpackChunkName: "project-configmaps" */ '../containers/ConfigMaps'
  )
)
const ServiceAccounts = lazy(() =>
  import(
    /* webpackChunkName: "project-serviceaccounts" */ '../containers/ServiceAccounts'
  )
)
const Secrets = lazy(() =>
  import(/* webpackChunkName: "project-secrets" */ '../containers/Secrets')
)
const Roles = lazy(() =>
  import(/* webpackChunkName: "project-roles" */ '../containers/Roles')
)
const Members = lazy(() =>
  import(/* webpackChunkName: "project-members" */ '../containers/Members')
)
const LogCollection = lazy(() =>
  import(
    /* webpackChunkName: "project-log-collections" */ '../containers/LogCollection'
  )
)
const AlertingPolicies = lazy(() =>
  import(
    /* webpackChunkName: "project-alert-rules" */ '../containers/Alerting/Policies'
  )
)
const AlertingMessages = lazy(() =>
  import(
    /* webpackChunkName: "project-alerts" */ '../containers/Alerting/Messages'
  )
)
const CustomMonitoring = lazy(() =>
  import(
    /* webpackChunkName: "project-custom-monitoring" */ '../containers/CustomMonitoring'
  )
)
const NetworkPolicies = lazy(() =>
  import(
    /* webpackChunkName: "project-networkpolicies" */ '../containers/Network/Policies'
  )
)
const Gateway = lazy(() =>
  import(/* webpackChunkName: "project-gateways" */ '../containers/Gateway')
)

const PATH = '/:workspace/clusters/:cluster/projects/:namespace'

export default [
  ...getDetailPath(PATH),
  {
    path: PATH,
    component: ListLayout,
    routes: [
      ...grayReleaseRoutes,
      {
        path: `${PATH}/overview`,
        component: Overview,
        exact: true,
      },
      {
        path: `${PATH}/applications/composing`,
        component: CRDApps,
        exact: true,
      },
      {
        path: `${PATH}/applications/template`,
        component: OPApps,
        exact: true,
      },
      {
        path: `${PATH}/deployments`,
        component: Deployments,
        exact: true,
      },
      {
        path: `${PATH}/statefulsets`,
        component: StatefulSets,
        exact: true,
      },
      {
        path: `${PATH}/daemonsets`,
        component: DaemonSets,
        exact: true,
      },
      { path: `${PATH}/pods`, component: Pods, exact: true },
      { path: `${PATH}/jobs`, component: Jobs, exact: true },
      {
        path: `${PATH}/s2ibuilders`,
        component: ImageBuilder,
        exact: true,
      },
      { path: `${PATH}/cronjobs`, component: CronJobs, exact: true },
      { path: `${PATH}/services`, component: Services, exact: true },
      {
        path: `${PATH}/grayrelease`,
        component: GrayRelease,
        exact: true,
      },
      { path: `${PATH}/ingresses`, component: Routes, exact: true },
      { path: `${PATH}/volumes`, component: Volumes, exact: true },
      {
        path: `${PATH}/volume-snapshots`,
        component: VolumeSnapshots,
        exact: true,
      },
      { path: `${PATH}/base-info`, component: BaseInfo, exact: true },
      {
        path: `${PATH}/networkpolicies`,
        component: NetworkPolicies,
        exact: true,
      },
      { path: `${PATH}/configmaps`, component: ConfigMaps, exact: true },
      {
        path: `${PATH}/serviceaccounts`,
        component: ServiceAccounts,
        exact: true,
      },
      { path: `${PATH}/secrets`, component: Secrets, exact: true },
      { path: `${PATH}/roles`, component: Roles, exact: true },
      { path: `${PATH}/members`, component: Members, exact: true },
      {
        path: `${PATH}/log-collections`,
        component: LogCollection,
        exact: true,
      },
      { path: `${PATH}/gateways`, component: Gateway, exact: true },
      {
        path: `${PATH}/alert-rules`,
        component: AlertingPolicies,
        exact: true,
      },
      {
        path: `${PATH}/alerts`,
        component: AlertingMessages,
        exact: true,
      },
      {
        path: `${PATH}/custom-monitoring`,
        component: CustomMonitoring,
        exact: true,
      },
      getIndexRoute({
        path: `${PATH}/workloads`,
        to: `${PATH}/deployments`,
        exact: true,
      }),
      getIndexRoute({
        path: `${PATH}/applications`,
        to: `${PATH}/applications/${getDefaultAppType()}`,
        exact: true,
      }),
      getIndexRoute({ path: PATH, to: `${PATH}/overview`, exact: true }),
      getIndexRoute({ path: '*', to: '/404', exact: true }),
    ],
  },
]

function getDefaultAppType() {
  return globals.app.hasKSModule('openpitrix') ? 'template' : 'composing'
}
