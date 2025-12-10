import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCustomFieldValueDelete = {
	operation: ['deleteValue'],
	resource: ['customFields'],
};

export const customFieldValueDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Custom Field ID',
		name: 'customFieldId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForCustomFieldValueDelete,
		},
		description: 'The ID of the custom field containing the value',
	},
	{
		displayName: 'Value ID',
		name: 'valueId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForCustomFieldValueDelete,
		},
		description: 'The ID of the value to delete',
	},
];


