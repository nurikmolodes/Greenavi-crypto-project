'use client';

import AboutUsSection from '@/components/mainPage/Section/Section';
import B2b from '@/components/mainPage/b2b/B2b';
import Work from '@/components/mainPage/work/Work';
import Join from '@/components/mainPage/join/Join';
import Advantages from '@/components/mainPage/advantages/Advantages';
import Container from '@/components/mainPage/container/Container';
import Provide from '@/components/mainPage/provide/Provide';
import Start from '@/components/mainPage/start/Start';
import Question from '@/components/mainPage/question/Question';
import Calculator from '@/components/mainPage/calculator/Calculator';
import Footer from '@/components/common/footer/Footer';
import { Hero } from '@/components/Hero/Hero';

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>

      <section>
        <Container>
          <AboutUsSection />
        </Container>
      </section>

      <section>
        <Container>
          <B2b />
        </Container>
      </section>

      <section>
        <Container>
          <Work />
        </Container>
      </section>

      <section>
        <Container>
          <Advantages />
        </Container>
      </section>

      <section>
        <Container>
          <Provide />
        </Container>
      </section>

      <section>
        <Container>
          <Calculator />
        </Container>
      </section>

      <section>
        <Container>
          <Start />
        </Container>
      </section>

      <section>
        <Container>
          <Question />
        </Container>
      </section>

      <Join />

      <footer>
        <Footer />
      </footer>
    </>
  );
}
