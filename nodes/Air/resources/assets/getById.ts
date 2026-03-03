import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAssetsGetById = {
	resource: ['assets'],
	operation: ['getById'],
};

export const assetsGetByIdDescription: INodeProperties[] = [
	{
		displayName: 'Asset ID',
		name: 'assetId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: showOnlyForAssetsGetById },
		description: 'The ID of the asset to retrieve',
	},
];
