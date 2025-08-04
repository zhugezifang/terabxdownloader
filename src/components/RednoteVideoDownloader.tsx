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
      setError(dict.rednoteDownloader.errors.emptyUrl);
      return;
    }

    if (!url.includes('terabox.com')) {
      setError(dict.rednoteDownloader.errors.invalidUrl);
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
      console.log(data);

      if (!response.ok) {
        throw new Error(data.error || 'Failed to process request');
      }
      setResult(data.data[0]);
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
            {dict.rednoteDownloader.label}
          </label>
          <input 
            type="url" 
            id="terabox-url" 
            placeholder={dict.rednoteDownloader.placeholder}
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
              {dict.rednoteDownloader.button.loading}
            </>
          ) : (
            <>
              <i className="fas fa-download mr-2"></i>
              {dict.rednoteDownloader.button.default}
            </>
          )}
        </button>

        {result && (
          <div className="mt-8 animate-in slide-in-from-bottom-4 duration-500">
            <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 rounded-2xl border border-slate-200/60 shadow-xl overflow-hidden backdrop-blur-sm">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <i className="fas fa-check text-white text-lg"></i>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">{dict.rednoteDownloader.result.header.title}</h3>
                      <p className="text-blue-100 text-sm">{dict.rednoteDownloader.result.header.subtitle}</p>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* File Card */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 mb-6">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* File Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                        <i className="fas fa-file-video text-white text-2xl"></i>
                      </div>
                    </div>

                    {/* File Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-slate-800 text-lg mb-3 break-all leading-tight">
                        {result.server_filename}
                      </h4>

                      <div className="flex flex-wrap gap-3 mb-6">
                        <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200">
                          <i className="fas fa-hdd mr-2 text-blue-500"></i>
                          {(result.size / (1024 * 1024)).toFixed(2)} {dict.rednoteDownloader.result.fileInfo.size}
                        </div>
                        <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <i className="fas fa-file mr-2 text-emerald-500"></i>
                          {result.server_filename.split('.').pop()?.toUpperCase() || dict.rednoteDownloader.result.fileInfo.fileType}
                        </div>
                        <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-50 text-purple-700 border border-purple-200">
                          <i className="fas fa-clock mr-2 text-purple-500"></i>
                          {dict.rednoteDownloader.result.fileInfo.status}
                        </div>
                      </div>

                      {/* Download Button */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a 
                          href={result.dlink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0"
                        >
                          <i className="fas fa-download mr-3 text-lg"></i>
                          {dict.rednoteDownloader.result.actions.download}
                        </a>
                        <button 
                          onClick={() => navigator.clipboard.writeText(result.dlink)}
                          className="inline-flex items-center justify-center px-6 py-4 bg-slate-100 text-slate-700 font-medium rounded-xl hover:bg-slate-200 transition-all duration-200 border border-slate-200"
                        >
                          <i className="fas fa-copy mr-2"></i>
                          {dict.rednoteDownloader.result.actions.copyLink}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Warning Notice */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl p-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mt-0.5">
                      <i className="fas fa-exclamation-triangle text-amber-600 text-sm"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold text-amber-800 mb-1">{dict.rednoteDownloader.result.warning.title}</h5>
                      <p className="text-sm text-amber-700 leading-relaxed">
                        {dict.rednoteDownloader.result.warning.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}