# n8n-nodes-air

A community node for [n8n](https://n8n.io) that lets you programmatically interact with your [Air](https://air.inc) workspaces — upload and manage assets, organize boards, and wire Air into the rest of your stack.

Air is a Creative Ops system for marketing and creative teams, designed to store, search, approve, and share visual content at scale.:contentReference[oaicite:0]{index=0}

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

[Installation](#installation)
[Operations](#operations)
[Credentials](#credentials)
[Compatibility](#compatibility)
[Usage](#usage)
[Resources](#resources)
[Version history](#version-history)

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.



## Operations


This node gives n8n workflows access to a subset of the [Air API](https://developer.air.inc/). Typical automations include:​:contentReference[oaicite:1]{index=1}  

- **Assets**
  - Upload new assets to Air from any n8n source (S3, GDrive, FTP, webhooks, etc.)
  - List / search assets by metadata or keywords
  - Retrieve details for a specific asset
  - Update asset metadata (title, description, tags, custom fields)
  - Optionally delete or archive assets

- **Boards**
  - List boards in a workspace
  - Get board details
  - Add / remove assets on boards
  - Drive board organization from other systems (e.g. CRM, project tools)

  - **Custom Fields**
   - List Custom Fields
   - Create Custom Field
   - Update Custom Field (name/description)
   - Add New Values
   - Delete Values

  - **Tags**
   - List Tags
   - Create Tags

  - **Uploads**
   - Create Upload URL
   - Complete Upload Part (files > 5 GB)
   - Complete Uplaod (files > 5 GB)

> ⚠️ The exact list of operations may evolve. Always check the node’s **Resource** and **Operation** dropdowns in the n8n UI for the current surface area.

## Credentials

Air's API uses:

\- x-api-key

\- x-air-workspace-id

## Compatibility

_No known compatibility issues._

## Usage
    
### Basic Upload Workflow

Steps to upload assets using binary input.

### Metadata Enrichment

Fetch assets, enrich metadata, update Air.

### Board Syncing

Sync boards with data from project tools.

## Compatibility

\- Works with modern n8n 1.x builds.

\- Best for self-hosted installations.

## Resources

* [Air Application](app.air.inc)
* [Air Developer Documentation](developer.air.inc)
* [n8n community nodes documentation](https://docs.n8n.io/integrations/#community-nodes)


## Version history

_See CHANGELOG.md for version notes._