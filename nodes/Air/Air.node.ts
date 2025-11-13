import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { customFieldCreateDescription } from './resources/customField/create';
import { tagsCreateDescription } from './resources/tags/create';
import { boardsCreateDescription } from './resources/boards/create';
import { boardsPatchDescription } from './resources/boards/patch';
import { boardsAddAssetsDescription } from './resources/boards/assetsAdd';
import { boardsUpdate } from './resources/boards/update';
import { uploadsInitiateDescription } from './resources/uploads/initiate';
import { uploadsCompleteDescription } from './resources/uploads/complete';
import { uploadsUploadPartDescription } from './resources/uploads/uploadPart';
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
                name: 'airApi',
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
                    },
                    {
                        name: 'Uploads',
                        value: 'uploads',
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
                        name: 'Apply Custom Field',
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
                    {
                        name: 'Apply Tag',
                        value: 'applyTag',
                        action: 'Apply Tag to Asset',
                        description: 'Apply a tag to an asset',
                        routing: {
                            request: {
                                method: 'POST',
                                url: '={{`/assets/${String($parameter["assetId"] || "").trim()}/versions/${String($parameter["versionId"] || "").trim()}/tags`}}',
                            },
                        },
                    },
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
						name: 'Update',
						value: 'update',
						action: 'Update Air Asset',
						description: 'Update an asset’s details',
						routing: {
							request: {
								method: 'PATCH',
								url: '={{`/assets/${String($parameter["assetId"] || "").trim()}/versions/${String($parameter["versionIdUpdate"] || "").trim()}`}}',
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
                        name: 'Add Assets',
                        value: 'addAssets',
                        action: 'Add Assets to Board',
                        description: 'Associate one or more assets with a board',
                        routing: {
                            request: {
                                method: 'POST',
                                url: '={{`/boards/${String($parameter["boardId"] || "").trim()}/assets`}}',
                            },
                        },
                    },
                    {
                        name: 'Apply Custom Field',
                        value: 'applyCustomField',
                        action: 'Apply Custom Field to Board',
                        description: 'Set or unset custom field value(s) on a board',
                        routing: {
                            request: {
                                method: 'PUT',
                                url: '={{`/boards/${String($parameter["boardId"] || "").trim()}/customfields/${String($parameter["customFieldId"] || "").trim()}`}}',
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
                        name: 'Update',
                        value: 'update',
                        action: 'Update Air Board',
                        description: 'Update a board’s title, description, or parent',
                        routing: {
                            request: {
                                method: 'PATCH',
                                url: '={{`/boards/${String($parameter["boardId"] || "").trim()}`}}',
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
                            'uploads',
                        ],
                    },
                },
                options: [
                    {
                        name: 'Complete Upload',
                        value: 'completeUpload',
                        action: 'Complete Upload',
                        description: 'Finalize multipart upload with part ETags',
                        routing: {
                            request: {
                                method: 'POST',
                                url: '/uploads/completeMultipart',
                            },
                        },
                    },
                    {
                        name: 'Initiate Upload',
                        value: 'initiateUpload',
                        action: 'Initiate Upload',
                        description: 'Initiate multipart upload and get signed part URLs',
                        routing: {
                            request: {
                                method: 'POST',
                                url: '/uploads',
                            },
                        },
                    },
                    {
                        name: 'Upload Part',
                        value: 'uploadPart',
                        action: 'Get Signed URL for Upload Part',
                        description: 'Request a signed URL to upload a specific part',
                        routing: {
                            request: {
                                method: 'POST',
                                url: '/uploads/uploadPart',
                            },
                        },
                    },
                ],
                default: 'initiateUpload',
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
            ...boardsCreateDescription,
            ...boardsPatchDescription,
            ...boardsAddAssetsDescription,
            ...boardsUpdate,
            ...uploadsInitiateDescription,
            ...uploadsUploadPartDescription,
            ...uploadsCompleteDescription,
            ...assetsUpdate,
		]
	};
}