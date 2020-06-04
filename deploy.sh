#! /usr/bin/env sh

set -e 

yarn build

cd .vuepress/dist

git init 
git add -A 
git commit -m "deploy"

git push -f git@jackRay-c:JackRay-c/note.git master:gh-pages

cd -