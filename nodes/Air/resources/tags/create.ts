import type { INodeProperties } from 'n8n-workflow';

const showOnlyForTagsCreate = {
	operation: ['create'],
	resource: ['tags'],
};

export const tagsCreateDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string', 
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForTagsCreate,
		},
		description: 'The name of the tag',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	}
];
