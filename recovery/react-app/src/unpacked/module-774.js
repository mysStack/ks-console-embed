import "./module-15.js";
import "./module-29.js";
import "./module-4.js";
export const getLicenseErrorInfoFromLicenses = function({ extensionName }) {
    if (window.parent?.globals?.config?.isKsEdition) {
        return {
            isLicenseAuthorized: true
        };
    }
    const s = window.parent?.globals?.licenseInfo;
    return (({ formattedLicense })=>({
            isLicenseAuthorized: formattedLicense?.isAuthorized,
            licenseAuthorizationStatus: formattedLicense?.authorizationStatus ?? "unauthorized",
            isLicenseError: formattedLicense?.isError ?? true
        }))({
        formattedLicense: s?.formattedLicenses?.find(function(e) {
            return e.extensionName === extensionName;
        })
    });
};
