"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirApi = void 0;
class AirApi {
    constructor() {
        this.name = 'AirApi';
        this.displayName = 'Air API';
        this.icon = 'file:Air_Logo.svg';
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
                }
            },
        };
    }
}
exports.AirApi = AirApi;
//# sourceMappingURL=AirApi.credentials.js.map