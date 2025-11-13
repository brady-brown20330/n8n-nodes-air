import type { INodeProperties } from 'n8n-workflow';

const showOnlyForUploadsUploadPart = {
	resource: ['uploads'],
	operation: ['uploadPart'],
};

export const uploadsUploadPartDescription: INodeProperties[] = [
	{
		displayName: 'Upload ID',
		name: 'uploadId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: showOnlyForUploadsUploadPart },
		description: 'Upload ID returned from Initiate Upload',
		routing: { send: { type: 'body', property: 'uploadId' } },
	},
	{
		displayName: 'Part Number',
		name: 'partNumber',
		type: 'number',
		typeOptions: { minValue: 1 },
		default: 1,
		required: true,
		displayOptions: { show: showOnlyForUploadsUploadPart },
		description: '1-based part number for which to request a signed URL',
		routing: { send: { type: 'body', property: 'partNumber' } },
	},
];

