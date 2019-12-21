import {NativeModules, Platform} from 'react-native';

const LAYOUT_PARAMS = {
    // State modes
    SOFT_INPUT_STATE_UNSPECIFIED: 0,
    SOFT_INPUT_STATE_UNCHANGED: 1,
    SOFT_INPUT_STATE_HIDDEN: 2,
    SOFT_INPUT_STATE_ALWAYS_HIDDEN: 3,
    SOFT_INPUT_STATE_VISIBLE: 4,
    SOFT_INPUT_STATE_ALWAYS_VISIBLE: 5,
    // Adjust modes
    SOFT_INPUT_ADJUST_UNSPECIFIED: 0,
    SOFT_INPUT_ADJUST_RESIZE: 16,
    SOFT_INPUT_ADJUST_PAN: 32,
    SOFT_INPUT_ADJUST_NOTHING: 48,
};

const getSoftInputMode = () => {
    if (Platform.OS === "android") {
        return NativeModules.RNSoftInputMode.getSoftInputMode();
    }
    return Promise.resolve(
        LAYOUT_PARAMS.SOFT_INPUT_STATE_UNSPECIFIED |
        LAYOUT_PARAMS.SOFT_INPUT_ADJUST_UNSPECIFIED
    );
};

const setSoftInputMode = (mode) => {
    if (Platform.OS === "android") {
        return NativeModules.RNSoftInputMode.setSoftInputMode(mode);
    }
    return Promise.resolve(
        LAYOUT_PARAMS.SOFT_INPUT_STATE_UNSPECIFIED |
        LAYOUT_PARAMS.SOFT_INPUT_ADJUST_UNSPECIFIED
    );
};

export default {
    LAYOUT_PARAMS,
    getSoftInputMode,
    setSoftInputMode,
};
