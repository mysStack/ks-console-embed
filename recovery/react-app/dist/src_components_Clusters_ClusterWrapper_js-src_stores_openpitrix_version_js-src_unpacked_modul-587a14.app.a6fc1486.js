"use strict";
(Array.isArray(self["webpackChunkv3dist_recovered_react_app"]) ? self["webpackChunkv3dist_recovered_react_app"] : (self["webpackChunkv3dist_recovered_react_app"] = [])).push([["src_components_Clusters_ClusterWrapper_js-src_stores_openpitrix_version_js-src_unpacked_modul-587a14"],{

/***/ "./src/chunks/common/module-1093.js"
/*!******************************************!*\
  !*** ./src/chunks/common/module-1093.js ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.kafkaYaml = void 0;
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
const kafkaYaml = exports.kafkaYaml = {
  resources: {
    apiVersion: "kafka.strimzi.io/v1beta2",
    kind: "Kafka",
    metadata: {
      name: "my-cluster"
    },
    spec: {
      clusterCa: {
        renewalDays: 30,
        validityDays: 3650
      },
      clientsCa: {
        renewalDays: 30,
        validityDays: 3650
      },
      kafka: {
        version: "3.2.0",
        replicas: 1,
        resources: {
          requests: {
            memory: "64Gi",
            cpu: "8"
          },
          limits: {
            memory: "64Gi",
            cpu: "12"
          }
        },
        listeners: [{
          name: "external",
          port: 9092,
          type: "nodeport",
          tls: true,
          authentication: {
            type: "tls"
          }
        }],
        metricsConfig: {
          type: "jmxPrometheusExporter",
          valueFrom: {
            configMapKeyRef: {
              key: "kafka-metrics-config.yml",
              name: "kafka-metrics"
            }
          }
        },
        authorization: {
          superUsers: ["saas"],
          type: "simple"
        },
        storage: {
          type: "jbod",
          volumes: [{
            id: 0,
            type: "persistent-claim",
            size: "100Gi",
            deleteClaim: true
          }]
        },
        config: {
          "default.replication.factor": 3,
          "min.insync.replicas": 2,
          "auto.create.topics.enable": false,
          "num.partitions": 3
        }
      },
      zookeeper: {
        replicas: 1,
        metricsConfig: {
          type: "jmxPrometheusExporter",
          valueFrom: {
            configMapKeyRef: {
              key: "zookeeper-metrics-config.yml",
              name: "kafka-metrics"
            }
          }
        },
        resources: {
          requests: {
            memory: "8Gi",
            cpu: "2"
          },
          limits: {
            memory: "8Gi",
            cpu: "2"
          }
        },
        storage: {
          type: "persistent-claim",
          size: "100Gi",
          deleteClaim: true
        }
      },
      entityOperator: {
        topicOperator: {},
        userOperator: {}
      },
      cruiseControl: {},
      kafkaExporter: {
        groupRegex: ".*",
        topicRegex: ".*"
      }
    }
  },
  user: {
    apiVersion: "kafka.strimzi.io/v1beta2",
    kind: "KafkaUser",
    metadata: {
      name: "saas",
      labels: {
        "strimzi.io/cluster": "my-cluster"
      }
    },
    spec: {
      authentication: {
        type: "scram-sha-512"
      },
      authorization: {
        type: "simple",
        acls: [{
          type: "allow",
          operation: "Read",
          resource: {
            type: "topic",
            patternType: "literal",
            name: ""
          }
        }]
      }
    }
  },
  topic: {
    apiVersion: "kafka.strimzi.io/v1beta2",
    kind: "KafkaTopic",
    metadata: {
      name: "my-topic2",
      labels: {
        "strimzi.io/cluster": "my-cluster"
      }
    },
    spec: {
      partitions: 3,
      replicas: 1,
      config: {
        "retention.ms": 604800000
      }
    }
  },
  configMap: {
    kind: "ConfigMap",
    apiVersion: "v1",
    metadata: {
      name: "kafka-metrics",
      namespace: "test",
      labels: {
        app: "strimzi",
        component: "configmap"
      }
    },
    data: {
      "kafka-metrics-config.yml": '# See https://github.com/prometheus/jmx_exporter for more info about JMX Prometheus Exporter metrics\nlowercaseOutputName: true\nrules:\n- pattern: kafka.(\\w+)<type=(.+), name=(.+)Percent\\w*><>MeanRate\n  name: kafka_$1_$2_$3_percent\n  type: GAUGE\n- pattern: kafka.(\\w+)<type=(.+), name=(.+)Percent\\w*><>Value\n  name: kafka_$1_$2_$3_percent\n  type: GAUGE\n- pattern: kafka.(\\w+)<type=(.+), name=(.+)Percent\\w*, (.+)=(.+)><>Value\n  name: kafka_$1_$2_$3_percent\n  type: GAUGE\n  labels:\n    "$4": "$5"\n- pattern: kafka.(\\w+)<type=(.+), name=(.+)PerSec\\w*, (.+)=(.+), (.+)=(.+)><>Count\n  name: kafka_$1_$2_$3_total\n  type: COUNTER\n  labels:\n    "$4": "$5"\n    "$6": "$7"\n- pattern: kafka.(\\w+)<type=(.+), name=(.+)PerSec\\w*, (.+)=(.+)><>Count\n  name: kafka_$1_$2_$3_total\n  type: COUNTER\n  labels:\n    "$4": "$5"\n- pattern: kafka.(\\w+)<type=(.+), name=(.+)PerSec\\w*><>Count\n  name: kafka_$1_$2_$3_total\n  type: COUNTER\n- pattern: kafka.cluster<type=(.+), name=UnderMinIsr, (.+)=(.+), (.+)=(.+)><>Value\n  name: kafka_cluster_$1_underminisr\n  type: GAUGE\n  labels:\n    "$2": "$3"\n    "$4": "$5"\n- pattern: kafka.cluster<type=(.+), name=UnderMinIsr, (.+)=(.+)><>Value\n  name: kafka_cluster_$1_underminisr\n  type: GAUGE\n  labels:\n    "$2": "$3"\n- pattern: kafka.cluster<type=(.+), name=UnderMinIsr><>Value\n  name: kafka_cluster_$1_underminisr\n  type: GAUGE\n- pattern: kafka.controller<type=(.+), name=(.+), (.+)=(.+), (.+)=(.+)><>Value\n  name: kafka_controller_$1_$2\n  type: GAUGE\n  labels:\n    "$3": "$4"\n    "$5": "$6"\n- pattern: kafka.controller<type=(.+), name=(.+), (.+)=(.+)><>Value\n  name: kafka_controller_$1_$2\n  type: GAUGE\n  labels:\n    "$3": "$4"\n- pattern: kafka.controller<type=(.+), name=(.+)><>Value\n  name: kafka_controller_$1_$2\n  type: GAUGE\n- pattern: kafka.server<type=(.+), name=(?!ConsumerLag)(.+), (.+)=(.+), (.+)=(.+)><>Value\n  name: kafka_server_$1_$2\n  type: GAUGE\n  labels:\n    "$3": "$4"\n    "$5": "$6"\n- pattern: kafka.server<type=(.+), name=(?!ConsumerLag)(.+), (.+)=(.+)><>Value\n  name: kafka_server_$1_$2\n  type: GAUGE\n  labels:\n    "$3": "$4"\n- pattern: kafka.server<type=(.+), name=(?!ConsumerLag)(.+)><>Value\n  name: kafka_server_$1_$2\n  type: GAUGE',
      "zookeeper-metrics-config.yml": '# See https://github.com/prometheus/jmx_exporter for more info about JMX Prometheus Exporter metrics\nlowercaseOutputName: true\nrules:\n# replicated Zookeeper\n- pattern: "org.apache.ZooKeeperService<name0=ReplicatedServer_id(\\\\d+)><>(\\\\w+)"\n  name: "zookeeper_$2"\n  type: GAUGE\n- pattern: "org.apache.ZooKeeperService<name0=ReplicatedServer_id(\\\\d+), name1=replica.(\\\\d+)><>(\\\\w+)"\n  name: "zookeeper_$3"\n  type: GAUGE\n  labels:\n    replicaId: "$2"\n- pattern: "org.apache.ZooKeeperService<name0=ReplicatedServer_id(\\\\d+), name1=replica.(\\\\d+), name2=(\\\\w+)><>(Packets\\\\w+)"\n  name: "zookeeper_$4"\n  type: COUNTER\n  labels:\n    replicaId: "$2"\n    memberType: "$3"\n- pattern: "org.apache.ZooKeeperService<name0=ReplicatedServer_id(\\\\d+), name1=replica.(\\\\d+), name2=(\\\\w+)><>(\\\\w+)"\n  name: "zookeeper_$4"\n  type: GAUGE\n  labels:\n    replicaId: "$2"\n    memberType: "$3"\n- pattern: "org.apache.ZooKeeperService<name0=ReplicatedServer_id(\\\\d+), name1=replica.(\\\\d+), name2=(\\\\w+), name3=(\\\\w+)><>(\\\\w+)"\n  name: "zookeeper_$4_$5"\n  type: GAUGE\n  labels:\n    replicaId: "$2"\n    memberType: "$3"'
    }
  },
  podMonitor: {
    apiVersion: "monitoring.coreos.com/v1",
    kind: "PodMonitor",
    metadata: {
      name: "kafka-resources-metrics",
      namespace: "test",
      labels: {
        app: "strimzi",
        component: "podmonitor"
      }
    },
    spec: {
      selector: {
        matchExpressions: [{
          key: "strimzi.io/kind",
          operator: "In",
          values: ["Kafka", "KafkaConnect", "KafkaMirrorMaker", "KafkaMirrorMaker2"]
        }, {
          key: "strimzi.io/component-type",
          operator: "NotIn",
          values: ["kafka-exporter"]
        }]
      },
      namespaceSelector: {
        matchNames: ["namespace"]
      },
      podMetricsEndpoints: [{
        path: "/metrics",
        port: "tcp-prometheus",
        relabelings: [{
          separator: ";",
          regex: "__meta_kubernetes_pod_label_(strimzi_io_.+)",
          replacement: "$1",
          action: "labelmap"
        }, {
          sourceLabels: ["__meta_kubernetes_namespace"],
          separator: ";",
          regex: "(.*)",
          targetLabel: "namespace",
          replacement: "$1",
          action: "replace"
        }, {
          sourceLabels: ["__meta_kubernetes_pod_name"],
          separator: ";",
          regex: "(.*)",
          targetLabel: "kubernetes_pod_name",
          replacement: "$1",
          action: "replace"
        }, {
          sourceLabels: ["__meta_kubernetes_pod_node_name"],
          separator: ";",
          regex: "(.*)",
          targetLabel: "node_name",
          replacement: "$1",
          action: "replace"
        }, {
          sourceLabels: ["__meta_kubernetes_pod_host_ip"],
          separator: ";",
          regex: "(.*)",
          targetLabel: "node_ip",
          replacement: "$1",
          action: "replace"
        }]
      }]
    }
  },
  rebalance: {
    apiVersion: "kafka.strimzi.io/v1beta2",
    kind: "KafkaRebalance",
    metadata: {
      name: "my-rebalance2",
      labels: {
        "strimzi.io/cluster": "my-cluster"
      },
      annotations: {
        "strimzi.io/rebalance": "approve"
      }
    },
    spec: {
      mode: "full"
    }
  }
};

/***/ },

/***/ "./src/chunks/common/module-1286.js"
/*!******************************************!*\
  !*** ./src/chunks/common/module-1286.js ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.userNameRegx = exports.userNameExcludeRegx = exports.strictUserNameRegx = exports.passwordRegx = exports.kafkaUserNameRegx = exports.getPGAccount = exports.backupNameRegx = exports.UserName = exports.Password = exports.PATTERN_WORD = exports.PATTERN_NUMBER = exports.PATTERN_EXCLUDE_CHARACTERS = exports.PATTERN_CHARACTERS = exports.MySQLAccount = exports.KafkaAccount = exports.DefaultPermissionRuleString = exports.Database = exports.CKAccount = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-34.js */ "./node_modules/core-js3/modules/es.object.define-properties.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-61.js */ "./src/unpacked/module-61.js"));
__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js");
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module61 = (0, _recoverInterop.__recoverInterop)(_module);
const userNameRegx = exports.userNameRegx = /^[a-zA-Z][a-zA-Z0-9_]{1,25}$/;
const userNameExcludeRegx = exports.userNameExcludeRegx = /^(?!root$|radondb_)/;
const strictUserNameRegx = exports.strictUserNameRegx = /^[a-z][a-z0-9_]{1,25}$/;
const passwordRegx = exports.passwordRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[!@#$%^&*_+\-=])[^]{8,32}$/;
const kafkaUserNameRegx = exports.kafkaUserNameRegx = /^[a-z][a-z0-9-]{1,63}$/;
const backupNameRegx = exports.backupNameRegx = /^[a-z][a-z0-9-]{0,23}$/;
const PATTERN_WORD = exports.PATTERN_WORD = /(?=.*?[A-Z])(?=.*?[a-z])/;
const PATTERN_CHARACTERS = exports.PATTERN_CHARACTERS = /(?=.*?[!@#$%^&*_+\-=])/;
const PATTERN_EXCLUDE_CHARACTERS = exports.PATTERN_EXCLUDE_CHARACTERS = /^((?![~()\\|\[\{\}\];:'",<.>/? ]).)*$/;
const PATTERN_NUMBER = exports.PATTERN_NUMBER = /(?=.*?[0-9])/;
const UserName = exports.UserName = {
  name: "name",
  label: "USERNAME",
  type: "text",
  description: "DATABASE_USERNAME_DESC",
  rules: [{
    pattern: userNameRegx,
    message: t("INVALID_DATABASE_USERNAME_DESC")
  }, {
    pattern: userNameExcludeRegx,
    message: t("USERNAME_FORBIDDEN_STRINGS")
  }, {
    required: true,
    message: t("USERNAME_EMPTY_DESC")
  }],
  range: {
    max: 26
  }
};
const Password = exports.Password = {
  name: "password",
  label: "PASSWORD",
  type: "password",
  description: t("DATABASE_PASSWORD_DESC"),
  rules: [{
    pattern: PATTERN_WORD,
    message: t("PASSWORD_LETTER")
  }, {
    pattern: PATTERN_CHARACTERS,
    message: t("DATABASE_PASSWORD_CHARACTERS")
  }, {
    pattern: PATTERN_EXCLUDE_CHARACTERS,
    message: t("DATABASE_PASSWORD_CHARACTERS_EXCLUDE")
  }, {
    pattern: PATTERN_NUMBER,
    message: t("PASSWORD_NUMBER")
  }, {
    required: true,
    message: t("ENTER_PASSWORD_TIP")
  }, {
    pattern: passwordRegx,
    message: t("INVALID_DATABASE_PASSWORD_DESC")
  }],
  range: {
    max: 32
  }
};
const Database = exports.Database = {
  name: "database",
  label: "AUTHORIZED_DATABASES",
  type: "text",
  description: "AUTHORIZED_DATABASES_DESC",
  rules: []
};
const CKAccount = exports.CKAccount = [{
  ...UserName,
  rules: [].concat(module61(UserName.rules), [{
    pattern: /^(?!(clickhouse_operator)$)/,
    message: t("USERNAME_CANNOT_BE_CLICKHOUSE")
  }])
}, Password, {
  name: "description",
  label: "DESCRIPTION",
  type: "textarea",
  description: "DESCRIPTION_DESC",
  rules: []
}];
const getPGAccount = function (disabled) {
  return [{
    name: "name",
    label: "USERNAME",
    type: "text",
    description: "PG_USERNAME_DESC",
    rules: [{
      pattern: strictUserNameRegx,
      message: t("INVALID_PG_USERNAME_DESC")
    }, {
      pattern: /^(?!(postgres|pgautofailover_monitor|pgautofailover_replicator)$)/,
      message: t("USERNAME_CANNOT_BE_PROGRES")
    }, {
      pattern: userNameExcludeRegx,
      message: t("USERNAME_FORBIDDEN_STRINGS")
    }, {
      required: true,
      message: t("USERNAME_EMPTY_DESC")
    }],
    range: {
      max: 26
    },
    disabled
  }, Password, {
    name: "permission",
    label: "PERMISSIONS",
    type: "select",
    disabled,
    options: [{
      label: t("GENERAL_PERMISSIONS"),
      value: "General"
    }, {
      label: t("ADVANCED_PERMISSIONS"),
      value: "Advanced"
    }]
  }];
};
exports.getPGAccount = getPGAccount;
const MySQLAccount = exports.MySQLAccount = [UserName, Password, Database, {
  name: "permission",
  label: "PERMISSIONS",
  type: "select",
  options: [{
    label: t("GENERAL_PERMISSIONS"),
    value: "General"
  }, {
    label: t("ADVANCED_PERMISSIONS"),
    value: "Advanced"
  }]
}, {
  name: "host",
  label: "AUTHORIZED_HOSTS",
  type: "text",
  description: "AUTHORIZED_HOSTS_DESC"
}];
const KafkaAccount = exports.KafkaAccount = [{
  name: "name",
  label: "USERNAME",
  type: "text",
  description: "KAFKA_USERNAME_DESC",
  rules: [{
    pattern: kafkaUserNameRegx,
    message: t("KAFKA_USERNAME_DESC")
  }, {
    required: true,
    message: t("USERNAME_EMPTY_DESC")
  }],
  range: {
    max: 64
  }
}, {
  name: "authentication",
  label: "AUTHENTICATION_MODE",
  type: "select",
  options: [{
    label: "TLS",
    value: "tls"
  }, {
    label: "SCRAM-SHA-512",
    value: "scram-sha-512"
  }]
}, {
  name: "authorization",
  label: "AUTHORIZATION_MODE",
  type: "select",
  disabled: true,
  description: "AUTHORIZATION_MODE_DESC",
  options: [{
    label: t("SIMPLE_AUTHORIZATION"),
    value: "simple"
  }]
}];
const DefaultPermissionRuleString = exports.DefaultPermissionRuleString = '{"type":"allow","operation":"Read","resource":{"type":"topic","patternType":"literal","name":""}}';

/***/ },

/***/ "./src/chunks/common/module-1527.js"
/*!******************************************!*\
  !*** ./src/chunks/common/module-1527.js ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.eckYaml = void 0;
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
const eckYaml = exports.eckYaml = {
  resources: {
    apiVersion: "elasticsearch.k8s.elastic.co/v1",
    kind: "Elasticsearch",
    metadata: {
      name: "quickstart"
    },
    spec: {
      version: "7.17.5",
      nodeSets: [{
        name: "master",
        count: 3,
        config: {
          "node.roles": ["master"]
        },
        podTemplate: {
          spec: {
            initContainers: [{
              name: "sysctl",
              securityContext: {
                privileged: true,
                runAsUser: 0
              },
              command: ["sh", "-c", "sysctl -w vm.max_map_count=262144"]
            }],
            containers: [{
              name: "elasticsearch",
              resources: {
                limits: {
                  memory: "8Gi",
                  cpu: 2
                },
                requests: {
                  memory: "8Gi",
                  cpu: 2
                }
              },
              env: [{
                name: "ES_JAVA_OPTS",
                value: "-Xms4g -Xmx4g"
              }]
            }]
          }
        },
        volumeClaimTemplates: [{
          metadata: {
            name: "elasticsearch-data"
          },
          spec: {
            accessModes: ["ReadWriteOnce"],
            resources: {
              requests: {
                storage: "20Gi"
              }
            },
            storageClassName: "csi-high-capacity"
          }
        }]
      }, {
        name: "hot",
        count: 2,
        config: {
          "node.roles": ["data_hot", "data_content"]
        },
        podTemplate: {
          spec: {
            initContainers: [{
              name: "sysctl",
              securityContext: {
                privileged: true,
                runAsUser: 0
              },
              command: ["sh", "-c", "sysctl -w vm.max_map_count=262144"]
            }],
            containers: [{
              name: "elasticsearch",
              resources: {
                limits: {
                  memory: "8Gi",
                  cpu: 2
                },
                requests: {
                  memory: "8Gi",
                  cpu: 2
                }
              },
              env: [{
                name: "ES_JAVA_OPTS",
                value: "-Xms4g -Xmx4g"
              }]
            }]
          }
        },
        volumeClaimTemplates: [{
          metadata: {
            name: "elasticsearch-data"
          },
          spec: {
            accessModes: ["ReadWriteOnce"],
            resources: {
              requests: {
                storage: "40Gi"
              }
            },
            storageClassName: "csi-high-capacity"
          }
        }]
      }, {
        name: "warm",
        count: 0,
        config: {
          "node.roles": ["data_warm"]
        },
        podTemplate: {
          spec: {
            initContainers: [{
              name: "sysctl",
              securityContext: {
                privileged: true,
                runAsUser: 0
              },
              command: ["sh", "-c", "sysctl -w vm.max_map_count=262144"]
            }],
            containers: [{
              name: "elasticsearch",
              resources: {
                limits: {
                  memory: "8Gi",
                  cpu: 2
                },
                requests: {
                  memory: "8Gi",
                  cpu: 2
                }
              },
              env: [{
                name: "ES_JAVA_OPTS",
                value: "-Xms4g -Xmx4g"
              }]
            }]
          }
        },
        volumeClaimTemplates: [{
          metadata: {
            name: "elasticsearch-data"
          },
          spec: {
            accessModes: ["ReadWriteOnce"],
            resources: {
              requests: {
                storage: "40Gi"
              }
            },
            storageClassName: "csi-high-capacity"
          }
        }]
      }, {
        name: "cold",
        count: 0,
        config: {
          "node.roles": ["data_cold"]
        },
        podTemplate: {
          spec: {
            initContainers: [{
              name: "sysctl",
              securityContext: {
                privileged: true,
                runAsUser: 0
              },
              command: ["sh", "-c", "sysctl -w vm.max_map_count=262144"]
            }],
            containers: [{
              name: "elasticsearch",
              resources: {
                limits: {
                  memory: "8Gi",
                  cpu: 2
                },
                requests: {
                  memory: "8Gi",
                  cpu: 2
                }
              },
              env: [{
                name: "ES_JAVA_OPTS",
                value: "-Xms4g -Xmx4g"
              }]
            }]
          }
        },
        volumeClaimTemplates: [{
          metadata: {
            name: "elasticsearch-data"
          },
          spec: {
            accessModes: ["ReadWriteOnce"],
            resources: {
              requests: {
                storage: "40Gi"
              }
            },
            storageClassName: "csi-high-capacity"
          }
        }]
      }]
    }
  },
  kibana: {
    apiVersion: "kibana.k8s.elastic.co/v1",
    kind: "Kibana",
    metadata: {
      name: "quickstart"
    },
    spec: {
      version: "7.17.5",
      count: 1,
      elasticsearchRef: {
        name: "quickstart",
        namespace: "default"
      },
      podTemplate: {
        spec: {
          containers: [{
            name: "kibana",
            resources: {
              requests: {
                cpu: "1000m",
                memory: "2Gi"
              },
              limits: {
                cpu: "2000m",
                memory: "4Gi"
              }
            }
          }]
        }
      }
    }
  }
};

/***/ },

/***/ "./src/chunks/common/module-1528.js"
/*!******************************************!*\
  !*** ./src/chunks/common/module-1528.js ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.opensearchYaml = void 0;
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
const opensearchYaml = exports.opensearchYaml = {
  resources: {
    apiVersion: "opensearch.opster.io/v1",
    kind: "OpenSearchCluster",
    metadata: {
      name: "cluster"
    },
    spec: {
      general: {
        version: "2.3.0",
        httpPort: 9200,
        vendor: "opensearch",
        serviceName: "cluster"
      },
      dashboards: {
        version: "2.3.0",
        enable: true,
        replicas: 1,
        resources: {
          requests: {
            memory: "1Gi",
            cpu: "500m"
          },
          limits: {
            memory: "1Gi",
            cpu: "500m"
          }
        }
      },
      confMgmt: {
        smartScaler: true
      },
      security: {
        config: {
          securityConfigSecret: {
            name: "securityconfig-secret"
          },
          adminCredentialsSecret: {
            name: "admin-credentials-secret"
          }
        },
        tls: {
          transport: {
            generate: true
          },
          http: {
            generate: true
          }
        },
        keyStoreConfig: []
      },
      nodePools: [{
        component: "masters",
        replicas: 2,
        diskSize: "50Gi",
        persistence: {
          pvc: {
            storageClass: "csi-qingcloud",
            accessModes: ["ReadWriteOnce"]
          }
        },
        additionalConfig: {
          "node.attr.datatier": "master"
        },
        resources: {
          requests: {
            memory: "1Gi",
            cpu: "500m"
          },
          limits: {
            memory: "1Gi",
            cpu: "500m"
          }
        },
        roles: ["cluster_manager"]
      }, {
        component: "data-node-hot",
        replicas: 2,
        diskSize: "30Gi",
        persistence: {
          pvc: {
            storageClass: "csi-qingcloud",
            accessModes: ["ReadWriteOnce"]
          }
        },
        additionalConfig: {
          "node.attr.datatier": "hot"
        },
        resources: {
          requests: {
            memory: "1Gi",
            cpu: "500m"
          },
          limits: {
            memory: "1Gi",
            cpu: "500m"
          }
        },
        roles: ["data"]
      }, {
        component: "data-node-warm",
        replicas: 2,
        diskSize: "30Gi",
        persistence: {
          pvc: {
            storageClass: "csi-qingcloud",
            accessModes: ["ReadWriteOnce"]
          }
        },
        additionalConfig: {
          "node.attr.datatier": "warm"
        },
        resources: {
          requests: {
            memory: "1Gi",
            cpu: "500m"
          },
          limits: {
            memory: "1Gi",
            cpu: "500m"
          }
        },
        roles: ["data"]
      }]
    }
  },
  node: {
    component: "data-node-hot",
    replicas: 2,
    diskSize: "30Gi",
    persistence: {
      pvc: {
        storageClass: "csi-qingcloud",
        accessModes: ["ReadWriteOnce"]
      }
    },
    additionalConfig: {
      "node.attr.datatier": "hot"
    },
    resources: {
      requests: {
        memory: "1Gi",
        cpu: "500m"
      },
      limits: {
        memory: "1Gi",
        cpu: "500m"
      }
    },
    roles: ["data"]
  },
  logstash: {
    apiVersion: "opensearch.opster.io/v1",
    kind: "Logstash",
    metadata: {
      name: "logstash-sample"
    },
    spec: {
      replicas: 1,
      config: {
        jvm: "-Xms512m -Xmx512m",
        openSearchInfo: {
          openSearchCluster: {
            name: "my-cluster",
            namespace: "default"
          },
          openSearchService: {
            name: "my-cluster"
          }
        },
        logstashConfig: [],
        ports: [8080],
        pipelineConfig: {
          inputs: 'http {\n  host => "0.0.0.0"\n  port => 8080\n}',
          filters: 'mutate {\n  add_field => { "LogstashHost" => "${HOSTNAME}" }\n}',
          outputs: null,
          openSearchIndex: 'index => "logstash-%{+YYYY.MM.dd}"'
        }
      },
      podTemplate: {
        spec: {
          containers: [{
            name: "logstash",
            resources: {
              requests: {
                memory: "1Gi",
                cpu: "500m"
              },
              limits: {
                memory: "1Gi",
                cpu: "500m"
              }
            }
          }, {
            name: "exporter",
            resources: {
              requests: {
                memory: "400Mi",
                cpu: "200m"
              },
              limits: {
                memory: "400Mi",
                cpu: "200m"
              }
            }
          }]
        }
      }
    }
  },
  logstashSecret: {
    apiVersion: "v1",
    kind: "Secret",
    metadata: {
      name: "logstash-credential"
    },
    type: "Opaque",
    data: {
      username: "bG9nc3Rhc2g=",
      password: "bG9nc3Rhc2g="
    }
  },
  adminSecret: {
    apiVersion: "v1",
    kind: "Secret",
    metadata: {
      name: "admin-credentials-secret"
    },
    type: "Opaque",
    data: {
      username: "UmFkb25EQkAxMjM=",
      password: "UmFkb25EQkAxMjM="
    }
  },
  securityConfigSecret: {
    apiVersion: "v1",
    kind: "Secret",
    metadata: {
      name: "securityconfig-secret"
    },
    type: "Opaque",
    stringData: {
      "action_groups.yml": '_meta:\n  type: "actiongroups"\n  config_version: 2',
      "internal_users.yml": '_meta:\n  type: "internalusers"\n  config_version: 2\nroot:\n  hash: "$2y$12$JwL3peIal4VShAgkyZlMG.t1zwcCnPSAJ2E6GHCDoGhZJLkRX11b2"\n  reserved: true\n  hidden: true\n  backend_roles:\n  - "admin"\n  description: "Internal root user for cluster"\nadmin:\n  hash: "$2a$10$ihutvIcl7kp9PF2RFMZeXuZb2RdUpBFR5t4W0KV5LFZylPheworfW"\n  reserved: false\n  backend_roles:\n  - "admin"\n  description: "custom admin user"\ndashboarduser:\n  hash: "$2y$12$o8Uxs2c6T8wzTfOpf1Pxvulqxs6BigWaJhSldWUtRdbDa555GM7F6"\n  reserved: false\n  description: "OpenSearch internal dashboards user"\nlogstash:\n  hash: "$2y$12$sjAmhIfYAJsPJXNm2WI29e/rLX5V.OxV1l8L1An7wO2pz6WX5NIpy"\n  reserved: false\n  description: "OpenSearch internal logstash user"\nprometheus:\n  hash: "$2y$12$wml4GdNlHOos1FgNWk1zSu9sWV2JE0.CkWsLP0YHFPxojW/v2EGeq"\n  reserved: true\n  hidden: true\n  backend_roles:\n  - "admin"\n  description: "OpenSearch internal prometheus user"',
      "nodes_dn.yml": '_meta:\n  type: "nodesdn"\n  config_version: 2',
      "whitelist.yml": '_meta:\n  type: "whitelist"\n  config_version: 2',
      "tenants.yml": '_meta:\n  type: "tenants"\n  config_version: 2',
      "roles_mapping.yml": '_meta:\n  type: "rolesmapping"\n  config_version: 2\nall_access:\n  reserved: false\n  backend_roles:\n  - "admin"\n  description: "Maps admin to all_access"\nown_index:\n  reserved: false\n  users:\n  - "*"\n  description: "Allow full access to an index named like the username"\nreadall:\n  reserved: false\n  backend_roles:\n  - "readall"\nmanage_snapshots:\n  reserved: false\n  backend_roles:\n  - "snapshotrestore"\ndashboard_server:\n  reserved: true\n  users:\n  - "dashboarduser"',
      "roles.yml": "_meta:\n  type: \"roles\"\n  config_version: 2\ndashboard_read_only:\n  reserved: true\nsecurity_rest_api_access:\n  reserved: true\n# Allows users to view monitors, destinations and alerts\nalerting_read_access:\n  reserved: true\n  cluster_permissions:\n    - 'cluster:admin/opendistro/alerting/alerts/get'\n    - 'cluster:admin/opendistro/alerting/destination/get'\n    - 'cluster:admin/opendistro/alerting/monitor/get'\n    - 'cluster:admin/opendistro/alerting/monitor/search'\n# Allows users to view and acknowledge alerts\nalerting_ack_alerts:\n  reserved: true\n  cluster_permissions:\n    - 'cluster:admin/opendistro/alerting/alerts/*'\n# Allows users to use all alerting functionality\nalerting_full_access:\n  reserved: true\n  cluster_permissions:\n    - 'cluster_monitor'\n    - 'cluster:admin/opendistro/alerting/*'\n  index_permissions:\n    - index_patterns:\n        - '*'\n      allowed_actions:\n        - 'indices_monitor'\n        - 'indices:admin/aliases/get'\n        - 'indices:admin/mappings/get'\n# Allow users to read Anomaly Detection detectors and results\nanomaly_read_access:\n  reserved: true\n  cluster_permissions:\n    - 'cluster:admin/opendistro/ad/detector/info'\n    - 'cluster:admin/opendistro/ad/detector/search'\n    - 'cluster:admin/opendistro/ad/detectors/get'\n    - 'cluster:admin/opendistro/ad/result/search'\n    - 'cluster:admin/opendistro/ad/tasks/search'\n    - 'cluster:admin/opendistro/ad/detector/validate'\n    - 'cluster:admin/opendistro/ad/result/topAnomalies'\n# Allows users to use all Anomaly Detection functionality\nanomaly_full_access:\n  reserved: true\n  cluster_permissions:\n    - 'cluster_monitor'\n    - 'cluster:admin/opendistro/ad/*'\n  index_permissions:\n    - index_patterns:\n        - '*'\n      allowed_actions:\n        - 'indices_monitor'\n        - 'indices:admin/aliases/get'\n        - 'indices:admin/mappings/get'\n# Allows users to read Notebooks\nnotebooks_read_access:\n  reserved: true\n  cluster_permissions:\n    - 'cluster:admin/opendistro/notebooks/list'\n    - 'cluster:admin/opendistro/notebooks/get'\n# Allows users to all Notebooks functionality\nnotebooks_full_access:\n  reserved: true\n  cluster_permissions:\n    - 'cluster:admin/opendistro/notebooks/create'\n    - 'cluster:admin/opendistro/notebooks/update'\n    - 'cluster:admin/opendistro/notebooks/delete'\n    - 'cluster:admin/opendistro/notebooks/get'\n    - 'cluster:admin/opendistro/notebooks/list'\n# Allows users to read observability objects\nobservability_read_access:\n  reserved: true\n  cluster_permissions:\n    - 'cluster:admin/opensearch/observability/get'\n# Allows users to all Observability functionality\nobservability_full_access:\n  reserved: true\n  cluster_permissions:\n    - 'cluster:admin/opensearch/observability/create'\n    - 'cluster:admin/opensearch/observability/update'\n    - 'cluster:admin/opensearch/observability/delete'\n    - 'cluster:admin/opensearch/observability/get'\n# Allows users to read and download Reports\nreports_instances_read_access:\n  reserved: true\n  cluster_permissions:\n    - 'cluster:admin/opendistro/reports/instance/list'\n    - 'cluster:admin/opendistro/reports/instance/get'\n    - 'cluster:admin/opendistro/reports/menu/download'\n# Allows users to read and download Reports and Report-definitions\nreports_read_access:\n  reserved: true\n  cluster_permissions:\n    - 'cluster:admin/opendistro/reports/definition/get'\n    - 'cluster:admin/opendistro/reports/definition/list'\n    - 'cluster:admin/opendistro/reports/instance/list'\n    - 'cluster:admin/opendistro/reports/instance/get'\n    - 'cluster:admin/opendistro/reports/menu/download'\n# Allows users to all Reports functionality\nreports_full_access:\n  reserved: true\n  cluster_permissions:\n    - 'cluster:admin/opendistro/reports/definition/create'\n    - 'cluster:admin/opendistro/reports/definition/update'\n    - 'cluster:admin/opendistro/reports/definition/on_demand'\n    - 'cluster:admin/opendistro/reports/definition/delete'\n    - 'cluster:admin/opendistro/reports/definition/get'\n    - 'cluster:admin/opendistro/reports/definition/list'\n    - 'cluster:admin/opendistro/reports/instance/list'\n    - 'cluster:admin/opendistro/reports/instance/get'\n    - 'cluster:admin/opendistro/reports/menu/download'\n# Allows users to use all asynchronous-search functionality\nasynchronous_search_full_access:\n  reserved: true\n  cluster_permissions:\n    - 'cluster:admin/opendistro/asynchronous_search/*'\n  index_permissions:\n    - index_patterns:\n        - '*'\n      allowed_actions:\n        - 'indices:data/read/search*'\n# Allows users to read stored asynchronous-search results\nasynchronous_search_read_access:\n  reserved: true\n  cluster_permissions:\n    - 'cluster:admin/opendistro/asynchronous_search/get'\n# Allows user to use all index_management actions - ism policies, rollups, transforms\nindex_management_full_access:\n  reserved: true\n  cluster_permissions:\n    - \"cluster:admin/opendistro/ism/*\"\n    - \"cluster:admin/opendistro/rollup/*\"\n    - \"cluster:admin/opendistro/transform/*\"\n  index_permissions:\n    - index_patterns:\n        - '*'\n      allowed_actions:\n        - 'indices:admin/opensearch/ism/*'\n# Allows users to use all cross cluster replication functionality at leader cluster\ncross_cluster_replication_leader_full_access:\n  reserved: true\n  index_permissions:\n    - index_patterns:\n        - '*'\n      allowed_actions:\n        - \"indices:admin/plugins/replication/index/setup/validate\"\n        - \"indices:data/read/plugins/replication/changes\"\n        - \"indices:data/read/plugins/replication/file_chunk\"\n# Allows users to use all cross cluster replication functionality at follower cluster\ncross_cluster_replication_follower_full_access:\n  reserved: true\n  cluster_permissions:\n    - \"cluster:admin/plugins/replication/autofollow/update\"\n  index_permissions:\n    - index_patterns:\n        - '*'\n      allowed_actions:\n        - \"indices:admin/plugins/replication/index/setup/validate\"\n        - \"indices:data/write/plugins/replication/changes\"\n        - \"indices:admin/plugins/replication/index/start\"\n        - \"indices:admin/plugins/replication/index/pause\"\n        - \"indices:admin/plugins/replication/index/resume\"\n        - \"indices:admin/plugins/replication/index/stop\"\n        - \"indices:admin/plugins/replication/index/update\"\n        - \"indices:admin/plugins/replication/index/status_check\"",
      "config.yml": '_meta:\n  type: "config"\n  config_version: "2"\nconfig:\n  dynamic:\n    http:\n      anonymous_auth_enabled: false\n    authc:\n      basic_internal_auth_domain:\n        http_enabled: true\n        transport_enabled: true\n        order: "4"\n        http_authenticator:\n          type: basic\n          challenge: true\n        authentication_backend:\n          type: intern'
    }
  }
};

/***/ },

/***/ "./src/chunks/common/module-2228.js"
/*!******************************************!*\
  !*** ./src/chunks/common/module-2228.js ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.redisSentinal = exports.redisCluster = void 0;
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
const redisSentinal = exports.redisSentinal = {
  resource: {
    apiVersion: "redis.radondb.com/v1beta1",
    kind: "RedisSentinel",
    metadata: {
      name: "redis-sentinel",
      namespace: "redis-sentinel"
    },
    spec: {
      clusterSize: 3,
      kubernetesConfig: {
        redisVersion: "6.2.5",
        image: "radondb/redis:v6.2.5",
        imagePullPolicy: "Always",
        resources: {
          requests: {
            cpu: "101m",
            memory: "128Mi"
          },
          limits: {
            cpu: "101m",
            memory: "128Mi"
          }
        }
      },
      redisExporter: {
        enabled: true,
        image: "radondb/redis-exporter:v1.44.0",
        imagePullPolicy: "Always",
        resources: {
          requests: {
            cpu: "100m",
            memory: "128Mi"
          },
          limits: {
            cpu: "100m",
            memory: "128Mi"
          }
        }
      },
      redisReplica: {
        replicas: 3,
        redisConfig: {
          additionalRedisConfig: "redis-sentinel-external-config"
        },
        affinity: {
          podAntiAffinity: {
            preferredDuringSchedulingIgnoredDuringExecution: [{
              podAffinityTerm: {
                labelSelector: {
                  matchExpressions: [{
                    key: "redis.radondb.com/name",
                    operator: "In",
                    values: [111]
                  }]
                },
                topologyKey: "kubernetes.io/hostname"
              },
              weight: 1
            }]
          }
        }
      },
      aclConfig: {
        aclFile: "redis-sentinel-acl-config"
      },
      redisSentinel: {
        replicas: 3,
        sentinelConfig: {
          quorum: 2,
          parallelSyncs: 3
        },
        resources: {
          requests: {
            cpu: "100m",
            memory: "128Mi"
          },
          limits: {
            cpu: "100m",
            memory: "128Mi"
          }
        },
        affinity: {
          podAntiAffinity: {
            preferredDuringSchedulingIgnoredDuringExecution: [{
              podAffinityTerm: {
                labelSelector: {
                  matchExpressions: [{
                    key: "redis.radondb.com/name",
                    operator: "In",
                    values: [111]
                  }]
                },
                topologyKey: "kubernetes.io/hostname"
              },
              weight: 1
            }]
          }
        }
      },
      storage: {
        volumeClaimTemplate: {
          spec: {
            storageClassName: "standard",
            accessModes: ["ReadWriteOnce"],
            resources: {
              requests: {
                storage: "1Gi"
              }
            }
          }
        }
      }
    }
  },
  externalConfig: {
    apiVersion: "v1",
    kind: "ConfigMap",
    metadata: {
      namespace: "redis-sentinel",
      name: "redis-sentinel-external-config"
    },
    data: {
      "redis-external.conf": "aclfile /etc/redis/acl.conf.d/aclfile.conf\ntcp-keepalive 400\nslowlog-max-len 158\nstream-node-max-bytes 2048\nio-threads 1\nio-threads-do-reads no\nmaxmemory 0"
    }
  },
  secret: {
    apiVersion: "v1",
    kind: "Secret",
    metadata: {
      name: "redis-secret-password-secret",
      namespace: "redis-sentinel"
    },
    type: "Opaque",
    data: {
      password: "bWd3MjE2ODAwMA=="
    }
  },
  aclConfig: {
    apiVersion: "v1",
    kind: "ConfigMap",
    metadata: {
      namespace: "redis-sentinel",
      name: "redis-sentinel-acl-config"
    },
    data: {
      "aclfile.conf": "user radondb on >radondb123@ ~* &* +@all"
    }
  }
};
const redisCluster = exports.redisCluster = {
  resource: {
    apiVersion: "redis.radondb.com/v1beta1",
    kind: "RedisCluster",
    metadata: {
      name: "redis-cluster",
      namespace: "redis-cluster"
    },
    spec: {
      clusterSize: 3,
      kubernetesConfig: {
        redisVersion: "6.2.5",
        image: "radondb/redis:v6.2.5",
        imagePullPolicy: "IfNotPresent",
        resources: {
          requests: {
            cpu: "101m",
            memory: "128Mi"
          },
          limits: {
            cpu: "101m",
            memory: "128Mi"
          }
        }
      },
      redisExporter: {
        enabled: true,
        image: "radondb/redis-exporter:v1.44.0",
        imagePullPolicy: "IfNotPresent",
        resources: {
          requests: {
            cpu: "100m",
            memory: "128Mi"
          },
          limits: {
            cpu: "100m",
            memory: "128Mi"
          }
        }
      },
      redisLeader: {
        replicas: 3,
        redisConfig: {
          additionalRedisConfig: "redis-cluster-external-config"
        },
        affinity: {
          podAntiAffinity: {
            preferredDuringSchedulingIgnoredDuringExecution: [{
              podAffinityTerm: {
                labelSelector: {
                  matchExpressions: [{
                    key: "redis.radondb.com/name",
                    operator: "In",
                    values: [111]
                  }]
                },
                topologyKey: "kubernetes.io/hostname"
              },
              weight: 1
            }]
          }
        }
      },
      redisFollower: {
        replicas: 3,
        redisConfig: {
          additionalRedisConfig: "redis-cluster-external-config"
        },
        affinity: {
          podAntiAffinity: {
            preferredDuringSchedulingIgnoredDuringExecution: [{
              podAffinityTerm: {
                labelSelector: {
                  matchExpressions: [{
                    key: "redis.radondb.com/name",
                    operator: "In",
                    values: [111]
                  }]
                },
                topologyKey: "kubernetes.io/hostname"
              },
              weight: 1
            }]
          }
        }
      },
      aclConfig: {
        aclFile: "redis-cluster-acl-config"
      },
      storage: {
        volumeClaimTemplate: {
          spec: {
            storageClassName: "csi-standard",
            accessModes: ["ReadWriteOnce"],
            resources: {
              requests: {
                storage: "200Mi"
              }
            }
          }
        }
      },
      predixyExporter: {
        enabled: true,
        image: "radondb/predixy-exporter:v1.0.0",
        imagePullPolicy: "IfNotPresent",
        resources: {
          requests: {
            cpu: "100m",
            memory: "128Mi"
          },
          limits: {
            cpu: "100m",
            memory: "128Mi"
          }
        }
      },
      redisProxy: {
        enabled: false,
        replicas: 3,
        image: "radondb/predixy:v1.0.5",
        imagePullPolicy: "IfNotPresent",
        resources: {
          requests: {
            cpu: "101m",
            memory: "128Mi"
          },
          limits: {
            cpu: "101m",
            memory: "128Mi"
          }
        },
        affinity: {
          podAntiAffinity: {
            preferredDuringSchedulingIgnoredDuringExecution: [{
              podAffinityTerm: {
                labelSelector: {
                  matchExpressions: [{
                    key: "redis.radondb.com/name",
                    operator: "In",
                    values: [111]
                  }]
                },
                topologyKey: "kubernetes.io/hostname"
              },
              weight: 1
            }]
          }
        },
        predixyConfigParams: {
          clusterName: "redis-cluster",
          workerThreads: 2,
          clientTimeout: 0,
          bufSize: 1048576,
          masterReadPriority: 100,
          slaveReadPriority: 0,
          refreshInterval: 1,
          serverTimeout: 3,
          serverFailureLimit: 10,
          serverRetryTimeout: 5,
          keepAlive: 120
        }
      }
    }
  },
  externalConfig: {
    apiVersion: "v1",
    kind: "ConfigMap",
    metadata: {
      namespace: "redis-cluster",
      name: "redis-cluster-external-config"
    },
    data: {
      "redis-external.conf": 'maxmemory 128mb\nmaxmemory-policy volatile-lru\nactiverehashing yes\nappendonly yes\nappendfsync everysec\ntcp-keepalive 400\ncluster-node-timeout 15000\nslowlog-max-len 128\nstream-node-max-bytes 2048\nmaxclients 102400\nlatency-monitor-threshold 0\nmaxmemory-samples 3\nmin-slaves-max-lag 10\nmin-slaves-to-write 0\nno-appendfsync-on-rewrite no\nnotify-keyspace-events ""\nrepl-backlog-size 1mb\nrepl-backlog-ttl 3600\nrepl-timeout 60\nset-max-intset-entries 512\nslowlog-log-slower-than -1\nslowlog-max-len 128\nhash-max-ziplist-entries 512\nhash-max-ziplist-value 64\nzset-max-ziplist-entries 512\nzset-max-ziplist-value 64\nlua-time-limit 5000\nio-threads 1\nio-threads-do-reads no\nlogfile logfile\n'
    }
  },
  secret: {
    apiVersion: "v1",
    kind: "Secret",
    metadata: {
      name: "redis-secret-password-secret",
      namespace: "redis-cluster"
    },
    type: "Opaque",
    data: {
      password: "bWd3MjE2ODAwMA=="
    }
  },
  aclConfig: {
    apiVersion: "v1",
    kind: "ConfigMap",
    metadata: {
      namespace: "redis-cluster",
      name: "redis-cluster-acl-config"
    },
    data: {
      "aclfile.conf": "user radondb on >radondb123@ ~* &* +@all"
    }
  }
};

/***/ },

/***/ "./src/chunks/common/module-2229.js"
/*!******************************************!*\
  !*** ./src/chunks/common/module-2229.js ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.mongoYaml = void 0;
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
const mongoYaml = exports.mongoYaml = {
  resources: {
    apiVersion: "mongodbcommunity.mongodb.com/v1",
    kind: "MongoDBCommunity",
    metadata: {
      name: "mongodb"
    },
    spec: {
      members: 1,
      type: "ReplicaSet",
      version: "4.2.19",
      prometheus: {
        username: "Prometheus",
        passwordSecretRef: {
          name: "mongodb-metrics-password"
        }
      },
      security: {
        authentication: {
          modes: ["SCRAM"]
        }
      },
      users: [{
        name: "operator",
        db: "admin",
        passwordSecretRef: {
          name: "mongodb-operator-password"
        },
        roles: [{
          name: "root",
          db: "admin"
        }],
        scramCredentialsSecretName: "mongodb-operator-password"
      }, {
        name: "root",
        db: "admin",
        passwordSecretRef: {
          name: "mongodb-root-password"
        },
        roles: [{
          name: "root",
          db: "admin"
        }],
        scramCredentialsSecretName: "mongodb-root-password"
      }],
      additionalMongodConfig: {
        net: {
          port: 27017,
          maxIncomingConnections: 10000
        },
        storage: {
          wiredTiger: {
            engineConfig: {
              journalCompressor: "zlib"
            }
          }
        },
        replication: {
          oplogSizeMB: 10240,
          enableMajorityReadConcern: true
        },
        operationProfiling: {
          mode: "off",
          slowOpThresholdMs: 100
        },
        systemLog: {
          destination: "file",
          path: "/data/mongod.log",
          logAppend: true,
          logRotate: "reopen",
          component: {
            command: {
              verbosity: 0
            },
            index: {
              verbosity: 0
            },
            query: {
              verbosity: 0
            },
            network: {
              verbosity: 0
            },
            write: {
              verbosity: 0
            }
          }
        },
        setParameter: {
          cursorTimeoutMillis: 700000
        }
      },
      statefulSet: {
        spec: {
          template: {
            spec: {
              initContainers: [{
                name: "mongod-posthook",
                imagePullPolicy: "IfNotPresent",
                resources: {
                  limits: {
                    cpu: "0.2",
                    memory: "250M"
                  },
                  requests: {
                    cpu: "0.2",
                    memory: "250M"
                  }
                }
              }, {
                name: "mongodb-agent-readinessprobe",
                imagePullPolicy: "IfNotPresent",
                resources: {
                  limits: {
                    cpu: "0.2",
                    memory: "250M"
                  },
                  requests: {
                    cpu: "0.2",
                    memory: "250M"
                  }
                }
              }],
              containers: [{
                name: "mongod",
                imagePullPolicy: "IfNotPresent",
                resources: {
                  limits: {
                    cpu: "8",
                    memory: "16G"
                  },
                  requests: {
                    cpu: 2,
                    memory: "4G"
                  }
                }
              }, {
                name: "mongodb-agent",
                imagePullPolicy: "IfNotPresent",
                resources: {
                  limits: {
                    cpu: "0.2",
                    memory: "250M"
                  },
                  requests: {
                    cpu: "0.2",
                    memory: "250M"
                  }
                }
              }],
              affinity: {
                podAntiAffinity: {
                  preferredDuringSchedulingIgnoredDuringExecution: [{
                    podAffinityTerm: {
                      labelSelector: {
                        matchExpressions: [{
                          key: "app.kubernetes.io/instance",
                          operator: "In",
                          values: [111]
                        }]
                      },
                      topologyKey: "kubernetes.io/hostname"
                    },
                    weight: 1
                  }]
                }
              }
            }
          },
          volumeClaimTemplates: [{
            metadata: {
              name: "data-volume"
            },
            spec: {
              accessModes: ["ReadWriteOnce"],
              resources: {
                requests: {
                  storage: "100G"
                }
              },
              storageClassName: "csi-high-capacity"
            }
          }]
        }
      }
    }
  },
  masterSecret: {
    apiVersion: "v1",
    kind: "Secret",
    metadata: {
      name: "mongodb-operator-password"
    },
    type: "Opaque",
    stringData: {
      password: "operator_pwd"
    }
  },
  rootSecret: {
    apiVersion: "v1",
    kind: "Secret",
    metadata: {
      name: "mongodb-root-password"
    },
    type: "Opaque",
    stringData: {
      password: "root_pwd"
    }
  }
};

/***/ },

/***/ "./src/chunks/common/module-2230.js"
/*!******************************************!*\
  !*** ./src/chunks/common/module-2230.js ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ckYaml = void 0;
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
const ckYaml = exports.ckYaml = {
  resources: {
    apiVersion: "clickhouse.radondb.com/v1",
    kind: "ClickHouseInstallation",
    metadata: {
      name: "ck-cluster-11",
      namespace: "default"
    },
    spec: {
      metricsExporter: "on",
      configuration: {
        zookeeper: {
          install: true,
          replica: 3,
          port: 2181
        },
        users: {
          "readonly/profile": "readonly",
          "clickhouse/password": "c1ickh0use0perator",
          "clickhouse/networks/ip": ["127.0.0.1", "::/0"],
          "clickhouse/profile": "default",
          "clickhouse/quotas": "default"
        },
        profiles: {
          "readonly/readonly": "1",
          "default/max_memory_usage": 200000000
        },
        quotas: {
          "default/interval/duration": "3600"
        },
        settings: {
          "compression/case/method": "zstd",
          disable_internal_dns_cache: 1,
          max_server_memory_usage: 1800000000,
          "logger/log": "/var/lib/clickhouse/log/clickhouse-server.log",
          "logger/errorlog": "/var/lib/clickhouse/log/clickhouse-server.err.log",
          "logger/count": 10,
          "logger/size": "100M",
          timezone: "Asia/Shanghai"
        },
        clusters: [{
          name: "all-nodes",
          layout: {
            shardsCount: 1,
            replicasCount: 2
          }
        }]
      },
      defaults: {
        templates: {
          podTemplate: "pod-template-with-volume",
          dataVolumeClaimTemplate: "data",
          logVolumeClaimTemplate: "data",
          serviceTemplate: "chi-svc-template"
        }
      },
      templates: {
        serviceTemplates: [{
          name: "chi-svc-template",
          spec: {
            ports: [{
              name: "http",
              port: 8123
            }, {
              name: "tcp",
              port: 9000
            }],
            type: "NodePort"
          }
        }],
        podTemplates: [{
          name: "pod-template-with-volume",
          metadata: {
            annotations: {
              "backup.velero.io/backup-volumes": "data"
            }
          },
          spec: {
            affinity: {
              podAntiAffinity: {
                preferredDuringSchedulingIgnoredDuringExecution: [{
                  weight: 1,
                  podAffinityTerm: {
                    labelSelector: {
                      matchExpressions: [{
                        key: "clickhouse.radondb.com/chi",
                        operator: "In",
                        values: ["clickhouse"]
                      }]
                    },
                    topologyKey: "kubernetes.io/hostname"
                  }
                }]
              }
            },
            containers: [{
              name: "clickhouse",
              image: "radondb/clickhouse-server:v21.1.3.32-stable",
              imagePullPolicy: "IfNotPresent",
              readinessProbe: {
                exec: {
                  command: ["/usr/bin/clickhouse-client", "-q", "SELECT 1"]
                }
              },
              initialDelaySeconds: 10,
              periodSeconds: 30,
              successThreshold: 1,
              failureThreshold: 4,
              timeoutSeconds: 10,
              livenessProbe: {
                exec: {
                  command: ["/usr/bin/clickhouse-client", "-q", "SELECT 1"]
                },
                initialDelaySeconds: 60,
                periodSeconds: 30,
                successThreshold: 1,
                failureThreshold: 4,
                timeoutSeconds: 10
              },
              volumeMounts: [{
                name: "data",
                mountPath: "/var/lib/clickhouse"
              }],
              resources: {
                requests: {
                  memory: "1Gi",
                  cpu: "500m"
                },
                limits: {
                  memory: "1Gi",
                  cpu: "500m"
                }
              }
            }]
          }
        }],
        volumeClaimTemplates: [{
          name: "data",
          reclaimPolicy: "Retain",
          spec: {
            accessModes: ["ReadWriteOnce"],
            resources: {
              requests: {
                storage: "10Gi"
              }
            },
            storageClassName: "csi-qingcloud"
          }
        }]
      }
    }
  }
};

/***/ },

/***/ "./src/chunks/common/module-2231.js"
/*!******************************************!*\
  !*** ./src/chunks/common/module-2231.js ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.pgYaml = void 0;
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
const pgYaml = exports.pgYaml = {
  resources: {
    apiVersion: "postgres.radondb.io/v1",
    kind: "PostgreSQL",
    metadata: {
      name: "lzzhang"
    },
    spec: {
      action: "start",
      deletepvc: true,
      volume_type: "local",
      antiaffinity: {
        policy: "preferred",
        podAntiAffinityTerm: "autofailover-readwrite",
        topologyKey: "kubernetes.io/hostname"
      },
      backupCluster: {
        backupToS3: {
          policy: {
            retention: "REDUNDANCY 10"
          }
        }
      },
      services: [{
        selector: "autofailover",
        metadata: {
          name: "autofailover"
        },
        spec: {
          type: "ClusterIP",
          ports: [{
            name: "exporter",
            port: 9187
          }]
        }
      }, {
        selector: "primary",
        metadata: {
          name: "readwrite"
        },
        spec: {
          type: "ClusterIP",
          ports: [{
            name: "prime",
            port: 5432
          }, {
            name: "exporter",
            port: 9187
          }]
        }
      }, {
        selector: "standby-readonly",
        metadata: {
          name: "standby-readonly"
        },
        spec: {
          type: "ClusterIP",
          ports: [{
            name: "prime",
            port: 5432
          }, {
            name: "exporter",
            port: 9187
          }]
        }
      }],
      autofailover: {
        hbas: ["host all all all md5"],
        configs: ["enable_seqscan=on"],
        podspec: {
          terminationGracePeriodSeconds: 60,
          containers: [{
            image: "radondb/radondb-postgresql:12.12-v1.1.0",
            imagePullPolicy: "IfNotPresent",
            name: "postgresql",
            volumeMounts: [{
              name: "data",
              mountPath: "/var/lib/postgresql/data"
            }],
            resources: {
              limits: {
                memory: "500Mi",
                cpu: "0.5"
              }
            }
          }, {
            image: "radondb/radondb-postgres-exporter:v1.1.0",
            imagePullPolicy: "IfNotPresent",
            name: "exporter",
            volumeMounts: [{
              name: "data",
              mountPath: "/var/lib/postgresql/data"
            }],
            resources: {
              limits: {
                memory: "100Mi",
                cpu: "0.1"
              }
            }
          }]
        },
        volumeClaimTemplates: [{
          metadata: {
            name: "data"
          },
          spec: {
            accessModes: ["ReadWriteOnce"],
            resources: {
              requests: {
                storage: "1Gi"
              }
            }
          }
        }]
      },
      postgresql: {
        users: {
          admin: [],
          normal: []
        },
        hbas: ["host all all all md5"],
        configs: ["enable_seqscan=on", "autovacuum=true", "autovacuum_analyze_scale_factor=0.05", "autovacuum_vacuum_cost_delay=0", "autovacuum_vacuum_cost_limit=10000", "autovacuum_vacuum_scale_factor=0.02", "bgwriter_delay=10", "bgwriter_flush_after=512kB", "bgwriter_lru_maxpages=1000", "checkpoint_timeout=300", "commit_delay=0", "commit_siblings=5", "cpu_index_tuple_cost=0.005", "cpu_tuple_cost=0.01", "fsync=true", "full_page_writes=true", "idle_in_transaction_session_timeout=86400000", "jit=false", "log_min_duration_statement=10000", "log_min_messages=WARNING", "log_statement=none", "maintenance_work_mem=64MB", "max_connections=100", "max_replication_slots=15", "max_wal_senders=15", "max_worker_processes=20", "port=5432", "random_page_cost=1.1", "seq_page_cost=1", "shared_buffers=128MB", "statement_timeout=0", "synchronous_commit=on", "temp_buffers=1MB", "vacuum_defer_cleanup_age=10000", "wal_compression=false", "wal_level=replica", "wal_writer_delay=10", "wal_writer_flush_after=1MB", "work_mem=4MB"],
        readwriteinstance: {
          replicas: 2,
          podspec: {
            terminationGracePeriodSeconds: 60,
            containers: [{
              image: "radondb/radondb-postgresql:12.12-v1.1.0",
              imagePullPolicy: "IfNotPresent",
              name: "postgresql",
              volumeMounts: [{
                name: "data",
                mountPath: "/var/lib/postgresql/data"
              }],
              resources: {
                limits: {
                  memory: "200Mi",
                  cpu: "0.2"
                }
              }
            }, {
              image: "radondb/radondb-postgres-exporter:v1.1.0",
              imagePullPolicy: "IfNotPresent",
              name: "exporter",
              volumeMounts: [{
                name: "data",
                mountPath: "/var/lib/postgresql/data"
              }],
              resources: {
                limits: {
                  memory: "100Mi",
                  cpu: "0.1"
                }
              }
            }]
          },
          volumeClaimTemplates: [{
            metadata: {
              name: "data"
            },
            spec: {
              accessModes: ["ReadWriteOnce"],
              resources: {
                requests: {
                  storage: "1Gi"
                }
              }
            }
          }]
        },
        readonlyinstance: {
          streaming: "async",
          replicas: 0,
          podspec: {
            terminationGracePeriodSeconds: 60,
            containers: [{
              image: "radondb/radondb-postgresql:12.12-v1.1.0",
              imagePullPolicy: "IfNotPresent",
              name: "postgresql",
              volumeMounts: [{
                name: "data",
                mountPath: "/var/lib/postgresql/data"
              }],
              resources: {
                limits: {
                  memory: "200Mi",
                  cpu: "0.2"
                }
              }
            }, {
              image: "radondb/radondb-postgres-exporter:v1.1.0",
              imagePullPolicy: "IfNotPresent",
              name: "exporter",
              volumeMounts: [{
                name: "data",
                mountPath: "/var/lib/postgresql/data"
              }],
              resources: {
                limits: {
                  memory: "100Mi",
                  cpu: "0.1"
                }
              }
            }]
          },
          volumeClaimTemplates: [{
            metadata: {
              name: "data"
            },
            spec: {
              accessModes: ["ReadWriteOnce"],
              resources: {
                requests: {
                  storage: "1Gi"
                }
              }
            }
          }]
        }
      }
    }
  }
};

/***/ },

/***/ "./src/chunks/common/module-2232.js"
/*!******************************************!*\
  !*** ./src/chunks/common/module-2232.js ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.mysqlYaml = void 0;
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
const mysqlYaml = exports.mysqlYaml = {
  resources: {
    apiVersion: "mysql.radondb.com/v1alpha1",
    kind: "MysqlCluster",
    metadata: {
      name: "sample",
      namespace: "default"
    },
    spec: {
      replicas: 3,
      mysqlVersion: "5.7",
      backupSecretName: "$DMP-MANAGED-S3-SECRET$",
      mysqlOpts: {
        rootPassword: "",
        image: "percona/percona-server:5.7.39",
        rootHost: "localhost",
        user: "radondb_usr",
        password: "RadonDB@123",
        database: "radondb",
        initTokuDB: true,
        mysqlConf: {},
        resources: {
          requests: {
            cpu: "100m",
            memory: "256Mi"
          },
          limits: {
            cpu: "500m",
            memory: "1Gi"
          }
        }
      },
      xenonOpts: {
        image: "radondb/xenon:v2.3.0",
        admitDefeatHearbeatCount: 5,
        electionTimeout: 10000,
        resources: {
          requests: {
            cpu: "50m",
            memory: "128Mi"
          },
          limits: {
            cpu: "100m",
            memory: "256Mi"
          }
        }
      },
      metricsOpts: {
        enabled: true,
        image: "prom/mysqld-exporter:v0.12.1",
        resources: {
          requests: {
            cpu: "10m",
            memory: "32Mi"
          },
          limits: {
            cpu: "100m",
            memory: "128Mi"
          }
        }
      },
      podPolicy: {
        imagePullPolicy: "IfNotPresent",
        sidecarImage: "radondb/mysql-sidecar:v2.3.0",
        busyboxImage: "busybox:1.32",
        slowLogTail: false,
        auditLogTail: false,
        labels: {},
        annotations: {},
        affinity: {
          podAntiAffinity: {
            requiredDuringSchedulingIgnoredDuringExecution: [{
              labelSelector: {
                matchExpressions: [{
                  key: "mysql.radondb.com/cluster",
                  operator: "In",
                  values: ["mysql"]
                }]
              },
              topologyKey: "kubernetes.io/hostname"
            }]
          }
        },
        priorityClassName: "",
        schedulerName: "",
        extraResources: {
          requests: {
            cpu: "100m",
            memory: "500Mi"
          }
        }
      },
      persistence: {
        enabled: true,
        accessModes: ["ReadWriteOnce"],
        size: "10Gi"
      }
    }
  }
};

/***/ },

