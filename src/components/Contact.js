import React from 'react';

const Contact = () => {
  return (
    <div style={styles.container}>
      {/* Contact Us Section */}
      <section style={styles.section}>
        <h2>Contact Us</h2>
        <p>
          <strong>All Rummy App Contact Us</strong> <br />
          This platform does not provide any support for the applications available here, as none of the apps or games are operated by us. For any assistance, please use the contact details available within the respective app to get support.
        </p>
      </section>

      {/* Business Queries Section */}
      <section style={styles.section}>
        <h2>Business Queries</h2>
        <p>
          <strong>All Rummy App Business Cooperation</strong> <br />
          If you wish to sponsor your app/game on our website, you can contact us using the following details:
        </p>
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Email</td>
              <td><a href="mailto:PromotionKare@gmail.com">PromotionKare@gmail.com</a></td>
            </tr>
            <tr>
              <td>Telegram</td>
              <td><a href="https://t.me/PromotionKare">@PromotionKare</a></td>
            </tr>
          </tbody>
        </table>
        <p>
          You can contact us directly via the email/Telegram links provided in the table, and we can discuss business cooperation with you.
        </p>
      </section>

      {/* Attention Notice Section */}
      <section style={styles.section}>
        <h2>Attention Notice!</h2>
        <p>
          <strong>All Rummy App Attention</strong> <br />
          <strong>Notice:</strong> If you download any application from this website, always keep in mind that financial risk is involved. Avoid adding your money, as you might face losses, and you will be solely responsible for any such occurrence. [This is allowed for individuals 18+ years of age only.]
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  section: {
    marginBottom: '20px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '10px',
  },
  th: {
    textAlign: 'left',
    padding: '10px',
    backgroundColor: '#f2f2f2',
  },
  td: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
};

export default Contact;
