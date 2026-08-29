import React, { useState } from 'react';
import { 
  Mail, 
  MessageCircle, 
  Instagram, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  ExternalLink, 
  Send, 
  Sparkles, 
  Heart,
  ArrowUpRight
} from 'lucide-react';
import { contactInfo, personalInfo } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [sentSuccess, setSentSuccess] = useState(false);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.message) return;

    // Compose mailto or direct whatsapp message fallback
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
    const body = encodeURIComponent(`Hi Aisya,\n\nName: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
    window.open(`mailto:${contactInfo.email}?subject=${subject}&body=${body}`, '_blank');
    setSentSuccess(true);
    setTimeout(() => setSentSuccess(false), 5000);
  };

  const contactsList = [
    {
      id: 'email',
      label: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      icon: <Mail className="w-5 h-5 text-[#FF84BA]" />,
      actionText: 'Send Email',
      bgLight: '#FFF4F4',
      borderCol: '#F9B2D7'
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      value: contactInfo.whatsapp,
      href: `https://wa.me/${contactInfo.whatsappRaw}?text=${encodeURIComponent("Hi Aisya! I saw your portfolio and would love to connect.")}`,
      icon: <MessageCircle className="w-5 h-5 text-[#10B981]" />,
      actionText: 'Chat on WhatsApp',
      bgLight: '#ECFDF5',
      borderCol: '#A7F3D0'
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: contactInfo.linkedin,
      href: contactInfo.linkedinUrl,
      icon: <Linkedin className="w-5 h-5 text-[#0A66C2]" />,
      actionText: 'View Profile',
      bgLight: '#CFECF3',
      borderCol: '#BAE6FD'
    },
    {
      id: 'github',
      label: 'GitHub',
      value: contactInfo.github,
      href: contactInfo.githubUrl,
      icon: <Github className="w-5 h-5 text-[#181717]" />,
      actionText: 'Explore Repos',
      bgLight: '#F3F4F6',
      borderCol: '#E5E7EB'
    },
    {
      id: 'instagram',
      label: 'Instagram',
      value: `@${contactInfo.instagram}`,
      href: contactInfo.instagramUrl,
      icon: <Instagram className="w-5 h-5 text-[#E1306C]" />,
      actionText: 'Follow / DM',
      bgLight: '#FFF4F4',
      borderCol: '#F9B2D7'
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#CFECF3]/60 via-[#F9B2D7]/40 to-[#FFF4F4] blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with EXACT required title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-[#FF84BA] border border-[#F9B2D7] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FF84BA]" />
            <span>Say Hello</span>
          </div>
          
          {/* Strictly "Let's Get in Touch" as required */}
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
            Let's Get in Touch
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Interested in collaboration, internship opportunities, or talking about AI and Software Engineering? Feel free to reach out anytime!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Cards */}
          <div className="lg:col-span-6 space-y-3.5">
            <h3 className="text-base font-bold text-slate-900 font-display mb-2 flex items-center gap-2">
              <span>Direct Channels</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            </h3>

            {contactsList.map((contact) => (
              <div
                key={contact.id}
                className="bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-4.5 border border-[#F9B2D7]/40 hover:border-[#FF84BA] shadow-[0_6px_20px_-10px_rgba(255,132,186,0.15)] hover:shadow-[0_10px_25px_-8px_rgba(255,132,186,0.25)] transition-all flex items-center justify-between gap-3 group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border"
                    style={{ backgroundColor: contact.bgLight, borderColor: contact.borderCol }}
                  >
                    {contact.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      {contact.label}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-800 truncate font-display">
                      {contact.value}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  {/* Copy Button */}
                  <button
                    onClick={() => copyToClipboard(contact.value, contact.id)}
                    className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-[#FFF4F4] transition-colors border border-transparent hover:border-[#F9B2D7]/50"
                    title={`Copy ${contact.label}`}
                  >
                    {copiedItem === contact.id ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>

                  {/* Open Link Button */}
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#FFF4F4] hover:bg-[#FF84BA] text-[#FF84BA] hover:text-white font-bold text-xs border border-[#F9B2D7] transition-all"
                  >
                    <span>Open</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Quick Interactive Message Box */}
          <div className="lg:col-span-6 bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-[#F9B2D7]/60 shadow-[0_15px_40px_-12px_rgba(255,132,186,0.22)]">
            <div className="mb-5">
              <h3 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2">
                <span>Send a Quick Note</span>
                <Sparkles className="w-4 h-4 text-[#FF84BA]" />
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Drop your message here to start an email conversation directly with Aisya.
              </p>
            </div>

            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins / Recruiter"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-[#FFF4F4]/50 border border-[#F9B2D7]/60 focus:outline-none focus:border-[#FF84BA] focus:ring-2 focus:ring-[#FF84BA]/20 transition-all text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-[#FFF4F4]/50 border border-[#F9B2D7]/60 focus:outline-none focus:border-[#FF84BA] focus:ring-2 focus:ring-[#FF84BA]/20 transition-all text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Hi Aisya, we loved your ANPR and AI projects and would love to discuss..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-[#FFF4F4]/50 border border-[#F9B2D7]/60 focus:outline-none focus:border-[#FF84BA] focus:ring-2 focus:ring-[#FF84BA]/20 transition-all text-slate-800 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-[#FF84BA] to-[#f472b6] hover:from-[#f06292] hover:to-[#FF84BA] text-white shadow-[0_8px_20px_rgba(255,132,186,0.35)] hover:shadow-[0_10px_25px_rgba(255,132,186,0.45)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <Send className="w-4 h-4" />
                <span>Send Message to Aisya</span>
              </button>

              {sentSuccess && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold text-center animate-in fade-in">
                  ✓ Opening mail client with your message!
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Clean Footer with Contact Info */}
        <div className="mt-16 pt-8 border-t border-[#F9B2D7]/40 text-center text-xs text-slate-500 space-y-2">
          <div className="text-slate-700 font-bold font-display">
            Aisya Tyanafisya &bull; Software Engineering
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-slate-500">
            <a
              href={`mailto:${contactInfo.email}`}
              className="hover:text-[#FF84BA] transition-colors"
            >
              {contactInfo.email}
            </a>
            <span>&bull;</span>
            <a
              href={`https://wa.me/${contactInfo.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF84BA] transition-colors"
            >
              WhatsApp: {contactInfo.whatsapp}
            </a>
            <span>&bull;</span>
            <a
              href={contactInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF84BA] transition-colors"
            >
              LinkedIn
            </a>
            <span>&bull;</span>
            <a
              href={contactInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF84BA] transition-colors"
            >
              GitHub
            </a>
          </div>
          <div className="text-[11px] text-slate-400">
            © 2026 Aisya Tyanafisya. All rights reserved.
          </div>
        </div>

      </div>
    </section>
  );
};
