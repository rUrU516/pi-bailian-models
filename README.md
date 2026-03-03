# Pi BaiLian Models / 百炼模型扩展

Adds Alibaba Cloud BaiLian (DashScope) Qwen models to Pi with OAuth/API key support.

为 Pi 添加阿里云百炼（DashScope）通义千问模型，支持 OAuth/API 密钥认证。

## Features / 功能

- **Multiple Qwen Models** - Access to latest Qwen3.5, Qwen3-Max, Qwen3-Coder, and more
- **Multiple AI Providers** - Includes MiniMax, GLM (Zhipu), Kimi models
- **OAuth Support** - Secure API key management through Pi's OAuth system
- **Zero Cost Configuration** - Pre-configured with zero cost settings for testing

- **多模型支持** - 支持最新的 Qwen3.5、Qwen3-Max、Qwen3-Coder 等
- **多 AI 提供商** - 包含 MiniMax、GLM（智谱）、Kimi 等模型
- **OAuth 认证** - 通过 Pi 的 OAuth 系统安全管理 API 密钥
- **零成本配置** - 预配置为零成本设置，便于测试

## Available Models / 可用模型

| Model | Provider | Context Window | Max Tokens | Reasoning |
|-------|----------|----------------|------------|-----------|
| qwen3.5-plus | Qwen | 1M | 65,536 | ✅ |
| qwen3-max | Qwen | 262K | 65,536 | ✅ |
| qwen3-coder-next | Qwen | 262K | 65,536 | ✅ |
| qwen3-coder-plus | Qwen | 1M | 65,536 | ✅ |
| MiniMax-M2.5 | MiniMax | 204K | 131,072 | ❌ |
| glm-5 / glm-4.7 | Zhipu | 202K | 16,384 | ✅ |
| kimi-k2.5 | Kimi | 262K | 32,768 | ✅ |

## Installation / 安装

```bash
pi install github.com/rUrU516/pi-bailian-models
```

## Update / 更新

To get the latest models and features:

获取最新模型和功能：

```bash
pi update
```

## Usage / 使用

1. After installation, the "百炼 coding-plan" provider will be available in Pi
2. When you first use it, you'll be prompted to enter your DashScope API key
3. The API key is securely stored and automatically used for subsequent requests

安装后，Pi 中将可用"百炼 coding-plan"提供商。首次使用时会提示输入 DashScope API 密钥，密钥将安全存储并自动用于后续请求。

### Getting API Key / 获取 API 密钥

1. Visit [Alibaba Cloud DashScope](https://dashscope.console.aliyun.com/)
2. Create an account and generate an API key
3. Copy the key (starts with `sk-`)

访问 [阿里云百炼控制台](https://dashscope.console.aliyun.com/)，创建账户并生成 API 密钥（以 `sk-` 开头）。

## License / 许可证

MIT
