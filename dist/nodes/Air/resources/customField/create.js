"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customFieldCreateDescription = void 0;
const showOnlyForCustomFieldCreate = {
    operation: ['create'],
    resource: ['customFields'],
};
exports.customFieldCreateDescription = [
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
                name: 'Plain Text',
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
//# sourceMappingURL=create.js.map