import type { INodeProperties } from 'n8n-workflow';

const showOnlyForUploadsInitiate = {
	resource: ['uploads'],
	operation: ['initiateUpload'],
};

export const uploadsInitiateDescription: INodeProperties[] = [
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		default: '',
		displayOptions: { show: showOnlyForUploadsInitiate },
		description: 'Optional file name to store with the asset',
		routing: { send: { type: 'body', property: 'fileName', value: '={{$value !== "" ? $value : undefined}}' } },
	},
	{
		displayName: 'Extension',
		name: 'ext',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: showOnlyForUploadsInitiate },
		description: 'File extension without dot (e.g. jpg, png, pdf)',
		routing: { send: { type: 'body', property: 'ext' } },
	},
	{
		displayName: 'MIME Type',
		name: 'mime',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: showOnlyForUploadsInitiate },
		description: 'MIME type of the file (e.g. image/jpeg, application/pdf)',
		routing: { send: { type: 'body', property: 'mime' } },
	},
	{
		displayName: 'Recorded At',
		name: 'recordedAt',
		type: 'string',
		default: '={{$now}}',
		displayOptions: { show: showOnlyForUploadsInitiate },
		description: 'ISO timestamp the asset was recorded at',
		routing: { send: { type: 'body', property: 'recordedAt', value: '={{$value || undefined}}' } },
	},
	{
		displayName: 'File Size (Bytes)',
		name: 'size',
		type: 'number',
		typeOptions: { minValue: 1 },
		default: 0,
		required: true,
		displayOptions: { show: showOnlyForUploadsInitiate },
		description: 'Total file size in bytes',
		routing: { send: { type: 'body', property: 'size' } },
	},
	{
		displayName: 'Parent Board ID',
		name: 'parentBoardId',
		type: 'string',
		default: '',
		displayOptions: { show: showOnlyForUploadsInitiate },
		description: 'Optional board to upload the asset into',
		routing: { send: { type: 'body', property: 'parentBoardId', value: '={{$value !== "" ? $value : undefined}}' } },
	},
	{
		displayName: 'Asset ID',
		name: 'assetId',
		type: 'string',
		default: '',
		displayOptions: { show: showOnlyForUploadsInitiate },
		description: 'Optional existing asset ID to add a new version to',
		routing: { send: { type: 'body', property: 'assetId', value: '={{$value !== "" ? $value : undefined}}' } },
	},
];

