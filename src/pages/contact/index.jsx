import { ContactHero } from "../../components/contactHero";
import { ContactMain } from "../../components/contactMain";
import { Layouts } from "../../components/layouts";

export const Contact = () => {
  return (
    <Layouts>
      <ContactHero />
      <ContactMain />
      <div className="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96678.76778807599!2d72.3196454!3d40.77936435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bc901d6b13d4ef%3A0xfc45bcaa7973dfac!2z0JDQvdC00LjQttCw0L0sINCQ0L3QtNC40LbQsNC90YHQutCw0Y8g0L7QsdC70LDRgdGC0Yw!5e0!3m2!1sru!2s!4v1708239065624!5m2!1sru!2s"
          width="1200"
          height="450"
          style={{border:0}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Layouts>
  );
};
