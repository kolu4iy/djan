#!/usr/bin/env bash
# Деплой статики на удалённый сервер.
# Использование: ./deploy.sh user@server [/var/www/pickups]
set -euo pipefail

REMOTE="${1:?Укажите адрес сервера, например sergey@mydomain.com}"
REMOTE_DIR="${2:-/var/www/pickups}"

cd "$(dirname "$0")"

echo "==> Сборка..."
npm run build

echo "==> Создание каталога на сервере..."
ssh "$REMOTE" "sudo mkdir -p '$REMOTE_DIR' && sudo chown -R \$(whoami) '$REMOTE_DIR' || true"

echo "==> Загрузка dist/ ..."
rsync -avz --delete dist/ "$REMOTE:$REMOTE_DIR/"

echo "==> Готово: $REMOTE_DIR"
