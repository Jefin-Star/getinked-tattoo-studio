import React, { useState } from 'react';
import { Upload, X, CheckCircle, Send, MessageCircle, Calendar, ShieldCheck, Sparkles } from 'lucide-react';
import { ARTISTS, STUDIO_CONFIG } from '../data/studioData';
import { BookingFormData } from '../types';

interface BookingFormProps {
  initialService?: string;
  initialArtist?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ initialService, initialArtist }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    tattooIdea: '',
    size: initialService ? (initialService.includes('500') ? 'Tiny (< 2") - Base Rate from ₹500' : 'Medium (4–6") - Customized Pricing') : 'Tiny (< 2") - Base Rate from ₹500',
    placement: 'Forearm',
    preferredArtist: initialArtist || 'Any Available Artist',
    serviceType: 'tattoo',
    preferredDate: '',
    preferredTime: '11:00 AM',
    referenceImage: null,
    referenceImageName: null,
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleImageUpload = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file (JPG, PNG, WEBP).');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      setFormData((prev) => ({
        ...prev,
        referenceImage: e.target?.result as string,
        referenceImageName: file.name,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files[0]);
    }
  };

  const removeImage = () => {
    setFormData((prev) => ({
      ...prev,
      referenceImage: null,
      referenceImageName: null,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  // Build WhatsApp pre-filled text
  const generateWhatsAppUrl = () => {
    const text = `Hello GETINKED TATTOO! I'd like to book a consultation:%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.fullName || 'Client')}%0A` +
      `*Phone:* ${encodeURIComponent(formData.phone || 'N/A')}%0A` +
      `*Email:* ${encodeURIComponent(formData.email || 'N/A')}%0A` +
      `*Idea:* ${encodeURIComponent(formData.tattooIdea || 'Custom Design')}%0A` +
      `*Size:* ${encodeURIComponent(formData.size)}%0A` +
      `*Placement:* ${encodeURIComponent(formData.placement)}%0A` +
      `*Preferred Artist:* ${encodeURIComponent(formData.preferredArtist)}%0A` +
      `*Preferred Date/Time:* ${encodeURIComponent(formData.preferredDate || 'Flexible')} at ${encodeURIComponent(formData.preferredTime)}%0A%0A` +
      `*Reference:* ${formData.referenceImageName ? `Attached (${formData.referenceImageName})` : 'Will send in chat'}`;

    return `https://wa.me/${STUDIO_CONFIG.whatsappRaw}?text=${text}`;
  };

  return (
    <section id="booking" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-amber-400 font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Consultation & Appointments</span>
          </div>
          <h2 className="font-['Cinzel'] text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight text-balance">
            Book a <span className="gold-gradient-text">Consultation</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed text-balance">
            Tell us about your tattoo vision, preferred placement, and reference imagery. Tattoos start from <span className="text-amber-400 font-medium">₹500</span>. Open daily 10 AM – 11 PM with 24/7 flexibility for pre-booked sessions.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-zinc-900/80 border border-zinc-800 p-6 sm:p-10 lg:p-12 shadow-2xl relative">
          
          {isSuccess ? (
            <div className="text-center py-12 space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold text-zinc-100">
                  Consultation Request Received!
                </h3>
                <p className="text-sm text-zinc-300 max-w-lg mx-auto">
                  Thank you, <span className="text-amber-400 font-semibold">{formData.fullName}</span>. Lead artist Vishnu Lal and the team at GETINKED TATTOO have received your details.
                </p>
              </div>

              {/* Consultation Summary */}
              <div className="max-w-md mx-auto p-5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-left text-xs space-y-2">
                <div className="flex justify-between py-1 border-b border-zinc-800">
                  <span className="text-zinc-400">Phone:</span>
                  <span className="text-zinc-200">{formData.phone}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-800">
                  <span className="text-zinc-400">Size & Placement:</span>
                  <span className="text-zinc-200">{formData.size} · {formData.placement}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-800">
                  <span className="text-zinc-400">Preferred Artist:</span>
                  <span className="text-zinc-200">{formData.preferredArtist}</span>
                </div>
                {formData.referenceImageName && (
                  <div className="flex justify-between py-1 border-b border-zinc-800">
                    <span className="text-zinc-400">Reference:</span>
                    <span className="text-amber-400 font-mono truncate max-w-[200px]">{formData.referenceImageName}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 text-xs font-bold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg flex items-center justify-center gap-2 uppercase tracking-wider shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-zinc-950" />
                  <span>Send Direct via WhatsApp</span>
                </a>
                
                <button
                  onClick={() => setIsSuccess(false)}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-medium text-zinc-300 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* Row 1: Contact Details */}
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-wider text-amber-400 font-semibold border-b border-zinc-800 pb-2">
                  1. Contact Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Full Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-700 text-zinc-100 text-sm placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Phone Number <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 63054 87457"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-700 text-zinc-100 text-sm placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Email Address <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. yourname@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-700 text-zinc-100 text-sm placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Tattoo Concept, Size & Placement */}
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-wider text-amber-400 font-semibold border-b border-zinc-800 pb-2">
                  2. Design Specifications
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Tattoo / Piercing Size <span className="text-amber-400">*</span>
                    </label>
                    <select
                      value={formData.size}
                      onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-700 text-zinc-100 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="Tiny (< 2&quot;) - Base Rate from ₹500">Tiny / Minimalist (&lt; 2&quot;) — Base Rate from ₹500</option>
                      <option value="Small (2–4&quot;) - Customized Pricing">Small (2–4&quot;) — Customized Pricing</option>
                      <option value="Medium (4–6&quot;) - Customized Pricing">Medium (4–6&quot;) — Customized Pricing</option>
                      <option value="Large (6–10&quot;) - Customized Pricing">Large (6–10&quot;) — Customized Pricing</option>
                      <option value="Half Sleeve / Chest - Customized Pricing">Half Sleeve / Chest Plate — Customized Pricing</option>
                      <option value="Full Sleeve / Backpiece - Customized Pricing">Full Sleeve / Backpiece — Customized Pricing</option>
                      <option value="Body Piercing - Customized Pricing">Body Piercing — Customized Pricing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Placement on Body <span className="text-amber-400">*</span>
                    </label>
                    <select
                      value={formData.placement}
                      onChange={(e) => setFormData({ ...formData, placement: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-700 text-zinc-100 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="Forearm">Forearm (Inner / Outer)</option>
                      <option value="Wrist / Hand">Wrist / Hand / Finger</option>
                      <option value="Bicep / Shoulder">Bicep / Shoulder / Upper Arm</option>
                      <option value="Collarbone / Chest">Collarbone / Chest</option>
                      <option value="Ribs / Side">Ribs / Torso</option>
                      <option value="Thigh / Calf / Ankle">Thigh / Calf / Ankle</option>
                      <option value="Upper / Full Back">Upper Back / Spine / Full Back</option>
                      <option value="Neck / Behind Ear">Neck / Behind Ear</option>
                      <option value="Piercing: Ear Lobe / Cartilage">Piercing: Ear Lobe / Cartilage / Helix</option>
                      <option value="Piercing: Nostril / Septum">Piercing: Nostril / Septum</option>
                      <option value="Other / Undecided">Other / Consult Artist</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    Tattoo Idea & Creative Vision <span className="text-amber-400">*</span>
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe your design concept, meaning, style preferences (e.g. black and grey realism, fine-line, geometry, sacred script, symbols)..."
                    value={formData.tattooIdea}
                    onChange={(e) => setFormData({ ...formData, tattooIdea: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-700 text-zinc-100 text-sm placeholder-zinc-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Row 3: Preferred Artist & Appointment Schedule */}
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-wider text-amber-400 font-semibold border-b border-zinc-800 pb-2">
                  3. Artist & Time Preference
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Preferred Artist
                    </label>
                    <select
                      value={formData.preferredArtist}
                      onChange={(e) => setFormData({ ...formData, preferredArtist: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-700 text-zinc-100 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="Any Available Artist">First Available Master Artist</option>
                      {ARTISTS.map((artist) => (
                        <option key={artist.id} value={artist.name}>
                          {artist.name} ({artist.role})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-700 text-zinc-100 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-950 border border-zinc-700 text-zinc-100 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="10:00 AM - 1:00 PM">Morning (10:00 AM – 1:00 PM)</option>
                      <option value="1:00 PM - 5:00 PM">Afternoon (1:00 PM – 5:00 PM)</option>
                      <option value="5:00 PM - 8:00 PM">Evening (5:00 PM – 8:00 PM)</option>
                      <option value="8:00 PM - 11:00 PM">Night Walk-In (8:00 PM – 11:00 PM)</option>
                      <option value="24/7 Custom VIP Slot">24/7 Pre-Booked Custom VIP Slot</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 4: Reference Image Upload (Required by User Prompt) */}
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-wider text-amber-400 font-semibold border-b border-zinc-800 pb-2">
                  4. Reference Image Upload
                </h3>

                {formData.referenceImage ? (
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-950 border border-zinc-700">
                    <img
                      src={formData.referenceImage}
                      alt="Uploaded reference preview"
                      className="w-20 h-20 object-cover rounded-lg border border-zinc-700"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-zinc-200 truncate">
                        {formData.referenceImageName}
                      </p>
                      <p className="text-[11px] text-emerald-400 mt-0.5">Reference attached successfully</p>
                    </div>
                    <button
                      type="button"
                      onClick={removeImage}
                      className="p-2 text-zinc-400 hover:text-rose-400 hover:bg-zinc-800 rounded-lg transition-colors cursor-pointer"
                      title="Remove image"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  <div
                    onDragOver={(e) => {
                      e.preventDefault();
                      setDragActive(true);
                    }}
                    onDragLeave={() => setDragActive(false)}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer ${
                      dragActive
                        ? 'border-amber-400 bg-amber-500/10'
                        : 'border-zinc-700 hover:border-amber-500/60 bg-zinc-950/60'
                    }`}
                    onClick={() => document.getElementById('reference-upload-input')?.click()}
                  >
                    <input
                      id="reference-upload-input"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          handleImageUpload(e.target.files[0]);
                        }
                      }}
                    />
                    <Upload className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                    <p className="text-xs sm:text-sm font-medium text-zinc-200">
                      Drop your tattoo reference image here or <span className="text-amber-400 underline underline-offset-2">browse files</span>
                    </p>
                    <p className="text-[11px] text-zinc-400 mt-1">
                      PNG, JPG, WEBP up to 15MB. You can also share directly on WhatsApp.
                    </p>
                  </div>
                )}
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-lg text-xs font-bold text-zinc-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/20 active:scale-95 transition-all uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-zinc-950" />
                  <span>{isSubmitting ? 'Submitting Details...' : 'Submit Consultation Request'}</span>
                </button>

                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto py-3.5 px-6 rounded-lg text-xs font-bold text-zinc-100 bg-emerald-600/90 hover:bg-emerald-500 border border-emerald-500/50 shadow-lg active:scale-95 transition-all uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>Book Fast via WhatsApp (63054 87457)</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-4 text-[11px] text-zinc-400 pt-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  No spam guarantee
                </span>
                <span>·</span>
                <span>Tattoos starting from ₹500</span>
                <span>·</span>
                <span>Daily 10 AM – 11 PM</span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
