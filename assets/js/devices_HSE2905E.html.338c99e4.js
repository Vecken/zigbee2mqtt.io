"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[5085],{91226:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>n,data:()=>r});var a=o(24691);const i={},n=(0,o(89260).A)(i,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[11]||(t[11]=(0,a.Lk)("h1",{id:"datek-hse2905e",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#datek-hse2905e"},[(0,a.Lk)("span",null,"Datek HSE2905E")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"HSE2905E")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=Datek"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Datek")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Datek Eva AMS HAN power-meter sensor")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"switch (state), power_on_behavior, power, voltage, current, energy, produced_energy, power_phase_b, power_phase_c, voltage_phase_b, voltage_phase_c, current_phase_b, current_phase_c, temperature, linkquality")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/HSE2905E.png",alt:"Datek HSE2905E"})])],-1))])]),t[12]||(t[12]=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Factory reset by removing the plastic cover and press &amp; hold the power button for 10 seconds. The LED is then starting to blink Red/Blue to indicate in pairing mode.</p><h3 id="should-automatically-support-only-tested-kamstrup" tabindex="-1"><a class="header-anchor" href="#should-automatically-support-only-tested-kamstrup"><span>Should automatically support (only tested Kamstrup)</span></a></h3><ul><li>Aidon</li><li>Kaifa</li><li>Kamstrup</li></ul><h3 id="configuring-interface-mode" tabindex="-1"><a class="header-anchor" href="#configuring-interface-mode"><span>Configuring interface mode</span></a></h3><p>There should be no need to configure into any interface mode as the Eva HAN should autodetect the correct mode.</p><h3 id="not-getting-measurements" tabindex="-1"><a class="header-anchor" href="#not-getting-measurements"><span>Not getting measurements</span></a></h3><p>In case you are not getting any measurements, it could be that your firmware is too old. If firmware are &lt; 0.4 either update fw via Eva Smart HUB or ask Datek for a replacement with min fw 0.4. Tested on 0.4.</p><h3 id="where-do-i-find-this-product" tabindex="-1"><a class="header-anchor" href="#where-do-i-find-this-product"><span>Where do I find this product</span></a></h3><p><a href="https://shop.evasmart.no/produkt/smarthus/maleravleser#product-tabs1" target="_blank" rel="noopener noreferrer">Product page</a></p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',12)),(0,a.Lk)("p",null,[t[8]||(t[8]=(0,a.eW)("This device supports OTA updates, for more information see ")),(0,a.bF)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,a.k6)((()=>t[7]||(t[7]=[(0,a.eW)("OTA updates")]))),_:1}),t[9]||(t[9]=(0,a.eW)("."))]),t[13]||(t[13]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>t[10]||(t[10]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),t[14]||(t[14]=(0,a.Fv)('<ul><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>voltage_calibration</code>: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_precision</code>: Number of digits after decimal point for voltage, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_precision</code>: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>power_phase_b_calibration</code>: Calibrates the power_phase_b value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_phase_b_precision</code>: Number of digits after decimal point for power_phase_b, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>power_phase_c_calibration</code>: Calibrates the power_phase_c value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_phase_c_precision</code>: Number of digits after decimal point for power_phase_c, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>voltage_phase_b_calibration</code>: Calibrates the voltage_phase_b value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_phase_b_precision</code>: Number of digits after decimal point for voltage_phase_b, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>voltage_phase_c_calibration</code>: Calibrates the voltage_phase_c value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_phase_c_precision</code>: Number of digits after decimal point for voltage_phase_c, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>current_phase_b_calibration</code>: Calibrates the current_phase_b value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_phase_b_precision</code>: Number of digits after decimal point for current_phase_b, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>current_phase_c_calibration</code>: Calibrates the current_phase_c value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_phase_c_precision</code>: Number of digits after decimal point for current_phase_c, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="power-on-behavior-enum" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum"><span>Power-on behavior (enum)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. If you get an <code>UNSUPPORTED_ATTRIBUTE</code> error, the device does not support it.. Value can be found in the published state on the <code>power_on_behavior</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>, <code>toggle</code>, <code>previous</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric"><span>Power (numeric)</span></a></h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;voltage&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric"><span>Current (numeric)</span></a></h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;current&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric"><span>Energy (numeric)</span></a></h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;energy&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="produced-energy-numeric" tabindex="-1"><a class="header-anchor" href="#produced-energy-numeric"><span>Produced energy (numeric)</span></a></h3><p>Sum of produced energy. Value can be found in the published state on the <code>produced_energy</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;produced_energy&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="power-phase-b-numeric" tabindex="-1"><a class="header-anchor" href="#power-phase-b-numeric"><span>Power phase b (numeric)</span></a></h3><p>Instantaneous measured power on phase B. Value can be found in the published state on the <code>power_phase_b</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_phase_b&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-phase-c-numeric" tabindex="-1"><a class="header-anchor" href="#power-phase-c-numeric"><span>Power phase c (numeric)</span></a></h3><p>Instantaneous measured power on phase C. Value can be found in the published state on the <code>power_phase_c</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_phase_c&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="voltage-phase-b-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-phase-b-numeric"><span>Voltage phase B (numeric)</span></a></h3><p>Measured electrical potential value on phase B. Value can be found in the published state on the <code>voltage_phase_b</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;voltage_phase_b&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="voltage-phase-c-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-phase-c-numeric"><span>Voltage phase C (numeric)</span></a></h3><p>Measured electrical potential value on phase C. Value can be found in the published state on the <code>voltage_phase_c</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;voltage_phase_c&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="current-phase-b-numeric" tabindex="-1"><a class="header-anchor" href="#current-phase-b-numeric"><span>Current phase B (numeric)</span></a></h3><p>Instantaneous measured electrical current on phase B. Value can be found in the published state on the <code>current_phase_b</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;current_phase_b&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="current-phase-c-numeric" tabindex="-1"><a class="header-anchor" href="#current-phase-c-numeric"><span>Current phase C (numeric)</span></a></h3><p>Instantaneous measured electrical current on phase C. Value can be found in the published state on the <code>current_phase_c</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;current_phase_c&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric"><span>Temperature (numeric)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',34))])}]]),r=JSON.parse('{"path":"/devices/HSE2905E.html","title":"Datek HSE2905E control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Datek HSE2905E control via MQTT","description":"Integrate your Datek HSE2905E via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-03-31T17:47:18.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Should automatically support (only tested Kamstrup)","slug":"should-automatically-support-only-tested-kamstrup","link":"#should-automatically-support-only-tested-kamstrup","children":[]},{"level":3,"title":"Configuring interface mode","slug":"configuring-interface-mode","link":"#configuring-interface-mode","children":[]},{"level":3,"title":"Not getting measurements","slug":"not-getting-measurements","link":"#not-getting-measurements","children":[]},{"level":3,"title":"Where do I find this product","slug":"where-do-i-find-this-product","link":"#where-do-i-find-this-product","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Power-on behavior (enum)","slug":"power-on-behavior-enum","link":"#power-on-behavior-enum","children":[]},{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Current (numeric)","slug":"current-numeric","link":"#current-numeric","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Produced energy (numeric)","slug":"produced-energy-numeric","link":"#produced-energy-numeric","children":[]},{"level":3,"title":"Power phase b (numeric)","slug":"power-phase-b-numeric","link":"#power-phase-b-numeric","children":[]},{"level":3,"title":"Power phase c (numeric)","slug":"power-phase-c-numeric","link":"#power-phase-c-numeric","children":[]},{"level":3,"title":"Voltage phase B (numeric)","slug":"voltage-phase-b-numeric","link":"#voltage-phase-b-numeric","children":[]},{"level":3,"title":"Voltage phase C (numeric)","slug":"voltage-phase-c-numeric","link":"#voltage-phase-c-numeric","children":[]},{"level":3,"title":"Current phase B (numeric)","slug":"current-phase-b-numeric","link":"#current-phase-b-numeric","children":[]},{"level":3,"title":"Current phase C (numeric)","slug":"current-phase-c-numeric","link":"#current-phase-c-numeric","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1729943165000},"filePathRelative":"devices/HSE2905E.md"}')}}]);