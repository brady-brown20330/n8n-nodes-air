import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTagsGet = {
	resource: ['tags'],
	operation: ['get'],
};

export const tagsGetDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		displayOptions: { show: showOnlyForTagsGet },
		description: 'Free text search filter for tag names',
		routing: {
			send: {
				type: 'query',
				property: 'name',
				value: '={{$value !== "" ? $value : undefined}}',
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'string',
		default: '20',
		displayOptions: { show: showOnlyForTagsGet },
		description: 'The max number of tags to return in the response',
		routing: {
			send: {
				type: 'query',
				property: 'limit',
				value: '={{$value !== "" ? $value : undefined}}',
			},
		},
	},
	{
		displayName: 'Cursor',
		name: 'cursor',
		type: 'string',
		default: '',
		displayOptions: { show: showOnlyForTagsGet },
		description: 'Cursor to the next page of tags',
		routing: {
			send: {
				type: 'query',
				property: 'cursor',
				value: '={{$value !== "" ? $value : undefined}}',
			},
		},
	},
];
