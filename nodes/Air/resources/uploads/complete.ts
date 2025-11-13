import type { INodeProperties } from 'n8n-workflow';

const showOnlyForUploadsComplete = {
	resource: ['uploads'],
	operation: ['completeUpload'],
};

export const uploadsCompleteDescription: INodeProperties[] = [
	{
		displayName: 'Upload ID',
		name: 'uploadId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: showOnlyForUploadsComplete },
		description: 'Upload ID obtained from Initiate Upload',
		routing: { send: { type: 'body', property: 'uploadId' } },
	},
	{
		displayName: 'Parts (JSON)',
		name: 'parts',
		type: 'json',
		default: '[]',
		required: true,
		displayOptions: { show: showOnlyForUploadsComplete },
		description: 'Array of objects: [{ "partNumber": 1, "ETag": "..." }]',
		routing: {
			send: {
				type: 'body',
				property: 'parts',
				value: '={{Array.isArray($value) ? $value : (typeof $value === "string" ? JSON.parse($value) : [])}}',
			},
		},
	},
];