/***/ "./src/chunks/common/module-2554.js"
/*!******************************************!*\
  !*** ./src/chunks/common/module-2554.js ***!
  \******************************************/
(__unused_webpack_module, exports) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = exports["default"] = {
  tags: "_2KC8WkC9bqH1qrWvM039Pm",
  tagItem: "_3b369oJlYb0lwgL5S0A48o",
  tooltipContent: "_3KpkICBIAQvxNeZXP7y20N"
};

/***/ },

/***/ "./src/chunks/common/module-817.js"
/*!*****************************************!*\
  !*** ./src/chunks/common/module-817.js ***!
  \*****************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.convertAppIdToName = exports.ValuesSchema = exports.ValuesJSON = exports.SpecificationsOptions = exports.SpecificationOptionsObject = exports.RedisImage = exports.RadonDBAppIds = exports.RadonDBAppId = exports.PGImage = exports.MySQLSidecarImage = exports.MySQLOptsImage = void 0;
exports.generateClickHouseUserString = generateClickHouseUserString;
exports.getAppIdByKind = void 0;
exports.getCpuAndMemoryFromSpecifications = getCpuAndMemoryFromSpecifications;
exports.getSecretCrd = exports.getRedisSentinelRelatedResources = exports.getRedisClusterRelatedResources = exports.getOpenSearchRelatedResources = exports.getNodeRoleOptions = exports.getMongoDBRelatedResources = exports.getKafkaRelatedResources = exports.getECKRelatedResources = void 0;
exports.isValid = isValid;
exports.mergeRedisSentinelInstallationData = exports.mergeRedisClusterInstallationData = exports.mergePGInstallationData = exports.mergeOpenSearchInstallationData = exports.mergeMySQLInstallationData = exports.mergeMongoDBInstallationData = exports.mergeKafkaInstallationData = exports.mergeECKInstallationData = exports.mergeCKInstallationData = void 0;
exports.validateStorage = validateStorage;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-12.js */ "./src/unpacked/module-12.js");
__webpack_require__(/*! unpacked/module-135.js */ "./node_modules/core-js3/modules/es.symbol.description.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-29.js */ "./node_modules/core-js3/modules/es.array.find.js");
__webpack_require__(/*! unpacked/module-6.js */ "./node_modules/core-js3/modules/es.array.for-each.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-48.js */ "./node_modules/core-js3/modules/es.array.slice.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-27.js */ "./node_modules/core-js3/modules/es.number.constructor.js");
__webpack_require__(/*! unpacked/module-1525.js */ "./src/unpacked/module-1525.js");
__webpack_require__(/*! unpacked/module-932.js */ "./src/unpacked/module-932.js");
__webpack_require__(/*! unpacked/module-98.js */ "./node_modules/core-js3/modules/es.object.entries.js");
__webpack_require__(/*! unpacked/module-9.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptor.js");
__webpack_require__(/*! unpacked/module-13.js */ "./node_modules/core-js3/modules/es.object.get-own-property-descriptors.js");
__webpack_require__(/*! unpacked/module-10.js */ "./node_modules/core-js3/modules/es.object.keys.js");
__webpack_require__(/*! unpacked/module-316.js */ "./node_modules/core-js3/modules/es.object.values.js");
__webpack_require__(/*! unpacked/module-24.js */ "./node_modules/core-js3/modules/es.regexp.exec.js");
__webpack_require__(/*! unpacked/module-64.js */ "./node_modules/core-js3/modules/es.string.replace.js");
__webpack_require__(/*! unpacked/module-137.js */ "./node_modules/core-js3/modules/es.string.split.js");
__webpack_require__(/*! unpacked/module-7.js */ "./node_modules/core-js3/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! unpacked/module-58.js */ "./src/unpacked/module-58.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-31.js */ "./src/unpacked/module-31.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/slicedToArray */ "./src/utils/babel-helpers/slicedToArray.js"));
__webpack_require__(/*! unpacked/module-28.js */ "./node_modules/core-js3/modules/es.array.push.js");
__webpack_require__(/*! unpacked/module-191.js */ "./node_modules/core-js3/modules/es.date.to-json.js");
__webpack_require__(/*! unpacked/module-160.js */ "./node_modules/core-js3/modules/es.json.stringify.js");
__webpack_require__(/*! unpacked/module-34.js */ "./node_modules/core-js3/modules/es.object.define-properties.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-436.js */ "./src/unpacked/module-436.js");
__webpack_require__(/*! unpacked/module-319.js */ "./src/unpacked/module-319.js");
__webpack_require__(/*! unpacked/module-193.js */ "./node_modules/core-js3/modules/es.regexp.test.js");
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-903.js */ "./src/unpacked/module-903.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-63.js */ "./src/unpacked/module-63.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-334.js */ "./src/unpacked/module-334.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-26.js */ "./src/unpacked/module-26.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-74.js */ "./src/unpacked/module-74.js"));
var _base = __webpack_require__(/*! utils/base64 */ "./src/utils/base64.js");
var _module43 = __webpack_require__(/*! unpacked/module-2228.js */ "./src/unpacked/module-2228.js");
var _module44 = __webpack_require__(/*! unpacked/module-2229.js */ "./src/unpacked/module-2229.js");
var _module45 = __webpack_require__(/*! unpacked/module-2230.js */ "./src/unpacked/module-2230.js");
var _module46 = __webpack_require__(/*! unpacked/module-2231.js */ "./src/unpacked/module-2231.js");
var _module47 = __webpack_require__(/*! unpacked/module-2232.js */ "./src/unpacked/module-2232.js");
var _module48 = __webpack_require__(/*! unpacked/module-1527.js */ "./src/unpacked/module-1527.js");
var _module49 = __webpack_require__(/*! unpacked/module-1093.js */ "./src/unpacked/module-1093.js");
var _module50 = __webpack_require__(/*! unpacked/module-1528.js */ "./src/unpacked/module-1528.js");
var _module51 = __webpack_require__(/*! unpacked/module-1286.js */ "./src/unpacked/module-1286.js");
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module31 = (0, _recoverInterop.__recoverInterop)(_module);
const module96 = (0, _recoverInterop.__recoverInterop)(_module2);
const module903 = (0, _recoverInterop.__recoverInterop)(_module3);
const module63 = (0, _recoverInterop.__recoverInterop)(_module4);
const module334 = (0, _recoverInterop.__recoverInterop)(_module5);
const module26 = (0, _recoverInterop.__recoverInterop)(_module6);
const module74 = (0, _recoverInterop.__recoverInterop)(_module7);
const getAppIdByKind = function (e) {
  return I[e];
};
exports.getAppIdByKind = getAppIdByKind;
const convertAppIdToName = function (e) {
  return module26(Object.entries(RadonDBAppId).find(t => module96(t, 2)[1] === e), "[0]");
};
exports.convertAppIdToName = convertAppIdToName;
const mergeCKInstallationData = function ({
  name,
  valuesJson,
  namespace
}) {
  const n = module903({}, ValuesJSON[RadonDBAppId.ClickHouse], module334(valuesJson, isValid));
  const l = {
    ..._module45.ckYaml.resources
  };
  module74(l, "metadata.name", name);
  module74(l, "metadata.namespace", namespace);
  module74(l, "spec.templates.podTemplates[0].spec.affinity.podAntiAffinity.preferredDuringSchedulingIgnoredDuringExecution[0].podAffinityTerm.labelSelector.matchExpressions[0].values", [name]);
  let u = JSON.stringify(l);
  const {
    specifications,
    volume,
    volumeType,
    nodes,
    replicasets,
    username,
    password
  } = n;
  const g = getCpuAndMemoryFromSpecifications(specifications);
  const {
    cpu,
    memory
  } = g;
  u = u.replace(/{"memory":"1Gi","cpu":"500m"}/g, `{"memory":"${memory}","cpu":"${cpu}"}`);
  u = (u = (u = volumeType ? u.replace("csi-qingcloud", volumeType) : u.replace(',"storageClassName":"csi-qingcloud"', "")).replace('{"storage":"10Gi"}', `{"storage":"${volume}"}`)).replace('{"shardsCount":1,"replicasCount":2}', `{"shardsCount":${Number(nodes)},"replicasCount":${Number(replicasets)}}`);
  if (_module51.userNameRegx.test(username) && _module51.passwordRegx.test(password)) {
    u = u.replace('"clickhouse/password":"c1ickh0use0perator","clickhouse/networks/ip":["127.0.0.1","::/0"],"clickhouse/profile":"default","clickhouse/quotas":"default"', generateClickHouseUserString(username, password));
  }
  return u;
};
exports.mergeCKInstallationData = mergeCKInstallationData;
const mergeMySQLInstallationData = function ({
  name,
  valuesJson,
  namespace,
  restoreParams
}) {
  const l = module903({}, ValuesJSON[RadonDBAppId.MySQL], module334(valuesJson, isValid));
  const {
    version,
    specifications,
    volume,
    volumeType,
    nodes
  } = l;
  const d = getCpuAndMemoryFromSpecifications(specifications);
  const m = JSON.parse(JSON.stringify(_module47.mysqlYaml.resources));
  module74(m, "metadata.name", name);
  module74(m, "metadata.namespace", namespace);
  module74(m, "spec.mysqlOpts.resources.requests", d);
  module74(m, "spec.mysqlOpts.resources.limits", d);
  module74(m, "spec.replicas", nodes + 1);
  module74(m, "spec.persistence.storageClass", volumeType);
  module74(m, "spec.persistence.size", volume);
  module74(m, "spec.mysqlVersion", version);
  module74(m, "spec.podPolicy.sidecarImage", MySQLSidecarImage[version]);
  module74(m, "spec.mysqlOpts.image", MySQLOptsImage[version]);
  module74(m, "spec.podPolicy.affinity.podAntiAffinity.requiredDuringSchedulingIgnoredDuringExecution[0].labelSelector.matchExpressions[0].values", [name]);
  if (restoreParams) {
    module74(m, "spec.restoreFrom", restoreParams.restoreFrom);
  }
  return JSON.stringify(m);
};
exports.mergeMySQLInstallationData = mergeMySQLInstallationData;
const mergeRedisClusterInstallationData = function ({
  name,
  namespace,
  valuesJson
}) {
  const n = module903({}, ValuesJSON[RadonDBAppId.MySQL], module334(valuesJson, isValid));
  const {
    version,
    volume,
    volumeType,
    nodes,
    password,
    specifications,
    predixyNodes,
    predixySpecification,
    endpointType
  } = n;
  const y = getCpuAndMemoryFromSpecifications(specifications);
  const E = JSON.parse(JSON.stringify(_module43.redisCluster.resource));
  J(E, {
    name,
    namespace,
    volume,
    volumeType,
    nodes,
    password,
    cm: y,
    version
  });
  module74(E, "spec.clusterSize", nodes);
  module74(E, "spec.redisLeader.replicas", nodes);
  module74(E, "spec.redisFollower.replicas", nodes);
  module74(E, "spec.kubernetesConfig.image", RedisImage[version]);
  if (version === "7.0.4" && predixyNodes === 0 && endpointType === "true") {
    module74(E, "spec.kubernetesConfig.endpointType", "hostname");
  }
  module74(E, "spec.redisLeader.redisConfig.additionalRedisConfig", `${name}-external-config`);
  module74(E, "spec.redisFollower.redisConfig.additionalRedisConfig", `${name}-external-config`);
  module74(E, "spec.redisLeader.affinity.podAntiAffinity.preferredDuringSchedulingIgnoredDuringExecution[0].podAffinityTerm.labelSelector.matchExpressions[0].values", [name]);
  module74(E, "spec.redisFollower.affinity.podAntiAffinity.preferredDuringSchedulingIgnoredDuringExecution[0].podAffinityTerm.labelSelector.matchExpressions[0].values", [name]);
  module74(E, "spec.redisProxy.affinity.podAntiAffinity.preferredDuringSchedulingIgnoredDuringExecution[0].podAffinityTerm.labelSelector.matchExpressions[0].values", [name]);
  module74(E, "spec.redisProxy.enabled", predixyNodes > 0);
  module74(E, "spec.redisProxy.replicas", predixyNodes);
  module74(E, "spec.redisProxy.predixyConfigParams.clusterName", name);
  const b = getCpuAndMemoryFromSpecifications(predixySpecification);
  module74(E, "spec.redisProxy.resources.requests", b);
  module74(E, "spec.redisProxy.resources.limits", b);
  return JSON.stringify(E);
};
exports.mergeRedisClusterInstallationData = mergeRedisClusterInstallationData;
const getRedisClusterRelatedResources = function (e) {
  return Z(_module43.redisCluster, e);
};
exports.getRedisClusterRelatedResources = getRedisClusterRelatedResources;
const mergeRedisSentinelInstallationData = function ({
  name,
  namespace,
  valuesJson
}) {
  const n = module903({}, ValuesJSON[RadonDBAppId.MySQL], module334(valuesJson, isValid));
  const {
    version,
    volume,
    volumeType,
    nodes,
    password
  } = n;
  const s = getCpuAndMemoryFromSpecifications(n.specifications);
  const d = {
    ..._module43.redisSentinal.resource
  };
  J(d, {
    name,
    namespace,
    volume,
    volumeType,
    password,
    cm: s,
    version
  });
  module74(d, "spec.clusterSize", nodes);
  module74(d, "spec.redisReplica.replicas", nodes);
  module74(d, "spec.kubernetesConfig.image", `radondb/redis:v${version}`);
  module74(d, "spec.redisReplica.redisConfig.additionalRedisConfig", `${name}-external-config`);
  module74(d, "spec.redisSentinel.affinity.podAntiAffinity.preferredDuringSchedulingIgnoredDuringExecution[0].podAffinityTerm.labelSelector.matchExpressions[0].values", [name]);
  module74(d, "spec.redisReplica.affinity.podAntiAffinity.preferredDuringSchedulingIgnoredDuringExecution[0].podAffinityTerm.labelSelector.matchExpressions[0].values", [name]);
  return JSON.stringify(d);
};
exports.mergeRedisSentinelInstallationData = mergeRedisSentinelInstallationData;
const getRedisSentinelRelatedResources = function (e) {
  return Z(_module43.redisSentinal, e);
};
exports.getRedisSentinelRelatedResources = getRedisSentinelRelatedResources;
const mergeMongoDBInstallationData = function ({
  name,
  namespace,
  valuesJson
}) {
  const n = module903({}, ValuesJSON[RadonDBAppId.MySQL], module334(valuesJson, isValid));
  const {
    specifications,
    nodes,
    volume,
    volumeType,
    version
  } = n;
  const s = getCpuAndMemoryFromSpecifications(specifications);
  const d = {
    ..._module44.mongoYaml.resources
  };
  module74(d, "metadata.name", name);
  module74(d, "metadata.namespace", namespace);
  module74(d, "spec.members", nodes);
  module74(d, "spec.version", version);
  module74(d, "spec.statefulSet.spec.template.spec.containers[0].resources.requests", s);
  module74(d, "spec.statefulSet.spec.template.spec.containers[0].resources.limits", s);
  module74(d, "spec.prometheus.passwordSecretRef.name", `${name}-metrics-password`);
  module74(d, "spec.statefulSet.spec.volumeClaimTemplates[0].spec.storageClassName", volumeType);
  module74(d, "spec.statefulSet.spec.volumeClaimTemplates[0].spec.resources.requests.storage", volume);
  module74(d, "spec.users[0].passwordSecretRef.name", `${name}-operator-password`);
  module74(d, "spec.users[0].scramCredentialsSecretName", `${name}-operator-password`);
  module74(d, "spec.users[1].passwordSecretRef.name", `${name}-root-password`);
  module74(d, "spec.users[1].scramCredentialsSecretName", `${name}-root-password`);
  module74(d, "spec.statefulSet.spec.template.spec.affinity.podAntiAffinity.preferredDuringSchedulingIgnoredDuringExecution[0].podAffinityTerm.labelSelector.matchExpressions[0].values", [name]);
  return JSON.stringify(d);
};
exports.mergeMongoDBInstallationData = mergeMongoDBInstallationData;
const getMongoDBRelatedResources = function ({
  name,
  namespace
}) {
  const r = [];
  const mongoYaml_masterSecret = _module44.mongoYaml.masterSecret;
  module74(mongoYaml_masterSecret, "metadata.name", `${name}-operator-password`);
  module74(mongoYaml_masterSecret, "metadata.namespace", namespace);
  r.push({
    name: "masterSecret",
    data: JSON.stringify(mongoYaml_masterSecret)
  });
  const mongoYaml_rootSecret = _module44.mongoYaml.rootSecret;
  module74(mongoYaml_rootSecret, "metadata.name", `${name}-root-password`);
  module74(mongoYaml_rootSecret, "metadata.namespace", namespace);
  r.push({
    name: "rootSecret",
    data: JSON.stringify(mongoYaml_rootSecret)
  });
  return r;
};
exports.getMongoDBRelatedResources = getMongoDBRelatedResources;
const getSecretCrd = function ({
  name,
  namespace
}) {
  const r = {
    apiVersion: "v1",
    kind: "Secret",
    type: "Opaque",
    metadata: {
      name: `${name}-userpassword-secret`,
      namespace
    }
  };
  return JSON.stringify(r);
};
exports.getSecretCrd = getSecretCrd;
const mergePGInstallationData = function ({
  name,
  valuesJson,
  namespace,
  restoreParams
}) {
  const l = module903({}, ValuesJSON[RadonDBAppId.PostgreSQL], module334(valuesJson, isValid));
  const {
    specifications,
    nodes,
    volume,
    volumeType,
    version
  } = l;
  const d = getCpuAndMemoryFromSpecifications(specifications);
  const m = JSON.parse(JSON.stringify(_module46.pgYaml.resources));
  module74(m, "metadata.name", name);
  module74(m, "metadata.namespace", namespace);
  module74(m, "spec.postgresql.readwriteinstance.podspec.containers[0].resources", {
    requests: d,
    limits: d
  });
  module74(m, "spec.autofailover.volumeClaimTemplates[0].spec.storageClassName", volumeType);
  module74(m, "spec.postgresql.readwriteinstance.volumeClaimTemplates[0].spec.storageClassName", volumeType);
  module74(m, "spec.postgresql.readwriteinstance.volumeClaimTemplates[0].spec.resources.requests.storage", volume);
  module74(m, "spec.postgresql.readwriteinstance.replicas", nodes);
  module74(m, "spec.autofailover.podspec.containers[0].image", `${PGImage[version]}-v1.2.0`);
  module74(m, "spec.postgresql.readwriteinstance.podspec.containers[0].image", `${PGImage[version]}-v1.2.0`);
  module74(m, "spec.postgresql.readonlyinstance.podspec.containers[0].image", `${PGImage[version]}-v1.2.0`);
  module74(m, "spec.deletes3", true);
  if (restoreParams) {
    const {
      backupId,
      S3,
      backupToS3Name
    } = restoreParams;
    module74(m, "spec.restore.froms3.recovery", backupId);
    module74(m, "spec.restore.froms3.name", backupToS3Name);
    module74(m, "spec.S3", S3);
  }
  return JSON.stringify(m);
};
exports.mergePGInstallationData = mergePGInstallationData;
const mergeECKInstallationData = function ({
  name,
  valuesJson,
  namespace
}) {
  const n = module903({}, ValuesJSON[RadonDBAppId.Elasticsearch], module334(valuesJson, isValid));
  const l = JSON.parse(JSON.stringify(_module48.eckYaml.resources));
  module74(l, "metadata.name", name);
  module74(l, "metadata.namespace", namespace);
  const u = module26(l, "spec.nodeSets");
  const i = Object.entries(n).map(e => {
    const t = module96(e, 2);
    const a = t[0];
    const r = t[1];
    const {
      nodes,
      specifications,
      volume,
      volumeType
    } = r;
    const s = u.find(e => e.name === a);
    if (s) {
      const f = getCpuAndMemoryFromSpecifications(specifications);
      const d = module26(s, "name");
      module74(s, "name", `${d}-${volume.toLowerCase()}`);
      module74(s, "count", nodes);
      module74(s, "podTemplate.spec.containers[0].resources", {
        limits: f,
        requests: f
      });
      module74(s, "podTemplate.spec.containers[0].env[0].value", `-Xms${parseInt(f.memory, 10) / 2}g -Xmx${parseInt(f.memory, 10) / 2}g`);
      module74(s, "volumeClaimTemplates[0].spec.resources.requests.storage", volume);
      module74(s, "volumeClaimTemplates[0].spec.storageClassName", volumeType);
    }
    return s;
  }).filter(e => e && e.count > 0);
  module74(l, "spec.nodeSets", i);
  return JSON.stringify(l);
};
exports.mergeECKInstallationData = mergeECKInstallationData;
const getECKRelatedResources = function ({
  name,
  kibanaValues,
  namespace
}) {
  const {
    nodes,
    specifications
  } = kibanaValues;
  const u = JSON.parse(JSON.stringify(_module48.eckYaml.kibana));
  const o = getCpuAndMemoryFromSpecifications(specifications);
  module74(u, "metadata.name", name);
  module74(u, "metadata.namespace", namespace);
  module74(u, "spec.count", nodes);
  module74(u, "spec.elasticsearchRef.name", name);
  module74(u, "spec.elasticsearchRef.namespace", namespace);
  module74(u, "spec.podTemplate.spec.containers[0].resources.requests", o);
  module74(u, "spec.podTemplate.spec.containers[0].resources.limits", o);
  return [{
    name: "kibana",
    data: JSON.stringify(u)
  }];
};
exports.getECKRelatedResources = getECKRelatedResources;
const mergeKafkaInstallationData = function ({
  name,
  valuesJson,
  namespace
}) {
  const n = module903({}, ValuesJSON[RadonDBAppId.Kafka], module334(valuesJson, isValid));
  const l = JSON.parse(JSON.stringify(_module49.kafkaYaml.resources));
  module74(l, "metadata.name", name);
  module74(l, "metadata.namespace", namespace);
  const {
    kafka,
    zookeeper
  } = n;
  const i = getCpuAndMemoryFromSpecifications(kafka.specifications);
  module74(l, "spec.kafka.version", kafka.version);
  module74(l, "spec.kafka.replicas", kafka.nodes);
  module74(l, "spec.kafka.resources.requests", i);
  module74(l, "spec.kafka.resources.limits", i);
  module74(l, "spec.kafka.storage.volumes[0]", {
    id: 0,
    type: "persistent-claim",
    class: kafka.volumeType,
    size: kafka.volume,
    deleteClaim: true
  });
  module74(l, "spec.kafka.metricsConfig.valueFrom.configMapKeyRef.name", `${name}-kafka-metrics`);
  const c = getCpuAndMemoryFromSpecifications(zookeeper.specifications);
  module74(l, "spec.zookeeper.replicas", zookeeper.nodes);
  module74(l, "spec.zookeeper.resources.requests", c);
  module74(l, "spec.zookeeper.resources.limits", c);
  module74(l, "spec.zookeeper.storage", {
    type: "persistent-claim",
    class: zookeeper.volumeType,
    size: zookeeper.volume,
    deleteClaim: true
  });
  module74(l, "spec.zookeeper.metricsConfig.valueFrom.configMapKeyRef.name", `${name}-kafka-metrics`);
  return JSON.stringify(l);
};
exports.mergeKafkaInstallationData = mergeKafkaInstallationData;
const getKafkaRelatedResources = function ({
  namespace,
  name
}) {
  const r = JSON.parse(JSON.stringify(_module49.kafkaYaml.configMap));
  module74(r, "metadata.name", `${name}-kafka-metrics`);
  module74(r, "metadata.namespace", namespace);
  const n = JSON.parse(JSON.stringify(_module49.kafkaYaml.podMonitor));
  module74(n, "metadata.name", `${name}-kafka-resources-metrics`);
  module74(n, "metadata.namespace", namespace);
  module74(n, "spec.namespaceSelector.matchNames", [namespace]);
  return [{
    name: "configMap",
    data: JSON.stringify(r)
  }, {
    name: "podMonitor",
    data: JSON.stringify(n)
  }];
};
exports.getKafkaRelatedResources = getKafkaRelatedResources;
const mergeOpenSearchInstallationData = function ({
  name,
  valuesJson,
  namespace
}) {
  const n = module903({}, ValuesJSON[RadonDBAppId.OpenSearch], module334(valuesJson, isValid));
  const {
    version,
    password: _password,
    username: _username,
    logstash: _logstash,
    dashboard,
    ...rest
  } = n;
  const s = JSON.parse(JSON.stringify(_module50.opensearchYaml.resources));
  module74(s, "metadata.name", name);
  module74(s, "metadata.namespace", namespace);
  module74(s, "spec.general.serviceName", name);
  module74(s, "spec.general.version", version);
  module74(s, "spec.dashboards.version", version);
  if (version === "2.8.0") {
    module74(s, 'spec.general.additionalConfig["prometheus.indices"]', "false");
  }
  module74(s, "spec.dashboards.enable", dashboard.nodes > 0);
  module74(s, "spec.dashboards.replicas", dashboard.nodes);
  module74(s, "spec.security.config.securityConfigSecret.name", `${name}-securityconfig-secret`);
  module74(s, "spec.security.config.adminCredentialsSecret.name", `${name}-admin-secret`);
  const d = getCpuAndMemoryFromSpecifications(dashboard.specifications);
  module74(s, "spec.dashboards.resources", {
    limits: d,
    requests: d
  });
  const v = module26(s, "spec.nodePools");
  const g = Object.entries(rest).map(e => {
    const t = module96(e, 2);
    const a = t[0];
    const r = t[1];
    const {
      nodes,
      specifications,
      volume,
      volumeType
    } = r;
    let c = v.find(e => module26(e, 'additionalConfig["node.attr.datatier"]') === a);
    if (!c) {
      c = JSON.parse(JSON.stringify(_module50.opensearchYaml.node));
      module74(c, 'additionalConfig["node.attr.datatier"]', a);
      module74(c, "component", `data-node-${a}`);
    }
    const s = getCpuAndMemoryFromSpecifications(specifications);
    module74(c, "replicas", nodes);
    module74(c, "resources", {
      limits: s,
      requests: s
    });
    module74(c, "diskSize", volume);
    module74(c, "persistence.pvc.storageClass", volumeType);
    return c;
  }).filter(e => e && e.replicas > 0);
  module74(s, "spec.nodePools", g);
  return JSON.stringify(s);
};
exports.mergeOpenSearchInstallationData = mergeOpenSearchInstallationData;
const getOpenSearchRelatedResources = function ({
  name,
  logstashValues,
  namespace,
  username,
  password
}) {
  const {
    nodes,
    specifications
  } = logstashValues;
  const i = JSON.parse(JSON.stringify(_module50.opensearchYaml.logstash));
  const c = getCpuAndMemoryFromSpecifications(specifications);
  module74(i, "metadata.name", name);
  module74(i, "metadata.namespace", namespace);
  module74(i, "spec.replicas", nodes);
  const s = parseInt(c.memory, 10) / 2;
  module74(i, "spec.config.jvm", `-Xms${s}g -Xmx${s}g`);
  module74(i, "spec.config.openSearchInfo.openSearchCluster.name", name);
  module74(i, "spec.config.openSearchInfo.openSearchCluster.namespace", namespace);
  module74(i, "spec.config.openSearchInfo.openSearchService.name", name);
  module74(i, "spec.podTemplate.spec.containers[0].resources.requests", c);
  module74(i, "spec.podTemplate.spec.containers[0].resources.limits", c);
  const f = JSON.parse(JSON.stringify(_module50.opensearchYaml.logstashSecret));
  module74(f, "metadata.name", `${name}-logstash-password`);
  module74(f, "metadata.namespace", namespace);
  const d = JSON.parse(JSON.stringify(_module50.opensearchYaml.adminSecret));
  module74(d, "metadata.name", `${name}-admin-secret`);
  module74(d, "metadata.namespace", namespace);
  module74(d, "data.username", (0, _base.safeBtoa)(username || "admin"));
  module74(d, "data.password", (0, _base.safeBtoa)(password || "RadonDB@123"));
  const p = JSON.parse(JSON.stringify(_module50.opensearchYaml.securityConfigSecret));
  module74(p, "metadata.name", `${name}-securityconfig-secret`);
  module74(p, "metadata.namespace", namespace);
  return [{
    name: "logstash",
    data: JSON.stringify(i)
  }, {
    name: "logstashSecret",
    data: JSON.stringify(f)
  }, {
    name: "adminSecret",
    data: JSON.stringify(d)
  }, {
    name: "securityConfigSecret",
    data: JSON.stringify(p)
  }];
};
exports.getOpenSearchRelatedResources = getOpenSearchRelatedResources;
let i;
let c;
let s;
var RadonDBAppId = exports.RadonDBAppId = {
  ClickHouse: "app-clickhouse",
  PostgreSQL: "app-postgresql",
  MySQL: "app-mysql",
  RedisSentinel: "app-redis-sentinel",
  RedisCluster: "app-redis-cluster",
  MongoDB: "app-mongodb",
  Elasticsearch: "app-eck",
  Kafka: "app-kafka",
  OpenSearch: "app-opensearch"
};
const RadonDBAppIds = exports.RadonDBAppIds = Object.values(RadonDBAppId);
var I = {
  ClickHouseInstallation: RadonDBAppId.ClickHouse,
  PostgreSQL: RadonDBAppId.PostgreSQL,
  MysqlCluster: RadonDBAppId.MySQL,
  RedisSentinel: RadonDBAppId.RedisSentinel,
  RedisCluster: RadonDBAppId.RedisCluster,
  MongoDBCommunity: RadonDBAppId.MongoDB,
  Elasticsearch: RadonDBAppId.Elasticsearch,
  Kafka: RadonDBAppId.Kafka,
  OpenSearchCluster: RadonDBAppId.OpenSearch
};
var MySQLSidecarImage = exports.MySQLSidecarImage = {
  5.7: "radondb/mysql57-sidecar:v2.3.0",
  "8.0": "radondb/mysql80-sidecar:v2.3.0"
};
var MySQLOptsImage = exports.MySQLOptsImage = {
  5.7: "percona/percona-server:5.7.39",
  "8.0": "percona/percona-server:8.0.25"
};
var RedisImage = exports.RedisImage = {
  "6.2.5": "radondb/redis:v6.2.5",
  "7.0.4": "nosqlpass/redis:v7.0.4"
};
var PGImage = exports.PGImage = {
  12: "radondb/radondb-postgresql:12.12",
  13: "radondb/radondb-postgresql:13.8",
  14: "radondb/radondb-postgresql:14.5",
  15: "radondb/radondb-postgresql:15.0"
};
const SpecificationsOptions = exports.SpecificationsOptions = [{
  label: t("CORE_GIB", {
    core: "1",
    gib: "1"
  }),
  value: "1000m, 1Gi"
}, {
  label: t("CORE_GIB", {
    core: "1",
    gib: "2"
  }),
  value: "1000m, 2Gi"
}, {
  label: t("CORE_GIB", {
    core: "2",
    gib: "4"
  }),
  value: "2000m, 4Gi"
}, {
  label: t("CORE_GIB", {
    core: "2",
    gib: "8"
  }),
  value: "2000m, 8Gi"
}, {
  label: t("CORE_GIB", {
    core: "4",
    gib: "8"
  }),
  value: "4000m, 8Gi"
}, {
  label: t("CORE_GIB", {
    core: "4",
    gib: "16"
  }),
  value: "4000m, 16Gi"
}, {
  label: t("CORE_GIB", {
    core: "8",
    gib: "16"
  }),
  value: "8000m, 16Gi"
}, {
  label: t("CORE_GIB", {
    core: "8",
    gib: "32"
  }),
  value: "8000m, 32Gi"
}, {
  label: t("CORE_GIB", {
    core: "8",
    gib: "64"
  }),
  value: "8000m, 64Gi"
}, {
  label: t("CORE_GIB", {
    core: "16",
    gib: "32"
  }),
  value: "16000m, 32Gi"
}, {
  label: t("CORE_GIB", {
    core: "16",
    gib: "64"
  }),
  value: "16000m, 64Gi"
}, {
  label: t("CORE_GIB", {
    core: "16",
    gib: "128"
  }),
  value: "16000m, 128Gi"
}, {
  label: t("CORE_GIB", {
    core: "32",
    gib: "128"
  }),
  value: "32000m, 128Gi"
}];
const L = [{
  label: t("CORE_GIB", {
    core: "1",
    gib: "1"
  }),
  value: "1000m, 1Gi"
}, {
  label: t("CORE_GIB", {
    core: "2",
    gib: "4"
  }),
  value: "2000m, 4Gi"
}, {
  label: t("CORE_GIB", {
    core: "2",
    gib: "8"
  }),
  value: "2000m, 8Gi"
}, {
  label: t("CORE_GIB", {
    core: "4",
    gib: "8"
  }),
  value: "4000m, 8Gi"
}, {
  label: t("CORE_GIB", {
    core: "8",
    gib: "16"
  }),
  value: "8000m, 16Gi"
}, {
  label: t("CORE_GIB", {
    core: "8",
    gib: "32"
  }),
  value: "8000m, 32Gi"
}];
const x = [{
  label: t("CORE_GIB", {
    core: "1",
    gib: "1"
  }),
  value: "1000m, 1Gi"
}, {
  label: t("CORE_GIB", {
    core: "2",
    gib: "2"
  }),
  value: "2000m, 2Gi"
}, {
  label: t("CORE_GIB", {
    core: "4",
    gib: "4"
  }),
  value: "4000m, 4Gi"
}];
const options = [{
  label: t("CORE_GIB", {
    core: "2",
    gib: "4"
  }),
  value: "2000m, 4Gi"
}, {
  label: t("CORE_GIB", {
    core: "2",
    gib: "8"
  }),
  value: "2000m, 8Gi"
}, {
  label: t("CORE_GIB", {
    core: "4",
    gib: "8"
  }),
  value: "4000m, 8Gi"
}, {
  label: t("CORE_GIB", {
    core: "8",
    gib: "16"
  }),
  value: "8000m, 16Gi"
}, {
  label: t("CORE_GIB", {
    core: "8",
    gib: "32"
  }),
  value: "8000m, 32Gi"
}];
const z = [{
  label: t("CORE_GIB", {
    core: "2",
    gib: "4"
  }),
  value: "2000m, 4Gi"
}, {
  label: t("CORE_GIB", {
    core: "2",
    gib: "8"
  }),
  value: "2000m, 8Gi"
}, {
  label: t("CORE_GIB", {
    core: "4",
    gib: "16"
  }),
  value: "4000m, 16Gi"
}, {
  label: t("CORE_GIB", {
    core: "8",
    gib: "32"
  }),
  value: "8000m, 32Gi"
}, {
  label: t("CORE_GIB", {
    core: "16",
    gib: "64"
  }),
  value: "16000m, 64Gi"
}];
const F = {
  master: [{
    label: t("CORE_GIB", {
      core: "1",
      gib: "2"
    }),
    value: "1000m, 2Gi"
  }, {
    label: t("CORE_GIB", {
      core: "2",
      gib: "4"
    }),
    value: "2000m, 4Gi"
  }, {
    label: t("CORE_GIB", {
      core: "2",
      gib: "8"
    }),
    value: "2000m, 8Gi"
  }, {
    label: t("CORE_GIB", {
      core: "4",
      gib: "8"
    }),
    value: "4000m, 8Gi"
  }, {
    label: t("CORE_GIB", {
      core: "8",
      gib: "16"
    }),
    value: "8000m, 16Gi"
  }],
  hot: z,
  warm: z,
  cold: z,
  kibana: [{
    label: t("CORE_GIB", {
      core: "1",
      gib: "2"
    }),
    value: "1000m, 2Gi"
  }, {
    label: t("CORE_GIB", {
      core: "2",
      gib: "4"
    }),
    value: "2000m, 4Gi"
  }, {
    label: t("CORE_GIB", {
      core: "4",
      gib: "8"
    }),
    value: "4000m, 8Gi"
  }, {
    label: t("CORE_GIB", {
      core: "8",
      gib: "16"
    }),
    value: "8000m, 16Gi"
  }]
};
const G = {
  master: F.master,
  hot: z,
  warm: z,
  cold: z,
  dashboard: F.master,
  logstash: [{
    label: t("CORE_GIB", {
      core: "1",
      gib: "2"
    }),
    value: "1000m, 2Gi"
  }, {
    label: t("CORE_GIB", {
      core: "2",
      gib: "4"
    }),
    value: "2000m, 4Gi"
  }, {
    label: t("CORE_GIB", {
      core: "2",
      gib: "8"
    }),
    value: "2000m, 8Gi"
  }, {
    label: t("CORE_GIB", {
      core: "4",
      gib: "8"
    }),
    value: "4000m, 8Gi"
  }, {
    label: t("CORE_GIB", {
      core: "4",
      gib: "16"
    }),
    value: "4000m, 16Gi"
  }, {
    label: t("CORE_GIB", {
      core: "8",
      gib: "16"
    }),
    value: "8000m, 16Gi"
  }, {
    label: t("CORE_GIB", {
      core: "8",
      gib: "32"
    }),
    value: "8000m, 32Gi"
  }, {
    label: t("CORE_GIB", {
      core: "16",
      gib: "32"
    }),
    value: "16000m, 32Gi"
  }, {
    label: t("CORE_GIB", {
      core: "16",
      gib: "64"
    }),
    value: "16000m, 64Gi"
  }]
};
const V = {
  kafka: [{
    label: t("CORE_GIB", {
      core: "1",
      gib: "1"
    }),
    value: "1000m, 1Gi"
  }, {
    label: t("CORE_GIB", {
      core: "1",
      gib: "2"
    }),
    value: "1000m, 2Gi"
  }, {
    label: t("CORE_GIB", {
      core: "2",
      gib: "4"
    }),
    value: "2000m, 4Gi"
  }, {
    label: t("CORE_GIB", {
      core: "4",
      gib: "8"
    }),
    value: "4000m, 8Gi"
  }, {
    label: t("CORE_GIB", {
      core: "8",
      gib: "16"
    }),
    value: "8000m, 16Gi"
  }, {
    label: t("CORE_GIB", {
      core: "8",
      gib: "32"
    }),
    value: "8000m, 32Gi"
  }],
  zookeeper: [{
    label: t("CORE_GIB", {
      core: "1",
      gib: "1"
    }),
    value: "1000m, 1Gi"
  }, {
    label: t("CORE_GIB", {
      core: "1",
      gib: "2"
    }),
    value: "1000m, 2Gi"
  }, {
    label: t("CORE_GIB", {
      core: "2",
      gib: "4"
    }),
    value: "2000m, 4Gi"
  }, {
    label: t("CORE_GIB", {
      core: "4",
      gib: "8"
    }),
    value: "4000m, 8Gi"
  }]
};
const getNodeRoleOptions = function (e, a) {
  switch (e) {
    case RadonDBAppId.Elasticsearch:
      return (e => {
        switch (e) {
          case "specifications":
            return [{
              label: t("PRIMARY_NODE"),
              value: "master"
            }, {
              label: t("HOT_NODE"),
              value: "hot"
            }, {
              label: t("WARM_NODE"),
              value: "warm"
            }, {
              label: t("COLD_NODE"),
              value: "cold"
            }, {
              label: t("KIBANA_NODE"),
              value: "kibana"
            }];
          case "storage":
            return [{
              label: t("HOT_NODE"),
              value: "hot"
            }, {
              label: t("WARM_NODE"),
              value: "warm"
            }, {
              label: t("COLD_NODE"),
              value: "cold"
            }];
          case "node":
            return [{
              label: t("HOT_NODE"),
              value: "hot"
            }, {
              label: t("WARM_NODE"),
              value: "warm"
            }, {
              label: t("COLD_NODE"),
              value: "cold"
            }, {
              label: t("KIBANA_NODE"),
              value: "kibana"
            }];
          default:
            return [];
        }
      })(a);
    case RadonDBAppId.RedisCluster:
      return (e => {
        switch (e) {
          case "specifications":
          case "node":
            return [{
              label: t("REDIS_NODE"),
              value: "master"
            }, {
              label: t("PROXY_NODE"),
              value: "proxy"
            }];
          default:
            return [];
        }
      })(a);
    case RadonDBAppId.Kafka:
      return (e => {
        switch (e) {
          case "specifications":
          case "node":
          case "storage":
            return [{
              label: t("KAFKA_NODE"),
              value: "kafka"
            }, {
              label: t("ZOOKEEPER_NODE"),
              value: "zookeeper"
            }];
          default:
            return [];
        }
      })(a);
    case RadonDBAppId.OpenSearch:
      return (e => {
        switch (e) {
          case "specifications":
            return [{
              label: t("PRIMARY_NODE"),
              value: "master"
            }, {
              label: t("HOT_NODE"),
              value: "hot"
            }, {
              label: t("WARM_NODE"),
              value: "warm"
            }, {
              label: t("COLD_NODE"),
              value: "cold"
            }, {
              label: t("DASHBOARD_NODE"),
              value: "dashboard"
            }, {
              label: t("LOGSTASH_NODE"),
              value: "logstash"
            }];
          case "storage":
            return [{
              label: t("HOT_NODE"),
              value: "hot"
            }, {
              label: t("WARM_NODE"),
              value: "warm"
            }, {
              label: t("COLD_NODE"),
              value: "cold"
            }];
          case "node":
            return [{
              label: t("HOT_NODE"),
              value: "hot"
            }, {
              label: t("WARM_NODE"),
              value: "warm"
            }, {
              label: t("COLD_NODE"),
              value: "cold"
            }, {
              label: t("DASHBOARD_NODE"),
              value: "dashboard"
            }, {
              label: t("LOGSTASH_NODE"),
              value: "logstash"
            }];
          default:
            return [];
        }
      })(a);
    default:
      return [];
  }
};
exports.getNodeRoleOptions = getNodeRoleOptions;
i = {};
module31(i, RadonDBAppId.ClickHouse, SpecificationsOptions.slice(1, -1));
module31(i, RadonDBAppId.MySQL, SpecificationsOptions);
module31(i, RadonDBAppId.PostgreSQL, SpecificationsOptions);
module31(i, RadonDBAppId.RedisCluster, {
  master: L,
  proxy: x
});
module31(i, RadonDBAppId.RedisSentinel, L);
module31(i, RadonDBAppId.MongoDB, options);
module31(i, RadonDBAppId.Elasticsearch, F);
module31(i, RadonDBAppId.Kafka, V);
module31(i, RadonDBAppId.OpenSearch, G);
const SpecificationOptionsObject = exports.SpecificationOptionsObject = i;
function validateStorage(e, {
  app_id,
  max,
  nodeRole,
  oldStorage
} = {}) {
  const o = parseFloat(e);
  if (!Number.isInteger(o)) {
    return {
      error: true,
      message: t("VALUE_MUST_BE_INTEGER")
    };
  }
  if (max && o > max) {
    return {
      error: true,
      message: t("VALUE_CANNOT_BE_GREATER_THAN_VALUE", {
        max
      })
    };
  }
  switch (app_id) {
    case RadonDBAppId.Elasticsearch:
      if (Number.isNaN(o) || o < 20) {
        return {
          error: true,
          message: t("VALUE_CANNOT_BE_LESS_THAN_20")
        };
      }
      break;
    case RadonDBAppId.Kafka:
      if (oldStorage && o < oldStorage) {
        return {
          error: true,
          message: t("VOLUME_CAPACITY_CANNOT_REDUCE.")
        };
      }
      if (nodeRole === "kafka") {
        if (Number.isNaN(o) || o < 20) {
          return {
            error: true,
            message: t("VALUE_CANNOT_BE_LESS_THAN_20")
          };
        }
        break;
      }
    default:
      if (Number.isNaN(o) || o < 10) {
        return {
          error: true,
          message: t("VALUE_CANNOT_BE_LESS_THAN_10")
        };
      }
  }
  return {
    error: false
  };
}
c = {};
module31(c, RadonDBAppId.ClickHouse, {
  $schema: "https://json-schema.org/draft-07/schema#",
  type: "object",
  properties: {
    specifications: {
      type: "string",
      title: "RESOURCES",
      render: "select",
      options: SpecificationsOptions.slice(1, -1)
    },
    volumeType: {
      type: "string",
      title: "STORAGE_CLASS",
      description: "DATABASE_STORAGE_CLASS_DESC",
      render: "select",
      options: []
    },
    volume: {
      type: "string",
      title: "VOLUME",
      render: "slider",
      sliderMin: 0,
      sliderMax: 2048,
      sliderUnit: "Gi",
      rowExclusive: true,
      validator: validateStorage
    },
    nodes: {
      type: "integer",
      title: "SHARD_COUNT",
      min: 1,
      max: 100,
      showFunc: true,
      tooltipContent: "DATABASE_NODE_TIP"
    },
    replicasets: {
      type: "integer",
      title: "REPLICA_COUNT",
      min: 1,
      max: 3,
      showFunc: true
    },
    username: {
      type: "string",
      title: "USERNAME",
      description: "DATABASE_USERNAME_DESC",
      rules: [{
        pattern: _module51.userNameRegx,
        message: "INVALID_DATABASE_USERNAME_DESC"
      }]
    },
    password: {
      ..._module51.Password,
      type: "string",
      render: "password",
      title: "PASSWORD"
    }
  }
});
module31(c, RadonDBAppId.PostgreSQL, {
  $schema: "https://json-schema.org/draft-07/schema#",
  type: "object",
  properties: {
    version: {
      type: "string",
      title: "KERNEL_VERSION",
      description: "DATABASE_KERNEL_VERSION_DESC",
      render: "select",
      options: [{
        label: "PostgreSQL 12",
        value: "12"
      }, {
        label: "PostgreSQL 13",
        value: "13"
      }, {
        label: "PostgreSQL 14",
        value: "14"
      }, {
        label: "PostgreSQL 15",
        value: "15"
      }],
      rowExclusive: true,
      halfRow: true
    },
    specifications: {
      type: "string",
      title: "RESOURCES",
      render: "select",
      options: SpecificationsOptions
    },
    volumeType: {
      type: "string",
      title: "STORAGE_CLASS",
      description: "DATABASE_STORAGE_CLASS_DESC",
      render: "select",
      options: []
    },
    volume: {
      type: "string",
      title: "VOLUME",
      render: "slider",
      sliderMin: 0,
      sliderMax: 1024,
      sliderUnit: "Gi",
      rowExclusive: true,
      validator: validateStorage
    },
    nodes: {
      type: "integer",
      title: "DATA_NODE_COUNT",
      min: 2,
      max: 8,
      showFunc: true,
      halfRow: true
    }
  }
});
module31(c, RadonDBAppId.MySQL, {
  $schema: "https://json-schema.org/draft-07/schema#",
  type: "object",
  properties: {
    version: {
      type: "string",
      title: "KERNEL_VERSION",
      description: "DATABASE_KERNEL_VERSION_DESC",
      render: "select",
      options: [{
        label: "MySQL 5.7",
        value: "5.7"
      }, {
        label: "MySQL 8.0",
        value: "8.0"
      }],
      halfRow: true
    },
    specifications: {
      type: "string",
      title: "RESOURCES",
      render: "select",
      options: SpecificationsOptions
    },
    volumeType: {
      type: "string",
      title: "STORAGE_CLASS",
      description: "DATABASE_STORAGE_CLASS_DESC",
      render: "select",
      options: []
    },
    volume: {
      type: "string",
      title: "VOLUME",
      render: "slider",
      sliderMin: 0,
      sliderMax: 2048,
      sliderUnit: "Gi",
      rowExclusive: true,
      validator: validateStorage
    },
    nodes: {
      type: "string",
      title: "STANDBY_DATABASE_COUNT",
      description: "STANDBY_DATABASE_COUNT_DESC",
      render: "select",
      options: [1, 2, 4].map(e => ({
        label: e,
        value: e
      })),
      halfRow: true
    }
  }
});
module31(c, RadonDBAppId.RedisCluster, {
  $schema: "https://json-schema.org/draft-07/schema#",
  type: "object",
  properties: {
    version: {
      type: "string",
      title: "KERNEL_VERSION",
      description: "DATABASE_KERNEL_VERSION_DESC",
      render: "select",
      options: [{
        label: "Redis 7.0.4",
        value: "7.0.4"
      }],
      halfRow: true
    },
    specifications: {
      type: "string",
      title: "RESOURCES",
      render: "select",
      options: L
    },
    volumeType: {
      type: "string",
      title: "STORAGE_CLASS",
      description: "DATABASE_STORAGE_CLASS_DESC",
      render: "select",
      options: []
    },
    volume: {
      type: "string",
      title: "VOLUME",
      render: "slider",
      sliderMin: 0,
      sliderMax: 1024,
      sliderUnit: "Gi",
      rowExclusive: true,
      validator: validateStorage
    },
    nodes: {
      type: "integer",
      title: "SHARD_COUNT",
      min: 3,
      max: 50,
      showFunc: true
    },
    password: {
      type: "string",
      title: "PASSWORD",
      description: "REDIS_PASSWORD_DESC",
      render: "password",
      placeholder: "OPTIONAL",
      rules: [{
        pattern: /[a-zA-Z0-9!@#$%^&*()./;]{6,31}$/,
        message: "INVALID_REDIS_PASSWORD_DESC"
      }]
    },
    predixyNodes: {
      type: "integer",
      title: "PROXY_NODE_COUNT",
      min: 0,
      max: 50,
      showFunc: true,
      advanced: true
    },
    predixySpecification: {
      type: "string",
      title: "PROXY_NODE_RESOURCES",
      render: "select",
      options: x,
      advanced: true
    },
    endpointType: {
      type: "string",
      title: "ENDPOINT_TYPE",
      description: "ENDPOINT_TYPE_DESC",
      render: "select",
      options: [{
        label: t("ENABLED"),
        value: "true"
      }, {
        label: t("DISABLED"),
        value: "false"
      }],
      forVersion: ["7.0.4"],
      advanced: true,
      halfRow: true
    }
  }
});
module31(c, RadonDBAppId.RedisSentinel, {
  $schema: "https://json-schema.org/draft-07/schema#",
  type: "object",
  properties: {
    version: {
      type: "string",
      title: "KERNEL_VERSION",
      description: "DATABASE_KERNEL_VERSION_DESC",
      render: "select",
      options: [{
        label: "Redis 7.0.4",
        value: "7.0.4"
      }],
      halfRow: true
    },
    specifications: {
      type: "string",
      title: "RESOURCES",
      render: "select",
      options: L
    },
    volumeType: {
      type: "string",
      title: "STORAGE_CLASS",
      description: "DATABASE_STORAGE_CLASS_DESC",
      render: "select",
      options: []
    },
    volume: {
      type: "string",
      title: "VOLUME",
      render: "slider",
      sliderMin: 0,
      sliderMax: 1024,
      sliderUnit: "Gi",
      rowExclusive: true,
      validator: validateStorage
    },
    nodes: {
      type: "string",
      title: "REDIS_NODE_COUNT",
      description: "REDIS_NODE_COUNT_DESC",
      render: "select",
      options: [3, 5, 7].map(e => ({
        label: e,
        value: e
      }))
    },
    password: {
      type: "string",
      title: "PASSWORD",
      description: "REDIS_PASSWORD_DESC",
      render: "password",
      placeholder: "OPTIONAL",
      rules: [{
        pattern: /[a-zA-Z0-9!@#$%^&*()./;]{6,31}$/,
        message: "INVALID_REDIS_PASSWORD_DESC"
      }]
    }
  }
});
module31(c, RadonDBAppId.MongoDB, {
  $schema: "https://json-schema.org/draft-07/schema#",
  type: "object",
  properties: {
    version: {
      type: "string",
      title: "KERNEL_VERSION",
      description: "DATABASE_KERNEL_VERSION_DESC",
      render: "select",
      options: [{
        label: "MongoDB 4.2.19",
        value: "4.2.19"
      }],
      halfRow: true
    },
    specifications: {
      type: "string",
      title: "RESOURCES",
      render: "select",
      options
    },
    volumeType: {
      type: "string",
      title: "STORAGE_CLASS",
      description: "DATABASE_STORAGE_CLASS_DESC",
      render: "select",
      options: []
    },
    volume: {
      type: "string",
      title: "VOLUME",
      render: "slider",
      sliderMin: 0,
      sliderMax: 2048,
      sliderUnit: "Gi",
      rowExclusive: true,
      validator: validateStorage
    },
    nodes: {
      type: "string",
      title: "NODE_COUNT",
      description: "MONGODB_NODE_COUNT_DESC",
      render: "select",
      options: [1, 3, 5, 7].map(e => ({
        label: e,
        value: e
      })),
      halfRow: true
    }
  }
});
module31(c, RadonDBAppId.Elasticsearch, {
  $schema: "https://json-schema.org/draft-07/schema#",
  type: "object",
  properties: {
    version: {
      type: "string",
      title: "KERNEL_VERSION",
      description: "DATABASE_KERNEL_VERSION_DESC",
      render: "select",
      options: [{
        label: "ES 7.17.5",
        value: "7.17.5"
      }],
      halfRow: true
    },
    master: {
      type: "object",
      title: "PRIMARY_NODE_SETTINGS",
      icon: "pod",
      properties: {
        specifications: {
          type: "string",
          title: "RESOURCES",
          description: "PRIMARY_NODE_RESOURCES_DESC",
          render: "select",
          options: F.master
        },
        nodes: {
          type: "string",
          title: "PRIMARY_NODE_COUNT",
          disabled: true
        },
        volumeType: {
          type: "string",
          title: "STORAGE_CLASS",
          description: "DATABASE_STORAGE_CLASS_DESC",
          render: "select",
          options: [],
          halfRow: true
        },
        volume: {
          type: "alert",
          title: "VOLUME",
          content: "VOLUMN_PERSIST",
          rowExclusive: true
        }
      }
    },
    hot: {
      type: "object",
      title: "HOT_NODE_SETTINGS",
      icon: "pod",
      properties: {
        specifications: {
          type: "string",
          title: "RESOURCES",
          description: "HOT_NODE_RESOURCES_DESC",
          render: "select",
          options: F.hot
        },
        nodes: {
          type: "integer",
          title: "HOT_NODE_COUNT",
          min: 1,
          max: 200,
          showFunc: true
        },
        volumeType: {
          type: "string",
          title: "STORAGE_CLASS",
          description: "DATABASE_STORAGE_CLASS_DESC",
          render: "select",
          options: [],
          halfRow: true
        },
        volume: {
          type: "string",
          title: "VOLUME",
          render: "slider",
          sliderMin: 0,
          sliderMax: 1920,
          sliderUnit: "Gi",
          rowExclusive: true,
          validator: validateStorage
        }
      }
    },
    warm: {
      type: "object",
      title: "WARM_NODE_SETTINGS",
      icon: "pod",
      properties: {
        specifications: {
          type: "string",
          title: "RESOURCES",
          description: "WARM_NODE_RESOURCES_DESC",
          render: "select",
          options: F.warm
        },
        nodes: {
          type: "integer",
          title: "WARM_NODE_COUNT",
          min: 0,
          max: 200,
          showFunc: true
        },
        volumeType: {
          type: "string",
          title: "STORAGE_CLASS",
          description: "DATABASE_STORAGE_CLASS_DESC",
          render: "select",
          options: [],
          halfRow: true
        },
        volume: {
          type: "string",
          title: "VOLUME",
          render: "slider",
          sliderMin: 0,
          sliderMax: 1920,
          sliderUnit: "Gi",
          rowExclusive: true,
          validator: validateStorage
        }
      }
    },
    cold: {
      type: "object",
      title: "COLD_NODE_SETTINGS",
      icon: "pod",
      properties: {
        specifications: {
          type: "string",
          title: "RESOURCES",
          description: "COLD_NODE_RESOURCES_DESC",
          render: "select",
          options: F.cold
        },
        nodes: {
          type: "integer",
          title: "COLD_NODE_COUNT",
          min: 0,
          max: 200,
          showFunc: true
        },
        volumeType: {
          type: "string",
          title: "STORAGE_CLASS",
          description: "DATABASE_STORAGE_CLASS_DESC",
          render: "select",
          options: [],
          halfRow: true
        },
        volume: {
          type: "string",
          title: "VOLUME",
          render: "slider",
          sliderMin: 0,
          sliderMax: 3200,
          sliderUnit: "Gi",
          rowExclusive: true,
          validator: validateStorage
        }
      }
    },
    kibana: {
      type: "object",
      title: "KIBANA_NODE_SETTINGS",
      icon: "pod",
      properties: {
        specifications: {
          type: "string",
          title: "RESOURCES",
          description: "KIBANA_NODE_RESOURCES_DESC",
          render: "select",
          options: F.kibana
        },
        nodes: {
          type: "integer",
          title: "KIBANA_NODE_COUNT",
          min: 0,
          max: 8,
          showFunc: true
        }
      }
    }
  }
});
module31(c, RadonDBAppId.Kafka, {
  $schema: "https://json-schema.org/draft-07/schema#",
  type: "object",
  properties: {
    empty: {
      type: ""
    },
    kafka: {
      type: "object",
      title: "KAFKA_SETTINGS",
      icon: "pod",
      properties: {
        version: {
          type: "string",
          title: "KAFKA_VERSION",
          description: "  ",
          render: "select",
          options: [{
            label: "Kafka 3.2.0",
            value: "3.2.0"
          }],
          halfRow: true
        },
        specifications: {
          type: "string",
          title: "RESOURCES",
          description: "KAFKA_NODE_RESOURCES_DESC",
          render: "select",
          options: V.kafka
        },
        nodes: {
          type: "integer",
          title: "KAFKA_NODE_COUNT",
          min: 3,
          max: 100,
          showFunc: true
        },
        volumeType: {
          type: "string",
          title: "STORAGE_CLASS",
          description: "DATABASE_STORAGE_CLASS_DESC",
          render: "select",
          options: [],
          halfRowL: true
        },
        volume: {
          type: "string",
          title: "VOLUME",
          render: "slider",
          sliderMin: 0,
          sliderMax: 2048,
          sliderUnit: "Gi",
          rowExclusive: true,
          validator: validateStorage
        }
      }
    },
    zookeeper: {
      type: "object",
      title: "ZOOKEEPER_SETTINGS",
      icon: "pod",
      properties: {
        specifications: {
          type: "string",
          title: "RESOURCES",
          description: "ZOOKEEPER_NODE_RESOURCES_DESC",
          render: "select",
          options: V.zookeeper
        },
        nodes: {
          type: "string",
          title: "ZOOKEEPER_NODE_COUNT",
          render: "select",
          options: [1, 3, 5, 7, 9].map(e => ({
            label: e,
            value: e
          }))
        },
        volumeType: {
          type: "string",
          title: "STORAGE_CLASS",
          description: "DATABASE_STORAGE_CLASS_DESC",
          render: "select",
          options: [],
          halfRow: true
        },
        volume: {
          type: "string",
          title: "VOLUME",
          render: "slider",
          sliderMin: 0,
          sliderMax: 100,
          sliderUnit: "Gi",
          rowExclusive: true,
          validator: validateStorage
        }
      }
    }
  }
});
module31(c, RadonDBAppId.OpenSearch, {
  $schema: "https://json-schema.org/draft-07/schema#",
  type: "object",
  unfoldAdvanced: true,
  properties: {
    version: {
      type: "string",
      title: "KERNEL_VERSION",
      description: "DATABASE_KERNEL_VERSION_DESC",
      render: "select",
      options: [{
        label: "OpenSearch 2.8.0",
        value: "2.8.0"
      }],
      halfRow: true
    },
    username: {
      type: "string",
      title: "USERNAME",
      rules: [{
        required: true,
        message: "USERNAME_EMPTY_DESC"
      }],
      advanced: true
    },
    password: {
      type: "string",
      title: "PASSWORD",
      description: _module51.Password.description,
      rules: _module51.Password.rules,
      advanced: true
    },
    master: {
      type: "object",
      title: "PRIMARY_NODE_SETTINGS",
      icon: "pod",
      properties: {
        specifications: {
          type: "string",
          title: "RESOURCES",
          description: "PRIMARY_NODE_RESOURCES_DESC",
          render: "select",
          options: G.master
        },
        nodes: {
          type: "string",
          title: "PRIMARY_NODE_COUNT",
          description: "PRIMARY_NODE_COUNT_DESC",
          disabled: true
        },
        volumeType: {
          type: "string",
          title: "STORAGE_CLASS",
          description: "DATABASE_STORAGE_CLASS_DESC",
          render: "select",
          options: [],
          halfRow: true
        },
        volume: {
          type: "alert",
          title: "VOLUME",
          content: "VOLUMN_PERSIST",
          rowExclusive: true
        }
      }
    },
    hot: {
      type: "object",
      title: "HOT_NODE_SETTINGS",
      icon: "pod",
      properties: {
        specifications: {
          type: "string",
          title: "RESOURCES",
          description: "HOT_NODE_RESOURCES_DESC",
          render: "select",
          options: G.hot
        },
        nodes: {
          type: "integer",
          title: "HOT_NODE_COUNT",
          min: 1,
          max: 200,
          showFunc: true
        },
        volumeType: {
          type: "string",
          title: "STORAGE_CLASS",
          description: "DATABASE_STORAGE_CLASS_DESC",
          render: "select",
          options: [],
          halfRow: true
        },
        volume: {
          type: "string",
          title: "VOLUME",
          render: "slider",
          sliderMin: 0,
          sliderMax: 15360,
          sliderUnit: "Gi",
          rowExclusive: true,
          validator: validateStorage
        }
      }
    },
    warm: {
      type: "object",
      title: "WARM_NODE_SETTINGS",
      icon: "pod",
      properties: {
        specifications: {
          type: "string",
          title: "RESOURCES",
          description: "WARM_NODE_RESOURCES_DESC",
          render: "select",
          options: G.warm
        },
        nodes: {
          type: "integer",
          title: "WARM_NODE_COUNT",
          min: 0,
          max: 200,
          showFunc: true
        },
        volumeType: {
          type: "string",
          title: "STORAGE_CLASS",
          description: "DATABASE_STORAGE_CLASS_DESC",
          render: "select",
          options: [],
          halfRow: true
        },
        volume: {
          type: "string",
          title: "VOLUME",
          render: "slider",
          sliderMin: 0,
          sliderMax: 15360,
          sliderUnit: "Gi",
          rowExclusive: true,
          validator: validateStorage
        }
      }
    },
    cold: {
      type: "object",
      title: "COLD_NODE_SETTINGS",
      icon: "pod",
      properties: {
        specifications: {
          type: "string",
          title: "RESOURCES",
          description: "COLD_NODE_RESOURCES_DESC",
          render: "select",
          options: G.cold
        },
        nodes: {
          type: "integer",
          title: "COLD_NODE_COUNT",
          min: 0,
          max: 200,
          showFunc: true
        },
        volumeType: {
          type: "string",
          title: "STORAGE_CLASS",
          description: "DATABASE_STORAGE_CLASS_DESC",
          render: "select",
          options: [],
          halfRow: true
        },
        volume: {
          type: "string",
          title: "VOLUME",
          render: "slider",
          sliderMin: 0,
          sliderMax: 15360,
          sliderUnit: "Gi",
          rowExclusive: true,
          validator: validateStorage
        }
      }
    },
    dashboard: {
      type: "object",
      title: t("DASHBOARD_NODE_SETTINGS"),
      icon: "pod",
      properties: {
        specifications: {
          type: "string",
          title: "RESOURCES",
          description: "DASHBOARD_NODE_RESOURCES_DESC",
          render: "select",
          options: G.dashboard
        },
        nodes: {
          type: "integer",
          title: "DASHOBOARD_NODE_COUNT",
          min: 0,
          max: 8,
          showFunc: true
        }
      }
    },
    logstash: {
      type: "object",
      title: t("LOGSTASH_NODE_SETTINGS"),
      icon: "pod",
      properties: {
        specifications: {
          type: "string",
          title: "RESOURCES",
          description: "LOGSTASH_NODE_RESOURCES_DESC",
          render: "select",
          options: G.logstash
        },
        nodes: {
          type: "integer",
          title: "LOGSTASH_NODE_COUNT",
          min: 0,
          max: 10,
          showFunc: true
        }
      }
    }
  }
});
const ValuesSchema = exports.ValuesSchema = c;
s = {};
module31(s, RadonDBAppId.ClickHouse, {
  specifications: "2000m, 4Gi",
  volumeType: "",
  volume: "10Gi",
  nodes: 1,
  replicasets: 2,
  username: "clickhouse",
  password: "C1ickh0use-0perator",
  port: 8123
});
module31(s, RadonDBAppId.PostgreSQL, {
  version: "12",
  specifications: "1000m, 1Gi",
  volumeType: "qingcloud",
  volume: "10Gi",
  nodes: 2
});
module31(s, RadonDBAppId.MySQL, {
  version: "5.7",
  specifications: "1000m, 1Gi",
  volumeType: "qingcloud",
  volume: "10Gi",
  nodes: 2
});
module31(s, RadonDBAppId.RedisCluster, {
  version: "7.0.4",
  specifications: "2000m, 4Gi",
  volumeType: "qingcloud",
  volume: "10Gi",
  nodes: 3,
  password: "",
  predixyNodes: 0,
  predixySpecification: "1000m, 1Gi",
  endpointType: "false"
});
module31(s, RadonDBAppId.RedisSentinel, {
  version: "7.0.4",
  specifications: "2000m, 4Gi",
  volumeType: "qingcloud",
  volume: "10Gi",
  nodes: 3,
  password: ""
});
module31(s, RadonDBAppId.MongoDB, {
  version: "4.2.19",
  specifications: "2000m, 8Gi",
  volumeType: "qingcloud",
  volume: "10Gi",
  nodes: 3
});
module31(s, RadonDBAppId.Elasticsearch, {
  version: "7.17.5",
  master: {
    specifications: "1000m, 2Gi",
    nodes: 3,
    volume: "20Gi"
  },
  hot: {
    specifications: "2000m, 4Gi",
    nodes: 2,
    volume: "20Gi"
  },
  warm: {
    specifications: "2000m, 4Gi",
    nodes: 0,
    volume: "20Gi"
  },
  cold: {
    specifications: "2000m, 4Gi",
    nodes: 0,
    volume: "20Gi"
  },
  kibana: {
    specifications: "1000m, 2Gi",
    nodes: 0
  }
});
module31(s, RadonDBAppId.Kafka, {
  kafka: {
    version: "3.2.0",
    specifications: "1000m, 2Gi",
    nodes: 3,
    volume: "20Gi"
  },
  zookeeper: {
    specifications: "1000m, 1Gi",
    nodes: 3,
    volume: "10Gi"
  }
});
module31(s, RadonDBAppId.OpenSearch, {
  version: "2.8.0",
  username: "admin",
  password: "RadonDB@123",
  master: {
    specifications: "1000m, 2Gi",
    nodes: 3,
    volume: "20Gi"
  },
  hot: {
    specifications: "2000m, 4Gi",
    nodes: 2,
    volume: "20Gi"
  },
  warm: {
    specifications: "2000m, 4Gi",
    nodes: 0,
    volume: "20Gi"
  },
  cold: {
    specifications: "2000m, 4Gi",
    nodes: 0,
    volume: "20Gi"
  },
  dashboard: {
    specifications: "1000m, 2Gi",
    nodes: 1
  },
  logstash: {
    specifications: "1000m, 2Gi",
    nodes: 0
  }
});
var ValuesJSON = exports.ValuesJSON = s;
function isValid(e) {
  return Number.isInteger(e) || !module63(e);
}
function generateClickHouseUserString(e, t) {
  return `"${e}/password":"${t}","${e}/networks/ip":["127.0.0.1","::/0"],"${e}/profile":"default","${e}/quotas":"default"`;
}
function getCpuAndMemoryFromSpecifications(e) {
  const t = e.split(", ");
  const a = module96(t, 2);
  return {
    cpu: a[0],
    memory: a[1]
  };
}
function J(e, {
  name,
  namespace,
  volume,
  volumeType,
  password,
  cm,
  version
}) {
  module74(e, "metadata.name", name);
  module74(e, "metadata.namespace", namespace);
  if (password) {
    module74(e, "spec.kubernetesConfig.redisSecret", {
      name: `${name}-password-secret`,
      key: "password"
    });
  }
  module74(e, "spec.aclConfig.aclFile", `${name}-acl-config`);
  module74(e, "spec.storage.volumeClaimTemplate.spec.storageClassName", volumeType);
  module74(e, "spec.storage.volumeClaimTemplate.spec.resources.requests.storage", volume);
  module74(e, "spec.kubernetesConfig.resources.requests", cm);
  module74(e, "spec.kubernetesConfig.resources.limits", cm);
  module74(e, "spec.kubernetesConfig.redisVersion", version);
  module74(e, "spec.kubernetesConfig.image", RedisImage[version]);
}
function Z(e, {
  name,
  namespace,
  password,
  specifications
}) {
  const u = [];
  const e_secret = e.secret;
  if (e_secret && password) {
    module74(e_secret, "metadata.name", `${name}-password-secret`);
    module74(e_secret, "metadata.namespace", namespace);
    module74(e_secret, "data.password", (0, _base.safeBtoa)(password));
    u.push({
      name: "secret",
      data: JSON.stringify(e_secret)
    });
  }
  const i = JSON.parse(JSON.stringify(e.externalConfig));
  if (i) {
    module74(i, "metadata.name", `${name}-external-config`);
    module74(i, "metadata.namespace", namespace);
    const c = getCpuAndMemoryFromSpecifications(specifications).memory;
    const s = module26(i, 'data["redis-external.conf"]', "");
    module74(i, 'data["redis-external.conf"]', s.replace("maxmemory 0", `maxmemory ${1024 * parseFloat(c) - 50}MB`));
    u.push({
      name: "externalConfig",
      data: JSON.stringify(i)
    });
  }
  const e_aclConfig = e.aclConfig;
  if (e_aclConfig) {
    module74(e_aclConfig, "metadata.name", `${name}-acl-config`);
    module74(e_aclConfig, "metadata.namespace", namespace);
    u.push({
      name: "aclConfig",
      data: JSON.stringify(e_aclConfig)
    });
  }
  const e_service = e.service;
  if (e_service) {
    module74(e_service, "metadata.name", `${name}-metrics-service`);
    module74(e_service, "metadata.namespace", namespace);
    u.push({
      name: "metricsService",
      data: JSON.stringify(e_service)
    });
  }
  return u;
}

/***/ },

/***/ "./src/chunks/vendor/module-1525.js"
/*!******************************************!*\
  !*** ./src/chunks/vendor/module-1525.js ***!
  \******************************************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {



(__webpack_require__(/*! unpacked/module-8.js */ "./src/shims/corejs-export.js")["default"])({
  target: "Number",
  stat: true
}, {
  isInteger: (__webpack_require__(/*! unpacked/module-1526.js */ "./src/unpacked/module-1526.js")["default"])
});

