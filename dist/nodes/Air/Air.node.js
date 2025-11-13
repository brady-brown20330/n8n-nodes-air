"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Air = void 0;
const create_1 = require("./resources/customField/create");
const create_2 = require("./resources/tags/create");
const create_3 = require("./resources/boards/create");
const patch_1 = require("./resources/boards/patch");
const assetsAdd_1 = require("./resources/boards/assetsAdd");
const update_1 = require("./resources/boards/update");
const initiate_1 = require("./resources/uploads/initiate");
const complete_1 = require("./resources/uploads/complete");
const uploadPart_1 = require("./resources/uploads/uploadPart");
const AirApi_credentials_1 = require("./credentials/AirApi.credentials");
const update_2 = require("./resources/assets/update");
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
                        },
                        {
                            name: 'Uploads',
                            value: 'uploads',
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
                ...create_1.customFieldCreateDescription,
                ...create_2.tagsCreateDescription,
                ...create_3.boardsCreateDescription,
                ...patch_1.boardsPatchDescription,
                ...assetsAdd_1.boardsAddAssetsDescription,
                ...update_1.boardsUpdate,
                ...initiate_1.uploadsInitiateDescription,
                ...uploadPart_1.uploadsUploadPartDescription,
                ...complete_1.uploadsCompleteDescription,
                ...update_2.assetsUpdate,
            ]
        };
    }
}
exports.Air = Air;
//# sourceMappingURL=Air.node.js.map