import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAssetsUpdate = {
	resource: ['assets'],
	operation: ['applyCustomField', 'applyTag', 'update'],
};


export const assetsUpdate: INodeProperties[] = [
	{
		displayName: 'Asset ID',
		name: 'assetId',
		type: 'string',
		default: '',    
		required: true,
		displayOptions: {
            show: showOnlyForAssetsUpdate,
		},
		description: 'The ID of the asset to update',
		// Path parameter used in URL; no need to send separately
	},
    {
		displayName: 'Version ID',
		name: 'versionIdUpdate',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['update'],
			},
		},
		description: 'The version ID of the asset to update',
	},
    {
        displayName: 'Custom Field ID',
        name: 'customFieldId',
        type: 'string',
        default: '',
		required: true,
        displayOptions: {
            show: {
                resource: ['assets'],
                operation: ['applyCustomField'],
            },
        },
        description: 'The ID of the custom field to apply to the asset',
		// Path parameter used in URL; no need to send separately
    },
    {
        displayName: 'Value',
        name: 'value',
        type: 'string',
        default: '',
		displayOptions: {
            show: {
                resource: ['assets'],
                operation: ['applyCustomField'],
            },
        },
		description: 'Plain value for text/date fields. Use this for text/date custom fields. Leave empty if using Value IDs.',
        routing: {
            send: {
                type: 'body',
				property: 'value',
				value: '={{(($parameter["valueIds"] || "").trim() !== "" ? undefined : ($value !== "" ? $value : undefined))}}',
            },
        },
    },
	// Asset update fields
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['update'],
			},
		},
		description: 'Asset title',
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
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['update'],
			},
		},
		description: 'Asset description',
		routing: {
			send: {
				type: 'body',
				property: 'description',
				value: '={{$value !== "" ? $value : undefined}}',
			},
		},
	},
	{
		displayName: 'Value IDs (Comma-Separated)',
		name: 'valueIds',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['applyCustomField'],
			},
		},
		description: 'IDs for select/multi-select fields. Single: id1. Multiple: id1,id2,id3. Leave empty if using plain Value.',
		routing: {
			send: {
				type: 'body',
				property: 'values',
				value: '={{(($parameter["value"] || "").trim() !== "" ? undefined : (() => { const raw = $parameter["valueIds"] || ""; const arr = String(raw).split(",").map(s => s.trim()).filter(Boolean).map(id => ({ id })); return arr.length ? arr : undefined; })())}}',
			},
		},
	},
	{
		displayName: 'Version ID',
		name: 'versionId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['applyTag'],
			},
		},
		description: 'The version ID of the asset to tag',
	},
	{
		displayName: 'Tag ID',
		name: 'tagId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['applyTag'],
			},
		},
		description: 'Tag ID to add to the asset version',
		routing: {
			send: {
				type: 'body',
				property: 'id',
				value: '={{$parameter["tagId"]}}',
			},
		},
	},

];