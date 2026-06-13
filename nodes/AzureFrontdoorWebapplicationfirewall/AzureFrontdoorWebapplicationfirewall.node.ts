import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureFrontdoorWebapplicationfirewall implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Frontdoor Webapplicationfirewall',
                name: 'N8nDevAzureFrontdoorWebapplicationfirewall',
                icon: { light: 'file:./azure-frontdoor-webapplicationfirewall.png', dark: 'file:./azure-frontdoor-webapplicationfirewall.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'APIs for web application firewall rule management.',
                defaults: { name: 'Azure Frontdoor Webapplicationfirewall' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureFrontdoorWebapplicationfirewallApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}
