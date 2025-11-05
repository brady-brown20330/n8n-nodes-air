"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagsCreateDescription = void 0;
const showOnlyForTagsCreate = {
    operation: ['create'],
    resource: ['tags'],
};
exports.tagsCreateDescription = [
    {
        displayName: 'Name',
        name: 'name',
        type: 'string',
        default: '',
        required: true,
        displayOptions: {
            show: showOnlyForTagsCreate,
        },
        description: 'The name of the tag',
        routing: {
            send: {
                type: 'body',
                property: 'name',
            },
        },
    }
];
//# sourceMappingURL=create.js.map