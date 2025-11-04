import React from 'react';

const TermsModal = ({ onAccept, onCancel }) => {
  return (
    <div className="bg-white fixed left-6 bottom-6  border z-50 rounded-xl shadow-lg p-6 max-w-md w-full">
      <h2 className="text-lg font-semibold mb-2">Terms and Conditions</h2>
      <p className="text-gray-600 text-sm mb-4">
        By clicking "Agree," you consent to the recording, storage, and sharing
        of your communications with third-party service providers, as described
        in our Privacy Policy. If you do not agree, please refrain from using
        this service.
      </p>
      <div className="flex justify-end gap-3">
        <button
          onClick={onCancel}
          className="px-4 py-2 rounded-md text-primary bg-gray-200 hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          onClick={onAccept}
          className="px-4 py-2 rounded-md bg-black text-white hover:bg-black/90"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default TermsModal;
