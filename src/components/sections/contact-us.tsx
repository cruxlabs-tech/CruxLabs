'use client';
import { facebookImage, instagramImage, linkedInImage, xImage } from '@/lib/constants';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { LucideIcon, Mail, MapPin, Phone, Send, User } from 'lucide-react';
import { InputHTMLAttributes, forwardRef } from 'react';

const socialLinks = [
  {
    title: 'Facebook',
    url: '/',
    image: facebookImage
  },
  {
    title: 'Linked In',
    url: '/',
    image: linkedInImage
  },
  {
    title: 'Instagram',
    url: '/',
    image: instagramImage
  },
  {
    title: 'X',
    url: '/',
    image: xImage
  }
];

export default function ContactUs() {
  return (
    <div className="mt-16 md:mt-32 lg:mt-40 bg-gray-800/40 md:px-10 py-20">
      <section className="cont rounded-lg text-gray-300" id="contact-us">
        <h3 className="section-title mb-20">
          <span>Join the</span> <span className="text-emerald-600">finest hands</span>{' '}
          <span>on the </span> <span className="text-emerald-600">market</span>
        </h3>
        <div className="grid space-y-16 md:grid-cols-2 md:space-y-0">
          <section className="flex flex-col">
            <div className="space-y-5">
              <h3 className="text-2xl font-medium">Contact us</h3>
              <a href="mailto:astogenesis.tech@gmail.com" className="flex items-center space-x-3">
                <Mail className="size-5" />
                <span>astrogenesis.tech@gmail.com</span>
              </a>
              <a href="telto:+9779845673174" className="flex items-center space-x-3">
                <Phone className="size-5" />
                <span>+977 9845673174</span>
              </a>
              <div className="flex items-center space-x-3">
                <MapPin className="size-5" />
                <span>Chitwan, Nepal</span>
              </div>
            </div>

            <div className="mt-auto pt-10">
              <h3 className="mb-5 text-2xl font-medium">Social Links</h3>
              <div className="flex items-center space-x-7">
                {socialLinks.map((link) => (
                  <a key={link.title} href={link.url}>
                    <img src={link.image} alt="image" className="size-7" />
                  </a>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h3 className="mb-5 text-2xl font-medium">Let us contact you</h3>
            <form className="flex flex-col space-y-7 md:max-w-96">
              <InputWithIcon
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name..."
                Icon={User}
                error=""
                label="Name"
              />
              <InputWithIcon
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email..."
                Icon={Mail}
                error=""
                label="Email"
              />
              <InputWithIcon
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone number..."
                Icon={Phone}
                error=""
                label="Phone"
              />
              <button
                type="submit"
                className="group flex h-10 w-full items-center justify-center space-x-3 self-end rounded-md bg-emerald-700 px-5 font-semibold hover:brightness-110"
              >
                <span>Submit</span>
                <Send className="size-5 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
              </button>
            </form>
          </section>
        </div>
      </section>
    </div>
  );
}

type InputWithIconProps = {
  Icon: LucideIcon;
  label: string;
  error: string | undefined;
} & InputHTMLAttributes<HTMLInputElement>;

const InputWithIcon = forwardRef<HTMLInputElement, InputWithIconProps>(function Component(
  { Icon, label, error, ...inputProps },
  ref
) {
  const [parentRef] = useAutoAnimate();
  return (
    <div ref={parentRef} className="flex flex-col space-y-1">
      <label htmlFor={inputProps.id} className="font-medium text-gray-300/80">
        {label}
      </label>
      <div
        className={
          'flex items-center space-x-3 rounded-md border-2 border-gray-700 px-3 focus-within:border-gray-500'
        }
      >
        <Icon className="size-5 text-gray-500" />
        <input
          {...inputProps}
          className={`py-2 font-medium text-gray-300 ${inputProps.className}`}
          ref={ref}
        />
      </div>
      {error && <p className="text-sm font-medium text-emerald-500">{error}</p>}
    </div>
  );
});
