# sanityTestCafe

A few simple sanity tests made with Test Cafe against https://automationintesting.online/#/

1. 1. npm i
2. 2. npm test
3. or
4. 3. npm run testh

### Different settings to run:

```
    "testh": "testcafe chrome:headless index.js",
    "testall": "testcafe all --speed 1 index.js",
    "testslow": "testcafe chrome --speed 0.6 index.js",
    "testmobile": "testcafe chrome:emulation:device=iphone X index.js",
    "testverbose": "testcafe chrome index.js" 
```