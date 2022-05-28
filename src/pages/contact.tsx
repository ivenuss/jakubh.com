import ContactInfo from '~/modules/contact/ContactInfo';
import ContactForm from '~/modules/contact/ContactForm';
import Container from '~/ui/Container';
import PageHeading from '~/ui/PageHeading';
import type { NextPage } from 'next';

const Contact: NextPage = () => {
  return (
    <Container
      meta={{
        title: 'Contact / Jakub Habrcetl',
        description: 'This is a place where you can contact me.'
      }}
    >
      <div className="w-full max-w-screen-xs mx-auto px-6 mb-12">
        <PageHeading
          title="Contact"
          description="Did I catch your attention? Let's talk."
        />

        <ContactInfo />
        <ContactForm />
      </div>
    </Container>
  );
};

export default Contact;
