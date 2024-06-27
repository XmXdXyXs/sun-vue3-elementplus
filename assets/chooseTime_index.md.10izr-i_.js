import{y as g,B as k,D as t,V as a,I as o,K as n,aI as E,S as e,l as c,u as i}from"./chunks/framework.Dt8olB9I.js";const y=t("h2",{id:"时间选择",tabindex:"-1"},[n("时间选择 "),t("a",{class:"header-anchor",href:"#时间选择","aria-label":'Permalink to "时间选择"'},"​")],-1),x=t("p",null,"下拉实现时间选择",-1),m=t("h3",{id:"基本用法",tabindex:"-1"},[n("基本用法 "),t("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1),u={style:{padding:"12px",margin:"12px",border:"1px solid #eee"}},C=E(`<h3 id="代码示例" tabindex="-1">代码示例 <a class="header-anchor" href="#代码示例" aria-label="Permalink to &quot;代码示例&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sun-choose-time</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">      :startOptions=&quot;startOptions&quot;</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">      @startChange=&quot;startChange&quot;</span></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">      @endChange=&quot;endChange&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &gt;&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sun-choose-time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">let startChange = (val) =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;startChange&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, val)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">let endChange = (val) =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;endChange&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, val)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">let startOptions = {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // size: &#39;mini&#39;,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // clearable: false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="api" tabindex="-1">Api <a class="header-anchor" href="#api" aria-label="Permalink to &quot;Api&quot;">​</a></h3><h4 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h4><table tabindex="0"><thead><tr><th>属性名</th><th style="text-align:center;">说明</th><th style="text-align:right;">类型</th><th style="text-align:right;">默认值</th></tr></thead><tbody><tr><td>startPlaceholder</td><td style="text-align:center;">开始时间的占位符</td><td style="text-align:right;">string</td><td style="text-align:right;">请选择开始时间</td></tr><tr><td>endPlaceholder</td><td style="text-align:center;">结束时间的占位符</td><td style="text-align:right;">string</td><td style="text-align:right;">请选择结束时间</td></tr><tr><td>startTimeStart</td><td style="text-align:center;">开始时间的开始选择</td><td style="text-align:right;">string</td><td style="text-align:right;">08:00</td></tr><tr><td>startTimeEnd</td><td style="text-align:center;">开始时间的结束选择</td><td style="text-align:right;">string</td><td style="text-align:right;">24:00</td></tr><tr><td>endTimeStart</td><td style="text-align:center;">结束时间的开始选择</td><td style="text-align:right;">string</td><td style="text-align:right;">08:00</td></tr><tr><td>endTimeEnd</td><td style="text-align:center;">结束时间的结束选择</td><td style="text-align:right;">string</td><td style="text-align:right;">24:00</td></tr><tr><td>startStep</td><td style="text-align:center;">开始时间的步进</td><td style="text-align:right;">string</td><td style="text-align:right;">00:30</td></tr><tr><td>endStep</td><td style="text-align:center;">结束时间的步进</td><td style="text-align:right;">string</td><td style="text-align:right;">00:30</td></tr><tr><td>startOptions</td><td style="text-align:center;">额外的属性参考<code>element-plus</code>时间选择器属性</td><td style="text-align:right;">object</td><td style="text-align:right;">-</td></tr></tbody></table><h4 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h4><table tabindex="0"><thead><tr><th>事件名</th><th style="text-align:center;">说明</th><th style="text-align:right;">参数</th></tr></thead><tbody><tr><td>startChange</td><td style="text-align:center;">开始时间的回调数据</td><td style="text-align:right;">val:string</td></tr><tr><td>endChange</td><td style="text-align:center;">结束时间的回调数据</td><td style="text-align:right;">val:<code>{endTime: string, startTime: string}</code></td></tr></tbody></table>`,7),B=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"chooseTime/index.md","filePath":"chooseTime/index.md"}'),b={name:"chooseTime/index.md"},D=g({...b,setup(_){let l=s=>{console.log("startChange",s)},h=s=>{console.log("endChange",s)},d={};return(s,F)=>{const r=e("sun-choose-time"),p=e("ClientOnly");return c(),k("div",null,[y,x,m,t("div",u,[a(p,null,{default:o(()=>[a(r,{startOptions:i(d),onStartChange:i(l),onEndChange:i(h)},null,8,["startOptions","onStartChange","onEndChange"])]),_:1})]),C])}}});export{B as __pageData,D as default};
