import "./module-12.js";
import "./module-5.js";
import "./module-11.js";
import "./module-6.js";
import "./module-9.js";
import "./module-13.js";
import "./module-10.js";
import "./module-7.js";
import "./module-28.js";
import "./module-34.js";
import "./module-15.js";
import "./module-4.js";
import module61 from "./module-61.js";
import "./module-31.js";
export const userNameRegx = /^[a-zA-Z][a-zA-Z0-9_]{1,25}$/;
export const userNameExcludeRegx = /^(?!root$|radondb_)/;
export const strictUserNameRegx = /^[a-z][a-z0-9_]{1,25}$/;
export const passwordRegx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[!@#$%^&*_+\-=])[^]{8,32}$/;
export const kafkaUserNameRegx = /^[a-z][a-z0-9-]{1,63}$/;
export const backupNameRegx = /^[a-z][a-z0-9-]{0,23}$/;
export const PATTERN_WORD = /(?=.*?[A-Z])(?=.*?[a-z])/;
export const PATTERN_CHARACTERS = /(?=.*?[!@#$%^&*_+\-=])/;
export const PATTERN_EXCLUDE_CHARACTERS = /^((?![~()\\|\[\{\}\];:'",<.>/? ]).)*$/;
export const PATTERN_NUMBER = /(?=.*?[0-9])/;
export const UserName = {
    name: "name",
    label: "USERNAME",
    type: "text",
    description: "DATABASE_USERNAME_DESC",
    rules: [
        {
            pattern: userNameRegx,
            message: t("INVALID_DATABASE_USERNAME_DESC")
        },
        {
            pattern: userNameExcludeRegx,
            message: t("USERNAME_FORBIDDEN_STRINGS")
        },
        {
            required: true,
            message: t("USERNAME_EMPTY_DESC")
        }
    ],
    range: {
        max: 26
    }
};
export const Password = {
    name: "password",
    label: "PASSWORD",
    type: "password",
    description: t("DATABASE_PASSWORD_DESC"),
    rules: [
        {
            pattern: PATTERN_WORD,
            message: t("PASSWORD_LETTER")
        },
        {
            pattern: PATTERN_CHARACTERS,
            message: t("DATABASE_PASSWORD_CHARACTERS")
        },
        {
            pattern: PATTERN_EXCLUDE_CHARACTERS,
            message: t("DATABASE_PASSWORD_CHARACTERS_EXCLUDE")
        },
        {
            pattern: PATTERN_NUMBER,
            message: t("PASSWORD_NUMBER")
        },
        {
            required: true,
            message: t("ENTER_PASSWORD_TIP")
        },
        {
            pattern: passwordRegx,
            message: t("INVALID_DATABASE_PASSWORD_DESC")
        }
    ],
    range: {
        max: 32
    }
};
export const Database = {
    name: "database",
    label: "AUTHORIZED_DATABASES",
    type: "text",
    description: "AUTHORIZED_DATABASES_DESC",
    rules: []
};
export const CKAccount = [
    {
        ...UserName,
        rules: [].concat(module61(UserName.rules), [
            {
                pattern: /^(?!(clickhouse_operator)$)/,
                message: t("USERNAME_CANNOT_BE_CLICKHOUSE")
            }
        ])
    },
    Password,
    {
        name: "description",
        label: "DESCRIPTION",
        type: "textarea",
        description: "DESCRIPTION_DESC",
        rules: []
    }
];
export const getPGAccount = function(disabled) {
    return [
        {
            name: "name",
            label: "USERNAME",
            type: "text",
            description: "PG_USERNAME_DESC",
            rules: [
                {
                    pattern: strictUserNameRegx,
                    message: t("INVALID_PG_USERNAME_DESC")
                },
                {
                    pattern: /^(?!(postgres|pgautofailover_monitor|pgautofailover_replicator)$)/,
                    message: t("USERNAME_CANNOT_BE_PROGRES")
                },
                {
                    pattern: userNameExcludeRegx,
                    message: t("USERNAME_FORBIDDEN_STRINGS")
                },
                {
                    required: true,
                    message: t("USERNAME_EMPTY_DESC")
                }
            ],
            range: {
                max: 26
            },
            disabled
        },
        Password,
        {
            name: "permission",
            label: "PERMISSIONS",
            type: "select",
            disabled,
            options: [
                {
                    label: t("GENERAL_PERMISSIONS"),
                    value: "General"
                },
                {
                    label: t("ADVANCED_PERMISSIONS"),
                    value: "Advanced"
                }
            ]
        }
    ];
};
export const MySQLAccount = [
    UserName,
    Password,
    Database,
    {
        name: "permission",
        label: "PERMISSIONS",
        type: "select",
        options: [
            {
                label: t("GENERAL_PERMISSIONS"),
                value: "General"
            },
            {
                label: t("ADVANCED_PERMISSIONS"),
                value: "Advanced"
            }
        ]
    },
    {
        name: "host",
        label: "AUTHORIZED_HOSTS",
        type: "text",
        description: "AUTHORIZED_HOSTS_DESC"
    }
];
export const KafkaAccount = [
    {
        name: "name",
        label: "USERNAME",
        type: "text",
        description: "KAFKA_USERNAME_DESC",
        rules: [
            {
                pattern: kafkaUserNameRegx,
                message: t("KAFKA_USERNAME_DESC")
            },
            {
                required: true,
                message: t("USERNAME_EMPTY_DESC")
            }
        ],
        range: {
            max: 64
        }
    },
    {
        name: "authentication",
        label: "AUTHENTICATION_MODE",
        type: "select",
        options: [
            {
                label: "TLS",
                value: "tls"
            },
            {
                label: "SCRAM-SHA-512",
                value: "scram-sha-512"
            }
        ]
    },
    {
        name: "authorization",
        label: "AUTHORIZATION_MODE",
        type: "select",
        disabled: true,
        description: "AUTHORIZATION_MODE_DESC",
        options: [
            {
                label: t("SIMPLE_AUTHORIZATION"),
                value: "simple"
            }
        ]
    }
];
export const DefaultPermissionRuleString = '{"type":"allow","operation":"Read","resource":{"type":"topic","patternType":"literal","name":""}}';
