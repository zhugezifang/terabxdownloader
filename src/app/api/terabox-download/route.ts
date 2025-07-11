export const runtime = 'edge';

import { NextRequest, NextResponse } from 'next/server';


export async function POST(request: NextRequest) {
    try {
        // 获取请求体中的数据
        const body = await request.json();
        let teraboxUrl = body.url;
        
        if (!teraboxUrl) {
            return NextResponse.json({ error: 'URL is required' }, { status: 400 });
        }

        // 验证URL格式
        if (!teraboxUrl.includes('terabox.com')) {
            return NextResponse.json({ error: 'Invalid TeraBox URL' }, { status: 400 });
        }

        var myHeaders = new Headers();
        myHeaders.append("content-type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("action", "terabox_api_request");
        urlencoded.append("url", teraboxUrl);

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded
        };
        const response = await fetch('https://terabxdownloader.com/wp-admin/admin-ajax.php', requestOptions);

        const responseText = await response.text();

        // Parse the response as JSON
        try {
            const parsedData = JSON.parse(responseText);
            return NextResponse.json({ data: parsedData });
        } catch (parseError) {
            console.error('Error parsing response:', parseError);
            return NextResponse.json({ error: 'Invalid response format' }, { status: 500 });
        }
        
    } catch (error) {
        console.error('Error processing request:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

