import type { INodeProperties } from 'n8n-workflow';

const showOnlyForBoardsRemoveAsset = {
	resource: ['boards'],
	operation: ['removeAsset'],
};

export const boardsRemoveAssetDescription: INodeProperties[] = [
	{
		displayName: 'Board ID',
		name: 'boardId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: showOnlyForBoardsRemoveAsset },
		description: 'The ID of the board to remove the asset from',
		// Path parameter used in URL; no need to send separately
	},
	{
		displayName: 'Asset ID',
		name: 'assetId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: showOnlyForBoardsRemoveAsset },
		description: 'The ID of the asset to remove from the board',
		// Path parameter used in URL; no need to send separately
	},
];
