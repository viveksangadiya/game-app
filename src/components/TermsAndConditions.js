import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const TermsAndConditions = () => {
  return (
    <Container maxWidth="md" sx={{ padding: '24px 0' }}>
      {/* Terms and Conditions Heading */}
      <Box sx={{ marginBottom: '24px' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Terms and Conditions
        </Typography>
      </Box>

      {/* Content Sections */}
      <Box sx={{ marginBottom: '16px' }}>
        <Typography variant="h5" component="h2" gutterBottom>
        Indiluckgame Terms and Conditions
        </Typography>
        <Typography variant="body1" gutterBottom>
          These terms and conditions outline the rules and regulations for the use of ARA Pvt Ltd.'s Website, located at allrummyapps.com. By accessing this website we assume you accept these terms and conditions. Do not continue to use Indiluckgame.Com if you do not agree to take all of the terms and conditions stated on this page.
        </Typography>
        <Typography variant="body1" gutterBottom>
          The terms "Client," "You," and "Your" refer to the users of this website who have agreed to the terms and conditions set forth by the Company. This terminology also applies to all other agreements: the "Terms and Conditions," the "Privacy Statement," the "Disclaimer Notice," and all related documents.
        </Typography>
      </Box>

      <Box sx={{ marginBottom: '16px' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Cookies
        </Typography>
        <Typography variant="body1" gutterBottom>
          We employ the use of cookies. By accessing Indiluckgame.Com, you agreed to use cookies in agreement with ARA Pvt Ltd.'s Privacy Policy.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website.
        </Typography>
      </Box>

      <Box sx={{ marginBottom: '16px' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          License
        </Typography>
        <Typography variant="body1" gutterBottom>
          Unless otherwise stated, ARA Pvt Ltd. and/or its licensors own the intellectual property rights for all material on Indiluckgame.Com. All intellectual property rights are reserved. You may access this from Indiluckgame.Com for your own personal use subjected to restrictions set in these terms and conditions.
        </Typography>
        <Typography variant="body1" gutterBottom>
          You must not republish material from Indiluckgame.Com, sell, rent or sub-license material, or reproduce, duplicate, or copy material from Indiluckgame.Com.
        </Typography>
      </Box>

      <Box sx={{ marginBottom: '16px' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Comments
        </Typography>
        <Typography variant="body1" gutterBottom>
          Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas. ARA Pvt Ltd. does not filter, edit, publish or review Comments prior to their presence on the website.
        </Typography>
      </Box>

      <Box sx={{ marginBottom: '16px' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Hyperlinking to our Content
        </Typography>
        <Typography variant="body1" gutterBottom>
          We may consider and approve other link requests from various types of organizations, including government agencies, search engines, and news organizations.
        </Typography>
      </Box>

      <Box sx={{ marginBottom: '16px' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Content Liability
        </Typography>
        <Typography variant="body1" gutterBottom>
          We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are arising on your Website.
        </Typography>
      </Box>

      <Box sx={{ marginBottom: '16px' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Disclaimer
        </Typography>
        <Typography variant="body1" gutterBottom>
          To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website.
        </Typography>
        <Typography variant="body2" gutterBottom sx={{ fontStyle: 'italic', fontWeight: 'bold', color: 'red' }}>
          Notice: This website includes information for users over 18 years of age only. If you decide to use these applications, financial risks are involved, and any losses incurred are your responsibility.
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsAndConditions;
