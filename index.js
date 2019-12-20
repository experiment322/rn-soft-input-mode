import {NativeModules, Platform} from 'react-native';

const LAYOUT_PARAMS = {
    SOFT_INPUT_ADJUST_NOTHING: 48,
    SOFT_INPUT_ADJUST_PAN: 32,
    SOFT_INPUT_ADJUST_RESIZE: 16,
    SOFT_INPUT_ADJUST_UNSPECIFIED: 0,
};

const getSoftInputMode = () => {
    if (Platform.OS === "android") {
        return NativeModules.RNSoftInputMode.getSoftInputMode();
    }
    return Promise.resolve(LAYOUT_PARAMS.SOFT_INPUT_ADJUST_UNSPECIFIED);
};

const setSoftInputMode = (mode) => {
    if (Platform.OS === "android") {
        return NativeModules.RNSoftInputMode.setSoftInputMode(mode);
    }
    return Promise.resolve(LAYOUT_PARAMS.SOFT_INPUT_ADJUST_UNSPECIFIED);
};

export default {
    LAYOUT_PARAMS,
    getSoftInputMode,
    setSoftInputMode,
};
