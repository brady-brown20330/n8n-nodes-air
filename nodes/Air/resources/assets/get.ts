import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAssetsGet = {
	resource: ['assets'],
	operation: ['get'],
};

export const assetsGet: INodeProperties[] = [
    {
        displayName: 'Limit',
        name: 'limit',
        type: 'string',
        default: '20',
        displayOptions: { show: showOnlyForAssetsGet },
        description: 'The max number of assets to return in the response',
        routing: {
            send: {
                type: 'query',
                property: 'limit',
                value: '={{$value !== "" ? $value : undefined}}',
            },
        },
    },
    {
        displayName: 'Parent Board ID', 
        name: 'parentBoardId',
        type: 'string',
        default: '',
        displayOptions: { show: showOnlyForAssetsGet },
        description: 'The parent board ID of the assets to return',
        routing: {
            send: {
                type: 'query',
                property: 'parentBoardId',
                value: '={{$value !== "" ? $value : undefined}}',
            },
        },
    },
    {
        displayName: 'Search',
        name: 'search',
        type: 'string',
        default: '',
        displayOptions: { show: showOnlyForAssetsGet },
        description: 'Search for assets with metadata matching the provided value including the title, description, etc',
        routing: {
            send: {
                type: 'query',
                property: 'search',
                value: '={{$value !== "" ? $value : undefined}}',
            },
        },
    },
    {
        displayName: 'Tag',
        name: 'tag',
        type: 'string',
        default: '',
        displayOptions: { show: showOnlyForAssetsGet },
        description: 'Filter assets by attached tags. If multiple tag=value pairs are provided, only assets with all specified tags will be included.',
        routing: {
            send: {
                type: 'query',
                property: 'tag',
                value: '={{$value !== "" ? $value : undefined}}',
            },
        },
    },
    {
        displayName: 'Custom Field',
        name: 'customField',
        type: 'string',
        default: '',
        displayOptions: { show: showOnlyForAssetsGet },
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
        displayName: 'Cursor',
        name: 'cursor',
        type: 'string',
        default: '',
        displayOptions: { show: showOnlyForAssetsGet },
        description: 'Cursor to the next page of assets',
        routing: {
            send: {
                type: 'query',
                property: 'cursor',
                value: '={{$value !== "" ? $value : undefined}}',
            },
        },
    },
];
