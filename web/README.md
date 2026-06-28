# 多元智慧 LatticeMind · Web

思维模型、误判心理学与决策训练平台 —— 基于《多元智慧与决策平台 PRD V2.0》与 `ui/web` 设计稿实现的完整网站。

> 看清世界，避开误判，做出更好的决策。

## 技术栈

- **Next.js 14**（App Router）+ **React 18** + **TypeScript**
- **Tailwind CSS**（设计令牌取自 `ui/design-board.html`）
- 纯 SVG 知识图谱可视化，无重型图形依赖
- 全站静态预渲染（SSG），158 个页面

## 开发

```bash
cd web
npm install
npm run dev      # 默认 http://localhost:3000（被占用时自动切换端口）
npm run build    # 生产构建（类型检查 + 静态生成）
npm start        # 运行生产构建：next start -p <port>
```

## 已实现页面（对照 PRD 第 20 节页面清单）

| 分类 | 路由 |
|---|---|
| 营销页 | `/`、`/about`、`/method`、`/pricing` |
| 内容页 | `/models`、`/models/[slug]`、`/principles`、`/misjudgment`、`/misjudgment/[slug]`、`/biases`、`/biases/[slug]`、`/fallacies`、`/fallacies/[slug]`、`/systems`、`/systems/[slug]`、`/cases`、`/cases/[slug]`、`/paths`、`/paths/[slug]` |
| 工具页 | `/decision`、`/decision/new`、`/decision/model-scan`、`/decision/bias-check`、`/decision/system-map`、`/decision/review`、`/decision/records/[id]` |
| 用户页 | `/login`、`/register`、`/account`、`/account/favorites`、`/account/progress`、`/account/decisions` |
| 后台页 | `/admin`、`/admin/models`、`/admin/biases`、`/admin/cases`、`/admin/graph`、`/admin/paths` |

## 内容库（`src/lib/data`）

按 PRD 第 12 节数据模型组织的种子内容：

- `models.ts` — 35+ 跨学科思维模型，含完整详情模板（第一性原理 / 核心机制 / 适用与不适用场景 / 常见误用 / 自测 / 反向思考 / 关联关系）
- `misjudgments.ts` — 芒格体系 **28 个**人类误判心理倾向
- `biases.ts` — 认知偏差库，按「认知环节」与「决策风险」双维度分类
- `fallacies.ts` — 逻辑谬误库
- `systems.ts` — 8 个系统工具 + 9 个系统原型
- `cases.ts` — 8 个真实决策案例（含星巴克、诺基亚、特斯拉等）
- `paths.ts` — 5 条学习路径，每条 8–10 节课
- `decisionTemplates.ts` — 产品 / 投资 / 管理决策模板与反误判清单

## 多语言（中 / 英，可扩展）

网站支持中英文切换，并按可扩展到更多语言的方式设计：

- 顶部导航右侧的 🌐 语言下拉可切换 `中文 / English`，选择写入 `lang` Cookie，刷新后整站生效。
- 语言架构：`src/lib/i18n/`（`config.ts` 语言列表、`dict.ts` 全站 UI 文案、`terms.ts` 数据标签映射、`locale.ts` 服务端读取 Cookie）。新增语言只需在 `config.ts` 增加 locale 并补充对应词典与内容翻译。
- 内容库为双语：`src/lib/data/en/` 提供英文覆盖层，`src/lib/data/localize.ts` 在英文缺失时回退中文。思维模型、28 个误判倾向、认知偏差、逻辑谬误、系统工具与原型、案例、学习路径均已提供英文版本。
- 服务端组件通过 `getLocale()` 读取语言，客户端组件通过 `LocaleProvider` 的 `useLocale()` 获取，二者共享同一 Cookie 值。

## 登录（Google OAuth / NextAuth）

登录与注册页的「使用 Google 继续 / Continue with Google」按钮接入了真实的 Google OAuth，基于 **NextAuth (Auth.js) v4**。

实现要点：
- 配置：`src/lib/auth.ts`（`authOptions` + Google Provider，JWT 会话）；API 路由：`src/app/api/auth/[...nextauth]/route.ts`。
- 会话注入：根布局用 `AuthProvider`（`SessionProvider`）包裹；导航栏与个人中心通过 `useSession()` 显示头像/昵称与「退出登录」。
- 按钮：`AuthCard` 调用 `signIn("google", { callbackUrl: "/account" })`；未配置凭据时按钮置灰并提示。

本地启用步骤：
1. 复制 `.env.local.example` 为 `.env.local`。
2. 在 [Google Cloud Console](https://console.cloud.google.com/apis/credentials) 创建 OAuth 2.0 Web 客户端：
   - Authorized JavaScript origins：`http://localhost:3000`
   - Authorized redirect URIs：`http://localhost:3000/api/auth/callback/google`
3. 填入 `GOOGLE_CLIENT_ID`、`GOOGLE_CLIENT_SECRET`，并设置 `NEXTAUTH_SECRET`（`openssl rand -base64 32`）与 `NEXTAUTH_URL`。
4. `npm run dev`，访问 `/login` 点击「使用 Google 继续」即可走完授权流程并跳转到 `/account`。

> 生产环境需把 origins / redirect URIs 换成实际域名，并相应设置 `NEXTAUTH_URL`。

## 设计

视觉令牌（蓝 `#155eef`、青 `#0f9f96`、靛 `#6257d9` 等）、卡片、面板、知识图谱与排版均对照 `../ui/design-board.html` 与 `../ui/web/*.png` 设计稿实现，全站中文、响应式（PC / 平板 / 手机）。
