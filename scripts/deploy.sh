#!/usr/bin/env bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
cd $SCRIPT_DIR/../

function exit1 {
  echo "$@" >&2
  exit 1
}

GIT_NAME="$(git config user.name)"
GIT_EMAIL="$(git config user.email)"
GIT_REMOTE="$(git remote get-url origin)"

echo name: $GIT_NAME
echo email: $GIT_EMAIL
echo remote: $GIT_REMOTE

rm -rf dist &>/dev/null
yarn build || exit1 'build failed'
cd ./dist
touch .nojekyll
echo 'helpisthatway.org' > CNAME
git init
git config user.name "$GIT_NAME"
git config user.email "$GIT_EMAIL"
git checkout -b gh-pages
git add .
git commit -m "🚀 deploy" || exit1 'commit failed'
git remote add origin "$GIT_REMOTE" || exit1 'add remote failed'
git push --force origin gh-pages || exit1 'push failed'
