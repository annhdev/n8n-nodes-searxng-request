import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	NodeConnectionType,
	NodeOperationError
} from "n8n-workflow";
import {getLocales} from "./utils/constants";
import FormData from 'form-data';

export class SearxngApi implements INodeType {

	description: INodeTypeDescription = {
		displayName: 'Searxng API',
		name: 'searxngApi',
		icon: 'file:icon.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"]}}',
		description: 'Consume Searxng API',
		defaults: {
			name: 'Searxng API'
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		usableAsTool: true,
		credentials: [
			{
				name: 'searxngApi',
				required: true,
			},
		],
		codex: {
			categories: ['Search', 'Web'],
			alias: ['Searxng', 'Search Engine', 'Web Search'],
			subcategories: {
				'Search': ['Web Search', 'API'],
				'Web': ['Search Engine', 'API'],
			}
		},
		properties: [
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Search',
						value: 'search',
						description: "Search for results using Searxng API",
						action: "Search for results using searxng api",
					},
				],
				default: 'search',
			},
			{
				displayName: 'Method',
				name: 'method',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'GET',
						value: 'GET',
						description: "Use GET method to retrieve results",
						action: "Use GET method to retrieve results",
					},
					{
						name: 'POST',
						value: 'POST',
						description: "Use POST method to retrieve results",
						action: "Use POST method to retrieve results",
					},
				],
				default: 'POST',
			},
			{
				displayName: 'Query',
				name: 'query',
				type: 'string',
				default: '',
				required: true,
				description: 'The search query to use',
			},
			{
				displayName: "Max Results",
				name: "maxResults",
				type: "number",
				default: 0,
				description: "The maximum number of results to return. Default is 0 - unlimited. Only applies to the format 'JSON'.",
				typeOptions: {
					minValue: 0,
					maxValue: 1000,
				}
			},
			{
				displayName: "Additional Fields",
				name: "additionalFields",
				type: "collection",
				placeholder: "Add Field",
				default: {},
				options: [
					{
						displayName: 'Categories',
						name: 'categories',
						type: 'multiOptions',
						options: [
							{name: "Files", value: "files"},
							{name: "General", value: "general"},
							{name: "Images", value: "images"},
							{name: "IT", value: "it"},
							{name: "Maps", value: "map"},
							{name: "Music", value: "music"},
							{name: "News", value: "news"},
							{name: "Science", value: "science"},
							{name: "Social Media", value: "social media"},
							{name: "Videos", value: "videos"},
						],
						default: ['general'],
						description: 'The categories to search in',
					},
					{
						displayName: "Format",
						name: "format",
						type: "options",
						options: [
							{name: 'HTML', value: 'html'},
							{name: 'JSON', value: 'json'},
							{name: 'CSV', value: 'csv'},
							{name: 'RSS', value: 'rss'}
						],
						default: 'json',
						description: 'The format of the results to return',
					},
					{
						displayName: "Language",
						name: "language",
						type: "options",
						options: getLocales(),
						default: '',
						description: "The language to filter results by",
					},
					{
						displayName: "LLM Mode",
						name: "llmMode",
						type: "boolean",
						default: false,
						description: "Whether to use LLM mode. If enabled, the results will be formatted for LLMs.",
						displayOptions: {
							// Only show this option if the additionalFields.format is JSON
							show: {
								"format": ['json'],
							},
						},
					},
					{
						displayName: "Page Number",
						name: "pageno",
						type: "number",
						default: 1,
						description: "The page number of the results to retrieve. Default is 1.",
					},
					{
						displayName: "Safe Search",
						name: "safesearch",
						type: "options",
						options: [
							{name: 'Off', value: 0},
							{name: 'Moderate', value: 1},
							{name: 'Strict', value: 2},
						],
						default: 0,
						description: "The level of safe search to apply to the results",
					},
					{
						displayName: "Time Range",
						name: "time_range",
						type: "options",
						options: [
							{name: 'Anytime', value: ''},
							{name: 'Past 24 Hours', value: 'day'},
							{name: 'Past Month', value: 'month'},
							{name: 'Past Year', value: 'year'},
						],
						default: '',
						description: 'The time range to filter results by',
					},
				]
			},
		],
	}

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const output: INodeExecutionData[] = [];

		const credentials = await this.getCredentials("searxngApi");
		if (credentials === undefined) {
			throw new NodeOperationError(
				this.getNode(),
				"No credentials provided for Searxng API",
				{description: "Please configure your Searxng API credentials."}
			);
		}

		for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {

			const query = this.getNodeParameter('query', itemIndex, '') as string;
			if (!query) {
				throw new NodeOperationError(
					this.getNode(),
					"Query parameter is required",
					{description: "Please provide a valid search query."}
				);
			}

			const operation = this.getNodeParameter('operation', itemIndex, 'search') as string;
			const method = this.getNodeParameter('method', itemIndex, 'GET') as string;
			const maxResults = this.getNodeParameter('maxResults', itemIndex, 0) as number;
			const additionalFields = this.getNodeParameter('additionalFields', itemIndex, {}) as {
				categories?: string[];
				language?: string;
				pageno?: number;
				time_range?: string;
				format?: string;
				safesearch?: number;
				llmMode?: boolean;
			};

			if (operation !== 'search') {
				throw new NodeOperationError(
					this.getNode(),
					`The operation "${operation}" is not supported.`,
					{description: "Please check the operation and try again."}
				);

			}

			const baseUrl = credentials.baseUrl as string || 'https://searxng.example.com';
			const url = new URL('/search', baseUrl);

			let response: any;

			let headers = {
				'Accept': 'application/json',
				'User-Agent': 'n8n-workflow',
				'Authorization': `Bearer ${credentials.apiKey}`
			}
			if (method === 'POST') {
				const formData = new FormData();
				formData.append('q', query);
				formData.append('categories', additionalFields.categories?.join(',') || 'general');
				formData.append('language', additionalFields.language || 'auto');
				formData.append('pageno', additionalFields.pageno || 1);
				formData.append('time_range', additionalFields.time_range || '');
				formData.append('format', additionalFields.format || "json");
				formData.append('safesearch', additionalFields.safesearch || 0);

				response = await this.helpers.httpRequestWithAuthentication.call(this, 'searxngApi', {
					method: 'POST',
					url: url.toString(),
					body: formData,
					headers: headers
				})

			} else {
				const queryParameters: Record<string, string | number> = {
					q: query,
					categories: additionalFields.categories?.join(',') || 'general',
					language: additionalFields.language || 'auto',
					pageno: additionalFields.pageno || 1,
					time_range: additionalFields.time_range || '',
					format: additionalFields.format || "json",
					safesearch: additionalFields.safesearch || 0,
				};

				response = await this.helpers.httpRequestWithAuthentication.call(this,'searxngApi',{
					method: 'GET',
					url: url.toString(),
					qs: queryParameters,
					headers: headers
				});
			}

			// Check if the response is valid
			if (response && typeof response == 'string') {
				try {
					response = JSON.parse(response);
				} catch (e) {
					response = response.trim();
				}
			}

			// Process the response
			if (typeof response == 'object' && Array.isArray(response.results)) {
				// Limit the number of results to maxResults
				if (maxResults > 0 && response.results.length > maxResults) {
					response.results = response.results.slice(0, maxResults);
				}
			}

			if (additionalFields.llmMode) {
				// Format the results for LLMs
				response.results = response.results.map((result: any) => {
					return {
						title: result.title,
						url: result.url,
						content: result.content || '',
						snippet: result.snippet || result.content || '',
						tags: result.tags || [],
					};
				});
			}

			output.push({
				json: response,
				pairedItem: {item: itemIndex},
			});
		}

		return this.prepareOutputData(output);
	}


}
