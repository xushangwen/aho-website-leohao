const HTML_CACHE_CONTROL = 'no-cache, no-store, must-revalidate';
const IMMUTABLE_ASSET_CACHE_CONTROL = 'public, max-age=31536000, immutable';
const FILE_REQUEST_RE = /\.[a-z0-9]+$/i;

export default defineEventHandler((event) => {
    const path = event.path || '';
    const method = getMethod(event);

    // Nuxt 构建产物带 hash，适合长期缓存；这样也能避免每次部署后反复回源。
    if (path.startsWith('/_nuxt/')) {
        setHeader(event, 'Cache-Control', IMMUTABLE_ASSET_CACHE_CONTROL);
        return;
    }

    if (path.startsWith('/api/')) {
        return;
    }

    const accept = getHeader(event, 'accept') || '';
    const isHtmlRequest =
        (method === 'GET' || method === 'HEAD') &&
        accept.includes('text/html') &&
        !FILE_REQUEST_RE.test(path);

    // SSR HTML 不做强缓存，避免手工上传新 .output 后浏览器/代理继续使用旧文档，
    // 导致新旧 CSS/字体资源混用，表现为字号、间距和布局错乱。
    if (isHtmlRequest) {
        setHeader(event, 'Cache-Control', HTML_CACHE_CONTROL);
        setHeader(event, 'Pragma', 'no-cache');
        setHeader(event, 'Expires', '0');
    }
});
