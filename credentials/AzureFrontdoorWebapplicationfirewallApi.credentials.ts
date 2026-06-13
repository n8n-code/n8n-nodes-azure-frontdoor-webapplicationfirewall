import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureFrontdoorWebapplicationfirewallApi implements ICredentialType {
        name = 'N8nDevAzureFrontdoorWebapplicationfirewallApi';

        displayName = 'Azure Frontdoor Webapplicationfirewall API';

        icon: Icon = { light: 'file:../nodes/AzureFrontdoorWebapplicationfirewall/azure-frontdoor-webapplicationfirewall.png', dark: 'file:../nodes/AzureFrontdoorWebapplicationfirewall/azure-frontdoor-webapplicationfirewall.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Frontdoor Webapplicationfirewall API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
