export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        // 获取请求体中的数据
        const body = await request.json();
        let xhsUrl = body.url;
        
        if (!xhsUrl) {
            return NextResponse.json({ error: 'URL is required' }, { status: 400 });
        }

        // 检查是否是短链接
        if (xhsUrl && xhsUrl.includes("xhslink")) {
            const shortLinkResponse = await fetch(`https://api.xiaohongshu.day/xiaohongshu/resolve-shortlink?url=${xhsUrl}`);
            const shortLinkData = await shortLinkResponse.json();
            xhsUrl = shortLinkData.original_url;
            xhsUrl = xhsUrl.replace("https://www.xiaohongshu.com/discovery/item/", "");
        } else {
            console.log("not xhslink");
            xhsUrl = xhsUrl.replace("https://www.xiaohongshu.com/explore/", "");
        }

        console.log(xhsUrl);

        const apiUrl = `https://api.xiaohongshu.day/xiaohongshu/note/${xhsUrl}`;
        
        const response = await fetch(apiUrl);
        const responseText = await response.text();

        return NextResponse.json({ data: responseText });
        
    } catch (error) {
        console.error('Error processing request:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

