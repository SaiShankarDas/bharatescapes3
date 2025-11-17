import React, { useState, useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bike, MapPin, Clock, BadgeCheck, ShieldAlert, HardHat, CloudSun, CircleDollarSign,
  Briefcase, UserCheck, Camera, HeartPulse, LoaderCircle, CheckCircle, AlertTriangle, FileText
} from 'lucide-react';
import DatePicker from 'react-datepicker';
import PhoneInput from 'react-phone-number-input';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-phone-number-input/style.css';

const terms = [
  { icon: Bike, text: 'Scooters are rental vehicles – All scooters used during the tour are taken on hire. Bharatescapes is NOT responsible for mechanical issues/failures caused due to the rental provider.' },
  { icon: MapPin, text: 'Pickup & Drop Location – Guests must report & return ONLY from the fixed meeting point: Sanskrit College Parking Area, Udaipur.' },
  { icon: Clock, text: 'Reporting Time – Guests must arrive 10–15 mins before the scheduled departure. Late arrivals may miss the tour. No refunds for late arrival.' },
  { icon: BadgeCheck, text: 'Valid Driving License Mandatory – Only participants with a valid 2-wheeler driver’s license can ride a scooter. No exceptions.' },
  { icon: ShieldAlert, text: 'Riding Responsibility – Each rider is fully responsible for their scooter handling during the entire trip. Any fines, damages or penalties during riding will be borne by the participant.' },
  { icon: HardHat, text: 'Safety Gear – Helmets must be worn at all times while riding the scooter. This is compulsory as per government safety rule.' },
  { icon: CloudSun, text: 'Weather Conditions – Sunrise/Sunset visibility depends on nature. No refund if visibility is affected due to clouds, fog, rain, etc.' },
  { icon: CircleDollarSign, text: 'Refund Policy – Bookings once confirmed are non-refundable. Rescheduling depends on availability.' },
  { icon: FileText, text: 'Participants are advised to have their own travel and health insurance. Bharatescapes will not provide insurance coverage for injuries, accidents, or any personal health problems.' },
  { icon: Briefcase, text: 'Personal Belongings – Bharatescapes is not responsible for loss/damage of mobile phones, wallets, camera accessories or any personal items.' },
  { icon: UserCheck, text: 'Behavior & Discipline – Kindly follow the tour leader’s instructions. Any misbehavior, reckless riding or unsafe actions may lead to removal from the tour.' },
  { icon: Camera, text: 'Photography / Videography – Photos & videos captured during the tour may be used for promotional purposes by Bharatescapes.' },
  { icon: HeartPulse, text: 'Fitness & Alcohol – Participants under alcohol influence or medically unfit for riding may be denied participation without refund.' },
];

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

