'use strict'

console.log('loaded: runtime-startup.js')

//  browser.runtime
//  https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime
//  This module provides information about your extension and the environment it's running in.
//
//  It also provides messaging APIs enabling you to:
//
//    Communicate between different parts of your extension.
//    Communicate with other extensions.
//    Communicate with native applications.
//
//
//  runtime​.onStartup
//  https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onStartup
//  Fired when a profile that has this extension installed first starts up. This event is not fired when a private
//  browsing/incognito profile is started, even if this extension is operating in 'split' incognito mode.
//
//  onStartup.addListener(callback)
//
//  callback: Function -> Called when this event occurs.

//  runtime.onInstalled
//  https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onInstalled
//
//  Fired when the extension is first installed, when the extension is updated to a new version, and when the browser
//  is updated to a new version.
//
//  onInstalled.addListener(details => )
//  details: object ->  An object with the following properties:
//  {
//    id: string ->  The ID of the imported shared module extension that updated. This is present only if the reason
//                   value is shared_module_update.
//
//    previousVersion: string ->  The previous version of the extension just updated. This is only present if the
//                                reason value is update.
//
//    reason: runtime.OnInstalledReason ->  Value stating the reason that this event is being dispatched.
//    runtime​.OnInstalled​Reason: strings ->  Possible values are:
//    {
//      "install" ->  The extension was installed.
//      "update" ->  The extension was updated to a new version.
//      "browser_update" ->  The browser was updated to a new version.
//      "shared_module_update" ->  Another extension, which contains a module used by this extension, was updated.
//    {
//
//    temporary: boolean ->  True if the add-on was installed temporarily. For example, using the "about:debugging"
//                           page in Firefox or using web-ext run. False otherwise.
//  }
browser.runtime.onInstalled.addListener(details => {
    console.log('[runtime-startup.js] onInstalled()')

    if (details.reason === 'install') {
        console.log('[runtime-startup.js] on-install: info: welcome to version', version)
        console.log('[runtime-startup.js] on-install: info: thank you for installing')
    }

    if (details.reason === 'update') {
        console.log('[runtime-startup.js] on-update: info: welcome to version', version)
        console.log('[runtime-startup.js] on-update: info: thank you for updating')
    }
})
