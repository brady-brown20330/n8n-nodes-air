import type { INodeProperties } from 'n8n-workflow';

export const assetsUpdate: INodeProperties[] = [
	{
		displayName: 'Asset ID',
		name: 'assetId',
		type: 'string',
		default: '',    
		required: true,
		displayOptions: {
            show: {
                resource: ['assets'],
                operation: ['applyCustomField'],
            },
		},
		description: 'The ID of the asset to update',
		// Path parameter used in URL; no need to send separately
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
		displayOptions: {
			show: {
				resource: ['assets'],
				operation: ['applyCustomField'],
			},
		},
		description: 'IDs for multi-select fields, e.g. id1,id2,id3',
		routing: {
			send: {
				type: 'body',
				property: 'values',
				value: '={{(() => { const arr = ($value || "").split(",").map(s => s.trim()).filter(Boolean).map(id => ({ id })); return arr.length ? arr : undefined; })()}}',
			},
		},
	},
];