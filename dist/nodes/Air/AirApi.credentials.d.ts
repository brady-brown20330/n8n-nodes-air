import { IAuthenticateGeneric, Icon, ICredentialTestRequest, ICredentialType, INodeProperties } from 'n8n-workflow';
export declare class AirApi implements ICredentialType {
    name: string;
    displayName: string;
    icon: Icon;
    test: ICredentialTestRequest;
    documentationUrl: string;
    properties: INodeProperties[];
    authenticate: IAuthenticateGeneric;
}
