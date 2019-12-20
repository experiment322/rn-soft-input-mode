import {NativeModules} from 'react-native';

const LAYOUT_PARAMS = {
    SOFT_INPUT_ADJUST_NOTHING: 48,
    SOFT_INPUT_ADJUST_PAN: 32,
    SOFT_INPUT_ADJUST_RESIZE: 16,
    SOFT_INPUT_ADJUST_UNSPECIFIED: 0
};

const getSoftInputMode = () => NativeModules.RNSoftInputMode.getSoftInputMode();

const setSoftInputMode = (mode) => NativeModules.RNSoftInputMode.setSoftInputMode(mode);

export default {
    LAYOUT_PARAMS,
    getSoftInputMode,
    setSoftInputMode
};
