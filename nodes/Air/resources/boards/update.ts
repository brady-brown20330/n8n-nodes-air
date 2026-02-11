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
		description: 'Plain value for text/date fields. Use this for text/date custom fields. Leave empty if using Value IDs.',
		routing: {
			send: {
				type: 'body',
				property: 'value',
				value: '={{(($parameter["valueIds"] || "").trim() !== "" ? undefined : ($value !== "" ? $value : undefined))}}',
			},
		},
	},
	{
		displayName: 'Value IDs (Comma-Separated)',
		name: 'valueIds',
		type: 'string',
		default: '',
		displayOptions: { show: showOnlyForBoardsUpdate },
		description: 'IDs for select/multi-select fields. Single: id1. Multiple: id1,id2. Leave empty if using plain Value.',
		routing: {
			send: {
				type: 'body',
				property: 'values',
				value: '={{(($parameter["value"] || "").trim() !== "" ? undefined : (() => { const raw = $parameter["valueIds"] || ""; const arr = String(raw).split(",").map(s => s.trim()).filter(Boolean).map(id => ({ id })); return arr.length ? arr : undefined; })())}}',
			},
		},
	},
];

