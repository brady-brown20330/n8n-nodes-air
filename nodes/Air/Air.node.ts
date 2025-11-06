import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { customFieldCreateDescription } from './resources/customField/create';
import { tagsCreateDescription } from './resources/tags/create';
import { AirApi } from './credentials/AirApi.credentials';
import { assetsUpdate } from './resources/assets/update';


/* eslint-disable  n8n-nodes-base/node-param-operation-option-action-miscased */
/* eslint-disable  n8n-nodes-base/node-param-resource-with-plural-option */

export class Air implements INodeType {
	description: INodeTypeDescription = {
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
                name: AirApi.name,
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
            // Resources
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
            // Operations
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
                    // TODO add PUT for applying custom field to asset
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
                    // TODO add POST for applying tag to asset
                    // TODO add POST for creating asset
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
                    // TODO add POST for creating board
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
            ...customFieldCreateDescription,
            ...tagsCreateDescription,
            ...assetsUpdate,
		]
	};
}