/***/ },

/***/ "./src/chunks/vendor/module-1526.js"
/*!******************************************!*\
  !*** ./src/chunks/vendor/module-1526.js ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-54.js */ "./src/unpacked/module-54.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module54 = (0, _recoverInterop.__recoverInterop)(_module);
var _default = exports["default"] = Number.isInteger || function (e) {
  return !module54(e) && isFinite(e) && Math.floor(e) === e;
};

/***/ },

/***/ "./src/components/Clusters/ClusterWrapper.js"
/*!***************************************************!*\
  !*** ./src/components/Clusters/ClusterWrapper.js ***!
  \***************************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _recoverInterop = __webpack_require__(/*! ../../recover-interop.js */ "./src/recover-interop.js");
__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-11.js */ "./node_modules/core-js3/modules/es.array.filter.js");
__webpack_require__(/*! unpacked/module-18.js */ "./node_modules/core-js3/modules/es.array.map.js");
__webpack_require__(/*! unpacked/module-48.js */ "./node_modules/core-js3/modules/es.array.slice.js");
__webpack_require__(/*! unpacked/module-16.js */ "./node_modules/core-js3/modules/es.function.name.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-315.js */ "./src/unpacked/module-315.js");
var _module = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js"));
var _module2 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-37.js */ "./src/unpacked/module-37.js"));
var _module3 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js"));
var _module4 = _interopRequireWildcard(__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js"));
var _module5 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
var _module6 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-186.js */ "./src/shims/kube-design.js"));
var _module7 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-321.js */ "./src/unpacked/module-321.js"));
var module553 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-553.js */ "./node_modules/react/index.js"));
var _index = __webpack_require__(/*! utils/index */ "./src/utils/index.js");
var _constants = __webpack_require__(/*! utils/constants */ "./src/utils/constants.js");
var _module8 = _interopRequireWildcard(__webpack_require__(/*! unpacked/module-2554.js */ "./src/unpacked/module-2554.js"));
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }
const module36 = (0, _recoverInterop.__recoverInterop)(_module);
const module37 = (0, _recoverInterop.__recoverInterop)(_module2);
const module55 = (0, _recoverInterop.__recoverInterop)(_module3);
const module56 = (0, _recoverInterop.__recoverInterop)(_module4);
const module51 = (0, _recoverInterop.__recoverInterop)(_module5);
const module186 = (0, _recoverInterop.__recoverInterop)(_module6);
const module321 = (0, _recoverInterop.__recoverInterop)(_module7);
const module2554 = (0, _recoverInterop.__recoverInterop)(_module8);
const g = (e => {
  module55(a, e);
  var t = (e => {
    const t = (() => {
      if (typeof Reflect === "undefined" || !Reflect.construct) {
        return false;
      }
      if (Reflect.construct.sham) {
        return false;
      }
      if (typeof Proxy === "function") {
        return true;
      }
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
        return true;
      } catch (e) {
        return false;
      }
    })();
    return function () {
      let a;
      const r = module51(e);
      if (t) {
        const n = module51(this).constructor;
        a = Reflect.construct(r, arguments, n);
      } else {
        a = r.apply(this, arguments);
      }
      return module56(this, a);
    };
  })(a);
  function a(...n_1) {
    let e;
    module36(this, a);
    e = t.call(this, ...n_1);
    e.renderItem = function (t, a) {
      const r = arguments.length > 2 && arguments[2] !== undefined && arguments[2];
      const n = module321(e.props.clustersDetail, "name");
      const children = e.props.children;
      const o = n[t.name] || t;
      return module553.default.createElement("span", {
        className: r ? module2554.tagItem : "",
        title: (0, _index.getDisplayNameNew)(o, false),
        key: `${o.name}-${a}`
      }, module553.default.createElement(module186.Tag, {
        key: o.name,
        type: r ? "info" : _constants.CLUSTER_GROUP_TAG_TYPE[o.group]
      }, module553.default.createElement(module186.Icon, {
        name: _constants.CLUSTER_PROVIDER_ICON[o.provider] || "kubernetes",
        size: 16,
        ...(!(_constants.CLUSTER_GROUP_TAG_TYPE[o.group] !== "default" || r) ? {
          type: "light"
        } : {})
      }), children ? children(o) : (0, _index.getDisplayNameNew)(o)));
    };
    e.renderItem1 = function (t, a) {
      return e.renderItem(t, a, false);
    };
    e.renderTooltip = function (t, a) {
      return e.renderItem(t, a, true);
    };
    return e;
  }
  module37(a, [{
    key: "render",
    value: function () {
      const clusters = this.props.clusters;
      const t = clusters === undefined ? [] : clusters;
      const a = module321(this.props.clustersDetail, "name");
      const r = t.filter(e => a[e.name]);
      const n = r.slice(2);
      const l = r.slice(0, 2);
      return module553.default.createElement("div", {
        className: module2554.wrapper
      }, module553.default.createElement("div", {
        className: module2554.tags
      }, l.map(this.renderItem1), n.length ? module553.default.createElement(module186.Tooltip, {
        content: module553.default.createElement("div", {
          className: `flexbox items-center ${module2554.tooltipContent}`
        }, n.map(this.renderTooltip))
      }, module553.default.createElement(module186.Tag, {
        type: "primary"
      }, r.length)) : null, r.length === 0 && "-"));
    }
  }]);
  return a;
})(module553.Component);
var _default = exports["default"] = g;

