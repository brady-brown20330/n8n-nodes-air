import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCustomFieldValueCreate = {
	operation: ['addValue'],
	resource: ['customFields'],
};

export const customFieldValueCreateDescription: INodeProperties[] = [
	{
		displayName: 'Custom Field ID',
		name: 'customFieldId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForCustomFieldValueCreate,
		},
		description: 'The ID of the custom field to add a value to',
	},
	{
		displayName: 'Value Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForCustomFieldValueCreate,
		},
		description: 'Name for the new custom field value',
		routing: {
			send: {
				type: 'body',
				property: 'name',
			},
		},
	},
];


