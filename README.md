# react-native-soft-input-mode

A react-native module which exposes a simple API to change the soft input mode on Android at runtime.
Check:
* https://developer.android.com/training/keyboard-input/visibility
* https://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#softInputMode

Note: this modules does nothing on iOS and simply returns 0 to absolve the user from doing tedious platform checks.

## Getting started

`$ npm install react-native-soft-input-mode --save`

### Linking

Note: linking is required only for `react-native < 0.60.0`.

`$ react-native link react-native-soft-input-mode`

## Usage
```javascript
import RNSoftInputMode from 'react-native-soft-input-mode';

// All possible soft input modes
const { LAYOUT_PARAMS } = RNSoftInputMode;

// Get the current soft input mode
RNSoftInputMode.getSoftInputMode()
    .then(currentSoftInputMode => console.log(currentSoftInputMode))
    // Possible values: https://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#softInputMode
    // Does nothing on iOS; returns 0
    .catch(reason => console.error(reason));
    // Possible reason: Current activity is null.

// Set the current soft input mode and return the old one
RNSoftInputMode.setSoftInputMode(LAYOUT_PARAMS.SOFT_INPUT_STATE_HIDDEN | LAYOUT_PARAMS.SOFT_INPUT_ADJUST_RESIZE)
    .then(oldSoftInputMode => console.log(oldSoftInputMode))
    // Possible values: https://developer.android.com/reference/android/view/WindowManager.LayoutParams.html#softInputMode
    // Does nothing on iOS; returns 0
    .catch(reason => console.error(reason));
    // Possible reason: Current activity is null.
```
