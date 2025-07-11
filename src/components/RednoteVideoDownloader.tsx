'use client';

import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"
import React, { useState, useEffect, useRef } from 'react';

export default function RednoteVideoDownloader({
  lang,
  dict
}: {
  lang: Locale,
  dict: any
}) {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const handleDownload = async () => {
    if (!url) {
      setError('Please enter a valid TeraBox URL');
      return;
    }

    if (!url.includes('terabox.com')) {
      setError('Please enter a valid TeraBox URL');
      return;
    }

    setIsLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch('/api/terabox-download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to process request');
      }
      setResult(data.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Paste your TeraBox link here:
          </label>
          <input 
            type="url" 
            id="terabox-url" 
            placeholder="https://terabox.com/s/..." 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}
        
        <button 
          onClick={handleDownload}
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <span className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
              Processing...
            </>
          ) : (
            <>
              <i className="fas fa-download mr-2"></i>
              Generate Download Link
            </>
          )}
        </button>

        {result && (
          <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200 overflow-hidden">
            <div className="p-6">
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Thumbnail */}
                  <div className="flex-shrink-0">
                    <img 
                      src={result.thumbnail} 
                      alt="File thumbnail"
                      className="w-32 h-24 object-cover rounded-lg shadow-sm"
                    />
                  </div>
                  
                  {/* File Info */}
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-2 break-all">
                      {result.title}
                    </h4>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        <i className="fas fa-file-video mr-1"></i>
                        {result.size}
                      </span>
                    </div>
                    
                    {/* Download Button */}
                    <a 
                      href={result.download_link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      <i className="fas fa-download mr-2"></i>
                      Download File
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center">
                  <i className="fas fa-info-circle text-yellow-600 mr-2"></i>
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> Download links are temporary and may expire. Download your file as soon as possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};