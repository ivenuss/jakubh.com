import Container from '~/ui/Container';
import PageHeading from '~/ui/PageHeading';
import ContactInfo from '~/modules/contact/ContactInfo';
import ContactForm from '~/modules/contact/ContactForm';
import type { NextPage } from 'next';

const Contact: NextPage = () => {
  return (
    <Container
      meta={{
        title: 'Contact / Jakub Habrcetl',
        description: 'This is a place where you can contact me.'
      }}
    >
      <div className="mx-auto mb-12 w-full max-w-screen-xs px-6">
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
