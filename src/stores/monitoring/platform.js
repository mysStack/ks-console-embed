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

import Base from './base'

export const PLATFORM_COUNT_METRICS = {
  cluster_count: 'platform_cluster_count',
  workspace_count: 'platform_workspace_count',
  account_count: 'platform_user_count',
  app_template_count: 'kubesphere_app_template_count',
}

export default class PlatformMonitoring extends Base {
  getApi = () => 'kapis/tenant.kubesphere.io/v1beta1/metrics'
}
