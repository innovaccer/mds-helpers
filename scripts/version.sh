LOG=$(git log $(git describe --tags --abbrev=0 @^)..@ --pretty=format:"%h %s" --no-merges | sed -e 's/^/* /')
PACKAGE_VERSION=$(node -p -e "require('./package.json').version")
DATE=$(date +%F)

# Append changelog
echo "\n-------------------\n **v$PACKAGE_VERSION**  ($DATE) \n\n$LOG" > CHANGELOG.md &&

# build
npm run build && 

# add changes to git
git add CHANGELOG.md &&
git add dist -f