/***/ },

/***/ "./src/stores/openpitrix/version.js"
/*!******************************************!*\
  !*** ./src/stores/openpitrix/version.js ***!
  \******************************************/
(__unused_webpack_module, exports, __webpack_require__) {



__webpack_require__(/*! unpacked/module-15.js */ "./node_modules/core-js3/modules/es.object.define-property.js");
const module20 = (__webpack_require__(/*! utils/babel-helpers/interopRequireDefault */ "./src/utils/babel-helpers/interopRequireDefault.js")["default"]);
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = undefined;
__webpack_require__(/*! unpacked/module-45.js */ "./src/unpacked/module-45.js");
__webpack_require__(/*! unpacked/module-5.js */ "./node_modules/core-js3/modules/es.array.concat.js");
__webpack_require__(/*! unpacked/module-42.js */ "./node_modules/core-js3/modules/es.date.to-string.js");
__webpack_require__(/*! unpacked/module-4.js */ "./node_modules/core-js3/modules/es.object.to-string.js");
__webpack_require__(/*! unpacked/module-22.js */ "./src/unpacked/module-22.js");
__webpack_require__(/*! unpacked/module-23.js */ "./node_modules/core-js3/modules/es.reflect.construct.js");
__webpack_require__(/*! unpacked/module-57.js */ "./src/unpacked/module-57.js");
__webpack_require__(/*! unpacked/module-17.js */ "./node_modules/core-js3/modules/es.regexp.to-string.js");
const n = module20(__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js"));
const l = module20((__webpack_require__(/*! unpacked/module-58.js */ "./src/unpacked/module-58.js")["default"]));
__webpack_require__(/*! unpacked/module-41.js */ "./src/shims/regenerator-runtime.js");
let u;
let o;
const i = module20((__webpack_require__(/*! utils/babel-helpers/asyncToGenerator */ "./src/utils/babel-helpers/asyncToGenerator.js")["default"]));
const c = module20((__webpack_require__(/*! unpacked/module-65.js */ "./src/unpacked/module-65.js")["default"]));
const s = module20((__webpack_require__(/*! unpacked/module-36.js */ "./src/unpacked/module-36.js")["default"]));
const f = module20((__webpack_require__(/*! unpacked/module-88.js */ "./src/unpacked/module-88.js")["default"]));
const d = module20((__webpack_require__(/*! unpacked/module-55.js */ "./src/unpacked/module-55.js")["default"]));
const p = module20((__webpack_require__(/*! utils/babel-helpers/possibleConstructorReturn */ "./src/utils/babel-helpers/possibleConstructorReturn.js")["default"]));
const m = module20(__webpack_require__(/*! unpacked/module-51.js */ "./src/unpacked/module-51.js"));
const h = module20((__webpack_require__(/*! unpacked/module-49.js */ "./src/unpacked/module-49.js")["default"]));
module20((__webpack_require__(/*! utils/babel-helpers/initializerWarningHelper */ "./src/utils/babel-helpers/initializerWarningHelper.js")["default"]));
const module14 = __webpack_require__(/*! unpacked/module-14.js */ "./src/shims/mobx.js");
const module1048 = __webpack_require__(/*! configs/openpitrix/version */ "./src/configs/openpitrix/version.js");
u = (e => {
  d.default(a, e);
  var t = (e => {
    const t = (() => {
      if (typeof Reflect === "undefined" || !Reflect.construct) {
        return false;
      }
      if (Reflect.construct.sham) {
        return false;
      }
      if (typeof Proxy === "function") {
        return true;
      }
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
        return true;
      } catch (e) {
        return false;
      }
    })();
    return function () {
      let a;
      const r = m.default(e);
      if (t) {
        const n = m.default(this).constructor;
        a = Reflect.construct(r, arguments, n);
      } else {
        a = r.apply(this, arguments);
      }
      return p.default(this, a);
    };
  })(a);
  function a(...n) {
    let e;
    s.default(this, a);
    e = t.call(this, ...n);
    e.resourceName = "versions";
    e.sortKey = "sequence";
    e.defaultStatus = module1048.DEFAULT_QUERY_STATUS;
    c.default(e, "handle", o, f.default(e));
    return e;
  }
  return a;
})(module20(__webpack_require__(/*! stores/openpitrix/base */ "./src/stores/openpitrix/base.js")).default);
o = h.default(u.prototype, "handle", [module14.action], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    const _this = this;
    return i.default(n.default.mark(function* t() {
      let a;
      let app_id;
      let version_id;
      let workspace;
      let i;
      let c;
      const s = arguments;
      a = s.length > 0 && s[0] !== undefined ? s[0] : {};
      app_id = a.app_id;
      version_id = a.version_id;
      workspace = a.workspace;
      i = l.default(a, ["app_id", "version_id", "workspace"]);
      c = _this.getUrl({
        app_id,
        version_id,
        workspace,
        name: "action"
      });
      return yield _this.submitting(request.post(c, i));
    }));
  }
});
exports["default"] = u;

