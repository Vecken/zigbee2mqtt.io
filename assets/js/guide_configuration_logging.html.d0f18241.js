"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[21289],{83334:(e,n,s)=>{s.r(n),s.d(n,{comp:()=>t,data:()=>i});var a=s(24691);const l={},t=(0,s(89260).A)(l,[["render",function(e,n){const s=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[n[5]||(n[5]=(0,a.Lk)("h1",{id:"logging",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#logging"},[(0,a.Lk)("span",null,"Logging")])],-1)),n[6]||(n[6]=(0,a.Lk)("p",null,"Zigbee2MQTT can output logs to the console, a logfile or a (remote) Syslog server.",-1)),(0,a.Lk)("p",null,[n[1]||(n[1]=(0,a.eW)("The log-level can be adjusted at runtime, see ")),(0,a.bF)(s,{to:"/guide/usage/mqtt_topics_and_messages.html#zigbee2mqtt-bridge-request"},{default:(0,a.k6)((()=>n[0]||(n[0]=[(0,a.eW)("MQTT Topics and Messages")]))),_:1}),n[2]||(n[2]=(0,a.eW)(" for details."))]),n[7]||(n[7]=(0,a.Fv)('<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">advanced</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token comment"># Optional: Logging level, options: debug, info, warning, error (default: info)</span></span>\n<span class="line">    <span class="token key atrule">log_level</span><span class="token punctuation">:</span> info</span>\n<span class="line">    <span class="token comment"># Optional: Set log levels for certain namespaces hierarchies (default: {})</span></span>\n<span class="line">    <span class="token key atrule">log_namespaced_levels</span><span class="token punctuation">:</span></span>\n<span class="line">        <span class="token key atrule">z2m:mqtt</span><span class="token punctuation">:</span> warning</span>\n<span class="line">    <span class="token comment"># Optional: log timestamp format (default: shown below)</span></span>\n<span class="line">    <span class="token key atrule">timestamp_format</span><span class="token punctuation">:</span> <span class="token string">&#39;YYYY-MM-DD HH:mm:ss&#39;</span></span>\n<span class="line">    <span class="token comment"># Optional: Location of log directory (default: shown below)</span></span>\n<span class="line">    <span class="token key atrule">log_directory</span><span class="token punctuation">:</span> data/log/%TIMESTAMP%</span>\n<span class="line">    <span class="token comment"># Optional: Log file name, can also contain timestamp, e.g.: zigbee2mqtt_%TIMESTAMP%.log (default: shown below)</span></span>\n<span class="line">    <span class="token key atrule">log_file</span><span class="token punctuation">:</span> log.txt</span>\n<span class="line">    <span class="token comment"># Optional: Rotate log every 10MB around 3 files (default: true)</span></span>\n<span class="line">    <span class="token key atrule">log_rotation</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line">    <span class="token comment"># Optional: Output location of the log (default: shown below), leave empty to suppress logging (log_output: [])</span></span>\n<span class="line">    <span class="token comment"># possible options: &#39;console&#39;, &#39;file&#39;, &#39;syslog&#39;</span></span>\n<span class="line">    <span class="token key atrule">log_output</span><span class="token punctuation">:</span></span>\n<span class="line">        <span class="token punctuation">-</span> console</span>\n<span class="line">        <span class="token punctuation">-</span> file</span>\n<span class="line">    <span class="token comment"># Create a symlink called &quot;current&quot; in the log directory which points to the latests log directory. (default: false)</span></span>\n<span class="line">    <span class="token key atrule">log_symlink_current</span><span class="token punctuation">:</span> <span class="token boolean important">false</span></span>\n<span class="line">    <span class="token comment"># Optional: syslog configuration, skip values or entirely to use defaults. Only use when &#39;syslog&#39; in &#39;log_output&#39; (see above)</span></span>\n<span class="line">    <span class="token key atrule">log_syslog</span><span class="token punctuation">:</span></span>\n<span class="line">        <span class="token key atrule">host</span><span class="token punctuation">:</span> localhost <span class="token comment"># The host running syslogd, defaults to localhost.</span></span>\n<span class="line">        <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">514</span> <span class="token comment"># The port on the host that syslog is running on, defaults to syslogd&#39;s default port.</span></span>\n<span class="line">        <span class="token key atrule">protocol</span><span class="token punctuation">:</span> udp4 <span class="token comment"># The network protocol to log over (e.g. tcp4, udp4, tls4, unix, unix-connect, etc).</span></span>\n<span class="line">        <span class="token key atrule">path</span><span class="token punctuation">:</span> /dev/log <span class="token comment"># The path to the syslog dgram socket (i.e. /dev/log or /var/run/syslog for OS X).</span></span>\n<span class="line">        <span class="token key atrule">pid</span><span class="token punctuation">:</span> process.pid <span class="token comment"># PID of the process that log messages are coming from (Default process.pid).</span></span>\n<span class="line">        <span class="token key atrule">facility</span><span class="token punctuation">:</span> local0 <span class="token comment"># Syslog facility to use (Default: local0).</span></span>\n<span class="line">        <span class="token key atrule">localhost</span><span class="token punctuation">:</span> localhost <span class="token comment"># Host to indicate that log messages are coming from (Default: localhost).</span></span>\n<span class="line">        <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">&#39;5424&#39;</span> <span class="token comment"># The type of the syslog protocol to use (Default: BSD, also valid: 5424).</span></span>\n<span class="line">        <span class="token key atrule">app_name</span><span class="token punctuation">:</span> Zigbee2MQTT <span class="token comment"># The name of the application (Default: Zigbee2MQTT).</span></span>\n<span class="line">        <span class="token key atrule">eol</span><span class="token punctuation">:</span> <span class="token string">&#39;\\n&#39;</span> <span class="token comment"># The end of line character to be added to the end of the message (Default: Message without modifications).</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reducing-mqtt-traffic" tabindex="-1"><a class="header-anchor" href="#reducing-mqtt-traffic"><span>Reducing MQTT traffic</span></a></h2><p>Logging can have a significant impact on MQTT traffic. For that reason, only <code>info</code> level and above are published to MQTT by default (see below if you want to change this behavior). You can reduce it further by increasing specific levels for certain namespaces you do not need to log with the setting <code>log_namespaced_levels</code>. One of the big factors in traffic from logging is the namespace <code>z2m:mqtt</code>, you can increase its level while keeping the rest at <code>info</code> using:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">advanced</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">log_level</span><span class="token punctuation">:</span> info</span>\n<span class="line">    <span class="token key atrule">log_namespaced_levels</span><span class="token punctuation">:</span></span>\n<span class="line">        <span class="token key atrule">z2m:mqtt</span><span class="token punctuation">:</span> warning</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="defining-levels-for-specific-namespace-hierarchy" tabindex="-1"><a class="header-anchor" href="#defining-levels-for-specific-namespace-hierarchy"><span>Defining levels for specific namespace hierarchy</span></a></h2><p>Any log level defined in <code>log_namespaced_levels</code> will apply to the namespace itself and all namespaces below it, unless explicitly configured.</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">advanced</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">log_level</span><span class="token punctuation">:</span> warning</span>\n<span class="line">    <span class="token key atrule">log_namespaced_levels</span><span class="token punctuation">:</span></span>\n<span class="line">        <span class="token key atrule">zhc</span><span class="token punctuation">:</span> info</span>\n<span class="line">        <span class="token key atrule">zhc:legacy:fz</span><span class="token punctuation">:</span> debug</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>zhc</code> and below namespaces will be logged as <code>info</code> (examples: <code>zhc</code>, <code>zhc:ota:common</code>, <code>zhc:legacy:tz</code>)</li><li><code>zhc:legacy:fz</code> and below namespaces will be logged as <code>debug</code> (examples: <code>zhc:legacy:fz</code>, <code>zhc:legacy:fz:tuya</code>)</li><li>Other unspecified namespaces will use <code>log_level</code>, in this case, <code>warning</code> (examples: <code>z2m:mqtt</code>, <code>zh:zstack</code>)</li></ul><h2 id="debugging" tabindex="-1"><a class="header-anchor" href="#debugging"><span>Debugging</span></a></h2><p>In case Zigbee2MQTT isn&#39;t working as expected the following tips can help you in finding the problem. First enable debug logging by adding the following in your <code>configuration.yaml</code>:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">advanced</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">log_level</span><span class="token punctuation">:</span> debug</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>In the logging you will see the following abbreviations:</p><ul><li><code>z2m</code>: Zigbee2MQTT</li><li><code>zh</code>: <a href="https://github.com/koenkk/zigbee-herdsman" target="_blank" rel="noopener noreferrer">zigbee-herdsman</a>, logged events from the Zigbee library used by Zigbee2MQTT.</li><li><code>zhc</code>: <a href="https://github.com/koenkk/zigbee-herdsman-converters" target="_blank" rel="noopener noreferrer">zigbee-herdsman-converters</a>, logged events from the devices support library.</li></ul>',13)),(0,a.Lk)("p",null,[n[4]||(n[4]=(0,a.eW)("To change log level at runtime, use the frontend or ")),(0,a.bF)(s,{to:"/guide/usage/mqtt_topics_and_messages.html"},{default:(0,a.k6)((()=>n[3]||(n[3]=[(0,a.eW)("MQTT")]))),_:1})]),n[8]||(n[8]=(0,a.Fv)('<h3 id="publishing-to-mqtt-and-to-frontend" tabindex="-1"><a class="header-anchor" href="#publishing-to-mqtt-and-to-frontend"><span>Publishing to MQTT and to frontend</span></a></h3><p>In an effort to improve performance, <code>debug</code>-level logs are no longer published to MQTT and to frontend by default. If you want them published, you can use the following setting:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">advanced</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">log_debug_to_mqtt_frontend</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="preventing-specific-namespaces-from-being-logged" tabindex="-1"><a class="header-anchor" href="#preventing-specific-namespaces-from-being-logged"><span>Preventing specific namespaces from being logged</span></a></h3><p>A regex-based way to filter out certain <code>debug</code> lines based on their namespaces.</p><p>Examples:</p><p>Filter out log namespaces starting with:</p><ul><li><code>zhc:legacy:fz:tuya</code></li><li>or <code>zhc:legacy:fz:moes</code></li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">advanced</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">log_debug_namespace_ignore</span><span class="token punctuation">:</span> <span class="token string">&#39;^zhc:legacy:fz:(tuya|moes)&#39;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Filter out log namespaces starting with:</p><ul><li><code>zhc:legacy:fz:tuya</code></li><li>or <code>zhc:legacy:fz:moes</code></li><li>or <code>zh:ember:uart:</code> (any namespace below <code>uart</code>)</li><li>or <code>zh:controller</code> (any namespace below <code>controller</code> and <code>controller</code> itself)</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">advanced</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">log_debug_namespace_ignore</span><span class="token punctuation">:</span> <span class="token string">&#39;^zhc:legacy:fz:(tuya|moes)|^zh:ember:uart:|^zh:controller&#39;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>See <a href="https://regex101.com/" target="_blank" rel="noopener noreferrer">https://regex101.com/</a> if you need some help building a regex. Make sure to use Flavor: <code>ECMAScript (JavaScript)</code>.</p>',13))])}]]),i=JSON.parse('{"path":"/guide/configuration/logging.html","title":"Logging","lang":"en-US","frontmatter":{"pageClass":"content-page","sidebarDepth":1},"headers":[{"level":2,"title":"Reducing MQTT traffic","slug":"reducing-mqtt-traffic","link":"#reducing-mqtt-traffic","children":[]},{"level":2,"title":"Defining levels for specific namespace hierarchy","slug":"defining-levels-for-specific-namespace-hierarchy","link":"#defining-levels-for-specific-namespace-hierarchy","children":[]},{"level":2,"title":"Debugging","slug":"debugging","link":"#debugging","children":[{"level":3,"title":"Publishing to MQTT and to frontend","slug":"publishing-to-mqtt-and-to-frontend","link":"#publishing-to-mqtt-and-to-frontend","children":[]},{"level":3,"title":"Preventing specific namespaces from being logged","slug":"preventing-specific-namespaces-from-being-logged","link":"#preventing-specific-namespaces-from-being-logged","children":[]}]}],"git":{"updatedTime":1729943165000},"filePathRelative":"guide/configuration/logging.md"}')}}]);