# ks-console-embed：只提供 V3 静态资源，不跑 Node / 不生成 HTML。
# 构建前：V3_PUBLIC_PATH=/dist/v3dist/ yarn build:client
ARG NGINX_IMAGE=nginx:1.31.3-alpine
FROM ${NGINX_IMAGE}

RUN rm -rf /usr/share/nginx/html/*

COPY embed/nginx.conf /etc/nginx/nginx.conf
COPY dist/ /usr/share/nginx/html/dist/v3dist/

# 兼容部分 CSS/字体写成 /dist/v3dist/dist/v3dist/assets/
RUN mkdir -p /usr/share/nginx/html/dist/v3dist/dist/v3dist \
    && if [ -d /usr/share/nginx/html/dist/v3dist/assets ]; then \
         ln -sfn /usr/share/nginx/html/dist/v3dist/assets \
                /usr/share/nginx/html/dist/v3dist/dist/v3dist/assets; \
       fi \
    && nginx -t

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
    CMD wget -qO- http://127.0.0.1/healthz || exit 1
