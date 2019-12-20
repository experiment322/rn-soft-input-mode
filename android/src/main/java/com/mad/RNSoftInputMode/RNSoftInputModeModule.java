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
    public void setSoftInputMode(final int mode, final Promise promise) {
        final Activity activity = reactContext.getCurrentActivity();
        if (activity != null) {
            activity.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    activity.getWindow().setSoftInputMode(mode);
                    promise.resolve(mode);
                }
            });
        } else {
            promise.reject("Current activity is null.");
        }
    }

    @ReactMethod
    public void getSoftInputMode(final Promise promise) {
        final Activity activity = reactContext.getCurrentActivity();
        if (activity != null) {
            activity.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    final int mode = activity.getWindow().getAttributes().softInputMode;
                    promise.resolve(mode);
                }
            });
        } else {
            promise.reject("Current activity is null.");
        }
    }
}
