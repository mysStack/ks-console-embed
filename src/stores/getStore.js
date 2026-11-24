import WorkloadStore from 'stores/workload'

const STORE_FACTORIES = {
  workload: module => new WorkloadStore(module),
}

export function getStore(module, params) {
  const factory = STORE_FACTORIES[module]
  return factory ? factory(params) : undefined
}
