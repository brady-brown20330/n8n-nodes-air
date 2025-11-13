import {
    IAuthenticateGeneric,
    Icon,
    ICredentialTestRequest,
    ICredentialType,
    INodeProperties,
} from 'n8n-workflow';

    export class AirApi implements ICredentialType {
	name = 'airApi';
	displayName = 'Air API';
    icon: Icon = 'file:../nodes/Air/Air_Logo.svg';
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
                'x-air-workspace-id': '={{$credentials.workspaceId}}',
            },
        },
    } satisfies IAuthenticateGeneric;
}