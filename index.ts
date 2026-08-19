import type { OAuthCredentials } from "@mariozechner/pi-ai";
import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

const TEN_YEARS_MS = 10 * 365 * 24 * 60 * 60 * 1000;

const MODEL_STUDIO_MODELS = [
	{
		id: "qwen3.5-plus",
		name: "qwen3.5-plus",
		reasoning: true,
		input: ["text", "image"] as const,
		cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
		contextWindow: 1_000_000,
		maxTokens: 65_536,
    compat: {
      supportsDeveloperRole: false,      
      supportsReasoningEffort: false,    
      maxTokensField: "max_tokens",     
      requiresToolResultName: true,    
      requiresMistralToolIds: true,
      thinkingFormat: "qwen"
    }
	},
	{
		id: "qwen3-max-2026-01-23",
		name: "qwen3-max-2026-01-23",
		reasoning: true,
		input: ["text"] as const,
		cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
		contextWindow: 262_144,
		maxTokens: 65_536,
    compat: {
      supportsDeveloperRole: false,      
      supportsReasoningEffort: false,    
      maxTokensField: "max_tokens",     
      requiresToolResultName: true,    
      requiresMistralToolIds: true,
      thinkingFormat: "qwen"
    }
	},
	{
		id: "qwen3-coder-next",
		name: "qwen3-coder-next",
		reasoning: true,
		input: ["text"] as const,
		cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
		contextWindow: 262_144,
		maxTokens: 65_536,
    compat: {
      supportsDeveloperRole: false,      
      supportsReasoningEffort: false,    
      maxTokensField: "max_tokens",     
      requiresToolResultName: true,    
      requiresMistralToolIds: true,
      thinkingFormat: "qwen"
    }
	},
	{
		id: "qwen3-coder-plus",
		name: "qwen3-coder-plus",
		reasoning: true,
		input: ["text"] as const,
		cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
		contextWindow: 1_000_000,
		maxTokens: 65_536,
    compat: {
      supportsDeveloperRole: false,
      supportsReasoningEffort: false,
      maxTokensField: "max_tokens",
      requiresToolResultName: true,
      requiresMistralToolIds: true,
      thinkingFormat: "qwen"
    }
	},
	{
		// Qwen3.7 Plus: tracked in issue #3 as the most-requested missing
		// model. Same compat shape as the rest of the Qwen family on the
		// DashScope coding-plan endpoint.
		id: "qwen3.7-plus",
		name: "qwen3.7-plus",
		reasoning: true,
		input: ["text", "image"] as const,
		cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
		contextWindow: 128_000,
		maxTokens: 16_384,
    compat: {
      supportsDeveloperRole: false,
      supportsReasoningEffort: false,
      maxTokensField: "max_tokens",
      requiresToolResultName: true,
      requiresMistralToolIds: true,
      thinkingFormat: "qwen"
    }
	},
	{
		// Qwen3.7 Max: larger context sibling of qwen3.7-plus. Reasoning
		// capability follows the upstream model's actual behavior on the
		// DashScope endpoint (advertised as adaptive thinking).
		id: "qwen3.7-max",
		name: "qwen3.7-max",
		reasoning: true,
		input: ["text", "image"] as const,
		cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
		contextWindow: 128_000,
		maxTokens: 16_384,
    compat: {
      supportsDeveloperRole: false,
      supportsReasoningEffort: false,
      maxTokensField: "max_tokens",
      requiresToolResultName: true,
      requiresMistralToolIds: true,
      thinkingFormat: "qwen"
    }
	},
	{
		// Qwen3.6 Flash: low-latency tier of the Qwen3.x family. Smaller
		// output budget than the plus/max variants but the same compat.
		id: "qwen3.6-flash",
		name: "qwen3.6-flash",
		reasoning: true,
		input: ["text", "image"] as const,
		cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
		contextWindow: 128_000,
		maxTokens: 16_384,
    compat: {
      supportsDeveloperRole: false,
      supportsReasoningEffort: false,
      maxTokensField: "max_tokens",
      requiresToolResultName: true,
      requiresMistralToolIds: true,
      thinkingFormat: "qwen"
    }
	},
	{
		// Qwen3.8 Max: top-of-stack on the Qwen3 line, advertised with
		// adaptive thinking up to the xhigh effort level. Same compat
		// shape as the rest of the family on DashScope.
		id: "qwen3.8-max",
		name: "qwen3.8-max",
		reasoning: true,
		input: ["text", "image"] as const,
		cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
		contextWindow: 983_616,
		maxTokens: 131_072,
    compat: {
      supportsDeveloperRole: false,
      supportsReasoningEffort: false,
      maxTokensField: "max_tokens",
      requiresToolResultName: true,
      requiresMistralToolIds: true,
      thinkingFormat: "qwen"
    }
	},
	{
		id: "MiniMax-M2.5",
		name: "MiniMax-M2.5",
		reasoning: false,
		input: ["text"] as const,
		cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
		contextWindow: 204_800,
		maxTokens: 131_072,
    compat: {
      supportsDeveloperRole: false,      
      supportsReasoningEffort: false,    
      maxTokensField: "max_tokens",     
      requiresToolResultName: true,    
      requiresMistralToolIds: true,
      thinkingFormat: "qwen"
    }
	},
	{
		id: "glm-5",
		name: "glm-5",
		reasoning: true,
		input: ["text"] as const,
		cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
		contextWindow: 202_752,
		maxTokens: 16_384,
    compat: {
      supportsDeveloperRole: false,      
      supportsReasoningEffort: false,    
      maxTokensField: "max_tokens",     
      requiresToolResultName: true,    
      requiresMistralToolIds: true,
      thinkingFormat: "qwen"
    }
	},
	{
		id: "glm-4.7",
		name: "glm-4.7",
		reasoning: true,
		input: ["text"] as const,
		cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
		contextWindow: 202_752,
		maxTokens: 16_384,
    compat: {
      supportsDeveloperRole: false,      
      supportsReasoningEffort: false,    
      maxTokensField: "max_tokens",     
      requiresToolResultName: true,    
      requiresMistralToolIds: true,
      thinkingFormat: "qwen"
    }
	},
	{
		id: "kimi-k2.5",
		name: "kimi-k2.5",
		reasoning: true,
		input: ["text", "image"] as const,
		cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
		contextWindow: 262_144,
		maxTokens: 32_768,
    compat: {
      supportsDeveloperRole: false,      
      supportsReasoningEffort: false,    
      maxTokensField: "max_tokens",     
      requiresToolResultName: true,    
      requiresMistralToolIds: true,
      thinkingFormat: "qwen"
    }
	},
];

function createApiKeyCredentials(apiKey: string): Promise<OAuthCredentials> {
	return {
		access: apiKey,
		refresh: apiKey,
		expires: Date.now() + TEN_YEARS_MS,
	};
}

export default function registerModelStudioProvider(pi: ExtensionAPI): void {
	pi.registerProvider("百炼 coding-plan", {
		baseUrl: "https://coding.dashscope.aliyuncs.com/v1",
		// apiKey: "DASHSCOPE_API_KEY",
		api: "openai-completions",
		models: MODEL_STUDIO_MODELS,
		oauth: {
			name: "百炼 coding-plan",

			async login(callbacks): Promise<OAuthCredentials> {
				const apiKey = await callbacks.onPrompt({
					message: "Enter your DashScope API key:",
					placeholder: "sk-...",
				});

				const trimmed = apiKey.trim();
				if (trimmed.length === 0) {
					throw new Error("API key is required.");
				}

				return createApiKeyCredentials(trimmed);
			},

			async refreshToken(credentials) {
				return credentials;
			},

			getApiKey(credentials) {
				return credentials.access;
			},
		},
	});
}
