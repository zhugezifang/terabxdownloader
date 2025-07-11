'use client';

import { getDictionary } from "@/i18n/get-dictionary"
import type { Locale } from "@/i18n/config"
import React, { useState, useEffect, useRef } from 'react';

interface RednoteVideoData {
  noteId: string;
  type: string;
  title: string;
  desc: string;
  user: {
    userId: string;
    nickname: string;
    avatar: string;
  };
  time: number;
  ipLocation: string;
  tagList: Array<{
    id: string;
    name: string;
    type: string;
  }>;
  interactInfo: {
    collectedCount: string;
    commentCount: string;
    shareCount: string;
    followed: boolean;
    relation: string;
    liked: boolean;
    likedCount: string;
    collected: boolean;
  };
  images?: Array<{
    url: string;
    height: number;
    width: number;
  }>;
  video?: {
    duration: number;
    width: number;
    height: number;
    url: string;
    cover: string;
    backupUrls: string[];
  };
}

export default function RednoteVideoDownloader({
  lang,
  dict
}: {
  lang: Locale,
  dict: any
}) {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RednoteVideoData | null>(null);
  const [error, setError] = useState('');

  const handleDownload = async () => {
    if (!url.trim()) {
      setError(dict.result.errorInvalidUrl);
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch('/api/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: url.trim() })
      });

      // Convert response to JSON with error handling
      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        throw new Error(dict.result.errorResponseFormat);
      }
      data=JSON.parse(data.data).data;
      console.log('Parsed JSON data:', data);
      

      if (!response.ok) {
        throw new Error(data.error || dict.result.errorRequestFailed);
      }

      // Ensure data is properly formatted as RednoteVideoData
      const parsedResult: RednoteVideoData = {
        noteId: data.noteId || '',
        type: data.type || '',
        title: data.title || '',
        desc: data.desc || '',
        user: {
          userId: data.user?.userId || '',
          nickname: data.user?.nickname || '',
          avatar: data.user?.avatar || ''
        },
        time: data.time || 0,
        ipLocation: data.ipLocation || '',
        tagList: data.tagList || [],
        interactInfo: {
          collectedCount: data.interactInfo?.collectedCount || '0',
          commentCount: data.interactInfo?.commentCount || '0',
          shareCount: data.interactInfo?.shareCount || '0',
          followed: data.interactInfo?.followed || false,
          relation: data.interactInfo?.relation || 'none',
          liked: data.interactInfo?.liked || false,
          likedCount: data.interactInfo?.likedCount || '0',
          collected: data.interactInfo?.collected || false
        },
        images: data.images || undefined,
        video: data.video || undefined
      };

      setResult(parsedResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : dict.result.errorUnknown);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  const downloadVideo = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {dict.hero.inputLabel}
          </label>
          <input 
            type="url" 
            id="url-input" 
            placeholder={dict.hero.inputPlaceholder}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            disabled={loading}
          />
        </div>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <button 
          onClick={handleDownload}
          disabled={loading}
          className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? dict.result.processing : dict.hero.downloadButton}
        </button>
        
        <p className="text-sm text-gray-500 mt-3">
          {dict.hero.supportText}
        </p>

        {result && (
          <div className="mt-8 space-y-6">
            {/* User Info */}
            <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200 shadow-sm">
              <div className="relative">
                <img 
                  src={result.user.avatar} 
                  alt={result.user.nickname}
                  className="w-14 h-14 rounded-full object-cover shadow-md"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 text-lg">{result.user.nickname}</h3>
                <p className="text-sm text-gray-500 flex items-center">
                  <span className="mr-1">📅</span>
                  {formatDate(result.time)}
                  <span className="mx-2">•</span>
                  <span className="mr-1">📍</span>
                  {result.ipLocation}
                </p>
              </div>
            </div>

            {/* Content Info */}
            <div className="p-6 border rounded-lg bg-gradient-to-br from-white to-gray-50 shadow-sm">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium">
                  {result.type}
                </span>
              </div>
              
              {result.title && (
                <h2 className="text-2xl font-bold mb-3 text-gray-800 leading-tight">{result.title}</h2>
              )}
              
              {result.desc && (
                <p className="text-gray-700 mb-4 leading-relaxed">{result.desc}</p>
              )}

              {/* Tags */}
              {result.tagList && result.tagList.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {result.tagList.map((tag) => (
                    <span 
                      key={tag.id}
                      className="px-3 py-1 text-sm bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full hover:from-gray-200 hover:to-gray-300 transition-all duration-200 cursor-pointer"
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              )}

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center justify-center p-3 bg-red-50 rounded-lg">
                  <span className="text-red-500 mr-2 text-lg">❤️</span>
                  <span className="text-sm font-medium text-gray-700">{result.interactInfo.likedCount}</span>
                </div>
                <div className="flex items-center justify-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-500 mr-2 text-lg">💬</span>
                  <span className="text-sm font-medium text-gray-700">{result.interactInfo.commentCount}</span>
                </div>
                <div className="flex items-center justify-center p-3 bg-green-50 rounded-lg">
                  <span className="text-green-500 mr-2 text-lg">📤</span>
                  <span className="text-sm font-medium text-gray-700">{result.interactInfo.shareCount}</span>
                </div>
                <div className="flex items-center justify-center p-3 bg-yellow-50 rounded-lg">
                  <span className="text-yellow-500 mr-2 text-lg">⭐</span>
                  <span className="text-sm font-medium text-gray-700">{result.interactInfo.collectedCount}</span>
                </div>
              </div>
            </div>

            {/* Video Section */}
            {result.video && (
              <div className="p-4 border rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <span className="mr-2">🎥</span>
                  {dict.result.videoInfo}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                      <span className="text-blue-500 mr-2">⏱️</span>
                      <span className="text-sm text-gray-600">
                        {dict.result.duration}: <span className="font-medium">{result.video.duration}</span> {dict.result.seconds}
                      </span>
                    </div>
                    <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                      <span className="text-green-500 mr-2">📐</span>
                      <span className="text-sm text-gray-600">
                        {dict.result.resolution}: <span className="font-medium">{result.video.width} × {result.video.height}</span>
                      </span>
                    </div>
                    {result.video.cover && (
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <img
                          src={result.video.cover.replace(/^http:/, 'https:')}
                          alt="Video cover"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                          <div className="w-12 h-12 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                            <span className="text-gray-800 text-xl">▶️</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="space-y-3">
                    <button
                      onClick={() => downloadVideo(result.video!.url, `rednote_video_${result.noteId}.mp4`)}
                      className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-medium hover:from-green-600 hover:to-emerald-600 transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg"
                    >
                      <span className="mr-2">⬇️</span>
                      {dict.result.downloadMainVideo}
                    </button>
                    {result.video.backupUrls && result.video.backupUrls.map((backupUrl, index) => (
                      <button
                        key={index}
                        onClick={() => downloadVideo(backupUrl, `rednote_video_${result.noteId}_backup${index + 1}.mp4`)}
                        className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg"
                      >
                        <span className="mr-2">🔄</span>
                        {dict.result.downloadBackupVideo} {index + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Images Section */}
            {result.images && result.images.length > 0 && (
              <div className="p-4 border rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <span className="mr-2">🖼️</span>
                  {dict.result.imageGallery} ({result.images.length})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {result.images.map((image, index) => (
                    <div key={index} className="relative bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="aspect-square relative">
                        <img
                          src={image.url.replace(/^http:/, 'https:')}
                          alt={`${dict.result.images} ${index + 1}`}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-3">
                        <button
                          onClick={() => downloadVideo(`${image.url.replace(/^http:/, 'https:')}`, `rednote_image_${result.noteId}_${index + 1}.jpg`)}
                          className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center"
                        >
                          <span className="mr-2">⬇️</span>
                          {`${dict.result.images} ${index + 1}`}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};