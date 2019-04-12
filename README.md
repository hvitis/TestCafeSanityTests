# TestCafeSanityTests

A few simple sanity tests made with Test Cafe against https://automationintesting.online/#/
Testing works best with lower speed (Default option).

1. npm i
2. npm test

- or

3. npm run testh

### Different settings to run:

```
    // npm test [command]
    "test": "testcafe chrome --speed 0.6 index.js",
    // npm run [command]
    "testh": "testcafe chrome:headless index.js",
    "testall": "testcafe all --speed 1 index.js",
    "testff": "testcafe firefox index.js",
    "testmobile": "testcafe chrome:emulation:device=iphone X index.js",
    "testverbose": "testcafe chrome index.js"
```
