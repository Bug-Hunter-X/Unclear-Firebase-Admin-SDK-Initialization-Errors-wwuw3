# Firebase Admin SDK Initialization Errors

This repository demonstrates a common issue when initializing the Firebase Admin SDK: unclear error messages resulting from misconfigured service account credentials.  The example shows how incorrect credential paths or permissions lead to cryptic errors, and offers a solution for robust credential handling.

## Bug

The `firebaseBug.js` file demonstrates how incorrect credential handling causes initialization failure.  The errors are often not very helpful in pinpointing the exact issue.

## Solution

The `firebaseSolution.js` file provides a more robust approach, including clear error handling and improved path management, to make debugging and resolution of such issues simpler.

## Setup

1.  Clone this repository.
2.  Install the Firebase Admin SDK: `npm install firebase-admin`
3.  Replace placeholders like `'./path/to/key.json'` with the correct path to your Firebase service account key file.
4.  Run both `firebaseBug.js` and `firebaseSolution.js` to observe the differences.