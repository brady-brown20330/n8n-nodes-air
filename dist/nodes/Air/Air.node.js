"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Air = void 0;
const create_1 = require("./resources/customField/create");
const create_2 = require("./resources/tags/create");
const AirApi_credentials_1 = require("./credentials/AirApi.credentials");
const update_1 = require("./resources/assets/update");
class Air {
    constructor() {
        this.description = {
            displayName: 'Air',
            name: 'air',
            icon: 'file:./Air_Logo.svg',
            group: ['transform'],
            version: 1,
            subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
            description: 'Get data from Airs API',
            usableAsTool: true,
            defaults: {
                name: 'Air',
            },
            inputs: ['main'],
            outputs: ['main'],
            credentials: [
                {
                    name: AirApi_credentials_1.AirApi.name,
                    required: true,
                },
            ],
            requestDefaults: {
                baseURL: 'https://api.air.inc/v1',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            },
            properties: [
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    noDataExpression: true,
                    options: [
                        {
                            name: 'Assets',
                            value: 'assets',
                        },
                        {
                            name: 'Boards',
                            value: 'boards',
                        },
                        {
                            name: "Custom Fields",
                            value: 'customFields',
                        },
                        {
                            name: "Tags",
                            value: 'tags',
                        }
                    ],
                    default: 'assets',
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: [
                                'assets',
                            ],
                        },
                    },
                    options: [
                        {
                            name: 'Get',
                            value: 'get',
                            action: 'Get Air assets',
                            description: 'Get Air Assets',
                            routing: {
                                request: {
                                    method: 'GET',
                                    url: '/assets',
                                },
                            },
                        },
                        {
                            name: 'Apply Custom Field (DEV)',
                            value: 'applyCustomField',
                            action: 'Apply Custom Field to Asset',
                            description: 'Apply a custom field to an asset',
                            routing: {
                                request: {
                                    method: 'PUT',
                                    url: '={{`/assets/${String($parameter["assetId"] || "").trim()}/customfields/${String($parameter["customFieldId"] || "").trim()}`}}',
                                },
                            },
                        },
                    ],
                    default: 'get',
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: [
                                'boards',
                            ],
                        },
                    },
                    options: [
                        {
                            name: 'Get',
                            value: 'get',
                            action: 'Get Air Boards',
                            description: 'Get Air Boards',
                            routing: {
                                request: {
                                    method: 'GET',
                                    url: '/boards',
                                },
                            },
                        },
                        {
                            name: 'Create',
                            value: 'create',
                            action: 'Create Air Board',
                            description: 'Create Air Board',
                            routing: {
                                request: {
                                    method: 'POST',
                                    url: '/boards',
                                },
                            },
                        },
                    ],
                    default: 'get',
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: [
                                'customFields',
                            ],
                        },
                    },
                    options: [
                        {
                            name: 'Get',
                            value: 'get',
                            action: 'Get Air Custom Fields',
                            description: 'Get Air Custom Fields',
                            routing: {
                                request: {
                                    method: 'GET',
                                    url: '/customFields',
                                },
                            },
                        },
                        {
                            name: 'Create',
                            value: 'create',
                            action: 'Create Air Custom Field',
                            description: 'Create Air Custom Field',
                            routing: {
                                request: {
                                    method: 'POST',
                                    url: '/customFields',
                                },
                            },
                        },
                    ],
                    default: 'get',
                },
                {
                    displayName: 'Operation',
                    name: 'operation',
                    type: 'options',
                    noDataExpression: true,
                    displayOptions: {
                        show: {
                            resource: [
                                'tags',
                            ],
                        },
                    },
                    options: [
                        {
                            name: 'Get',
                            value: 'get',
                            action: 'Get Air Tags',
                            description: 'Get Air Tags',
                            routing: {
                                request: {
                                    method: 'GET',
                                    url: '/tags',
                                },
                            },
                        },
                        {
                            name: 'Create',
                            value: 'create',
                            action: 'Create Air Tag',
                            description: 'Create Air Tag',
                            routing: {
                                request: {
                                    method: 'POST',
                                    url: '/tags',
                                },
                            },
                        },
                    ],
                    default: 'get',
                },
                ...create_1.customFieldCreateDescription,
                ...create_2.tagsCreateDescription,
                ...update_1.assetsUpdate,
            ]
        };
    }
}
exports.Air = Air;
//# sourceMappingURL=Air.node.js.map