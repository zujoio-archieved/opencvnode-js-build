# script used to publish package to npm and push new tag
# step 1 - change version from package json
# step 2 - run ./scripts/publish-npm.sh $version  i.e ./scripts/publish-npm.sh 0.0.3
set -e

if [ $# -eq 0 ]
  then
    echo "Please specify version."
    exit
fi

# if you forget to commit
PORCELAIN=`git status --porcelain`
if [ -n "$PORCELAIN" ]; then
  echo "please commit changes first."; 
  echo $PORCELAIN
  exit;
fi

BRANCH=`git rev-parse --abbrev-ref HEAD`
ORIGIN=`git config --get remote.origin.url`

if [ "$BRANCH" != "master" ]; then
  echo "Error: Switch to the master branch before publishing."
  exit
fi

if ! [[ "$ORIGIN" =~ opencvnode-js-build ]]; then
  echo "Error: Switch to the main repo (opencvnode-js-build) before publishing."
  exit
fi

# Build CPU:
npm pack
npm publish

echo 'Published CPU-VERSION a new package to npm.'

# Build GPU:
sed -i -e 's/opencvnode-js-build"/opencvnode-js-build-gpu"/' package.json

npm pack
npm publish
echo 'Published GPU-VERSION a new package to npm.'

# Revert GPU changes:
git checkout .

if [ $# -ne 0 ]
  then
    git tag $1
    git push --tags
    rm -rf opencvnode-js-build-$1-tgz opencvnode-js-build-gpu-$1-tgz
fi