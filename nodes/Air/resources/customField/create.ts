import type { INodeProperties } from 'n8n-workflow';

const showOnlyForCustomFieldCreate = {
	operation: ['create'],
	resource: ['customFields'],
};

export const customFieldCreateDescription: INodeProperties[] = [
	{
		displayName: 'Name',
		name: 'name',
		type: 'string', 
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForCustomFieldCreate,
		},
		description: 'The name of the custom field',
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
        required: true,
        displayOptions: {
            show: showOnlyForCustomFieldCreate,
        },
        description: 'The description of the custom field',
        routing: {
            send: {
                type: 'body',
                property: 'description',
            },
        },
        
    },
	{
		displayName: 'Type',
		name: 'type',
		type: 'options',
		options: [
			{
				name: 'Single Select',
				value: 'single-select',
			},
            {
                name: 'Multi Select',
                value: 'multi-select',
            },
            {
                name: 'Date',
                value: 'date',
            },
            {
                name: 'Plain text',
                value: 'plain-text',
            }
		],
		default: 'plain-text',
		displayOptions: {
			show: showOnlyForCustomFieldCreate,
		},
		description: 'The type of the custom field',
		routing: {
			send: {
				type: 'body',
				property: 'type',
			},
		},
	},
    {
        displayName: 'Values',
        name: 'values',
        type: 'json',
        default: `
              {
    "values": [
      { "name": "Instagram" },
      { "name": "LinkedIn" }
    ]
  }
        `,
        displayOptions: {
            show: { ...showOnlyForCustomFieldCreate, type: ['single-select', 'multi-select'] },
        },
        routing: {
            send: {
                type: 'body',
                property: 'values',
					value: '={{(() => { const v = typeof $value === "string" ? JSON.parse($value) : $value; return Array.isArray(v) ? v : (v && Array.isArray(v.values) ? v.values : []); })()}}',
            },
        },
    }
];
