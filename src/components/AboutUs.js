import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const AboutUs = () => {
  return (
    <Container maxWidth="md" sx={{ padding: '24px 0' }}>
      {/* About Us Heading */}
      <Box sx={{ marginBottom: '24px' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          About Us
        </Typography>
      </Box>

      {/* Content Section */}
      <Box sx={{ marginBottom: '16px' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          All Rummy App About
        </Typography>
        <Typography variant="body1" gutterBottom>
          हमारे इस वेब साइट को बनाने सबसे बड़ा उद्देश्य आप लोगो तक Online पैसे कमाने वाली All Rummy App को डाउनलोड कराना है, जिससे आप लोग इसे वेबसाइट के माध्यम से उन सभी Best Rummy Apps को डाउनलोड कर पाएंगे, और उनकी सारी गमे की Update जो अभी के समय में New Launch हो रहे हों।
        </Typography>
      </Box>

      <Box sx={{ marginBottom: '16px' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          All Rummy App Search
        </Typography>
        <Typography variant="body1" gutterBottom>
          इसके लिए आप लोग गूगल पे AllRummyApps.Com सर्च करेंगे, और No.1 वाले लिंक पर क्लिक करके हमारे इस वेबसाइट के पेज पर आ जाएंगे। उसके बाद आप All Rummy Apps को डाउनलोड कर पाएंगे।
        </Typography>
        <Typography variant="body2" gutterBottom sx={{ fontStyle: 'italic', fontWeight: 'bold', color: 'red' }}>
          Notice: इस वेबसाइट पर दिया गया कोई भी एप्लीकेशन हमारे द्वारा Launch नहीं किया गया है, और ये सभी App हमारा नहीं है, हम इसकी सिर्फ जानकारी आपलोगों तक पहुचाते है, तो अगर आप लोगों इनमे कोई भी प्रॉब्लम आती है तो हम इसके Responsible नहीं होंगे।
        </Typography>
      </Box>

      <Box sx={{ marginBottom: '16px' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Our Reliability
        </Typography>
        <Typography variant="body1" gutterBottom>
          हमारा यह Platform की शुरुआत April 2022 से AllRummyApp.Com पर हुई थी, जिसके बाद किसी तकनीकी खराबी के कारण यह अचानक हमारे देश(भारत) मे खुलना बंद हो जाता है, जिसके बाद मुझे अपने इस वेबसाईट को 07 February 2023 को AllRummyApps.Com पर Sift करना पड़ा।
        </Typography>
        <Typography variant="body1" gutterBottom>
          तब से लेकर अभी तक आपलोग के प्यार और सपोर्ट की वजह से हमारा यह Platform आपलोगों तक लगातार New Rummy App की अपडेट सबसे पहले पहुचाता रहा है, और बहुचाता रहेगा। जिसके लिए आप हमारे इस Website पर प्रतिदिन Visit कर सकते है।
        </Typography>
      </Box>

      <Box sx={{ marginBottom: '16px' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          पैसे कमाने के स्रोत
        </Typography>
        <Typography variant="body1" gutterBottom>
          जब आप All Rummy App List में से किसी भी APK को डाउनलोड करेंगे तो आपको ₹05, ₹20, ₹41, ₹51, ₹65 ... जैसे बोनस हर एक App मे मिलते है। जिनसे आप Game Play करके कमाई की जाती है, लेकिन इसमे अपना अपने ज्यादा Real Cash मत जोड़िएगा, क्योंकि आपको नुकसान हो सकता है।
        </Typography>
        <Typography variant="body1" gutterBottom>
          दूसरा इसमें आप अपने किसी Friend/Member को Invite करके काफी अच्छी Affiliate Income कर सकते है, जो की पैसे कमाने का सबसे अच्छा जरिया हैं।
        </Typography>
      </Box>

      <Box sx={{ marginBottom: '16px' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Attention Notice!
        </Typography>
        <Typography variant="body2" gutterBottom sx={{ fontStyle: 'italic', fontWeight: 'bold', color: 'red' }}>
          Notice: इस वेबसाइट पर उपस्थित किसी भी प्रकार की Application को अगर आप लोग डाउनलोड करते हैं, तो हमेशा इस बात का ध्यान रहे कि उसमें Financial Risk शामिल है और अपने पैसे को जोड़ने से बचे, वरना आप लोग नुकसान के शिकार हो सकते हैं, ऐसा होने पर उसका Responsible आप खुद होंगे। [This Allowed 18+ Years of Age Only.]
        </Typography>
      </Box>
    </Container>
  );
};

export default AboutUs;
