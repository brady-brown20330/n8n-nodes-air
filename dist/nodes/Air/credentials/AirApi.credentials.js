"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirApi = void 0;
const n8n_workflow_1 = require("n8n-workflow");
class AirApi {
    constructor() {
        this.name = 'AirApi';
        this.displayName = 'Air API';
        this.icon = 'file:../Air_Logo.svg';
        this.test = {
            request: {
                baseURL: 'https://api.air.inc/v1',
                url: '/assets',
                method: 'GET',
            },
        };
        this.documentationUrl = 'https://documenter.getpostman.com/view/14122528/2s8YekQaDo#intro';
        this.properties = [
            {
                displayName: 'API Key',
                name: 'apiKey',
                type: 'string',
                typeOptions: { password: true },
                default: '',
            },
            {
                displayName: 'Workspace ID',
                name: 'workspaceId',
                type: 'string',
                default: '',
            }
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    'x-api-key': '={{$credentials.apiKey}}',
                    'x-air-workspace-id': '={{$credentials.workspaceId}}'
                },
            },
            preSend: [
                async function (requestOptions) {
                    try {
                        const bodyPreview = (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.body) ? JSON.stringify(requestOptions.body) : undefined;
                        const headers = { ...((requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.headers) || {}) };
                        if (headers['x-api-key'])
                            headers['x-api-key'] = '[redacted]';
                        n8n_workflow_1.LoggerProxy.info('[Air] Outgoing request', {
                            method: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.method,
                            url: requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.url,
                            headers,
                            body: bodyPreview,
                        });
                    }
                    catch {
                        n8n_workflow_1.LoggerProxy.info('[Air] Outgoing request log failed!');
                    }
                    return requestOptions;
                },
            ],
        };
    }
}
exports.AirApi = AirApi;
//# sourceMappingURL=AirApi.credentials.js.map