/***/ },

/***/ "./src/unpacked/module-1093.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-1093.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _module.default;
  }
}));
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-1093 */ "./src/chunks/common/module-1093.js"));
Object.keys(_module).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _module[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _module[key];
    }
  });
});
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }

/***/ },

/***/ "./src/unpacked/module-1286.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-1286.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _module.default;
  }
}));
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-1286 */ "./src/chunks/common/module-1286.js"));
Object.keys(_module).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _module[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _module[key];
    }
  });
});
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }

/***/ },

/***/ "./src/unpacked/module-1525.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-1525.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _module.default;
  }
}));
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/vendor/module-1525 */ "./src/chunks/vendor/module-1525.js"));
Object.keys(_module).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _module[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _module[key];
    }
  });
});
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }

/***/ },

/***/ "./src/unpacked/module-1526.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-1526.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _module.default;
  }
}));
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/vendor/module-1526 */ "./src/chunks/vendor/module-1526.js"));
Object.keys(_module).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _module[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _module[key];
    }
  });
});
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }

/***/ },

/***/ "./src/unpacked/module-1527.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-1527.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _module.default;
  }
}));
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-1527 */ "./src/chunks/common/module-1527.js"));
Object.keys(_module).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _module[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _module[key];
    }
  });
});
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }

/***/ },

