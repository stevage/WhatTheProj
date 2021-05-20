mkdir -p docs
rm -f docs/js/*
rm -f docs/css/*

npm run build
cp -pr dist/* docs
git add docs/*
git commit -m "Rebuild"
git push