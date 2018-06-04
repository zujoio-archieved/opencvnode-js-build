set -e

# Build CPU:
npm pack

# Build GPU:
sed -i -e 's/opencvjs-node"/opencvjs-node-gpu"/' package.json
npm pack

# Revert GPU changes:
git checkout .


BRANCH=`git rev-parse --abbrev-ref HEAD`
ORIGIN=`git config --get remote.origin.url`

if [ "$BRANCH" != "master" ]; then
  echo "Error: Switch to the master branch before publishing."
  exit
fi

if ! [[ "$ORIGIN" =~ tensorflow/tfjs-node ]]; then
  echo "Error: Switch to the main repo (opencvjs-node) before publishing."
  exit
fi

npm publish

echo 'Published a new package to npm.'