/***/ "./src/unpacked/module-1528.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-1528.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _module.default;
  }
}));
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-1528 */ "./src/chunks/common/module-1528.js"));
Object.keys(_module).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _module[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _module[key];
    }
  });
});
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }

/***/ },

/***/ "./src/unpacked/module-2228.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-2228.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _module.default;
  }
}));
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-2228 */ "./src/chunks/common/module-2228.js"));
Object.keys(_module).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _module[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _module[key];
    }
  });
});
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }

/***/ },

/***/ "./src/unpacked/module-2229.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-2229.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _module.default;
  }
}));
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-2229 */ "./src/chunks/common/module-2229.js"));
Object.keys(_module).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _module[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _module[key];
    }
  });
});
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }

/***/ },

/***/ "./src/unpacked/module-2230.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-2230.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _module.default;
  }
}));
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-2230 */ "./src/chunks/common/module-2230.js"));
Object.keys(_module).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _module[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _module[key];
    }
  });
});
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }

/***/ },

/***/ "./src/unpacked/module-2231.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-2231.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _module.default;
  }
}));
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-2231 */ "./src/chunks/common/module-2231.js"));
Object.keys(_module).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _module[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _module[key];
    }
  });
});
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }

/***/ },

/***/ "./src/unpacked/module-2232.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-2232.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _module.default;
  }
}));
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-2232 */ "./src/chunks/common/module-2232.js"));
Object.keys(_module).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _module[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _module[key];
    }
  });
});
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }

