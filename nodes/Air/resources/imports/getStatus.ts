import type { INodeProperties } from 'n8n-workflow';

const showOnlyForImportsGetStatus = {
	resource: ['imports'],
	operation: ['getStatus'],
};

export const importsGetStatusDescription: INodeProperties[] = [
	{
		displayName: 'Import ID',
		name: 'importId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: showOnlyForImportsGetStatus },
		description: 'The ID of the import to check',
		// Path parameter used in URL; no need to send separately
	},
];
