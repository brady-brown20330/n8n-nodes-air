import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCustomFieldUpdate = {
	operation: ['update'],
	resource: ['customFields'],
};

export const customFieldUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Custom Field ID',
		name: 'customFieldId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForCustomFieldUpdate,
		},
		description: 'The ID of the custom field to update',
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForCustomFieldUpdate,
		},
		description: 'New name for the custom field',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForCustomFieldUpdate,
		},
		description: 'New description for the custom field',
		routing: {
			send: {
				type: 'body',
				property: 'description',
			},
		},
	},
];


