import type { INodeProperties } from 'n8n-workflow';

const showOnlyForImportsCreate = {
	resource: ['imports'],
	operation: ['create'],
};

export const importsCreateDescription: INodeProperties[] = [
	{
		displayName: 'Source URL',
		name: 'sourceUrl',
		type: 'string',
		default: '',
		required: true,
		displayOptions: { show: showOnlyForImportsCreate },
		description: 'Publicly accessible URL Air will fetch the file content from',
		routing: { send: { type: 'body', property: 'sourceUrl' } },
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		default: '',
		displayOptions: { show: showOnlyForImportsCreate },
		description: 'Optional file name to store with the asset',
		routing: { send: { type: 'body', property: 'fileName', value: '={{$value !== "" ? $value : undefined}}' } },
	},
	{
		displayName: 'Extension',
		name: 'ext',
		type: 'string',
		default: '',
		displayOptions: { show: showOnlyForImportsCreate },
		description: 'File extension without dot (e.g. jpg, mp4, pdf)',
		routing: { send: { type: 'body', property: 'ext', value: '={{$value !== "" ? $value : undefined}}' } },
	},
	{
		displayName: 'Description',
		name: 'description',
		type: 'string',
		default: '',
		displayOptions: { show: showOnlyForImportsCreate },
		description: 'File description',
		routing: { send: { type: 'body', property: 'description', value: '={{$value !== "" ? $value : undefined}}' } },
	},
	{
		displayName: 'Recorded At',
		name: 'recordedAt',
		type: 'string',
		default: '',
		displayOptions: { show: showOnlyForImportsCreate },
		description: 'ISO timestamp the asset was recorded/created at',
		routing: { send: { type: 'body', property: 'recordedAt', value: '={{$value !== "" ? $value : undefined}}' } },
	},
	{
		displayName: 'Parent Board ID',
		name: 'parentBoardId',
		type: 'string',
		default: '',
		displayOptions: { show: showOnlyForImportsCreate },
		description: 'Optional board to import the asset into',
		routing: { send: { type: 'body', property: 'parentBoardId', value: '={{$value !== "" ? $value : undefined}}' } },
	},
	{
		displayName: 'Asset ID',
		name: 'assetId',
		type: 'string',
		default: '',
		displayOptions: { show: showOnlyForImportsCreate },
		description: 'Optional existing asset ID to import a new version onto',
		routing: { send: { type: 'body', property: 'assetId', value: '={{$value !== "" ? $value : undefined}}' } },
	},
	{
		displayName: 'Tag IDs (Comma-Separated)',
		name: 'tagIds',
		type: 'string',
		default: '',
		displayOptions: { show: showOnlyForImportsCreate },
		description: 'Existing tag IDs to apply to the imported asset, e.g. id1,id2',
		routing: {
			send: {
				type: 'body',
				property: 'tags',
				value:
					'={{(() => { const arr = ($value || "").split(",").map(s => s.trim()).filter(Boolean).map(id => ({ id })); return arr.length ? arr : undefined; })()}}',
			},
		},
	},
	{
		displayName: 'Custom Fields',
		name: 'customFields',
		type: 'fixedCollection',
		typeOptions: { multipleValues: true },
		placeholder: 'Add Custom Field',
		default: {},
		displayOptions: { show: showOnlyForImportsCreate },
		description: 'Custom field values to set on the imported asset',
		options: [
			{
				displayName: 'Field',
				name: 'field',
				values: [
					{
						displayName: 'Custom Field ID',
						name: 'customFieldId',
						type: 'string',
						default: '',
						description: 'The ID of the custom field to set',
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'Plain value for text/date fields. Use this for text/date custom fields. Leave empty if using Value IDs.',
					},
					{
						displayName: 'Value IDs (Comma-Separated)',
						name: 'valueIds',
						type: 'string',
						default: '',
						description: 'IDs for select/multi-select fields. Single: id1. Multiple: id1,id2. Leave empty if using plain Value.',
					},
				],
			},
		],
		routing: {
			send: {
				type: 'body',
				property: 'customFields',
				value:
					'={{(() => { const arr = ((($value && $value.field) || [])).map(f => { const valueIds = String(f.valueIds || "").split(",").map(s => s.trim()).filter(Boolean); if (valueIds.length) return { id: f.customFieldId, values: valueIds.map(id => ({ id })) }; if (f.value && f.value !== "") return { id: f.customFieldId, value: f.value }; return { id: f.customFieldId }; }).filter(cf => cf.id); return arr.length ? arr : undefined; })()}}',
			},
		},
	},
];
