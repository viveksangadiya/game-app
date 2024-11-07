import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';

const Contact = () => {
  return (
    <Container maxWidth="md" sx={{ padding: '24px 0' }}>
      {/* Contact Us Heading */}
      <Box sx={{ marginBottom: '24px' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Contact Us
        </Typography>
      </Box>

      {/* Contact Information */}
      <Box sx={{ marginBottom: '16px' }}>
        <Typography variant="h5" component="h2" gutterBottom>
        Indiluckgame Contact Us
        </Typography>
        <Typography variant="body1" gutterBottom>
          This platform does not provide any support for the applications available here, as none of the apps or games are operated by us. For any assistance, please use the contact details available within the respective app to get support.
        </Typography>
      </Box>

      {/* Business Queries */}
      <Box sx={{ marginBottom: '16px' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Business Queries
        </Typography>
        <Typography variant="body1" gutterBottom>
          All Rummy App Business Cooperation
        </Typography>
        <Typography variant="body1" gutterBottom>
          If you wish to sponsor your app/game on our website, you can contact us using the following details:
        </Typography>

        {/* Contact Details Table */}
        <Box component="table" sx={{ width: '100%', marginTop: '16px', borderSpacing: '0 8px' }}>
          <Box component="thead">
            <Box component="tr">
              <Box component="th" sx={{ textAlign: 'left', paddingRight: '8px' }}>Title</Box>
              <Box component="th" sx={{ textAlign: 'left' }}>Link</Box>
            </Box>
          </Box>
          <Box component="tbody">
            <Box component="tr">
              <Box component="td" sx={{ textAlign: 'left', paddingRight: '8px' }}>Email</Box>
              <Box component="td" sx={{ textAlign: 'left' }}>
                <Link href="mailto:PromotionKare@gmail.com">PromotionKare@gmail.com</Link>
              </Box>
            </Box>
            <Box component="tr">
              <Box component="td" sx={{ textAlign: 'left', paddingRight: '8px' }}>Telegram</Box>
              <Box component="td" sx={{ textAlign: 'left' }}>
                <Link href="https://t.me/PromotionKare" target="_blank" rel="noopener noreferrer">@PromotionKare</Link>
              </Box>
            </Box>
          </Box>
        </Box>

        <Typography variant="body1" gutterBottom sx={{ marginTop: '8px' }}>
          You can contact us directly via the email/Telegram links provided above, and we can discuss business cooperation with you.
        </Typography>
      </Box>

      {/* Attention Notice */}
      <Box sx={{ marginBottom: '16px' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Attention Notice!
        </Typography>
        <Typography variant="body2" gutterBottom sx={{ fontStyle: 'italic', fontWeight: 'bold', color: 'red' }}>
          Notice: If you download any application from this website, always keep in mind that financial risk is involved. Avoid adding your money, as you might face losses, and you will be solely responsible for any such occurrence. [This is allowed for individuals 18+ years of age only.]
        </Typography>
      </Box>
    </Container>
  );
};

export default Contact;
