const GEMINI_API_KEY = AIzaSyBM7ExLLh2KG9NiRXX - SWeG9t2VfDrneJQ;

// Knowledge Base for E-Waste FAQs
const knowledgeBase = {
  Intro: "",
  // General E-Waste Information
  "what is e-waste":
    "E-waste refers to electronic waste - discarded electrical or electronic devices. This includes used electronics that are destined for reuse, resale, salvage, recycling, or disposal.",
  "why is e-waste recycling important":
    "E-waste recycling is crucial because electronic devices contain toxic substances like lead, mercury, and cadmium that can harm the environment and human health. Proper recycling also recovers valuable materials like gold, silver, copper, and rare earth elements, reducing the need for mining raw materials.",

  // Price Estimation
  "price estimation":
    "I can help estimate the value of your e-waste. 💰 Here are typical price ranges:\n• Laptops: ₹1,000-5,000\n• Smartphones: ₹200-2,000\n• Desktops: ₹800-3,000\n• TVs: ₹500-2,000\n\nPlease specify which device you'd like to know about for more details.",

  laptop:
    "Laptop pricing typically ranges from ₹1,000-5,000 depending on age and condition:\n• Recent models (1-3 years): ₹3,000-5,000\n• Older models (3-5 years): ₹1,500-3,000\n• Non-working laptops: ₹500-1,500\n\nWould you like to schedule a pickup? 💻",

  phone:
    "Smartphone values vary based on model and condition:\n• Recent models (1-3 years): ₹800-2,000\n• Older models: ₹200-800\n• Non-working phones: ₹100-300\n\nWe ensure secure data wiping for all devices! 📱",

  desktop:
    "Desktop computer values depend on specifications:\n• Recent systems: ₹1,500-3,000\n• Older systems: ₹800-1,500\n• Non-working: ₹500-1,000\n\nThis includes the CPU unit only. Monitors are priced separately. 🖥️",

  tv: 'TV recycling values vary by type:\n• LED/LCD (32"+): ₹500-2,000\n• CRT TVs: ₹200-500\n• Smart TVs: ₹1,000-2,500\n\nFree pickup available for TVs over 32 inches! 📺',

  // Collection Process
  collection:
    "Our collection process is simple:\n1️⃣ Schedule pickup via website/phone\n2️⃣ Our team arrives at your location\n3️⃣ We evaluate and weigh your e-waste\n4️⃣ Receive immediate payment\n\nWould you like to schedule a pickup?",

  pickup:
    "Yes! We offer free pickup service for:\n• Orders over 10kg\n• Large items (TVs, refrigerators)\n• Bulk collections\n\nWe're available 7 days a week! 🚛",

  schedule:
    "You can schedule a pickup in 3 ways:\n1. Click the 'Book a Pickup' button above\n2. Call us at 9967960193\n3. Email us at navnirman.ai@gmail.com\n\nWe'll confirm your slot within 2 hours! 📅",

  // Environmental Impact
  "environmental benefits":
    "Proper e-waste recycling prevents toxic materials from entering landfills and water sources, reducing pollution. It also conserves natural resources by recovering valuable metals and materials, reducing the need for mining. Additionally, it saves energy - recycling aluminum uses 95% less energy than producing it from raw materials.",

  // Laws and Regulations
  "e-waste laws":
    "In India, e-waste management is regulated under the E-Waste Management Rules, 2016 (amended in 2018). These rules implement the Extended Producer Responsibility (EPR) concept, making manufacturers responsible for collecting and properly disposing of end-of-life products.",

  // Website specific information
  "how to schedule":
    "You can schedule a pickup through our website by clicking on the 'Book a Pickup' button in the carousel or heading to the Services page. Alternatively, you can call us at the number in the footer.",
  rewards:
    "Our rewards program gives you points for each item recycled. These points can be redeemed for discounts on future services or exchanged for eco-friendly products in our rewards catalog. Check the 'Recycle and Earn' section for more details.",
  events:
    "We regularly organize e-waste collection drives and awareness workshops. You can find information about upcoming events or book an event for your organization by clicking on the 'Book an Event' link in the navigation menu.",

  // New Questions and Answers
  "business disposal":
    "Special services for businesses: 🏢\n• Bulk collection available\n• Corporate compliance certificates\n• Asset tracking and reporting\n• Regular pickup schedules\n• Volume-based pricing\n• Dedicated account manager\n\nContact us for corporate rates!",

  "recycling certificate":
    "Yes, we provide recycling certificates! 📄\n• Detailed inventory of items recycled\n• Weight and category breakdown\n• Environmental impact statement\n• Compliance documentation\n• Track your green initiatives\n\nPerfect for corporate compliance!",

  "payment methods":
    "We offer multiple payment options: 💳\n• Instant cash payment\n• Bank transfer\n• Digital wallets (PayTM, GPay)\n• Corporate invoicing\n• Reward points\n\nChoose what works best for you!",

  "warranty items":
    "For items under warranty: ⚠️\n• Check warranty status first\n• Contact manufacturer for replacement\n• We can guide you through the process\n• Free evaluation service\n• Responsible disposal if needed\n\nLet us help you make the right choice!",

  "bulk pickup":
    "Bulk pickup benefits: 📦\n• Free service for 10+ items\n• Priority scheduling\n• Better rates for large quantities\n• Same-day service available\n• Professional handling\n• Complete documentation\n\nIdeal for office clearance!",

  "ewaste impact":
    "Impact of improper e-waste disposal: 🌍\n• Soil contamination\n• Water pollution\n• Air quality issues\n• Health risks\n• Resource wastage\n• Climate change contribution\n\nLet's recycle responsibly!",

  "rewards program":
    "Join our rewards program: 🎁\n• Points for every item recycled\n• Additional bonus for referrals\n• Monthly recycling challenges\n• Special member rates\n• Exclusive eco-friendly products\n• Regular rewards updates\n\nStart earning today!",

  "corporate program":
    "Corporate recycling programs: 💼\n• Customized collection schedules\n• Volume-based pricing\n• Compliance reporting\n• Employee awareness workshops\n• CSR initiative support\n• Asset management services\n\nLet's discuss your requirements!",

  "recycling steps":
    "Our recycling process: ♻️\n1. Collection & Sorting\n2. Data Security Check\n3. Dismantling\n4. Material Separation\n5. Resource Recovery\n6. Eco-friendly Processing\n7. Documentation\n\nAll steps follow environmental guidelines!",

  "documents required":
    "Required documents: 📝\n• Valid ID proof\n• Address proof\n• Authorization letter (if corporate)\n• Item ownership proof\n• Warranty cards (if applicable)\n\nWe'll guide you through the process!",

  // Additional Questions and Answers
  "working hours":
    "Our service hours: ⏰\n• Monday to Saturday: 9:00 AM - 7:00 PM\n• Sundays: 10:00 AM - 5:00 PM\n• Emergency pickups available\n• Holiday schedule on website\n\nBook your preferred time slot!",

  "minimum quantity":
    "Minimum collection details: 📊\n• Regular pickup: No minimum\n• Free pickup: 5kg or more\n• Bulk rates: 10kg or more\n• Corporate pickup: Any quantity\n\nEvery item counts towards a greener future!",

  preparation:
    "How to prepare items for recycling: 📦\n• Remove personal data\n• Collect all accessories\n• Keep original packaging (if possible)\n• Separate batteries\n• Group similar items\n• List known issues\n\nNeed help? We can guide you!",

  "dangerous items":
    "Warning! These items need special handling: ⚠️\n• Damaged batteries\n• Broken screens\n• Water-damaged devices\n• Items with chemical leaks\n• Smoke-damaged electronics\n\nPlease inform us beforehand for safe handling!",

  "packing guidelines":
    "Packing tips for e-waste: 📦\n• Use original boxes if available\n• Wrap items separately\n• Secure loose parts\n• Label fragile items\n• Keep batteries separate\n• Don't use metallic wires\n\nNeed packing materials? Let us know!",

  "instant quote":
    "Get an instant quote by providing: 💭\n• Device type and brand\n• Age of device\n• Working condition\n• Physical condition\n• Accessories included\n\nShare details for accurate pricing!",

  "cancellation policy":
    "Pickup cancellation policy: ℹ️\n• Free cancellation 4 hours before\n• Reschedule anytime\n• No penalty first time\n• Inform via call/WhatsApp\n• Automatic rebooking option\n\nWe understand plans change!",

  "festival rates":
    "Special festival offers: 🎉\n• Diwali green drive\n• Christmas recycling bonus\n• New year special rates\n• Educational institution drives\n• Community collection events\n\nCheck current promotions!",

  "recycling myths":
    "Common recycling myths: 🤔\n• Myth: Data can be recovered\n• Truth: We use military-grade wiping\n• Myth: Small items don't matter\n• Truth: Every item is valuable\n• Myth: Recycling is costly\n• Truth: We offer competitive rates\n\nAsk us for facts!",

  certification:
    "Our Certifications: ✅\n• ISO 14001:2015\n• R2 Certification\n• E-waste License\n• Quality Management\n• Safety Standards\n• Environmental Compliance\n\nFully authorized recycler!",

  "community impact":
    "Our Community Impact: 💚\n• Jobs created: 100+\n• Trees saved: 10,000+\n• Water saved: 1M liters\n• Carbon reduced: 500 tons\n• Workshops: 200+\n• Lives impacted: 50,000+\n\nMaking a difference together!",
};

// Limit Gemini to only answer from knowledge base
const knowledgeOnlyInstruction = `
You are an e-waste assistant. Only answer based on the following knowledge base.
If a question is not related to e-waste or isn't in the knowledge base, reply with:
"I'm sorry, I can only answer e-waste-related questions."

Knowledge Base: ${knowledgeBase}}
`;

async function getGeminiResponse(userQuestion) {
  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" +
      GEMINI_API_KEY,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          { role: "user", parts: [{ text: knowledgeOnlyInstruction }] },
          { role: "user", parts: [{ text: userQuestion }] },
        ],
      }),
    }
  );

  const result = await response.json();
  return result.candidates?.[0]?.content?.parts?.[0]?.text || "No response.";
}
