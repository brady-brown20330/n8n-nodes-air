import type { INodeProperties } from 'n8n-workflow';

const showOnlyForBoardsUpdate = {
	resource: ['boards'],
	operation: ['applyCustomField'],
};

export const boardsUpdate: INodeProperties[] = [
	{
		displayName: 'Board ID',
		name: 'boardId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: showOnlyForBoardsUpdate },
		description: 'The ID of the board to update',
	},
	{
		displayName: 'Custom Field ID',
		name: 'customFieldId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: showOnlyForBoardsUpdate },
		description: 'The ID of the custom field to apply to the board',
	},
	{
		displayName: 'Value',
		name: 'value',
		type: 'string',
		default: '',
		displayOptions: { show: showOnlyForBoardsUpdate },
		description: 'Plain value for text/date fields',
		routing: {
			send: {
				type: 'body',
				property: 'value',
				value: '={{$value !== "" ? $value : undefined}}',
			},
		},
	},
	{
		displayName: 'Value IDs (Comma-Separated)',
		name: 'valueIds',
		type: 'string',
		default: '',
		displayOptions: { show: showOnlyForBoardsUpdate },
		description: 'IDs for select fields, e.g. id1,id2',
		routing: {
			send: {
				type: 'body',
				property: 'values',
				value: '={{(() => { const arr = ($value || "").split(",").map(s => s.trim()).filter(Boolean).map(id => ({ id })); return arr.length ? arr : undefined; })()}}',
			},
		},
	},
];

