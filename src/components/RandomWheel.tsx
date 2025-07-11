'use client';

import { useEffect, useRef, useState } from 'react';

interface HistoryItem {
  result: string;
  timestamp: string;
}

export default function RandomWheel({
  title,optionParmas
}: {
  title: string,optionParmas: string
}) {
  const wheelCanvasRef = useRef<HTMLCanvasElement>(null);
  const [wheelTitle, setWheelTitle] = useState(title);
  const [options, setOptions] = useState(optionParmas.replaceAll(",","\n"));
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedResult, setSelectedResult] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isControlsPanelVisible, setIsControlsPanelVisible] = useState(true);
  const [rotation, setRotation] = useState(0);

  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4',
    '#FFEEAD', '#D4A5A5', '#9B59B6', '#3498DB',
    '#E74C3C', '#2ECC71'
  ];

  const getOptionsArray = () => {
    return options.split('\n').filter(option => option.trim() !== '');
  };

  const drawWheel = () => {
    const canvas = wheelCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const optionsArray = getOptionsArray();
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 10;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw wheel sections
    optionsArray.forEach((option, index) => {
      const startAngle = (index * (360 / optionsArray.length) + rotation) * Math.PI / 180;
      const endAngle = ((index + 1) * (360 / optionsArray.length) + rotation) * Math.PI / 180;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();

      ctx.fillStyle = colors[index % colors.length];
      ctx.fill();
      ctx.stroke();

      // Draw text
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(startAngle + (endAngle - startAngle) / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#000000';
      ctx.font = '16px Inter';
      ctx.fillText(option, radius - 20, 6);
      ctx.restore();
    });

    // Draw center button
    ctx.beginPath();
    ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
    ctx.fillStyle = '#4ADE80';
    ctx.fill();
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 20px Inter';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('SPIN!', centerX, centerY);
  };

  const getSelectedOption = () => {
    const optionsArray = getOptionsArray();
    const sectionAngle = 360 / optionsArray.length;
    const normalizedRotation = (360 - (rotation % 360)) % 360;
    const selectedIndex = Math.floor(normalizedRotation / sectionAngle);
    return optionsArray[selectedIndex];
  };

  const addToHistory = (result: string) => {
    const newHistory = [{
      result,
      timestamp: new Date().toLocaleTimeString()
    }, ...history];
    if (newHistory.length > 10) newHistory.pop();
    setHistory(newHistory);
  };

  const share = () => {
    const url = window.location.href;
  
    try {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(url);
        alert('copy success!');
      } else {
        // 兼容旧浏览器的回退方案
        const textarea = document.createElement('textarea');
        textarea.value = url;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('copy success!');
      }
    } catch (err) {
      console.error('复制失败:', err);
      alert('无法自动复制，请手动复制链接');
    }
  }

  const spin = () => {
    if (isSpinning) return;

    setSelectedResult('');
    setIsSpinning(true);

    const spinDuration = 3000;
    const startRotation = rotation;
    const totalRotation = 360 * 5 + Math.random() * 360;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / spinDuration, 1);
      
      // Easing function for smooth deceleration
      const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
      const newRotation = startRotation + totalRotation * easeOut(progress);
      setRotation(newRotation);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsSpinning(false);
        const result = getSelectedOption();
        setSelectedResult(result);
        addToHistory(result);
      }
    };

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    drawWheel();
  }, [rotation, options]);

  useEffect(() => {
    const handleResize = () => {
      drawWheel();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8">
      <button 
        onClick={() => setIsControlsPanelVisible(!isControlsPanelVisible)}
        className="toggle-controls bg-white shadow-md rounded-md p-2 hover:bg-gray-50 fixed top-20 right-4 z-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 12h18M3 6h18M3 18h18"/>
        </svg>
      </button>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className={`wheel-section space-y-6 ${!isControlsPanelVisible ? 'centered' : ''}`}>
            <div className="bg-white rounded-lg shadow-md p-6">
              <span className="text-3xl font-bold mb-6 text-center">{wheelTitle}</span>
              <div className="wheel-container mx-auto">
                <canvas 
                  ref={wheelCanvasRef}
                  width={500}
                  height={500}
                  className="w-full h-full cursor-pointer"
                  onClick={spin}
                />
                <div className="pointer"></div>
              </div>
              {selectedResult && (
                <div className="mt-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center result-animation">
                    <p className="text-sm text-blue-600 font-medium mb-1">The wheel has chosen:</p>
                    <p className="text-2xl font-bold text-blue-700">{selectedResult}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={`controls-panel space-y-6 ${!isControlsPanelVisible ? 'collapsed' : ''}`}>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Customize Your Wheel</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Wheel Title</label>
                  <input
                    type="text"
                    value={wheelTitle}
                    onChange={(e) => setWheelTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter wheel title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Options (one per line)</label>
                  <textarea
                    value={options}
                    onChange={(e) => setOptions(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[200px]"
                    placeholder="Enter your options"
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={spin}
                    disabled={isSpinning}
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSpinning ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Spinning...
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
                          <path d="M21 3v5h-5"></path>
                        </svg>
                        Spin the Wheel
                      </>
                    )}
                  </button>
                  <button onClick={share} className="px-4 py-2 border border-gray-300 rounded-md font-medium flex items-center gap-2 hover:bg-gray-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                      <polyline points="16 6 12 2 8 6"></polyline>
                      <line x1="12" y1="2" x2="12" y2="15"></line>
                    </svg>
                    Share
                  </button>
                </div>
                {history.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Previous Results</h3>
                    <div className="space-y-2 max-h-[200px] overflow-y-auto">
                      {history.map((item, index) => (
                        <div key={index} className="flex justify-between items-center text-sm bg-gray-50 p-2 rounded">
                          <span className="font-medium">{item.result}</span>
                          <span className="text-gray-500">{item.timestamp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}