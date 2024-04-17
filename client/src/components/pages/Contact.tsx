import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    document.title = document.title.split(' ')[0] + ' | Contact';
  }, []);
  return <div>Contact</div>;
};

export default Contact;
