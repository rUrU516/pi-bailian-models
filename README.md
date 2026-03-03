# Pi BaiLian Models / 百炼模型扩展

为 Pi 添加阿里云百炼 coding-plan 的 AI 模型支持。

Adds Alibaba Cloud BaiLian **coding-plan** models to Pi.

## 可用模型 / Available Models

| 模型 | 上下文 | 最大输出 | 推理 |
|------|--------|----------|------|
| qwen3.5-plus | 1M | 65,536 | ✅ |
| qwen3-max | 262K | 65,536 | ✅ |
| qwen3-coder-next | 262K | 65,536 | ✅ |
| qwen3-coder-plus | 1M | 65,536 | ✅ |
| MiniMax-M2.5 | 204K | 131,072 | ❌ |
| glm-5 / glm-4.7 | 202K | 16,384 | ✅ |
| kimi-k2.5 | 262K | 32,768 | ✅ |

## 安装 / Installation

```bash
pi install github.com/rUrU516/pi-bailian-models
```

## 更新 / Update

```bash
pi update
```

## 使用方法 / Usage

1. **进入 Pi 后**，在对话框中输入 `/login`
2. 选择 **"百炼 coding-plan"** 提供商
3. 输入你的 **百炼 coding-plan API 密钥**（以 `sk-` 开头）
4. 之后在模型选择中选择对应的模型即可使用

> 💡 API 密钥获取：访问 [阿里云百炼控制台 - coding-plan](https://bailian.console.aliyun.com/?tab=codingPlan)

---

**After entering Pi:**
1. Type `/login` in the chat
2. Select **"百炼 coding-plan"** provider
3. Enter your **BaiLian coding-plan API key** (starts with `sk-`)
4. Select the model you want to use

> 💡 Get API key: [Alibaba Cloud Bailian - coding-plan](https://bailian.console.aliyun.com/?tab=codingPlan)

## License / 许可证

MIT
