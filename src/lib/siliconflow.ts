// deepseek-ai/DeepSeek-V2.5
import { RmbInfo } from "@/types/rmbInfo";
import {insertProject,findProjectByCode} from "@/models/rmbInfo";
import OpenAI from "openai";

const openai = new OpenAI({
    baseURL: 'https://api.siliconflow.cn/v1',
    apiKey: 'sk-hndrrycbkartgvkuksfclkdoqmdzqjlnbwzphfrdyarjaxau'
});


export const systemPrompt = `
#### 定位
- 智能助手名称 ：分类专家
- 主要任务 ：对输入的文本进行自动分类，识别其所属的类别。

#### 能力
- 文本分析 ：能够准确分析文本的内容和结构。
- 分类识别 ：根据分析结果，将文本分类到预定义的种类中。

#### 知识储备
// - 类别 ：÷。
  - 程序员简历模板
  - 个人简历模板
  - 应届生简历模板
  - 英文简历模板
  - 表格简历模板
  - 自荐信模板

#### 使用说明
- 输入 ：一段文本。
- 输出 ：只输出文本所属的类别，不需要额外解释。
`;

export const system2Prompt = `
The user will provide some exam text. Please parse the "question" and "answer" and output them in markdown format. 

EXAMPLE INPUT: 
列出100元能买到的10件东西

EXAMPLE OUTPUT: 
## 下面是100元能买到的10件具有较高性价比东西:
1. **小米手环8（基础版）** - ¥99  
   📌 功能：心率监测、运动记录、睡眠分析  
   🔋 续航：典型使用14天  

2. **QCY T13蓝牙耳机** - ¥99  
   🔊 特点：主动降噪、30小时续航  
   🎧 类型：入耳式真无线  

3. **罗马仕10000mAh快充充电宝** - ¥89  
   ⚡ 支持：18W双向快充  
   📱 兼容：手机/平板多种设备  

4. **舒客G33电动牙刷** - ¥99  
   🦷 模式：5种清洁模式  
   ⏱️ 续航：55天超长待机  

5. **哈尔斯保温杯500ml** - ¥89  
   🌡️ 保温：6小时保热/12小时保冷  
   🏽 材质：食品级304不锈钢  

6. **星巴克中杯兑换券×2** - ¥100(¥50/张)  
   ☕ 可选：美式/拿铁等基础款  
   ⏳ 有效期：通常3个月  

7. **费列罗巧克力16粒装** - ¥99  
   🍫 规格：3种口味混合  
   🎁 包装：精美礼盒装  

8. **乐高方头仔系列** - ¥99  
   🧩 颗粒数：约100-150pcs  
   🏆 热门款：迪士尼/漫威角色  

9. **《三体》全集平装版** - ¥98  
   📚 包含：三册完整版  
   ⏱️ 阅读时长：约50小时  

10. **回力经典帆布鞋** - ¥89  
    👟 特点：防滑橡胶底  
    🎨 颜色：黑白/红白等多色可选
`;

export const system2PromptTw = `
The user will provide some exam text. Please parse the "question" and "answer" and output them in markdown format. 

EXAMPLE INPUT: 
列出100元能買到的10件東西

EXAMPLE OUTPUT: 
## 下面是100元能買到的10件具有較高性價比東西:

1. **小米手環8（基礎版）** - ¥99  
   📌 功能：心率監測、運動記錄、睡眠分析  
   🔋 續航：典型使用14天  

2. **QCY T13藍牙耳機** - ¥99  
   🔊 特點：主動降噪、30小時續航  
   🎧 類型：入耳式真無線  

3. **羅馬仕10000mAh快充充電寶** - ¥89  
   ⚡ 支持：18W雙向快充  
   📱 兼容：手機/平板多種設備  

4. **舒客G33電動牙刷** - ¥99  
   🦷 模式：5種清潔模式  
   ⏱️ 續航：55天超長待機  

5. **哈爾斯保溫杯500ml** - ¥89  
   🌡️ 保溫：6小時保熱/12小時保冷  
   🏽 材質：食品級304不鏽鋼  

6. **星巴克中杯兌換券×2** - ¥100(¥50/張)  
   ☕ 可選：美式/拿鐵等基礎款  
   ⏳ 有效期：通常3個月  

7. **費列羅巧克力16粒裝** - ¥99  
   🍫 規格：3種口味混合  
   🎁 包裝：精美禮盒裝  

8. **樂高方頭仔系列** - ¥99  
   🧩 顆粒數：約100-150pcs  
   🏆 熱門款：迪士尼/漫威角色  

9. **《三體》全集平裝版** - ¥98  
   📚 包含：三冊完整版  
   ⏱️ 閱讀時長：約50小時  

10. **回力經典帆布鞋** - ¥89  
    👟 特點：防滑橡膠底  
    🎨 顏色：黑白/紅白等多色可選
`;

export async function chat(name:string,lang:string) {
   var msg="列出"+name+"元能买到的10件东西";
   var promt=system2Prompt;
   if(lang==='tw'){
      msg="列出"+name+"元能買到的10件東西";
      promt=system2PromptTw;
   }
   const messages = [
        { role: 'system' as const, content: promt },
        { role: 'user' as const, content: msg }
   ];

const completion = await openai.chat.completions.create({
messages,
model: "deepseek-ai/DeepSeek-V2.5"
});
//console.log(completion.choices[0].message.content);
return completion.choices[0].message.content;
}


export async function rmbInfo(rmb:string,lang:string) {
  const info = await findProjectByCode(rmb+"_"+lang);

  if(info){
   console.log("exist");
   return info.description;
   }else{
      console.log("not exist");
      const result = await chat(rmb.toString(),lang);
      console.log(result);
      await insertProject(rmb+"_"+lang,result as string);
      return result;
   }
}