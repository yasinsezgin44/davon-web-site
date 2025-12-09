"use client";

import Script from "next/script";
import { useCallback } from "react";

import { GlassmorphismNav } from "@/components/glassmorphism-nav";
import { Footer } from "@/components/footer";
import Aurora from "@/components/Aurora";
import { MapPin, Phone, Mail, Send, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const handleZohoSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      // Preserve Zoho validation/mandatory logic
      if (
        typeof document === "undefined" ||
        typeof globalThis === "undefined"
      ) {
        return;
      }
      document.charset = "UTF-8";
      const checker =
        // @ts-expect-error external script
        globalThis.checkMandatory930112000000520835;
      if (typeof checker === "function" && checker() === false) {
        e.preventDefault();
      }
    },
    []
  );

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="relative z-10">
          <GlassmorphismNav />

          {/* Hero Section */}
          <section className="relative pt-32 pb-20 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-black/80" />
            <div className="absolute inset-0">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle, rgba(239, 68, 68, 0.3) 1px, transparent 1px)`,
                  backgroundSize: "50px 50px",
                }}
              />
            </div>
            <div className="container mx-auto relative z-10 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Contact Us, Discover Our{" "}
                <span className="text-red-500">Solutions!</span>
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Initiate potential collaborations by contacting us and receive
                the best support and service for your business!
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Info Cards */}
                <div className="space-y-6">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-red-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Our Address
                        </h3>
                        <p className="text-white/60 leading-relaxed">
                          İzmir Teknoloji Geliştirme Bölgesi A3 Binası No:16/A
                          İYTE Kampüsü Gülbahçe, Urla/İzmir
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-red-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Phone
                        </h3>
                        <p className="text-white/60">+90 (232) 765 90 30</p>
                        <p className="text-white/40 text-sm mt-1">
                          Fax: +90 (232) 765 90 30
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-red-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Email
                        </h3>
                        <p className="text-white/60">info@davon.com.tr</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-red-600/20 to-red-500/10 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Ready to Transform Your Operations?
                    </h3>
                    <p className="text-white/70 mb-4">
                      Schedule a personalized demo with our healthcare experts.
                    </p>
                    <button className="group inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-all duration-300">
                      Schedule a Demo
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Contact Us
                  </h2>
                  <form
                    id="webform930112000000520835"
                    name="WebToLeads930112000000520835"
                    action="https://crm.zoho.eu/crm/WebToLeadForm"
                    method="POST"
                    acceptCharset="UTF-8"
                    onSubmit={handleZohoSubmit}
                    className="space-y-4"
                  >
                    <input
                      type="hidden"
                      name="xnQsjsdp"
                      value="cdb46a67faf927a7535becf7e30864a24c368e77d23ce89ecf8c0d8dd72e60da"
                    />
                    <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                    <input
                      type="hidden"
                      name="xmIwtLD"
                      value="151d91efaf7f5ec7a2ae31df0df7a746188582bb2bcb2e410d4342219ad255237c52aff06d35c0bd7a18cf30f4fc4eaa"
                    />
                    <input type="hidden" name="actionType" value="TGVhZHM=" />
                    <input
                      type="hidden"
                      name="returnURL"
                      value="https://davon.health/contact/thank-you"
                    />
                    {/* Do not remove this code. */}
                    <input type="hidden" id="ldeskuid" name="ldeskuid" />
                    <input type="hidden" id="LDTuvid" name="LDTuvid" />
                    {/* Do not remove this code. */}

                    <div>
                      <input
                        type="text"
                        id="Last_Name"
                        name="Last Name"
                        placeholder="Full Name*"
                        required
                        aria-required="true"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        id="Email"
                        name="Email"
                        placeholder="E-Mail Address"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        id="Phone"
                        name="Phone"
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all"
                      />
                    </div>
                    <div>
                      <textarea
                        id="Description"
                        name="Description"
                        placeholder="Message"
                        rows={5}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all resize-none"
                      />
                    </div>

                    <input
                      type="hidden"
                      name="aG9uZXlwb3Q"
                      className="hidden"
                    />

                    <button
                      type="submit"
                      id="formsubmit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      Send
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="py-20 px-4" data-white-section="true">
            <div className="bg-white rounded-[3rem] py-12 px-8">
              <div className="container mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">
                    Visit Our Office
                  </h2>
                  <p className="text-slate-600">
                    Located in İzmir Technology Development Zone
                  </p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3131.8156!2d26.7898!3d38.3234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDE5JzI0LjIiTiAyNsKwNDcnMjMuMyJF!5e0!3m2!1sen!2str!4v1234567890"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale"
                    title="Davon Health office location"
                  />
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>

        {/* Aurora background */}
        <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
          <Aurora
            colorStops={["#7f1d1d", "#dc2626", "#450a0a"]}
            amplitude={1.2}
            blend={0.6}
            speed={0.8}
          />
        </div>
      </main>

      {/* Zoho validation and tracking scripts */}
      <Script
        id="zoho-validation"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: String.raw`
            function validateEmail930112000000520835(){
              var form = document.forms['WebToLeads930112000000520835'];
              var emailFld = form.querySelectorAll('[ftype=email]');
              var i;
              for(i = 0; i < emailFld.length; i++){
                var emailVal = emailFld[i].value;
                if((emailVal.replace(/^\\s+|\\s+$/g,'' )).length != 0){
                  var atpos = emailVal.indexOf('@');
                  var dotpos = emailVal.lastIndexOf('.');
                  if(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length){
                    alert('Please enter a valid email address. ');
                    emailFld[i].focus();
                    return false;
                  }
                }
              }
              return true;
            }
            function checkMandatory930112000000520835(){
              var mndFileds = new Array('Last Name');
              var fldLangVal = new Array('Last Name');
              for(i = 0; i < mndFileds.length; i++){
                var fieldObj = document.forms['WebToLeads930112000000520835'][mndFileds[i]];
                if(fieldObj){
                  if(((fieldObj.value).replace(/^\\s+|\\s+$/g,'' )).length == 0){
                    if(fieldObj.type == 'file'){
                      alert('Please select a file to upload.');
                      fieldObj.focus();
                      return false;
                    }
                    alert(fldLangVal[i] + ' cannot be empty.');
                    fieldObj.focus();
                    return false;
                  } else if(fieldObj.nodeName == 'SELECT'){
                    if(fieldObj.options[fieldObj.selectedIndex].value == '-None-'){
                      alert(fldLangVal[i] + ' cannot be none.');
                      fieldObj.focus();
                      return false;
                    }
                  } else if(fieldObj.type == 'checkbox'){
                    if(fieldObj.checked == false){
                      alert('Please accept ' + fldLangVal[i]);
                      fieldObj.focus();
                      return false;
                    }
                  }
                  try{
                    if(fieldObj.name == 'Last Name'){
                      name = fieldObj.value;
                    }
                  }catch(e){}
                }
              }
              trackVisitor930112000000520835();
              if(!validateEmail930112000000520835()){
                return false;
              }
              var urlparams = new URLSearchParams(window.location.search);
              if(urlparams.has('service') && (urlparams.get('service') === 'smarturl')){
                var webform = document.getElementById('webform930112000000520835');
                var service = urlparams.get('service');
                var smarturlfield = document.createElement('input');
                smarturlfield.setAttribute('type','hidden');
                smarturlfield.setAttribute('value',service);
                smarturlfield.setAttribute('name','service');
                webform.appendChild(smarturlfield);
              }
              document.querySelector('.crmWebToEntityForm .formsubmit')?.setAttribute('disabled', true);
            }
            function tooltipShow930112000000520835(el){
              var tooltip = el.nextElementSibling;
              var tooltipDisplay = tooltip.style.display;
              if(tooltipDisplay == 'none'){
                var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
                for(i = 0; i < allTooltip.length; i++){
                  allTooltip[i].style.display = 'none';
                }
                tooltip.style.display = 'block';
              }else{
                tooltip.style.display = 'none';
              }
            }
          `,
        }}
      />
      <Script
        id="VisitorTracking"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: String.raw`
            var $zoho = $zoho || {};
            $zoho.salesiq = $zoho.salesiq || {widgetcode:'siqfe0fd684240acd020f713c0bb572f6e4c39f92bb6221eb95db278a1e4a18564c', values:{}, ready:function(){}};
            var d = document;
            s = d.createElement('script');
            s.type = 'text/javascript';
            s.id = 'zsiqscript';
            s.defer = true;
            s.src = 'https://salesiq.zoho.eu/widget';
            t = d.getElementsByTagName('script')[0];
            t.parentNode.insertBefore(s, t);
            function trackVisitor930112000000520835(){
              try{
                if($zoho){
                  var LDTuvidObj = document.forms['WebToLeads930112000000520835']['LDTuvid'];
                  if(LDTuvidObj){
                    LDTuvidObj.value = $zoho.salesiq.visitor.uniqueid();
                  }
                  var firstnameObj = document.forms['WebToLeads930112000000520835']['First Name'];
                  if(firstnameObj){
                    name = firstnameObj.value + ' ' + name;
                  }
                  $zoho.salesiq.visitor.name(name);
                  var emailObj = document.forms['WebToLeads930112000000520835']['Email'];
                  if(emailObj){
                    email = emailObj.value;
                    $zoho.salesiq.visitor.email(email);
                  }
                }
              }catch(e){}
            }
          `,
        }}
      />
      <Script
        id="wf_anal"
        src="https://crm.zohopublic.eu/crm/WebFormAnalyticsServeServlet?rid=16e6f09bf48fd0fb1a3aeec7ea03ef608b639f39676e529b2323037ae4a0f6c3c53fddd8cbe3c2c31fd34fd0df8b18ffgid2726dabaa27904593f8e19888fd87fdc4b948e0d3f690fd8d480ce60860bf59bgidfb7cc15d3bf85c7cfd954786d309232c95f374a9c5f857a141c72565536bc770gid26a5e383f56fd53d3a1219760318b883fd6702adedbf2341ad079973b06718aa&tw=894875625b60697278763fe201e9b85f5bb5b03514b02e560e78ab7eccd7d861"
        strategy="afterInteractive"
      />
    </div>
  );
}
