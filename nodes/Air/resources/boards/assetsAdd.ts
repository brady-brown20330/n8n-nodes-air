import type { INodeProperties } from 'n8n-workflow';

const showOnlyForBoardsAddAssets = {
	resource: ['boards'],
	operation: ['addAssets'],
};

export const boardsAddAssetsDescription: INodeProperties[] = [
	{
		displayName: 'Board ID',
		name: 'boardId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: showOnlyForBoardsAddAssets },
		description: 'The ID of the board to add assets to',
	},
	{
		displayName: 'Asset IDs (Comma-Separated)',
		name: 'assetIds',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: showOnlyForBoardsAddAssets },
		description: 'Asset IDs to add, e.g. id1,id2',
		routing: {
			send: {
				type: 'body',
				property: 'assetIds',
				value: '={{(() => { const arr = ($value || "").split(",").map(s => s.trim()).filter(Boolean); return arr.length ? arr : undefined; })()}}',
			},
		},
	},
];

