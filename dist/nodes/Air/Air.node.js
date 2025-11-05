"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Air = void 0;
const create_1 = require("./resources/customField/create");
const create_2 = require("./resources/tags/create");
class Air {
    constructor() {
        this.description = {
            displayName: 'Air',
            name: 'air',
            icon: 'file:Air_Logo.svg',
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
                    name: 'AirApi',
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
                            action: 'Get Air Assets',
                            description: 'Get Air Assets',
                            routing: {
                                request: {
                                    method: 'GET',
                                    url: '/assets',
                                },
                            },
                        }
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
            ]
        };
    }
}
exports.Air = Air;
//# sourceMappingURL=Air.node.js.map