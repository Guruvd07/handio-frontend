export type Language = 'en' | 'hi' | 'mr' | 'bn' | 'ta' | 'te' | 'kn';

export const translations = {
  en: {
    // Navbar
    navbar: {
      login: 'Login',
      register: 'Register',
      search: 'Search',
      myBookings: 'My Bookings',
      dashboard: 'Dashboard',
      createProfile: 'Create Profile',
      admin: 'Admin',
      logout: 'Logout',
    },
    
    // Landing Page
    landing: {
      services: 'Services',
      contact: 'Contact',
    },

    // Hero Section
    hero: {
      trustedBadge: 'Trusted by 50,000+ homeowners',
      titlePart1: 'Find Trusted Local ',
      titlePart2: 'Service Providers',
      subtitle: 'Connect with verified electricians, plumbers, cleaners and professionals. Book instantly. Quality guaranteed.',
      stat1Label: 'Verified Professionals',
      stat2Label: 'Average Rating',
      stat3Label: 'Money-Back Guarantee',
      btnGetStarted: 'Get Started Now',
      btnBecomeProvider: 'Become a Provider',
    },

    // How It Works
    howItWorks: {
      badge: '✦ Simple Process ✦',
      title: 'How Handio Works',
      subtitle: 'A simple 4-step process to get your home services done',
      step1Title: 'Search Service',
      step1Description: 'Find the service you need in just a few clicks',
      step1Detail: 'Browse 50+ categories',
      step2Title: 'Book Provider',
      step2Description: 'Choose from verified professionals',
      step2Detail: '100% verified pros',
      step3Title: 'Get Work Done',
      step3Description: 'Sit back while experts complete the job',
      step3Detail: '4.9 avg. rating',
      step4Title: 'Leave Review',
      step4Description: 'Share your experience and rate the service',
      step4Detail: '10K+ reviews monthly',
      progressStep1: 'Step 1',
      progressStep2: 'Step 2',
      progressStep3: 'Step 3',
      progressStep4: 'Step 4',
      footer: 'From booking to completion, we make it effortless',
    },

    // Features Section
    features: {
      title: 'Why Choose Handio',
      feature1: '✔ Verified Providers',
      feature2: '✔ Easy Booking',
      feature3: '✔ Trusted Reviews',
      feature4: '✔ Secure Platform',
    },

    // Login Page
    login: {
      title: 'Sign in to your account',
      subtitle: 'Welcome back! Please enter your details',
      email: 'Email',
      emailPlaceholder: 'Enter your email',
      password: 'Password',
      passwordPlaceholder: 'Enter your password',
      signIn: 'Sign in',
      signingIn: 'Signing in...',
      noAccount: 'Don\'t have an account?',
      createOne: 'Create one',
      rememberMe: 'Remember me',
      forgotPassword: 'Forgot password?',
      fillAllFields: 'Please fill in all fields',
      invalidCredentials: 'Invalid email or password',
      userNotFound: 'User not found',
      genericError: 'Login failed. Please try again.',
      welcomeBack: 'Welcome back to',
      brandDescription: 'Your trusted partner for professional home services. Login to book services, track appointments, and more.',
      feature1: '50K+ Happy Customers',
      feature2: '200+ Expert Professionals',
      feature3: '24/7 Customer Support',
      feature4: '100% Satisfaction Guaranteed',
      testimonial: 'Best home service platform I\'ve ever used. Quick, reliable, and professional!',
      testimonialAuthor: 'Rahul Sharma',
      testimonialTitle: 'Happy Customer',
      hidePassword: 'Hide password',
      showPassword: 'Show password',
      orContinueWith: 'or continue with',
      google: 'Google',
      github: 'GitHub'
    },

    // Register Page
    register: {
      title: 'Create an account',
      subtitle: 'Join us and get started in minutes',
      join: 'Join',
      today: 'Today',
      customerRole: 'Customer',
      providerRole: 'Provider',
      customerDesc: 'Book services',
      providerDesc: 'Offer services',
      fullName: 'Full Name',
      fullNamePlaceholder: 'Enter your full name',
      email: 'Email',
      emailPlaceholder: 'Enter your email',
      password: 'Password',
      passwordPlaceholder: 'Create a password',
      confirmPassword: 'Confirm Password',
      confirmPasswordPlaceholder: 'Confirm your password',
      create: 'Create Account',
      creating: 'Creating account...',
      haveAccount: 'Already have an account?',
      signIn: 'Sign in',
      
      // Validation messages
      fillAllFields: 'Please fill in all fields',
      passwordMismatch: 'Passwords do not match',
      agreeTerms: 'Please agree to the terms and conditions',
      weakPassword: 'Please choose a stronger password',
      invalidEmail: 'Please enter a valid email address',
      emailExists: 'Email already registered',
      genericError: 'Registration failed. Please try again.',
      
      // Password strength
      weak: 'Weak',
      fair: 'Fair',
      good: 'Good',
      strong: 'Strong',
      
      // Terms
      termsOfService: 'Terms of Service',
      privacyPolicy: 'Privacy Policy',
      and: 'and',
      
      // Hide/Show password
      hidePassword: 'Hide password',
      showPassword: 'Show password',
      
      // Brand section - Customer
      customerDescription: 'Get access to India\'s best home services professionals',
      customerFeature1: 'Book trusted professionals',
      customerFeature2: 'Secure payments',
      customerFeature3: '24/7 customer support',
      customerFeature4: 'Satisfaction guaranteed',
      
      // Brand section - Provider
      providerDescription: 'Grow your business with thousands of happy customers',
      providerFeature1: 'Reach more customers',
      providerFeature2: 'Flexible working hours',
      providerFeature3: 'Instant payments',
      providerFeature4: 'Verified leads',
      
      // Testimonial
      testimonial: 'Joining as a service provider was the best decision. My business has grown 3x in just 6 months!',
      testimonialAuthor: 'Rajesh Kumar',
      testimonialTitle: 'Plumber & Service Provider'
    },
    // Contact Section
    contact: {
      title: 'Contact Us',
      email: 'Email: support@handio.com',
      phone: 'Phone: +91 9876543210',
      location: 'Location: Pune, Maharashtra',
    },

    // Services Section
    services: {
      title: 'Our Services',
      subtitle: 'Book trusted professionals for everyday home services',
      bookNow: 'Book Now',
      electrician: 'Electrician',
      electricianDesc: 'Trusted electrical work',
      plumber: 'Plumber',
      plumberDesc: 'Professional plumbing',
      cleaning: 'Cleaning',
      cleaningDesc: 'Thorough cleaning services',
      acRepair: 'AC Repair',
      acRepairDesc: 'Expert cooling solutions',
      painting: 'Painting',
      paintingDesc: 'Quality paint work',
    },

    // Search Providers
    searchProviders: {
      title: 'Find Perfect Service Providers',
      subtitle: 'Discover trusted professionals in your area',
      selectCategory: 'Select Category',
      selectCity: 'Select City',
      selectArea: 'Select Area',
      search: 'Search',
      searching: 'Searching...',
      noResults: 'Start searching to find amazing service providers',
      findingProviders: 'Finding providers...',
      priceNotSpecified: 'Price not specified',
      viewProfile: 'View Profile',
    },

    // Provider Dashboard
    providerDashboard: {
      profilePhoto: 'Your Profile Photo',
      uploadPhoto: 'Upload Photo',
      uploadHint: 'Recommended: square image for best results',
      removePhoto: 'Remove Photo',
      workPortfolio: 'Your Work Portfolio',
      managePortfolio: 'Manage Portfolio',
      bookingRequests: 'Booking Requests',
      manageRequests: 'Manage your service requests',
      totalBookings: 'Total Bookings',
      pending: 'Pending',
      accepted: 'Accepted',
      rejected: 'Rejected',
      loadingBookings: 'Loading bookings...',
      noBookings: 'No bookings to show',
      noPendingBookings: 'No pending bookings',
      notes: 'Notes',
      noAdditionalNotes: 'No additional notes',
      accept: '✓ Accept',
      reject: '✕ Reject',
      markCompleted: '✔ Mark Completed',
    },

    // Customer Bookings
    customerBookings: {
      title: 'My Bookings',
      subtitle: 'Track your service bookings',
      totalBookings: 'Total Bookings',
      pending: 'Pending',
      confirmed: 'Confirmed',
      completed: 'Completed',
      noPending: 'No pending bookings',
      noCompleted: 'No completed bookings',
      provider: 'Provider',
      category: 'Category',
      bookingStatus: 'Booking Status',
      pendingStatus: 'Pending',
      confirmedStatus: 'Confirmed',
      rejectedStatus: 'Rejected',
      completedStatus: 'Completed',
      leaveReview: 'Leave Review ⭐',
      reviewed: '⭐ Reviewed',
    },

    // Provider Profile
    providerProfile: {
      priceNotSpecified: 'Price not specified',
      selectDate: 'Please select a date',
      bookingSuccess: 'Booking successful!',
      bookingFailed: 'Booking failed. Please try again.',
      notLoggedIn: 'Please log in to book',
      bookingDate: 'Booking Date',
      selectBookingDate: 'Select a date',
      additionalNotes: 'Additional Notes',
      enterNotes: 'Enter any special requests...',
      bookNow: 'Book Now',
      reviews: 'Customer Reviews',
      noReviews: 'No reviews yet',
      averageRating: 'Average Rating',
    },

    featuredProviders: {
      title: "Top Rated Professionals",
      viewProfile: "View Profile",
      viewAll: "View All Providers",
      new: "New"
    },

    // Footer
    footer: {
      copyright: '© 2026 Handio. All rights reserved.',
    },

    landing: {
      services: 'Services',
      contact: 'Contact',
      popularServices: 'Popular Services',
      popularServicesSubtitle: "Choose from our top-rated professional services"
    },

    stats: {
      customers: "Happy Customers",
      providers: "Verified Providers",
      cities: "Cities Covered",
      rating: "Average Rating"
    },

    cta: {
      title: "Become a Service Provider",
      subtitle: "Earn money by offering your skills to thousands of customers.",
      button: "Join as Provider"
    },
  },

  hi: {
    // Navbar
    navbar: {
      login: 'लॉगिन करें',
      register: 'पंजीकरण करें',
      search: 'खोज करें',
      myBookings: 'मेरी बुकिंग',
      dashboard: 'डैशबोर्ड',
      createProfile: 'प्रोफाइल बनाएं',
      admin: 'एडमिन',
      logout: 'लॉगआउट करें',
    },
    
    // Landing Page
    landing: {
      services: 'सेवाएं',
      contact: 'संपर्क करें',
    },

    // Hero Section
    hero: {
      trustedBadge: '50,000+ घर मालिकों द्वारा विश्वसनीय',
      titlePart1: 'विश्वसनीय स्थानीय ',
      titlePart2: 'सेवा प्रदाता खोजें',
      subtitle: 'सत्यापित इलेक्ट्रीशियन, प्लम्बर, सफाई कर्मी और पेशेवरों से जुड़ें। तुरंत बुक करें। गुणवत्ता की गारंटी।',
      stat1Label: 'सत्यापित पेशेवर',
      stat2Label: 'औसत रेटिंग',
      stat3Label: 'मनी-बैक गारंटी',
      btnGetStarted: 'अभी शुरू करें',
      btnBecomeProvider: 'प्रदाता बनें',
    },

    // How It Works
    howItWorks: {
      badge: '✦ सरल प्रक्रिया ✦',
      title: 'हैंडिओ कैसे काम करता है',
      subtitle: 'घर की सेवाएं पाने के लिए सरल 4-चरणीय प्रक्रिया',
      step1Title: 'सेवा खोजें',
      step1Description: 'कुछ ही क्लिक में आपकी आवश्यक सेवा खोजें',
      step1Detail: '50+ श्रेणियां ब्राउज करें',
      step2Title: 'प्रदाता बुक करें',
      step2Description: 'सत्यापित पेशेवरों में से चुनें',
      step2Detail: '100% सत्यापित पेशेवर',
      step3Title: 'काम पूरा करवाएं',
      step3Description: 'विशेषज्ञों को काम पूरा करने दें',
      step3Detail: '4.9 औसत रेटिंग',
      step4Title: 'समीक्षा दें',
      step4Description: 'अपना अनुभव साझा करें और सेवा को रेट करें',
      step4Detail: 'प्रति माह 10K+ समीक्षाएं',
      progressStep1: 'चरण 1',
      progressStep2: 'चरण 2',
      progressStep3: 'चरण 3',
      progressStep4: 'चरण 4',
      footer: 'बुकिंग से पूरा होने तक, हम इसे आसान बनाते हैं',
    },

    // Features Section
    features: {
      title: 'हैंडिओ क्यों चुनें',
      feature1: '✔ सत्यापित प्रदाता',
      feature2: '✔ आसान बुकिंग',
      feature3: '✔ विश्वसनीय समीक्षाएं',
      feature4: '✔ सुरक्षित मंच',
    },

 
      featuredProviders: {
        title: "शीर्ष रेटेड प्रोफेशनल्स",
        viewProfile: "प्रोफाइल देखें",
        viewAll: "सभी प्रोवाइडर देखें",
        new: "नया"
      },

    // Login Page
    login: {
      title: 'अपने खाते में साइन इन करें',
      subtitle: 'वापसी पर स्वागत है! कृपया अपना विवरण दर्ज करें',
      email: 'ईमेल',
      emailPlaceholder: 'अपना ईमेल दर्ज करें',
      password: 'पासवर्ड',
      passwordPlaceholder: 'अपना पासवर्ड दर्ज करें',
      signIn: 'साइन इन करें',
      signingIn: 'साइन इन हो रहा है...',
      noAccount: 'खाता नहीं है?',
      createOne: 'नया बनाएं',
      rememberMe: 'मुझे याद रखें',
      forgotPassword: 'पासवर्ड भूल गए?',
      fillAllFields: 'कृपया सभी फ़ील्ड भरें',
      invalidCredentials: 'गलत ईमेल या पासवर्ड',
      userNotFound: 'उपयोगकर्ता नहीं मिला',
      genericError: 'लॉगिन विफल। कृपया पुनः प्रयास करें।',
      welcomeBack: 'वापस स्वागत है',
      brandDescription: 'पेशेवर घरेलू सेवाओं के लिए आपका विश्वसनीय साथी। सेवाएं बुक करने, अपॉइंटमेंट ट्रैक करने और अधिक के लिए लॉगिन करें।',
      feature1: '50K+ खुश ग्राहक',
      feature2: '200+ विशेषज्ञ पेशेवर',
      feature3: '24/7 ग्राहक सहायता',
      feature4: '100% संतुष्टि गारंटी',
      testimonial: 'सबसे अच्छा होम सर्विस प्लेटफॉर्म जो मैंने कभी इस्तेमाल किया है। तेज, विश्वसनीय और पेशेवर!',
      testimonialAuthor: 'राहुल शर्मा',
      testimonialTitle: 'खुश ग्राहक',
      hidePassword: 'पासवर्ड छुपाएं',
      showPassword: 'पासवर्ड दिखाएं',
      orContinueWith: 'या इसके साथ जारी रखें',
      google: 'गूगल',
      github: 'गिटहब'
    },

    // Register Page
    register: {
      title: 'खाता बनाएं',
      subtitle: 'हमसे जुड़ें और मिनटों में शुरू करें',
      join: 'जुड़ें',
      today: 'आज',
      customerRole: 'ग्राहक',
      providerRole: 'प्रदाता',
      customerDesc: 'सेवाएं बुक करें',
      providerDesc: 'सेवाएं प्रदान करें',
      fullName: 'पूरा नाम',
      fullNamePlaceholder: 'अपना पूरा नाम दर्ज करें',
      email: 'ईमेल',
      emailPlaceholder: 'अपना ईमेल दर्ज करें',
      password: 'पासवर्ड',
      passwordPlaceholder: 'पासवर्ड बनाएं',
      confirmPassword: 'पासवर्ड की पुष्टि करें',
      confirmPasswordPlaceholder: 'अपने पासवर्ड की पुष्टि करें',
      create: 'खाता बनाएं',
      creating: 'खाता बनाया जा रहा है...',
      haveAccount: 'पहले से खाता है?',
      signIn: 'साइन इन करें',
      
      fillAllFields: 'कृपया सभी फ़ील्ड भरें',
      passwordMismatch: 'पासवर्ड मेल नहीं खाते',
      agreeTerms: 'कृपया नियम और शर्तों से सहमत हों',
      weakPassword: 'कृपया एक मजबूत पासवर्ड चुनें',
      invalidEmail: 'कृपया एक वैध ईमेल पता दर्ज करें',
      emailExists: 'ईमेल पहले से पंजीकृत है',
      genericError: 'पंजीकरण विफल। कृपया पुनः प्रयास करें।',
      
      weak: 'कमजोर',
      fair: 'मध्यम',
      good: 'अच्छा',
      strong: 'मजबूत',
      
      termsOfService: 'सेवा की शर्तें',
      privacyPolicy: 'गोपनीयता नीति',
      and: 'और',
      
      hidePassword: 'पासवर्ड छुपाएं',
      showPassword: 'पासवर्ड दिखाएं',
      
      customerDescription: 'भारत के सर्वश्रेष्ठ घरेलू सेवा पेशेवरों तक पहुंच प्राप्त करें',
      customerFeature1: 'विश्वसनीय पेशेवरों को बुक करें',
      customerFeature2: 'सुरक्षित भुगतान',
      customerFeature3: '24/7 ग्राहक सहायता',
      customerFeature4: 'संतुष्टि की गारंटी',
      
      providerDescription: 'हजारों खुश ग्राहकों के साथ अपना व्यवसाय बढ़ाएं',
      providerFeature1: 'अधिक ग्राहकों तक पहुंचें',
      providerFeature2: 'लचीले काम के घंटे',
      providerFeature3: 'तत्काल भुगतान',
      providerFeature4: 'सत्यापित लीड',
      
      testimonial: 'सेवा प्रदाता के रूप में शामिल होना सबसे अच्छा निर्णय था। मेरा व्यवसाय सिर्फ 6 महीनों में 3 गुना बढ़ गया है!',
      testimonialAuthor: 'राजेश कुमार',
      testimonialTitle: 'प्लंबर और सेवा प्रदाता'
    },
    // Contact Section
    contact: {
      title: 'हमसे संपर्क करें',
      email: 'ईमेल: support@handio.com',
      phone: 'फोन: +91 9876543210',
      location: 'स्थान: पुणे, महाराष्ट्र',
    },

    // Services Section
    services: {
      title: 'हमारी सेवाएं',
      subtitle: 'दैनिक घरेलू सेवाओं के लिए विश्वसनीय पेशेवरों को बुक करें',
      bookNow: 'अभी बुक करें',
      electrician: 'इलेक्ट्रीशियन',
      electricianDesc: 'विश्वसनीय विद्युत कार्य',
      plumber: 'प्लंबर',
      plumberDesc: 'पेशेवार प्लंबिंग',
      cleaning: 'सफाई',
      cleaningDesc: 'संपूर्ण सफाई सेवाएं',
      acRepair: 'AC मरम्मत',
      acRepairDesc: 'विशेषज्ञ शीतलन समाधान',
      painting: 'पेंटिंग',
      paintingDesc: 'गुणवत्ता पेंट कार्य',
    },

    // Search Providers
    searchProviders: {
      title: 'परफेक्ट सेवा प्रदाता खोजें',
      subtitle: 'अपने क्षेत्र में विश्वसनीय पेशेवरों की खोज करें',
      selectCategory: 'श्रेणी चुनें',
      selectCity: 'शहर चुनें',
      selectArea: 'क्षेत्र चुनें',
      search: 'खोजें',
      searching: 'खोज जारी है...',
      noResults: 'आश्चर्यजनक सेवा प्रदाताओं को खोजने के लिए खोज शुरू करें',
      findingProviders: 'प्रदाता खोज रहे हैं...',
      priceNotSpecified: 'कीमत निर्दिष्ट नहीं है',
      viewProfile: 'प्रोफाइल देखें',
    },

    // Provider Dashboard
    providerDashboard: {
      profilePhoto: 'आपकी प्रोफाइल फोटो',
      uploadPhoto: 'फोटो अपलोड करें',
      uploadHint: 'सिफारिश: सर्वोत्तम परिणामों के लिए वर्ग छवि',
      removePhoto: 'फोटो हटाएं',
      workPortfolio: 'आपका कार्य पोर्टफोलियो',
      managePortfolio: 'पोर्टफोलियो प्रबंधित करें',
      bookingRequests: 'बुकिंग अनुरोध',
      manageRequests: 'अपने सेवा अनुरोधों को प्रबंधित करें',
      totalBookings: 'कुल बुकिंग',
      pending: 'लंबित',
      accepted: 'स्वीकृत',
      rejected: 'अस्वीकृत',
      loadingBookings: 'बुकिंग लोड हो रही हैं...',
      noBookings: 'दिखाने के लिए कोई बुकिंग नहीं',
      noPendingBookings: 'कोई लंबित बुकिंग नहीं',
      notes: 'नोट्स',
      noAdditionalNotes: 'कोई अतिरिक्त नोट्स नहीं',
      accept: '✓ स्वीकार करें',
      reject: '✕ अस्वीकार करें',
      markCompleted: '✔ पूर्ण के रूप में चिह्नित करें',
    },

    // Customer Bookings
    customerBookings: {
      title: 'मेरी बुकिंग',
      subtitle: 'अपनी सेवा बुकिंग ट्रैक करें',
      totalBookings: 'कुल बुकिंग',
      pending: 'लंबित',
      confirmed: 'पुष्टि किया गया',
      completed: 'पूर्ण',
      noPending: 'कोई लंबित बुकिंग नहीं',
      noCompleted: 'कोई पूर्ण बुकिंग नहीं',
      provider: 'प्रदाता',
      category: 'श्रेणी',
      bookingStatus: 'बुकिंग स्थिति',
      pendingStatus: 'लंबित',
      confirmedStatus: 'पुष्टि किया गया',
      rejectedStatus: 'अस्वीकृत',
      completedStatus: 'पूर्ण',
      leaveReview: 'समीक्षा छोड़ें ⭐',
      reviewed: '⭐ समीक्षा की गई',
    },

    // Provider Profile
    providerProfile: {
      priceNotSpecified: 'कीमत निर्दिष्ट नहीं है',
      selectDate: 'कृपया एक तारीख चुनें',
      bookingSuccess: 'बुकिंग सफल!',
      bookingFailed: 'बुकिंग विफल। कृपया फिर से प्रयास करें।',
      notLoggedIn: 'बुक करने के लिए कृपया लॉगिन करें',
      bookingDate: 'बुकिंग की तारीख',
      selectBookingDate: 'एक तारीख चुनें',
      additionalNotes: 'अतिरिक्त नोट्स',
      enterNotes: 'कोई विशेष अनुरोध दर्ज करें...',
      bookNow: 'अभी बुक करें',
      reviews: 'ग्राहक समीक्षाएं',
      noReviews: 'अभी तक कोई समीक्षा नहीं',
      averageRating: 'औसत रेटिंग',
    },

    // Contact Section
    contact: {
      title: 'हमसे संपर्क करें',
      email: 'ईमेल: support@handio.com',
      phone: 'फोन: +91 9876543210',
      location: 'स्थान: पुणे, महाराष्ट्र',
    },

    // Services Section
    services: {
      title: 'हमारी सेवाएं',
      subtitle: 'दैनिक घरेलू सेवाओं के लिए विश्वसनीय पेशेवरों को बुक करें',
      bookNow: 'अभी बुक करें',
      electrician: 'इलेक्ट्रीशियन',
      electricianDesc: 'विश्वसनीय विद्युत कार्य',
      plumber: 'प्लंबर',
      plumberDesc: 'पेशेवार प्लंबिंग',
      cleaning: 'सफाई',
      cleaningDesc: 'संपूर्ण सफाई सेवाएं',
      acRepair: 'AC मरम्मत',
      acRepairDesc: 'विशेषज्ञ शीतलन समाधान',
      painting: 'पेंटिंग',
      paintingDesc: 'गुणवत्ता पेंट कार्य',
    },

    // Search Providers
    searchProviders: {
      title: 'परफेक्ट सेवा प्रदाता खोजें',
      subtitle: 'अपने क्षेत्र में विश्वसनीय पेशेवरों की खोज करें',
      selectCategory: 'श्रेणी चुनें',
      selectCity: 'शहर चुनें',
      selectArea: 'क्षेत्र चुनें',
      search: 'खोजें',
      searching: 'खोज जारी है...',
      noResults: 'आश्चर्यजनक सेवा प्रदाताओं को खोजने के लिए खोज शुरू करें',
      findingProviders: 'प्रदाता खोज रहे हैं...',
      priceNotSpecified: 'कीमत निर्दिष्ट नहीं है',
      viewProfile: 'प्रोफाइल देखें',
    },

    // Provider Dashboard
    providerDashboard: {
      profilePhoto: 'आपकी प्रोफाइल फोटो',
      uploadPhoto: 'फोटो अपलोड करें',
      uploadHint: 'सिफारिश: सर्वोत्तम परिणामों के लिए वर्ग छवि',
      removePhoto: 'फोटो हटाएं',
      workPortfolio: 'आपका कार्य पोर्टफोलियो',
      managePortfolio: 'पोर्टफोलियो प्रबंधित करें',
      bookingRequests: 'बुकिंग अनुरोध',
      manageRequests: 'अपने सेवा अनुरोधों को प्रबंधित करें',
      totalBookings: 'कुल बुकिंग',
      pending: 'लंबित',
      accepted: 'स्वीकृत',
      rejected: 'अस्वीकृत',
      loadingBookings: 'बुकिंग लोड हो रही हैं...',
      noBookings: 'दिखाने के लिए कोई बुकिंग नहीं',
      noPendingBookings: 'कोई लंबित बुकिंग नहीं',
      notes: 'नोट्स',
      noAdditionalNotes: 'कोई अतिरिक्त नोट्स नहीं',
      accept: '✓ स्वीकार करें',
      reject: '✕ अस्वीकार करें',
      markCompleted: '✔ पूर्ण के रूप में चिह्नित करें',
    },

    // Customer Bookings
    customerBookings: {
      title: 'मेरी बुकिंग',
      subtitle: 'अपनी सेवा बुकिंग ट्रैक करें',
      totalBookings: 'कुल बुकिंग',
      pending: 'लंबित',
      confirmed: 'पुष्टि किया गया',
      completed: 'पूर्ण',
      noPending: 'कोई लंबित बुकिंग नहीं',
      noCompleted: 'कोई पूर्ण बुकिंग नहीं',
      provider: 'प्रदाता',
      category: 'श्रेणी',
      bookingStatus: 'बुकिंग स्थिति',
      pendingStatus: 'लंबित',
      confirmedStatus: 'पुष्टि किया गया',
      rejectedStatus: 'अस्वीकृत',
      completedStatus: 'पूर्ण',
      leaveReview: 'समीक्षा छोड़ें ⭐',
      reviewed: '⭐ समीक्षा की गई',
    },

    // Provider Profile
    providerProfile: {
      priceNotSpecified: 'कीमत निर्दिष्ट नहीं है',
      selectDate: 'कृपया एक तारीख चुनें',
      bookingSuccess: 'बुकिंग सफल!',
      bookingFailed: 'बुकिंग विफल। कृपया फिर से प्रयास करें।',
      notLoggedIn: 'बुक करने के लिए कृपया लॉगिन करें',
      bookingDate: 'बुकिंग की तारीख',
      selectBookingDate: 'एक तारीख चुनें',
      additionalNotes: 'अतिरिक्त नोट्स',
      enterNotes: 'कोई विशेष अनुरोध दर्ज करें...',
      bookNow: 'अभी बुक करें',
      reviews: 'ग्राहक समीक्षाएं',
      noReviews: 'अभी तक कोई समीक्षा नहीं',
      averageRating: 'औसत रेटिंग',
      loading: 'प्रदाता लोड हो रहा है...',
      redirecting: 'आपकी बुकिंग पर रीडायरेक्ट हो रहे हैं...',
    },

    // Footer
    footer: {
      copyright: '© 2026 हैंडिओ। सर्वाधिकार सुरक्षित।',
    },

    landing: {
      services: 'सेवाएं',
      contact: 'संपर्क करें',
      popularServices: 'लोकप्रिय सेवाएं',
      popularServicesSubtitle: "हमारी शीर्ष रेटेड पेशेवर सेवाओं में से चुनें"
    },

    stats: {
      customers: "खुश ग्राहक",
      providers: "सत्यापित प्रदाता",
      cities: "सेवा शहर",
      rating: "औसत रेटिंग"
    },
    cta: {
      title: "सेवा प्रदाता बनें",
      subtitle: "अपने कौशल से हजारों ग्राहकों की सेवा करके कमाएं।",
      button: "प्रदाता के रूप में जुड़ें"
    },
  },

  mr: {
    // Navbar
    navbar: {
      login: 'लॉगिन करा',
      register: 'नोंदणी करा',
      search: 'शोध करा',
      myBookings: 'माझ्या बुकिंग',
      dashboard: 'डॅशबोर्ड',
      createProfile: 'प्रोफाइल तयार करा',
      admin: 'प्रशासक',
      logout: 'बाहेर पडा',
    },
    
    // Landing Page
    landing: {
      services: 'सेवा',
      contact: 'संपर्क',
    },

    // Hero Section
    hero: {
      trustedBadge: '50,000+ गृहस्वामींनी विश्वास ठेवलेले',
      titlePart1: 'विश्वासार्ह स्थानिक ',
      titlePart2: 'सेवा प्रदाता शोधा',
      subtitle: 'सत्यापित इलेक्ट्रिशियन, प्लंबर, क्लीनर आणि व्यावसायिकांशी जुडा। तत्काळ बुक करा। गुणवत्ता हमी।',
      stat1Label: 'सत्यापित व्यावसायिक',
      stat2Label: 'सरासरी रेटिंग',
      stat3Label: 'मनी-बॅक गॅरंटी',
      btnGetStarted: 'आज सुरुवात करा',
      btnBecomeProvider: 'प्रदाता व्हा',
    },

    // How It Works
    howItWorks: {
      badge: '✦ सोपी प्रक्रिया ✦',
      title: 'हँडिओ कसे काम करते',
      subtitle: 'घर सेवा मिळविण्याची साधी 4 पायरीची प्रक्रिया',
      step1Title: 'सेवा शोधा',
      step1Description: 'काही क्लिकमध्ये तुमच्या आवश्यक सेवा शोधा',
      step1Detail: '50+ श्रेणी ब्राउज करा',
      step2Title: 'प्रदाता बुक करा',
      step2Description: 'सत्यापित व्यावसायिकांमधून निवडा',
      step2Detail: '100% सत्यापित व्यावसायिक',
      step3Title: 'काम पूर्ण करा',
      step3Description: 'तज्ञांना काम पूर्ण करू दा',
      step3Detail: '4.9 सरासरी रेटिंग',
      step4Title: 'पुनरावलोकन द्या',
      step4Description: 'तुमचा अनुभव शेअर करा आणि सेवा रेट करा',
      step4Detail: 'मासिक 10K+ पुनरावलोकन',
      progressStep1: 'पायरी 1',
      progressStep2: 'पायरी 2',
      progressStep3: 'पायरी 3',
      progressStep4: 'पायरी 4',
      footer: 'बुकिंगपासून पूर्णतेपर्यंत, आम्ही ते सोपे बनवतो',
    },

    // Features Section
    features: {
      title: 'हँडिओ का निवडा',
      feature1: '✔ सत्यापित प्रदाता',
      feature2: '✔ सोपी बुकिंग',
      feature3: '✔ विश्वासार्ह पुनरावलोकन',
      feature4: '✔ सुरक्षित प्लॅटफॉर्म',
    },

      featuredProviders: {
        title: "उत्तम रेटिंग असलेले सेवा प्रदाते",
        viewProfile: "प्रोफाइल पहा",
        viewAll: "सर्व सेवा प्रदाते पहा",
        new: "नवीन"
      },


    // Login Page
    login: {
      title: 'तुमच्या खात्यात साइन इन करा',
      subtitle: 'पुन्हा स्वागत आहे! कृपया तुमचे तपशील प्रविष्ट करा',
      email: 'ईमेल',
      emailPlaceholder: 'तुमचा ईमेल प्रविष्ट करा',
      password: 'पासवर्ड',
      passwordPlaceholder: 'तुमचा पासवर्ड प्रविष्ट करा',
      signIn: 'साइन इन करा',
      signingIn: 'साइन इन होत आहे...',
      noAccount: 'खाते नाही?',
      createOne: 'नवीन तयार करा',
      rememberMe: 'मला लक्षात ठेवा',
      forgotPassword: 'पासवर्ड विसरलात?',
      fillAllFields: 'कृपया सर्व फील्ड भरा',
      invalidCredentials: 'चुकीचा ईमेल किंवा पासवर्ड',
      userNotFound: 'वापरकर्ता सापडला नाही',
      genericError: 'लॉगिन अयशस्वी. कृपया पुन्हा प्रयत्न करा.',
      welcomeBack: 'पुन्हा स्वागत आहे',
      brandDescription: 'व्यावसायिक घरगुती सेवांसाठी आपला विश्वासू भागीदार. सेवा बुक करण्यासाठी, अपॉइंटमेंट ट्रॅक करण्यासाठी आणि अधिकसाठी लॉगिन करा.',
      feature1: '50K+ आनंदी ग्राहक',
      feature2: '200+ तज्ञ व्यावसायिक',
      feature3: '24/7 ग्राहक समर्थन',
      feature4: '100% समाधान हमी',
      testimonial: 'मी कधीही वापरलेले सर्वोत्तम होम सर्व्हिस प्लॅटफॉर्म. जलद, विश्वासार्ह आणि व्यावसायिक!',
      testimonialAuthor: 'राहुल शर्मा',
      testimonialTitle: 'खुश ग्राहक',
      hidePassword: 'पासवर्ड लपवा',
      showPassword: 'पासवर्ड दाखवा',
      orContinueWith: 'किंवा यासह सुरू ठेवा',
      google: 'गूगल',
      github: 'गिटहब'
    },

    // Register Page
    register: {
      title: 'खाते तयार करा',
      subtitle: 'आमच्यात सामील व्हा आणि मिनिटांत सुरुवात करा',
      join: 'सामील व्हा',
      today: 'आज',
      customerRole: 'ग्राहक',
      providerRole: 'प्रदाता',
      customerDesc: 'सेवा बुक करा',
      providerDesc: 'सेवा प्रदान करा',
      fullName: 'पूर्ण नाव',
      fullNamePlaceholder: 'आपले पूर्ण नाव प्रविष्ट करा',
      email: 'ईमेल',
      emailPlaceholder: 'आपला ईमेल प्रविष्ट करा',
      password: 'पासवर्ड',
      passwordPlaceholder: 'पासवर्ड तयार करा',
      confirmPassword: 'पासवर्डची पुष्टी करा',
      confirmPasswordPlaceholder: 'आपल्या पासवर्डची पुष्टी करा',
      create: 'खाते तयार करा',
      creating: 'खाते तयार होत आहे...',
      haveAccount: 'आधीपासून खाते आहे?',
      signIn: 'साइन इन करा',
      
      fillAllFields: 'कृपया सर्व फील्ड भरा',
      passwordMismatch: 'पासवर्ड जुळत नाहीत',
      agreeTerms: 'कृपया नियम आणि अटींशी सहमत व्हा',
      weakPassword: 'कृपया एक मजबूत पासवर्ड निवडा',
      invalidEmail: 'कृपया वैध ईमेल पत्ता प्रविष्ट करा',
      emailExists: 'ईमेल आधीपासून नोंदणीकृत आहे',
      genericError: 'नोंदणी अयशस्वी. कृपया पुन्हा प्रयत्न करा.',
      
      weak: 'कमकुवत',
      fair: 'मध्यम',
      good: 'चांगले',
      strong: 'मजबूत',
      
      termsOfService: 'सेवेच्या अटी',
      privacyPolicy: 'गोपनीयता धोरण',
      and: 'आणि',
      
      hidePassword: 'पासवर्ड लपवा',
      showPassword: 'पासवर्ड दाखवा',
      
      customerDescription: 'भारतातील सर्वोत्तम घरगुती सेवा व्यावसायिकांमध्ये प्रवेश मिळवा',
      customerFeature1: 'विश्वासू व्यावसायिकांना बुक करा',
      customerFeature2: 'सुरक्षित पेमेंट',
      customerFeature3: '24/7 ग्राहक समर्थन',
      customerFeature4: 'समाधान हमी',
      
      providerDescription: 'हजारो आनंदी ग्राहकांसह आपला व्यवसाय वाढवा',
      providerFeature1: 'अधिक ग्राहकांपर्यंत पोहोचा',
      providerFeature2: 'लवचिक कामाचे तास',
      providerFeature3: 'त्वरित पेमेंट',
      providerFeature4: 'सत्यापित लीड',
      
      testimonial: 'सेवा प्रदाता म्हणून सामील होणे हा सर्वोत्तम निर्णय होता. माझा व्यवसाय फक्त 6 महिन्यांत 3 पट वाढला आहे!',
      testimonialAuthor: 'राजेश कुमार',
      testimonialTitle: 'प्लंबर आणि सेवा प्रदाता'
    },
    // Contact Section
    contact: {
      title: 'आमच्याशी संपर्क साधा',
      email: 'ईमेल: support@handio.com',
      phone: 'फोन: +91 9876543210',
      location: 'स्थान: पुणे, महाराष्ट्र',
    },

    // Services Section
    services: {
      title: 'आमच्या सेवा',
      subtitle: 'दैनंदिन घरगुती सेवांसाठी विश्वास्त व्यावसायिकांना बुक करा',
      bookNow: 'आज बुक करा',
      electrician: 'विद्युत तांत्रिक',
      electricianDesc: 'विश्वास्त विद्युत कार्य',
      plumber: 'प्लंबर',
      plumberDesc: 'व्यावसायिक प्लंबिंग',
      cleaning: 'स्वच्छता',
      cleaningDesc: 'संपूर्ण साफसफाई सेवा',
      acRepair: 'AC दुरुस्ती',
      acRepairDesc: 'तज्ञ कूलिंग सोल्यूशन',
      painting: 'रंगकाम',
      paintingDesc: 'गुणवत्तेचे रंग कार्य',
    },

    // Search Providers
    searchProviders: {
      title: 'परफेक्ट सेवा प्रदाता शोधा',
      subtitle: 'तुमच्या क्षेत्रातील विश्वास्त व्यावसायिकांचा शोध घ्या',
      selectCategory: 'श्रेणी निवडा',
      selectCity: 'शहर निवडा',
      selectArea: 'क्षेत्र निवडा',
      search: 'शोध',
      searching: 'शोध चालू आहे...',
      noResults: 'आश्चर्यजनक सेवा प्रदातांना शोधण्यासाठी शोध सुरू करा',
      findingProviders: 'प्रदाता शोधत आहे...',
      priceNotSpecified: 'किंमत निर्दिष्ट नाही',
      viewProfile: 'प्रोफाइल पहा',
    },

    // Provider Dashboard
    providerDashboard: {
      profilePhoto: 'तुमचे प्रोफाइल फोटो',
      uploadPhoto: 'फोटो अपलोड करा',
      uploadHint: 'सुझाव: सर्वोत्तम परिणामांसाठी चौरस प्रतिमा',
      removePhoto: 'फोटो हटवा',
      workPortfolio: 'तुमचे कार्य पोर्टफोलियो',
      managePortfolio: 'पोर्टफोलियो व्यवस्थापित करा',
      bookingRequests: 'बुकिंग विनंत्या',
      manageRequests: 'तुमच्या सेवा विनंत्या व्यवस्थापित करा',
      totalBookings: 'एकूण बुकिंग',
      pending: 'प्रलंबित',
      accepted: 'स्वीकृत',
      rejected: 'नाकारले',
      loadingBookings: 'बुकिंग लोड होत आहे...',
      noBookings: 'दाखवण्याकरिता कोणती बुकिंग नाही',
      noPendingBookings: 'कोणती प्रलंबित बुकिंग नाही',
      notes: 'नोट्स',
      noAdditionalNotes: 'कोणती अतिरिक्त नोट्स नाही',
      accept: '✓ स्वीकारा',
      reject: '✕ नाकारा',
      markCompleted: '✔ पूर्ण म्हणून चिन्हांकित करा',
    },

    // Customer Bookings
    customerBookings: {
      title: 'माझ्या बुकिंग',
      subtitle: 'तुमच्या सेवा बुकिंग ट्रॅक करा',
      totalBookings: 'एकूण बुकिंग',
      pending: 'प्रलंबित',
      confirmed: 'पुष्टि केले',
      completed: 'पूर्ण',
      noPending: 'कोणती प्रलंबित बुकिंग नाही',
      noCompleted: 'कोणती पूर्ण बुकिंग नाही',
      provider: 'प्रदाता',
      category: 'श्रेणी',
      bookingStatus: 'बुकिंग स्थिती',
      pendingStatus: 'प्रलंबित',
      confirmedStatus: 'पुष्टि केले',
      rejectedStatus: 'नाकारले',
      completedStatus: 'पूर्ण',
      leaveReview: 'पुनरावलोकन द्या ⭐',
      reviewed: '⭐ पुनरावलोकन केले',
    },

    // Provider Profile
    providerProfile: {
      priceNotSpecified: 'किंमत निर्दिष्ट नाही',
      selectDate: 'कृपया एक तारीख निवडा',
      bookingSuccess: 'बुकिंग यशस्वी!',
      bookingFailed: 'बुकिंग अयोग्य. कृपया पुन्हा प्रयत्न करा.',
      notLoggedIn: 'बुक करण्यासाठी कृपया लॉगिन करा',
      bookingDate: 'बुकिंग तारीख',
      selectBookingDate: 'एक तारीख निवडा',
      additionalNotes: 'अतिरिक्त नोट्स',
      enterNotes: 'कोणतीही विशेष विनंती प्रविष्ट करा...',
      bookNow: 'आज बुक करा',
      reviews: 'ग्राहक पुनरावलोकन',
      noReviews: 'अजून कोणचेही पुनरावलोकन नाही',
      averageRating: 'सरासरी रेटिंग',
      loading: 'प्रदाता लोड होत आहे...',
      redirecting: 'तुमच्या बुकिंगला रीडायरेक्ट करत आहे...',
    },

    // Footer
    footer: {
      copyright: '© 2026 हँडिओ. सर्व अधिकार सुरक्षित.',
    },

    landing: {
      services: 'सेवा',
      contact: 'संपर्क',
      popularServices: 'लोकप्रिय सेवा',
      popularServicesSubtitle: "आमच्या सर्वोत्तम रेटिंग असलेल्या व्यावसायिक सेवांमधून निवडा"
    },

    stats: {
      customers: "आनंदी ग्राहक",
      providers: "सत्यापित प्रदाते",
      cities: "सेवा शहरे",
      rating: "सरासरी रेटिंग"
    },
    cta: {
      title: "सेवा प्रदाता बना",
      subtitle: "तुमच्या कौशल्याने हजारो ग्राहकांना सेवा देऊन कमवा.",
      button: "प्रदाता म्हणून सामील व्हा"
    },
  
  },

  bn: {
    // Navbar
    navbar: {
      login: 'লগইন করুন',
      register: 'নিবন্ধন করুন',
      search: 'অনুসন্ধান করুন',
      myBookings: 'আমার বুকিং',
      dashboard: 'ড্যাশবোর্ড',
      createProfile: 'প্রোফাইল তৈরি করুন',
      admin: 'প্রশাসক',
      logout: 'লগ আউট করুন',
    },
    
    // Landing Page
    landing: {
      services: 'সেবা',
      contact: 'যোগাযোগ করুন',
    },

    // Hero Section
    hero: {
      trustedBadge: '50,000+ গৃহস্বামী দ্বারা বিশ্বস্ত',
      titlePart1: 'বিশ্বস্ত স্থানীয় ',
      titlePart2: 'সেবা প্রদানকারী খুঁজুন',
      subtitle: 'যাচাইকৃত বৈদ্যুতিকবিদ, নদী কাজের মানুষ, পরিষ্কারক এবং পেশাদারদের সাথে সংযোগ করুন। তাৎক্ষণিকভাবে বুক করুন। গুণমানের নিশ্চয়তা।',
      stat1Label: 'যাচাইকৃত পেশাদার',
      stat2Label: 'গড় রেটিং',
      stat3Label: 'অর্থ ফেরত গ্যারান্টি',
      btnGetStarted: 'এখনই শুরু করুন',
      btnBecomeProvider: 'প্রদানকারী হন',
    },

    // How It Works
    howItWorks: {
      badge: '✦ সহজ প্রক্রিয়া ✦',
      title: 'হ্যান্ডিও কীভাবে কাজ করে',
      subtitle: 'ঘর সেবা পেতে সহজ 4-ধাপের প্রক্রিয়া',
      step1Title: 'সেবা খুঁজুন',
      step1Description: 'কয়েকটি ক্লিকেই আপনার প্রয়োজনীয় সেবা খুঁজুন',
      step1Detail: '50+ ক্যাটেগরি ব্রাউজ করুন',
      step2Title: 'প্রদানকারী বুক করুন',
      step2Description: 'যাচাইকৃত পেশাদারদের থেকে নির্বাচন করুন',
      step2Detail: '100% যাচাইকৃত পেশাদার',
      step3Title: 'কাজ সম্পন্ন করুন',
      step3Description: 'বিশেষজ্ঞদের কাজ সম্পন্ন করতে দিন',
      step3Detail: '4.9 গড় রেটিং',
      step4Title: 'পর্যালোচনা দিন',
      step4Description: 'আপনার অভিজ্ঞতা শেয়ার করুন এবং সেবা রেট করুন',
      step4Detail: 'মাসিক 10K+ পর্যালোচনা',
      progressStep1: 'ধাপ 1',
      progressStep2: 'ধাপ 2',
      progressStep3: 'ধাপ 3',
      progressStep4: 'ধাপ 4',
      footer: 'বুকিং থেকে সমাপ্তি পর্যন্ত, আমরা এটি সহজ করে তুলি',
    },

    // Features Section
    features: {
      title: 'কেন হ্যান্ডিও বেছে নিন',
      feature1: '✔ যাচাইকৃত প্রদানকারী',
      feature2: '✔ সহজ বুকিং',
      feature3: '✔ বিশ্বস্ত পর্যালোচনা',
      feature4: '✔ নিরাপদ প্ল্যাটফর্ম',
    },

   
    featuredProviders: {
      title: "শীর্ষ রেটেড পেশাদাররা",
      viewProfile: "প্রোফাইল দেখুন",
      viewAll: "সব প্রদানকারী দেখুন",
      new: "নতুন"
    },

    // Login Page
    login: {
      title: 'আপনার অ্যাকাউন্টে সাইন ইন করুন',
      subtitle: 'ফিরে আসার জন্য স্বাগতম! আপনার বিবরণ লিখুন',
      email: 'ইমেইল',
      emailPlaceholder: 'আপনার ইমেইল লিখুন',
      password: 'পাসওয়ার্ড',
      passwordPlaceholder: 'আপনার পাসওয়ার্ড লিখুন',
      signIn: 'সাইন ইন করুন',
      signingIn: 'সাইন ইন হচ্ছে...',
      noAccount: 'অ্যাকাউন্ট নেই?',
      createOne: 'একটি তৈরি করুন',
      rememberMe: 'আমাকে মনে রাখুন',
      forgotPassword: 'পাসওয়ার্ড ভুলে গেছেন?',
      fillAllFields: 'অনুগ্রহ করে সমস্ত ক্ষেত্র পূরণ করুন',
      invalidCredentials: 'ভুল ইমেইল বা পাসওয়ার্ড',
      userNotFound: 'ব্যবহারকারী পাওয়া যায়নি',
      genericError: 'লগইন ব্যর্থ হয়েছে। আবার চেষ্টা করুন।',
      welcomeBack: 'ফিরে আসার জন্য স্বাগতম',
      brandDescription: 'পেশাদার বাড়ির পরিষেবাগুলির জন্য আপনার বিশ্বস্ত অংশীদার। পরিষেবা বুক করতে, অ্যাপয়েন্টমেন্ট ট্র্যাক করতে এবং আরও অনেক কিছুর জন্য লগইন করুন।',
      feature1: '50K+ সন্তুষ্ট গ্রাহক',
      feature2: '200+ বিশেষজ্ঞ পেশাদার',
      feature3: '24/7 গ্রাহক সহায়তা',
      feature4: '100% সন্তুষ্টি গ্যারান্টি',
      testimonial: 'সেরা হোম সার্ভিস প্ল্যাটফর্ম যা আমি কখনও ব্যবহার করেছি। দ্রুত, নির্ভরযোগ্য এবং পেশাদার!',
      testimonialAuthor: 'রাহুল শর্মা',
      testimonialTitle: 'সন্তুষ্ট গ্রাহক',
      hidePassword: 'পাসওয়ার্ড লুকান',
      showPassword: 'পাসওয়ার্ড দেখান',
      orContinueWith: 'অথবা এর সাথে চালিয়ে যান',
      google: 'গুগল',
      github: 'গিটহাব'
    },

    // Register Page
    register: {
      title: 'একটি অ্যাকাউন্ট তৈরি করুন',
      subtitle: 'আমাদের সাথে যোগ দিন এবং মিনিটের মধ্যে শুরু করুন',
      join: 'যোগ দিন',
      today: 'আজ',
      customerRole: 'গ্রাহক',
      providerRole: 'প্রদানকারী',
      customerDesc: 'সেবা বুক করুন',
      providerDesc: 'সেবা প্রদান করুন',
      fullName: 'পুরো নাম',
      fullNamePlaceholder: 'আপনার পুরো নাম লিখুন',
      email: 'ইমেইল',
      emailPlaceholder: 'আপনার ইমেইল লিখুন',
      password: 'পাসওয়ার্ড',
      passwordPlaceholder: 'একটি পাসওয়ার্ড তৈরি করুন',
      confirmPassword: 'পাসওয়ার্ড নিশ্চিত করুন',
      confirmPasswordPlaceholder: 'আপনার পাসওয়ার্ড নিশ্চিত করুন',
      create: 'অ্যাকাউন্ট তৈরি করুন',
      creating: 'অ্যাকাউন্ট তৈরি হচ্ছে...',
      haveAccount: 'ইতিমধ্যে একটি অ্যাকাউন্ট আছে?',
      signIn: 'সাইন ইন করুন',
      
      fillAllFields: 'অনুগ্রহ করে সমস্ত ক্ষেত্র পূরণ করুন',
      passwordMismatch: 'পাসওয়ার্ড মিলছে না',
      agreeTerms: 'অনুগ্রহ করে শর্তাবলীতে সম্মত হন',
      weakPassword: 'অনুগ্রহ করে একটি শক্তিশালী পাসওয়ার্ড চয়ন করুন',
      invalidEmail: 'অনুগ্রহ করে একটি বৈধ ইমেইল ঠিকানা লিখুন',
      emailExists: 'ইমেইল ইতিমধ্যে নিবন্ধিত',
      genericError: 'নিবন্ধন ব্যর্থ হয়েছে। আবার চেষ্টা করুন।',
      
      weak: 'দুর্বল',
      fair: 'মাঝারি',
      good: 'ভাল',
      strong: 'শক্তিশালী',
      
      termsOfService: 'পরিষেবার শর্তাবলী',
      privacyPolicy: 'গোপনীয়তা নীতি',
      and: 'এবং',
      
      hidePassword: 'পাসওয়ার্ড লুকান',
      showPassword: 'পাসওয়ার্ড দেখান',
      
      customerDescription: 'ভারতের সেরা হোম সার্ভিস পেশাদারদের অ্যাক্সেস পান',
      customerFeature1: 'বিশ্বস্ত পেশাদারদের বুক করুন',
      customerFeature2: 'নিরাপদ পেমেন্ট',
      customerFeature3: '24/7 গ্রাহক সহায়তা',
      customerFeature4: 'সন্তুষ্টি গ্যারান্টিযুক্ত',
      
      providerDescription: 'হাজার হাজার সন্তুষ্ট গ্রাহকের সাথে আপনার ব্যবসা বাড়ান',
      providerFeature1: 'আরও গ্রাহকদের কাছে পৌঁছান',
      providerFeature2: 'নমনীয় কাজের সময়',
      providerFeature3: 'তাৎক্ষণিক পেমেন্ট',
      providerFeature4: 'যাচাইকৃত লিড',
      
      testimonial: 'একটি পরিষেবা প্রদানকারী হিসাবে যোগদান করা ছিল সেরা সিদ্ধান্ত। মাত্র ৬ মাসে আমার ব্যবসা ৩ গুণ বেড়েছে!',
      testimonialAuthor: 'রাজেশ কুমার',
      testimonialTitle: 'প্লাম্বার ও পরিষেবা প্রদানকারী'
    },
    // Footer
    footer: {
      copyright: '© 2026 হ্যান্ডিও। সমস্ত অধিকার সংরক্ষিত।',
    },
    landing: {
      services: 'সেবা',
      contact: 'যোগাযোগ',
      popularServices: 'জনপ্রিয় পরিষেবা',
      popularServicesSubtitle: "আমাদের শীর্ষ রেটেড পেশাদার পরিষেবাগুলির মধ্যে থেকে বেছে নিন"
    },

    stats: {
      customers: "খুশি গ্রাহক",
      providers: "যাচাইকৃত পরিষেবা প্রদানকারী",
      cities: "সেবা শহর",
      rating: "গড় রেটিং"
    },
    cta: {
      title: "সেবা প্রদানকারী হন",
      subtitle: "আপনার দক্ষতা ব্যবহার করে হাজারো গ্রাহকের কাছ থেকে আয় করুন।",
      button: "প্রদানকারী হিসেবে যোগ দিন"
    },
  },

  ta: {
    // Navbar
    navbar: {
      login: 'உள்நுழைக',
      register: 'பதிவு செய்க',
      search: 'தேடுக',
      myBookings: 'என் புக்கிங்குகள்',
      dashboard: 'டேஷ்போர்டு',
      createProfile: 'சுயவிவரம் உருவாக்க',
      admin: 'நிர்வாகி',
      logout: 'வெளியேறு',
    },
    
    // Landing Page
    landing: {
      services: 'சேவைகள்',
      contact: 'தொடர்பு',
    },

    // Hero Section
    hero: {
      trustedBadge: '50,000+ வீட்டு உரிமையாளர்களால் நம்பிக்கை வைக்கப்பட்ட',
      titlePart1: 'நம்பகமான உள்ளூர் ',
      titlePart2: 'சேவை வழங்குநர்களைத் தேடுக',
      subtitle: 'சரிபார்க்கப்பட்ட மின்னியல் பொறியாளர்கள், குழாய் தொழிலாளர்கள், சுத்தம் செய்பவர்கள் மற்றும் தொழில் வல்லுநர்களுடன் இணைக்கவும். உடனடியாக முன்பதிவு செய்க. தரம் உறுதி செய்யப்பட்ட.',
      stat1Label: 'சரிபார்க்கப்பட்ட தொழில் வல்லுநர்கள்',
      stat2Label: 'சராசரி மதிப்பீடு',
      stat3Label: 'பணம் திரும்பப் பெறும் உறுதி',
      btnGetStarted: 'இப்போது தொடங்கவும்',
      btnBecomeProvider: 'வழங்குநர் ஆகவும்',
    },

    // How It Works
    howItWorks: {
      badge: '✦ எளிய செயல்முறை ✦',
      title: 'Handio எவ்வாறு செயல்படுகிறது',
      subtitle: 'வீடு சேவைகளைப் பெற எளிய 4 படிகளின் செயல்முறை',
      step1Title: 'சேவை தேடுக',
      step1Description: 'சில கிளிக்குகளில் உங்களுக்கு தேவையான சேவையைத் தேடுக',
      step1Detail: '50+ வகைகள் உலாவுக',
      step2Title: 'வழங்குநரைப் புக் செய்க',
      step2Description: 'சரிபார்க்கப்பட்ட தொழில் வல்லுநர்களிலிருந்து தேர்ந்தெடுக்கவும்',
      step2Detail: '100% சரிபார்க்கப்பட்ட தொழில் வல்லுநர்கள்',
      step3Title: 'வேலை முடிந்து விடுக',
      step3Description: 'வல்லுநர்கள் வேலையை முடிக்க விடுக',
      step3Detail: '4.9 சராசரி மதிப்பீடு',
      step4Title: 'மதிப்பாய்வு கூறவும்',
      step4Description: 'உங்கள் அனுபவத்தைப் பகிர்ந்து கொள்ளுங்கள் மற்றும் சேவைக்கு மதிப்பீடு கொடுங்கள்',
      step4Detail: 'மாதத்திற்கு 10K+ மதிப்பாய்வுகள்',
      progressStep1: 'படி 1',
      progressStep2: 'படி 2',
      progressStep3: 'படி 3',
      progressStep4: 'படி 4',
      footer: 'முன்பதிவு முதல் முடிவு வரை, நாங்கள் இதை எளிதாக்குகிறோம்',
    },

    // Features Section
    featuredProviders: {
      title: "சிறந்த மதிப்பீடு பெற்ற நிபுணர்கள்",
      viewProfile: "சுயவிவரம் பார்க்க",
      viewAll: "அனைத்து வழங்குநர்களையும் பார்க்க",
      new: "புதியது"
    },

    // Login Page
    login: {
      title: 'உங்கள் கணக்கில் உள்நுழைக',
      subtitle: 'மீண்டும் வரவேற்கிறோம்! உங்கள் விவரங்களை உள்ளிடவும்',
      email: 'மின்னஞ்சல்',
      emailPlaceholder: 'உங்கள் மின்னஞ்சலை உள்ளிடவும்',
      password: 'கடவுச்சொல்',
      passwordPlaceholder: 'உங்கள் கடவுச்சொல்லை உள்ளிடவும்',
      signIn: 'உள்நுழைக',
      signingIn: 'உள்நுழைகிறது...',
      noAccount: 'கணக்கு இல்லையா?',
      createOne: 'ஒன்றை உருவாக்கவும்',
      rememberMe: 'என்னை நினைவில் கொள்',
      forgotPassword: 'கடவுச்சொல் மறந்துவிட்டதா?',
      fillAllFields: 'அனைத்து புலங்களையும் நிரப்பவும்',
      invalidCredentials: 'தவறான மின்னஞ்சல் அல்லது கடவுச்சொல்',
      userNotFound: 'பயனர் கிடைக்கவில்லை',
      genericError: 'உள்நுழைவு தோல்வியடைந்தது. மீண்டும் முயற்சிக்கவும்.',
      welcomeBack: 'மீண்டும் வரவேற்கிறோம்',
      brandDescription: 'வீட்டு சேவைகளுக்கான உங்கள் நம்பகமான கூட்டாளி. சேவைகளை முன்பதிவு செய்ய, சந்திப்புகளை கண்காணிக்க மற்றும் பலவற்றுக்கு உள்நுழைக.',
      feature1: '50K+ மகிழ்ச்சியான வாடிக்கையாளர்கள்',
      feature2: '200+ நிபுணத்துவ வல்லுநர்கள்',
      feature3: '24/7 வாடிக்கையாளர் ஆதரவு',
      feature4: '100% திருப்தி உத்தரவாதம்',
      testimonial: 'நான் எப்போதும் பயன்படுத்திய சிறந்த வீட்டு சேவை தளம். விரைவான, நம்பகமான மற்றும் தொழில்முறை!',
      testimonialAuthor: 'ராகுல் ஷர்மா',
      testimonialTitle: 'மகிழ்ச்சியான வாடிக்கையாளர்',
      hidePassword: 'கடவுச்சொல்லை மறை',
      showPassword: 'கடவுச்சொல்லைக் காட்டு',
      orContinueWith: 'அல்லது தொடரவும்',
      google: 'கூகிள்',
      github: 'கிட்ஹப்'
    },
    // Register Page
    register: {
      title: 'கணக்கை உருவாக்கவும்',
      subtitle: 'எங்களுடன் சேர்ந்து நிமிடங்களில் தொடங்குங்கள்',
      join: 'சேரவும்',
      today: 'இன்று',
      customerRole: 'வாடிக்கையாளர்',
      providerRole: 'வழங்குநர்',
      customerDesc: 'சேவைகளை புக் செய்யவும்',
      providerDesc: 'சேவைகளை வழங்கவும்',
      fullName: 'முழு பெயர்',
      fullNamePlaceholder: 'உங்கள் முழு பெயரை உள்ளிடவும்',
      email: 'மின்னஞ்சல்',
      emailPlaceholder: 'உங்கள் மின்னஞ்சலை உள்ளிடவும்',
      password: 'கடவுச்சொல்',
      passwordPlaceholder: 'கடவுச்சொல்லை உருவாக்கவும்',
      confirmPassword: 'கடவுச்சொல்லை உறுதிப்படுத்தவும்',
      confirmPasswordPlaceholder: 'உங்கள் கடவுச்சொல்லை உறுதிப்படுத்தவும்',
      create: 'கணக்கை உருவாக்கவும்',
      creating: 'கணக்கு உருவாக்கப்படுகிறது...',
      haveAccount: 'ஏற்கனவே கணக்கு உள்ளதா?',
      signIn: 'உள்நுழைக',
      
      fillAllFields: 'அனைத்து புலங்களையும் நிரப்பவும்',
      passwordMismatch: 'கடவுச்சொற்கள் பொருந்தவில்லை',
      agreeTerms: 'விதிமுறைகள் மற்றும் நிபந்தனைகளை ஏற்கவும்',
      weakPassword: 'வலுவான கடவுச்சொல்லை தேர்வு செய்யவும்',
      invalidEmail: 'சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும்',
      emailExists: 'மின்னஞ்சல் ஏற்கனவே பதிவு செய்யப்பட்டுள்ளது',
      genericError: 'பதிவு தோல்வியடைந்தது. மீண்டும் முயற்சிக்கவும்.',
      
      weak: 'பலவீனமான',
      fair: 'சராசரி',
      good: 'நல்ல',
      strong: 'வலுவான',
      
      termsOfService: 'சேவை விதிமுறைகள்',
      privacyPolicy: 'தனியுரிமைக் கொள்கை',
      and: 'மற்றும்',
      
      hidePassword: 'கடவுச்சொல்லை மறை',
      showPassword: 'கடவுச்சொல்லைக் காட்டு',
      
      customerDescription: 'இந்தியாவின் சிறந்த வீட்டு சேவை நிபுணர்களுக்கான அணுகலைப் பெறுங்கள்',
      customerFeature1: 'நம்பகமான நிபுணர்களை புக் செய்யுங்கள்',
      customerFeature2: 'பாதுகாப்பான கட்டணங்கள்',
      customerFeature3: '24/7 வாடிக்கையாளர் ஆதரவு',
      customerFeature4: 'திருப்தி உத்தரவாதம்',
      
      providerDescription: 'ஆயிரக்கணக்கான மகிழ்ச்சியான வாடிக்கையாளர்களுடன் உங்கள் வணிகத்தை வளர்க்கவும்',
      providerFeature1: 'அதிக வாடிக்கையாளர்களை அடையுங்கள்',
      providerFeature2: 'நெகிழ்வான வேலை நேரங்கள்',
      providerFeature3: 'உடனடி கட்டணங்கள்',
      providerFeature4: 'சரிபார்க்கப்பட்ட முன்னணிகள்',
      
      testimonial: 'சேவை வழங்குநராக சேர்வது சிறந்த முடிவு. வெறும் 6 மாதங்களில் எனது வணிகம் 3 மடங்கு வளர்ந்துள்ளது!',
      testimonialAuthor: 'ராஜேஷ் குமார்',
      testimonialTitle: 'பிளம்பர் மற்றும் சேவை வழங்குநர்'
    },

    // Footer
    footer: {
      copyright: '© 2026 Handio. அனைத்து உரிமைகளும் সংரक்ഷിত்தாக்கை.',
    },
    landing: {
      services: 'சேவைகள்',
      contact: 'தொடர்பு',
      popularServices: 'பிரபல சேவைகள்',
      popularServicesSubtitle: "எங்கள் சிறந்த மதிப்பீடு செய்யப்பட்ட சேவைகளில் இருந்து தேர்வு செய்யுங்கள்"
    },  

    stats: {
      customers: "மகிழ்ச்சியான வாடிக்கையாளர்கள்",
      providers: "சரிபார்க்கப்பட்ட சேவை வழங்குநர்கள்",
      cities: "சேவை நகரங்கள்",
      rating: "சராசரி மதிப்பீடு"
    },
    cta: {
      title: "சேவை வழங்குநராக சேருங்கள்",
      subtitle: "உங்கள் திறமைகளை பயன்படுத்தி ஆயிரக்கணக்கான வாடிக்கையாளர்களிடம் இருந்து சம்பாதிக்கவும்.",
      button: "வழங்குநராக சேரவும்"
    },
  },

  te: {
    // Navbar
    navbar: {
      login: 'లాగిన్ చేయండి',
      register: 'నమోదు చేయండి',
      search: 'వెతకండి',
      myBookings: 'నా బుకింగ్‌లు',
      dashboard: 'డ్యాష్‌బోర్డ్',
      createProfile: 'ప్రొఫైల్ సృష్టించండి',
      admin: 'నిర్వాహకుడు',
      logout: 'లాగ్ అవుట్',
    },
    
    // Landing Page
    landing: {
      services: 'సేవలు',
      contact: 'సంపర్కం',
    },

    // Hero Section
    hero: {
      trustedBadge: '50,000+ ఇల్లు యజమానులచే విశ్వసించిన',
      titlePart1: 'నమ్మదగిన స్థానిక ',
      titlePart2: 'సేవా ప్రదాతలను కనుగొనండి',
      subtitle: 'ధృవీకృత విద్యుత్ సిద్ధం, నాలుకలు, శుభ్రత చేసేవారు మరియు నిపుణులతో కనెక్ట్ చేయండి. తక్షణమే బుక్ చేయండి. గుణమానం హామీ.',
      stat1Label: 'ధృవీకృత నిపుణులు',
      stat2Label: 'సగటు రేటింగ్',
      stat3Label: 'డబ్బు తిరిగి కమిషన్',
      btnGetStarted: 'ఇప్పుడే ప్రారంభించండి',
      btnBecomeProvider: 'ప్రదాత అయండి',
    },

    // How It Works
    howItWorks: {
      badge: '✦ సరళ ప్రక్రియ ✦',
      title: 'హ్యాండియో ఎలా పనిచేస్తుందో',
      subtitle: 'ఇంటి సేవలను పొందడానికి సరళ 4-దశల ప్రక్రియ',
      step1Title: 'సేవను వెతకండి',
      step1Description: 'కొన్ని క్లిక్‌లలో మీకు కావలసిన సేవను కనుగొనండి',
      step1Detail: '50+ వర్గాలను విషయ చేయండి',
      step2Title: 'ప్రదాతను బుక్ చేయండి',
      step2Description: 'ధృవీకృత నిపుణుల నుండి ఎంచుకోండి',
      step2Detail: '100% ధృవీకృత నిపుణులు',
      step3Title: 'పని పూర్తి చేయండి',
      step3Description: 'నిపుణులు పనిని పూర్తి చేయనివ్వండి',
      step3Detail: '4.9 సగటు రేటింగ్',
      step4Title: 'సమీక్ష ఇవ్వండి',
      step4Description: 'మీ అనుభవాన్ని భాగస్వామ్యం చేసి సేవను రేట్ చేయండి',
      step4Detail: 'నెలకు 10K+ సమీక్షలు',
      progressStep1: 'దశ 1',
      progressStep2: 'దశ 2',
      progressStep3: 'దశ 3',
      progressStep4: 'దశ 4',
      footer: 'బుకింగ్ నుండి పూర్తి వరకు, మేము దీన్ని సులభతరం చేస్తాము',
    },

    // Features Section
    features: {
      title: 'హ్యాండియోను ఎందుకు ఎంచుకోండి',
      feature1: '✔ ధృవీకృత ప్రదాతలు',
      feature2: '✔ సులభమైన బుకింగ్',
      feature3: '✔ నమ్మదగిన సమీక్షలు',
      feature4: '✔ సురక్ష ప్ల్యాట్‌ఫార్మ్',
    },

    featuredProviders: {
      title: "అత్యుత్తమ రేటింగ్ పొందిన నిపుణులు",
      viewProfile: "ప్రొఫైల్ చూడండి",
      viewAll: "అన్ని ప్రొవైడర్లను చూడండి",
      new: "కొత్త"
    },

    // Login Page
    login: {
      title: 'మీ ఖాతాలో సైన్ ఇన్ చేయండి',
      subtitle: 'తిరిగి స్వాగతం! దయచేసి మీ వివరాలను నమోదు చేయండి',
      email: 'ఇమెయిల్',
      emailPlaceholder: 'మీ ఇమెయిల్‌ను నమోదు చేయండి',
      password: 'పాస్‌వర్డ్',
      passwordPlaceholder: 'మీ పాస్‌వర్డ్‌ను నమోదు చేయండి',
      signIn: 'సైన్ ఇన్ చేయండి',
      signingIn: 'సైన్ ఇన్ అవుతోంది...',
      noAccount: 'ఖాతా లేదా?',
      createOne: 'కొత్తదాన్ని సృష్టించండి',
      rememberMe: 'నన్ను గుర్తుంచుకో',
      forgotPassword: 'పాస్‌వర్డ్ మర్చిపోయారా?',
      fillAllFields: 'దయచేసి అన్ని ఫీల్డ్‌లను పూరించండి',
      invalidCredentials: 'తప్పు ఇమెయిల్ లేదా పాస్‌వర్డ్',
      userNotFound: 'వినియోగదారు కనుగొనబడలేదు',
      genericError: 'లాగిన్ విఫలమైంది. దయచేసి మళ్లీ ప్రయత్నించండి.',
      welcomeBack: 'తిరిగి స్వాగతం',
      brandDescription: 'వృత్తిపరమైన గృహ సేవలకు మీ విశ్వసనీయ భాగస్వామి. సేవలను బుక్ చేయడానికి, అపాయింట్‌మెంట్‌లను ట్రాక్ చేయడానికి మరియు మరింత కోసం లాగిన్ చేయండి.',
      feature1: '50K+ సంతోషకరమైన వినియోగదారులు',
      feature2: '200+ నిపుణులైన ప్రొఫెషనల్స్',
      feature3: '24/7 వినియోగదారు మద్దతు',
      feature4: '100% సంతృప్తి హామీ',
      testimonial: 'నేను ఎప్పుడూ ఉపయోగించిన అత్యుత్తమ హోమ్ సర్వీస్ ప్లాట్‌ఫారమ్. వేగవంతమైన, నమ్మదగిన మరియు వృత్తిపరమైన!',
      testimonialAuthor: 'రాహుల్ శర్మ',
      testimonialTitle: 'సంతోషకరమైన వినియోగదారు',
      hidePassword: 'పాస్‌వర్డ్ దాచు',
      showPassword: 'పాస్‌వర్డ్ చూపించు',
      orContinueWith: 'లేదా దీనితో కొనసాగించండి',
      google: 'గూగుల్',
      github: 'గిట్‌హబ్'
    },
    // Register Page
    register: {
      title: 'ఖాతాను సృష్టించండి',
      subtitle: 'మాతో చేరండి మరియు నిమిషాల్లో ప్రారంభించండి',
      join: 'చేరండి',
      today: 'ఈరోజు',
      customerRole: 'వినియోగదారు',
      providerRole: 'ప్రదాత',
      customerDesc: 'సేవలను బుక్ చేయండి',
      providerDesc: 'సేవలను అందించండి',
      fullName: 'పూర్తి పేరు',
      fullNamePlaceholder: 'మీ పూర్తి పేరును నమోదు చేయండి',
      email: 'ఇమెయిల్',
      emailPlaceholder: 'మీ ఇమెయిల్‌ను నమోదు చేయండి',
      password: 'పాస్‌వర్డ్',
      passwordPlaceholder: 'పాస్‌వర్డ్ సృష్టించండి',
      confirmPassword: 'పాస్‌వర్డ్‌ను నిర్ధారించండి',
      confirmPasswordPlaceholder: 'మీ పాస్‌వర్డ్‌ను నిర్ధారించండి',
      create: 'ఖాతా సృష్టించండి',
      creating: 'ఖాతా సృష్టించబడుతోంది...',
      haveAccount: 'ఇప్పటికే ఖాతా ఉందా?',
      signIn: 'సైన్ ఇన్ చేయండి',
      
      fillAllFields: 'దయచేసి అన్ని ఫీల్డ్‌లను పూరించండి',
      passwordMismatch: 'పాస్‌వర్డ్‌లు సరిపోలడం లేదు',
      agreeTerms: 'దయచేసి నిబంధనలకు అంగీకరించండి',
      weakPassword: 'దయచేసి బలమైన పాస్‌వర్డ్‌ను ఎంచుకోండి',
      invalidEmail: 'దయచేసి చెల్లుబాటు అయ్యే ఇమెయిల్ చిరునామాను నమోదు చేయండి',
      emailExists: 'ఇమెయిల్ ఇప్పటికే నమోదు చేయబడింది',
      genericError: 'నమోదు విఫలమైంది. దయచేసి మళ్లీ ప్రయత్నించండి.',
      
      weak: 'బలహీన',
      fair: 'మధ్యస్థ',
      good: 'మంచి',
      strong: 'బలమైన',
      
      termsOfService: 'సేవా నిబంధనలు',
      privacyPolicy: 'గోప్యతా విధానం',
      and: 'మరియు',
      
      hidePassword: 'పాస్‌వర్డ్ దాచు',
      showPassword: 'పాస్‌వర్డ్ చూపించు',
      
      customerDescription: 'భారతదేశపు అత్యుత్తమ గృహ సేవా నిపుణులకు ప్రాప్తిని పొందండి',
      customerFeature1: 'నమ్మకమైన నిపుణులను బుక్ చేయండి',
      customerFeature2: 'సురక్షిత చెల్లింపులు',
      customerFeature3: '24/7 వినియోగదారు మద్దతు',
      customerFeature4: 'సంతృప్తి హామీ',
      
      providerDescription: 'వేలాది సంతోషకరమైన వినియోగదారులతో మీ వ్యాపారాన్ని పెంచుకోండి',
      providerFeature1: 'మరింత మంది వినియోగదారులను చేరుకోండి',
      providerFeature2: 'సౌకర్యవంతమైన పని గంటలు',
      providerFeature3: 'తక్షణ చెల్లింపులు',
      providerFeature4: 'ధృవీకరించబడిన లీడ్స్',
      
      testimonial: 'సేవా ప్రదాతగా చేరడం ఉత్తమ నిర్ణయం. కేవలం 6 నెలల్లో నా వ్యాపారం 3 రెట్లు పెరిగింది!',
      testimonialAuthor: 'రాజేష్ కుమార్',
      testimonialTitle: 'ప్లంబర్ మరియు సేవా ప్రదాత'
    },

    // Footer
    footer: {
      copyright: '© 2026 హ్యాండియో. అన్ని హక్కులు సంరక్ష్ణలు.',
    },
    landing: {
      services: 'సేవలు',
      contact: 'సంప్రదించండి',
      popularServices: 'ప్రసిద్ధ సేవలు',
      popularServicesSubtitle: "మా అత్యుత్తమ రేటింగ్ పొందిన సేవలలో ఒకదాన్ని ఎంచుకోండి"
    },

    stats: {
      customers: "సంతోషకరమైన కస్టమర్లు",
      providers: "ధృవీకరించిన సేవా ప్రదాతలు",
      cities: "సేవా నగరాలు",
      rating: "సగటు రేటింగ్"
    },
    cta: {
      title: "సేవా ప్రదాతగా మారండి",
      subtitle: "మీ నైపుణ్యాలను ఉపయోగించి వేలాది కస్టమర్ల నుండి సంపాదించండి.",
      button: "ప్రదాతగా చేరండి"
    },
  },

  kn: {
    // Navbar
    navbar: {
      login: 'ಲಾಗಿನ್ ಮಾಡಿ',
      register: 'ನೋಂದಾಯಿಸಿ',
      search: 'ಹುಡುಕಿ',
      myBookings: 'ನನ್ನ ಬುಕಿಂಗ್‌ಗಳು',
      dashboard: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
      createProfile: 'ಪ್ರೋಫೈಲ್ ರಚಿಸಿ',
      admin: 'ನಿರ್ವಾಹಕ',
      logout: 'ನಿರ್ಗಮನ',
    },
    
    // Landing Page
    landing: {
      services: 'ಸೇವೆಗಳು',
      contact: 'ಸಂಪರ್ಕ',
    },

    // Hero Section
    hero: {
      trustedBadge: '50,000+ ಮನೆ ಮಾಲಿಕರಿಂದ ವಿಶ್ವಾಸಾರ್ಹ',
      titlePart1: 'ವಿಶ್ವಾಸಾರ್ಹ ಸ್ಥಳೀಯ ',
      titlePart2: 'ಸೇವಾ ಪ್ರದಾತರನ್ನು ಹುಡುಕಿ',
      subtitle: 'ಪರಿಶೀಲಿತ ವಿದ್ಯುತ್ತಿನವರೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸಿ, ಲೋಹಿತೀಕರಣ, ಸಾಫ್ಟ್‌ವೇರ್ ಎಂಜಿನಿಯರ್‌ಗಳು ಮತ್ತು ವೃತ್ತಿಪರರು. ತಕ್ಷಣ ಬುಕ್ ಮಾಡಿ. ಗುಣಮಾನ ಖಾತರಿ ಪಡಿಸಲಾಗಿದೆ.',
      stat1Label: 'ಪರಿಶೀಲಿತ ವೃತ್ತಿಪರರು',
      stat2Label: 'ಸರಾಸರಿ ರೇಟಿಂಗ್',
      stat3Label: 'ಹಣ-ಮರಳಿ ಖಾತರಿ',
      btnGetStarted: 'ಈಗ ಪ್ರಾರಂಭಿಸಿ',
      btnBecomeProvider: 'ಪ್ರದಾತ ಆಗಿರಿ',
    },

    // How It Works
    howItWorks: {
      badge: '✦ ಸರಳ ಪ್ರಕ್ರಿಯೆ ✦',
      title: 'ಹ್ಯಾಂಡಿಓ ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ',
      subtitle: 'ಮನೆಯ ಸೇವೆಗಳನ್ನು ಪಡೆಯಲು ಸರಳ 4-ಹಂತದ ಪ್ರಕ್ರಿಯೆ',
      step1Title: 'ಸೇವೆ ಹುಡುಕಿ',
      step1Description: 'ಕೆಲವೇ ಕ್ಲಿಕ್‌ಗಳಲ್ಲಿ ನಿಮಗೆ ಬೇಕಾದ ಸೇವೆಯನ್ನು ಹುಡುಕಿ',
      step1Detail: '50+ ವರ್ಗಗಳನ್ನು ಬ್ರೌಸ್ ಮಾಡಿ',
      step2Title: 'ಪ್ರದಾತರನ್ನು ಬುಕ್ ಮಾಡಿ',
      step2Description: 'ಪರಿಶೀಲಿತ ವೃತ್ತಿಪರರಿಂದ ಆರಿಸಿಕೊಳ್ಳಿ',
      step2Detail: '100% ಪರಿಶೀಲಿತ ವೃತ್ತಿಪರರು',
      step3Title: 'ಕೆಲಸ ಪೂರ್ಣ ಮಾಡಿ',
      step3Description: 'ವಿಶೇಷಜ್ಞರನ್ನು ಕೆಲಸ ಪೂರ್ಣ ಮಾಡಲು ವಿಶ್ರಾಮಿಸಿ',
      step3Detail: '4.9 ಸರಾಸರಿ ರೇಟಿಂಗ್',
      step4Title: 'ಪರಿಶೀಲನೆ ನೀಡಿ',
      step4Description: 'ನಿಮ್ಮ ಅನುಭವವನ್ನು ಹಂಚಿಕೊಳ್ಳಿ ಮತ್ತು ಸೇವೆಗೆ ರೇಟಿಂಗ್ ನೀಡಿ',
      step4Detail: 'ತಿಂಗಳಿಗೆ 10K+ ಪರಿಶೀಲನೆಗಳು',
      progressStep1: 'ಹಂತ 1',
      progressStep2: 'ಹಂತ 2',
      progressStep3: 'ಹಂತ 3',
      progressStep4: 'ಹಂತ 4',
      footer: 'ಬುಕಿಂಗ್‌ನಿಂದ ಪೂರ್ಣತೆವರೆಗೆ, ನಾವು ಅದನ್ನು ಸಾಧ್ಯವೆಂದು ಮಾಡುತ್ತೇವೆ',
    },

    // Features Section
    features: {
      title: 'ಹ್ಯಾಂಡಿಓ ಏಕೆ ಆರಿಸಿಕೊಳ್ಳಿ',
      feature1: '✔ ಪರಿಶೀಲಿತ ಪ್ರದಾತರು',
      feature2: '✔ ಸರಳ ಬುಕಿಂಗ್',
      feature3: '✔ ವಿಶ್ವಾಸಾರ್ಹ ಪರಿಶೀಲನೆಗಳು',
      feature4: '✔ ಸುರಕ್ಷಿತ ವೇದಿಕೆ',
    },

    featuredProviders: {
      title: "ಅತ್ಯುತ್ತಮ ರೇಟಿಂಗ್ ಹೊಂದಿರುವ ವೃತ್ತಿಪರರು",
      viewProfile: "ಪ್ರೊಫೈಲ್ ನೋಡಿ",
      viewAll: "ಎಲ್ಲಾ ಸೇವಾ ಪೂರೈಕೆದಾರರನ್ನು ನೋಡಿ",
      new: "ಹೊಸದು"
    },

    // Login Page
    login: {
      title: 'ನಿಮ್ಮ ಖಾತೆಗೆ ಸೈನ್ ಇನ್ ಮಾಡಿ',
      subtitle: 'ಮರಳಿ ಸ್ವಾಗತ! ದಯವಿಟ್ಟು ನಿಮ್ಮ ವಿವರಗಳನ್ನು ನಮೂದಿಸಿ',
      email: 'ಇಮೇಲ್',
      emailPlaceholder: 'ನಿಮ್ಮ ಇಮೇಲ್ ನಮೂದಿಸಿ',
      password: 'ಪಾಸ್‌ವರ್ಡ್',
      passwordPlaceholder: 'ನಿಮ್ಮ ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ',
      signIn: 'ಸೈನ್ ಇನ್ ಮಾಡಿ',
      signingIn: 'ಸೈನ್ ಇನ್ ಆಗುತ್ತಿದೆ...',
      noAccount: 'ಖಾತೆ ಇಲ್ಲವೇ?',
      createOne: 'ಹೊಸದನ್ನು ರಚಿಸಿ',
      rememberMe: 'ನನ್ನನ್ನು ನೆನಪಿಡಿ',
      forgotPassword: 'ಪಾಸ್‌ವರ್ಡ್ ಮರೆತಿರಾ?',
      fillAllFields: 'ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಕ್ಷೇತ್ರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ',
      invalidCredentials: 'ತಪ್ಪಾದ ಇಮೇಲ್ ಅಥವಾ ಪಾಸ್‌ವರ್ಡ್',
      userNotFound: 'ಬಳಕೆದಾರರು ಸಿಗಲಿಲ್ಲ',
      genericError: 'ಲಾಗಿನ್ ವಿಫಲವಾಗಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
      welcomeBack: 'ಮರಳಿ ಸ್ವಾಗತ',
      brandDescription: 'ವೃತ್ತಿಪರ ಮನೆ ಸೇವೆಗಳಿಗೆ ನಿಮ್ಮ ವಿಶ್ವಾಸಾರ್ಹ ಪಾಲುದಾರ. ಸೇವೆಗಳನ್ನು ಬುಕ್ ಮಾಡಲು, ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್‌ಗಳನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡಲು ಮತ್ತು ಹೆಚ್ಚಿನದಕ್ಕಾಗಿ ಲಾಗಿನ್ ಮಾಡಿ.',
      feature1: '50K+ ಸಂತೋಷದ ಗ್ರಾಹಕರು',
      feature2: '200+ ತಜ್ಞ ವೃತ್ತಿಪರರು',
      feature3: '24/7 ಗ್ರಾಹಕ ಬೆಂಬಲ',
      feature4: '100% ತೃಪ್ತಿ ಖಾತರಿ',
      testimonial: 'ನಾನು ಎಂದಿಗೂ ಬಳಸಿದ ಅತ್ಯುತ್ತಮ ಹೋಮ್ ಸರ್ವಿಸ್ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್. ವೇಗವಾದ, ವಿಶ್ವಾಸಾರ್ಹ ಮತ್ತು ವೃತ್ತಿಪರ!',
      testimonialAuthor: 'ರಾಹುಲ್ ಶರ್ಮಾ',
      testimonialTitle: 'ಸಂತೋಷದ ಗ್ರಾಹಕ',
      hidePassword: 'ಪಾಸ್‌ವರ್ಡ್ ಮರೆಮಾಡಿ',
      showPassword: 'ಪಾಸ್‌ವರ್ಡ್ ತೋರಿಸಿ',
      orContinueWith: 'ಅಥವಾ ಇದರೊಂದಿಗೆ ಮುಂದುವರಿಸಿ',
      google: 'ಗೂಗಲ್',
      github: 'ಗಿಟ್‌ಹಬ್'
    },
    // Register Page
    register: {
      title: 'ಖಾತೆಯನ್ನು ರಚಿಸಿ',
      subtitle: 'ನಮ್ಮೊಂದಿಗೆ ಸೇರಿ ಮತ್ತು ನಿಮಿಷಗಳಲ್ಲಿ ಪ್ರಾರಂಭಿಸಿ',
      join: 'ಸೇರಿ',
      today: 'ಇಂದು',
      customerRole: 'ಗ್ರಾಹಕ',
      providerRole: 'ಪ್ರದಾತ',
      customerDesc: 'ಸೇವೆಗಳನ್ನು ಬುಕ್ ಮಾಡಿ',
      providerDesc: 'ಸೇವೆಗಳನ್ನು ನೀಡಿ',
      fullName: 'ಪೂರ್ಣ ಹೆಸರು',
      fullNamePlaceholder: 'ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರನ್ನು ನಮೂದಿಸಿ',
      email: 'ಇಮೇಲ್',
      emailPlaceholder: 'ನಿಮ್ಮ ಇಮೇಲ್ ನಮೂದಿಸಿ',
      password: 'ಪಾಸ್‌ವರ್ಡ್',
      passwordPlaceholder: 'ಪಾಸ್‌ವರ್ಡ್ ರಚಿಸಿ',
      confirmPassword: 'ಪಾಸ್‌ವರ್ಡ್ ದೃಢೀಕರಿಸಿ',
      confirmPasswordPlaceholder: 'ನಿಮ್ಮ ಪಾಸ್‌ವರ್ಡ್ ದೃಢೀಕರಿಸಿ',
      create: 'ಖಾತೆ ರಚಿಸಿ',
      creating: 'ಖಾತೆ ರಚಿಸಲಾಗುತ್ತಿದೆ...',
      haveAccount: 'ಈಗಾಗಲೇ ಖಾತೆ ಹೊಂದಿದ್ದೀರಾ?',
      signIn: 'ಸೈನ್ ಇನ್ ಮಾಡಿ',
      
      fillAllFields: 'ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಕ್ಷೇತ್ರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ',
      passwordMismatch: 'ಪಾಸ್‌ವರ್ಡ್‌ಗಳು ಹೊಂದಿಕೆಯಾಗುತ್ತಿಲ್ಲ',
      agreeTerms: 'ದಯವಿಟ್ಟು ನಿಯಮಗಳು ಮತ್ತು ಷರತ್ತುಗಳಿಗೆ ಸಮ್ಮತಿಸಿ',
      weakPassword: 'ದಯವಿಟ್ಟು ಬಲವಾದ ಪಾಸ್‌ವರ್ಡ್ ಆಯ್ಕೆಮಾಡಿ',
      invalidEmail: 'ದಯವಿಟ್ಟು ಮಾನ್ಯ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ನಮೂದಿಸಿ',
      emailExists: 'ಇಮೇಲ್ ಈಗಾಗಲೇ ನೋಂದಾಯಿಸಲಾಗಿದೆ',
      genericError: 'ನೋಂದಣಿ ವಿಫಲವಾಗಿದೆ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
      
      weak: 'ದುರ್ಬಲ',
      fair: 'ಮಧ್ಯಮ',
      good: 'ಉತ್ತಮ',
      strong: 'ಬಲವಾದ',
      
      termsOfService: 'ಸೇವಾ ನಿಯಮಗಳು',
      privacyPolicy: 'ಗೌಪ್ಯತಾ ನೀತಿ',
      and: 'ಮತ್ತು',
      
      hidePassword: 'ಪಾಸ್‌ವರ್ಡ್ ಮರೆಮಾಡಿ',
      showPassword: 'ಪಾಸ್‌ವರ್ಡ್ ತೋರಿಸಿ',
      
      customerDescription: 'ಭಾರತದ ಅತ್ಯುತ್ತಮ ಮನೆ ಸೇವಾ ವೃತ್ತಿಪರರಿಗೆ ಪ್ರವೇಶ ಪಡೆಯಿರಿ',
      customerFeature1: 'ವಿಶ್ವಾಸಾರ್ಹ ವೃತ್ತಿಪರರನ್ನು ಬುಕ್ ಮಾಡಿ',
      customerFeature2: 'ಸುರಕ್ಷಿತ ಪಾವತಿಗಳು',
      customerFeature3: '24/7 ಗ್ರಾಹಕ ಬೆಂಬಲ',
      customerFeature4: 'ತೃಪ್ತಿ ಖಾತರಿ',
      
      providerDescription: 'ಸಾವಿರಾರು ಸಂತೋಷದ ಗ್ರಾಹಕರೊಂದಿಗೆ ನಿಮ್ಮ ವ್ಯವಹಾರವನ್ನು ಬೆಳೆಸಿಕೊಳ್ಳಿ',
      providerFeature1: 'ಹೆಚ್ಚಿನ ಗ್ರಾಹಕರನ್ನು ತಲುಪಿ',
      providerFeature2: 'ಸ್ಥಿತಿಸ್ಥಾಪಕ ಕೆಲಸದ ಸಮಯ',
      providerFeature3: 'ತತ್‌ಕ್ಷಣ ಪಾವತಿಗಳು',
      providerFeature4: 'ಪರಿಶೀಲಿತ ಲೀಡ್‌ಗಳು',
      
      testimonial: 'ಸೇವಾ ಪ್ರದಾತರಾಗಿ ಸೇರುವುದು ಅತ್ಯುತ್ತಮ ನಿರ್ಧಾರವಾಗಿತ್ತು. ಕೇವಲ 6 ತಿಂಗಳುಗಳಲ್ಲಿ ನನ್ನ ವ್ಯವಹಾರ 3 ಪಟ್ಟು ಬೆಳೆದಿದೆ!',
      testimonialAuthor: 'ರಾಜೇಶ್ ಕುಮಾರ್',
      testimonialTitle: 'ಪ್ಲಂಬರ್ ಮತ್ತು ಸೇವಾ ಪ್ರದಾತ'
    },
    // Footer
    footer: {
      copyright: '© 2026 ಹ್ಯಾಂಡಿಓ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಸಂರಕ್ಷಿತ.',
    },

    landing: {
      services: 'ಸೇವೆಗಳು',
      contact: 'ಸಂಪರ್ಕಿಸಿ',
      popularServices: 'ಜನಪ್ರಿಯ ಸೇವೆಗಳು',
      popularServicesSubtitle: "ನಮ್ಮ ಅತ್ಯುತ್ತಮ ರೇಟಿಂಗ್ ಪಡೆದ ಸೇವೆಗಳಿಂದ ಆಯ್ಕೆಮಾಡಿ"
    },

    stats: {
      customers: "ಸಂತೋಷದ ಗ್ರಾಹಕರು",
      providers: "ಪರಿಶೀಲಿತ ಸೇವಾ ಪೂರೈಕೆದಾರರು",
      cities: "ಸೇವಾ ನಗರಗಳು",
      rating: "ಸರಾಸರಿ ರೇಟಿಂಗ್"
    },
    cta: {
      title: "ಸೇವಾ ಪೂರೈಕೆದಾರರಾಗಿ ಸೇರಿ",
      subtitle: "ನಿಮ್ಮ ಕೌಶಲ್ಯಗಳನ್ನು ಬಳಸಿ ಸಾವಿರಾರು ಗ್ರಾಹಕರಿಂದ ಆದಾಯ ಗಳಿಸಿ.",
      button: "ಪೂರೈಕೆದಾರರಾಗಿ ಸೇರಿ"
    },
  },
};
