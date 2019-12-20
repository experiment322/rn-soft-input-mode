package com.mad.RNSoftInputMode;

import android.app.Activity;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import javax.annotation.Nonnull;

public class RNSoftInputModeModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    public RNSoftInputModeModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    @Nonnull
    public String getName() {
        return "RNSoftInputMode";
    }

    @ReactMethod
    public void setSoftInputMode(int mode, Promise promise) {
        Activity activity = reactContext.getCurrentActivity();
        if (activity != null) {
            activity.getWindow().setSoftInputMode(mode);
            promise.resolve(null);
        } else {
            promise.reject("Current activity is null.");
        }
    }

    @ReactMethod
    public void getSoftInputMode(Promise promise) {
        Activity activity = reactContext.getCurrentActivity();
        if (activity != null) {
            promise.resolve(activity.getWindow().getAttributes().softInputMode);
        } else {
            promise.reject("Current activity is null.");
        }
    }
}
