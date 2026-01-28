import type { INodeProperties } from 'n8n-workflow';

const showOnlyForBoardsGet = {
	resource: ['boards'],
	operation: ['get'],
};

export const boardsGet: INodeProperties[] = [
    {
        displayName: 'Name',
        name: 'name',
        type: 'string',
        default: '',
        displayOptions: { show: showOnlyForBoardsGet },
        description: 'Free text board name search filter',
        routing: {
            send: {
                type: 'query',
                property: 'name',
                value: '={{$value !== "" ? $value : undefined}}',
            },
        },
    },
    {
        displayName: 'Parent Board ID',
        name: 'parentBoardId',
        type: 'string',
        default: '',
        displayOptions: { show: showOnlyForBoardsGet },
        description: 'The parent board ID of the boards to return',
        routing: {
            send: {
                type: 'query',
                property: 'parentBoardId',
                value: '={{$value !== "" ? $value : undefined}}',
            },
        },
    },
    {
        displayName: 'Custom Field',
        name: 'customField',
        type: 'string',
        default: '',
        displayOptions: { show: showOnlyForBoardsGet },
        description: 'For single- and multi-select custom fields, filter for entities matching specific values. This query parameter can be supplied multiple times, as custom field ID UUID and custom field value ID UUID pairs, separated by a colon :, e.g. &customField=fb9e852c-eb2a-4dd0-81f4-7af266c335d1:7b6e39bb-28bb-46ae-be8a-5c01bbacf78c. Supplying multiple custom field UUIDs matches all (AND), and mutliple custom field value UUIDs per the same repeated custom field matches any (OR).',
        routing: {
            send: {
                type: 'query',
                property: 'customField',
                value: '={{$value !== "" ? $value : undefined}}',
            },
        },
    },
    {
		displayName: 'Limit',
		name: 'limit',
		type: 'string',
		default: '20',
		displayOptions: { show: showOnlyForBoardsGet },
		description: 'The max number of boards to return in the response',
		routing: {
			send: {
				type: 'query',
				property: 'limit',
				value: '={{$value !== "" ? $value : undefined}}',
			},
		},
	},
    {
        displayName: 'Cursor',
        name: 'cursor',
        type: 'string',
        default: '',
        displayOptions: { show: showOnlyForBoardsGet },
        description: 'Cursor to the next page of boards',
        routing: {
            send: {
                type: 'query',
                property: 'cursor',
                value: '={{$value !== "" ? $value : undefined}}',
            },
        },
    },
];