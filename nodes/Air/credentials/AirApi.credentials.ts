import {
    IAuthenticateGeneric,
    Icon,
    ICredentialTestRequest,
    ICredentialType,
    INodeProperties,
    IHttpRequestOptions,
    LoggerProxy as Logger,
} from 'n8n-workflow';

    export class AirApi implements ICredentialType {
	name = 'AirApi';
	displayName = 'Air API';
    icon: Icon = 'file:../Air_Logo.svg';
	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.air.inc/v1',
			url: '/assets',
			method: 'GET',
		},
	};
    // Air API Documentation
	documentationUrl = 'https://documenter.getpostman.com/view/14122528/2s8YekQaDo#intro';
	properties: INodeProperties[] = [
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
    authenticate = {
        type: 'generic',
        properties: {
            headers: {
                'x-api-key': '={{$credentials.apiKey}}',
                'x-air-workspace-id': '={{$credentials.workspaceId}}'
            },
        },
        preSend: [
            async function (requestOptions: IHttpRequestOptions) {
                try {
                    const bodyPreview = requestOptions?.body ? JSON.stringify(requestOptions.body) : undefined;
                    const headers = { ...(requestOptions?.headers || {}) } as Record<string, unknown>;
                    if (headers['x-api-key']) headers['x-api-key'] = '[redacted]';
                    Logger.info('[Air] Outgoing request', {
                        method: requestOptions?.method,
                        url: requestOptions?.url,
                        headers,
                        body: bodyPreview,
                    });
                } catch {
                    Logger.info('[Air] Outgoing request log failed!');
                }
                return requestOptions;
            },
        ],
    } as IAuthenticateGeneric;
}