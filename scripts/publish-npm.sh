set -e

BRANCH=`git rev-parse --abbrev-ref HEAD`
ORIGIN=`git config --get remote.origin.url`

if [ "$BRANCH" != "master" ]; then
  echo "Error: Switch to the master branch before publishing."
  exit
fi

if ! [[ "$ORIGIN" =~opencvnode-js-build ]]; then
  echo "Error: Switch to the main repo (opencvnode-js-build) before publishing."
  exit
fi

# Build CPU:
npm pack
npm publish

echo 'Published CPU-VERSION a new package to npm.'

# Build GPU:
sed -i -e 's/opencvjs-node"/opencvjs-node-gpu"/' package.json

npm pack
npm publish
echo 'Published GPU-VERSION a new package to npm.'

# Revert GPU changes:
git checkout .



