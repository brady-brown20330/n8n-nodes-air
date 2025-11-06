import type { INodeProperties } from 'n8n-workflow';

const showOnlyForBoardsPatch = {
	resource: ['boards'],
	operation: ['update'],
};

export const boardsPatchDescription: INodeProperties[] = [
	{
		displayName: 'Board ID',
		name: 'boardId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: showOnlyForBoardsPatch },
		description: 'The ID of the board to update',
	},
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		displayOptions: { show: showOnlyForBoardsPatch },
		description: 'New board title',
		routing: {
			send: {
				type: 'body',
				property: 'title',
				value: '={{$value !== "" ? $value : undefined}}',
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		displayOptions: { show: showOnlyForBoardsPatch },
		description: 'New description',
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
		displayOptions: { show: showOnlyForBoardsPatch },
		description: 'Move board under another board',
		routing: {
			send: {
				type: 'body',
				property: 'parentBoardId',
				value: '={{$value !== "" ? $value : undefined}}',
			},
		},
	},
];