const TourRegistrationPage: React.FC = () => {
  const [isTermsExpanded, setIsTermsExpanded] = useState(false);
  const [isTermsAgreed, setIsTermsAgreed] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  // Form state
  const [tourType, setTourType] = useState('');
  const [tourDate, setTourDate] = useState<Date | null>(null);
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState<string | undefined>();
  const [email, setEmail] = useState('');
  const [cityCountry, setCityCountry] = useState('');
  const [emergencyName, setEmergencyName] = useState('');
  const [emergencyNumber, setEmergencyNumber] = useState<string | undefined>();
  const [hasLicense, setHasLicense] = useState('');
  const [riderType, setRiderType] = useState('');
  const [licensePhoto, setLicensePhoto] = useState<File | null>(null);
  const [medicalInfo, setMedicalInfo] = useState('');
  const [allergies, setAllergies] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');

  const SCRIPT_URL = import.meta.env.VITE_TOUR_REGISTRATION_SCRIPT_URL;

  useEffect(() => {
    if (hasLicense === 'No') {
      setRiderType('Sitting behind');
    }
  }, [hasLicense]);

  const isRider = riderType === 'Riding a scooter';

  const resetForm = () => {
    setTourType(''); setTourDate(null); setFullName(''); setMobileNumber(undefined);
    setEmail(''); setCityCountry(''); setEmergencyName(''); setEmergencyNumber(undefined);
    setHasLicense(''); setRiderType(''); setLicensePhoto(null); setMedicalInfo('');
    setAllergies(''); setBloodGroup(''); setIsTermsAgreed(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isTermsAgreed) {
      setFeedbackMessage('You must agree to the terms and conditions to register.');
      setSubmissionStatus('error');
      return;
    }
    if (!SCRIPT_URL || SCRIPT_URL.includes("YOUR_TOUR_REGISTRATION_GOOGLE_APPS_SCRIPT_URL")) {
      setFeedbackMessage('The form is not configured. Please contact support.');
      setSubmissionStatus('error');
      return;
    }

    setSubmissionStatus('submitting');
    setFeedbackMessage('');

    const formData = new FormData();
    formData.append('timestamp', new Date().toISOString());
    formData.append('tourType', tourType);
    formData.append('tourDate', tourDate ? tourDate.toLocaleDateString('en-CA') : '');
    formData.append('fullName', fullName);
    formData.append('mobileNumber', mobileNumber || '');
    formData.append('email', email);
    formData.append('cityCountry', cityCountry);
    formData.append('emergencyName', emergencyName);
    formData.append('emergencyNumber', emergencyNumber || '');
    formData.append('hasLicense', hasLicense);
    formData.append('riderType', riderType);
    formData.append('medicalInfo', medicalInfo);
    formData.append('allergies', allergies);
    formData.append('bloodGroup', bloodGroup);
    if (licensePhoto) {
      formData.append('licensePhoto', licensePhoto);
    }

    try {
      await fetch(SCRIPT_URL, { method: 'POST', body: formData });
      setSubmissionStatus('success');
      setFeedbackMessage('🎉 Thank you for registering! Our team will get in touch soon with your tour details.');
      resetForm();
    } catch (error) {
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        setSubmissionStatus('success');
        setFeedbackMessage('🎉 Thank you for registering! Our team will get in touch soon with your tour details.');
        resetForm();
      } else {
        console.error('An unexpected error occurred:', error);
        setSubmissionStatus('error');
        setFeedbackMessage('Something went wrong. Please try again later.');
      }
    }
  };

  const formSectionClasses = "bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border border-black/10";
  const inputClasses = "mt-1 w-full p-3 bg-white/5 border border-black/10 rounded-md text-warm-text placeholder:text-warm-text/50 focus:outline-none focus:ring-2 focus:ring-warm-gold-light min-h-[48px]";
  const labelClasses = "text-sm font-bold text-warm-text/80";

  return (
    <PageTransition>
      <div className="bg-warm-bg text-warm-text pt-32 pb-20 font-poppins">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-warm-gold-dark">Tour Registration</h1>
            <p className="text-lg text-warm-text/70 max-w-2xl mx-auto mt-3">Please review the terms and complete the form to book your adventure.</p>
          </motion.div>

          {/* Terms & Conditions */}
          <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-md border border-black/5 mb-12">
            <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-6 text-center">Terms & Conditions – Bharatescapes Tours</h2>
            <div className="space-y-4">
              {terms.slice(0, 4).map((term, i) => (
                <div key={i} className="flex items-start gap-4">
                  <term.icon className="h-6 w-6 text-warm-gold-light flex-shrink-0 mt-1" />
                  <p className="text-warm-text/80">{term.text}</p>
                </div>
              ))}
            </div>
            <AnimatePresence>
              {isTermsExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0, marginTop: 0 }}
                  animate={{ height: 'auto', opacity: 1, marginTop: '1rem' }}
                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="space-y-4">
                    {terms.slice(4).map((term, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <term.icon className="h-6 w-6 text-warm-gold-light flex-shrink-0 mt-1" />
                        <p className="text-warm-text/80">{term.text}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="text-center mt-6">
              <button
                onClick={() => setIsTermsExpanded(!isTermsExpanded)}
                className="font-bold text-warm-gold-dark hover:text-warm-gold-light transition-colors"
              >
                {isTermsExpanded ? 'Read Less' : 'Read More...'}
              </button>
            </div>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
            <fieldset className={formSectionClasses}>
              <legend className="text-xl font-playfair font-bold mb-4 px-2">1. Basic Information</legend>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClasses}>Tour Type*</label>
                  <select required value={tourType} onChange={e => setTourType(e.target.value)} className={inputClasses}>
                    <option value="" disabled>Select a tour</option>
                    <option value="Sunrise Tour">Sunrise Tour</option>
                    <option value="Sunset Tour">Sunset Tour</option>
                  </select>
                </div>
                <div>
                  <label className={labelClasses}>Tour Date*</label>
                  <DatePicker required selected={tourDate} onChange={(date: Date) => setTourDate(date)} minDate={new Date()} placeholderText="Select a date" className={inputClasses} />
                </div>
                <div className="md:col-span-2">
                  <label className={labelClasses}>Full Name*</label>
                  <input type="text" required value={fullName} onChange={e => setFullName(e.target.value)} className={inputClasses} />
                </div>
                <div>
                  <label className={labelClasses}>Mobile Number*</label>
                  <PhoneInput required international defaultCountry="IN" value={mobileNumber} onChange={setMobileNumber} className={`phone-input-container mt-1 warm-theme`} />
                </div>
                <div>
                  <label className={labelClasses}>Email ID*</label>
                  <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className={inputClasses} />
                </div>
                <div className="md:col-span-2">
                  <label className={labelClasses}>City / Country</label>
                  <input type="text" value={cityCountry} onChange={e => setCityCountry(e.target.value)} className={inputClasses} />
                </div>
              </div>
            </fieldset>

            <fieldset className={formSectionClasses}>
              <legend className="text-xl font-playfair font-bold mb-4 px-2">2. Emergency Contact</legend>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClasses}>Contact Name*</label>
                  <input type="text" required value={emergencyName} onChange={e => setEmergencyName(e.target.value)} className={inputClasses} />
                </div>
                <div>
                  <label className={labelClasses}>Contact Number*</label>
                  <PhoneInput required international defaultCountry="IN" value={emergencyNumber} onChange={setEmergencyNumber} className={`phone-input-container mt-1 warm-theme`} />
                </div>
              </div>
            </fieldset>

            <fieldset className={formSectionClasses}>
              <legend className="text-xl font-playfair font-bold mb-4 px-2">3. Rider Information</legend>
              <div className="space-y-6">
                <div>
                  <label className={labelClasses}>Do you have a valid 2-wheeler driving licence?*</label>
                  <div className="flex flex-col md:flex-row gap-4 mt-2">
                    <label className="flex items-center gap-2 p-3 border border-black/10 rounded-md flex-1 cursor-pointer hover:bg-white/10">
                      <input type="radio" name="hasLicense" required value="Yes" checked={hasLicense === 'Yes'} onChange={e => setHasLicense(e.target.value)} className="accent-warm-gold-light" /> Yes
                    </label>
                    <label className="flex items-center gap-2 p-3 border border-black/10 rounded-md flex-1 cursor-pointer hover:bg-white/10">
                      <input type="radio" name="hasLicense" value="No" checked={hasLicense === 'No'} onChange={e => setHasLicense(e.target.value)} className="accent-warm-gold-light" /> No, I will only be a pillion rider
                    </label>
                  </div>
                </div>
                <div>
                  <label className={labelClasses}>Rider / Pillion*</label>
                   <div className="flex flex-col md:flex-row gap-4 mt-2">
                    <label className={`flex items-center gap-2 p-3 border border-black/10 rounded-md flex-1 transition-opacity ${hasLicense === 'No' ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:bg-white/10'}`}>
                      <input type="radio" name="riderType" required value="Riding a scooter" checked={riderType === 'Riding a scooter'} onChange={e => setRiderType(e.target.value)} className="accent-warm-gold-light" disabled={hasLicense === 'No'} /> Riding a scooter
                    </label>
                    <label className="flex items-center gap-2 p-3 border border-black/10 rounded-md flex-1 cursor-pointer hover:bg-white/10">
                      <input type="radio" name="riderType" value="Sitting behind" checked={riderType === 'Sitting behind'} onChange={e => setRiderType(e.target.value)} className="accent-warm-gold-light" /> Sitting behind (pillion)
                    </label>
                  </div>
                </div>
                <div>
                  <label className={labelClasses}>Upload Driving Licence Photo{isRider ? '*' : ' (Optional)'}</label>
                  <input type="file" accept="image/*" required={isRider} onChange={e => setLicensePhoto(e.target.files ? e.target.files[0] : null)} className={`${inputClasses} p-0 file:p-3 file:mr-4 file:border-0 file:bg-white/10 file:font-semibold file:text-warm-text/80 hover:file:bg-white/20`} />
                </div>
              </div>
            </fieldset>

            <fieldset className={formSectionClasses}>
              <legend className="text-xl font-playfair font-bold mb-4 px-2">4. Health & Other Information</legend>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className={labelClasses}>Any medical condition we should know about?</label>
                  <textarea value={medicalInfo} onChange={e => setMedicalInfo(e.target.value)} className={inputClasses} rows={3}></textarea>
                </div>
                <div>
                  <label className={labelClasses}>Any known allergies?</label>
                  <input type="text" value={allergies} onChange={e => setAllergies(e.target.value)} className={inputClasses} />
                </div>
                <div>
                  <label className={labelClasses}>Blood Group</label>
                  <input type="text" value={bloodGroup} onChange={e => setBloodGroup(e.target.value)} className={inputClasses} />
                </div>
              </div>
            </fieldset>

            {/* Agreement & Submission */}
            <div className="space-y-6">
              <label className="flex items-center gap-3 p-4 bg-white/5 border border-black/10 rounded-lg cursor-pointer hover:bg-white/10">
                <input type="checkbox" required checked={isTermsAgreed} onChange={e => setIsTermsAgreed(e.target.checked)} className="h-5 w-5 rounded accent-warm-gold-dark" />
                <span className="text-warm-text/90 font-semibold">I have read and agree to all Terms & Conditions of Bharatescapes Tours.</span>
              </label>

              <button type="submit" disabled={!isTermsAgreed || submissionStatus === 'submitting'} className="w-full bg-gradient-to-r from-warm-gold-light to-warm-gold-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 ease-in-out shadow-lg hover:shadow-warm-gold-light/40 hover:scale-[1.02] flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100">
                {submissionStatus === 'submitting' ? (
                  <><LoaderCircle className="animate-spin mr-2" /> Submitting...</>
                ) : 'Register for Tour'}
              </button>

              {feedbackMessage && (
                <div className={`mt-4 p-4 rounded-md text-sm font-semibold flex items-center justify-center ${submissionStatus === 'success' ? 'bg-green-500/20 text-green-700' : 'bg-red-500/20 text-red-700'}`}>
                  {submissionStatus === 'success' ? <CheckCircle className="mr-2" /> : <AlertTriangle className="mr-2" />}
                  {feedbackMessage}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </PageTransition>
  );
};

export default TourRegistrationPage;
