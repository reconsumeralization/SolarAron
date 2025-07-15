import React from 'react';
import { Save, RotateCcw, X } from 'lucide-react';

interface AutoSaveNotificationProps {
  isVisible: boolean;
  onRestore: () => void;
  onDismiss: () => void;
  className?: string;
}

export function AutoSaveNotification({ 
  isVisible, 
  onRestore, 
  onDismiss, 
  className = "" 
}: AutoSaveNotificationProps) {
  if (!isVisible) return null;

  return (
    <div className={`fixed top-4 right-4 z-50 bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-lg max-w-sm ${className}`}>
      <div className="flex items-start gap-3">
        <Save className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <h4 className="font-medium text-blue-900">Form Data Recovered</h4>
          <p className="text-sm text-blue-700 mt-1">
            We found previously saved form data. Would you like to restore it?
          </p>
          <div className="flex gap-2 mt-3">
            <button
              onClick={onRestore}
              className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              Restore
            </button>
            <button
              onClick={onDismiss}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-300 transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
        <button
          onClick={onDismiss}
          className="text-blue-400 hover:text-blue-600 p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}