/***/ },

/***/ "./src/unpacked/module-2554.js"
/*!*************************************!*\
  !*** ./src/unpacked/module-2554.js ***!
  \*************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _module.default;
  }
}));
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-2554 */ "./src/chunks/common/module-2554.js"));
Object.keys(_module).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _module[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _module[key];
    }
  });
});
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }

/***/ },

/***/ "./src/unpacked/module-817.js"
/*!************************************!*\
  !*** ./src/unpacked/module-817.js ***!
  \************************************/
(__unused_webpack_module, exports, __webpack_require__) {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _module.default;
  }
}));
var _module = _interopRequireWildcard(__webpack_require__(/*! chunks/common/module-817 */ "./src/chunks/common/module-817.js"));
Object.keys(_module).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _module[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _module[key];
    }
  });
});
var cache;
function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var r, c, a = Object.defineProperty, n = { __proto__: null, default: e }; if (Object(e) !== e) return n; if (cache || "function" != typeof WeakMap || (cache = new WeakMap()), cache) { if (cache.has(e)) return cache.get(e); cache.set(e, n); } for (c in e) "default" !== c && {}.hasOwnProperty.call(e, c) && ((r = a && Object.getOwnPropertyDescriptor(e, c)) && (r.get || r.set) ? a(n, c, r) : n[c] = e[c]); return n; }

/***/ }

}]);