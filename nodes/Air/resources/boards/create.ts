import type { INodeProperties } from 'n8n-workflow';

const showOnlyForBoardsCreate = {
	resource: ['boards'],
	operation: ['create'],
};

export const boardsCreateDescription: INodeProperties[] = [
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForBoardsCreate,
		},
		description: 'Board title',
		routing: {
			send: {
				type: 'body',
				property: 'title',
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForBoardsCreate,
		},
		description: 'Board description',
		routing: {
			send: {
				type: 'body',
				property: 'description',
				value: '={{$value !== "" ? $value : undefined}}',
			},
		},
	},
	{
		displayName: 'Parent Board ID',
		name: 'parentBoardId',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForBoardsCreate,
		},
		description: 'Optional parent board ID to nest this board under',
		routing: {
			send: {
				type: 'body',
				property: 'parentBoardId',
				value: '={{$value !== "" ? $value : undefined}}',
			},
		},
	},
];

