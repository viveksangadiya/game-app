import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const PolicyPage = () => {
  return (
    <Container maxWidth="md" sx={{ padding: '24px 0' }}>
      {/* Privacy Policy Heading */}
      <Box sx={{ marginBottom: '24px' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Privacy Policy
        </Typography>
      </Box>

      {/* All Rummy App Privacy Policy Section */}
      <Box sx={{ marginBottom: '16px' }}>
        <Typography variant="h5" component="h2" gutterBottom>
        Indiluckgame Privacy Policy
        </Typography>
        <Typography variant="body1" gutterBottom>
          At Indiluckgame.com, accessible from http://indiluckgame.com/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Indiluckgame.com and how we use it.
        </Typography>
        <Typography variant="body1" gutterBottom>
          If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
        </Typography>
        <Typography variant="body1" gutterBottom>
          This Privacy Policy applies only to our online activities and is valid for visitors to our website regarding the information they shared and/or collected on Indiluckgame.com. This policy does not apply to any information collected offline or via channels other than this website.
        </Typography>
      </Box>

      {/* Consent Section */}
      <Box sx={{ marginBottom: '16px' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Consent
        </Typography>
        <Typography variant="body1" gutterBottom>
          By using our website, you hereby consent to our Privacy Policy and agree to its terms.
        </Typography>
      </Box>

      {/* Information Collection Section */}
      <Box sx={{ marginBottom: '16px' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Information We Collect
        </Typography>
        <Typography variant="body1" gutterBottom>
          The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
        </Typography>
        <Typography variant="body1" gutterBottom>
          If you contact us directly, we may receive additional information such as your name, email address, phone number, the contents of the message and/or attachments, and any other information you choose to provide.
        </Typography>
        <Typography variant="body1" gutterBottom>
          When you register for an account, we may ask for contact information, including name, company name, address, email, and phone number.
        </Typography>
      </Box>

      {/* Usage of Information Section */}
      <Box sx={{ marginBottom: '16px' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          How We Use Your Information
        </Typography>
        <Typography variant="body1" gutterBottom>
          We use the information we collect in various ways, including to:
        </Typography>
        <Typography component="ul">
          <Typography component="li">Provide, operate, and maintain our website</Typography>
          <Typography component="li">Improve, personalize, and expand our website</Typography>
          <Typography component="li">Understand and analyze how you use our website</Typography>
          <Typography component="li">Develop new products, services, features, and functionality</Typography>
          <Typography component="li">Communicate with you for customer service, updates, and marketing purposes</Typography>
          <Typography component="li">Send you emails</Typography>
          <Typography component="li">Prevent fraud</Typography>
        </Typography>
      </Box>

      {/* Log Files Section */}
      <Box sx={{ marginBottom: '16px' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Log Files
        </Typography>
        <Typography variant="body1" gutterBottom>
          Indiluckgame.com follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of their hosting services' analytics.
        </Typography>
        <Typography variant="body1" gutterBottom>
          The information collected by log files includes IP addresses, browser type, ISP, date and time stamp, referring/exit pages, and the number of clicks. These are not linked to any information that is personally identifiable.
        </Typography>
      </Box>

      {/* Advertising Partners Section */}
      <Box sx={{ marginBottom: '16px' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Advertising Partners Privacy Policies
        </Typography>
        <Typography variant="body1" gutterBottom>
          You may consult this list to find the Privacy Policy for each of the advertising partners of Indiluckgame.com.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Indiluckgame.com, sent directly to users' browsers.
        </Typography>
      </Box>

      {/* Contact Information Section */}
      <Box sx={{ marginBottom: '16px' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Contact Information
        </Typography>
        <Typography variant="body1" gutterBottom>
          Contact Us – PromotionKare@gmail.com
        </Typography>
        <Typography variant="body2" gutterBottom sx={{ fontStyle: 'italic', color: 'red' }}>
          Note: If you have an application company and want to promote your application, contact us using the email above to advertise on our website.
        </Typography>
      </Box>
    </Container>
  );
};

export default PolicyPage;
