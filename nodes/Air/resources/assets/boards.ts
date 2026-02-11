import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAssetsListBoards = {
	resource: ['assets'],
	operation: ['listBoards'],
};

export const assetsBoardsDescription: INodeProperties[] = [
	{
		displayName: 'Asset ID',
		name: 'assetId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: showOnlyForAssetsListBoards },
		description: 'The ID of the asset to list parent boards for',
	},
];
