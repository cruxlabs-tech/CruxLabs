import { poppins } from '@/lib/fonts';
import { Star } from 'lucide-react';

const testimonials: { username: string; stars: number; review: string }[] = [
  {
    username: 'Ronit Adhikari',
    stars: 5,
    review:
      'Strongly recommend Astrogenesis Technologies to those seeking for great quality website from supportive agency.'
  },
  {
    username: 'Bibek Bhattarai',
    stars: 5,
    review:
      'Looking for a digital dashboard or an online e-commerce management system. Join them, as they have got the finest hands on the market.'
  },
  {
    username: 'Prajol Pandey',
    stars: 5,
    review:
      'Best decision to choose Astrogenesis Technologies. Our website was fast, reliable and our all of our users loved that.'
  }
];
export default function Testimonials() {
  return (
    <section className="cont my-16 md:my-32 lg:my-40" id="testimonial">
      <h3 className="section-title">
        <span>We are</span> <span className="text-emerald-600">Loved</span> &{' '}
        <span className="text-emerald-600">Trusted</span> <span>by our</span>{' '}
        <span className="text-emerald-600">Clients</span>
      </h3>

      <section className={`${poppins.className} mt-12 grid text-center lg:grid-cols-3`}>
        {testimonials.map((testimonial, i) => (
          <div key={i} className="m-7 flex flex-col items-center">
            <div className="flex space-x-2">
              {new Array(testimonial.stars).fill('nothing').map((_, i) => (
                <Star key={i} className="size-8 fill-yellow-500 text-yellow-500 " />
              ))}
            </div>
            <p className="my-5 text-xl">{testimonial.review}</p>
            <p className="mt-auto text-lg font-medium text-gray-200">{testimonial.username}</p>
          </div>
        ))}
      </section>
    </section>
  );
}
