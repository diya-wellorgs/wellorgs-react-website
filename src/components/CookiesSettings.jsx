import { useEffect, useState } from 'react';

const COOKIE_CONSENT_KEY = 'cookie_consent';

const CookiesSettings = ({ showCookieBanner, setShowCookieBanner }) => {
  const [showDetailedSettings, setShowDetailedSettings] = useState(false);
  const [necessaryEnabled, setNecessaryEnabled] = useState(false);
  const [preferencesEnabled, setPreferencesEnabled] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (consent) {
      const parsedConsent = JSON.parse(consent);
      setNecessaryEnabled(parsedConsent.necessary);
      setPreferencesEnabled(parsedConsent.preferences);
      setAnalyticsEnabled(parsedConsent.analytics);
      setMarketingEnabled(parsedConsent.marketing);
    }
  }, []);

  const handleCustomizeClick = () => {
    setShowDetailedSettings(!showDetailedSettings);
  };

  const saveCookiePreferences = (preferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(preferences));
    setShowCookieBanner(false);
  };

  const handleAcceptAll = () => {
    const preferences = {
      necessary: true,
      preferences: true,
      analytics: true,
      marketing: true,
    };
    setPreferencesEnabled(true);
    setAnalyticsEnabled(true);
    setMarketingEnabled(true);
    saveCookiePreferences(preferences);
  };

  const handleRejectAll = () => {
    const preferences = {
      necessary: false,
      preferences: false,
      analytics: false,
      marketing: false,
    };
    setPreferencesEnabled(false);
    setAnalyticsEnabled(false);
    setMarketingEnabled(false);
    saveCookiePreferences(preferences);
  };

  const handleSavePreferences = () => {
    const preferences = {
      necessary: necessaryEnabled,
      preferences: preferencesEnabled,
      analytics: analyticsEnabled,
      marketing: marketingEnabled,
    };
    saveCookiePreferences(preferences);
  };

  if (!showCookieBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 bg-white shadow-lg rounded-lg p-5 max-w-[360px] border border-gray-200 z-50">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold text-gray-900 text-[14px]">
          Cookie Settings
        </h2>
        <button
          onClick={() => setShowCookieBanner(false)}
          className="text-gray-500 hover:text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        We use cookies to personalize content, run ads, and analyze traffic.
      </p>

      {!showDetailedSettings && (
        <div className="flex justify-between ">
          <CookieButton
            className="  text-[#444444]  bg-[#eeeeee] transition"
            text="Reject all"
            onClick={handleRejectAll}
          />

          <CookieButton
            className="   text-[#444444]  bg-[#eeeeee] transition"
            text="Customize"
            onClick={handleCustomizeClick}
          />

          <CookieButton
            className=" bg-black text-white hover:bg-gray-800 transition"
            text="Accept all"
            onClick={handleAcceptAll}
          />
        </div>
      )}

      {showDetailedSettings && (
        <div className="flex flex-col gap-3">
          <CookieCategoryToggle
            title="Necessary"
            description="Enables security and basic functionality."
            checked={necessaryEnabled}
            onToggle={() => setNecessaryEnabled(!necessaryEnabled)}
          />
          <CookieCategoryToggle
            title="Preferences"
            description="Enables personalized content and settings."
            checked={preferencesEnabled}
            onToggle={() => setPreferencesEnabled(!preferencesEnabled)}
          />
          <CookieCategoryToggle
            title="Analytics"
            description="Enables tracking of performance."
            checked={analyticsEnabled}
            onToggle={() => setAnalyticsEnabled(!analyticsEnabled)}
          />
          <CookieCategoryToggle
            title="Marketing"
            description="Enables ads personalization and tracking."
            checked={marketingEnabled}
            onToggle={() => setMarketingEnabled(!marketingEnabled)}
          />
          <button
            className="mt-4 w-full bg-black text-white hover:bg-gray-800 transition text-sm rounded-lg py-2 px-4"
            onClick={handleSavePreferences}
          >
            Save Preferences
          </button>
        </div>
      )}
    </div>
  );
};

function CookieButton({ text, className, onClick }) {
  return (
    <button
      className={` ${className} rounded-lg py-1 px-4 hover:opacity-70 text-[14px] transition`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

function CookieCategoryToggle({
  title,
  description,
  checked,
  onToggle,
  disabled = false,
}) {
  return (
    <div className="flex items-center bg-gray-100/50 px-3 rounded-xl hover:opacity-60 justify-between py-3 ">
      <div className="">
        <h3 className="font-semibold text-[12px] text-gray-900">{title}</h3>
        <p className="text-[12px] text-gray-600">{description}</p>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={checked}
          onChange={onToggle}
          // disabled={disabled}
        />
        <div
          className={`w-6 h-3 bg-gray-200 rounded-full peer-checked:after:translate-x-full after:left-0.5  after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:bg-white after:rounded-full after:h-2.5 after:w-2.5 after:transition-all 
            ${checked ? 'peer-checked:bg-black' : ''} ${disabled ? '' : ''}`}
        ></div>
      </label>
    </div>
  );
}

export default CookiesSettings;
