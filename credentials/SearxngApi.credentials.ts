import {IAuthenticate, Icon, ICredentialType, INodeProperties} from "n8n-workflow";

export class SearxngApi implements ICredentialType {
	name: string = "searxngApi";
	displayName: string = "Searxng API";
	documentationUrl: string = 'https://docs.n8n.io/integrations/builtin/credentials/searxng/';
	icon: Icon = "file:searxng.svg";
	properties: INodeProperties[] = [
		{
			displayName: "Base URL",
			name: "baseUrl",
			type: "string",
			default: "https://searxng.example.com",
			placeholder: "https://searxng.example.com",
			description: "The base URL of the Searxng instance. Make sure to include the protocol (http or https).",
		},
		{
			displayName: "API Key",
			name: "apiKey",
			type: "string",
			typeOptions: {
				password: true,
			},
			default: "",
			placeholder: "your_api_key_here",
			description: "Your Searxng API key for authentication.",
		}
	]

	authenticate: IAuthenticate = {
		type: "generic",
		properties: {
			headers: {
				"Authorization": "={{`Bearer ${$credentials.apiKey}`}}",
			}
		}
	};
}
